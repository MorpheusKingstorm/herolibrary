import './HeroesFeatured.css'
import { useEffect, useState } from 'react';
import { getBasicHeroInfoById } from '../../requests';
import HeroSimplified from '../HeroSimplified/HeroSimplified';

const featuredHeroesIds = [4, 253, 391, 146, 121, 131]

function HeroesFeatured() {
    useEffect(() => {
        fetchAndRenderFeaturedHeroes();
    }, [])
    
      const [featuredHeroesList, setFeaturedHeroesList] = useState([]);
    
      const fetchAndRenderFeaturedHeroes = async () => {
        let heroes = [];
    
        for (const heroId of featuredHeroesIds) {
          const hero = await getBasicHeroInfoById(heroId);
          heroes.push(hero);
        }
    
        setFeaturedHeroesList(heroes);
    }

    return (
        <section className="featured">
            <div className="featured__list">
                {featuredHeroesList.map(({ name, powerstats, imgUrl }) => 
                    <HeroSimplified name={name} powerstats={powerstats} imgUrl={imgUrl} />
                )}
            </div>
        </section>            
    );
}

export default HeroesFeatured;
