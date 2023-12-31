import { useEffect, useState } from 'react';
import './SearchViewNoResults.css'
import Loader from '../Loader/Loader';

function SearchViewNoResults({ searchValue }) {
    const [ isLoading, setLoadingState ] = useState(true);

    useEffect(() => {
        setLoadingState(false);
    }, [])

    return (
        <>
            {
                !isLoading && (
                    <section >
                        <h1>Search for "{searchValue}"</h1>
                        <h2>Heroes not found</h2>
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

export default SearchViewNoResults;
