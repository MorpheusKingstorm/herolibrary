import axios from 'axios';

const ACCESS_TOKEN = process.env.REACT_APP_HERO_API_ACCESS_TOKEN;

export const getBasicHeroInfoById = async id => {
    const { data: powerstatsData } = await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}/powerstats`)
    const { data: imageData } = await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}/image`)
    
    const powerstats = [
        { name: 'combat', value: powerstatsData.combat },
        { name: 'durability', value: powerstatsData.durability },
        { name: 'intelligence', value: powerstatsData.intelligence },
        { name: 'speed', value: powerstatsData.speed },
        { name: 'strength', value: powerstatsData.strength },
    ];
    
    return { name: powerstatsData.name, powerstats, imgUrl: imageData.url};
}
