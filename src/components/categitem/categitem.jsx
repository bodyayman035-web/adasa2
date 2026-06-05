import React from 'react'

export default function categitem({item,handleCateg,currentCategory}) {
  return (
    <li onClick={()=>handleCateg(item)}className={` ${currentCategory==item?"bg-amber-500":""} cursor-pointer`}>{item}</li>


  )
}
