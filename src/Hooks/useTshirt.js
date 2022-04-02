import { useEffect } from "react";
import { useState } from "react"

const useTshirt = () => {
    const [tshirts, setTshirt] = useState([]);
    useEffect(() => {
        fetch("tshirts.json")
            .then(res => res.json())
            .then(data => setTshirt(data))
    }, []);
    return [tshirts, setTshirt];
}

export default useTshirt;
