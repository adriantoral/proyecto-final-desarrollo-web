"use client"

import {useState} from "react"
import Volver from "@/components/volver";
import {useRouter} from "next/navigation";

export default function LoginUsuario() {
    const
        router = useRouter(),
        [email, set_email] = useState(""),
        [password, set_password] = useState("")


    const redirigir = (code) => {
        console.log("Code", code)
        if (code == 200) {
            // Aqui se guardara el JWT en vez del email
            localStorage.setItem("email", email)
            router.push("/inicio")
        }
    }
    const login = (e) => {
        e.preventDefault();
        const user = {
            email: email,
            password: password,
        }

        fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                //Authorization: `Bearer ${tokenJWT}`
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((data) => redirigir(data.status))
    }

    return (
        <main className="container text-end">
            <Volver/>

            <div className="position-absolute top-50 start-50 translate-middle">
                <h1 className="display-5 border-bottom border-primary mb-4 px-3">Bienvenido a tu cuenta!</h1>

                <form onSubmit={login}>
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

                    <button className="btn btn-primary w-25" type="submit">Login</button>
                </form>
            </div>
        </main>
    );
}