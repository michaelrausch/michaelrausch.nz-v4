import { BlogPostListing } from '../../components/blog/BlogPostListing'
import { GetStaticProps } from 'next'
import { BLOG_POSTS, DEFAULT_PAGE_COUNT, getNumberOfPages, getPostsForPage } from '../../lib/PostLoader'
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