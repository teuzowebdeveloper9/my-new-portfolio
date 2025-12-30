import { FaReact, FaJava } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoSpringBoot, BiLogoPostgresql } from "react-icons/bi";
import {
  SiTypescript,
  SiNestjs,
  SiFastify,
  SiExpress,
  SiPrisma,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiGooglecloud,
  SiKubernetes,
  SiCloudflare,
  SiAmazons3,
  SiDotnet,
  SiJest,
  SiJunit5,
  SiNextdotjs,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { DiRedis } from "react-icons/di";

function Tecnologies() {
  const categories = [
    {
      title: "Frontend",
      items: [
        { icon: FaReact, label: "React / Next.js" },
        { icon: SiNextdotjs, label: "SSR/SSG" },
        { icon: SiTypescript, label: "TypeScript" },
        { icon: IoLogoJavascript, label: "JavaScript" },
      ],
    },
    {
      title: "Back-end & APIs",
      items: [
        { icon: SiNestjs, label: "NestJS" },
        { icon: SiExpress, label: "Express" },
        { icon: SiFastify, label: "Fastify" },
        { icon: BiLogoSpringBoot, label: "Spring Boot" },
        { icon: FaNodeJs, label: "Node.js" },
        { icon: SiDotnet, label: ".NET / C#" },
        { icon: FaJava, label: "Java" },
      ],
    },
    {
      title: "IA, Dados & RAG",
      items: [
        { icon: BiLogoPostgresql, label: "PostgreSQL" },
        { icon: SiMongodb, label: "MongoDB" },
        { icon: SiMysql, label: "MySQL" },
        { icon: SiSupabase, label: "Supabase" },
        { icon: DiRedis, label: "Redis (cache)" },
        { icon: SiPrisma, label: "Prisma" },
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        { icon: FaDocker, label: "Docker" },
        { icon: SiGooglecloud, label: "GCP" },
        { icon: SiKubernetes, label: "Kubernetes" },
        { icon: SiCloudflare, label: "Cloudflare Workers" },
        { icon: SiAmazons3, label: "S3" },
      ],
    },
    {
      title: "Testes & Qualidade",
      items: [
        { icon: SiJest, label: "Jest" },
        { icon: SiJunit5, label: "JUnit" },
      ],
    },
  ];

  return (
    <section className="w-full mx-auto border-b-4 border-[#6B21A8] bg-[#0D0D0D] mb-10 px-4 py-10 text-white">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#6B21A8]">Minhas tecnologias</h1>
          <p className="text-gray-300">
            Stack alinhada ao que entrego no dia a dia: IA aplicada, SSR/SSG, APIs performáticas e cloud-first.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.title}
              className="border border-[#6B21A8] rounded-2xl p-5 bg-[#0b0b12] shadow-[0_0_30px_rgba(107,33,168,0.15)] space-y-3"
            >
              <h3 className="text-lg font-bold text-[#c084fc]">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[#6B21A8] text-sm text-[#e9d5ff] bg-[#161323]"
                    >
                      <Icon className="w-5 h-5 text-[#c084fc]" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tecnologies;