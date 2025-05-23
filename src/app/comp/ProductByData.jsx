"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from "axios";


function ProductByData(props) {
    let [data, setData]=useState([])
    useEffect(()=>{
        axios.get(`https://bankingkhabar.com/wp-json/wp/v2/posts?categories=${props.id}`)
        .then(res => {
          setData(res.data);
        });
    },[props.id])
  return (
    <>
   
   
   
    {/* 
    <section>
    <div className="container mx-auto">
     <h3 className='text-center border-b-2'><div className="text-2xl font-bold py-2 "> {props.title}</div></h3> 
   <div className="flex">
   {post.slice(0,4).map(a=>(
     <>
  <div className='p-3 '>
    <img className='h-[250px] object-cover' src={a.featured_image_src} alt="" />
  <h1 className='text-2xl text-black font-bold p-2'> <Link href={`/details/${a.id}`}>{a.title.rendered}</Link></h1>
  </div>
    </>
))}
 </div>
 </div>

   </section> */}


<section>
   
   <div className="container mx-auto p-3">
    <h3 className='text-center border-b-2'><div className="text-4xl font-bold py-2 text-red-800 bg-gray-950"> समाचार</div></h3> 
  <div className="flex py-3">
  <div className="border-r-1 w-[50%]">
  {data.slice(0,5).map(a=>(
    <>
 <div className='p-3 flex '>
   <img className='h-[50px] object-cover' src={a.featured_image_src} alt="" />
 <h1 className='text-1xl text-red-800 font-bold p-2'> <Link href={`/details/${a.id}`}>{a.title.rendered}</Link></h1>
 </div>
   </>
))}
</div>
<div className=" border-r-1 w-[50%]">
{data.slice(3,8).map(a=>(
    <>
 <div className='p-3 flex '>
   <img className='h-[50px] object-cover' src={a.featured_image_src} alt="" />
 <h1 className='text-1xl text-red-800 font-bold p-2'> <Link href={`/details/${a.id}`}>{a.title.rendered}</Link></h1>
 </div>
   </>
))}
</div>
<div className=" ">
{data.slice(6,10).map(a=>(
    <>
 <div className='p-3 flex '>
   <img className='h-[50px] object-cover' src={a.featured_image_src} alt="" />
 <h1 className='text-1xl text-red-800 font-bold p-2'> <Link href={`/details/${a.id}`}>{a.title.rendered}</Link></h1>
 </div>
   </>
))}
</div>

</div>
</div>
  </section>
   </>
  )
}

export default ProductByData