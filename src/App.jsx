import { useState } from "react";
import Layout from "./components/Layout";
import "./App.css";
import "./index.css";
import Page from "./pages/Page";

function App() {
  return (
    <>
      <Layout>
        <Page />
      </Layout>
    </>
  );
}

export default App;
