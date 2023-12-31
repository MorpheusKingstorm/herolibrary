import { useState } from 'react';
import './Nav.css'
import logo from '../../assets/img/nav_logo.png';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import heroesData from '../../heroesList.json';

function Nav() {
    const [ searchInputValue, setSearchInputValue ] = useState('');
    const navigate = useNavigate();

    const onEnterPress = (event) => {
        if (event.key === 'Enter') {
            setSearchInputValue(event.target.value);
            navigate(`/search/${event.target.value}`);
        }
    };

    return (
        <>
            <nav className="nav">
                <div className="container">
                    <Link to="/"><img className="nav__logo" src={logo} alt="Superhero Database" /></Link>
                    <div className="nav__search">
                        <input 
                            list='heroesList' 
                            onKeyDown={onEnterPress} 
                            onChange={event => {setSearchInputValue(event.target.value)}} 
                            value={searchInputValue} 
                            type="text" 
                            name="search" 
                            placeholder='Type a hero name'
                            autoComplete='off' />
                        <datalist id='heroesList'>
                            {heroesData.map((hero) => (
                                <option key={hero.id} value={hero.name} />
                            ))}
                        </datalist>
                        <Link to={`/search/${searchInputValue}`}><button>Find hero!</button></Link>
                    </div>
                </div>
            </nav>
            
            <Outlet />
        </>
    );
}

export default Nav;
