import React, { useContext } from 'react'
import { Context } from '../store/appContext'

const Profile = (props) => {
  const {store}=useContext(Context)  



  
    

  return (
    <div className="container bg-dark text-light">
    <div className="row">
      <div className="col-12 d-flex justify-content-center mt-5">
        <h1>Welcome to my profile{store.userData.user.email}</h1>
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
      <div className="row">
          <div className="col-12 py-5"></div>
      </div>
    </div>
  </div>
  )
}

export default Profile