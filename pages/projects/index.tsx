import { GetStaticProps } from 'next'
import { PROJECTS, DEFAULT_PAGE_COUNT, getNumberOfPages, getPostsForPage } from '../../lib/PostLoader'
import { ProjectsPageLayout } from '../../layouts/ProjectsPageLayout';
import { CollectionPostListing } from '../../components/collections/CollectionPostListing';

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = getPostsForPage(PROJECTS, 1, 50);
  const numberOfPages = getNumberOfPages(PROJECTS, DEFAULT_PAGE_COUNT);

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
    <ProjectsPageLayout>
      {posts.map(({id, date, title, description, category, imageUrl, color, heroUrl}, index) => (
        <CollectionPostListing
        key={index}
        title={title}
        description={description}
        category={category}
        date={date}
        postId={id}
        imageUrl={imageUrl}
        heroUrl={heroUrl}
        color={color}
      >
        </CollectionPostListing>              
      ))}
    </ProjectsPageLayout>
  )
}

export default Blog