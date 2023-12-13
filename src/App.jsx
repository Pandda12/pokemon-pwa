import React from "react";
import Catalog from './pages/catalog';
import {
    BrowserRouter as Router,
    Routes,
    Route, Link,
} from "react-router-dom";
import Layout from "./components/layout";
import Main from "./pages/main";
function App(){
    return (
        <Layout>
            <Main/>
        </Layout>
    )
}
export default App