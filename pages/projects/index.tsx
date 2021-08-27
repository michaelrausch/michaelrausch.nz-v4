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
      {posts.map(({title, description, imageUrl, color, technologies, outUrl, style}, index) => (
        <CollectionPostListing
        key={index}
        title={title}
        description={description}
        imageUrl={imageUrl}
        color={color}
        technologies={technologies}
        outUrl={outUrl}
        style={style}
      >
        </CollectionPostListing>              
      ))}
    </ProjectsPageLayout>
  )
}

export default Blog