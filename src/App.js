import React from "react";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-yellow-400 text-black font-bold text-center py-4 text-2xl shadow-md">
        🛍️ Shopping SuperApp
      </header>

      {/* Hero Banner */}
      <div className="relative">
        <img
          src="/images/hero.jpg"
          alt="Hero"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Big Sale is Live!</h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-screen-lg mx-auto p-4">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full p-3 rounded-full shadow-md border border-gray-200 mb-6"
        />

        {/* Categories */}
        <h2 className="text-xl font-bold mb-3">🛒 Shop by Category</h2>
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { name: "Myntra", img: "/images/myntra.png" },
            { name: "Amazon", img: "/images/amazon.png" },
            { name: "Flipkart", img: "/images/flipkart.png" },
            { name: "Ajio", img: "/images/ajio.png" },
          ].map((store) => (
            <div
              key={store.name}
              className="bg-white rounded-xl shadow p-4 flex flex-col items-center hover:scale-105 transition-transform"
            >
              <img src={store.img} alt={store.name} className="w-14 h-14 object-contain" />
              <p className="mt-2 font-medium">{store.name}</p>
            </div>
          ))}
        </div>

        {/* Featured Deals (Horizontal Scroll) */}
        <h2 className="text-xl font-bold mb-4">🔥 Featured Deals</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {[
            { name: "Marvel Tee", price: "₹318", img: "/images/marveltee.png" },
            { name: "Oppo Pad", price: "₹14,990", img: "/images/oppopad.png" },
            { name: "Nike Shoes", price: "₹3,499", img: "/images/nike.png" },
            { name: "Smart Watch", price: "₹1,299", img: "/images/watch.png" },
          ].map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl shadow-md p-4 min-w-[200px] flex-shrink-0 flex flex-col items-center hover:scale-105 transition-transform"
            >
              <img src={item.img} alt={item.name} className="w-32 h-32 object-contain" />
              <h3 className="mt-2 font-semibold">{item.name}</h3>
              <p className="text-orange-600 font-bold">{item.price}</p>
              <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 w-full flex justify-around bg-white shadow-md py-3 border-t">
        <button className="flex flex-col items-center text-yellow-600">
          🏠 <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center text-pink-500">
          ❤️ <span className="text-xs">Wishlist</span>
        </button>
        <button className="flex flex-col items-center text-yellow-600">
          💰 <span className="text-xs">Rewards</span>
        </button>
        <button className="flex flex-col items-center text-purple-500">
          👤 <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
}

export default App;
