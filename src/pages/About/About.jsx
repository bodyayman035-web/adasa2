import React from "react";
import data from "../../../posts.json"

export default function About() {
  const { posts, siteInfo } = data;

  
  const authors = [
    ...new Map(
      posts.map((p) => [p.author.name, p.author])
    ).values(),
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6">

     
      <section className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-orange-500 text-sm tracking-widest">من نحن</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          مهتمون في الإبداع والإلهام
        </h1>
        <p className="text-gray-400 mt-6 leading-loose">
          {siteInfo.description}
        </p>
      </section>

      
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-24">
        <Stat title="مقال" value={posts.length} />
        <Stat title="كاتب" value={authors.length} />
        <Stat title="تصنيف" value={data.categories.length} />
        <Stat title="سنوات خبرة" value="+5" />
      </section>

      
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          تعرف على فريقنا
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {authors.map((author, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-xl p-6 text-center hover:scale-105 transition"
            >
              <img
                src={author.avatar}
                alt={author.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold">{author.name}</h3>
              <p className="text-orange-500 text-sm mt-1">
                {author.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


function Stat({ title, value }) {
  return (
    <div className="bg-[#111] rounded-xl p-6 text-center">
      <h3 className="text-3xl font-bold text-orange-500">{value}</h3>
      <p className="text-gray-400 mt-2">{title}</p>
    </div>
  );
}
