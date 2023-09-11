'use client'

import { useEffect, useState } from 'react';

export default function NavHeader() {

  //Menu open/close toggle state
  const [open, setOpen] = useState(false);

//   function menuToggle() {
//     setOpen(!open)
//   }

  //Change menu to sticky on scroll
  useEffect(() => {
    const SCROLL_POINT_FOR_STICKY_MENU = 500

    const onScroll = () => {
        var nav = document.getElementById('site-menu');
        var header = document.getElementById('top');

        if (window.scrollY >=SCROLL_POINT_FOR_STICKY_MENU) {
          nav.classList.add('nav-sticky');
          header.classList.add('pt-scroll');
        } else {
          nav.classList.remove('nav-sticky');
          header.classList.remove('pt-scroll');
        }
    }

    window.addEventListener('scroll', onScroll)

  }, [])

    return (
        <header id="top" className="w-full flex flex-col fixed top-0 sm:opacity-80 sm:relative bg-white pin-t pin-r pin-l z-10">
        <nav id="site-menu" className="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white shadow sm:shadow-none">
          <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
            <a href="#" className="no-underline py-1">
              <h1 className="font-bold text-lg tracking-widest">
                JOONA OJA
              </h1>
            </a>
            <button id="menuBtn" className={open ? 'open hamburger block sm:hidden focus:outline-none' : 'hamburger block sm:hidden focus:outline-none'} type="button" onClick={() => setOpen(!open)}>
              <span className="hamburger__top-bun"></span><span className="hamburger__bottom-bun"></span>
            </button>
          </div>
          <div id="menu" className={open ? 'w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 flex' : 'w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden'}>
            <a className="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2" href="https://ttntm.me/blog/tailwind-responsive-menu/" target="_blank">Portfolio</a>
            <a className="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2" href="#bottom">Contact</a>
          </div>
        </nav>
      </header>
    )
}