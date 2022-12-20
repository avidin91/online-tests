import './App.css';
import Header from "./Components/Header/Header";
import OnlineTests from "./Components/OnlineTests";
import CreateTest from "./Components/CreateTests";
import Footer from "./Components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <OnlineTests/>
            <CreateTest/>
            <Footer/>
        </div>
    );
}

export default App;
