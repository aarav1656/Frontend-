import React from "react";
import Navbar from "./components/Navbar.js";
import Swipebody from "./components/body.js";
import UploadButtons from "./components/upload.js";
import { Asset } from "./components/livepeer.tsx";



function App () {
  return(
      <div>
        <Navbar />
        <Swipebody />
        <Asset />
      </div>
  )
}
export default App;