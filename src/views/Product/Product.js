import Navbar from "../../components/Navbar/Navbar"
import ProductCards from "../../components/ProductCards/ProductCards"

import {products} from "../../data";
import { blog } from "../../data";
import ProductView from "./../../views/ProductView/ProductView"
import "./Product.css"

const Product= () =>
    {
//         return(
//             <>
//             <Navbar/>
//             <div className="cards-main-container">
// <ProductCards  name="red Portable Plastic Crate"
//             posterUrl="https://assets-global.website-files.com/64957750b431e096dc85ba1e/6496eeb172fa6114618de3e5_602e95666dd9ee8da90881f1_Crates-1024x576.jpeg"      
//             rating="3.4..."
//             mainPrice="₹560" 
//             oldPrice="₹1,120 "
//             percentageOff="49% off"
//             cardInfo=""/>

// <ProductCards name="Wolf Garten Handheld Gasshear (RI-LL) Cutting | head rotate by 180"
//             posterUrl="https://www.kishantools.com/uploaded_files/imgae_gallery/62fe3e7c740911660829308.jpg"      
//             rating="good"
//             mainPrice="₹1,470" 
//             oldPrice=" ₹2,300 "
//             percentageOff="36% off"
//             cardInfo/>

// <ProductCards name="Gurudatta Portable Heavy Duty Garden Hose Reel cart (Color Red) "
//             posterUrl="https://www.kishantools.com/uploaded_files/imgae_gallery/62fe3e961aa3e1660829334.jpg"      
//             rating="4.1 "
//             mainPrice="₹₹2,623" 
//             oldPrice=" ₹4,999 "
//             percentageOff="48% off"
//             cardInfo/>

// <ProductCards name="WOLF GARTEN Digging Shovel for Garden Works (AS-D) Spade"
//             posterUrl="https://www.kishantools.com/uploaded_files/imgae_gallery/62fe3e607ac5b1660829280.jpg"      
//             rating="good"
//             mainPrice="₹3,260" 
//             oldPrice="₹3,815 "
//             percentageOff="14% off"
//             cardInfo/>
//  </div>
//  <div className="cards-main-container">
//  <ProductCards name="BHARAT COW DUNG FAWADA PLASTIC"
//             posterUrl="https://cdn.shopify.com/s/files/1/0722/2059/files/1_AnubhavSingh7.png?v=1695194151&width=256"      
//             rating="good"
//             mainPrice="₹560" 
//             oldPrice="₹815 "
//             percentageOff="14% off"
//             cardInfo/>

// <ProductCards name="WOLF GARTEN BYPASS SECATEURS ALU-PROFESSIONAL (RR 5000) 25MM CUT"
//             posterUrl="https://cdn.shopify.com/s/files/1/0722/2059/products/1_2e18ae5b-c111-4fd8-a9d0-1cd95eae0007.webp?v=1681820636&width=256"      
//             rating="good"
//             mainPrice="₹3,260" 
//             oldPrice="₹3,815 "
//             percentageOff="14% off"
//             cardInfo/>

// <ProductCards name="SIDDHI RAIN PIPE 100 METER WITH COCK, RUBBER GROMMET"
//             posterUrl="https://cdn.shopify.com/s/files/1/0722/2059/files/2_MuskanChauhan2.png?v=1694243402&width=256"      
//             rating="good"
//             mainPrice="₹360" 
//             oldPrice="₹815 "
//             percentageOff="14% off"
//             cardInfo/>

// <ProductCards name="WOLF GARTEN Digging Shovel for Garden Works (AS-D) Spade"
//             posterUrl="https://www.kishantools.com/uploaded_files/imgae_gallery/62fe3e607ac5b1660829280.jpg"      
//             rating="good"
//             mainPrice="₹3,260" 
//             oldPrice="₹3,815 "
//             percentageOff="14% off"
//             cardInfo/>
//             </div>
//             <Footer/>
//             </>
//         )
     


return(
    <>

    <Navbar/>
    <div className="product-container">
    {
        products.map((blogObject, i) => {
          const {
            id,
            name,
            posterUrl,
            rating,
            price,
            // mainPrice,
            // oldPrice,
            cardInfo
          } = blogObject

          return(
           <ProductCards
           id={id}
           key={i}
           name={name}
           posterUrl={posterUrl}
           rating={rating}
           price={price}
        //    mainPrice={mainPrice}
        //    oldPrice={oldPrice}
           cardInfo={cardInfo}
          
           />
          )
        }
    
    )
    }
    </div>
 
    </>
)
}

export default Product