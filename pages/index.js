import { useEffect, useState } from 'react';
import Head from 'next/head'
import {WiMoonAltWaningCrescent4, WiMoonAltWaningGibbous3} from 'react-icons/wi';

export default function Home() {
  //Menu open/close toggle state
  const [open, setOpen] = useState(false);


  //Change menu to sticky on scroll
  useEffect(() => {
    const SCROLL_POINT_FOR_STICKY_MENU = 200

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
    <div>
      <Head>
        <title>Joona Oja - Portfolio</title>
        <meta name="description" content="A Portfolio web page by Joona Oja." />
        <link rel="icon" href="/portfolio-icon.png" />
      </Head>

      <div>
         <section className='min-h-screen min-w-screen bg-stone-900'>

         <header id="top" className="w-full flex flex-col fixed sm:relative bg-white pin-t pin-r pin-l">
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
        <main className="content">
          <div className="min-h-screen text-center py-24">
            <h2 className="text-xl font-bold text-red-900">Menu is sticky for mobile viewports; otherwise just scroll down to make the menu sticky.</h2>
            <h3 className="py-8">Detailed how to: <a href="https://ttntm.me/blog/tailwind-responsive-menu/" target="_blank" className="underline">https://ttntm.me/blog/tailwind-responsive-menu/</a></h3>
          </div>
          <div className="flex flex-col w-2/3 mx-auto mb-24 tracking-wide">
            <h2 className="my-3">No, motherfucker</h2>
            <p className="my-3">Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass. 
            </p>
            <h2 className="my-3">We happy?</h2>
            <p className="my-3">Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass. 
            </p>
            <h2 className="my-3">Are you ready for the truth?</h2>
            <p className="my-3">Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass. 
            </p>
            <div className="w-full sm:w-2/3 h-px bg-grey-light mx-auto my-12"></div>
            <a href="#top" id="bottom" className="inline-block max-w-xs self-center text-center text-red-900 hover:text-white no-underline border rounded-full border-red-900 hover:border-red-900 hover:bg-red-900 px-12 py-2">Go to Top</a>
          </div>
        </main>

         </section>
      </div>
    </div>
  )
}
