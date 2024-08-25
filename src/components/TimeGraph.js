import React from 'react';
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Seconds in a minute','Seconds in an hour'],
  datasets: [{
    data: [60,3600],
    backgroundColor: [
      'rgb(0, 97, 10)',
      'rgb(0, 100, 243)'
    ],
    borderWidth: 2,
    radius: '40%'   
  }]
};

function TimeGraph() {
  return (
    <div>
        <Doughnut data={data}/>
    </div>
  );
}

export default TimeGraph;