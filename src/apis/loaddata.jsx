import data from '../data/data.json';

export const loadData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

// export data only
export const getData = () => {
  return data;
};

// how to get data from reolved promise
// loadData().then(data => console.log(data));
// export default loadData;