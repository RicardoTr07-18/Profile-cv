import { motion } from "framer-motion";
import { Code, Wrench, Star, Layers } from "lucide-react";
import { 
  FaJava, 
  FaPython, 
  FaJs, 
  FaGithub, 
  FaDocker, 
  FaAngular, 
  FaReact,
  FaWindows 
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiSpringboot, 
  SiMysql, 
  SiPostgresql, 
  SiMongodb, 
  SiEclipseide, 
  SiIntellijidea, 
  SiJupyter, 
  SiGit, 
  SiLinux, 
  SiPostman, 
  SiOracle 
} from "react-icons/si";
import { 
    DiMsqlServer 
} from "react-icons/di";

export function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-700">
          Habilidades & Tecnologías
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tecnologías y Lenguajes */}
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-6">
              <Code className="text-indigo-600" size={26} />
              <h3 className="text-xl font-semibold text-gray-800">
                🛠 Tecnologías y Lenguajes
              </h3>
            </div>

            <ul className="space-y-6 text-gray-700">
              <li>
                <strong className="block mb-2">Lenguajes de programación:</strong>
                <div className="flex flex-wrap gap-4 text-2xl">
                  <div className="flex items-center gap-2"><FaJava className="text-red-600" /><span className="spanText">Java</span></div>
                  <div className="flex items-center gap-2"><FaPython className="text-blue-500" /><span className="spanText">Python</span></div>
                  <div className="flex items-center gap-2"><FaJs className="text-yellow-400" /><span className="spanText">JavaScript</span></div>
                  <div className="flex items-center gap-2"><SiTypescript className="text-blue-600" /><span className="spanText">TypeScript</span></div>
                </div>
              </li>

              <li>
                <strong className="block mb-2">Frameworks y librerías:</strong>
                <div className="flex flex-wrap gap-4 text-2xl">
                  <div className="flex items-center gap-2"><SiSpringboot className="text-green-600" /><span className="spanText">Spring Boot</span></div>
                  <div className="flex items-center gap-2"><FaAngular className="text-red-500" /><span className="spanText">Angular</span></div>
                  <div className="flex items-center gap-2"><FaReact className="text-sky-500" /><span className="spanText">React</span></div>
                </div>
              </li>

              <li>
                <strong className="block mb-2">Bases de datos:</strong>
                <div className="flex flex-wrap gap-4 text-2xl">
                  <div className="flex items-center gap-2"><SiMysql className="text-blue-700" /><span className="spanText">MySQL</span></div>
                  <div className="flex items-center gap-2"><SiPostgresql className="text-indigo-600" /><span className="spanText">PostgreSQL</span></div>
                  <div className="flex items-center gap-2"><SiMongodb className="text-green-700" /><span className="spanText">MongoDB</span></div>
                  <div className="flex items-center gap-2"><DiMsqlServer className="text-blue-800" /><span className="spanText">SQL Server</span></div>
                  <div className="flex items-center gap-2"><SiOracle className="text-red-600" /><span className="spanText">Oracle SQL</span></div>
                </div>
              </li>

              <li>
                <strong className="block mb-2">Business Intelligence (BI):</strong>
                <div className="flex items-center gap-3 text-lg">
                  <Star className="text-yellow-500" size={28} /><span className="spanText">Power BI, Looker Studio</span>
                </div>
              </li>

              <li>
                <strong className="block mb-2">Otros:</strong>
                <div className="flex items-center gap-3 text-lg">
                  <Layers className="text-indigo-500" size={28} /><span className="spanText">Microservicios, JasperReports, JMeter, JUnit, Mockito</span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Plataformas y Herramientas */}
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-6">
              <Wrench className="text-indigo-600" size={26} />
              <h3 className="text-xl font-semibold text-gray-800">💻 Plataformas y Herramientas</h3>
            </div>

            <ul className="space-y-6 text-gray-700">
              <li>
                <strong className="block mb-2">Entornos de desarrollo (IDE):</strong>
                <div className="flex flex-wrap gap-4 text-2xl">
                  <div className="flex items-center gap-2"><SiEclipseide className="text-indigo-700" /><span className="spanText">Eclipse IDE</span></div>
                  <div className="flex items-center gap-2"><SiIntellijidea className="text-purple-700" /><span className="spanText">IntelliJ IDEA</span></div>
                  <div className="flex items-center gap-2"><SiJupyter className="text-orange-500" /><span className="spanText">Jupyter</span></div>
                </div>
              </li>

              <li>
                <strong className="block mb-2">Control de versiones:</strong>
                <div className="flex flex-wrap gap-4 text-2xl">
                  <div className="flex items-center gap-2"><SiGit className="text-red-600" /><span className="spanText">Git</span></div>
                  <div className="flex items-center gap-2"><FaGithub className="text-black" /><span className="spanText">GitHub</span></div>
                </div>
              </li>

              <li>
                <strong className="block mb-2">Sistemas operativos:</strong>
                <div className="flex flex-wrap gap-4 text-2xl">
                  <div className="flex items-center gap-2"><SiLinux className="text-gray-700" /><span className="spanText">Linux (Debian, Ubuntu)</span></div>
                  <div className="flex items-center gap-2"><FaWindows className="text-gray-700" /><span className="spanText">Windows</span></div>
                </div>
              </li>

              <li>
                <strong className="block mb-2">Otras herramientas:</strong>
                <div className="flex flex-wrap gap-4 text-2xl">
                  <div className="flex items-center gap-2"><FaDocker className="text-blue-500" /><span className="spanText">Docker</span></div>
                  <div className="flex items-center gap-2"><SiPostman className="text-orange-500" /><span className="spanText">Postman</span></div>
                  <div className="flex items-center gap-2"><Wrench className="text-gray-600" size={28} /><span className="spanText">Bizagi, Draw.io</span></div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <style>{`.spanText { font-size: 0.9rem; }`}</style>
    </section>
  );
}
