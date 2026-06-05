import React from "react";
import data from "../../../posts.json"
import { Link } from "react-router-dom";

export default function Home() {
  const { posts, categories } = data;

  const featuredPosts = posts.filter((p) => p.featured).slice(0, 2);
  const latestPosts = posts.slice(0, 3);

  return (
    <main className="pt-28 text-white">

      
      <section className="text-center py-24">
        <h1 className="text-5xl font-bold mb-4">
          اكتشف فن <span className="text-orange-500">التصوير الفوتوغرافي</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          مدونة متخصصة في عالم التصوير، نشارك معكم خبرات المحترفين ونصائح عملية
        </p>

        <div className="flex justify-center gap-4">
          <Link className="bg-orange-500 px-6 py-3 rounded-full font-bold">
            ابدأ القراءة
          </Link>
          <button className="border border-gray-700 px-6 py-3 rounded-full">
            تصفح المقالات
          </button>
        </div>

        <div className="flex justify-center gap-6 mt-10">
          <div className="bg-zinc-900 px-6 py-4 rounded-xl"> 28 مقال</div>
          <div className="bg-zinc-900 px-6 py-4 rounded-xl"> 15 كاتب</div>
          <div className="bg-zinc-900 px-6 py-4 rounded-xl"> +500 قارئ</div>
        </div>
      </section>

      
      <section className="py-20 border-t border-zinc-800">
        <h2 className="text-3xl font-bold text-center mb-12">
          مقالات مختارة
        </h2>

        <div className="max-w-5xl mx-auto grid gap-6">
          {featuredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-zinc-900 rounded-2xl overflow-hidden flex flex-col md:flex-row"
            >
              <img
                src={post.image}
                className="md:w-1/2 object-cover"
                alt={post.title}
              />

              <div className="p-6 flex flex-col justify-between">
                <div>
                  <span className="text-orange-500 text-sm">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mt-3">
                    {post.excerpt}
                  </p>
                </div>

                <Link
                  to={`/blog/${post.id}`}
                  className="text-orange-500 mt-4"
                >
                  اقرأ المزيد 
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

     
      <section className="py-20 border-t border-zinc-800 text-center">
        <h2 className="text-3xl font-bold mb-10">
          استكشف حسب الموضوع
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-zinc-900 px-8 py-6 rounded-xl w-40"
            >
              <h3 className="font-bold text-lg">{cat.name}</h3>
              <p className="text-gray-400 text-sm mt-2">
                {cat.count} مقالات
              </p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="py-20 border-t border-zinc-800">
        <h2 className="text-3xl font-bold text-center mb-12">
          أحدث المقالات
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <div
              key={post.id}
              className="bg-zinc-900 rounded-xl overflow-hidden"
            >
              <img
                src={post.image}
                className="h-48 w-full object-cover"
                alt={post.title}
              />

              <div className="p-5">
                <span className="text-orange-500 text-sm">
                  {post.category}
                </span>

                <h3 className="font-bold mt-2">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.id}`}
                  className="text-orange-500 block mt-4"
                >
                  اقرأ المزيد 
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
