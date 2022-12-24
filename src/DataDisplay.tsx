
// - This component will read the CSV file and log the data to the console.

import React from 'react';
import { useCSVReader } from 'react-papaparse';

const DataDisplay: React.FC = () => {
  const { data } = useCSVReader();

  return (
    <div>
      <CSVReader />
    </div>
  );
};

export default DataDisplay;