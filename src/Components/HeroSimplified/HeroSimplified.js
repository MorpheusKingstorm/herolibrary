import './HeroSimplified.css'

function HeroSimplified({ name, powerstats, imgUrl }) {
    return (        
        <div className="featured__hero">
            <h2>{name}</h2>
            <img src={imgUrl} alt={`${name} photo`} className='featured__hero__img'/>
            <div className="featured__hero__stats">
                <div>
                    <p>{powerstats.combat}</p>
                </div>
                <div>
                    <p>{powerstats.durability}</p>
                </div>
                <div>
                    <p>{powerstats.intelligence}</p>
                </div>
                <div>
                    <p>{powerstats.speed}</p>
                </div>
                <div>
                    <p>{powerstats.strength}</p>
                </div>
            </div>
        </div>
    );
}

export default HeroSimplified;
