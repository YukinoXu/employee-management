import axios from "axios";

export async function getAllEmployees() {
  try {
    const response = await axios.get('http://localhost:3001/employees');
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function addEmployee(data) {
  try {
    const response = await axios.post('http://localhost:3001/employees', data)
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteEmployeeById(id) {
  const url = 'http://localhost:3001/employees/' + id;
  try {
    await axios.delete(url);
  } catch (error) {
    console.log(error);
  }
}