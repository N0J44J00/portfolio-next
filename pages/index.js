import { useEffect, useState } from 'react';
import Head from 'next/head'
import {WiMoonAltWaningCrescent4, WiMoonAltWaningGibbous3} from 'react-icons/wi';
import NavHeader from '../components/index/nav';

export default function Home() {



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
          <NavHeader/>


          <div className='relative w-full min-h-screen overflow-auto'>
            <div className="absolute overflow-auto top-1/4 right-1/4 md:w-1/2 md:h-1/2 w-56 h-56 bg-orange-300 rounded-full mix-blend-lighten filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute overflow-auto top-1/4 right-1/2 md:w-1/3 md:h-1/3 w-52 h-52 bg-purple-300 rounded-full mix-blend-hard-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute overflow-auto top-1/5 left-1/2 md:w-1/3 md:h-1/3 w-56 h-56 bg-indigo-300 rounded-full mix-blend-lighten filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
            <div className="m-8 relative space-y-4">
            <div className="pt-12 rounded-lg flex items-center justify-between space-x-8">
              <img className="rounded-full w-1/3 mx-auto bg-stone-900 bg-opacity-70" src="/my-face.png" />
            </div>
            <div className="p-5 text-center rounded-lg flex items-center justify-between space-x-8">
              <h1 className="text-xl font-bold mx-auto text-white">Hello There!</h1>
            </div>
            <div className="p-5 bg-stone-800 bg-opacity-80 rounded-lg flex items-center justify-between space-x-8">
                <p className="text-md font-bold text-white">
                  I'm a finnish IT-student, interested in front-end development and lorem ipsum dolor sit amet...
                  In the neon-drenched cyber-jungle, techno-shamans engage in quantum dance battles against glitched cyber-raptors, all while the zero-gravity internet of things dreams of electric sheep.  
                </p>
            </div>
          </div>
          </div>

            <main className="content">
              {/* <div className="min-h-screen text-center justify-center py-32 px-6 bg-stone-800">
                <img className="rounded-full w-1/3 mx-auto bg-stone-900" src="/my-face.png" />
                <h1 className="text-xl font-bold text-white py-10">Hello There!</h1>
                <p className="text-md font-bold text-white">
                  I'm a finnish IT-student, interested in front-end development and lorem ipsum dolor sit amet...
                  In the neon-drenched cyber-jungle, techno-shamans engage in quantum dance battles against glitched cyber-raptors, all while the zero-gravity internet of things dreams of electric sheep.  
                </p>
              </div> */}
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
