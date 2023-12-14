import '../App.css';
import { useEffect, useState } from 'react';
import { getAllPokemonList } from '../api/pokemonList';
import Layout from "../components/layout";
import {Link} from "react-router-dom";

function Catalog() {
    const [pokemonList,setPokemonListData] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const data = await getAllPokemonList();
            setPokemonListData(data?.results);
            document.title = "Pokemon PWA - Catalog";
        }
        fetchData();
    },[])
    return (
        <Layout>
            <div style={{marginTop:'40px',justifyContent:'space-around',display:'flex',flexWrap:'wrap', width:'90%', margin:'auto'}}>

                {pokemonList?.map((poke,i) => {
                    return (
                        <Link
                            key={i}
                            to={`/pokemon/${i + 1}`}
                            style={{width: '400px', height: '330px', border: '2px solid #000000', margin: '30px 10px'}}
                        >


                            <img style={{height: '300px', width: '300px'}} alt="pokemon"
                                 src={`https://img.pokemondb.net/artwork/large/${poke.name}.jpg`}/>
                            <div style={{padding: '5px 10px'}}>
                                <p style={{fontWeight: 'bold', textTransform: 'capitalize'}}> {poke.name}</p>
                            </div>
                        </Link>
                    )
                })}
                <div>

                </div>
            </div>
        </Layout>
    );
}

export default Catalog;