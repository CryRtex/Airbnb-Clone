import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

  export default function Home( ) {
  return (
    <div>
      <head>
        <title>CryRtex Airbnb</title>
      </head>
         <Header />
          
          <Banner />
          <main className=' max-w-7xl mx-auto px-8 sm:px-16 '>
            <section className=' pt-6'>
              <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
              {/* Pull some data from a server - API endpoints */}

            </section>
          </main>
      </div>
  );
} 



