import React from "react"

export default function Main(props){
    return (
      <div>  
        <div className="content--container">
            <div>
                <img src={props.item.imageUrl} className="content--image"/>
            </div>   
            <div className="info-container">
                <div className="location-container">
                    <img src="./images/location-logo.png" className="location--logo"/>
                    <h2>{props.item.location}</h2>
                    <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>    
                <div className="date-container">
                     <h1>{props.item.title}</h1>
                     <h3>{props.item.startDate} - {props.item.endDate}</h3>
                </div>
                <div className="description-container">    
                     <p>{props.item.description}</p>
                </div>
            </div>
        </div>
     </div>   
    )
}