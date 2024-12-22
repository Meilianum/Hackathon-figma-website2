// import React from 'react'
// import Link from "next/link";   
// import { BiSolidUserCheck } from "react-icons/bi";
// import { FaSearch, FaRegHeart, FaShoppingCart, FaRegTrashAlt } from "react-icons/fa";

// export default function Cart() {
//   return (
   
//     <div className="border-2 w-full min-h-screen flex flex-col">
//       <header className="text-gray-600 body-font">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <div className="flex flex-grow items-center justify-between md:justify-start gap-6">
//             {/* Logo Section */}
//             <div className="text-xl font-bold">
//               <Link href="/">Logo</Link> {/* Replace with actual logo */}
//             </div>

//             {/* Navigation Links */}
//             <nav className="hidden md:flex md:ml-auto flex-wrap items-center text-base justify-center gap-10">
//               <Link href="/Shop" className="hover:text-gray-900">Shops</Link>
//               <Link href="/About" className="hover:text-gray-900">About</Link>
//               <Link href="/Contact" className="hover:text-gray-900">Contact</Link>
//             </nav>

//             {/* Header Icons */}
//             <div className="flex items-center gap-4 md:gap-10">
//               <BiSolidUserCheck className="text-xl cursor-pointer hover:text-gray-900" />
//               <FaSearch className="text-xl cursor-pointer hover:text-gray-900" />
//               <FaRegHeart className="text-xl cursor-pointer hover:text-gray-900" />
//               <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-900" />
//             </div>
//           </div>
//         </div>
//       </header>
//       <img src="/images/Group 78.svg" alt="Cart" />
//       <div className="flex flex-row justify-between items-center gap-4 w-full max-w-[90%] md:max-w-[817px] h-auto min-h-[55px] mt-20 p-4 bg-red-100">
//   <span>Product</span>
//   <span>Price</span>
//   <span>Quantity</span>
//   <span>Subtotal</span>
// </div>

//       <div className='flex flex-row justify-start items-star w-[112.99px]h-[92.02px] top-[604.99px] left-[100.51px] mt-20 ml-10 gap-10 translate-0'>
//       <img src="/images/Group 137.svg" alt="sofaset" />
//       {/* <img src="/images/Group 145.png" alt="" /> */}
//       <span className='font-bold text-right mt-10'>Asgaard sofa</span>
//       <span className='font-bold text-right mt-10 '>Rs. 250,000.00</span>
//      <input type="checkbox"  id='number' placeholder='1' className='size-10 mt-8 gap-6 bg-black'/>
//      <span className='font-bold text-right mt-10'>Rs. 250,000.00</span>
//      <FaRegTrashAlt  className='mt-10  size-8'/>
//      </div>
//      <div className='grid  grid-row  justify-left  items-star w-[112.99px] h-[390px] top-[488px]left-[947px]border-[1px] bg-red-100 left-[100.51px] mt-20  gap-10 translate-0 ml-80'>
//         <h1>Cart Totals</h1>
//         <span>Subtotal</span>
//         <span>   Rs. 250,000.00   </span>
//         <span>Total</span>
//         <span>Rs. 250,000.00</span>
//       </div>
//       <div className="bg-[#FAF4F4] w-full py-10 h-[400px] text-center">
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10 px-5 mt-32 ">
//           {/* Free Delivery */}
//           <div className="flex flex-col items-center md:items-start text-center md:text-left">
//             <h2 className="font-medium text-gray-900 text-lg sm:text-xl lg:text-2xl ">
//               Free Delivery
//             </h2>
//             <p className="text-sm sm:text-base leading-relaxed ">
//               For all orders over $50, consectetur   <br />adipiscing elit.
//             </p>
//           </div>
//           {/* 90 Days Return */}
//           <div className="flex flex-col items-center md:items-start text-center md:text-left">
//             <h2 className="font-medium text-gray-900 text-lg sm:text-xl lg:text-2xl">
//               90 Days Return
//             </h2>
//             <p className="text-sm sm:text-base leading-relaxed">
//               If goods have problems, consectetur  <br /> adipiscing elit.
//             </p>
//           </div>
//           {/* Secure Payment */}
//           <div className="flex flex-col items-center md:items-start text-center md:text-left">
//             <h2 className="font-medium text-gray-900 text-lg sm:text-xl lg:text-2xl">
//               Secure Payment
//             </h2>
//             <p className="text-sm sm:text-base leading-relaxed">
//               100% secure payment, consectetur  <br /> adipiscing elit.
//             </p>
//           </div>
//           </div>
//           </div>
//       </div>
     
     


      
//   )
// }

