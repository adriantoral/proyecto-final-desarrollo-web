export async function get_comercio(cif = undefined) {
    const res = await fetch(cif ? `http://localhost:3000/api/comercios?cif=${cif}` : "http://localhost:3000/api/comercios", {cache: "no-cache"})
    return await res.json()
}

export function get_comercio_client(set_comercios, set_comercios_filtrados = undefined, cif = undefined) {
    fetch(cif ? `http://localhost:3000/api/comercios?cif=${cif}` : "http://localhost:3000/api/comercios")
        .then((res) => res.json())
        .then((data) => {
            if (data.status === 200) {
                set_comercios(data.comercios)
                if (set_comercios_filtrados) set_comercios_filtrados(data.comercios)
            }
        })
}