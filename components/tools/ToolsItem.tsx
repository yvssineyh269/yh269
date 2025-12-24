import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ToolsItem({
  title,
  icon,
  description,
  tag,
  index,
}: {
  title: string;
  icon: string;
  description: string;
  tag: string;
  index: number;
}) {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 px-6 lg:px-10 relative group/tool",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b"
      )}
    >
      {index < 8 ? (
        <div className="opacity-0 group-hover/tool:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-t from-green-100 to-transparent pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/tool:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-b from-blue-100 to-transparent pointer-events-none" />
      )}

      <Image
        src={icon}
        width={32}
        height={32}
        className="mb-4 relative z-10"
        alt={"svg-icon"}
      />

      <div className="text-lg font-bold mb-2 relative z-10">
        <div className="absolute left-0 inset-y-0 h-6  w-1 rounded-tr-full rounded-br-full bg-neutral-300 transition-all duration-200" />
        <span className=" px-2 group-hover/tool:translate-x-2 transition duration-200 inline-block text-neutral-800">
          {title}
        </span>
      </div>

      <p className="text-sm text-neutral-600 max-w-xs relative z-10">
        {description}
      </p>
      <p className="mt-5 text-sm text-neutral-400 max-w-xs relative z-10">
        {tag}
      </p>
    </div>
  );
}
