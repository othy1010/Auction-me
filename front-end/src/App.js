import './App.css';
import AppAdmin from "./AppAdmin";
import AppUser from "./AppUser";
import Home from "./pages/Home";
import UserInfo from "./configs/UserInfo";

const App = () => {
    console.log("UserInfo.userInfos -->");
    console.log(UserInfo.userInfos);
    if(UserInfo.userInfos == null)
    {
        console.log("i m user") ;
        return <AppUser />;
    }
    else if (UserInfo.userInfos.isAdmin == true) {
        console.log("i m admin") ;
        return <AppAdmin />;
    }
    else{
        console.log("i m user") ;
        return <AppUser />;
    }
}

export default App;

