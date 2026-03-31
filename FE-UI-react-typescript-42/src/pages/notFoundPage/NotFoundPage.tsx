import { Link } from "react-router"


const NotFoundPage = () => {
    return (
        <div className="notFoundPage">
            <div className="container mx-auto">
                <div className="innerFoundPage flex flex-col gap-5 h-dvh bg-gray-500">
                    <h1 className="text-4xl font-bold">404</h1>
                    <p className="text-gray-600 mt-2">Page Not Found</p>
                    <Link to="/" className="mt-4 text-blue-500 underline">
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage
