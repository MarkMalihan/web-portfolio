import { useState } from "react";
import { Card } from "@/component/ui/Card";
import BentoLayout from "@/layouts/BentoLayout";

import { Button } from "@/component/ui/Button";
import DarkModeButton from "@/features/DarkModeButton";
import { cardData } from "@/config/cardData";

const Homepage = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const navItems = [
    "All",
    "Argel",
    "Skills",
    "Experiences",
    "Projects",
    "Contact",
  ];

  const filteredCards =
    activeFilter === "All"
      ? cardData
      : [
          ...cardData.filter((card) => card.filter === activeFilter),
          ...cardData.filter((card) => card.filter !== activeFilter),
        ];

  return (
    <div>
      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-3 p-4">
        {navItems.map((item) => (
          <Button
            variant="light"
            key={item}
            onClick={() => setActiveFilter(item)}
            className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-md cursor-pointer text-black ${
              activeFilter === item
                ? "bg-blue-500 dark:bg-blue-700 text-white hover:text-black hover:bg-blue-400 dark:hover:bg-blue-800 dark:hover:text-gray-300 scale-105 shadow-lg"
                : ""
            }`}
          >
            {item}
          </Button>
        ))}
        <DarkModeButton />
      </nav>

      {/* Layout */}
      <BentoLayout>
        {filteredCards.map((card, index) => (
          <Card
            key={index}
            className={`${
              activeFilter === card.filter
                ? "border-2 border-blue-500 shadow-lg scale-y-105"
                : activeFilter === "All"
                  ? ""
                  : "opacity-50 scale-90"
            } ${card.className}`}
          >
            {card.content}
          </Card>
        ))}
      </BentoLayout>
    </div>
  );
};

export default Homepage;
