import { useState } from "react"

export default function App(){
    const [color ,setColor]=useState("olive")
    return(
        <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
            <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2"> 
                <div className="flex flex-wrap justify-center shodow-lg gap-3 bg-white px-2 py-2 rounded-xl">
                    <button
                    onClick={()=> setColor("red")}
                     className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red
                        </button>
                        <button
                         onClick={()=> setColor("green")}
                         className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green
                        </button>
                        <button
                         onClick={()=> setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue
                        </button>
                        <button 
                         onClick={()=> setColor("purple")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>Purple
                        </button>
                </div>

            </div>
        </div>
       
    )
}
