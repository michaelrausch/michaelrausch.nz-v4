import { NextSeo } from "next-seo";
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header"
import { PageLayout } from "./PageLayout";

export const ProjectsPageLayout: React.FC = ({ children }) => {
    return (
        <PageLayout title="Featured Work">
            <NextSeo title="Featured Work"></NextSeo>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {children}
            </div>
        </PageLayout>
    )
}