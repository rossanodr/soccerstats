// interface for a data structure that will store the data returned by the API calls. The data will be stored in an array of objects, with each object containing the data from the API call.
export type DataObject = {
    [key: string]: any;
};

export interface DataStore {
    data: DataObject[];
}

const dataStore: DataStore = {
    data: []
};

export { dataStore };