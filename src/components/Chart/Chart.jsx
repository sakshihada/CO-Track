import React, { useState, useEffect } from 'react'
import { fetchDailyData } from "../../api"
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
const Chart = ({ data: {confirmed, recovered, deaths}, country }) => {
    const [dailyData, setDailydata] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            setDailydata(await fetchDailyData());
        }
        console.log(dailyData);
        fetchApi();
    }, []);
    const lineChart = (
        dailyData.length
            ?
            <Line data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true
                }]
            }} />
            :
            null
    );
    const barChart = (
        confirmed
            ?
            <Bar data={{
                labels:['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label:'People',
                    backgroundColor:['rgba(6, 6, 124, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(182, 4, 4, 0.5)'],
                    data:[confirmed.value, recovered.value, deaths.value]
                }],
            }}
            options={{
                legend:{ display: false},
                title: {display:true, text:`Current State in ${country}`}
            }} />
            :
            null
    )
    return (
        <div className={styles.chartContainer}>
            {country? barChart : lineChart}
        </div>
    )
}

export default Chart
