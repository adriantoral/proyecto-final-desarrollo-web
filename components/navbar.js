"use client"

import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary z-3 mb-4">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <Image src="/logo.png" alt="logo" width={50} height={50}/>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" href="/login">Login</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" href="/signup">Signup</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}