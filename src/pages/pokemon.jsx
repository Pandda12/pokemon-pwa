import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getPokemonData} from "../api/pokemonData";
import Layout from "../components/layout";
import PokemonLoading from "../components/pokemonLoading";
import {PokemonData} from "../components/pokemon";

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
                // If the request fails (404 or other errors), update the state with the error
                setError("Pokemon not found");
            }
        }

        fetchData();
    }, [id]);

    if (error) {
        // Render an error message if there's an error
        return (
            <Layout>
                Pokemon Not Found
            </Layout>
        );
    }

    return (
        <Layout>
            {isLoading ? <PokemonLoading/> : <PokemonData pokemon={pokemonData} />}
        </Layout>

    );



}