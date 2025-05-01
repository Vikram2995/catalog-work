import React, { useState } from 'react';
import AreaChart from './graph';
import PlusIcon from './plusIcon';
import FullScreen from './fullscreen';

const ChartWrapper = () => {
  const [range, setRange] = useState('1w');

  const ranges = ['1d', '3d', '1w', '1m', '6m', '1y', 'max'];

  const handleRangeChange = (r) => {
    setRange(r);
    // You can trigger data reload here based on selected range
  };


  const mockData = {
    '1d': [63000, 63300, 63400, 63250, 63179.71],
    '3d': [62800, 63500, 63300, 63179.71],
    '1w': [62800, 64000, 64850, 63200, 61800, 62400, 63179.71],
    '1m': [61000, 61800, 62500, 63000, 64000, 64800, 63179.71],
    '6m': [59000, 60500, 61500, 62800, 64000, 63179.71],
    '1y': [42000, 48000, 55000, 59000, 64000, 63179.71],
    'max': [10000, 20000, 30000, 45000, 60000, 69000, 63179.71],
  };
  

  return (
    <div className="bg-black text-white p-4 rounded-xl">
      {/* Top Controls */}
      <div style={{display:"flex", justifyContent:"space-between", marginBottom:"1.75rem"}} >
        <div style={{display:"flex", gap:"1.9375rem"}}>
          <button style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:".625rem", color:"#6F7177", fontSize:"1.125rem"}}><FullScreen/> Fullscreen</button>
          <button style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:".625rem", color:"#6F7177", fontSize:"1.125rem"}}><PlusIcon/> Compare</button>
        </div>

        {/* Time Range Buttons */}
        <div className="flex gap-2" >
          {ranges.map((r) => (
            <button
              key={r}
              onClick={() => handleRangeChange(r)}
              className={`px-3 py-1 rounded text-sm ${
                range === r
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
        <AreaChart  data={mockData[range]} />
    </div>
  );
};

export default ChartWrapper;
