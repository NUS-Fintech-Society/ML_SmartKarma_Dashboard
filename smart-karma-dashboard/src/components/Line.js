import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  { Date: "1-Mar-20", Sentiment: 0.010816768000000001, Volume: 33 },
  { Date: "2-Mar-20", Sentiment: 0.439957968, Volume: 43 },
  { Date: "3-Mar-20", Sentiment: 0.7038349540000001, Volume: 63 },
  { Date: "4-Mar-20", Sentiment: 0.34041049700000003, Volume: 14 },
  { Date: "5-Mar-20", Sentiment: 0.046188293, Volume: 46 },
  { Date: "6-Mar-20", Sentiment: 0.128944741, Volume: 53 },
  { Date: "7-Mar-20", Sentiment: 0.329317158, Volume: 38 },
  { Date: "8-Mar-20", Sentiment: 0.727143249, Volume: 1 },
  { Date: "9-Mar-20", Sentiment: 0.91492311, Volume: 44 },
  { Date: "10-Mar-20", Sentiment: 0.516282836, Volume: 25 },
  { Date: "11-Mar-20", Sentiment: 0.57842693, Volume: 47 },
  { Date: "12-Mar-20", Sentiment: 0.7241933629999999, Volume: 3 },
  { Date: "13-Mar-20", Sentiment: 0.9363149190000001, Volume: 30 },
  { Date: "14-Mar-20", Sentiment: 0.8458509679999999, Volume: 41 },
  { Date: "15-Mar-20", Sentiment: 0.051847394000000005, Volume: 38 },
  { Date: "16-Mar-20", Sentiment: 0.45462375200000005, Volume: 52 },
  { Date: "17-Mar-20", Sentiment: 0.614835076, Volume: 19 },
  { Date: "18-Mar-20", Sentiment: 0.7183741579999999, Volume: 51 },
  { Date: "19-Mar-20", Sentiment: 0.278656199, Volume: 27 },
  { Date: "20-Mar-20", Sentiment: 0.643656855, Volume: 35 },
  { Date: "21-Mar-20", Sentiment: 0.73744957, Volume: 44 },
  { Date: "22-Mar-20", Sentiment: 0.683445515, Volume: 22 },
  { Date: "23-Mar-20", Sentiment: 0.6230386489999999, Volume: 15 },
  { Date: "24-Mar-20", Sentiment: 0.8458148209999999, Volume: 23 },
  { Date: "25-Mar-20", Sentiment: 0.683278119, Volume: 69 },
  { Date: "26-Mar-20", Sentiment: 0.336857109, Volume: 64 },
  { Date: "27-Mar-20", Sentiment: 0.332499612, Volume: 68 },
  { Date: "28-Mar-20", Sentiment: 0.313274544, Volume: 58 },
  { Date: "29-Mar-20", Sentiment: 0.15917499300000001, Volume: 19 },
  { Date: "30-Mar-20", Sentiment: 0.866574341, Volume: 35 },
  { Date: "31-Mar-20", Sentiment: 0.510538791, Volume: 52 },
  { Date: "1-Apr-20", Sentiment: 0.007328033, Volume: 24 },
  { Date: "2-Apr-20", Sentiment: 0.763883443, Volume: 46 },
  { Date: "3-Apr-20", Sentiment: 0.890470146, Volume: 69 },
  { Date: "4-Apr-20", Sentiment: 0.48502349299999997, Volume: 32 },
  { Date: "5-Apr-20", Sentiment: 0.11956155199999999, Volume: 4 },
  { Date: "6-Apr-20", Sentiment: 0.49716483100000003, Volume: 39 },
  { Date: "7-Apr-20", Sentiment: 0.041854312000000005, Volume: 11 },
  { Date: "8-Apr-20", Sentiment: 0.702148019, Volume: 13 }
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/q5atk5jr/";

  render() {
    return (
      <ComposedChart
        width={1000}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 80,
          bottom: 20,
          left: 20
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          dataKey="Date"
          label={{ value: "Date", position: "center", offset: 10 }}
        />
        <YAxis
          yAxisId="left"
          label={{ value: "Sentiment", angle: -90, position: "insideLeft" }}
        />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
        <Bar yAxisId="left" dataKey="Sentiment" barSize={15} fill="#413ea0" />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="Volume"
          stroke="#ff7300"
        />
      </ComposedChart>
    );
  }
}
