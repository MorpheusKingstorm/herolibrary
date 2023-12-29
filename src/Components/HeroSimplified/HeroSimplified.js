import './HeroSimplified.css';
import * as icon from '../../assets/icons';

function HeroSimplified({ name, powerstats, imgUrl }) {
    const statsElements = Object.entries(powerstats).map(([key, value], index) => (
        <div key={index}>
            <img
                className='featured__hero__stats__icon'
                src={icon[key].default}
                alt={key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
            />
            <p>{value}</p>
        </div>
    ));

    return (
        <div className='featured__hero'>
            <h2>{name}</h2>
            <img src={imgUrl} alt={`${name}`} className='featured__hero__img'/>
            <div className='featured__hero__stats'>
                {statsElements}
            </div>
        </div>
    );
}

export default HeroSimplified;
