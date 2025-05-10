import React from 'react';
import { TiHeartFullOutline } from "react-icons/ti";
import { MdAccountCircle } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdSave } from "react-icons/io";


const Home = () => {
  return (
    <div className='w-full min-h-screen  absolute top-0 left-0 right-0 bottom-0 '>
        <div className="w-full flex flex-col">

{/* Navbar */}
<nav className="w-full flex justify-between items-center p-4 border-b shadow-sm  rounded-xl">
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

{/* Hero Section */}
<section className="flex flex-col md:flex-row items-start justify-start rounded-xl px-8 py-36 bg-cover bg-center bg-[url('/img1.jpg')] text-white">
  <div className="text-left max-w-xl">
    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
      Explore <span className="text-amber-600">Culinary</span> Insights
    </h1>
  </div>
</section>

{/* Filter Buttons */}
<section className="text-center py-10">
  <h2 className="text-3xl font-bold mb-6">
    What to <span className="text-amber-500">Cook?</span>
  </h2>
  <div className="flex flex-wrap justify-center gap-4 ">
    {[
      "All Types", "Appetizers", "Main Courses", "Salads & Sides", "Vegetarian Delights",
      "International Flavors", "Desserts & Sweets", "Healthy Eats", "Quick & Easy Supper"
    ].map((category, idx) => (
      <button
        key={idx}
        className="px-4 py-2 border border-neutral-300 rounded-full text-sm font-medium bg-orange-50 hover:scale-110 transition ease-in-out hover:bg-amber-500 hover:text-white"
      >
        {category}
      </button>
    ))}
  </div>
</section>
<section className="px-10 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    { title: "Fresh Salad with Tahini Sauce", img: "R1.jpg", likes: "250+" },
    { title: "Classic Vegetable Biryani", img: "R6.jpg", likes: "150+" },
    { title: "Sour & Spicy Korean Kimchi", img: "R2.jpg", likes: "200+" },
    { title: "Flat Noodles with Veggie", img: "R4.jpg", likes: "200+" },
    { title: "Classic Cheesecake Supreme Fantasy", img: "R5.jpg", likes: "250+" },
    { title: "Island Breeze Tropical Smoothie", img: "R7.jpg", likes: "150+" },
  ].map((recipe, idx) => (
    <div key={idx} className="flex flex-col items-center bg-orange-50 rounded-xl p-4 shadow-xl gap-4 hover:scale-105 transition ease-in-out">
  {/* Recipe Title */}
  <h3 className="text-xl font-semibold text-center text-neutral-900">{recipe.title}</h3>

  {/* Image with likes at top-right */}
  <div className="relative w-full">
    <img src={recipe.img} alt={recipe.title} className="w-full h-80 object-cover rounded-md" />
    {recipe.likes && (
      <div className="absolute top-2 right-2 bg-white text-neutral-900 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
        ❤️ {recipe.likes}
      </div>
    )}
  </div>

  {/* Button */}
  <button className="w-full bg-neutral-900 text-white py-2 rounded-full hover:bg-amber-500 transition">
    See Complete Recipe
  </button>
</div>

  ))}
</section>

{/* Footer Section */}
{/* Footer Section */}
<footer className="w-full py-10 bg-neutral-900 text-white">
  <div className="w-full max-w-screen-xl mx-auto px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">

      {/* FLAORIZ Logo */}
      <div className="text-3xl font-bold mb-6">
        FLA<span className="text-amber-500">VORIZ</span>
      </div>

      {/* Company Section */}
      <div>
        <div className="text-xl font-semibold mb-4">Company</div>
        <div className="space-y-4">
          <a href="#" className="block hover:text-amber-500">About Us</a>
          <a href="#" className="block hover:text-amber-500">Our Stories</a>
          <a href="#" className="block hover:text-amber-500">Work with Us</a>
          <a href="#" className="block hover:text-amber-500">User Testimonials</a>
        </div>
      </div>

      {/* Support Section */}
      <div>
        <div className="text-xl font-semibold mb-4">Support</div>
        <div className="space-y-4">
          <a href="#" className="block hover:text-amber-500">FAQ</a>
          <a href="#" className="block hover:text-amber-500">Membership</a>
          <a href="#" className="block hover:text-amber-500">User Policy</a>
          <a href="#" className="block hover:text-amber-500">Customer Support</a>
        </div>
      </div>

      {/* Contact Section */}
      <div>
        <div className="text-xl font-semibold mb-4">Contact</div>
        <div className="space-y-4">
          <div>Phone No</div>
          <div>Email Address</div>
         <div>Social Media</div>
          <div>Company Location</div>
        </div>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="mt-10 text-center text-sm text-neutral-400">
      <p>&copy; 2025 FLAVORIZ. All rights reserved.</p>
    </div>
  </div>
</footer>



</div>

    </div>
  );
};

export default Home;
