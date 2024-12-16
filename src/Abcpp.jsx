import React from "react";
import "./app.css"

const Card = () => {
    return <div className="Card">Card</div>
}

const Header = () => {
    return <div className="Header">Header</div>
}

const App = () => {
    return <div>
        <div><Header /></div>
        <div className="Cards">
           <Card /> 
           <Card /> 
           <Card /> 
           <Card /> 
        </div>
    </div>
}

export default App;