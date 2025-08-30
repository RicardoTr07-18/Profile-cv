import React from "react";
import { motion } from "framer-motion";

//-----importar (primero)-----
import { Skills } from "./Skills";
import { Experience } from "./Experience";
//----------------------------

import { Code, Wrench, Briefcase, GraduationCap, Star, Layers, User } from "lucide-react";
import { 
  FaGithub, 
  FaLinkedin,
} from "react-icons/fa";

/* ---------- NAVBAR ---------- */
export function Navbar() {
  const sections = [
    { id: "about", label: "Sobre mí" },
    { id: "projects", label: "Proyectos" },
    { id: "experience", label: "Experiencia" },
    { id: "education", label: "Educación" },
    { id: "skills", label: "Habilidades" },
    { id: "extras", label: "Otros Programas" },
  ];

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-800 text-white shadow-xl z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-extrabold tracking-wide">🚀 Ricardo.dev</h1>
        <ul className="flex gap-6 text-sm font-medium">
          {sections.map((sec) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                {sec.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

/* ---------- HEADER ---------- */
export function Header() {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-28 mb-16">
      <motion.img
        src="https://avatars.githubusercontent.com/u/000000?v=4"
        alt="profile"
        className="w-36 h-36 rounded-full shadow-lg border-4 border-white mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.h1
        className="text-4xl font-extrabold text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Ricardo Terrazas Ramos
      </motion.h1>
      <p className="mt-2 text-lg text-gray-600">
        💻 Estudiante de Ingeniería de Sistemas
      </p>
      <motion.div
        className="flex gap-4 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="https://pe.linkedin.com"
          target="_blank"
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition flex items-center gap-2"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </motion.div>
      <motion.div
        className="flex gap-4 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="https://github.com/RicardoTerrazas29"
          target="_blank"
          className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition flex items-center gap-2"
        >
          <FaGithub /> GitHub Universitario
        </a>
        <a
          href="https://github.com/RicardoTr07-18"
          target="_blank"
          className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition flex items-center gap-2"
        >
          <FaGithub /> GitHub Personales
        </a>
      </motion.div>
    </section>
  );
}

/* ---------- GENERIC SECTION ---------- */
export function Section({
  id,
  title,
  icon,
  children,
}: {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 max-w-5xl mx-auto"
    >
      <div className="flex items-center gap-2 mb-6">
        <span className="text-indigo-700">{icon}</span>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
        {children}
      </div>
    </motion.section>
  );
}

/* ---------- ABOUT ---------- */
export function About() {
  return (
    <Section id="about" title="Sobre mí" icon={<User size={22} />}>
      <p className="text-gray-700 leading-relaxed">
        Estudiante del 9° ciclo de Ingeniería de Sistemas e Informática en la
        Universidad Tecnológica del Perú. Me apasiona el desarrollo web 🌐, la
        analítica de datos 📊 y la creación de soluciones digitales que generen
        impacto. Siempre busco aprender rápido y aplicar metodologías ágiles 🚀.
      </p>
    </Section>
  );
}

/* ---------- EDUCATION ---------- */
export function Education() {
  return (
    <Section id="education" title="Educación" icon={<GraduationCap size={22} />}>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          <strong>Universidad Tecnológica del Perú</strong> – Ingeniería de
          Sistemas (9° ciclo, Quinto superior)
        </li>
        <li>
          <strong>Idiomas Católica</strong> – Inglés Básico 8 (2025)
        </li>
      </ul>
    </Section>
  );
}

/* ---------- PROJECTS ---------- */
export function Projects() {
  const projects = [
    "Gestión de estudiantes – UTP & INDECOPI (Java, SQL)",
    "Control de Acceso con Arduino – TECHWEEK UTP",
    "IoT para Hogares Inteligentes – TECHWEEK UTP",
  ];

  return (
    <Section id="projects" title="Proyectos" icon={<Layers size={22} />}>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg shadow"
          >
            {proj}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- OTHER PROGRAMS ---------- */
export function OtherPrograms() {
  return (
    <Section id="extras" title="Otros Programas" icon={<Star size={22} />}>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Scrum Fundamentals Certified – 2024</li>
        <li>Curso Ethical Hacker – Cisco Academy (2024)</li>
        <li>Excel Intermedio – UTP (2023)</li>
        <li>Delegado de Clase – UTP (2024 – Actualidad)</li>
      </ul>
    </Section>
  );
}


//-----exportar (segundo)-----
export {
  Skills,
  Experience,
};
