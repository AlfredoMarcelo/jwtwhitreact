import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container bg-dark text-light">
      <div className="row">
        <div className="col-12 d-flex justify-content-center mt-5">
          <h1>Hola desde Home</h1>
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
        <div className="row ">
            <div className="col-12 d-flex justify-content-center">
                <Link to="/register">
                <button className="btn btn-danger" >
                    Registrate
                </button>
                </Link>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-12 d-flex justify-content-center">
                <Link to="/login">
                <button className="btn btn-success" >
                    Inicia sesion
                </button>
                </Link>
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
      </div>
    </div>
  );
};

export default Home;
