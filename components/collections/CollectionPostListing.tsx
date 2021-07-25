import React from 'react';
import Link from 'next/link'
import { motion } from "framer-motion"
import { toast } from 'react-toastify';

interface Props {
    category: string;
    date: string;
    title: string;
    description: string;
    postId: string;
    imageUrl: string;
    color: string;
    heroUrl: string;
    technologies: string;
    outUrl: string;
}

export const CollectionPostListing: React.FC<Props> = ({ category, date, title, description, postId, imageUrl, color, heroUrl, technologies, outUrl }) => {
    return (
        <a className="w-full" href={outUrl} target="_blank">
            <motion.div className="overflow-hidden shadow-lg cursor-pointer m-auto w-full p-10 rounded-md h-full" style={{ backgroundColor: color }} whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.958 }} >
                <img alt="blog photo" src={imageUrl} className="max-h-96 object-cover self-center mx-auto" />
                <div className="dark:bg-gray-800 w-full pt-14">
                    <p className="text-md font-medium text-gray-200">
                        Featured Project
                    </p>
                    <p className="text-gray-100 text-4xl font-bold mb-2">
                        {title}
                    </p>
                    <p className="text-gray-100 text-base font-base mt-3">
                        {description}
                    </p>
                    <p className="text-gray-100 text-sm font-sourcecode mt-5">
                        {technologies}
                    </p>
                </div>
            </motion.div>
        </a>
    )
}