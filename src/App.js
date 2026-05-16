import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";



function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    function handleLogin(email){
    setEmail(email);
    setIsLoggedIn(true);
    }



    return (
    <div className = "container">

            <h1>Witaj w systemie do zapisów na zajęcia</h1>

            {!isLoggedIn && <LoginForm onLogin={handleLogin} jakis ="alamakota"/>}

{isLoggedIn && <div>
<h1>Witaj {email }</h1>
<button  onClick={() => setIsLoggedIn(false)}>Wyloguj</button>

</div>}




        </div>
    );
}
export default App;
