import  axios from 'axios'

async function getData(){
  const response =  await axios.get("http://localhost:3001/users")
  return response.data
}
export {getData}