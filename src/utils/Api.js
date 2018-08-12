import axios from 'axios'
export default (method, url, recieveParams) => {
  if (localStorage.getItem('achievefolio-user-id') === null) {
    localStorage.setItem('achievefolio-user-id', 1)
  }
  return axios({
    method,
    url,
    data: recieveParams,
    headers: {
      'achievefolio-user-id': localStorage.getItem('achievefolio-user-id')
    }
  })
}
