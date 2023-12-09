import Navbar from "@/components/navbar";
import {get_comercio} from "@/utils/utils";
import Link from "next/link";

export default async function HomeComercioLogged({params}) {
    const comercios = await get_comercio(params.cif)

    if (comercios.status === 200) {
        const comercio = comercios.comercios[0]

        return (
            <main className="container">
                <Navbar/>

                <h1 className="text-center">Comercio {params.cif}</h1>

                <div className="">
                    <form action="http://localhost:3000/api/comercios" method="POST">
                        <div className="form-floating mb-3">
                            <input required type="text" className="form-control" id="cif" defaultValue={comercio.cif}/>
                            <label htmlFor="cif">CIF</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input required type="text" className="form-control" id="ciudad" defaultValue={comercio.ciudad}/>
                            <label htmlFor="ciudad">Ciudad</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input required type="text" className="form-control" id="actividad" defaultValue={comercio.actividad}/>
                            <label htmlFor="actividad">Actividad</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input required type="text" className="form-control" id="titulo" defaultValue={comercio.titulo}/>
                            <label htmlFor="titulo">Titulo</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input required type="text" className="form-control" id="resumen" defaultValue={comercio.resumen}/>
                            <label htmlFor="resumen">Resumen</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input required type="text" className="form-control" id="textos" defaultValue={comercio.textos}/>
                            <label htmlFor="textos">Textos</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input required type="text" className="form-control" id="fotos" defaultValue={comercio.fotos}/>
                            <label htmlFor="fotos">Fotos</label>
                        </div>

                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </form>
                </div>
            </main>
        )
    }

    return (
        <div className="text-center">
            <h1>Comercio no existe...</h1>
            <Link href="/">Volver</Link>
        </div>
    )
}


