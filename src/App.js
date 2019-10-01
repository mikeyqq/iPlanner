import React from "react";
import Login from "../src/views/Login/Login";
import Register from "../src/views/Register/Register";
import Home from "../src/views/Home/Home";
import Layout from "../src/hoc/Layout/Layout";

function App() {
  return (
    <Layout>
      <h1>hello</h1>
      <Login />
      <Register />
      <Home />
    </Layout>
  );
}

export default App;
