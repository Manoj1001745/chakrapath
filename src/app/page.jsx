"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductByCat from './comp/ProductByCat';
import ProductByData from './comp/ProductByData';



export default function Home() {
  let [post, setPost]=useState([])
useEffect(()=>{
    axios.get(`https://bankingkhabar.com/wp-json/wp/v2/posts`)
    .then(res => {
      setPost(res.data);
    });
},[])
  return (
   <>
   <section className='py-3'>
    <div className="container mx-auto">
      <img className='w-[1000px] mx-auto' src="https://bankingkhabar.com/wp-content/uploads/2019/03/prabhumoney.gif" alt="" />
    </div>
   </section>

<section className='py-4'>
     <div className="container mx-auto justify-center">
       <img className='w-[500px] mx-auto' src="https://bankingkhabar.com/wp-content/uploads/2025/02/800-x-200-gif%20new.gif" alt="" />
     </div>
   </section>

{post.slice(0,2).map(a=>(

  <section key={a.id} className='py-4'>
   
    <div className="container mx-auto text-center border-2 ">
      <div className='p-4 my-3 py-4'>
      <h1 className='text-5xl text-black font-bold p-4 bg-blue-600 rounded-2xl'>{a.title.rendered}</h1>
      <img className='w-full object-cover rounded-2xl py-3' src={a.featured_image_src} alt="" />
      {/* <p className='text-black p-4'>{a.excerpt.rendered}</p> */}
      </div>
    </div>
  </section>
))}



<section className='py-4'>
  <div className="container mx-auto justify-center">
    <img className='w-[900px] mx-auto ' src="https://chakrapath.com/wp-content/uploads/2024/12/1000-x-100-1-768x77.gif" alt="" />
  </div>
</section>


<section className='py-5'>
  <div className="container mx-auto justify-center">
    <img className='w-[700px] mx-auto ' src="https://chakrapath.com/wp-content/uploads/2024/12/610-4-1-GIF-Laxmi-sunrise-TVc_-720x80px.gif" alt="" />
  </div>
</section>

{/* {post.slice(1,4).map(a=>(

<section className='py-4'>
  <div className="container mx-auto">
    <div className='relative'>
    <img className='w-full h-[300px] object-cover' src={a.featured_image_src} alt="" />
   <div className="w-full h-full absolute start-0 top-0 flex justify-center items-center">
    <h1 className='text-5xl font-bold text-white'>{a.title.rendered}</h1>  </div>
  
  </div>
  </div>
</section>
))} */}

{post.slice(3, 7).map(a => (
     <section key={a.id} className='py-5'>
       <div className="container mx-auto">
         <div className='relative'>
           <img className='w-full h-[300px] object-cover rounded-2xl' src={a.featured_image_src} alt="" />
           <div className="w-full h-full absolute start-0 top-0 flex justify-center items-center">
             <h1 className='text-5xl font-bold text-white'>{a.title.rendered}</h1>
           </div>
         </div>
       </div>
     </section>
   ))}


<section>
  <div className="container mx-auto justify-center">
    <img className='w-[700px] mx-auto ' src="https://bankingkhabar.com/wp-content/uploads/2025/02/800-x-200-gif%20new.gif" alt="" />
  </div>
</section>

<section className='py-4'>
  <div className="container mx-auto justify-center">
    <img className='w-[750px] mx-auto ' src="https://bankingkhabar.com/wp-content/uploads/2019/03/prabhumoney.gif" alt="" />
  </div>
</section>



<section>

<ProductByCat id={2} title="अन्तरवार्ता" /> 

</section>
<section className='py-4'> 
  <div className="container mx-auto justify-center">
    <img className='w-[700px] mx-auto' src="https://chakrapath.com/wp-content/uploads/2024/12/noc-2080-768x89.gif" alt="" />
  </div>
</section>




{/* <ProductByCat id={89} title="अर्थ" />
<ProductByCat id={86} title="कोरोना अपडेट" />
<ProductByCat id={206} title="घर-जग्गा" />
<ProductByCat id={92} title="दशैं बिशेष" />
<ProductByCat id={3} title="दृष्टिकोण" /> */}



<section className='py-4'> 
  <div className="container mx-auto justify-center">
    <img className='w-[500px] mx-auto' src="https://bankingkhabar.com/wp-content/uploads/2025/02/900x150.gif" alt="" />
  </div>
</section>
<ProductByData id={86} title="कोरोना अपडेट" />
<ProductByCat id={89} title="अर्थ" />
<ProductByCat id={86} title="कोरोना अपडेट" />

<section className='py-4'> 
  <div className="container mx-auto justify-center">
    <img className='w-[700px] mx-auto' src="https://i0.wp.com/chakrapath.com/wp-content/uploads/2024/12/slogan-banner.jpeg?w=1600&ssl=1" alt="" />
  </div>
</section>
   </>
  );
}

