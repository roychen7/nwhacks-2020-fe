import React from 'react';
// import PieChart from './PieChart'
import Grid from '@material-ui/core/Grid';

import {
    PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend,

  } from 'recharts';

  const data = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }
  ];

  const databar = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  
//   const data02 = [
//     { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
//     { name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
//     { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 },
//   ];
  
  
class SessionStatistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: ['Under 18', 'Age 18-54', 'Age 55+'],
            datasets: [{
                data: [2000, 4000, 2850], 
                backgroundColor: ['red', 'blue', 'green']
            }]
        }
    }

    render() {
        return (
            <div>
            <Grid container>
                <Grid xs={6}>
                    <PieChart width={400} height={400}>
                        <Pie dataKey="value" isAnimationActive={false} data={data} cx={170} cy={120} outerRadius={80} fill="#8884d8" label>
                        {
                            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                        </Pie>
                        {/* <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
                        <Tooltip />
                    </PieChart>
                </Grid>
                <Grid xs={6}>
                <BarChart
                    width={500}
                    height={300}
                    data={databar}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>   
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default SessionStatistics
