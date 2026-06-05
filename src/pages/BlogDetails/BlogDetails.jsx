import React from "react";
import { useParams } from "react-router-dom";
import data from "../../../posts.json";


export default function BlogDeatails() {

  const { posts } = data

  const { id } = useParams()

  const mypost = posts.find((item) => item.id == id)

  console.log(mypost)
  console.log(id)

  
    return (
  <>
    
    <section className="relative h-[90vh] w-full overflow-hidden">
     
      <img
        src={mypost.image}
        alt={mypost.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      
      <div className="absolute inset-0 bg-black/70" />

     
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        
        <span className="mb-4 px-4 py-1 text-sm rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30">
          {mypost.category}
        </span>

        
        <h1 className="text-3xl md:text-5xl font-extrabold max-w-3xl leading-tight">
          {mypost.title}
        </h1>

        
        <div className="flex items-center gap-4 mt-6 text-sm text-gray-300">
          <img
            src={mypost.author.avatar}
            alt={mypost.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-right">
            <p className="font-semibold text-white">
              {mypost.author.name}
            </p>
            <p className="text-xs text-gray-400">
              {mypost.date} • {mypost.readTime}
            </p>
          </div>
        </div>
      </div>
    </section>

    
    <section className="max-w-5xl mx-auto px-4 py-20">
      <article className="prose prose-invert prose-orange max-w-none">
        {mypost.content.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </article>

      
      <div className="flex flex-wrap gap-3 mt-10">
        {mypost.tags.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-1 text-sm rounded-full bg-zinc-800 text-gray-300 border border-zinc-700"
          >
            #{tag}
          </span>
        ))}
      </div>
    </section>
  </>
)

  
}
