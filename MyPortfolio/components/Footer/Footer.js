import { Button } from '../Button/Button'
import './Footer.css'

export const Footer = () => `
<p>Copyright © 2023 All Rights Reserved by Carlos Romo<span class="cr-span">.</span></p>
<div>
    ${Button("https://res.cloudinary.com/dqip8uhet/image/upload/v1679652732/gorjeo_x13asp.png", "Twitter")}
    ${Button("https://res.cloudinary.com/dqip8uhet/image/upload/v1679652732/github_qqcjiq.png", "GitHub")}
    ${Button("https://res.cloudinary.com/dqip8uhet/image/upload/v1679652732/instagram_efptou.png", "Instagram")}
    ${Button("https://res.cloudinary.com/dqip8uhet/image/upload/v1679652732/simbolo-de-la-aplicacion-de-facebook_zj7es4.png", "Facebook")}
    </div>
`