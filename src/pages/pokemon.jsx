import React, {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    useParams
} from "react-router-dom";
import {getPokemonData} from "../api/pokemonData";
import Layout from "../components/layout";

function Pokemon(){

    let { id } = useParams();

    const [pokemonData,setPokemonData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getPokemonData(id);
                setPokemonData(data);
                document.title = "Pokemon PWA - " + data.name;
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

            <Link
                to={"/catalog"}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                Back
            </Link>
            <h1 className="text-4xl">{pokemonData.name}</h1>
            <img style={{height: '300px', width: '300px'}} alt={pokemonData.name}
                 src={`https://img.pokemondb.net/artwork/large/${pokemonData.name}.jpg`}/>
            <div className="my-5">
                <div className="font-bold">Base info</div>
                <div className="my-2">Base experience: {pokemonData.base_experience}</div>
                <div className="my-2">Weight: {pokemonData.weight}</div>
                <div className="my-2">Height: {pokemonData.height}</div>
            </div>
            <div className="my-5">
                <div className="font-bold">Abilities</div>
                {pokemonData.abilities?.map((poke, i) => {
                    return (
                        <div key={i} className="my-2">
                            <div>Name: {poke.ability.name}</div>
                            <div>Slot: {poke.slot}</div>
                        </div>
                    );
                })}
            </div>
            <div className="my-5">
                <div className="font-bold">Moves</div>
                {pokemonData.moves?.map((poke, i) => {
                    return (
                        <div key={i} className="my-3">
                            <div>Name: {poke.move.name}</div>
                            <div>Level learned at: {poke.version_group_details[0].level_learned_at}</div>
                            <div>Move learn method: {poke.version_group_details[0].move_learn_method.name}</div>
                            <div>Version group: {poke.version_group_details[0].version_group.name}</div>
                        </div>
                    );
                })}
            </div>
            <div className="my-5">
                <div className="font-bold">Stats</div>
                {pokemonData.stats?.map((poke, i) => {
                    return (
                        <div key={i} className="my-3">
                            <div>Name: {poke.stat.name}</div>
                            <div>Base stat: {poke.base_stat}</div>
                        </div>
                    );
                })}
            </div>
        </Layout>

    );



}

export default Pokemon