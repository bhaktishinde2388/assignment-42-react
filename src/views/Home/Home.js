import ProductCards from "../../components/ProductCards/ProductCards"
import Navbar from "../../components/Navbar/Navbar"
import Buttons from "../../components/Buttons/Button"
import "./../Home/Home.css"
import IndexImg from "./../Home/image/index-img.jpg"
import {SiteDetails, features} from "./../../data"

import FeatureCards from "../../components/FeatureCards/FeatureCards"

const Home= () =>
    {
        return(
            <>
            <Navbar/>

            <img className="index-main-img" src={IndexImg}/><br></br><br></br>

            <div>
            <h1 className="config-head">{SiteDetails.title}</h1>

            <div className="features">
                {
                    features.map((features,i) =>
                    {
                        const {title,img} = features

                        return(
                            <FeatureCards key={i} title={title} img={img} />
                            // <div>
                            //     <img src={img}  alt={title}/>
                            //     <p>{title}</p>
                            // </div>
                        )
                    })
                }

            </div>

           
            
            <h1 className="sample-product">🤍Sample Product🤍</h1>
            {/* <div className="cards-main-container">
<ProductCards  name="red Portable Plastic Crate | big scale | store upto 40kg"
            posterUrl="https://assets-global.website-files.com/64957750b431e096dc85ba1e/6496eeb172fa6114618de3e5_602e95666dd9ee8da90881f1_Crates-1024x576.jpeg"      
            rating="3.4..."
            mainPrice="₹560" 
            oldPrice="₹1,120 "
            percentageOff="49% off"
            cardInfo/>

<ProductCards name="Wolf Garten Handheld Gasshear (RI-LL) Cutting | head rotate by 180"
            posterUrl="https://www.kishantools.com/uploaded_files/imgae_gallery/62fe3e7c740911660829308.jpg"      
            rating="good"
            mainPrice="₹1,470" 
            oldPrice=" ₹2,300 "
            percentageOff="36% off"
            cardInfo/>

<ProductCards name="Gurudatta Portable Heavy Duty Garden Hose Reel cart (Color Red) "
            posterUrl="https://www.kishantools.com/uploaded_files/imgae_gallery/62fe3e961aa3e1660829334.jpg"      
            rating="4.1 "
            mainPrice="₹₹2,623" 
            oldPrice=" ₹4,999 "
            percentageOff="48% off"
            cardInfo/>

<ProductCards name="WOLF GARTEN Digging Shovel for Garden Works (AS-D) Spade"
            posterUrl="https://www.kishantools.com/uploaded_files/imgae_gallery/62fe3e607ac5b1660829280.jpg"      
            rating="good"
            mainPrice="₹3,260" 
            oldPrice="₹3,815 "
            percentageOff="14% off"
            cardInfo/>
            </div> */}

           
            {/* <div className="footer">
                <h1>{footer.companyInfo}</h1>
                {
                    footer.map2((footer,i2) =>
                        {
                            const {logo,companyInfo} = footer

                            return(
                                <Footer key={i2} logo={logo} companyInfo={companyInfo} />
                           
                            )
                        })
                }

            </div> */}
            </div>
           
         
            </>
        );
    }
   

export default Home