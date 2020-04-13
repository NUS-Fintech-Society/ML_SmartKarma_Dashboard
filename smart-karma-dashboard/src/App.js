import React from 'react';

import Line from './components/Line.js'
import Pie from './components/Pie.js'

const data1 = [
  {
    name: '2020-04-12', stock: 2788.844,
  },
  {
    name: '2020-04-13', stock: 2786.893, 
  },
  {
    name: '2020-04-14', stock: 2786.503,
  },
  {
    name: '2020-04-15', stock: 2783.636,
  },
  {
    name: '2020-04-16', stock: 2782.897,
  },
  {
    name: '2020-04-17', stock: 2782.214,
  },
  {
    name: '2020-04-18', stock: 2784.536,
  },
  {
    name: '2020-04-19', stock: 2785.716,
  },
  {
    name: '2020-04-20', stock: 2784.975,
  },
  {
    name: '2020-04-21', stock: 2782.601,
  },
];

const data2 = [
  {
    name: '2020-04-12', sentiment: 2789.000,
  },
  {
    name: '2020-04-13', sentiment: 2788.749, 
  },
  {
    name: '2020-04-14', sentiment: 2787.981,
  },
  {
    name: '2020-04-15', sentiment: 2786.004,
  },
  {
    name: '2020-04-16', sentiment: 2784.558,
  },
  {
    name: '2020-04-17', sentiment: 2783.020,
  },
  {
    name: '2020-04-18', sentiment: 2784.844,
  },
  {
    name: '2020-04-19', sentiment: 2785.41,
  },
  {
    name: '2020-04-20', sentiment: 2785.025,
  },
  {
    name: '2020-04-21', sentiment: 2782.744,
  }
];

function App() {
  return (
    <div>
        <h3>Time-Series(S&P 500)</h3>
        <Line data={data1} dataKey="stock" title="time-series"/>
        <h3>Time-Series + sentiment analysis(S&P 500)</h3>
        <Line data={data2} dataKey="sentiment" title="time-series + sentiment analyiss"/>
    </div>
  );
}

export default App;
