import React from "react";

function App() {
  const stores = [
    {
      name: "Amazon",
      url: "https://www.amazon.in",
      img: "/images/amazon.png",
    },
    {
      name: "Flipkart",
      url: "https://www.flipkart.com",
      img: "/images/flipkart.png",
    },
    {
      name: "Myntra",
      url: "https://www.myntra.com",
      img: "/images/myntra.png",
    },
    {
      name: "Ajio",
      url: "https://www.ajio.com",
      img: "/images/ajio.png",
    },
    {
      name: "JioMart",
      url: "https://www.jiomart.com",
      img: "/images/jiomart.png",
    },
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <h1 className="text-4xl font-bold">Super Shopping Hub</h1>
        <p className="text-lg mt-3">
          Shop from all your favorite stores in one place
        </p>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 rounded-full text-gray-700 w-1/2"
          />
        </div>
      </div>

      {/* Store Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
        {stores.map((store, index) => (
          <a
            key={index}
            href={store.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-md rounded-xl p-4 hover:scale-105 transform transition duration-300 flex flex-col items-center"
          >
            <img src={store.img} alt={store.name} className="h-16 mb-3" />
            <span className="font-medium">{store.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
