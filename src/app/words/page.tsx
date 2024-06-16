import { WordCard } from "@/components/word-card";

import prisma from "@/lib/prisma";

export default async function WordsPage() {
  "use server";
  const words = await prisma.words.findMany();
  
  return (
    <div>
      <WordCard data={words}></WordCard>
    </div>
  );
}
