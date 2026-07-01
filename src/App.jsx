import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCode,
  FaDatabase,
  FaTools,
  FaServer,
} from "react-icons/fa";
import "./index.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="fixed left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
      <div className="fixed right-[-120px] bottom-[-120px] h-96 w-96 rounded-full bg-purple-600/30 blur-3xl" />

      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl md:p-12"
        >
          <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-3 inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
                Available for Junior Developer Roles
              </p>

              <h1 className="text-5xl font-black leading-tight md:text-7xl">
                Rupesh <span className="text-blue-400">Dahal</span>
              </h1>

              <p className="mt-4 text-2xl font-semibold text-slate-200">
                Full Stack Developer
              </p>

              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                I build modern, responsive, and scalable web applications using
                React, Tailwind CSS, Node.js, .NET, and PostgreSQL.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-sm">
                <SocialLink
                  icon={<FaMapMarkerAlt />}
                  text="Jhapa, Nepal"
                  link="https://maps.google.com/?q=Jhapa,+Nepal"
                />
                <SocialLink
                  icon={<FaEnvelope />}
                  text="dahalrupesh24@gmail.com"
                  link="mailto:dahalrupesh24@gmail.com"
                />
                <SocialLink
                  icon={<FaLinkedin />}
                  text="LinkedIn"
                  link="https://www.linkedin.com/in/rupesh-dahal-796578285"
                />
                <SocialLink
                  icon={<FaGithub />}
                  text="GitHub"
                  link="https://github.com/rupesh058"
                />
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex h-44 w-44 items-center justify-center rounded-full border border-blue-400/40 bg-gradient-to-br from-blue-500/30 to-purple-500/30 text-6xl font-black shadow-2xl shadow-blue-500/20"
            >
              RD
            </motion.div>
          </div>
        </motion.div>

        <AnimatedSection title="About Me">
          <GlassCard>
            <p className="leading-8 text-slate-300">
              I am a motivated Full Stack Developer with hands-on experience in
              frontend development, backend APIs, database design,
              authentication, CRUD systems, and real-world web applications. I
              enjoy creating clean, user-friendly, and practical software
              solutions.
            </p>
          </GlassCard>
        </AnimatedSection>

        <AnimatedSection title="Skills">
          <div className="grid gap-5 md:grid-cols-4">
            <SkillCard
              icon={<FaCode />}
              title="Frontend"
              skills={["React", "Tailwind CSS", "HTML", "CSS", "JavaScript"]}
            />
            <SkillCard
              icon={<FaServer />}
              title="Backend"
              skills={["Node.js", "Express", ".NET", "ASP.NET"]}
            />
            <SkillCard
              icon={<FaDatabase />}
              title="Database"
              skills={["PostgreSQL", "MySQL", "SQL Server"]}
            />
            <SkillCard
              icon={<FaTools />}
              title="Tools"
              skills={["Git", "GitHub", "Postman", "VS Code"]}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection title="Experience">
          <GlassCard>
            <p className="font-semibold text-blue-400">Jun 2025 - Aug 2025</p>
            <h3 className="mt-2 text-2xl font-bold">ASP.NET Backend Intern</h3>
            <p className="text-slate-400">Softech Foundation Pvt. Ltd.</p>

            <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-300">
              <li>Created and managed backend databases.</li>
              <li>Developed APIs using ASP.NET and SQL Server.</li>
              <li>Tested backend functionality using Postman.</li>
              <li>Worked with authentication, CRUD operations, and debugging.</li>
            </ul>
          </GlassCard>
        </AnimatedSection>

        <AnimatedSection title="Projects">
          <div className="grid gap-6 md:grid-cols-3">
            <ProjectCard
              title="DreamTrip"
              desc="AI-based trip planner with economy and premium travel plans."
              tech={["React", "Tailwind", "Node.js"]}
            />
            <ProjectCard
              title="Glorify"
              desc="Salon management system with booking, staff, inventory, reports, and dashboard."
              tech={["React", "Node.js", "PostgreSQL"]}
            />
            <ProjectCard
              title="Resume Classifier"
              desc="Machine learning system that classifies resumes using TF-IDF and SVM."
              tech={["Python", "ML", "SVM"]}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection title="Education">
          <GlassCard>
            <h3 className="text-2xl font-bold">BSc Honors Computing</h3>
            <p className="mt-2 text-slate-300">
              Itahari International College / London Metropolitan University
            </p>
          </GlassCard>
        </AnimatedSection>

        <AnimatedSection title="Contact">
          <motion.div
            id="contact"
            whileHover={{ scale: 1.02 }}
            className="rounded-[2rem] bg-gradient-to-r from-blue-600 to-purple-600 p-8 shadow-2xl md:p-10"
          >
            <h3 className="text-3xl font-black">Let’s Work Together</h3>
            <p className="mt-3 max-w-2xl leading-7 text-blue-100">
              I am open to junior developer, backend developer, frontend
              developer, and full stack developer roles.
            </p>

            <a
              href="mailto:dahalrupesh24@gmail.com"
              className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-bold text-slate-900 transition hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>
        </AnimatedSection>
      </section>
    </main>
  );
}

function AnimatedSection({ title, children }) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-16"
    >
      <h2 className="mb-6 text-3xl font-black">{title}</h2>
      {children}
    </motion.section>
  );
}

function GlassCard({ children }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-xl backdrop-blur-xl"
    >
      {children}
    </motion.div>
  );
}

function SocialLink({ icon, text, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/70 px-4 py-2 text-slate-300 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
    >
      <span className="text-blue-400 transition-transform duration-300 group-hover:scale-125">
        {icon}
      </span>
      {text}
    </a>
  );
}

function SkillCard({ icon, title, skills }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-xl"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl text-blue-400">
        {icon}
      </div>

      <h3 className="mb-4 text-xl font-bold">{title}</h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({ title, desc, tech }) {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.03 }}
      className="group rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-xl transition"
    >
      <div className="mb-5 h-2 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-28 transition-all" />

      <h3 className="text-2xl font-bold">{title}</h3>

      <p className="mt-3 leading-7 text-slate-300">{desc}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}