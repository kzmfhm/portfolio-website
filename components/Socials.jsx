import Link from "next/link"
import {FaGithub,FaLinkedinIn,FaFigma, FaTwitter} from "react-icons/fa"


const socials = [
  {icons: <FaGithub/>, path:'https://github.com/kzmfhm/portfolio-website'},
  {icons: <FaLinkedinIn/>, path:'https://www.linkedin.com/in/khuzaima-n-658b98268/'},
  {icons: <FaTwitter/>, path:''},
  {icons: <FaFigma/>, path:'https://www.figma.com/files/team/1304670062254728131/recents-and-sharing/recently-viewed?fuid=1241374001239227732'}
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