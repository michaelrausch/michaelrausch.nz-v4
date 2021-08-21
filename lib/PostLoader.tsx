import matter from 'gray-matter'
import fs from 'fs';
import path from 'path';
import remark from "remark";
import html from "remark-html";

/**
 * Content Directories
 */
export const BLOG_POSTS = path.join(process.cwd(), 'content/blogs')
export const DOCUMENTATION = path.join(process.cwd(), 'content/documents')
export const PROJECTS = path.join(process.cwd(), 'content/projects')

/**
 * Constants
 */
export const DEFAULT_PAGE_COUNT = 5

/**
 * Get a list of all posts in a directory
 * 
 * @param contentDirectory - The directory where the posts are located
 * @returns List of all posts in the content directory
 */
export const getAllPosts = (contentDirectory: string) => {
    const fileNames = fs.readdirSync(contentDirectory)
    
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "");
        const fullPath = path.join(contentDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf-8")
        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data
        }
    })

    // TODO: Sort
    return allPostsData
}

/**
 * Get all the post IDs from a content directory
 * 
 * @param contentDirectory - The directory where the posts are located
 * @returns - List of Post IDs
 */
export const getAllPostIds = (contentDirectory: string) => {
    const fileNames = fs.readdirSync(contentDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, "")
            },
        };
    });
};

/**
 * Get the contents of a specific post
 * 
 * @param contentDirectory - Directory where the post is stored
 * @param id - The posts ID (filename)
 * @returns - The posts id, content, and matter
 */
export const getPostData = async (contentDirectory: string, id: string) => {
    const fullPath = path.join(contentDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(require('remark-external-links'), { target: '_blank', rel: ['nofollow']})
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}

/**
 * Calculate the number of pages for a content type
 * 
 * @param contentDirectory - The directory to scan
 * @param postsPerPage - How many posts we want per page
 * @returns - The total number of pages
 */
export const getNumberOfPages = (contentDirectory: string, postsPerPage: number) => {
    const postIds = getAllPostIds(contentDirectory);
    return Math.ceil(postIds.length / postsPerPage);
}

/**
 * Gets all the posts for a specified page
 * 
 * @param contentDirectory - Directory where the posts are stored
 * @param pageNumber - The page number to return
 * @param postsPerPage - How many posts we want per page
 * @returns 
 */
export const getPostsForPage = (contentDirectory: string, pageNumber: number, postsPerPage: number) => {
    const allPosts = getAllPosts(contentDirectory);

    // Check we're not going to overflow (is this correct?)
    if (pageNumber * postsPerPage > allPosts.length) {
        // Should we error out here?
        return allPosts;
    }

    const startIndex = (pageNumber * postsPerPage) - 1
    const endIndex = startIndex + postsPerPage

    return allPosts.slice(startIndex, endIndex)
}