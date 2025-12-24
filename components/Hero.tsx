import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { MapPinHouse, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <div className="w-full bg-white md:px-10">
      <div className="container mx-auto py-20 lg:py-40 md:px-8 px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline" className="animate-out">
                Comorian 🇰🇲! coder
              </Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-4xl md:text-7xl max-w-lg tracking-tighter text-left">
                This is my name{" "}
                <span className="cairo-play-bold">Yassine Hassane.</span>
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                let is start talk what I can do for you,
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                <PhoneCall size={6} />
                Jump on a call
              </Button>
              <Button size="lg" className="gap-4">
                <MapPinHouse size={6} />
                Find me here
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-yellow-400 rounded-md aspect-square"></div>
            <div className="bg-blue-800 rounded-md row-span-2"></div>
            <div className="bg-red-600 rounded-md aspect-square"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
