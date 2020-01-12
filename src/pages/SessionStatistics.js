import React from 'react';
// import PieChart from './PieChart'
import Grid from '@material-ui/core/Grid';

import {
    PieChart, Pie, Cell, Tooltip,
  } from 'recharts';

  const data = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }
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
                    <h1> Hello world </h1>
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default SessionStatistics