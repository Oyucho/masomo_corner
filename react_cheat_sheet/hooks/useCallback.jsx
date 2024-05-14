import { useCallback } from "react";

const memoizedCallback = useCallback(() => {
    //Your callback function here
}, [dependencies]);