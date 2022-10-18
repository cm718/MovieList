import { useState } from "react";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const updateInput = event => setValue(event.target.value)
    return [value, setValue, updateInput]
}

export default useInput