"use client";

import "./globals.css";
import Header from "@/components/header";

import React, { useState, useEffect } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <head>
        <script src="https://embed.zenn.studio/js/listen-embed-event.js"></script>
      </head>
      <body className="h-full">
        <Header />
        {/* <button
          className={`
        bg-blue-500 hover:bg-yellow-500 
        p-3 rounded-full font-bold transition duration-300
        text-white
    `}
        >
          Hover Button
        </button>
        <div
          className={`
        my-4 text-center
        font-bold text-5xl tracking-tight
        bg-gradient-to-r from-green-500 via-blue-500 to-pink-500
        bg-clip-text text-transparent 
    `}
        >
          Tailwind CSS is Awesome
        </div>

        <div className="grid grid-cols-3 gap-4 text-white font-bold">
          <div className="bg-blue-500 h-8 p-2">1</div>
          <div className="bg-blue-500 h-8 p-2">2</div>
          <div className="bg-blue-500 h-8 p-2">3</div>
          <div className="bg-blue-500 h-8 p-2">4</div>
          <div className="bg-blue-500 h-8 p-2">5</div>
          <div className="bg-blue-500 h-8 p-2">6</div>
          <div className="bg-blue-500 h-8 p-2">7</div>
          <div className="bg-blue-500 h-8 p-2">8</div>
          <div className="bg-blue-500 h-8 p-2">9</div>
        </div>

        <div className="shadow-lg w-90 h-32 p-4 font-bold">Shadow</div>

        <Button>Press me</Button> */}
        <main>
          <div className="mx-auto max-w-3xl px-6 py-6 sm:px-6 lg:px-8 bg-white">{children}</div>
        </main>
      </body>
    </html>
  );
}
