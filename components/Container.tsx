
export const Container: React.FC = ({children}) => {
    return (
        <div className="max-w-7xl mx-auto sm:px-6 pt-20 z-100">
            {children}
        </div>
    )
}