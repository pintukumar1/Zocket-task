import axios from 'axios'
import 'react-notifications/lib/notifications.css'
import { NotificationManager } from 'react-notifications'

export const registerEmail = (data , history) => async(dispatch , getState) => {
    await axios.post('http://localhost:8000/auth/earlyaccess', data)
    .then( res => {
        setTimeout(() => {
          history.push('/verification')
          } , 2000 )    
    })
  }

  export const codeVerification=(data,history)=>async(dispatch,getState)=>{
    await axios.post('http://localhost:8000/auth/verifycode',data)
    .then(res=>{
      NotificationManager.success(res.data.message, '', 2000)
      setTimeout(()=>{
        history.push('/AllEmails')
      },1000)
   })
    .catch(err=>{
      NotificationManager.error(err.response.data.message,'',2000)
    })
  }

  