import './App.css';
import Header from "./Components/Header/Header";
import OnlineTests from "./Components/OnlineTests/OnlineTests";
import CreateTest from "./Components/CreateTests/CreateTests";
import Footer from "./Components/Footer/Footer";
import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen";

function App() {
    return (
        <div className="App">
            <Header/>
            <WelcomeScreen />
            <OnlineTests />
            <CreateTest/>
            <Footer/>
        </div>
    );
}

export default App;
