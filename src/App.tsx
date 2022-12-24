import React, { useEffect } from "react";
import SoccerStats from './SoccerStats';
import api from "./api";
import writeToCSV from "./csv";
import { dataStore } from "./data";

const App: React.FC = () => {
  useEffect(() => {
    api.get('sport/football/categories')
    .then(response => {
        // store data in dataStore
        dataStore.data = response.data;

        // make additional API calls
        api.get('category/13/unique-tournaments')
            .then(response => {
                // store data in dataStore
                dataStore.data = [...dataStore.data, ...response.data];

                // make additional API calls
                api.get('unique-tournament/325/season/40557/standings/total')
                    .then(response => {
                        // store data in dataStore
                        dataStore.data = [...dataStore.data, ...response.data];

                        // call writeToCSV to write data to CSV file  writeToCSV(dataStore);
})
.catch(error => {
    // handle error
});
})
.catch(error => {
// handle error
});
})
.catch(error => {
// handle error
});
}, []);
  }, []);

  writeToCSV(dataStore);

  return <div>Hello World!</div>;
};

export default App;
