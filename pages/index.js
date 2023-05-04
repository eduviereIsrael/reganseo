import Head from 'next/head'
import Image from 'next/image';
import Hero from '../components/hero/hero.component';
import Problems from '../components/problems/problems.component';
import FirstBanner from '../components/first-banner/first-banner.component';
import Testimonial from '../components/testimonial/testimonial.component';
import SecondBanner from '../components/second-banner/second-banner.component';
// import {CaseStudy, Hero, Services, ImageSection, About} from "../section"
import { THEME } from '../styles/theme/theme';


export default function Home() {

  return (
    <div className='app'>
      <Head>
        <title>Regan: We Help Businesses Generate Revenue With SEO</title>
        <meta name="description" content="Let us help you drive the conversations that lead to more revenue for your business" />
        <link rel="icon" href="/logo-v3-svg.svg" />
      </Head>

      <main>
        <Hero />
        <Problems />
        <FirstBanner />
        <Testimonial />
        <div style={{backgroundColor: THEME.colors.light1}}>
        <SecondBanner />
        </div>
      </main>

    </div>
  )
}
