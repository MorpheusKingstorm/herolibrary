import './HeroSimplified.css';
import { Link } from 'react-router-dom/dist';
import HeroPowerStats from '../HeroPowerStats/HeroPowerStats';

function HeroSimplified({ heroId, name, powerstats, image, withLink = true }) {
    const setDefaultImage = event => {
        event.target.src = 'https://via.placeholder.com/292x389';
    };

    const heroContent = (
        <>
            <div>
                <h2>{name}</h2>
                <img src={image.url} alt={`${name}`} className='featured__hero__img' onError={setDefaultImage} />
            </div>
            <div className='featured__hero__stats'>
                <HeroPowerStats powerstats={powerstats} />
            </div>
        </>
    )

    return (
        <div className='featured__hero'>
            {
                withLink && (
                    <Link to={`/hero/${heroId}`}>
                        {heroContent}
                    </Link>
                )
            }
            {
                !withLink && (
                    <>
                        {heroContent}
                    </>
                )
            }
        </div>
    );
}

export default HeroSimplified;
