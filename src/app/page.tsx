export default async function HomePage() {
  const items = [
    {
      id: 1,
      text: `Past tense\nWhere were you born?\nI was born in Argentina.\nWere you born in Buenos Aires?\nYes, I was.\nNo, I wasn't. I was born in Córdoba.\nWhen did you move to Los Angeles?\nI moved here 10 years ago. I didn't speak English.\nDid you take English classes in Argentina?\nYes, I did. I took classes for a year.\nNo, I didn't. My aunt taught me at home.`,
    },
    { id: 2, text: "Card 2" },
    { id: 3, text: "Card 3" },
    { id: 4, text: "Card 4" },
    { id: 5, text: "Card 5" },
    { id: 6, text: "Card 6" },
    { id: 7, text: "Card 7" },
    { id: 8, text: "Card 8" },
    { id: 9, text: "Card 9" },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {items.map((item) => (
        <div key={item.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-center">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
