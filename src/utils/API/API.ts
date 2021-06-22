import axios from 'axios'

export default axios.create({
  baseURL: "https://crudcrud.com/api/ca4fd1fa87db47978a4e744c9c63f674/",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
    },
  responseType: "json"
});