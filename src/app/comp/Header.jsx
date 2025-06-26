"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [cat, setCat] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    axios.get(`https://bankingkhabar.com/wp-json/wp/v2/categories`)
      .then(res => setCat(res.data));
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ✅ Top Header Ads */}
      <header className="py-3 bg-white">
       
        <div className="max-w-7xl mx-auto flex justify-center py-2 px-4">
          <Link href="/">
            <img
              className="w-[280px]"
              src="https://chakrapath.com/wp-content/themes/chakrapath/img/logo.png"
              alt="Logo"
            />
          </Link>
        </div>
      </header>

    {/* Navbar */}
      <nav className="bg-red-700 text-white sticky top-0 z-50">
        <div className="nav-b container mx-auto flex items-center justify-between px-4 py-3">
         

          {/* Desktop Menu */}
          <ul className="nav-a hidden lg:flex gap-3 flex-wrap">
            {cat.map((a) => (
              <li
                key={a.id}
                className=" px-3 py-1 text-lg hover:bg-red-600 rounded transition"
              >
                <Link href={`/category/${a.id}`}>{a.name}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-white lg:hidden"
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          
          <div className="lg:hidden bg-red-800 px-4 py-2">
            <ul className="flex flex-col gap-2">
              {cat.map((a) => (
                <li key={a.id}>
                  <Link
                    href={`/category/${a.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 border-b border-red-500 text-lg"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* ✅ Time & Date Section */}
      <section className="p-2 border-b-2">
        <div className="max-w-7xl mx-auto flex justify-end gap-2 px-4">
          <span>Wednesday, Sep 19, 2025</span>
          <span className="bg-red-700 text-white px-2">3:54:47 PM</span>
        </div>
      </section>

      {/* ✅ Bottom Ad */}
     
    </>
  );
}
