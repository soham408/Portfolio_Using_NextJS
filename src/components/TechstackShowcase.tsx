"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type Skill = {
  name: string
  icon: React.ReactNode
  category: string
  level?: "beginner" | "intermediate" | "advanced" | "expert"
}

type TechStackProps = {
  skills?: Skill[]
  categories?: string[]
}

export default function TechStackShowcase({
  skills = defaultSkills,
  categories = ["Frontend", "Backend", "Mobile", "DevOps", "Design", "Other"],
}: TechStackProps) {
  const [filter, setFilter] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const filteredSkills = filter ? skills.filter((skill) => skill.category === filter) : skills

  return (
    <div className="w-full pt-[80px]">

        <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">My Tech Stack</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          A collection of technologies i worked with across various projects and professional experiences.
        </p>
      </div>
    

      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <button
          onClick={() => setFilter(null)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            filter === null
              ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700",
          )}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              filter === category
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-[20px]">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={cn(
              "relative flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300",
              hoveredSkill === skill.name
                ? "bg-slate-100 dark:bg-slate-800 scale-105 shadow-lg"
                : "bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80",
            )}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="w-12 h-12 mb-3 flex items-center justify-center">{skill.icon}</div>
            <h3 className="text-sm font-medium text-center">{skill.name}</h3>
            {skill.level && hoveredSkill === skill.name && (
              <div className="absolute -top-2 -right-2">
                <span
                  className={cn(
                    "text-xs px-2 py-1 rounded-full font-medium",
                    skill.level === "beginner" && "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
                    skill.level === "intermediate" &&
                      "bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300",
                    skill.level === "advanced" &&
                      "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300",
                    skill.level === "expert" && "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300",
                  )}
                >
                  {skill.level}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Import these at the top of your file
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiAppwrite,
  // SiExpress,
  // SiMongodb,
  // SiPostgresql,
  // SiDocker,
  // SiKubernetes,
  SiGit,
  SiGithub,
  // SiAmazon,
  // SiFirebase,
  // SiRedis,
  // SiGraphql,
  // SiFigma,
  // SiSwift,
  // SiFlutter,
  SiPython,
  SiCanva,
  SiClerk,
  // SiDjango,
  // SiTensorflow,
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { FaUbuntu } from "react-icons/fa"
import { DiMsqlServer } from "react-icons/di"

const defaultSkills: Skill[] = [
  { name: "React", icon: <SiReact className="w-10 h-10 text-blue-500" />, category: "Frontend", level: "intermediate" },
  { name: "Next.js", icon: <SiNextdotjs className="w-10 h-10" />, category: "Frontend", level: "intermediate" },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-10 h-10 text-blue-600" />,
    category: "Frontend",
    level: "beginner",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-10 h-10 text-yellow-400" />,
    category: "Frontend",
    level: "intermediate",
  },
  { name: "HTML5", icon: <SiHtml5 className="w-10 h-10 text-orange-500" />, category: "Frontend", level: "expert" },
  { name: "CSS3", icon: <SiCss3 className="w-10 h-10 text-blue-400" />, category: "Frontend", level: "intermediate" },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="w-10 h-10 text-cyan-500" />,
    category: "Frontend",
    level: "intermediate",
  },

  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-10 h-10 text-green-600" />,
    category: "Backend",
    level: "beginner",
  },
  {
    name: "Ms Sql",
    icon: <DiMsqlServer className="w-10 h-10 text-red-300" />,
    category: "Backend",
    level: "beginner",
  },
  {
    name: "Appwrite",
    icon: <SiAppwrite className="w-10 h-10 text-red-400" />,
    category: "Backend",
    level: "intermediate",
  },
  {
    name: "Canva",
    icon: <SiCanva className="w-10 h-10 text-blue-600" />,
    category: "Design",
    level: "intermediate",
  },
  {
    name: "Clerk",
    icon: <SiClerk className="w-10 h-10 text-blue-600" />,
    category: "Other",
    level: "intermediate",
  },
  {
    name: "VS Code",
    icon: <VscVscode className="w-10 h-10 text-blue-600" />,
    category: "Other",
    level: "expert",
  },
  {
    name: "Linux Ubuntu",
    icon: <FaUbuntu className="w-10 h-10 text-orange-500" />,
    category: "Other",
    level: "beginner",
  },
  // { name: "Express", icon: <SiExpress className="w-10 h-10" />, category: "Backend", level: "advanced" },
  // {
  //   name: "MongoDB",
  //   icon: <SiMongodb className="w-10 h-10 text-green-500" />,
  //   category: "Backend",
  //   level: "intermediate",
  // },
  // {
  //   name: "PostgreSQL",
  //   icon: <SiPostgresql className="w-10 h-10 text-blue-700" />,
  //   category: "Backend",
  //   level: "intermediate",
  // },
  // {
  //   name: "GraphQL",
  //   icon: <SiGraphql className="w-10 h-10 text-pink-600" />,
  //   category: "Backend",
  //   level: "intermediate",
  // },
  // { name: "Redis", icon: <SiRedis className="w-10 h-10 text-red-500" />, category: "Backend", level: "beginner" },

  // { name: "Swift", icon: <SiSwift className="w-10 h-10 text-orange-500" />, category: "Mobile", level: "intermediate" },
  // { name: "Flutter", icon: <SiFlutter className="w-10 h-10 text-blue-400" />, category: "Mobile", level: "beginner" },

  // { name: "Docker", icon: <SiDocker className="w-10 h-10 text-blue-500" />, category: "DevOps", level: "intermediate" },
  // {
  //   name: "Kubernetes",
  //   icon: <SiKubernetes className="w-10 h-10 text-blue-600" />,
  //   category: "DevOps",
  //   level: "beginner",
  // },
  { name: "Git", icon: <SiGit className="w-10 h-10 text-orange-600" />, category: "DevOps", level: "intermediate" },
  { name: "GitHub", icon: <SiGithub className="w-10 h-10" />, category: "DevOps", level: "advanced" },
  // {
  //   name: "AWS",
  //   icon: <SiAmazon className="w-10 h-10 text-orange-400" />,
  //   category: "DevOps",
  //   level: "intermediate",
  // },

  // { name: "Figma", icon: <SiFigma className="w-10 h-10 text-purple-500" />, category: "Design", level: "intermediate" },

  { name: "Python", icon: <SiPython className="w-10 h-10 text-blue-500" />, category: "Other", level: "beginner" },
  // { name: "Django", icon: <SiDjango className="w-10 h-10 text-green-800" />, category: "Other", level: "beginner" },
  // {
  //   name: "TensorFlow",
  //   icon: <SiTensorflow className="w-10 h-10 text-orange-500" />,
  //   category: "Other",
  //   level: "beginner",
  // },
  // {
  //   name: "Firebase",
  //   icon: <SiFirebase className="w-10 h-10 text-yellow-500" />,
  //   category: "Other",
  //   level: "intermediate",
  // },
]
