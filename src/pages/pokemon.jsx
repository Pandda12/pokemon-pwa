import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getPokemonData} from "../api/pokemonData";
import Layout from "../components/layout";
import PokemonLoading from "../components/pokemonLoading";
import {PokemonData} from "../components/pokemonData";
import PokemonNotFound from "../components/pokemonNotFound";

export default function Pokemon(){

    let { id } = useParams();

    const [pokemonData,setPokemonData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        async function fetchData() {
            try {
                const data = await getPokemonData(id);
                setPokemonData(data);
                document.title = "Pokemon PWA - " + data.name;
                setIsLoading(false);
            } catch (error) {
                setError("Pokemon not found");
            }
        }

        fetchData();
    }, [id]);

    if ( error )
        return (<PokemonNotFound/>);

    return (
        <Layout>
            {isLoading ? <PokemonLoading/> : <PokemonData pokemon={pokemonData} />}
        </Layout>

    );

}