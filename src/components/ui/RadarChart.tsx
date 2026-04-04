import React from "react";

interface RadarData {
  block: string;
  percentage: string | number;
}

interface RadarChartProps {
  data: RadarData[];
  size?: number;
}

export const RadarChart: React.FC<RadarChartProps> = ({ data, size = 400 }) => {
  const padding = 80; // Increased padding for labels
  const radius = (size - padding * 2) / 2;
  const centerX = size / 2;
  const centerY = size / 2;

  // Number of axes
  const numAxes = data.length;

  // Helper to convert polar to cartesian
  const getCoordinates = (index: number, value: number) => {
    const angle = (Math.PI * 2 * index) / numAxes - Math.PI / 2;
    const x = centerX + radius * (value / 100) * Math.cos(angle);
    const y = centerY + radius * (value / 100) * Math.sin(angle);
    return { x, y };
  };

  // Background circles (grid)
  const gridLevels = [25, 50, 75, 100];
  const gridLines = gridLevels.map((level) => {
    const points = Array.from({ length: numAxes }).map((_, i) => {
      const { x, y } = getCoordinates(i, level);
      return `${x},${y}`;
    });
    return points.join(" ");
  });

  // Data path
  const dataPoints = data.map((d, i) => {
    const { x, y } = getCoordinates(i, Number(d.percentage));
    return `${x},${y}`;
  });
  const dataPath = dataPoints.join(" ");

  // Axis lines and labels
  const axes = data.map((d, i) => {
    const { x, y } = getCoordinates(i, 100);
    // Position labels slightly further out (120% of radius)
    const labelPos = getCoordinates(i, 120);

    // Adjust label alignment based on position
    let textAnchor = "middle";
    if (labelPos.x < centerX - 20) textAnchor = "end";
    else if (labelPos.x > centerX + 20) textAnchor = "start";

    // Split labels into max 2-3 words per line for better vertical alignment
    const words = d.block.split(" ");
    const lines: string[] = [];
    for (let j = 0; j < words.length; j += 2) {
      lines.push(words.slice(j, j + 2).join(" "));
    }

    return (
      <g key={i}>
        <line
          x1={centerX}
          y1={centerY}
          x2={x}
          y2={y}
          className="stroke-gray-400 stroke-1"
        />
        <text
          x={labelPos.x}
          y={labelPos.y}
          textAnchor={textAnchor}
          className="text-[11px] font-semibold fill-gray-600"
          dominantBaseline="middle"
        >
          {lines.map((line, idx) => (
            <tspan
              x={labelPos.x}
              dy={idx === 0 ? -(lines.length - 1) * 6 : 12}
              key={idx}
            >
              {line}
            </tspan>
          ))}
        </text>
      </g>
    );
  });

  return (
    <div className="flex justify-center items-center w-full my-4 overflow-visible">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        className="max-w-full h-auto overflow-visible"
        style={{ maxWidth: size }}
      >
        {/* Grid levels */}
        {gridLines.map((points, i) => (
          <polygon
            key={i}
            points={points}
            fill="none"
            className="stroke-gray-400 stroke-1"
          />
        ))}

        {/* Axes */}
        {axes}

        {/* Data area */}
        <polygon
          points={dataPath}
          fill="rgba(220, 38, 38, 0.25)"
          className="stroke-red-600 stroke-2"
        />

        {/* Data points */}
        {data.map((d, i) => {
          const { x, y } = getCoordinates(i, Number(d.percentage));
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={4}
              className="fill-red-600 stroke-white stroke-2"
            />
          );
        })}
      </svg>
    </div>
  );
};
