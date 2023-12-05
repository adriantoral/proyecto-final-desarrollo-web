"use client"

import {useState} from "react"
import Volver from "@/components/volver";

export default function Signup() {
    const
        [email, set_email] = useState(""),
        [password, set_password] = useState(""),
        [tipo_cuenta, set_tipo_cuenta] = useState("usuario")

    const signup = () => {
        alert(email + " " + password + " " + tipo_cuenta)
    }

    return (
        <main className="container text-end">
            <Volver/>

            <div className="position-absolute top-50 start-50 translate-middle">
                <h1 className="display-5 border-bottom border-primary mb-4 px-3">Crear una cuenta!</h1>

                <form>
                    <div className="input-group mb-3">
                        <div className="form-floating">
                            <input required type="text" className="form-control" id="email" placeholder="12345678F" onChange={
                                (e) => {
                                    set_email(e.target.value)
                                }
                            }/>
                            <label htmlFor="email">Email</label>
                        </div>

                        <select
                            onChange={(e) => {
                                set_tipo_cuenta(e.target.value)
                            }}
                            className="form-select"
                        >
                            <option value="usuario" hidden selected>Tipo de cuenta</option>
                            <option value="usuario">Usuario</option>
                            <option value="admin">Administrador</option>
                        </select>
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
                            if (email.length > 0 && password.length > 0 && tipo_cuenta.length > 0) signup()
                        }
                    } className="btn btn-primary w-25" type="button">Signup
                    </button>
                </form>
            </div>
        </main>
    );
}