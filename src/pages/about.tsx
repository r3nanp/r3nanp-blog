// eslint-disable-next-line no-use-before-define
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const About: React.FC = () => {
  return (
    <main className="h-screen">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Sobre mim</title>
      </Head>
      <Header />

      <div className="px-4 border-b border-black h-1/2 bg-gray-200 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-black text-center uppercase">Sobre mim</h1>
        <p className="text-md text-black text-center tracking-wide">Conheça-me!</p>
      </div>

      <div className="px-4 py-6">
        <h2 className="text-xl font-bold text-white">Sobre mim</h2>
        <p className="leading-8 tracking-wide text-black pb-2 text-center md:text-justify">
          Olá, meu nome é Renan Pereira, sou desenvolvedor de software. Nasci em
          Fortaleza, CE, sou apaixonado por programação e seu ecossistema!
        </p>
        <p className="leading-8 tracking-wide text-black text-center md:text-justify">
          Sou técnico em Redes de computadores e desde 2018 estudo programação.
          Comecei com PHP e Python, e hoje estou trabalhando com Javascript,
          Typescript, React e Node.
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
        <div className="flex flex-col w-full justify-center items-center md:items-stretch md:justify-start">
          <Link href="https://linkedin.com/in/r3nanp">
            <a className="mb-2 w-48" rel="noopener noreferrer" target="_blank">
              <div className="flex items-center justify-center w-48 rounded text-white bg-blue-800 p-4 hover:bg-blue-900">
                <FaLinkedin size={20} color="#fff" />
                <p className="px-2">LinkedIn</p>
              </div>
            </a>
          </Link>
          <Link href="https://github.com/r3nanp">
            <a className="mb-2 w-48" rel="noopener noreferrer" target="_blank">
              <div className="flex items-center justify-center w-48 rounded text-white bg-gray-800 p-4 hover:bg-gray-900">
                <FaGithub size={20} color="#fff" />
                <p className="px-2">Github</p>
              </div>
            </a>
          </Link>

          <Link href="mailto:renanmol87@gmail.com">
            <a className="w-48" rel="noopener noreferrer" target="_blank">
              <div className="flex items-center justify-center w-48 rounded text-white bg-red-700 p-4 hover:bg-red-900">
                <AiOutlineMail size={20} color="#fff" />
                <p className="px-2">Email</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default About
