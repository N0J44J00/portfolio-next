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
         <section className="bg-stone-900">

        {/* HEADER component */}
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
              <div className="min-h-screen text-center justify-center py-32 px-6 bg-stone-800">
                <img className="rounded-full w-1/3 mx-auto bg-stone-900" src="/my-face.png" />
                <h1 className="text-xl font-bold text-white py-10">Hello There!</h1>
                <p className="text-md font-bold text-white">I'm a finnish IT-student, interested in front-end development and lorem ipsum dolor sit amet...</p>
              </div>
              <div className="flex flex-col w-2/3 mx-auto pt-10 pb-24 tracking-wide">
                <h2 className="my-3 text-xl text-white mb-10">The Story so far...</h2>
                <h3 className="my-3 text-lg text-white">Job Experience A</h3>
                <p className="my-3 text-stone-400">Glowing neon data conduits flow through the quantum ether, while cybernetic algorithms synergize with holographic quantum fluctuations. Virtual reality hyperloops warp through the ethereal metaverse, where pixelated nanobots decrypt fractal consciousness. 
                </p>
                <h3 className="my-3 text-lg text-white">Job Experience B</h3>
                <p className="my-3 text-stone-400">Bioluminescent cyber-organic entities transcend the blockchain singularity, traversing the synaptic singularity matrix. Quantum-enhanced nano-coffee machines synthesize digital caffeine anomalies, fueling the interdimensional glitchpunk revolution. 
                </p>
                <h3 className="my-3 text-lg text-white">Education C</h3>
                <p className="my-3 text-stone-400">Deep within the code abyss, neon-infused bio-avatars download transcendental subroutines, interfacing with the existential mainframe. Augmented pigeons transmit quantum memes through the neural fog, while cyber-entropy spirals into the hyper-holographic void. 
                </p>
                <div className="w-full sm:w-2/3 h-px bg-grey-light mx-auto my-12"></div>
                <a href="#top" id="bottom" className="inline-block max-w-xs self-center text-center text-stone-100 hover:text-white no-underline border rounded-full border-stone-100 hover:border-white hover:bg-stone-800 px-12 py-2">Go to Top</a>
              </div>
            </main>

         </section>
      </div>
    </div>
  )
}
