import { useCreateAsset } from '@livepeer/react';
 
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
 
export const CreateAndViewAsset = () => {
  const [video, setVideo] = useState<File | undefined>();
  const {
    mutate: createAsset,
    data: asset,
    status,
    progress,
    error,
  } = useCreateAsset(
    video
      ? {
          sources: [{ name: video.name, file: video }] as const,
        }
      : null,
  );
 
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0 && acceptedFiles?.[0]) {
      setVideo(acceptedFiles[0]);
    }
  }, []);
 
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'video/*': ['*.mp4'],
    },
    maxFiles: 1,
    onDrop,
  });
 
  const progressFormatted = useMemo(
    () =>
      progress?.[0].phase === 'failed'
        ? 'Failed to process video.'
        : progress?.[0].phase === 'waiting'
        ? 'Waiting'
        : progress?.[0].phase === 'uploading'
        ? `Uploading: ${Math.round(progress?.[0]?.progress * 100)}%`
        : progress?.[0].phase === 'processing'
        ? `Processing: ${Math.round(progress?.[0].progress * 100)}%`
        : null,
    [progress],
  );
 
  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag and drop or browse files</p>
      </div>
 
      {createError?.message && <p>{createError.message}</p>}
 
      {video ? <p>{video.name}</p> : <p>Select a video file to upload.</p>}
      {progressFormatted && <p>{progressFormatted}</p>}
 
      <button
        onClick={() => {
          createAsset?.();
        }}
        disabled={!createAsset || createStatus === 'loading'}
      >
        Upload
      </button>
    </>
  );
};