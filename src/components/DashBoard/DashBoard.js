import React from 'react';
import { Container } from 'react-bootstrap';
import { Legend, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Treemap, XAxis, YAxis } from 'recharts';
import './DashBoard.css'
const DashBoard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div>
            <Container>
                <div className='chart-container mb-5'>
                    {/* line-chart */}
                    <div className='lineChart'>
                        <LineChart width={300} height={200} data={data}>
                            <Line dataKey={'investment'}></Line>
                            <Line dataKey={'sell'}></Line>
                            <XAxis dataKey={"month"} />
                            <YAxis />
                        </LineChart>
                    </div>
                    {/* pie chart  */}
                    <div className='pieChart'>
                        <PieChart width={300} height={200}>
                            <Pie data={data} dataKey="sell" nameKey="" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                            <Pie data={data} dataKey="investment" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        </PieChart>
                    </div>
                    {/* {RadarChart } */}
                    <div className='radarChart'>
                        <RadarChart outerRadius={90} width={300} height={200} data={data}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="month" />
                            <PolarRadiusAxis angle={30} domain={[0, 150]} />
                            <Radar name="investment" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            <Radar name="sell" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                            <Legend />
                        </RadarChart>
                    </div>
                    <div className='treemap'>
                        <Treemap
                            width={300}
                            height={200}
                            data={data}
                            dataKey="revenue"
                            ratio={4 / 3}
                            stroke="#fff"
                            fill="#8884d8"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DashBoard;