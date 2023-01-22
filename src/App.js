import {
    Routes,
    Route,
} from "react-router-dom";

import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainScreen from "./Components/MainScreen/MainScreen";
import TestsConstructor from "./Components/TestsConstructor/TestsConstructor";


function App() {
    return (
        <div className="App">
            <Header/>
                <Routes>
                    <Route path='/' element={<MainScreen />}/>
                    <Route path='/tests-constructor' element={<TestsConstructor />}/>
                </Routes>
            <Footer/>
        </div>
    );
}

export default App;
