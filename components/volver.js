"use client"

import 'bootstrap/dist/css/bootstrap.css'

export default function Volver() {
    return (
        <div className="position-absolute top-0 start-0 ms-5 mt-5">
            <button onClick={() => {
                history.back()
            }} className="bg-transparent border-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
            </button>
        </div>
    )
}