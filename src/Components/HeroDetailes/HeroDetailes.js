import { useParams } from 'react-router';
import './HeroDetailes.css';
import { getDetailedHeroInfoById } from '../../requests';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import HeroSimplified from '../HeroSimplified/HeroSimplified';

function fetchAndRenderDetailedHero(heroId, setDetailedHeroInfo, setLoadingState) {
    getDetailedHeroInfoById(heroId)
        .then((detailedHero) => {
            setDetailedHeroInfo([detailedHero]);
            setLoadingState(false);
        })
        .catch((error) => {
            console.error('Error fetching hero details:', error);
        });
}

function HeroDetailes() {
    const { heroId } = useParams();
    const [ detailedHeroInfo, setDetailedHeroInfo ] = useState([]);
    const [ isLoading, setLoadingState ] = useState(true);

    useEffect(() => {
        fetchAndRenderDetailedHero(heroId, setDetailedHeroInfo, setLoadingState);
    }, [heroId]);

    return (
        <>
            {
                !isLoading && (
                    <section >
                        {detailedHeroInfo.map(({ name, id, image, powerstats, biography, appearance, connections, work }) => (
                            <div key={id}>
                                <h1>Hero Details #{id}</h1>
                                <div className="hero-details">
                                    <HeroSimplified key={id} heroId={id} name={name} powerstats={powerstats} image={image} withLink={false} />
                                    <div>
                                        <h2>Biography</h2>

                                        <h3>Alignment:</h3> 
                                        <p>{biography['alignment'] === 'null' || biography['alignment'] === '' ? '-' : biography['alignment']}</p>

                                        <h3>Alter egos:</h3> 
                                        <p>{biography['alter-egos'] === 'null' || biography['alter-egos'] === '' ? '-' : biography['alter-egos']}</p>

                                        <h3>First appearance:</h3> 
                                        <p>{biography['first-appearance'] === 'null' || biography['first-appearance'] === '' ? '-' : biography['first-appearance']}</p>

                                        <h3>Full name:</h3> 
                                        <p>{biography['full-name'] === 'null' || biography['full-name'] === '' ? '-' : biography['full-name']}</p>

                                        <h3>Place of birth:</h3> 
                                        <p>{biography['place-of-birth'] === 'null' || biography['place-of-birth'] === '' ? '-' : biography['place-of-birth']}</p>

                                        <h3>Publisher</h3> 
                                        <p>{biography['publisher'] === 'null' || biography['publisher'] === '' ? '-' : biography['publisher']}</p>
                                    </div>
                                    <div>
                                        <h2>Appearance</h2>

                                        <h3>Eye color</h3>
                                        <p>{appearance['eye-color'] === 'null' || appearance['eye-color'] === '' ? '-' : appearance['eye-color']}</p>

                                        <h3>Gender</h3>
                                        <p>{appearance['gender'] === 'null' || appearance['gender'] === '' ? '-' : appearance['gender']}</p>

                                        <h3>Hair-color</h3>
                                        <p>{appearance['hair-color'] === 'null' || appearance['hair-color'] === '' ? '-' : appearance['hair-color']}</p>

                                        <h3>Race</h3>
                                        <p>{appearance['race'] === 'null' || appearance['race'] === '' ? '-' : appearance['race']}</p>

                                        <h3>Height</h3>
                                        <p>{appearance['height'][1] === 'null' || appearance['height'][1] === '' ? '-' : appearance['height'][1]}</p>

                                        <h3>Weight</h3>
                                        <p>{appearance['weight'][1] === 'null' || appearance['weight'][1] === '' ? '-' : appearance['weight'][1]}</p>
                                    </div>
                                    <div>
                                        <h2>Connections</h2>

                                        <h3>Group affiliation</h3>
                                        <p>{connections['group-affiliation'] === 'null' || connections['group-affiliation'] === '' ? '-' : connections['group-affiliation']}</p>

                                        <h3>Relatives</h3>
                                        <p>{connections['relatives'] === 'null' || connections['relatives'] === '' ? '-' : connections['relatives']}</p>
                                    </div>
                                    <div>
                                        <h2>Work</h2>

                                        <h3>Base</h3>
                                        <p>{work['base'] === 'null' || work['base'] === '' ? '-' : work['base']}</p>

                                        <h3>Occupation</h3>
                                        <p>{work['occupation'] === 'null' || work['occupation'] === '' ? '-' : work['occupation']}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>    
                )
            }
            {
                isLoading && (
                    <Loader />
                )
            }
        </>
    );
}

export default HeroDetailes;
