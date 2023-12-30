import './HeroesFeatured.css'
import { useEffect, useState } from 'react';
import { getBasicHeroInfoById } from '../../requests';
import HeroSimplified from '../HeroSimplified/HeroSimplified';
import Loader from '../Loader/Loader';

const featuredHeroesIds = [4, 253, 391, 146, 121, 131]

function HeroesFeatured() {
    const [featuredHeroesList, setFeaturedHeroesList] = useState([]);
    const [isLoading, setLoadingState] = useState(true);

    useEffect(() => {
        fetchAndRenderFeaturedHeroes();
    }, []);

    const fetchAndRenderFeaturedHeroes = async () => {
        const heroes = await Promise.all(
            featuredHeroesIds.map(async (heroId) => {
                const hero = await getBasicHeroInfoById(heroId);
                return hero;
            })
        );

        setFeaturedHeroesList(heroes);
        setLoadingState(false);
    };

    return (
        <section className='featured'>
            <h1>Featured Heroes</h1>
            {!isLoading ? (
                <div className='featured__list'>
                    {featuredHeroesList.map(({ id, name, powerstats, image }) => (
                        <HeroSimplified
                            key={id}
                            heroId={id}
                            name={name}
                            powerstats={powerstats}
                            image={image}
                        />
                    ))}
                </div>
            ) : (
                <div className='loader-container'>
                    <Loader />
                </div>
            )}
        </section>
    );
}

export default HeroesFeatured;
