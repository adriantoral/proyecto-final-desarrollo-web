import Navbar from "@/components/navbar";
import Comercio from "@/components/comercio";
import {get_comercio} from "@/utils/utils";
import Link from "next/link";

export default async function HomeComercio({params}) {
    const comercio = await get_comercio(params.cif)
    if (comercio.status === 200) return (
        <main className="container">
            <Navbar/>

            <ul className="list-group">
                <Comercio comercio={comercio.comercios}/>
            </ul>
        </main>
    )

    return (
        <div className="text-center">
            <h1>Comercio no existe...</h1>
            <Link href="/">Volver</Link>
        </div>
    )
}


