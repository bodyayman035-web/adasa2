import React from 'react'

export default function Pagination({ numberOfpages, handlePages, currentPage }) {
  return (
    <>
      <ul className='flex gap-5 justify-center py-3'>
        {
          Array.from({ length: numberOfpages }, (_, i) =>
            <li
              onClick={() => handlePages(i + 1)}
              className={`${currentPage == i + 1 ? "bg-amber-400" : ""} border-2 p-2 cursor-pointer`}
            >
              {i + 1}
            </li>
          )
        }
      </ul>
    </>
  )
}
