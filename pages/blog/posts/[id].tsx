
import { BLOG_POSTS, getAllPostIds, getPostData } from '../../../lib/PostLoader'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react';
import { BlogPostLayout } from '../../../layouts/BlogPostLayout';

interface Params {
    id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params;
    const post = await getPostData(BLOG_POSTS, id as string);

    return {
        props: {
            post
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds(BLOG_POSTS);

    return {
        paths,
        fallback: false,
    }
}

interface Props {
    post: any
}


export const BlogPost: React.FC<Props> = ({ post }) => {
    return (
        <BlogPostLayout title={post.title}>
            <article className="prose max-w-none prose-sm lg:prose-lg xl:prose-xl" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </BlogPostLayout>
    )
}

export default BlogPost;
