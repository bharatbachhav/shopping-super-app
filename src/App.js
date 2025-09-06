import React, { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("Amazon");

  const stores = [
    { name: "Amazon", url: "https://www.amazon.in" },
    { name: "Flipkart", url: "https://www.flipkart.com" },
    { name: "Myntra", url: "https://www.myntra.com" },
    { name: "Ajio", url: "https://www.ajio.com" },
  ];

  const activeStore = stores.find((store) => store.name === activeTab);

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header */}
      <header className="bg-yellow-400 p-4 text-center text-xl font-bold shadow-md">
        🛍️ Shopping SuperApp
      </header>

      {/* Tabs */}
      <div className="flex justify-around bg-white shadow-md">
        {stores.map((store) => (
          <button
            key={store.name}
            onClick={() => setActiveTab(store.name)}
            className={`flex-1 py-3 font-semibold transition-colors ${
              activeTab === store.name
                ? "text-yellow-600 border-b-4 border-yellow-500"
                : "text-gray-500"
            }`}
          >
            {store.name}
          </button>
        ))}
      </div>

      {/* Store View */}
      <div className="flex-1">
        <iframe
          src={activeStore.url}
          title={activeStore.name}
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
}
