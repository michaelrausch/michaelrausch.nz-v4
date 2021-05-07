
export default function Section(props) {
    return (
        <div className="">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-20 z-100">
                <div className="">
                    {props.children}
                </div>
            </div>
        </div>
    )
}