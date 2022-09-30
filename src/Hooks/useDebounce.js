import { useState, useEffect } from 'react'

function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value)

    useEffect(() => {
        const timeout = setTimeout(() => setDebounce(value), delay)

        return () => clearTimeout(timeout)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return debounce
}

export default useDebounce
