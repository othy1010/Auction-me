import NavBar from '../components/NavBar'
import Welcome from '../components/Welcome'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home(){
    return (
        <>
            <NavBar />
            <Welcome />
            <br/><br/><br/><br/><br/><br/><br/>
            <About />
            <br/><br/><br/><br/><br/><br/><br/>
            <Contact />
            <Footer />
        </>
    )
}

export default Home