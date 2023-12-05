"use client"

import {useState} from "react"
import Volver from "@/components/volver";

export default function LoginUsuario() {
    const
        [email, set_email] = useState(""),
        [password, set_password] = useState("")

    const login = () => {
        alert(email + " " + password)
    }

    return (
        <main className="container text-end">
            <Volver/>

            <div className="position-absolute top-50 start-50 translate-middle">
                <h1 className="display-5 border-bottom border-primary mb-4 px-3">Bienvenido a tu cuenta!</h1>

                <form>
                    <div className="form-floating mb-3">
                        <input required type="text" className="form-control" id="email" placeholder="12345678F" onChange={
                            (e) => {
                                set_email(e.target.value)
                            }
                        }/>
                        <label htmlFor="email">Email</label>

                    </div>

                    <div className="form-floating mb-3">
                        <input required type="password" className="form-control" id="password" placeholder="12345" onChange={
                            (e) => {
                                set_password(e.target.value)
                            }
                        }/>
                        <label htmlFor="password">Password</label>
                    </div>

                    <button onClick={
                        () => {
                            if (email.length > 0 && password.length > 0) login()
                        }
                    } className="btn btn-primary w-25" type="button">Login
                    </button>
                </form>
            </div>
        </main>
    );
}