"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'next/navigation';

function page() {
    let {cid}=useParams()
    let [post, setPost]=useState([])
    useEffect(()=>{
        axios.get(`https://bankingkhabar.com/wp-json/wp/v2/posts?categories=${cid}`)
        .then(res => {
          setPost(res.data);
        });
    },[cid])
  return (
    <section>
   
    <div className="container mx-auto">
    <h3 className='text-center border-b-2'><div className="text-2xl font-bold py-2 "> {cid.title}</div></h3> 
   <div className="flex gap-5 flex-wrap">
   {post.map(a=>(
     <>
  <div className='p-3 w-[32.2%]'>
    
    <Link href={`/details/${a.id}`}>
    <img className='h-[250px] object-cover' src={a.featured_image_src} alt="" />
  <h1 className='text-2xl text-red-600 font-bold py-2'>{a.title.rendered}</h1></Link>
  </div>
    </>
))}
 </div>
 </div>
   </section>
  )
}

export default page
