'use client'

import Link from "next/link";
import Navbar from "@/components/navbar";

export default function HomeAdmin() {
    if (localStorage.getItem("tipo") === "admin")
        return (
            <div className="container text-center">
                <Navbar/>

                <h1>Administración</h1>
                <div className="row">
                    <Link href="/admin/crear" className="col btn btn-primary">Crear comercio</Link>
                    <Link href="/" className="col btn btn-primary">Editar comercios</Link>
                </div>
            </div>
        )

    return (
        <div className="text-center">
            <h1>No eres administrador</h1>
            <Link href="/">Volver</Link>
        </div>
    )
}
