"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface JokeReponse{
    setup:string;
    punchline:string
}
export default function RandomJokeComponent() {
const [joke,setJoke]=useState<string>("")

useEffect(()=>{
    fetchJoke()
},[])

const fetchJoke=async():Promise<void>=>{
try {
    const response=await fetch("https://official-joke-api.appspot.com/random_joke")

    const data:JokeReponse=await response.json()
    setJoke(`${data.setup}-${data.punchline}`)
} catch (error) {
    console.error("Error fetching joke:", error);
    setJoke("Failed to fetch joke. Please try again.");
}
}

return(
    <>
    <div className="flex justify-center h-screen items-center bg-gradient-to-br from-[#3cee66] to-[#5b5de7]">
<div className="bg-white rounded-xl p-8">
    <h1 className="text-3xl font-bold my-5">😂 Random Joke 👈</h1>
    <p className="text-gray-700 mt-10">{joke || "loading..." }</p>
    <Button
    onClick={fetchJoke}
    className="px-3 py-2 bg-green-700 text-white rounded-3xl mt-9 hover:bg-green-600 font-bold">
    😂 Get New Joke 😂
    </Button>
</div>
    </div>
    </>
)
}
