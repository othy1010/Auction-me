import NavBar from '../../components/Admin/NavBar'
import Welcome from '../../components/Admin/Welcome'
import About from '../../components/Admin/About'
import Contact from '../../components/Admin/Contact'
import UserFooter from '../../components/User/UserFooter'

function Home(){
    return (
        <>
            <NavBar />
            <Welcome />
            <br/><br/><br/><br/><br/><br/><br/>
            <About />
            <br/><br/><br/><br/><br/><br/><br/>
            <Contact />
            <UserFooter />
        </>
    )
}

export default Home