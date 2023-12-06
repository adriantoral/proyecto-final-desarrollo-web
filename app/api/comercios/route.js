import {NextResponse} from 'next/server'
import {readFileSync, writeFileSync} from 'fs';

export async function GET() {
    try {
        const comercios = JSON.parse(readFileSync("data/comercios.txt"))
        console.log(comercios)
        return NextResponse.json({comercios: comercios})
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