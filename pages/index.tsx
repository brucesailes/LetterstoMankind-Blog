import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Container from "../components/container";
import HeroPost from "../components/hero-post";
import MoreStories from "../components/more-stories";
import { GetStaticProps } from "next";
import { getAllPostsForHome } from "../lib/api";


interface Post {
  title: string;
  excerpt: string;
  slug: string;
  date: string; // Use camelCase for consistency
  image: string; // Ensure this matches how you map your GraphQL response
}

export default function Home({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <div className="bg-gray-100 dark:bg-gray min-h-screen py-8">
      <Head>
        <title>Letters to Mankind</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container mx-auto px-4">
      <div className="text-center mb-8">
          <Link href="https://brucesailes.com" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1">
              Home
            </a>
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600 transition-transform transform hover:scale-105">The Letters to Mankind</h1>
        <div className="border border-gray-300 rounded-lg shadow-lg bg-white p-6 mb-8 transition-transform transform hover:scale-105">
          <p className="text-2xl font-bold text-center mb-8 text-blue-600 transition-transform transform hover:scale-105">BEFORE YOU READ</p>
          <p className="text-lg text-center text-gray-700 mb-8">Get The Latest Issue Of The Letters to Mankind Sent Straight To Your Inbox</p>
          <p className="text-lg text-center text-gray-700 mb-8">Join the rest of the human race getting mind blown every week while reading The Letters to Mankind (you’ll learn a bit about life, spirituality & business too.)</p>
          <div className="flex justify-center mb-8">
            <a href="https://theletterstomankind-newsletter.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-700">Subscribe here</a>
          </div>
        </div>
        <div className="p-6 mb-8">
          <p className="text-lg text-center text-gray-700 mb-8">Embark on a Journey of Curiosity and Transformation</p>
          <p className="text-lg text-center text-gray-700 mb-8">Delve into profound discussions on human potential, lifestyle craftsmanship, and the art of entrepreneurship</p>
        </div>
        <Container>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
        </div> 
      </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};

