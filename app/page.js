import Navbar from "@/components/navbar";
import Comercio from "@/components/comercio";
import {get_comercio} from "@/utils/utils";

export default async function Home() {
    const comercios = await get_comercio()

    return (
        <main className="container text-center">
            <Navbar/>
            <ul className="list-group">
                {
                    comercios.comercios.map((comercio) => (
                        <Comercio comercio={comercio}/>
                    ))
                }
            </ul>
        </main>
    )
}
