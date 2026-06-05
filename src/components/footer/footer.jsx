import React from "react";
import { FaYoutube, FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="from-black via-[#1a120b] to-black text-gray-300 mt-20">
      
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-lg text-xl font-bold">ع</span>
            <h2 className="text-2xl font-bold text-white">عدسة</h2>
          </div>
          <p className="text-sm leading-relaxed">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
            المحترفين ونصائح عملية لتطوير مهاراتكم.
          </p>

          <div className="flex gap-3 mt-5">
            <span className="p-3 bg-[#222] rounded-lg cursor-pointer hover:bg-orange-500 transition"><FaYoutube /></span>
            <span className="p-3 bg-[#222] rounded-lg cursor-pointer hover:bg-orange-500 transition"><FaLinkedinIn /></span>
            <span className="p-3 bg-[#222] rounded-lg cursor-pointer hover:bg-orange-500 transition"><FaGithub /></span>
            <span className="p-3 bg-[#222] rounded-lg cursor-pointer hover:bg-orange-500 transition"><FaXTwitter /></span>
          </div>
        </div>

      
        <div>
          <h3 className="text-white font-bold mb-4 relative after:block after:w-6 after:bg-orange-500 after:mt-2">
            استكشف
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">الرئيسية</li>
            <li className="hover:text-white cursor-pointer">المدونة</li>
            <li className="hover:text-white cursor-pointer">من نحن</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-bold mb-4 relative after:block after:w-6  after:bg-orange-500 after:mt-2">
            التصنيفات
          </h3>
          <ul className="space-y-2 text-sm">
            <li>إضاءة</li>
            <li>بورتريه</li>
            <li>مناظر طبيعية</li>
            <li>تقنيات</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-bold mb-4 relative after:block after:w-6  after:bg-orange-500 after:mt-2">
            إبقى على اطلاع
          </h3>
          <p className="text-sm mb-4">
            اشترك للحصول على أحدث المقالات والتحديثات.
          </p>

          <input
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
            className="w-full mb-3 px-4 py-2 rounded-lg bg-[#111] border border-gray-700 focus:outline-none"
          />
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full transition">
            اشترك
          </button>
        </div>
      </div>

      
      <div className="border-t border-gray-700 py-4 px-6 text-sm flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex gap-4">
          <span className="hover:text-white cursor-pointer">سياسة الخصوصية</span>
          <span className="hover:text-white cursor-pointer">شروط الخدمة</span>
        </div>

        <p>
          © 2026 عدسة. صنع بكل <span className="text-orange-500"></span> جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
}
