import './App.css';
import Header from './Components/Header';
import Profile from './Components/Profile';
import SideBar from './Components/SideBar';

function App() {
    return (
        <div className="container">
            <Header />
            <div className="main">
                <SideBar />
                <Profile />
            </div>
        </div>
    );
}

export default App;
