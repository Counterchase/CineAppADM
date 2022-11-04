import {useEffect, useState} from "react";
import { listarSessoes } from '../api'

export function Sessoes(){

    const [ sessoes, setSessoes] = useState([])

    useEffect(()=>{
        const getData = async ()=>{
            setSessoes(await listarSessoes())
        }
    },[])

    return(
        <>
            <h1>Sessoes</h1>
            {sessoes.map((sessao)=> <p key={sessao.id} >{sessao.name}</p>)}
        </>
    )
}