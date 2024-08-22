import * as d3 from 'd3';

const Graphic = ({ width, height, data }) => {
    const xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.start))
    .range([0, width])
    .padding(0.1);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.time)])
    .nice()
    .range([height, 0]);

  return (
    <div className="container">
      <svg width={width} height={height} className="viz" viewBox={`0 0 ${width} ${height}`}>
        <g className="bars">
          {data.map((d) => (
            <rect
              key={d.time}
              x={xScale(d.start)}
              y={yScale(d.time)}
              height={height - yScale(d.time)}
              width={xScale.bandwidth()}
              fill="#6baed6"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Graphic;