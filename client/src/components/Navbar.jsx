import React from 'react'

function Navbar() {
  return (
    <div className=" box flex justify-between w-full p-4 m-3 bg-blue-700 shadow-lg    text-white">
<h1 class='lg:text-4xl text-2xl'>toDoApp;</h1>
    <h3 class="hidden sm:flex">Logged in as Anurag</h3>
    <button class='mx-5 hover:text-gray-300 '>SIGNOUT</button>
  </div>
  )
}

export default Navbar