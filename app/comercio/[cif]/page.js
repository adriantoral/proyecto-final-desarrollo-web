"use client"

import Navbar from "@/components/navbar";
import Comercio from "@/components/comercio";
import {get_comercio_client} from "@/utils/utils";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function HomeComercio({params}) {
    const [comercios, set_comercios] = useState([])

    useEffect(() => {
        get_comercio_client(set_comercios, undefined, params.cif)
    }, []);


    if (comercios.length > 0) return (
        <main className="container">
            <Navbar/>

            <div className={localStorage.getItem('email') ? "row my-5" : "d-none"}>
                <Link href={`/comercio/${params.cif}/resenia`} className={"col btn btn-primary"}>Nueva reseña</Link>
            </div>

            <ul className="list-group">
                <Comercio comercio={comercios[0]} resumido={false}/>
            </ul>
        </main>
    )

    return (
        <div className="text-center">
            <h1>Comercio no existe...</h1>
            <Link href="/">Volver</Link>
        </div>
    )
}


