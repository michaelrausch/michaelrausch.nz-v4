import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react';
import { BlogPostLayout } from '../../layouts/BlogPostLayout';
import { DOCUMENTATION, getAllPostIds, getPostData } from '../../lib/PostLoader';

interface Params {
    id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params;
    const post = await getPostData(DOCUMENTATION, id as string);

    return {
        props: {
            post
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds(DOCUMENTATION);

    return {
        paths,
        fallback: false,
    }
}

interface Props {
    post: any
}


export const DocumentPost: React.FC<Props> = ({ post }) => {
    return (
        <BlogPostLayout title={post.title}>
            <article className="prose max-w-none prose-sm lg:prose-lg xl:prose-xl" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </BlogPostLayout>
    )
}

export default DocumentPost;
