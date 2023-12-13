import axios from "axios";

export const getPokemonData = async (id) => {

    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`; // Use ${} for variable substitution

    const { data } = await axios.get(URL);
    return data;
};
