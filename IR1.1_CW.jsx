import { func } from 'prop-types'
import './App.css'

const MyComponent = () => {
    return <h1>Hello, JSX!</h1>
}

export default function App() {
    return (
        <div>
        {/* rendering JSX */}

        <MyComponent />
        <MyComponent />
        <MyComponent />
        </div>


    )
}