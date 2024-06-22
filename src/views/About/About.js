import Navbar from "../../components/Navbar/Navbar"
import "./../About/About.css"


const About = ({abotText}) =>
    {
        return(
            <>
        <Navbar/>
        <h1 className="about-heading">ABOUT US</h1>
        <p className="aboutText" >❤🤍WELCOME TO KISAN TRADERS🤍❤<br></br>
                    
           🧡🤍💚IND
        Sangamner, Sangamner
            Opens at 9:00 am tomorrow
            11  Years in Business
 <br></br>
        KISAN TRADERS is leading supplier of gartner and agricultural tool with a motive to implementing a clear corporate principle: making work in the
         garden and agricultural field easier through innovations & technology opening up new markets in the agriculture and garden sector, and establishing a clear positioning of the brand. 
        In all of this we are always concerned about the needs of our customers and place this goal at the forefront: Putting more fun into gardening!
        <br></br>Wholesaler in Sangamner, Maharashtra
        Shop No 9, Marketyard, Ganesh Nagar, Sangamner, Maharashtra 422605
        Market Yard, Sangamner, Sangamner - 422605</p>
        <img className="store-img" src="https://lh3.googleusercontent.com/p/AF1QipO9eHQUZRejhDK_Yu5Q-Kd30ajeobL09QutEm25=s680-w680-h510"/>
    </>
        )
    }


    export default About