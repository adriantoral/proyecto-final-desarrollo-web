import {NextResponse} from 'next/server'
import {readFileSync, writeFileSync} from 'fs';

export async function GET(request) {
    const {searchParams} = new URL(request.url)
    const cif = searchParams.get("cif")

    try {
        const comercios = JSON.parse(readFileSync("data/comercios.txt"))
        // console.log(comercios)

        if (cif) {
            const comercios_filtrados = comercios.filter((c) => c.cif === cif)
            if (comercios_filtrados.length > 0) return NextResponse.json({comercios: comercios_filtrados[0], status: 200})
            else return NextResponse.json({message: "Comercio no existe...", status: 400})
        }

        return NextResponse.json({comercios: comercios, status: 200})
    } catch (e) {
        return NextResponse.json({message: "Comercios no existen...", status: 400})
    }
}

export async function POST(request) {
    const data = await request.json()
    try {
        const comercios = JSON.parse(readFileSync("data/comercios.txt"))
        writeFileSync("data/comercios.txt", JSON.stringify([...comercios, data]))
    } catch (e) {
        writeFileSync("data/comercios.txt", JSON.stringify([data]))
    }
    return NextResponse.json({message: "Guardando datos..."})
}