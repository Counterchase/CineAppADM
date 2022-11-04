import {useEffect, useState} from "react";
import { listarReservas } from '../api'

export function Reservas(){

    const [ reservas, setReservas] = useState([])

    useEffect(()=>{
        const getData = async ()=>{
            setReservas(await listarReservas())
        }
    },[])

    return(
        <>
            <h1>Reservas</h1>
            {reservas.map((reserva)=> <p key={reserva.id} >{reserva.name}</p>)}
        </>
    )
}