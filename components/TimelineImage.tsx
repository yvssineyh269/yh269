import Image from "next/image";
import Link from "next/link";
import { Link2Icon } from "lucide-react";

// Aperçu cliquable d'un projet dans la timeline.
// overflow-hidden + aspect-video : l'image (et son zoom au survol) reste dans son cadre.
export default function TimelineImage({
  src,
  alt,
  href = "#",
}: {
  src: string;
  alt: string;
  href?: string;
}) {
  const external = href.startsWith("http");

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="relative group block w-full overflow-hidden rounded-lg aspect-video border border-neutral-200 shadow-sm"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 40vw, (min-width: 768px) 45vw, 90vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      <Link2Icon className="absolute inset-0 m-auto text-white w-10 h-10 bg-black/40 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
}
