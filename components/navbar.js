"use client"

import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";


export default function Navbar() {
    const [logeado, set_logeado] = useState(localStorage.getItem("email")),
        [admin, set_admin] = useState(localStorage.getItem("tipo") === "admin"),
        alerta = useRef()

    const logout = () => {
        localStorage.removeItem("email")
        alerta.current.classList.remove("d-none")
        setTimeout(() => {
            alerta.current.classList.add("d-none")
        }, 3000)
        set_logeado(undefined)
    }

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, [])

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary z-3 mb-4">
            <div className="d-none position-fixed top-0 end-0 mt-3 me-3 bg-success border border-black border-1 rounded p-3" ref={alerta}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
                <span className="ms-2">Sesión cerrada correctamente</span>
            </div>

            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <Image src="/logo.png" alt="logo" width={50} height={50}/>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={logeado ? "d-none" : "collapse navbar-collapse"} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" href="/login">Login</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" href="/signup">Signup</Link>
                        </li>
                    </ul>
                </div>

                <div className={logeado && !admin ? "collapse navbar-collapse" : "d-none"} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className="nav-link" onClick={logout}>Logout</button>
                        </li>
                    </ul>
                </div>

                <div className={logeado && admin ? "collapse navbar-collapse" : "d-none"} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" href="/admin">Administración</Link>

                            <button className="nav-link" onClick={logout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}