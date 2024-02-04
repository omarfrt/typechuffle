import "./globals.css"
import ShuffleType from "./component/ShuffleType/index"
export default function Home(){
    return(
        <body>
        <main>
        <div className="decodeContainer">
        <ShuffleType text="Hello fellow nerds" className= "codedText"/>
        <ShuffleType text="this Decoding animation took me 2 days to create " className= "codedText"/>
        <ShuffleType text="worth the time... lol" className= "codedText"/>
        <ShuffleType text="omar fertat" className= "codedText"/>
        </div>
        </main>
        </body>      
    )
}