import * as React from "react";
import { render } from "react-dom";
import { Main } from "./Main";
import { HashRouter } from "react-router-dom";
import "./index.css";
import { Helmet } from 'react-helmet';

//const App = () => <Main />;
//render(<App />, document.getElementById("root"))

render(
    <React.StrictMode>
      <Helmet>
        <title>Zelin's page</title>
      </Helmet>
      <HashRouter>
        <Main />
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


//setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
