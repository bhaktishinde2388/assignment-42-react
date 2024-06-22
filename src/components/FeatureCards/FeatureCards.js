import "./FeatureCards.css"

function FeatureCards({title,img})
{
    return (
        <div className="feature-cards">
            <img src={img} alt={title} className="feature-img"/>
            <p className="feature-title">
                {title}
            </p>
           
        </div>
        
    )
}

export default FeatureCards