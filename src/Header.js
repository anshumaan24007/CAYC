import React from 'react'
import "./Header.css"
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from '@mui/material';



function Header() {
  return (
    <div className="socialHandleContainer">
        <IconButton>
        <YouTubeIcon className="header__icon youtube"/>           
        </IconButton>
        <IconButton>
        <InstagramIcon className="header__icon insta"/>           
        </IconButton>
        <IconButton>
        <TwitterIcon className="header__icon tweet"/>           
        </IconButton>
    </div>
  )
}

export default Header