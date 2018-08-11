import axios from 'axios'
export default (method, url, recieveParams) => {
  return axios({
    method,
    url,
    data: recieveParams,
    headers: {
      'achievefolio-user-id': localStorage.getItem('achievefolio-user-id')
    }
  })
}
