"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from "axios";


function ProductByCat(props) {
    let [post, setPost]=useState([])
    useEffect(()=>{
        axios.get(`https://bankingkhabar.com/wp-json/wp/v2/posts?categories=${props.id}`)
        .then(res => {
          setPost(res.data);
        });
    },[props.id])
  return (
    <>
   
   <section>
   
    <div className="container mx-auto py-4">
     <h3 className=' text-center border-b-2 p-2'><div className="text-4xl font-bold py-2 text-red-800 bg-black "> {props.title}</div></h3> 
   <div className=" gap-3 box-b flex py-4">
   {post.slice(0,4).map(a=>(
     
  <div className='py-3 border-2 g-3' >
    <img className='h-[250px] object-cover img-1' src={a.featured_image_src} alt="" />
  <h1 className='text-2xl text-red-800 font-bold p-2'> <Link href={`/details/${a.id}`}>{a.title.rendered}</Link></h1>
  </div>
    
))}
 </div>
 </div>

   </section>
<hr />
   </>
  )
}

export default ProductByCat