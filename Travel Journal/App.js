import React from "react"
import Header from "./components/Header.js"
import Main from "./components/Main.js"
import data from "./data"

export default function App(){
        const content = data.map(item => {
        return (
            <Main
                key={item.id}
                item={item}
            />
        )
    })      
    
    return (
        <div>
            <Header/>
            
            {content}
            
        </div>    
    )
}