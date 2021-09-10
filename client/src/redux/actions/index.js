import axios from 'axios'
import 'react-notifications/lib/notifications.css'

export const registerEmail = (data , history) => async(dispatch , getState) => {
    await axios.post('http://localhost:8000/auth/earlyaccess', data)
    .then( res => {
        setTimeout(() => {
          history.push('/verification')
          } , 2000 )    
    })
  }