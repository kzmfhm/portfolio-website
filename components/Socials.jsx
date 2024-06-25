import Link from "next/link"
import {FaGithub,FaLinkedinIn, FaTwitter} from "react-icons/fa"


const socials = [
  {icons: <FaGithub/>, path:''},
  {icons: <FaLinkedinIn/>, path:''},
  {icons: <FaTwitter/>, path:''}
]
const Socials = ({iconStyles,containerStyles}) => {
  
  return (
    <div className={containerStyles}>
      {socials.map((item,index) => {
        return <Link href={item.path} key={index} className={iconStyles}>{item.icons}</Link>
      })}
    </div>
  )
}

export default Socials