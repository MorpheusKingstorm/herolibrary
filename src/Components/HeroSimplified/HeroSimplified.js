import './HeroSimplified.css';
import * as icon from '../../assets/icons';

function HeroSimplified({ name, powerstats, imgUrl }) {
    return (        
        <div className='featured__hero'>
            <h2>{name}</h2>
            <img src={imgUrl} alt={`${name}`} className='featured__hero__img'/>
            <div className='featured__hero__stats'>
                {powerstats.map((stat, index) => (
                    <>
                        <div key={index}>
                            <img className='featured__hero__stats__icon' src={icon[`${stat.name}`].default} alt={stat.name.charAt(0).toUpperCase() + stat.name.slice(1).toLowerCase()} />
                            <p>{stat.value}</p>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default HeroSimplified;
