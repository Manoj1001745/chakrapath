"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from "axios";




function Header() {
let [cat, setCat]=useState([])
useEffect(()=>{
    axios.get(`https://bankingkhabar.com/wp-json/wp/v2/categories`)
    .then(res => {
        setCat(res.data);
    });
},[])
  
  return (
    <>
    <header className='p-3'>
    
    <div className="container mx-auto justify-center">
        <Link href="/">
    <img className='w-[800px] mx-auto ' src="https://i0.wp.com/chakrapath.com/wp-content/uploads/2025/01/prabhu-advt-Final.webp?w=1250&ssl=1" alt="" /></Link>
  </div>
  <div className="container mx-auto justify-center py-2">
    <Link href="/">
<img className='w-[300px] mx-auto' src="https://chakrapath.com/wp-content/themes/chakrapath/img/logo.png" alt="" /></Link></div>

    </header>


    <nav className=' text-black bg-red-700'>
        <div className="container mx-auto ">
            <ul className='flex justify-center gap-5 font-bold text-2xl p-2 '> 
                {cat.map(a=>(
                    <li className='gap-5 box-border font-bold text-1xl p-2' key={a.id}><Link href={`/category/${a.id}`}>{a.name}</Link></li>
                ))}
                
            </ul>
        </div>
    </nav>


    <section className='p-2 border-b-2'>
    <div className="container mx-auto flex justify-end  p-2">
<p>
Wednesday, Sep 19, 2025 </p>
<span className='bg-red-700 text-white'> 3:54:47 PM</span>


<hr />
</div>
       

    </section>



    <section className='py-2'>
    <div className="container mx-auto justify-center">
        <Link href="/">
    <img className='w-[700px] mx-auto ' src="https://i0.wp.com/chakrapath.com/wp-content/uploads/2025/01/prabhu-advt-Final.webp?w=1250&ssl=1" alt="" /></Link>
  </div>
    </section>
    
    </>
  )
}

export default Header