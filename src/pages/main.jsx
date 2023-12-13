import {useEffect} from "react";

export default function Main(){

    useEffect(() => {
        document.title = "Pokemon PWA - Main"
    }, [])

    return (
        <div>
            Main Page
        </div>
    );
}