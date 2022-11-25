import Head from 'next/head'
import {WiMoonAltWaningCrescent4, WiMoonAltWaningGibbous3} from 'react-icons/wi';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joona Oja - Portfolio</title>
        <meta name="description" content="A Portfolio web page by Joona Oja." />
        <link rel="icon" href="/portfolio-icon.png" />
      </Head>

      <main>
         <section className='min-h-screen bg-stone-900'>
            <nav>
               <h1>nojaajoo</h1>
               <ul>
                  <li><WiMoonAltWaningCrescent4/></li>
                  <li><WiMoonAltWaningGibbous3/></li>
                  <li><a href='#'>CV</a></li>
               </ul>
            </nav>
         </section>
      </main>

    </div>
  )
}
