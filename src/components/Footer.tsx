import React from 'react'

function Footer() {
  return (
    <>
    <footer className="relative mt-auto bg-[#140303]">
      {/* Tech background with overlay */}
      {/* <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/11167645/pexels-photo-11167645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundBlendMode: "overlay",
        }}
      /> */}

      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 to-black/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8">
        {/* Horizontal line */}
        <hr className="border-t border-gray-300/30 mb-4" />

        {/* Copyright text */}
        <p className="text-sm text-center text-slate-100">© {new Date().getFullYear()} Soham Bambade. All rights reserved.</p>

      </div>
    </footer>
    </>
  )
}

export default Footer