import React from 'react';
import Link from 'next/link'
import { motion } from "framer-motion"

interface Props {
    category: string;
    date: string;
    title: string;
    description: string;
    postId: string;
    imageUrl: string;
    color: string;
    heroUrl: string;
}

export const CollectionPostListing: React.FC<Props> = ({category, date, title, description, postId, imageUrl, color, heroUrl}) => {
    return (
        <motion.div className="overflow-hidden shadow-lg cursor-pointer m-auto w-full p-10 rounded-md" style={{backgroundColor: color}} whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.958 }} >
            <Link href={"/projects/" + postId}>
                <a className="w-full block h-full">
                    <img alt="blog photo" src={imageUrl} className="max-h-96 object-cover self-center mx-auto"/>
                    <div className="dark:bg-gray-800 w-full py-10">
                        <p className="text-gray-100 dark:text-white text-4xl mb-2">
                            {title}
                        </p>
                        <p className="text-md font-medium text-gray-200">
                            {category}
                        </p>
                    </div>
                </a>
            </Link>
        </motion.div>
    )
}