import React, { useState } from "react";
import Link from "next/link";
import { BiSolidUserCheck } from "react-icons/bi";
import { FaSearch, FaRegHeart, FaShoppingCart, FaRegTrashAlt } from "react-icons/fa";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 1,
      name: "Asgaard Sofa",
      price: 250000.0,
      quantity: 1,
    },
  ]);

  // Calculate subtotal for a product
  const calculateSubtotal = (item: CartItem) => item.price * item.quantity;

  // Calculate total for the cart
  const calculateTotal = () =>
    cart.reduce((total, item) => total + calculateSubtotal(item), 0);

  // Handle quantity change
  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const handleRemoveItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header */}
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex flex-grow items-center justify-between md:justify-start gap-6">
            {/* Logo Section */}
            <div className="text-xl font-bold">
              <Link href="/">Logo</Link>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex md:ml-auto flex-wrap items-center text-base justify-center gap-10">
              <Link href="/Shop" className="hover:text-gray-900">
                Shops
              </Link>
              <Link href="/About" className="hover:text-gray-900">
                About
              </Link>
              <Link href="/Contact" className="hover:text-gray-900">
                Contact
              </Link>
            </nav>

            {/* Header Icons */}
            <div className="flex items-center gap-4 md:gap-10">
              <BiSolidUserCheck className="text-xl cursor-pointer hover:text-gray-900" />
              <FaSearch className="text-xl cursor-pointer hover:text-gray-900" />
              <FaRegHeart className="text-xl cursor-pointer hover:text-gray-900" />
              <FaShoppingCart className="text-xl cursor-pointer hover:text-gray-900" />
            </div>
          </div>
        </div>
      </header>

      {/* Banner */}
      <img src="/images/Group 78.svg" alt="Cart" className="w-full object-cover" />

      {/* Cart Header */}
      <div className="flex justify-between items-center gap-4 w-[700px] max-w-3xl mx-auto bg-red-100 rounded-lg text-center font-semibold">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

      {/* Cart Items */}
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex flex-wrap justify-between items-center w-[700px] max-w-3xl mx-auto mt-6 p-4 bg-white shadow-lg rounded-lg gap-4"
        >
          <img
            src="/images/Group 137.svg"
            alt={item.name}
            className="w-28 h-28 object-cover rounded-lg"
          />
          <span className="flex-1 font-semibold text-center">{item.name}</span>
          <span className="font-semibold text-center">
            Rs. {item.price.toLocaleString()}
          </span>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              handleQuantityChange(item.id, parseInt(e.target.value, 10) || 1)
            }
            className="w-16 h-10 border border-gray-300 rounded-lg text-center"
          />
          <span className="font-semibold text-center">
            Rs. {calculateSubtotal(item).toLocaleString()}
          </span>
          <FaRegTrashAlt
            className="text-red-500 cursor-pointer text-xl"
            onClick={() => handleRemoveItem(item.id)}
          />
        </div>
      ))}

      {/* Cart Totals */}
      <div className="w-[400px] max-w-lg mx-auto mt-10 p-6 bg-red-100 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>Rs. {calculateTotal().toLocaleString()}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Total</span>
          <span>Rs. {calculateTotal().toLocaleString()}</span>
        </div>
        < Link href="/Button.tsx">
  <button className="w-full h-12 text-white bg-black rounded-lg mt-4 hover:bg-gray-800">
    Checkout
  </button>
</Link>
        {/* <button className="w-full h-12 text-white bg-black rounded-lg mt-4 hover:bg-gray-800">
          Checkout
        </button> */}
      </div>
    </div>
  );
}
