
export default function SectionWithBg(props) {
    return (
        <div className="bg-wave bg-no-repeat bg-center bg-cover mt-10 md:mt-36 py-10 sm:py-20 px-5 sm:px-0">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-20">
                <div className="">
                    {props.children}
                </div>
            </div>
        </div>
    )
}