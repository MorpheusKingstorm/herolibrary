import axios from 'axios';

const ACCESS_TOKEN = process.env.REACT_APP_HERO_API_ACCESS_TOKEN;

export const getBasicHeroInfoById = async id => {
    const { data: powerstatsData } = await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}/powerstats`);
    const { data: imageData } = await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}/image`);
    
    const powerstats = {
        'intelligence': powerstatsData.intelligence,
        'strength': powerstatsData.strength,
        'speed': powerstatsData.speed,
        'durability': powerstatsData.durability,
        'power': powerstatsData.power,
        'combat': powerstatsData.combat,
    };
    
    return { name: powerstatsData.name, powerstats, imgUrl: imageData.url};
}

export const searchHeroesByName = name => {
    return axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/search/${name}`);
}
