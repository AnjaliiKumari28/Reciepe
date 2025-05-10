import React, { useState } from 'react';
import { FiEdit, FiTrash, FiHeart, FiPlus, FiMail, FiUser } from 'react-icons/fi';
import { TiHeartFullOutline } from "react-icons/ti";
import { MdAccountCircle } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdSave } from "react-icons/io";

const Profile = () => {
  const [tab, setTab] = useState('my');

  const name = 'Rahul Verma';
  const email = 'rahul.verma@gmail.com';
  const gender = 'Male';

  const dummyRecipes = [
    {
      id: 1,
      name: 'Spicy Paneer Tikka',
      image:
        'https://img.freepik.com/free-photo/stewed-white-beans-sliced-pumpkin-tomato-sauce_2829-19775.jpg',
      likes: 152,
      description: 'Grilled paneer cubes marinated in spicy yogurt sauce.',
    },
    {
      id: 2,
      name: 'Classic Butter Chicken',
      image:
        'https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg',
      likes: 231,
      description: 'Rich creamy butter chicken cooked to perfection.',
    },
  ];

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  const totalLikes = dummyRecipes.reduce((acc, recipe) => acc + recipe.likes, 0);

  return (
    <div className="min-h-screen bg-amber-50 pb-20 absolute left-0 right-0 top-0 bottom-0">
      {/* Navbar */}
     {/* Navbar */}
     <nav className="w-full flex justify-between items-center p-4 border-b shadow-sm bg-white  rounded-xl">
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

      {/* Profile Info */}
      <div className="max-w-6xl mx-auto px-4 mt-10 space-y-10">
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-wrap gap-6 items-start justify-between relative">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-amber-500 text-white text-2xl md:text-4xl font-bold flex items-center justify-center rounded-full shadow-md">
              {initials}
            </div>
            <div className="space-y-2 min-w-[200px]">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">{name}</h2>
              <p className="flex items-center text-sm text-gray-600 gap-2">
                <FiMail /> {email}
              </p>
              <p className="flex items-center text-sm text-gray-600 gap-2">
                <FiUser /> Gender: {gender}
              </p>
              <div className="flex gap-4 mt-2 text-sm font-medium text-gray-700 flex-wrap">
                <span className="flex items-center gap-1">
                  🍲 Recipes: {dummyRecipes.length}
                </span>
                <span className="flex items-center gap-1">
                  <FiHeart className="text-amber-600" /> {totalLikes} Likes
                </span>
              </div>
            </div>
          </div>

          {/* Add Recipe Button */}
          <div className="absolute bottom-4 left-4 md:static mt-4 md:mt-0">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 shadow transition text-sm">
              <FiPlus className="text-lg" /> Add Recipe
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 text-sm font-semibold flex-wrap">
          {['my', 'saved', 'liked'].map((key) => (
            <button
              key={key}
              className={`px-6 py-2 rounded-full border transition ${
                tab === key
                  ? 'bg-amber-600 text-white border-amber-600 shadow'
                  : 'bg-white text-gray-800 border-gray-300 hover:border-amber-400 hover:text-amber-700'
              }`}
              onClick={() => setTab(key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)} Recipes
            </button>
          ))}
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dummyRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-72 object-cover rounded-t-xl"
              />
              <div className="p-5 space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-800">{recipe.name}</h3>
                  <div className="flex items-center text-amber-600 gap-1 text-sm font-medium">
                    <FiHeart /> {recipe.likes}
                  </div>
                </div>
               <div className='flex justify-start'>
               <p className="text-gray-600 text-sm">{recipe.description}</p>
               </div>

                {tab === 'my' && (
                  <div className="flex gap-3 mt-4">
                    <button className="flex items-center gap-1 px-3 py-1 rounded-full text-sm text-white bg-blue-500 hover:bg-blue-600 transition">
                      <FiEdit /> Edit
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1 rounded-full text-sm text-white bg-red-500 hover:bg-red-600 transition">
                      <FiTrash /> Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
