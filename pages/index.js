import Head from 'next/head'
import Image from 'next/image';
import {Hero} from "../section"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Regan: We Help Businesses Generate Revenue With SEO</title>
        <meta name="description" content="Let us help you drive the conversations that lead to more revenue for your business" />
        <link rel="icon" href="/logo-v3-svg.svg" />
      </Head>

      <main>
        <Hero />
      </main>

    </div>
  )
}
