// "use client"

// import { useState } from "react"
// import { Code2, ExternalLink, Github } from "lucide-react"

// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent } from "@/components/ui/tabs"

// // Sample project data 
// const projectsData = [
//   {
//     id: 1,
//     title: "Farmerzone Real Estate Website",
//     description: "A full-stack real estate website for Farmerzone company using Next.js.",
//     technologies: ["Next.Js", "JavaScript", "Tailwind CSS", "Appwrite", "Clerk Auth and User Management"],
//     category: "fullstack",
//     githubUrl: "https://github.com/soham408/FarmerzoneWebApp",
//     demoUrl: "https://www.farmerzone.co.in/",
//     featured: false,
//   },
//   // {
//   //   id: 2,
//   //   title: "Photographer Portfolio Website",
//   //   description: "Collaborated with a professional photographer to build a fast and visually engaging portfolio website using Next.js.",
//   //   technologies: ["Next.Js", "JavaScript", "Tailwind CSS", "Appwrite"],
//   //   category: "fullstack",
//   //   githubUrl: "https://github.com/soham408/Jebesh_Rejo_Portfolio",
//   //   demoUrl: "https://studior20.vercel.app/",
//   //   featured: false,
//   // },
//   //   {
//   //   id: 3,
//   //   title: "Blog App",
//   //   description:
//   //     "A project that includes react router dom, redux toolkit etc. This project involves Signup, Signin, complete backed with Appwrite, image upload and lot more.",
//   //   technologies: ["Vite.js", "JavaScript", "Tailwind CSS", "Appwrite"],
//   //   category: "backend",
//   //   githubUrl: "https://github.com/soham408/MegaProjectWith_Appwrite",
//   //   demoUrl: "",
//   //   featured: false,
//   // },
//   {
//     id: 4,
//     title: "AI With NextJS (Gemini 2.5 Flash)",
//     description: "This Is The Next JS AI Project With Gemini 2.5 Flash.",
//     technologies: ["Next.js", "Gemini 2.5 Flash"],
//     category: "frontend",
//     githubUrl: "https://github.com/soham408/AIwithNextJS",
//     demoUrl: "https://a-iwith-next-9qhjv6q1i-soham-bambades-projects.vercel.app/",
//     featured: false,
//   },
//   //   {
//   //   id: 5,
//   //   title: "Markdown Note Taking App",
//   //   description: "A markdown-based note-taking application with organization features and cloud sync.",
//   //   technologies: ["React", "Firebase", "Marked.js", "CSS Modules"],
//   //   category: "fullstack",
//   //   githubUrl: "https://github.com/yourusername/markdown-notes",
//   //   demoUrl: "https://markdown-notes-app.vercel.app",
//   //   featured: false,
//   // },
//   // {
//   //   id: 6,
//   //   title: "Real-time Chat Application",
//   //   description: "Chat application with real-time messaging, user authentication, and channel creation.",
//   //   technologies: ["React", "Socket.io", "Express", "MongoDB"],
//   //   category: "fullstack",
//   //   githubUrl: "https://github.com/yourusername/realtime-chat",
//   //   demoUrl: "https://chat-app-demo.vercel.app",
//   //   featured: true,
//   // },
// ]

// type Project = (typeof projectsData)[0]

// export function ProjectsShowcase() {

//   const [searchQuery] = useState("")
//   const [activeTab, setActiveTab] = useState("all")

//   // Filter projects based on search query and active tab
//   const filteredProjects = projectsData.filter((project) => {
//     const matchesSearch =
//       project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

//     if (activeTab === "all") return matchesSearch
//     if (activeTab === "featured") return matchesSearch && project.featured
//     return matchesSearch && project.category === activeTab
//   })

//   return (
//     <div id="projects" className="space-y-6 bg-[#140303]">

      
//       <div className="flex justify-center pt-10 sm:pt-16 lg:pt-20 mb-2">
//         <h1 className="text-3xl sm:text-4xl font-bold font-montserrat bg-[#140303] text-gray-300 px-4 py-2 rounded-md">
//           Projects Work
//         </h1>
//       </div>

    
//       <div className="flex flex-col items-center gap-6 px-4 sm:px-10 lg:px-20">

        
//         <Tabs
//           defaultValue="all"
//           className="w-full flex flex-col items-center"
//           onValueChange={setActiveTab}
//         >

        

//           <TabsContent value={activeTab} className="mt-6 w-full flex justify-center">

//             {filteredProjects.length > 0 ? (

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">

//                 {filteredProjects.map((project) => (
//                   <ProjectCard key={project.id} project={project} />
//                 ))}

//               </div>

//             ) : (

//               <div className="text-center py-12">
//                 <Code2 className="mx-auto h-12 w-12 text-muted-foreground" />
                
