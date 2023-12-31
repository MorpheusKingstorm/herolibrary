import { useEffect, useState } from 'react';
import './PageNotFound.css'
import Loader from '../Loader/Loader';

function PageNotFound() {
    const [ isLoading, setLoadingState ] = useState(true);

    useEffect(() => {
        setLoadingState(false);
    }, [])

    return (
        <>
            {
                !isLoading && (
                    <section class='page__not__found'>
                        <div className='container'>
                            <h1>404</h1>
                            <h2>Page not found</h2> 
                        </div>
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

export default PageNotFound;
