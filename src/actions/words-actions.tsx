"use server"
import prisma from "@/lib/prisma";

export async function listWords() {
    const words = await prisma.words.findMany()
}