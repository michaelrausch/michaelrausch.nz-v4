import Link from "next/link"

interface Props {
    previousPage?: number;
    nextPage?: number;
    pageBaseUrl: string;
}


export const PageNavigationButtons: React.FC<Props> = ({previousPage, nextPage, pageBaseUrl}) => {
    return (
        <div className="w-full py-20">
            {previousPage &&
                <Link href={pageBaseUrl + previousPage}>
                    <a className="bg-yellow py-2 px-5 text-white rounded-md left  text-center float-left" >Previous </a>
                </Link>
            }

            {nextPage &&
                <Link href={pageBaseUrl + nextPage}>
                    <a className="bg-yellow py-2 px-5 text-white rounded-md  text-center float-right">Next Page</a>
                </Link>
            }
        </div>   
    )
}