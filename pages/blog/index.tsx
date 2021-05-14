import Head from 'next/head'
import GetLDJson from '../../lib/ldjson'
import matter from 'gray-matter';

import { Header} from '../../components/Header'
import { Footer } from '../../components/Footer'
import { BlogPostListing } from '../../components/blog/BlogPostListing'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { BLOG_POSTS, DEFAULT_PAGE_COUNT, getAllPosts, getNumberOfPages, getPostsForPage } from '../../lib/PostLoader'
import Link from 'next/link';
import { PageNavigationButtons } from '../../components/blog/PageNavigationButtons';
import { BlogPageLayout } from '../../layouts/BlogPageLayout';

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = getPostsForPage(BLOG_POSTS, 1, DEFAULT_PAGE_COUNT);
  const numberOfPages = getNumberOfPages(BLOG_POSTS, DEFAULT_PAGE_COUNT);

  var nextPage: number = null;

  if (numberOfPages > 1) {
    nextPage = 2;
  }

  return {
    props: {
      posts,
      nextPage
    }
  }
}

interface Props {
  posts: [any]
  nextPage: number
}

const Blog: React.FC<Props> = ({posts, nextPage}) => {
  return (
    <BlogPageLayout>
      {posts.map(({id, date, title, description, category}, index) => (
        <BlogPostListing
        key={index}
        title={title}
        description={description}
        category={category}
        date={date}
        postId={id}
      >
        </BlogPostListing>              
      ))}

      <PageNavigationButtons
        previousPage={null}
        nextPage={nextPage}
        pageBaseUrl="/blog/"
      />
    </BlogPageLayout>
  )
}

export default Blog