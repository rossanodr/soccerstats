import React from 'react';

import { cleanData, manipulateData, parseData } from './utilities';
import { fetchData, writeToCSV } from './api';

const App: React.FC = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchDataAndWriteToCsv = async () => {
      const response = await fetchData();
      const cleanedData = cleanData(response);
      const parsedData = parseData(cleanedData);
      const manipulatedData = manipulateData(parsedData);
      setData(manipulatedData);
      writeToCSV(manipulatedData);
    };
    fetchDataAndWriteToCsv();
  }, []);

  return (
    <div>
      {data.map(datum => (
        <p>{datum.name}</p>
      ))}
    </div>
  );
};

export default App;