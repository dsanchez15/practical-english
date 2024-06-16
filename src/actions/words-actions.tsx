"use server";

import prisma from "@/lib/prisma";

export async function listWords() {
  let words;
  try {
    words = await prisma.words.findMany();
  } catch (error) {
    return;
  }
  return words;
}
