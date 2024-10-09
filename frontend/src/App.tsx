import { useEffect, useState } from 'react'
import { Button } from './components/ui/button'

function App() {
    const [get, set] = useState(0)

    useEffect(() => {
        return () => {
            
        }
    }, []);

    return (
        <>
            <div className="text-red w-20 p-4 text-[32px]">Hello, penis!</div>
            <Button onClick={() => set(get + 1)}>Penis! {get}</Button>
        </>
    )
}

export default App
