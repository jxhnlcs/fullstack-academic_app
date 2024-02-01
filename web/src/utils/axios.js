import axios from 'axios';

const ipAddress = 'localhost';
const port = 3333;

console.log(`http://${ipAddress}:${port}`)
export default axios.create({
  baseURL: `http://${ipAddress}:${port}`,
});