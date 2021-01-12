import Head from 'next/head'
import { Header } from 'components/Header'

const About: React.FC = () => {
  return (
    <main className="h-screen bg-gray-600">
      <Head>
        <title>Sobre mim</title>
      </Head>
      <Header />

      <div className="bg-gray-400">
        <h1 className="text-2xl font-bold text-black text-center">Sobre mim</h1>
        <p className="text-md text-black text-center">Conheça-me!</p>
      </div>

      <div className="bg-gray-800">
        <h2 className="text-xl font-bold">Sobre mim</h2>
        <p className="leading-4 tracking-wide text-black text-justify">
          Olá, meu nome é Renan Pereira, sou desenvolvedor de software. Nasci em
          Fortaleza, CE, sou apaixonado por programação e seu ecossistema!
        </p>

        <h2 className="text-xl font-bold">Habilidades</h2>
        <ul className="list-disc px-2">
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

        <h2 className="text-xl font-bold">Contato</h2>
        <ul className="list-disc px-2">
          <li>
            <a
              href="https://linkedin.com/in/r3nanp"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/r3nanp"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <a href="mailto:renanmol87@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default About