//               </div>

//             )}

//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   )
// }

// function ProjectCard({ project }: { project: Project }) {
//   return (
//     <Card className="h-full flex flex-col bg-gray-300 w-full max-w-sm mx-auto">

//       <CardHeader className="p-4">
//         <div className="flex justify-between items-start">
//           <CardTitle className="text-lg sm:text-xl">
//             {project.title}
//           </CardTitle>

//           {project.featured && <Badge>Featured</Badge>}
//         </div>

//         <CardDescription className="line-clamp-2 text-sm">
//           {project.description}
//         </CardDescription>
//       </CardHeader>

//       <CardContent className="flex-grow p-4 pt-0">
//         <div className="flex flex-wrap gap-2 mt-2">
//           {project.technologies.map((tech) => (
//             <Badge key={tech} variant="secondary">
//               {tech}
//             </Badge>
//           ))}
//         </div>
//       </CardContent>

//       <CardFooter className="flex justify-between p-4 pt-0">
//         <Button variant="outline" size="sm" asChild>
//           <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//             <Github className="mr-2 h-4 w-4" />
//             Code
//           </a>
//         </Button>

//         <Button size="sm" asChild>
//           <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
//             <ExternalLink className="mr-2 h-4 w-4" />
//             Demo
//           </a>
//         </Button>
//       </CardFooter>

//     </Card>
//   )
// }


"use client"

import { ExternalLink, GitBranch, ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Farmerzone Real Estate Website",
    description: "A full-stack real estate platform for Farmerzone, built with a focus on clear property discovery and a smooth user experience.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Appwrite", "Clerk"],
    category: "Full-stack",
    githubUrl: "https://github.com/soham408/FarmerzoneWebApp",
    demoUrl: "https://www.farmerzone.co.in/",
  },
  {
    title: "AI With Next.js",
    description: "An AI-powered Next.js project using Gemini 2.5 Flash to explore fast, modern generative experiences.",
    technologies: ["Next.js", "Gemini 2.5 Flash"],
    category: "AI / Frontend",
    githubUrl: "https://github.com/soham408/AIwithNextJS",
    demoUrl: "https://a-iwith-next-9qhjv6q1i-soham-bambades-projects.vercel.app/",
  },
  
]

export function ProjectsShowcase() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#140303] px-4 py-20 text-gray-100 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[min(90vw,52rem)] -translate-x-1/2 rounded-full bg-red-950/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <header className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-red-300/80">Selected work</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl lg:text-5xl">Projects I&apos;ve built</h2>
          <p className="mt-4 text-pretty text-sm leading-7 text-gray-400 sm:text-base">A collection of products and experiments built with thoughtful interfaces and practical technology.</p>
        </header>

        <div className={`grid gap-5 sm:gap-6 lg:gap-7 ${projects.length === 1 ? "mx-auto max-w-2xl" : "grid-cols-1 md:grid-cols-2"}`}>
          {projects.map((project) => (
            <article key={project.title} className="
    group
    flex
    min-h-[22rem]
    flex-col
    rounded-2xl
    border
    border-gray-200
    bg-white
    p-6
    shadow-lg
    transition
    duration-300
    hover:-translate-y-1
    hover:border-red-300
    hover:shadow-xl

    dark:border-white/10
    dark:bg-white/[0.06]
    dark:shadow-2xl
    dark:shadow-black/20
    dark:hover:border-red-300/30
    dark:hover:bg-white/[0.09]

    sm:p-7
  ">
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full border border-red-300/20 bg-red-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-red-200">{project.category}</span>
                <ArrowUpRight aria-hidden="true" className="size-5 text-gray-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-red-200" />
              </div>

              <div className="mt-10 flex-1">
                <h3 className="text-2xl font-semibold tracking-tight text-gray-100 sm:text-3xl">{project.title}</h3>
                <p className="mt-4 max-w-prose text-sm leading-7 text-gray-400 sm:text-base">{project.description}</p>
                <ul className="mt-7 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                  {project.technologies.map((technology) => (
                    <li key={technology} className="rounded-md bg-white/[0.08] px-2.5 py-1.5 text-xs text-gray-300 ring-1 ring-inset ring-white/10">{technology}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-9 flex flex-col gap-3 border-t border-white/10 pt-5 min-[380px]:flex-row">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-white/15 px-4 text-sm font-medium text-gray-200 transition hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300">
                  <GitBranch aria-hidden="true" className="size-4" />
                  View code
                </a>
                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-red-200 px-4 text-sm font-semibold text-[#260707] transition hover:bg-red-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300">
                  Live demo
                  <ExternalLink aria-hidden="true" className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsShowcase
