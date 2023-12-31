import './HeroPowerStats.css';
import * as icon from '../../assets/icons';

function HeroPowerStats({ powerstats }) {
    const statsElements = [];

    for (const key in powerstats) {
        if (Object.hasOwnProperty.call(powerstats, key)) {
            statsElements.push(
                <div key={key}>
                    <img
                        className='featured__hero__stats__icon'
                        src={icon[key].default}
                        alt={key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
                    />
                    <p>{powerstats[key]}</p>
                </div>
            );
        }
    }

    return (
        <div className='featured__hero__stats'>
            {statsElements}
        </div>
    );
}

export default HeroPowerStats;
