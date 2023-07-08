import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from "../components/Header";
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import TestSection from '@/components/TestSection';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';


export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 ">
      <Head>
        <title>Hannes Schroter</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />

      </section>
      
      {/* About */}
      <section id="about" className="snap-center">
        <About />

      </section>
{/* 
      <section id="work" className="snap-center">
        <TestSection />
      </section> */}

      <section id="workexperience" className="snap-center">

        <WorkExperience />

      </section>

      <section id="skills" className="snap-start">

        <Skills />

      </section>

      <section id="projects" className="snap-start">

        <Projects  />

      </section>

      <section id="contact" className="snap-start">

        <Contact  />

      </section>




      
      {/* Experiences */}
      
      {/* Projects */}
      
      {/* Contact Me */}

    </div>
  )
}
