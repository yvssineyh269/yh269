import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import React from "react";
import { timelineData } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Timeline */}
      <Timeline timelineData={timelineData} />
    </>
  );
}
