'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'


const page = () => {

    const [products , setProducts] = useState([])

useEffect(()=>{
    getdata()
},[])

async function getdata() {
  await axios.get('https://fakestoreapi.com/products?limit=5')
  .then((res)=>{
    console.log(res.data)
    setProducts(res.data)
  }).catch((error)=>{
    console.log(error)
  })    
}


  return (
    <>
    <div>
        <h1>Client side</h1>
        {products.map((v,index)=>{
         return (<>
         <div key={index}>
         <h2 >{v?.title}</h2>
         <img width={100} height={100} src={v?.image} alt="" />
         <button onClick={()=>{alert(v?.price)}}>check price</button>
         </div>
        
         </>)
        
        })}
    </div>
    </>
  )
}

export default page