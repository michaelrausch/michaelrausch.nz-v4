import LibraryVideo from "../components/library/LibraryVideo";
import { PageLayout } from "../layouts/PageLayout";

const Library: React.FC = () => {
    return (
        <PageLayout title="Library">

            <h2 className="text-white text-xl">Videos</h2>
            <LibraryVideo></LibraryVideo>
            <LibraryVideo></LibraryVideo>
            <LibraryVideo></LibraryVideo>
            <LibraryVideo></LibraryVideo>
            <LibraryVideo></LibraryVideo>
            <LibraryVideo></LibraryVideo>
            <LibraryVideo></LibraryVideo>
            <LibraryVideo></LibraryVideo>
            <LibraryVideo></LibraryVideo>
            <LibraryVideo></LibraryVideo>
        </PageLayout>
    )
}

export default Library;