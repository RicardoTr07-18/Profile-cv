import { Section } from "./Profile"; // ajusta la ruta según tu estructura
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";


/* ---------- EXPERIENCE ---------- */
export function Experience() {
  return (
    <Section id="experience" title="Experiencia Profesional" icon={<Briefcase size={22} />}>
      <div className="space-y-6">
        {/* INEI */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-4 border-l-4 border-indigo-500 bg-gray-50 rounded-md"
        >
          <h3 className="font-bold text-lg">INEI – ENLA</h3>
          <p className="text-sm text-gray-600">
            Aplicador Primaria/Secundaria – Nov 2024
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Aplicación de evaluaciones nacionales en instituciones educativas.</li>
            <li>Supervisión del cumplimiento de protocolos y organización eficiente.</li>
            <li>Explicación de instrucciones y acompañamiento a estudiantes.</li>
            <li>Control y distribución de materiales de prueba.</li>
          </ul>
        </motion.div>

        {/* CETPRO */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-4 border-l-4 border-purple-500 bg-gray-50 rounded-md"
        >
          <h3 className="font-bold text-lg">Cetpro Villa del Norte</h3>
          <p className="text-sm text-gray-600">
            Practicante de Tecnología de la Información – Abr-Oct 2024
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Participación activa en la creación y edición de material visual para campañas de comunicación interna y externa.</li>
            <li>Desarrollo y diseño completo de la página web institucional, fortaleciendo la presencia digital de la entidad.</li>
            <li>Implementación de dashboards interactivos con Power BI y Looker Studio para apoyar la toma de decisiones en áreas administrativas.</li>
            <li>Apoyo en tareas tecnológicas y en la organización de contenidos digitales.</li>
            <li>Colaboración con diferentes áreas para identificar mejoras en los procesos mediante el uso de herramientas tecnológicas.</li>
          </ul>
          <p className="mt-2 text-gray-600 text-sm">
            <strong>Tecnologías usadas:</strong> HTML, CSS, JavaScript, Power BI, Looker Studio, Excel.  
            <br />
            <strong>Herramientas:</strong> Visual Studio Code.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}