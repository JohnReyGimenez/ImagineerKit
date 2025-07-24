import { link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div>
            <h2>Page not found!</h2>
        <link to={'/'}>
            <button>Go back home</button>
        </link>
        </div>
    )
}