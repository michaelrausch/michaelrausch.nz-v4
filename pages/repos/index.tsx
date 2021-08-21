import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo';
import React from 'react';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { JumbotronV2 } from '../../components/home/JumbotronV2';
import { InvoiceLayout } from '../../layouts/InvoiceLayout';

const contentful = require("contentful");
const axios = require('axios').default;

const API_URL = "https://api.github.com/users/michaelrausch/repos"

export const getServerSideProps: GetServerSideProps = async (context) => {
    var repos = []
    var response

    try {
        response = await axios.get(API_URL)
    } catch (error) {
        return {
            props: {
                repos
            }
        }
    }

    response.data.forEach(repo => {
        if (repo.archived) return
        if (!repo.description) return

        repos.push({
            name: repo.name,
            full_name: repo.full_name,
            url: repo.html_url,
            git: repo.git_url,
            desc: repo.description,
            updated_at: repo.updated_at
        })
    });

    repos.sort(function (a, b) {
        return +new Date(b.updated_at) - +new Date(a.updated_at);
    });

    return {
        props: {
            repos
        }
    }
}

interface Props {
    repos: any
}

export const Repos: React.FC<Props> = ({ repos }) => {
    const repoList = repos.map((repo, index) => {
        return (
            <li key={index} className="text-white font-sourcecode py-10">
                <p className="text-2xl text-green-500 font-black">{repo.name}</p>
                <p className="text-sm text-gray-200 ">{repo.full_name}</p>

                <p className="py-4">{repo.desc}</p>

                <a href={repo.url} target="_blank" className="pt-5 text-md font-bold">View On Github &#12297;</a>
            </li>
        )
    })

    return (
        <div className="bg-gray-900">
            <NextSeo
                title="Repositories"
            />

            <Header></Header>

            <Container>
                <h1 className="font-futura-pt-bold text-4xl mb-10 text-center text-white pb-10 p-5 sm:p-0 sm:text-6xl sm:text-left">Git Repositories</h1>

                <a href="https://github.com/michaelrausch" target="_blank" className="bg-white text-black font-futura-pt-bold py-3 px-5 my-5">View Github Profile &#12297;</a>

                <ul className="divide-y-2 divide-gray-700 p-5 sm:p-0">
                    {repoList}
                </ul>
            </Container>

            <Footer
                name="Michael Rausch"
                instagramUrl="https://www.instagram.com/michaelnz_/"
                linkedinUrl="https://www.linkedin.com/in/michael-rausch-13445b8a/"
            ></Footer>
        </div>
    )
}

export default Repos;
