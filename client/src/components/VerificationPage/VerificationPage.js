import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { codeVerification } from '../../redux/actions'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';
import "./VerificationPage.css"

function Verificationcode() {
    const history =useHistory()
    const dispatch=useDispatch()
    const [code,setCode]=useState("")
    const submitForm=(e)=>{
            e.preventDefault()
            dispatch(codeVerification({code:code},history))         
    }

    return (
        <div>
            <div className="container verificationCodeContainer">
                <div className="row p-3">
                <h1 className="text-center verificationHeader">Enter the code received on your mail !</h1>
                <div className="col-12 col-lg-4 col-md-4 offset-md-4">                   
                    <div className="formContainer mt-3">
                    <form onSubmit={submitForm}>
                    <div className="input-group mb-3 mt-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter code here"
                  aria-describedby="addon-wrapping"
                  onChange={e=>setCode(e.target.value)}
                required
                />
              </div>
              <div className="text-center">
              <button className="btn earlyAccessBtn">Submit</button>
              </div>
            </form>
                </div>
              </div>
            </div>
            </div>
            <NotificationContainer/>
        </div>
    )
}

export default Verificationcode
