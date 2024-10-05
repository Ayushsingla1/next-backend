import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server"
export function GET(){
    return Response.json({name : "Ayush",email : "Ayush@gmail.com"})
}

const client = new PrismaClient();
export async function POST(req : NextRequest){
    const body = await req.json();
    const res = await client.user.create({
        data :{
            Username : body.username,
            Password : body.password
        }})
    console.log(res);

    return Response.json({ message : "you are logged in successfully"})

} 