import Link from "next/link"

const MenuItem = ({title,Icon,address}) => {
    console.log(title,Icon,address)
  return (
    <div>
        <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-500">
            <Icon className="text-2xl mx-4 sm:hidden"/>
            <p className="hidden sm:inline text-sm">{title}</p>
        </Link>
    </div>
  )
}

export default MenuItem