import React from 'react';
import { TiHeartFullOutline } from "react-icons/ti";
import { MdAccountCircle } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdSave } from "react-icons/io";

const Recipe = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 absolute left-0 right-0 top-0 bottom-0">

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center p-4 border-b shadow-sm rounded-xl bg-white">
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
          <IoMdSave className='text-3xl' />
          <TiHeartFullOutline className="text-3xl text-amber-500" />
          <MdAccountCircle className="text-3xl" />
        </div>
      </nav>

      {/* Main Content Section */}
      <div className="w-full flex flex-col p-6 gap-8">

        {/* Dish Image and Info */}
        <div className="w-full flex flex-col lg:flex-row gap-8">
          {/* Left: Image */}
          <div className="w-full lg:w-[60%] h-[300px] lg:h-[500px] bg-gray-300 rounded-xl overflow-hidden">
            <img src="R1.jpg" alt="Fresh Salad with Tahini Sauce" className="w-full h-full object-cover" />
          </div>

          {/* Right: Info */}
<div className="w-full lg:w-[40%]">
  <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-start gap-8">

    {/* Dish Name & Rating */}
    <div className='flex flex-col items-start gap-3'>
      <h1 className="text-3xl font-bold text-neutral-900">Fresh Salad with Tahini Sauce</h1>
      <p className="text-lg text-yellow-500 mt-2">4.5 ⭐</p>
    </div>

    {/* Contributor & Likes */}
    <div className='flex flex-col items-start gap-3'>
      <div className='flex justify-start gap-4'>
        <p className="text-xl font-semibold text-amber-500">Contributor :</p>
        <p className="text-lg font-semibold text-neutral-900">John Doe</p>
      </div>
      <p className="text-md text-neutral-700">❤️ 120 Likes</p>
    </div>

    {/* Description */}
    <div className='flex flex-col items-start gap-3'>
      <h2 className="text-xl font-semibold text-amber-500">Description</h2>
      <div className='flex flex-col items-start'>
      <p className="text-md text-neutral-900 ">
        Fresh Salad with Tahini Sauce is a light, healthy, and
      </p>
      <p className='text-md text-neutral-900'>delicious salad that includes a variety of fresh vegetables</p>
      <p className='text-md text-neutral-900'>like lettuce, tomatoes, cucumbers, and radishes.</p>
      </div>
    </div>

    {/* Ingredients */}
    <div className='flex flex-col items-start justify-center gap-3'>
      <h2 className="text-xl font-semibold text-amber-500">Ingredients</h2>
     <div className='flex flex-col items-start gap-1'>
     <p className='text-md text-neutral-900'>
        Lettuce, Tomatoes, Cucumbers, Radishes, Tahini,
      </p>
      <p className='text-md text-neutral-900'> Lemon Juice, Garlic, Water, Salt, Pepper</p>
     </div>
    </div>

  </div>
</div>

        </div>

        {/* Steps Section */}
        <div className='flex flex-col gap-6'>
          <div className="flex flex-col bg-white p-6 rounded-xl shadow-lg items-start justify-center gap-4">
            <h2 className="text-xl font-semibold text-amber-600 mb-2">Steps</h2>
            <ol className="list-none pl-6 space-y-4 text-md text-neutral-900">
              {[
                "In a large bowl, mix lettuce, cucumbers, tomatoes, and radishes.",
                "In a separate small bowl, whisk together tahini, lemon juice, garlic, and water until smooth.",
                "Pour the tahini dressing over the salad and toss well to coat the vegetables.",
                "Season with salt and pepper to taste. Optionally, add chopped fresh herbs like parsley or cilantro.",
                "Serve immediately and enjoy!"
              ].map((step, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white font-semibold">{idx + 1}</div>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Similar Recipes Section */}
          <section className="w-full p-6 bg-white rounded-xl shadow-lg mt-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-8">Similar Recipes</h2>
            <div className="flex overflow-x-auto space-x-8 pb-4">
              {[
                { img: "R1.jpg", title: "Fresh Salad", description: "A light, healthy, and refreshing salad with a creamy tahini dressing." },
                { img: "R6.jpg", title: "Vegetable Biryani", description: "A flavorful mix of rice, vegetables, and spices, perfect for a hearty meal." },
                { img: "R2.jpg", title: "Korean Kimchi", description: "A spicy, tangy fermented dish made with cabbage and chili peppers." },
                { img: "R4.jpg", title: "Noodles with Veggie", description: "Stir-fried noodles with an assortment of fresh vegetables and savory sauces." },
                { img: "R5.jpg", title: "Cheesecake", description: "A creamy, smooth, and indulgent dessert with a buttery crust." },
                { img: "R7.jpg", title: "Tropical Smoothie", description: "A refreshing smoothie made with tropical fruits like mango, pineapple, and coconut." }
              ].map((recipe, idx) => (
                <div key={idx} className="flex-none w-64 bg-gray-200 p-4 rounded-xl shadow-md transition ease-in-out">
  <div className="w-full h-40 overflow-hidden rounded-md mb-4">
    <img
      src={recipe.img}
      alt={recipe.title}
      className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
    />
  </div>

                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{recipe.title}</h3>
                  <p className="text-sm text-neutral-700">{recipe.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
