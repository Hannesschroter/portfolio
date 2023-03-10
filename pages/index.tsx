import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from "../components/Header";
import Hero from '@/components/Hero';


export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Hannes Schroter</title>
      </Head      >

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />

      </section>
      
      {/* About */}
      <section>

      </section>
      
      {/* Experiences */}
      
      {/* Projects */}
      
      {/* Contact Me */}

    </div>
  )
}
