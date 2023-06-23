import {GraphQLClient, gql} from 'graphql-request';
import { THEME } from '../../styles/theme/theme';
import Head from 'next/head';
import { RichText } from '@graphcms/rich-text-react-renderer';




import React from 'react'
import { BlogBody, BlogIntro, BlogPageDiv } from '../../styles/blogPage';

const BlogPage = ({post}) => {

    const {
        date,
        description,
        seoDescription,
        seoTitle,
        slug,
        title,
        coverImage,
        mainPost
    } = post

//   console.log(props.post)  
  return (
    <>
    <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="icon" href="/logo-v3-svg.svg" />

    </Head>
    <BlogPageDiv>
        <BlogIntro>
            <p className="date">{date}</p>
            <h1>{title}</h1>
            <p className="description">{description}</p>
            <img className='cover-image' src={coverImage.url} alt={seoTitle} />
        </BlogIntro>
        <BlogBody>
            <RichText content={mainPost.raw} />
        </BlogBody>
    </BlogPageDiv>
    </>
  )
}



const graphCms = new GraphQLClient("https://api-eu-west-2.hygraph.com/v2/cldiwvzye000u01tb4e0wepw7/master");

const SLUGLIST = gql `
  {
    posts{
      slug
    }
  }
`;

const QUERY = gql`
  query posts($slug:String!){
    post(where: {slug: $slug}){
        date,
        description,
        seoDescription,
        seoTitle,
        slug,
        title,
        coverImage {
            url,
        },
        mainPost{
            raw
        }
    }
  }
`;

export async function getStaticProps({params}){
  const slug = params.slug
  const data = await graphCms.request(QUERY, {slug});
  const post = data.post
  return {
    props: {
      post,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths(){
    const {posts} = await graphCms.request(SLUGLIST);

    return {
      paths: posts.map((post) => ({params: {slug: post.slug}})),
      fallback: false
    }
}

export default BlogPage