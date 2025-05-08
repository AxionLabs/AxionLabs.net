import Carousel from "../components/Carousel";
import Navbar from "../components/navbar";

export default function Home() {
  const carouselItems = [
    {
      id: "item-1",
      image: "/images/item1.jpg",
      text: "This is the first item",
      buttonLabel: "Learn More",
      buttonLink: "/item1",
    },
    {
      id: "item-2",
      image: "/images/item2.jpg",
      text: "This is the second item",
      buttonLabel: "Learn More",
      buttonLink: "/item2",
    },
    {
      id: "item-3",
      image: "/images/item3.jpg",
      text: "This is the third item",
      buttonLabel: "Learn More",
      buttonLink: "/item3",
    },
    {
      id: "item-4",
      image: "/images/item4.jpg",
      text: "This is the fourth item",
      buttonLabel: "Learn More",
      buttonLink: "/item4",
    },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-electrolize)]">
      {/* Add Navbar at the top */}
      <Navbar />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* Removed Next.js logo */}
        <div className="w-full mt-8">
          <Carousel items={carouselItems} />
        </div>
      </main>
    </div>
  );
}
