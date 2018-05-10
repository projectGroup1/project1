import React from "react";
import ReactDom from "react-dom";

// class Element extends React.Component{
//   constructor(props) {
//     super(props)
//   }
//   render () {
//     return (
//       <div>123</div>
//     )
//   }
// }

import App from "./components/app.jsx";
import Form from "./components/form.jsx";
ReactDom.render(<Form/>,document.getElementById('app'));