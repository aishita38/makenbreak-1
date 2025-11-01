import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';

interface ChartModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Record<string, any>;
  selectedRange?: { start: string; end: string };
}

type ChartType = 'bar' | 'line' | 'pie';

const ChartModal: React.FC<ChartModalProps> = ({ isOpen, onClose, data, selectedRange }) => {
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [chartData, setChartData] = useState<any[]>([]);
  const [xAxis, setXAxis] = useState<string>('');
  const [yAxis, setYAxis] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  const COLORS = ['#2563eb', '#dc2626', '#16a34a', '#ca8a04', '#7c3aed', '#0891b2'];

  // Test data for debugging
  const testData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 }
  ];

  const renderTestChart = () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={testData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  const extractDataFromRange = (start: string, end: string) => {
    const startCol = start.match(/([A-Z]+)/)?.[1] || 'A';
    const startRow = parseInt(start.match(/(\d+)/)?.[1] || '1');
    const endCol = end.match(/([A-Z]+)/)?.[1] || 'A';
    const endRow = parseInt(end.match(/(\d+)/)?.[1] || '1');

    const extractedData: any[] = [];

    // Get headers from first row
    const headers: string[] = [];
    for (let col = startCol.charCodeAt(0); col <= endCol.charCodeAt(0); col++) {
      const colLetter = String.fromCharCode(col);
      const cellKey = `${colLetter}${startRow}`;
      headers.push(data[cellKey]?.value || colLetter);
    }

    // Extract data rows
    for (let row = startRow + 1; row <= endRow; row++) {
      const rowData: any = {};
      let hasData = false;

      for (let col = startCol.charCodeAt(0); col <= endCol.charCodeAt(0); col++) {
        const colLetter = String.fromCharCode(col);
        const headerIndex = col - startCol.charCodeAt(0);
        const cellKey = `${colLetter}${row}`;
        const value = data[cellKey]?.value || '';

        rowData[headers[headerIndex]] = isNaN(Number(value)) ? value : Number(value);
        if (value) hasData = true;
      }

      if (hasData && Object.keys(rowData).length > 0) {
        extractedData.push(rowData);
      }
    }

    return { headers, data: extractedData };
  };

  const createChart = React.useCallback(() => {
    if (!selectedRange) return;

    try {
      const { data: extractedData } = extractDataFromRange(selectedRange.start, selectedRange.end);

      if (extractedData.length === 0) return;

      // Validate data structure
      const firstRow = extractedData[0];
      if (!firstRow || typeof firstRow !== 'object') return;

      const availableKeys = Object.keys(firstRow);
      if (availableKeys.length < 2) return;

      setChartData(extractedData);

      // Auto-set axes if data exists
      const keys = Object.keys(extractedData[0]);
      if (keys.length >= 2) {
        setXAxis(keys[0]);
        setYAxis(keys[1]);
      }
    } catch (error) {
      console.error('Error creating chart:', error);
    }
  }, [selectedRange, data]);

  React.useEffect(() => {
    // Reset chart data when modal opens/closes or range changes
    if (!isOpen) {
      setChartData([]);
      setXAxis('');
      setYAxis('');
      setTitle('');
    }
  }, [isOpen, selectedRange]);

  const renderChart = () => {
    if (!chartData.length) return <div className="text-center text-gray-500">No data to display</div>;

    if (!chartData[0]) {
      return <div className="text-center text-gray-500">Invalid data format</div>;
    }

    // Validate axis selections
    if (!xAxis || !yAxis) {
      return <div className="text-center text-gray-500">Please select X and Y axes above</div>;
    }

    // Check if selected axes exist in data
    const availableKeys = Object.keys(chartData[0]);
    if (!availableKeys.includes(xAxis) || !availableKeys.includes(yAxis)) {
      return <div className="text-center text-red-500">Selected axes not found in data</div>;
    }

    try {
      switch (chartType) {
        case 'bar':
          return (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey={xAxis}
                  type="category"
                  allowDuplicatedCategory={false}
                />
                <YAxis
                  type="number"
                  domain={['dataMin', 'dataMax']}
                />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey={yAxis}
                  fill="#2563eb"
                  name={yAxis}
                />
              </BarChart>
            </ResponsiveContainer>
          );

        case 'line':
          return (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey={xAxis}
                  type="category"
                  allowDuplicatedCategory={false}
                />
                <YAxis
                  type="number"
                  domain={['dataMin', 'dataMax']}
                />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey={yAxis}
                  stroke="#2563eb"
                  strokeWidth={2}
                  name={yAxis}
                  dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#2563eb', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          );

        case 'pie':
          // Ensure we have valid keys for pie chart
          const availableKeysPie = Object.keys(chartData[0]);
          const pieDataKey = yAxis && availableKeysPie.includes(yAxis)
            ? yAxis
            : availableKeysPie.find(key => typeof chartData[0][key] === 'number') || availableKeysPie[1] || availableKeysPie[0];
          const pieNameKey = xAxis && availableKeysPie.includes(xAxis)
            ? xAxis
            : availableKeysPie.find(key => typeof chartData[0][key] === 'string') || availableKeysPie[0];

          // Transform data for pie chart
          const pieChartData = chartData.map(item => ({
            name: item[pieNameKey!] || `Item ${chartData.indexOf(item) + 1}`,
            value: Number(item[pieDataKey!]) || 0
          }));

          return (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }: any) => `${name} ${((percent as number) * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          );

        default:
          return <div className="text-center text-gray-500">Unknown chart type</div>;
      }
    } catch (error) {
      console.error('Error rendering chart:', error);
      return <div className="text-center text-red-500">Error rendering chart: {(error as Error).message}</div>;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Create Chart</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chart Controls */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chart Type
                </label>
                <div className="flex gap-2">
                  {(['bar', 'line', 'pie'] as ChartType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setChartType(type)}
                      className={`px-4 py-2 rounded-lg capitalize font-medium transition-colors ${
                        chartType === type
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chart Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter chart title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {chartData.length > 0 && chartType !== 'pie' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      X-Axis (Category)
                    </label>
                    <select
                      value={xAxis}
                      onChange={(e) => setXAxis(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {Object.keys(chartData[0] || {}).map((key) => (
                        <option key={key} value={key}>{key}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Y-Axis (Value)
                    </label>
                    <select
                      value={yAxis}
                      onChange={(e) => setYAxis(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {Object.keys(chartData[0] || {}).map((key) => (
                        <option key={key} value={key}>{key}</option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              <button
                onClick={createChart}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Create Chart
              </button>
            </div>

            {/* Chart Preview */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {title || 'Chart Preview'}
              </h3>
              <div className="w-full h-96 flex items-center justify-center">
                {chartData.length > 0 ? renderChart() : (
                  <div className="text-center">
                    <div className="text-4xl mb-2">📊</div>
                    {selectedRange ? (
                      <div>
                        <p className="text-gray-600 mb-4">Data ready! Click "Create Chart" to generate your visualization.</p>
                        <button
                          onClick={() => {
                            console.log('🧪 Testing with sample data');
                            setChartData(testData);
                            setXAxis('name');
                            setYAxis('value');
                          }}
                          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors mr-2"
                        >
                          Test Chart
                        </button>
                        <button
                          onClick={createChart}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Create Chart
                        </button>
                      </div>
                    ) : (
                      <p>
                        Select a range in the spreadsheet first.<br />
                        <small className="text-gray-400">Click a cell, then Shift+click another cell to select a range</small>
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartModal;
