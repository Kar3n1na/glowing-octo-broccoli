import React from 'react'
import {Line} from 'react-chartjs-2'
import '../assets/css/Graphics.css'
const Graphics = (props) => {

    const data= {
        labels: ["1","2","3", "4","5","6"],
        datasets: [{
            label: "Aqui el titulo del grafico",
            fill: false,
            backgroundColor: 'rgba(73,155,234,1)',
            borderColor: 'rgba(73,155,234,1)',
            pointBorderColor: 'rgba(73,155,234,1)',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(73,155,234,1)',
            pointHoverBorderColor: 'rgba(73,155,234,1)',
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0.17,19,156,357,565, 1149]
        }]
    }
    return (
        <div className="containerGraphics">
            <Line data={data}/>
        </div>
    )
}

export default Graphics
