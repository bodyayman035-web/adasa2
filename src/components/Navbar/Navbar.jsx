import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const loc = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        
        <div className="flex items-center gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-2 rounded-full text-sm">
            ابدأ القراءة
          </button>

          <FaSearch className="text-gray-400 cursor-pointer hover:text-white transition" />
        </div>

       
        <div className="bg-[#111] rounded-full p-1 flex gap-1">
          <NavLink
            to="/"
            className={`px-5 py-2 rounded-full text-sm transition
              ${loc.pathname === "/" ? "bg-orange-500 text-white" : "text-gray-300 hover:text-white"}
            `}
          >
            الرئيسية
          </NavLink>

          <NavLink
            to="blog"
            className={`px-5 py-2 rounded-full text-sm transition
              ${loc.pathname === "/blog" ? "bg-orange-500 text-white" : "text-gray-300 hover:text-white"}
            `}
          >
            المدونة
          </NavLink>

          <NavLink
            to="about"
            className={`px-5 py-2 rounded-full text-sm transition
              ${loc.pathname === "/about" ? "bg-orange-500 text-white" : "text-gray-300 hover:text-white"}
            `}
          >
            من نحن
          </NavLink>
        </div>

       
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-white">عدسة</h2>
          <span className="text-orange-500 text-sm">عالم التصوير الفوتوغرافي</span>
        </div>

      </div>
    </nav>
  );
}
