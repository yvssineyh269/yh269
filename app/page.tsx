import Hero from "@/components/Hero";
import TimeLiner from "@/components/TimeLiner";
import Tools from "@/components/tools/Tools";
import { timelineData } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <TimeLiner timelineData={timelineData} />
      <Tools />
    </>
  );
}
