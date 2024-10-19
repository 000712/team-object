'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FiAlignJustify } from 'react-icons/fi'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 py-6 px-8 flex items-center justify-between z-20 bg-gray-800">
        <div className="text-white text-lg font-bold">
          <h1>고양HUB</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/project"
            className="hover:text-purple-400 transition text-white"
          >
            Project
          </Link>
          <Link
            href="/object"
            className="hover:text-purple-400 transition text-white"
          >
            Object
          </Link>
          <Link
            href="/"
            className="hover:text-purple-400 transition text-white"
          >
            Team
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            <FiAlignJustify size={24} />
          </button>
        </div>
      </nav>

      {/* 메뉴바가 열렸을 때 헤더와 겹치지 않도록 mt-16으로 조정 */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white mt-16 z-10 fixed top-0 left-0 right-0">
          <div className="flex flex-col space-y-4 p-4 text-lg font-bold">
            <Link href="/project" className="hover:text-purple-400 transition">
              Project
            </Link>
            <Link href="/object" className="hover:text-purple-400 transition">
              Object
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
