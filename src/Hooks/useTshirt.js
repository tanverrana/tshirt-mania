import { useEffect } from "react";
import { useState } from "react"

const useTshirt = () => {
    const [tshirt, setTshirt] = useState([]);
    useEffect(() => {
        fetch("tshirts.json")
            .then(res => res.json())
            .then(data => setTshirt(data))
    }, []);
    return [tshirt, setTshirt];
}

export default useTshirt;
