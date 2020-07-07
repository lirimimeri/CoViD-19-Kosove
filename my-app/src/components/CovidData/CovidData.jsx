import React from "react";
import "./covidData.css";

function CovidData(props) {
  return (
    <div className="te-dhenat">
        <div className="row">
          <div className="col">
      <div className="data confirmed">
            <h5>Të konfirmuara</h5>
            <i className="fas fa-user-plus"></i>
            <br/>
            <h4>
              {props.isLoading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                props.data.infected
              )}
            </h4>
          </div>
        </div>

        <div className="col">
          <div className="data recovered">
            <h5> Të shëruar </h5>
            <i className="far fa-smile-beam" /><br />
            <h4>
              {props.isLoading ? (
                <i className="fas fa-spinner fa-spin" />
                ) : (
                  props.data.recovered
                )}{" "}
            </h4>
          </div>
        </div>

        <div className="col">
          <div className="data deaths">
            <h5> Të vdekur </h5>
            <i
                className="fas fa-heart-broken"
              ></i><br />
            <h4>
              {props.isLoading ? (
                <i className="fas fa-spinner fa-spin" />
              ) : (
                props.data.deceased
              )}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CovidData;
