import React, {useEffect, useRef} from 'react';

export function useTimeout(callback: () => void, delay: number) {
    const callbackRef = useRef(callback)
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback])

    useEffect(() => {
        const id = setTimeout(() => callback(), delay);
        return () => clearTimeout(id)
    }, [delay])
}

