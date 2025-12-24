import { toolsData } from "@/lib/data";
import ToolsItem from "./ToolsItem";

export default function Tools() {
  return (
    <div className="w-full bg-white dark:bg-black">
      <div className="w-full py-10">
        {/* title */}
        <div className="container mx-auto py-10 px-4 md:px-8 lg:px-10">
          <h2 className="text-3xl md:text-5xl cairo-play-bold max-w-lg tracking-tighter text-left dark:text-white">
            Tools I use on my projects
          </h2>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
                        px-4 md:px-6 lg:px-8 
                        gap-0 
                        relative z-10 py-10 
                        max-w-7xl mx-auto"
        >
          {toolsData.map((tool, index) => (
            <ToolsItem key={tool.title} {...tool} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
