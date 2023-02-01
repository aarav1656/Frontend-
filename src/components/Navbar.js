import React from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Nav = styled.div`
    flex: 1;
    background-color: black;
    height: auto;
    position: sticky;
    top: 0;
`

const Wrapper = styled.div`
    display: flex;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
`

const Img = styled.img`
  height: 55px;
`;

const Item = styled.div`
    cursor: pointer;  
    color: white;
    display: flex;
    margin-left: 50px;
    margin-top: 20px;
`
const Navbar = () => {
  return (
    <Nav>
        <Wrapper>
            <Logo>
                <Img src="https://media.discordapp.net/attachments/1033079854826000484/1069812782343659580/payview-logo-removebg-preview.jpg" alt="" />
            </Logo>
        
            <Item>
                Solutions 
                <ExpandMoreIcon />
            </Item>
            <Item>
                Features
                <ExpandMoreIcon />
            </Item>
            <Item>
                Resources 
                <ExpandMoreIcon />
            </Item>
            <Item>
                Watch
                <ExpandMoreIcon />
            </Item>
            <Item>
                Pricing
            </Item>
        </Wrapper>
    </Nav>
  )
}

export default Navbar