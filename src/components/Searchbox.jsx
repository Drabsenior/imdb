'use client'
import  { useState } from 'react'
import { useRouter } from 'next/navigation'
const Searchbox = () => {
    const [search,setSearch]=useState()
    const router = useRouter()
    const handleSubmit = (e)=>{
      e.preventDefault()
      if(!search) return 
      router.push(`/search/${search}`)
    }
  return (
    <form className='flex items-center justify-between max-w-6xl mx-auto px-3' onSubmit={handleSubmit}>
        <input type="text"  value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search keywords...' className='bg-transparent outline-none w-full h-14 rounded-sm placeholder-gray-500 flex-1'/>
        <button type="submit" className='text-amber-500 disabled:text-gray-500' disabled={!search}>Search</button>
    </form>
  )
}

export default Searchbox