"use client"
import React,{useState} from "react"
import "./globals.css"
import ShuffleType from "./component/ShuffleType/index"
export default function Home(){
    const [rerenderKey, setRerenderKey] = useState(0);

 const handleButtonClick = () => {
    setRerenderKey((prevKey) => prevKey + 1); // Increment the key to trigger a re-render
 };
    return(
        <body>
        <main>
        <a href="https://www.linkedin.com/in/omar-fertat-30953717b/" target="_blank" rel="noopener noreferrer">
        <div className="decodeContainer" key={rerenderKey}>
        <ShuffleType text="Hello fellow nerds" className= "codedText"/>
        <ShuffleType text="this Decoding animation took me 2 days to create " className= "codedText"/>
        <ShuffleType text="worth the time... lol" className= "codedText"/>
        <ShuffleType text="omar fertat" className= "codedText"/>
        </div>
        </a>
        <button className="reRenderBtn" onClick={handleButtonClick}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32"><path fill="white" d="M24.083 15.5a8.596 8.596 0 0 1-8.583 8.583A8.597 8.597 0 0 1 6.915 15.5A8.596 8.596 0 0 1 15.5 6.915c1.913 0 3.665.63 5.09 1.686l-1.782 1.784l8.43 2.256l-2.26-8.427l-1.89 1.89A12.036 12.036 0 0 0 15.5 3.415C8.826 3.418 3.418 8.825 3.416 15.5c.002 6.675 5.41 12.083 12.084 12.083S27.583 22.175 27.583 15.5z"/></svg></button>
        </main>
        </body>      
    )
}