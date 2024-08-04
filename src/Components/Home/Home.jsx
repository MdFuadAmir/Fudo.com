import AboutUs from "../AboutUs/AboutUs";
import Menu from "../Menu/Menu";
import Services from "../Services/Services";
import Whyfudo from "../Whyfudo/Whyfudo";


const Home = () => {
    return (
        <div className="">
            <Whyfudo/>
            <Services/>
            <Menu/>
            <AboutUs/>
        </div>
    );
};

export default Home;