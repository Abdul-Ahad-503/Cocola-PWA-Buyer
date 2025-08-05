import React from "react";
import IMAGES from "../Constants";

const serviceCategories = [
  {
    title: "House Keeping",
    listings: 20,
    image: IMAGES.services1,
  },
  {
    title: "Gardening",
    listings: 20,
    image: IMAGES.services2,
  },
  {
    title: "Fashion Designing",
    listings: 20,
    image: IMAGES.services3,
  },
  {
    title: "Electronics Repair",
    listings: 20,
    image: IMAGES.services4,
  },
  {
    title: "Errand Running",
    listings: 20,
    image: IMAGES.services5,
  },
  {
    title: "Janitorial Services",
    listings: 20,
    image: IMAGES.services6,
  },
  {
    title: "Car Washing",
    listings: 20,
    image: IMAGES.services7,
  },
  {
    title: "Design Services",
    listings: 20,
    image: IMAGES.services8,
  },
];

const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      {/* Container with max width constraint */}
      <div className="max-w-[1280px] mx-auto px-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-black">Service Categories</h1>
          <button className="bg-[#E53E3E] text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-red-600 transition-colors">
            View All Services
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-8 gap-4">
          {serviceCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow cursor-pointer w-[153px] h-[170px]"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="h-[110px] w-full object-cover"
              />
              <div className="p-3 flex-1 flex flex-col justify-center">
                <h2 className="font-semibold text-sm text-black mb-1 leading-tight">{cat.title}</h2>
                <p className="text-gray-400 text-xs">{cat.listings} Listings</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
