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
import { GetStaticProps } from 'next';
import { Experience, PageInfo, Project, Skill, Social } from '../typings';
import { fetchExperiences } from '@/utils/fetchExperiences';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchProjects } from '@/utils/fetchProjects';
import { fetchSocials } from '@/utils/fetchSocials';
import Info from '@/components/Info';

type Props = {
  pageInfo: PageInfo; 
  experiences: Experience[];
  skills: Skill[]; 
  projects: Project[];
  socials: Social[];
}

export default function Home({ pageInfo, experiences, projects, skills, socials }: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB07]/80 ">
      
      <Head>
        <title>Hannes Schroter</title>
      </Head>

      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />

      </section>

      <section id="info" className="snap-start">
        <Info pageInfo={pageInfo} />

      </section>

      <section id="test" className="snap-start">
        <TestSection />

      </section>


      
      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>

      </section>
{/* 
      <section id="work" className="snap-center">
        <TestSection />
      </section> */}

      <section id="workexperience" className="snap-center">

        <WorkExperience projects={projects}/>

      </section>

      <section id="skills" className="snap-start">

        <Skills skills={skills} />

      </section>

      <section id="projects" className="snap-start">

        <Projects projects={projects} />

      </section>

      <section id="contact" className="snap-start">

        <Contact pageInfo={pageInfo} />

      </section>

    </div>
  )
}


export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    }, 
    revalidate: 10,
  }


}
