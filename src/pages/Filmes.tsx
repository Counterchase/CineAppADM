import {useEffect, useState} from "react";
import { listarFilmes } from '../api'

export function Filmes(){

    const [ filmes, setFilmes] = useState([])

    useEffect(()=>{
       const getData = async ()=>{
           setFilmes(await listarFilmes())
       }
    },[])

    return(
        <>
            <h1>Filmes</h1>
            {filmes.map((filme)=> <p key={filme.id} >{filme.name}</p>)}
        </>
    )
}