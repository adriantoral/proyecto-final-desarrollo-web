export async function get_comercio(cif) {
    const res = await fetch(`http://localhost:3000/api/comercios?cif=${cif}`)
    return await res.json()
}