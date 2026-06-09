import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { profile } from "../data/profile";
import portraitImg from "../images/portrait-main.png";
import { FiCloud, FiCode, FiTrendingUp, FiCpu } from "react-icons/fi";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  cloud: FiCloud,
  code: FiCode,
  "trending-up": FiTrendingUp,
  cpu: FiCpu,
};

function Hero() {
  return (
    <section id="home" className="section-shell animate-in pt-32 lg:pt-48">
      <div className="container-clean">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-semibold mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Disponível para novos projetos
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
              {profile.name}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-500 font-medium mb-10 max-w-2xl mx-auto lg:ml-0">
              {profile.role}
            </p>
            
            <div className="prose prose-lg mb-12 max-w-2xl mx-auto lg:ml-0">
              <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                {profile.summary}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {profile.metrics.map((metric, index) => {
                const Icon = iconMap[metric.icon] || FiCode;
                return (
                  <div key={index} className="card-clean p-5 flex flex-col items-center justify-center text-center">
                    <Icon className="text-2xl text-black mb-3" />
                    <span className="text-base md:text-lg font-bold leading-tight break-words w-full">
                      {metric.value}
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">
                      {metric.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a 
                href={profile.cvUrl} 
                className="btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                <HiOutlineDocumentText className="text-xl" />
                Currículo PDF
              </a>
              <div className="flex gap-4">
                <a 
                  href={profile.github}
                  className="w-14 h-14 flex items-center justify-center rounded-xl border border-gray-200 hover:border-black transition-all"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a 
                  href={profile.linkedin}
                  className="w-14 h-14 flex items-center justify-center rounded-xl border border-gray-200 hover:border-black transition-all"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gray-100 rounded-3xl -z-10 transform rotate-3"></div>
              <img 
                src={portraitImg} 
                alt={profile.name}
                className="w-full aspect-square object-cover rounded-3xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
