import axios from "axios";

export async function getAllEmployees() {
  try {
    const response = await axios.get('http://localhost:3001/employees');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function addEmployee() {

}