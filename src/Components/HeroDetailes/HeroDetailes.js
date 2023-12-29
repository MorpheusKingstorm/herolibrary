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
    const [detailedHeroInfo, setDetailedHeroInfo] = useState([]);
    const [ isLoading, setLoadingState ] = useState(true);

    useEffect(() => {
        fetchAndRenderDetailedHero(heroId, setDetailedHeroInfo, setLoadingState);
    }, [heroId]);

    console.log(detailedHeroInfo);

    return (
        <>
            {
                !isLoading && (
                    <section>
                        <h1>Hero Details</h1>
                        {detailedHeroInfo.map(({ name, id, image, powerstats, biography, appearance }) => (
                            <>
                                <HeroSimplified key={id} heroId={id} name={name} powerstats={powerstats} image={image} withLink={false} />
                                <div>
                                    <h2>Biography</h2>

                                    <h3>Alignment:</h3> 
                                    <p>{biography.alignment}</p>

                                    <h3>Alter egos:</h3> 
                                    <p>{biography['alter-egos']}</p>

                                    <h3>First appearance:</h3> 
                                    <p>{biography['first-appearance']}</p>

                                    <h3>Full name:</h3> 
                                    <p>{biography['full-name']}</p>

                                    <h3>Place of birth:</h3> 
                                    <p>{biography['place-of-birth']}</p>

                                    <h3>Publisher</h3> 
                                    <p>{biography['publisher']}</p>
                                </div>
                                <div>
                                    <h2>Appearance</h2>

                                    <h3>Eye color</h3>
                                    <p>{appearance['eye-color']}</p>

                                    <h3>Gender</h3>
                                    <p>{appearance['gender']}</p>

                                    <h3>Hair-color</h3>
                                    <p>{appearance['hair-color']}</p>

                                    <h3>Eye color</h3>
                                    <p>{appearance['eye-color']}</p>

                                    <h3>Eye color</h3>
                                    <p>{appearance['eye-color']}</p>

                                    <h3>Eye color</h3>
                                    <p>{appearance['eye-color']}</p>
                                </div>
                            </>
                        ))}
                    </section>    
                )
            }
            {
                isLoading && (
                    <div className='loader-container'>
                        <Loader />
                    </div>
                )
            }
        </>
    );
}

export default HeroDetailes;