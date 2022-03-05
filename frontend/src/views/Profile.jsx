import React, { useContext, useEffect } from 'react'
//import { useHistory } from 'react-router-dom'
import { Context } from '../store/appContext'

const Profile = (props) => {
  const {store, actions}=useContext(Context)
  //const history = useHistory()  



  useEffect(()=>{
    /* if(!store.authorized){
    } */
    actions.getProfile()
  })
    

  return (
    <div className="container bg-dark text-light">
    <div className="row">
      <div className="col-12 d-flex justify-content-center mt-5">
        <h1>Welcome to my profile{store.userData.user.email}</h1>
      </div>
      <div className="row">
          <div className="col-12 py-5">
          {!!store.error && (
              <div className="alert alert-danger h5" role="alert">
                <i className="bi bi-exclamation-circle-fill text-danger"></i> {store.error}
              </div>
            )}  
            
          </div>
      </div>
      <div className="row">
          <div className="col-12 py-5"></div>
      </div>
      <div className="row">
          <div className="col-12 py-5"></div>
      </div>
      <div className="row">
          <div className="col-12 py-5"></div>
      </div>
      <div className="row">
          <div className="col-12 py-5"></div>
      </div>
      <div className="row">
          <div className="col-12 py-5"></div>
      </div>
      <div className="row">
          <div className="col-12 py-5"></div>
      </div>
      <div className="row">
          <div className="col-12 py-5"></div>
      </div>
    </div>
  </div>
  )
}

export default Profile