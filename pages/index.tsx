import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
   <>
    <Head>
      <title>Blog do Marcelo</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="bg-red-800">
    <h1 className="text-blue-800">Bom dia</h1>
    </div>
  </>
  )
}

export default Home
