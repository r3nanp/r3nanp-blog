import { FC } from 'react'
import Image from 'next/image'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Contact } from '../components/Contact'
import { SEO } from '../components/SEO'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const About: FC = () => {
  return (
    <>
      <SEO title="Sobre mim" />
      <Header />

      <main className="h-screen">
        <section className="px-4 border-b border-black h-1/2 bg-gray-200 flex flex-col items-center justify-center">
          <Image
            src="/me.png"
            width="150"
            height="150"
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold text-black text-center uppercase">
            Sobre mim
          </h1>
          <p className="text-md text-black text-center tracking-wide">
            Conheça-me!
          </p>
        </section>

        <section className="px-4 py-6">
          <h2 className="text-xl font-bold text-white">Sobre mim</h2>
          <p className="leading-8 tracking-wide text-black pb-2 text-center md:text-justify">
            Olá, meu nome é Renan Pereira, sou desenvolvedor de software. Nasci
            em Fortaleza, CE, sou apaixonado por programação e seu ecossistema!
          </p>
          <p className="leading-8 tracking-wide text-black text-center md:text-justify">
            Sou técnico em Redes de computadores e desde 2018 estudo
            programação. Comecei com PHP e Python, e hoje estou trabalhando com
            Javascript, Typescript, React, React Native e Node.
          </p>

          <h2 className="text-xl font-bold py-2">Habilidades</h2>
          <ul className="px-2">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>PHP</li>
            <li>React.js</li>
            <li>React Native</li>
            <li>Next.js</li>
            <li>Git &#38; Github</li>
            <li>SQL</li>
            <li>Bancos de dados (MySQL, PostgreSQL, MongoDB)</li>
          </ul>

          <h2 className="text-xl font-bold py-2 mb-4">Contato</h2>
          <article className="flex flex-col w-full justify-center items-center md:items-stretch md:justify-start">
            <Contact
              href="https://linkedin.com/in/r3nanp"
              color="bg-blue-600"
              hover_color="bg-blue-700"
            >
              <FaLinkedin size={20} color="#fff" />
              <span className="px-2">LinkedIn</span>
            </Contact>
            <Contact
              href="https://github.com/r3nanp"
              color="bg-gray-600"
              hover_color="bg-gray-700"
            >
              <FaGithub size={20} color="#fff" />
              <span className="px-2">Github</span>
            </Contact>

            <Contact
              href="mailto:renanmol87@gmail.com"
              color="bg-red-600"
              hover_color="bg-red-700"
            >
              <AiOutlineMail size={20} color="#fff" />
              <span className="px-2">Email</span>
            </Contact>
          </article>
        </section>
        <Footer />
      </main>
    </>
  )
}

export default About
