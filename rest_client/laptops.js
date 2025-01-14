const IP = '192.168.1.100';
const PORT = 3000;
const PATH = 'laptops';
const URL = `http://${IP}:${PORT}/${PATH}`;

export const getAllLaptops = async () => {
    console.log(URL);
    const response = await fetch(URL);
    const result = await response.json();
    return result;
}