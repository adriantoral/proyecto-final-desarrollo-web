export async function get_comercio(cif = undefined) {
    const res = await fetch(cif ? `http://localhost:3000/api/comercios?cif=${cif}` : "http://localhost:3000/api/comercios", {cache: "no-cache"})
    return await res.json()
}