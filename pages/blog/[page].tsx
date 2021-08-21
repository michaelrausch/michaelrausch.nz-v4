import { BlogPostListing } from '../../components/blog/BlogPostListing'
import { GetStaticPaths, GetStaticProps } from 'next'
import { BLOG_POSTS, DEFAULT_PAGE_COUNT, getNumberOfPages, getPostsForPage } from '../../lib/PostLoader'
import { PageNavigationButtons } from '../../components/blog/PageNavigationButtons';
import { BlogPageLayout } from '../../layouts/BlogPageLayout';

export const getStaticProps: GetStaticProps = async (context) => {
    const { page } = context.params;
    const currentPage = parseInt(page as string);

    const posts = getPostsForPage(BLOG_POSTS, currentPage, DEFAULT_PAGE_COUNT);
    const numberOfPages = getNumberOfPages(BLOG_POSTS ,DEFAULT_PAGE_COUNT);

    var nextPage: number = null;
    var previousPage: number = null;

    if (currentPage < numberOfPages) {
        nextPage = currentPage + 1;
    }

    if (currentPage !== 1) {
        previousPage = currentPage - 1;
    }

    return {
        props: {
            posts,
            numberOfPages,
            currentPage,
            nextPage,
            previousPage
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const numberOfPages = getNumberOfPages(BLOG_POSTS, DEFAULT_PAGE_COUNT);
    var pages = [];

    for (let index = 0; index < numberOfPages; index++) {
        pages.push({
            params: {
                page: `${index + 1}`
            }
        })
    }

    return {
        paths: pages,
        fallback: false,
    }
}

interface Props {
    posts: [any]
    numberOfPages: number
    currentPage: number
    nextPage?: number
    previousPage?: number
}

const Blog: React.FC<Props> = ({ posts, numberOfPages, currentPage, nextPage, previousPage }) => {
    return (
        <BlogPageLayout>
            {posts.map(({ id, date, title, description, category, tags }, index) => (
                <BlogPostListing
                    key={index}
                    title={title}
                    description={description}
                    category={category}
                    date={date}
                    postId={id}
                    tags={tags}
                />
            ))}

            <PageNavigationButtons
                nextPage={nextPage}
                previousPage={previousPage}
                pageBaseUrl="/blog/"
            />
        </BlogPageLayout>
    )
}

export default Blog