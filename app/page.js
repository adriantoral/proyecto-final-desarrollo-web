import Navbar from "@/components/navbar";
import Comercio from "@/components/comercio";

async function get_comercios() {
    const res = await fetch("http://localhost:3000/api/comercios")
    const data = await res.json()
    console.log(data.comercios)
    return data.comercios
}

export default async function Home() {
    const comercios = await get_comercios()

    return (
        <main className="container text-center">
            <Navbar/>
            <h1 className="display-4">COMERCIOS</h1>
            <ul className="list-group">
                {
                    comercios.map((comercio) => {
                        return <Comercio comercio={comercio}></Comercio>
                    })
                }
            </ul>
        </main>
    )
}
