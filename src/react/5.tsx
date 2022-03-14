import {useRef, useEffect} from 'react'

export function usePrevious<T>(value: T): T | undefined {
    const previous = useRef<T | undefined>()

    useEffect(() => {
        previous.current = value;
    }, [value])

    return previous.current
}
