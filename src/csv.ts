import { dataStore } from './data';

const writeToCSV = (dataStore: DataStore) => {
    const headers = Object.keys(dataStore.data[0]);
    const rows = dataStore.data.map((data: any) => headers.map((header:string) => data[header]));
    let csvContent = "data:text/csv;charset=utf-8,";

    rows.forEach((rowArray: string[]) => {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
};

export default writeToCSV;