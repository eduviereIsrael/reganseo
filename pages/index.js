import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Regan: We Help Businesses Generate Revenue With SEO</title>
        <meta name="description" content="Let us help you drive the conversations that lead to more revenue for your business" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
      </main>

    </div>
  )
}
