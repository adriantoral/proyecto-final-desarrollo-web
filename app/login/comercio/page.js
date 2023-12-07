"use client"

import {useState} from "react"
import Volver from "@/components/volver";
import Link from "next/link";

export default function LoginComercio() {
    const [cif, set_cif] = useState("")

    return (
        <main className="container text-end">
            <Volver/>

            <div className="position-absolute top-50 start-50 translate-middle">
                <h1 className="display-5 border-bottom border-primary mb-4 px-3">Bienvenido a tu comercio!</h1>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="cif" placeholder="12345678F" onChange={
                        (e) => {
                            set_cif(e.target.value)
                        }
                    }/>
                    <label htmlFor="cif">CIF</label>
                </div>

                <Link href={`/comercio/${cif}/logged`} className="btn btn-primary w-25" type="button">Login</Link>
            </div>
        </main>
    );
}