import React from "react";

import "./app.container.css";
import Header from "../../components/Header/Header";
import CovidData from "../../components/CovidData/CovidData";
import News from "../News/News";
import Footer from "../../components/Footer/Footer";

function AppContainer(props) {
  return (
    <div className="divikryesor">
      <Header
        handleNews={props.handleNews}
      />
      <CovidData data={props.data} isLoading={props.isLoading} />
      <News />
      <Footer />
    </div>
  );
}

export default AppContainer;
