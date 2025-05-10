import React from 'react'
import { TiHeartFullOutline } from "react-icons/ti";
import { MdAccountCircle } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdSave } from "react-icons/io";

const SearchReceipe = () => {
  return (
    <div className='w-full min-h-screen absolute top-0 left-0 right-0 bottom-0'>
      <div className="w-full flex flex-col">

        {/* Navbar */}
        <nav className="w-full flex justify-between items-center p-4 border-b shadow-sm rounded-xl">
          <div className="text-3xl font-bold text-neutral-900">
            FLA<span className="text-amber-500">VORIZ</span>
          </div>
          <div className="w-[60%] flex items-center justify-end gap-3">
            <div className="relative w-[60%]">
              <input 
                type="text"
                placeholder="Search..."
                className="w-full border border-neutral-900 rounded-full px-4 py-2 pr-10 text-sm focus:ring-amber-500 focus:outline-none"
              />
              <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-900 text-xl" />
            </div>
<IoMdSave className='text-3xl'/>
                <TiHeartFullOutline className="text-3xl text-amber-500" />
            
            <MdAccountCircle className="text-3xl" />
          </div>
        </nav>

        {/* Recipes Grid */}
        <section className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Single Recipe Card */}
          {[ 
            { title: "Fresh Salad", img: "R1.jpg", rating: "4.5" },
            { title: "Vegetable Biryani", img: "R6.jpg", rating: "4.0" },
            { title: "Korean Kimchi", img: "R2.jpg", rating: "4.7" },
            { title: "Noodles with Veggie", img: "R4.jpg", rating: "3.9" },
            { title: "Cheesecake", img: "R5.jpg", rating: "5.0" },
            { title: "Tropical Smoothie", img: "R7.jpg", rating: "4.2" },
          ].map((recipe, idx) => (
            <div key={idx} className="w-full flex flex-col items-center justify-center bg-orange-50 rounded-xl p-4 shadow-xl gap-2 hover:scale-105 transition ease-in-out hover:bg-amber-100 relative">
              
              {/* Heart Icon at Top Right (Over Image) */}
              <div className="absolute top-8 right-8 text-3xl text-white">
                <TiHeartFullOutline />
              </div>

              {/* Recipe Image */}
              <img src={recipe.img} alt={recipe.title} className="w-full h-80 object-cover rounded-md mb-4" />

              {/* Recipe Title and Rating */}
              <div className="w-full flex justify-between items-center mb-2">
                <h3 className="text-2xl font-semibold text-neutral-900">{recipe.title}</h3>
                <div className="text-sm text-neutral-500">{recipe.rating} ⭐</div>
              </div>

            </div>
          ))}
        </section>

      </div>
    </div>
  )
}

export default SearchReceipe;
