import {useEffect, useRef} from "react";

export function useIsFirstRender(): boolean {
    const isFirstRender = useRef<boolean>(true)
    useEffect(() => {
        isFirstRender.current = false
    })
    return isFirstRender.current;
}
