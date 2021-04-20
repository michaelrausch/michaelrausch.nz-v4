
export default function SectionWithTitle(props) {
    return (
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-20">
            <div className="">
                <h1 className="text-white text-4xl font-extrabold  pb-10 ">{props.title} </h1>
                {props.children}
            </div>
        </div>
    )
}

