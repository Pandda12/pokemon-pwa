import {Link} from "react-router-dom";
import React from "react";

export function PokemonData({pokemon}){
    return (
        <>
            <Link
                to={"/catalog"}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                Back
            </Link>
            <h1 className="text-4xl">{pokemon.name}</h1>
            <img style={{height: '300px', width: '300px'}} alt={pokemon.name}
                 src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}/>
            <div className="my-5">
                <div className="font-bold">Base info</div>
                <div className="my-2">Base experience: {pokemon.base_experience}</div>
                <div className="my-2">Weight: {pokemon.weight}</div>
                <div className="my-2">Height: {pokemon.height}</div>
            </div>
            <div className="my-5">
                <div className="font-bold">Abilities</div>
                {pokemon.abilities?.map((poke, i) => {
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
                {pokemon.moves?.map((poke, i) => {
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
                {pokemon.stats?.map((poke, i) => {
                    return (
                        <div key={i} className="my-3">
                            <div>Name: {poke.stat.name}</div>
                            <div>Base stat: {poke.base_stat}</div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}