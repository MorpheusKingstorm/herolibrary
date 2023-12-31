import './HeroSimplified.css';
import { Link } from 'react-router-dom/dist';
import HeroPowerStats from '../HeroPowerStats/HeroPowerStats';

function HeroSimplified({ heroId, name, powerstats, image, withLink = true }) {
    const setDefaultImage = event => {
        event.target.src = 'https://via.placeholder.com/292x389';
    };

    const heroNameAndImage = (
        <>
            <h2>{name}</h2>
            <img src={image.url} alt={`${name}`} className='featured__hero__img' onError={setDefaultImage} />
        </>
    );

    return (
        <div className='featured__hero'>
            <div className='featured__hero__basic__info'>
                {
                    withLink && (
                        <Link to={`/hero/${heroId}`}>
                            {heroNameAndImage}
                        </Link>
                    )
                }
                {
                    !withLink && (
                        <>
                            {heroNameAndImage}
                        </>
                    )
                }
            </div>
            <HeroPowerStats powerstats={powerstats} />                    
        </div>
    );
}

export default HeroSimplified;
