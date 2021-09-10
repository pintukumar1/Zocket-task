import React,{useState} from 'react'
import MailImage from '../../assets/MailImage.png'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import 'react-notifications/lib/notifications.css';
import {NotificationManager,NotificationContainer} from 'react-notifications';
import { registerEmail} from '../../redux/actions'
import './MailComponent.css';


function MailUs() {
    const dispatch=useDispatch()
    const history=useHistory()
    const [email,setEmail]=useState("")
    const submitForm=(e)=>{
            e.preventDefault()
            dispatch(registerEmail({email:email},history))
            NotificationManager.success("Verification code sent to your email", '', 1500)
    }

    return (
        <div>
            <div className="row mailUsRow p-3 mailUsContainer"> 
                   <div className="col-12 col-lg-3 col-md-3 mt-5 offset-md-2">
                       <div className="text-center">
                           <img src={MailImage} alt="mailimage" className="mailImg" />
                       </div>
                   </div>
                   <div className="col-12 col-lg-5 col-md-5 mt-5">
                       <div className="text-start">
                           <h2 className="text-light mailUsHeader">Be one of the first to <br /> know when we launch!</h2>
                       </div>
                       <form onSubmit={submitForm}>
                    <div className="input-group mb-3 mt-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                  aria-describedby="addon-wrapping"
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                  required
                />
                <span className="bg-light"><button className="btn earlyAccessBtns">Get Early Access</button></span>
              </div>
                    </form>
                   </div>
            
            </div>
            <NotificationContainer/>
        </div>
    )
}

export default MailUs
