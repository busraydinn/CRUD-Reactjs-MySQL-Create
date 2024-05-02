import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Read from "./Read";
import Navbar from "./components/Navbar";
import Create from "./Create";
function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route index element={<Read/>}></Route>
                    <Route path="/create" element={<Create/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;