import { CheckSquareIcon, Link2Icon, LinkIcon, Share2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// -- Timeline data for my professional journey --
export const timelineData = [
  // ================= 2026
  {
    title: "Janvier 2026",
    content: (
      <div>
        <p className="text-neutral-800 text-xl md:text-xl font-normal mb-8">
          Developpement et deploiement d&apos;un protype fonctionnelle{" "}
          <Link
            href={"https://anaden.vercel.app"}
            className="text-emerald-500 font-semibold uppercase"
          >
            Anaden
          </Link>{" "}
          website from scratch
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Link href={"#"} className="relative group">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-transform duration-500 group-hover:scale-105"
            />
            <Link2Icon className="absolute inset-0 m-auto text-white w-10 h-10 bg-black/40 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link href={"#"} className="relative group">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-transform duration-500 group-hover:scale-105"
            />
            <Link2Icon className="absolute inset-0 m-auto text-white w-10 h-10 bg-black/40 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    ),
  },

  {
    title: "Novembre 2025",
    content: (
      <div>
        <p className="text-neutral-800 text-xl md:text-xl font-normal mb-8">
          Mise à jour de l&apos;interface UI de mon portfolio sous format
          d&apos;un Time line mettant en avant le cours de mes recentes et
          precedentes réalisations.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Link href={"#"} className="relative group">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-transform duration-500 group-hover:scale-105"
            />
            <Link2Icon className="absolute inset-0 m-auto text-white w-10 h-10 bg-black/40 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link href={"#"} className="relative group">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-transform duration-500 group-hover:scale-105"
            />
            <Link2Icon className="absolute inset-0 m-auto text-white w-10 h-10 bg-black/40 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    ),
  },

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
            className="uppercase font-semibold text-emerald-600"
          >
            sunschoool
          </Link>
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Link href={"#"} className="relative group">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-transform duration-500 group-hover:scale-105"
            />
            <Link2Icon className="absolute inset-0 m-auto text-white w-10 h-10 bg-black/40 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link href={"#"} className="relative group">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-transform duration-500 group-hover:scale-105"
            />
            <Link2Icon className="absolute inset-0 m-auto text-white w-10 h-10 bg-black/40 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
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
          J&apos;ai fait une contribution de 4 composants sur universe UI
        </p>
        <div className="mb-8 grid grid-cols-2 gap-4">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xl md:text-xl">
            <CheckSquareIcon className="bg-green-400 rounded-md" /> Card grid
            component
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xl md:text-xl">
            <CheckSquareIcon className="bg-green-400 rounded-md" />
            Input Form component
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xl md:text-xl">
            <CheckSquareIcon className="bg-green-400 rounded-md" /> Footer
            template
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xl md:text-xl">
            <CheckSquareIcon className="bg-green-400 rounded-md" /> Button
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Link href={"#"} className="relative group">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-transform duration-500 group-hover:scale-105"
            />
            <Link2Icon className="absolute inset-0 m-auto text-white w-10 h-10 bg-black/40 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link href={"#"} className="relative group">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-transform duration-500 group-hover:scale-105"
            />
            <Link2Icon className="absolute inset-0 m-auto text-white w-10 h-10 bg-black/40 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
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
          IoT certificate: I get my certificate in IoT with Cisco
          Networking{" "}
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-8">
          Expliquer comment l&apos;IoT et la transformation numérique affectent
          positivement les entreprises et les administrations publiques.
          Expliquer l&apos;importance des logiciels et des données pour les
          entreprises et le monde numériques d&apos;aujourd&apos;hui. Expliquer
          les bénéfices de l&apos;automatisation et de l&apos;intelligence
          artificielle pour la transformation numérique. Expliquer le concept de
          réseau IBN. Expliquer la nécessité de renforcer la sécurité dans
          l&apos;univers numérique.
        </p>
        <div className="gap-4">
          <Link href={"#"} className="relative group">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-transform duration-500 group-hover:scale-105"
            />
            <Link2Icon className="absolute inset-0 m-auto text-white w-10 h-10 bg-black/40 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
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
          <span className="text-primary font-semibold">BAC +4</span> -
          Spécialisation en developpement de logiciel, Gestion de SI et mise en
          place d&apos;infrastructure IT.{" "}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Link href={"#"} className="relative group">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-transform duration-500 group-hover:scale-105"
            />
            <Link2Icon className="absolute inset-0 m-auto text-white w-10 h-10 bg-black/40 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link href={"#"} className="relative group">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-transform duration-500 group-hover:scale-105"
            />
            <Link2Icon className="absolute inset-0 m-auto text-white w-10 h-10 bg-black/40 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "2022 - 2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl font-normal mb-8">
          <span className="text-primary font-semibold">
            Flutter Certificate
          </span>{" "}
          - parcours de{" "}
          <span className="font-semibold">
            Génie Logiciel et Administration Réseaux
          </span>{" "}
          dans le domaine{" "}
          <span className="font-semibold">Science et Technologies</span>
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Link href={"#"} className="relative group">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-transform duration-500 group-hover:scale-105"
            />
            <Link2Icon className="absolute inset-0 m-auto text-white w-10 h-10 bg-black/40 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link href={"#"} className="relative group">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-transform duration-500 group-hover:scale-105"
            />
            <Link2Icon className="absolute inset-0 m-auto text-white w-10 h-10 bg-black/40 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
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
          <span className="text-primary font-semibold">
            Licence en Téléinformatique
          </span>{" "}
          - parcours de{" "}
          <span className="font-semibold">
            Génie Logiciel et Administration Réseaux
          </span>{" "}
          dans le domaine{" "}
          <span className="font-semibold">Science et Technologies</span>
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Link href={"#"} className="relative group">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-transform duration-500 group-hover:scale-105"
            />
            <Link2Icon className="absolute inset-0 m-auto text-white w-10 h-10 bg-black/40 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link href={"#"} className="relative group">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full transition-transform duration-500 group-hover:scale-105"
            />
            <Link2Icon className="absolute inset-0 m-auto text-white w-10 h-10 bg-black/40 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    ),
  },
];

// -- Les données des outils que j'utilise au quotidien --
export const toolsData = [
  {
    title: "Android Studio",
    icon: "/icons/android-icon.svg",
    description: "IDE officiel de Google pour le développement d'applications Android.",
    tag: "#ide #android #mobile",
  },
  {
    title: "Git",
    icon: "/icons/git-icon.svg",
    description: "Système de contrôle de version distribué pour suivre les modifications du code source.",
    tag: "#versioning #collaboration #devops",
  },
  {
    title: "IntelliJ IDEA",
    icon: "/icons/intellij-idea.svg",
    description: "IDE avancé de JetBrains pour le développement Java, Kotlin et bien d'autres langages.",
    tag: "#ide #java #kotlin",
  },
  {
    title: "Vs Code",
    icon: "/icons/visual-studio-code.svg",
    description: "Éditeur de code léger et extensible développé par Microsoft.",
    tag: "#ide #editor #extensions",
  },
  // ============= Framworks & Libraries =============
  {
    title: "Next.js",
    icon: "/icons/nextjs-icon.svg",
    description: "Framework React pour le développement d'applications web full-stack modernes.",
    tag: "#framework #react #fullstack",
  },
  {
    title: "Tailwind CSS",
    icon: "/icons/tailwindcss-icon.svg",
    description: "Framework CSS utilitaire permettant de styliser rapidement des interfaces sans quitter le HTML.",
    tag: "#css #framework #ui",
  },
  {
    title: "Flutter",
    icon: "/icons/flutter.svg",
    description: "Framework de Google pour créer des applications multiplateformes (mobile, web, desktop) depuis une seule base de code.",
    tag: "#framework #mobile #crossplatform",
  },
  {
    title: "Spring Boot",
    icon: "/icons/spring-icon.svg",
    description: "Framework Java pour créer des applications backend robustes et des APIs RESTful.",
    tag: "#framework #backend #java",
  },
  // ============ Languages =============
  {
    title: "Laravel",
    icon: "/icons/laravel.svg",
    description: "Framework PHP pour le développement d'applications web backend.",
    tag: "#framework #php #backend",
  },
  {
    title: "Java",
    icon: "/icons/java.svg",
    description: "Langage de programmation orienté objet.",
    tag: "#language #oop #backend",
  },
  {
    title: "Dart",
    icon: "/icons/dart.svg",
    description: "Langage de programmation moderne développé par Google, principalement utilisé avec Flutter.",
    tag: "#language #flutter #mobile",
  },
  {
    title: "HTML5",
    icon: "/icons/html-5.svg",
    description: "Langage de balisage fondamental pour la structuration des pages web.",
    tag: "#language #web #frontend",
  },
  // =========== Database Tools =============
  {
    title: "Firebase",
    icon: "/icons/firebase-icon.svg",
    description: "Plateforme Backend-as-a-Service de Google offrant une base de données en temps réel, l'authentification et l'hébergement.",
    tag: "#database #baas #realtime",
  },
  {
    title: "MongoDB",
    icon: "/icons/mongodb-icon.svg",
    description: "Base de données NoSQL orientée documents, stockant les données en format JSON-like (BSON).",
    tag: "#database #nosql #documents",
  },
  {
    title: "MySQL",
    icon: "/icons/mysql.svg",
    description: "Système de gestion de bases de données relationnelles open-source, l'un des plus utilisés au monde.",
    tag: "#database #sql #relational",
  },
  {
    title: "PostgreSQL",
    icon: "/icons/postgresql.svg",
    description: "Base de données relationnelle open-source avancée, aux standards SQL et sa robust.",
    tag: "#database #sql #advanced",
  },
];

// -- Contact Informations --
const contactInfoData = {
  header: {
    badge: "Contacts",
    title: "Contact with us",
    description: "If you have any question and feedback contact with us",
    subtitle:
      "We're here to help and answer any questions you might have. We look forward to hearing from you.",
  },
  contactInfo: [
    {
      id: 1,
      icon: "fa-phone",
      title: "Phone Number",
      value: "+1 (555) 123-4567",
    },
    {
      id: 2,
      icon: "fa-envelope",
      title: "Email Address",
      value: "contact@example.com",
    },
  ],
  formFields: [
    {
      id: "name",
      type: "text",
      name: "name",
      placeholder: "Name",
      icon: "fa-user",
      required: true,
    },
    {
      id: "email",
      type: "email",
      name: "email",
      placeholder: "Email Address",
      icon: "fa-envelope",
      required: true,
    },
    {
      id: "message",
      type: "textarea",
      name: "message",
      placeholder: "Message",
      icon: "fa-comment",
      rows: 6,
      required: true,
    },
  ],
};
