import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const Login = (props) => {
  const { actions } = useContext(Context);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const dataInput = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    //agregar actions login
    setData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mt-5 mx-auto">
          <form
            action=""
            className="border border-warning rounded"
            onSubmit={sendData}
          >
            <div className="mb-3 p-2">
              <label className="h5" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                onChange={dataInput}
                value={data.email}
              />
            </div>
            <div className="mb-3 p-2">
              <label className="h5" htmlFor="password">
                Password: 
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                onChange={dataInput}
                value={data.password}
              />
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-warning my-2 py-2 mx-1">
                <p className="h5">Login</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
