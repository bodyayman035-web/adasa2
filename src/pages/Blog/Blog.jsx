import React from "react"

import data from "../../../posts.json"
import { Lia500Px } from 'react-icons/lia'
import CategItem from '../../components/categitem/categitem'
import { FaListUl } from 'react-icons/fa'
import { IoGrid } from 'react-icons/io5'
import { useState } from "react"
import Pagination from "../../components/Pagination/Pagination"
import { Link } from "react-router-dom";
import BlogDeatails from "../BlogDetails/BlogDetails"


export default function Blog() {

  
  const {categories,posts} = data
const [display, setdisplay] = useState("grid")
const [currentCategory, setcurrentCategory] = useState("الكل")
const [search, setsearch] = useState("")
const [currentPage, setcurrentPage] = useState(1)

function handleCateg(value){
  setcurrentCategory(value)
}

function handlePages(value){
  setcurrentPage(value)
}


const filtration = posts.filter((item) => {
  return currentCategory == item.category || currentCategory == "الكل"
}).filter((item)=>{
  return item.title.includes(search)
})


const numberOfpages = Math.ceil(filtration.length / 6)

  const allCateg = [...categories.map((item)=> item.name), "الكل"]






const lastIndex = currentPage * 6
const fiestIndex = lastIndex - 6
const finalPosts = filtration.slice(fiestIndex, lastIndex)


  return (


 <section className="relative py-24 text-center">
    
      <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full 
                       bg-orange-500/10 text-orange-500 border border-orange-500/20">
        المدونة
      </span>

      
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        استكشف <span className="text-orange-500">مقالاتنا</span>
      </h1>

     
      <p className="max-w-xl mx-auto text-gray-400 text-sm md:text-base">
        اكتشف أحدث المقالات، النصائح، وأسرار التصوير الفوتوغرافي
        لمساعدتك على تطوير مهاراتك
      </p>
 
   

      


<div className='my-5'>

  <div className='flex flex-row-reverse justify-between items-center'>



    <ul className='flex flex-row-reverse gap-7'>
      {allCateg.map((item)=><CategItem currentCategory={currentCategory} handleCateg={handleCateg} key={item} item={item}/>)}
    </ul>

<input
 value={search} onChange={(e)=>setsearch(e.target.value)}
 type="text"
  className="border-2 rounded-2xl border-amber-300 p-2"
  placeholder="بحث"
/>

  </div>




</div>

<div className='py-5 flex justify-between items-center'>

  <span>عدد المقالات {posts.length}</span>

  <div className='flex gap-3'>
    <FaListUl
      onClick={() => setdisplay("list")}
      className={`cursor-pointer ${display=="list" ? "bg-amber-600" : ""}`}
      size={24}
    />

    <IoGrid
      onClick={() => setdisplay("grid")}
      className={`cursor-pointer ${display=="grid" ? "bg-amber-600" : ""}`}
      size={24}
    />

  </div>


</div>

<div className="py-6">
  <div className="grid gap-7 grid-cols-3">

    {finalPosts.map((item) => (
      <div
        key={item.id}
        className={`bg-amber-950 flex ${
          display === "grid"
            ? "flex-col"
            : "flex-row col-span-3"
        }`}
      >
        <Link to={`/blog/${item.id}`}>

  <img
          src={item.image}
          className={`${
            display === "grid"
              ? "w-full h-48 object-cover"
              : "w-1/2 object-cover"
          }`}
          alt=""
        />

        <div className="p-4 text-white">
          <h3 className="text-lg">{item.title}</h3>
        </div>
</Link>
      
      </div>
    ))}

  </div>
</div>



<div>

  <Pagination
    currentPage={currentPage}
    handlePages={handlePages}
    numberOfpages={numberOfpages}
  />

</div>



    </section>
  )
}

