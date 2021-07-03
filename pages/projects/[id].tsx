
import { PROJECTS, getAllPostIds, getPostData } from '../../lib/PostLoader'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react';
import { BlogPostLayout } from '../../layouts/BlogPostLayout';

interface Params {
    id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params;
    const post = await getPostData(PROJECTS, id as string);

    return {
        props: {
            post
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds(PROJECTS);

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
        <BlogPostLayout title={post.title} hero={post.heroUrl}>
            <article className="prose max-w-none prose-sm lg:prose-lg xl:prose-xl prose-dark" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </BlogPostLayout>
    )
}

export default BlogPost;
