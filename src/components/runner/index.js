import React, {useState, useEffect} from 'react'

function Runner(props) {
    const [count, setCount] = useState(10)

    useEffect(() => {
        let interval = setInterval(() => {
            setCount(count < 60 ? count + 1 : 0)
        }, 1000/60)

        return () => {
            clearInterval(interval)
            interval = null
        }
    })

    return (
        <div>{count}</div>
    )
}

export default Runner
