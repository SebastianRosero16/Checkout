'use client';

import { useState } from 'react';

export default function Home() {
  const [isCardDetailsVisible, setIsCardDetailsVisible] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-2 md:p-4">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white rounded-lg shadow-2xl overflow-hidden relative">
        {/* Left Side - Shopping Cart */}
        <div className={`bg-gray-50 p-4 md:p-8 transition-all duration-300 ${isCardDetailsVisible ? 'lg:w-2/3' : 'w-full'}`}>
          {/* Header */}
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="text-xl md:text-2xl font-light text-gray-700">Your Shopping Cart</h1>
          </div>

          {/* Cart Items */}
          <div className="space-y-3 md:space-y-4">
            {/* Item 1 - Denim T-Shirt */}
            <div className="flex items-center gap-2 md:gap-4 bg-white p-3 md:p-4 rounded-lg shadow-sm">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-blue-900" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 10 L30 25 L30 45 L20 45 L20 90 L80 90 L80 45 L70 45 L70 25 Z M35 30 L50 20 L65 30 L65 50 L60 50 L60 35 L40 35 L40 50 L35 50 Z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-800 text-sm md:text-base">Denim T-Shirt</h3>
                <p className="text-xs text-gray-400">Ref: 45611622</p>
              </div>
              <div className="hidden sm:block text-sm text-gray-600">Blue</div>
              <div className="flex items-center gap-1 md:gap-2">
                <button className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300">
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M2 6h8"/>
                  </svg>
                </button>
                <span className="w-5 md:w-6 text-center font-medium text-sm">2</span>
                <button className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300">
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 2v8M2 6h8"/>
                  </svg>
                </button>
              </div>
              <div className="w-20 md:w-28 text-right font-medium text-gray-800 text-xs md:text-base">7500.00 NGN</div>
              <button className="text-gray-400 hover:text-gray-600 hidden sm:block">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Item 2 - Denim Pants */}
            <div className="flex items-center gap-2 md:gap-4 bg-white p-3 md:p-4 rounded-lg shadow-sm">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-blue-900" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M35 10 L30 50 L25 90 L40 90 L45 50 L50 30 L55 50 L60 90 L75 90 L70 50 L65 10 Z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-800 text-sm md:text-base">Denim Pants</h3>
                <p className="text-xs text-gray-400">Ref: 45611622</p>
              </div>
              <div className="hidden sm:block text-sm text-gray-600">Blue</div>
              <div className="flex items-center gap-1 md:gap-2">
                <button className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300">
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M2 6h8"/>
                  </svg>
                </button>
                <span className="w-5 md:w-6 text-center font-medium text-sm">3</span>
                <button className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300">
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 2v8M2 6h8"/>
                  </svg>
                </button>
              </div>
              <div className="w-20 md:w-28 text-right font-medium text-gray-800 text-xs md:text-base">9000.00 NGN</div>
              <button className="text-gray-400 hover:text-gray-600 hidden sm:block">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Item 3 - Sony Smartwatch */}
            <div className="flex items-center gap-2 md:gap-4 bg-white p-3 md:p-4 rounded-lg shadow-sm">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-800" viewBox="0 0 100 100" fill="currentColor">
                  <rect x="30" y="15" width="5" height="15" rx="2"/>
                  <rect x="65" y="15" width="5" height="15" rx="2"/>
                  <rect x="25" y="25" width="50" height="50" rx="8"/>
                  <rect x="30" y="70" width="5" height="15" rx="2"/>
                  <rect x="65" y="70" width="5" height="15" rx="2"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-800 text-sm md:text-base">Sony Smartwat...</h3>
                <p className="text-xs text-gray-400">Ref: 45622891</p>
              </div>
              <div className="hidden sm:block text-sm text-gray-600">Black</div>
              <div className="flex items-center gap-1 md:gap-2">
                <button className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300">
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M2 6h8"/>
                  </svg>
                </button>
                <span className="w-5 md:w-6 text-center font-medium text-sm">1</span>
                <button className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300">
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 2v8M2 6h8"/>
                  </svg>
                </button>
              </div>
              <div className="w-20 md:w-28 text-right font-medium text-gray-800 text-xs md:text-base">24500.00 NGN</div>
              <button className="text-gray-400 hover:text-gray-600 hidden sm:block">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Item 4 - Cognac Oxford */}
            <div className="flex items-center gap-2 md:gap-4 bg-white p-3 md:p-4 rounded-lg shadow-sm">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-amber-800" viewBox="0 0 100 100" fill="currentColor">
                  <ellipse cx="50" cy="70" rx="30" ry="10"/>
                  <path d="M20 70 L25 50 Q30 40 50 35 Q70 40 75 50 L80 70 Q75 65 50 65 Q25 65 20 70 Z"/>
                  <path d="M35 50 L40 45 L45 50 M55 50 L60 45 L65 50" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-800 text-sm md:text-base">Cognac Oxford</h3>
                <p className="text-xs text-gray-400">Ref: 45612991</p>
              </div>
              <div className="hidden sm:block text-sm text-gray-600">Brown</div>
              <div className="flex items-center gap-1 md:gap-2">
                <button className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300">
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M2 6h8"/>
                  </svg>
                </button>
                <span className="w-5 md:w-6 text-center font-medium text-sm">1</span>
                <button className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300">
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 2v8M2 6h8"/>
                  </svg>
                </button>
              </div>
              <div className="w-20 md:w-28 text-right font-medium text-gray-800 text-xs md:text-base">4500.00 NGN</div>
              <button className="text-gray-400 hover:text-gray-600 hidden sm:block">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm md:text-base">
              <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 18l-6-6h12z" transform="rotate(90 10 10)"/>
              </svg>
              <span>Back to Shop</span>
            </button>
            <div className="flex items-center gap-3 md:gap-4">
              <p className="text-sm text-gray-500">Subtotal:</p>
              <p className="text-lg md:text-xl font-medium text-gray-800">45500.00 NGN</p>
            </div>
          </div>
        </div>

        {/* Right Side - Card Details */}
        <div className={`bg-linear-to-b from-gray-700 to-gray-800 text-white relative shadow-2xl shadow-black/60 flex flex-col transition-all duration-300 ${isCardDetailsVisible ? 'lg:w-1/3 w-full' : 'w-0 h-0 lg:w-0 overflow-hidden'}`}>
          <div className="p-6 md:p-8 flex-1">
            {/* Card visual representation */}
            <div className="absolute top-0 right-0 w-48 h-32 md:w-64 md:h-40 opacity-20">
              <svg viewBox="0 0 300 200" className="w-full h-full">
                <rect x="0" y="0" width="300" height="200" rx="15" fill="currentColor"/>
              </svg>
            </div>

            <h2 className="text-xl md:text-2xl font-light mb-8 md:mb-12 text-yellow-500">Card Details</h2>

            {/* Card Type Selection */}
            <div className="mb-6 md:mb-8">
              <label className="block text-sm text-gray-300 mb-3 md:mb-4">Select Card Type</label>
              <div className="flex gap-2 md:gap-4">
                <button className="px-4 py-2 md:px-6 md:py-3 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition">
                  <svg className="w-6 h-4 md:w-8 md:h-5" viewBox="0 0 40 25" fill="currentColor">
                    <circle cx="15" cy="12.5" r="12.5" fillOpacity="0.7"/>
                    <circle cx="25" cy="12.5" r="12.5" fillOpacity="0.7"/>
                  </svg>
                </button>
                <button className="px-4 py-2 md:px-6 md:py-3 bg-gray-600 text-gray-400 rounded-lg font-medium hover:bg-gray-500 transition text-sm md:text-base">
                  VISA
                </button>
                <button className="px-4 py-2 md:px-6 md:py-3 bg-gray-600 text-gray-400 rounded-lg font-medium hover:bg-gray-500 transition text-sm md:text-base">
                  Verve
                </button>
              </div>
            </div>

            {/* Card Number */}
            <div className="mb-4 md:mb-6">
              <label className="block text-sm text-gray-300 mb-2">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full bg-transparent border-b border-gray-500 py-2 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none text-sm md:text-base"
              />
            </div>

            {/* Expiry Date and CVV */}
            <div className="flex gap-3 md:gap-4 mb-8 md:mb-12">
              <div className="flex-1">
                <label className="block text-sm text-gray-300 mb-2">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="w-full bg-transparent border-b border-gray-500 py-2 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none text-sm md:text-base"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-300 mb-2">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full bg-transparent border-b border-gray-500 py-2 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none text-sm md:text-base"
                />
              </div>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-yellow-500 text-gray-900 py-5 md:py-6 font-semibold text-lg md:text-xl hover:bg-yellow-400 transition">
            Checkout
          </button>
        </div>

        {/* Three dots indicator - toggle button (only visible on desktop) */}
        <button 
          onClick={() => setIsCardDetailsVisible(!isCardDetailsVisible)}
          className={`hidden lg:flex absolute top-12 flex-col gap-3 bg-gray-900 py-3 px-1.5 rounded-l-lg shadow-2xl shadow-black/50 hover:bg-gray-800 transition-all duration-300 ${isCardDetailsVisible ? 'right-[33.333%]' : 'right-0'}`}
        >
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        </button>
      </div>
    </div>
  );
}
