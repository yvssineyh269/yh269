import { CheckSquareIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// -- Timeline data for my professional journey --
export const timelineData = [
  // -- Update a portofolio
  {
    title: "Novembre 2025",
    content: (
      <div>
        <p className="text-neutral-800 text-xl md:text-xl font-normal mb-8">
          Built and update my portofolio UI and Building a blog app from scratch
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://assets.aceternity.com/templates/startup-1.webp"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow_inset_custom]"
          />
          <Image
            src="https://assets.aceternity.com/templates/startup-2.webp"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow_inset_custom]"
          />
        </div>
      </div>
    ),
  },
  // -- First Job
  {
    title: "Avril - Octobre 2025",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-8">
          I usually build a lading page for{" "}
          <Link
            href={"https://darkaredu.com"}
            className="font-semibold underline uppercase"
          >
            DarkarEDU
          </Link>{" "}
          and I usually update a landing page when we need to update.{" "}
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-8">
          I build a LMS platforme named{" "}
          <Link
            href={"https://sunuschool.net"}
            className="uppercase font-semibold underline"
          >
            sunschoool
          </Link>
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow_inset_custom"
          />
          <Image
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow_inset_custom"
          />
        </div>
      </div>
    ),
  },
  // --
  {
    title: "2022",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-4">
          Deployed 2 new website on vercel
        </p>
        <div className="mb-8 grid grid-cols-2 gap-4">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xl md:text-xl">
            <CheckSquareIcon className="bg-green-400 rounded-md" /> Card grid
            component
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xl md:text-xl">
            <CheckSquareIcon className="bg-green-400 rounded-md" /> Card grid
            component
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xl md:text-xl">
            <CheckSquareIcon className="bg-green-400 rounded-md" /> Startup
            template Aceternity
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xl md:text-xl">
            <CheckSquareIcon className="bg-green-400 rounded-md" /> Startup
            template Aceternity
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
          />
          <Image
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  // -- IoT certificate
  {
    title: "2023 - 2024",
    content: (
      <div>
        <p className="text-neutral-800 font-semibold text-xl md:text-xl mb-8">
          IoT certificate: Iget my certificate in IoT with Cisco Networking{" "}
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-8">
          Lorem ipsum is for people who are too lazy to write copy. But we are
          not. Here are some more example of beautiful designs I built.
        </p>
        <div className="gap-4">
          <Image
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  // -- MBA 1 GLAR
  {
    title: "2023 - 2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-8">
          BAC+4 spécialisation en developpement d'application mobile, gestion de
          SI et mise en place d'infrastructure IT.{" "}
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-8">
          Lorem ipsum is for people who are too lazy to write copy. But we are
          not. Here are some more example of beautiful designs I built.
        </p>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-4">
          Deployed 5 new components on Aceternity today
        </p>
        <div className="mb-8 grid grid-cols-2 gap-4">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xl md:text-xl">
            <CheckSquareIcon className="bg-green-400 rounded-md" /> Card grid
            component
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xl md:text-xl">
            <CheckSquareIcon className="bg-green-400 rounded-md" /> Card grid
            component
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xl md:text-xl">
            <CheckSquareIcon className="bg-green-400 rounded-md" /> Startup
            template Aceternity
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xl md:text-xl">
            <CheckSquareIcon className="bg-green-400 rounded-md" /> Startup
            template Aceternity
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow_inset_custom"
          />
          <Image
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow_inset_custom"
          />
        </div>
      </div>
    ),
  },
  //  --
  {
    title: "2023 - 2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-8">
          BAC+4 spécialisation en developpement d'application mobile, gestion de
          SI et mise en place d'infrastructure IT.{" "}
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-8">
          Lorem ipsum is for people who are too lazy to write copy. But we are
          not. Here are some more example of beautiful designs I built.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow_inset_custom"
          />
          <Image
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow_inset_custom]"
          />
        </div>
      </div>
    ),
  },
  // --- Bachelor
  {
    title: "2021 - 2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-8">
          I get my bachelor in teleinformatics option software ingenner and
          administrator network.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-8">
          Lorem ipsum is for people who are too lazy to write copy. But we are
          not. Here are some more example of beautiful designs I built.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow_inset_custom"
          />
          <Image
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow_inset_custom"
          />
        </div>
      </div>
    ),
  },
];

// -- Les données des outils que j'utilise au quotidien --
export const toolsData = [
  // ============ IDEs =============
  {
    title: "Android Studio",
    icon: "/android-icon.svg",
    description: "Design and prototyping tool for creating user interfaces.",
    tag: "#design #prototyping #ui-ux",
  },
  {
    title: "PyCharm",
    icon: "/pycharm.svg",
    description: "Design and prototyping tool for creating user interfaces.",
    tag: "#design #prototyping #ui-ux",
  },
  {
    title: "IntelliJ IDEA",
    icon: "/intellij-idea.svg",
    description: "Design and prototyping tool for creating user interfaces.",
    tag: "#design #prototyping #ui-ux",
  },
  {
    title: "Vs Code",
    icon: "/visual-studio-code.svg",
    description: "Design and prototyping tool for creating user interfaces.",
    tag: "#design #prototyping #ui-ux",
  },
  // ============= Framworks & Libraries =============
  {
    title: "Next.js",
    icon: "/nextjs-icon.svg",
    description: "Design and prototyping tool for creating user interfaces.",
    tag: "#design #prototyping #ui-ux",
  },
  {
    title: "Tailwind CSS",
    icon: "/tailwindcss-icon.svg",
    description: "Design and prototyping tool for creating user interfaces.",
    tag: "#design #prototyping #ui-ux",
  },
  {
    title: "Flutter",
    icon: "/flutter.svg",
    description: "Design and prototyping tool for creating user interfaces.",
    tag: "#design #prototyping #ui-ux",
  },
  {
    title: "Spring Boot",
    icon: "/spring-icon.svg",
    description: "Design and prototyping tool for creating user interfaces.",
    tag: "#design #prototyping #ui-ux",
  },
  // ============ Languages =============
  {
    title: "Python",
    icon: "/python.svg",
    description: "Design and prototyping tool for creating user interfaces.",
    tag: "#design #prototyping #ui-ux",
  },
  {
    title: "Java",
    icon: "/java.svg",
    description: "Design and prototyping tool for creating user interfaces.",
    tag: "#design #prototyping #ui-ux",
  },
  {
    title: "Dart",
    icon: "/dart.svg",
    description: "Design and prototyping tool for creating user interfaces.",
    tag: "#design #prototyping #ui-ux",
  },
  {
    title: "HTML5",
    icon: "/html-5.svg",
    description: "Design and prototyping tool for creating user interfaces.",
    tag: "#design #prototyping #ui-ux",
  },
  // =========== Database Tools =============
  {
    title: "Firebase",
    icon: "/firebase-icon.svg",
    description: "Design and prototyping tool for creating user interfaces.",
    tag: "#design #prototyping #ui-ux",
  },
  {
    title: "MongoDB",
    icon: "/mongodb-icon.svg",
    description: "Design and prototyping tool for creating user interfaces.",
    tag: "#design #prototyping #ui-ux",
  },
  {
    title: "MySQL",
    icon: "/mysql.svg",
    description: "Design and prototyping tool for creating user interfaces.",
    tag: "#design #prototyping #ui-ux",
  },
  {
    title: "PostgreSQL",
    icon: "/postgresql.svg",
    description: "Design and prototyping tool for creating user interfaces.",
    tag: "#design #prototyping #ui-ux",
  },
];
