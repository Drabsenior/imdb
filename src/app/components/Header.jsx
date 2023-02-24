import MenuItem from "./MenuItem"
import {HiHome} from 'react-icons/hi'
import {BsInfoCircleFill} from 'react-icons/bs'
import Link from "next/link"
const Header = () => {
  return (
    <div className="flex items-center max-w-6xl justify-between mx-2 sm:mx-auto py-6">
        <div className="flex ">
         <MenuItem Icon={HiHome} title="HOME" address="/"/>
         <MenuItem Icon={BsInfoCircleFill} title="ABOUT" address="/about"/>
        </div>
        <div>
        <Link href="/">
            <h2><span className="font-bold bg-amber-500 rounded-lg px-2 py-1 mr-1">IMDb</span><span className="text-xl hidden sm:inline">clone</span></h2>
        </Link>
        </div>
    </div>
  )
}

export default Header