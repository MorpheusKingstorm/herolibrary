import './HeroesFeatured.css'
import { useEffect, useState } from 'react';
import { getBasicHeroInfoById } from '../../requests';
import HeroSimplified from '../HeroSimplified/HeroSimplified';
import Loader from '../Loader/Loader';

const featuredHeroesIds = [4, 253, 391, 146, 121, 131]

function HeroesFeatured() {
    const [ featuredHeroesList, setFeaturedHeroesList ] = useState([]);
    const [ isLoading, setLoadingState ] = useState(true);

    useEffect(() => {
        fetchAndRenderFeaturedHeroes();
    }, [])
    
      const fetchAndRenderFeaturedHeroes = async () => {
        let heroes = [];
    
        for (const heroId of featuredHeroesIds) {
          const hero = await getBasicHeroInfoById(heroId);
          heroes.push(hero);
        }
    
        setFeaturedHeroesList(heroes);
        setLoadingState(false);
    }

    return (
        <section className='featured'>
            <h1>Featured Heroes</h1>
            {
                !isLoading && (
                    <div className='featured__list'>
                        {featuredHeroesList.map(({ name, powerstats, imgUrl }) => 
                            <HeroSimplified name={name} powerstats={powerstats} imgUrl={imgUrl} />
                        )}
                    </div>
                )
            }
            {
                isLoading && (
                    <div className='loader-container'>
                        <Loader />
                    </div>
                )
            }
        </section>
    );
}

export default HeroesFeatured;
