import { NextResponse } from "next/server"

const API_URL = 'https://jsonplaceholder.typicode.com/todos'

export async function GET(req: Request) {
    const res = await fetch(API_URL)

    return NextResponse.json(await res.json(), {
        status: res.status,
        statusText: res.statusText,
    })
}