import { useEffect, useState } from 'react';
import './SearchView.css'
import { useParams } from 'react-router';
import { searchHeroesByName } from '../../requests';
import HeroSimplified from '../HeroSimplified/HeroSimplified';
import Loader from '../Loader/Loader';
import SearchViewNoResults from '../SearchViewNoResults/SearchViewNoResults';

function SearchView() {
    const [ searchList, setSearchListContent ] = useState([]);
    const [ isLoading, setLoadingState ] = useState(true);
    const { name } = useParams();

    useEffect(() => {
        setLoadingState(true);

        searchHeroesByName(name).then(searchResults => {
            const { data } = searchResults;

            if(data.error) {
                setLoadingState(false);
                setSearchListContent([]);
                return;
            }

            const { results } = data;
            setSearchListContent(results);
            setLoadingState(false);
        });
    }, [name])

    return (
        <>
        
            {
                !isLoading && searchList.length > 0 && (
                    <section >
                        <h1>Search for "{name}"</h1>
                        <div className='search'>
                            {searchList.map(({id, powerstats, image, name}) => (
                            <HeroSimplified key={id} heroId={id} powerstats={powerstats} image={image} name={name} />
                            ))}
                        </div>
                        
                    </section>            
                )
            }
            {
                !isLoading && searchList.length === 0 && (
                    <SearchViewNoResults searchValue={name} />
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

export default SearchView;
