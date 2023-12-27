import { useEffect, useState } from 'react';
import './App.css';
import { getBasicHeroInfoById } from './requests';
import Nav from './Components/Nav/Nav';

const featuredHeroesIds = [4, 253, 391, 146, 121, 131]

function App() {
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
    <>
      <Nav></Nav>
      <main>
        <section className="featured">
        {featuredHeroesList.map(({ name, powerstats, imgUrl }) => (
          
        <div className="featured__hero">
          <h2>{name}</h2>
          <img src={imgUrl} alt={`${name} photo`}/>
          <div className="featured__hero__stats">
            <div>
              <p>{powerstats.combat}</p>
            </div>
            <div>
              <p>{powerstats.durability}</p>
            </div>
            <div>
              <p>{powerstats.inteligence}</p>
            </div>
            <div>
              <p>{powerstats.speed}</p>
            </div>
            <div>
              <p>{powerstats.strength}</p>
            </div>
          </div>
        </div>
        ))}
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
