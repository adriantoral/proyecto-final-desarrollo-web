"use client"

import Link from "next/link";
import {useState} from "react"

export default function Signup() {
    const
        [email, set_email] = useState(""),
        [password, set_password] = useState(""),
        [tipo_cuenta, set_tipo_cuenta] = useState("usuario")

    return (
        <main className="bg-gray-700 relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl border">
                <h1 className="text-3xl font-bold text-center text-gray-700">Crea tu cuenta!</h1>
                <form className="mt-6">
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            required
                            onChange={
                                (e) => {
                                    set_email(e.target.value)
                                }
                            }
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            required
                            onChange={
                                (e) => {
                                    set_password(e.target.value)
                                }
                            }
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mb-2">
                        <label
                            htmlFor="tipoCuenta"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Tipo de cuenta
                        </label>

                        <select
                            onChange={(e) => {
                                set_tipo_cuenta(e.target.value)
                            }}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        >
                            <option selected value="usuario">Usuario</option>
                            <option value="admin">Administrador</option>
                            <option value="comercio">Comercio</option>
                        </select>
                    </div>

                    <div className="mt-2">
                        <button
                            onClick={() => {
                                alert(email + " " + password + " " + tipo_cuenta)
                            }}
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                        >
                            Signup
                        </button>
                    </div>
                </form>

                <p className="mt-4 text-sm text-center text-gray-700">
                    Already have an account?{" "}
                    <Link href="/login" className="font-medium text-blue-600 hover:underline">
                        Log In
                    </Link>
                </p>
            </div>
        </main>
    );
}