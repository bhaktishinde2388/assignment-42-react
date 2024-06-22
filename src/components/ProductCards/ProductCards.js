import Button from "../Buttons/Button";
import "./ProductCard.css";
import {Link} from "react-router-dom";
import "./../Buttons/Button.css";
import About from "./../../views/About/About"
import ProductView from "../../views/BlogView/BlogView"

// const ProductCards =({ name,posterUrl,rating,cardInfo,mainPrice,oldPrice,percentageOff})=>
//     {
//         return(
//             <>
//             <div className="cards-container">
//            <img className="card-img" src={posterUrl}/>
//            <div className="card-body">
//              <h3>{name}</h3>
//              <p>{cardInfo}</p>            
//              <span className="price">{mainPrice}</span><br/><br></br>
//              <span className="old-price"><del>{oldPrice}</del></span>
//              <span className="percentage-off">{percentageOff}</span>
//              <Link to="/product"> <Button text="view more"/></Link>
//              <h4>Rating:{rating}{rating=="good" ? "⭐⭐" : "⭐⭐⭐⭐"}
             
//              </h4>
//            </div>
//       </div>
//             </>
//         )
//     }


function ProductCards({id,name,posterUrl,price,rating,cardInfo})
{
    return(
        <div  className="cards-container" >
             <img className="card-img" src={posterUrl}/>
             <div className="card-body">
             <h3>{name}</h3>
             <p className="card-info">{cardInfo.substring(0,76)}.......</p>    
            
            <span className="price">{price.mainPrice}</span><br/><br></br>
                <span className="old-price">{price.oldPrice}</span>
                <Link to={`/ProductView/${id}`}> <Button text="view more"/></Link>
             <h4>Rating:{rating}{rating=="good" ? "⭐⭐" : "⭐⭐⭐⭐"}</h4>
            </div>
        </div>
    )
}

    export default ProductCards