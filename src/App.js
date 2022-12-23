import React from "react";
import "./styles.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    answer: 3,
    votes: 0
  },
  {
    answer: 2,
    votes: 1
  },
  {
    answer: 1,
    votes: 2
  }
];

const App = () => {
  return (
    <div className="App">
      <AreaChart width={700} height={400} data={data} margin={{ bottom: 25 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="votes"
          label={{
            value: "Votes",
            angle: 0,
            dy: 20
          }}
        />
        <YAxis
          dataKey="answer"
          label={{
            value: "Answer",
            position: "insideLeft",
            angle: -90,
            dy: 20
          }}
        />
        <Tooltip
          content={({ _active, payload, _label }) => {
            return (
              <div
                style={{
                  backgroundColor: "white"
                }}
              >
                <h3 style={{ margin: 0, padding: 5 }}>
                  answer: {payload[0]?.payload.answer}
                </h3>
                <h3 style={{ margin: 0, padding: 5 }}>
                  votes: {payload[0]?.payload.votes}
                </h3>
              </div>
            );
          }}
        />
        <Area
          type="monotone"
          dataKey="answer"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </div>
  );
};

export default App;
