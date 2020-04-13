import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class Example extends PureComponent {


  render() {
    var data = this.props.data
    var datakey = this.props.dataKey
    var title = this.props.title
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 25, right: 30, left: 100, bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={['dataMin - 20', 'dataMax + 20']} />
        <Tooltip />
        <Legend />
        {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
        <Line type="monotone" dataKey={datakey} stroke="#82ca9d" />
      </LineChart>
    );
  }
}
