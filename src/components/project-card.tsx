"use client"

import { useState } from "react"
import { Code2, ExternalLink, Github } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"

// Sample project data 
const projectsData = [
  {
    id: 1,
    title: "Farmerzone Real Estate Website",
    description: "A full-stack real estate website for Farmerzone company using Next.js.",
    technologies: ["Next.Js", "JavaScript", "Tailwind CSS", "Appwrite", "Clerk Auth and User Management"],
    category: "fullstack",
    githubUrl: "https://github.com/soham408/FarmerzoneWebApp",
    demoUrl: "https://www.farmerzone.co.in/",
    featured: false,
  },
  {
    id: 2,
    title: "Photographer Portfolio Website",
    description: "Collaborated with a professional photographer to build a fast and visually engaging portfolio website using Next.js.",
    technologies: ["Next.Js", "JavaScript", "Tailwind CSS", "Appwrite"],
    category: "fullstack",
    githubUrl: "https://github.com/soham408/Jebesh_Rejo_Portfolio",
    demoUrl: "https://studior20.vercel.app/",
    featured: false,
  },
  //   {
  //   id: 3,
  //   title: "Blog App",
  //   description:
  //     "A project that includes react router dom, redux toolkit etc. This project involves Signup, Signin, complete backed with Appwrite, image upload and lot more.",
  //   technologies: ["Vite.js", "JavaScript", "Tailwind CSS", "Appwrite"],
  //   category: "backend",
  //   githubUrl: "https://github.com/soham408/MegaProjectWith_Appwrite",
  //   demoUrl: "",
  //   featured: false,
  // },
  {
    id: 4,
    title: "AI With NextJS (Gemini 2.5 Flash)",
    description: "This Is The Next JS AI Project With Gemini 2.5 Flash.",
    technologies: ["Next.js", "Gemini 2.5 Flash"],
    category: "frontend",
    githubUrl: "https://github.com/soham408/AIwithNextJS",
    demoUrl: "https://a-iwith-next-9qhjv6q1i-soham-bambades-projects.vercel.app/",
    featured: false,
  },
  //   {
  //   id: 5,
  //   title: "Markdown Note Taking App",
  //   description: "A markdown-based note-taking application with organization features and cloud sync.",
  //   technologies: ["React", "Firebase", "Marked.js", "CSS Modules"],
  //   category: "fullstack",
  //   githubUrl: "https://github.com/yourusername/markdown-notes",
  //   demoUrl: "https://markdown-notes-app.vercel.app",
  //   featured: false,
  // },
  // {
  //   id: 6,
  //   title: "Real-time Chat Application",
  //   description: "Chat application with real-time messaging, user authentication, and channel creation.",
  //   technologies: ["React", "Socket.io", "Express", "MongoDB"],
  //   category: "fullstack",
  //   githubUrl: "https://github.com/yourusername/realtime-chat",
  //   demoUrl: "https://chat-app-demo.vercel.app",
  //   featured: true,
  // },
]

type Project = (typeof projectsData)[0]

export function ProjectsShowcase() {

  const [searchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  // Filter projects based on search query and active tab
  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

    if (activeTab === "all") return matchesSearch
    if (activeTab === "featured") return matchesSearch && project.featured
    return matchesSearch && project.category === activeTab
  })

  return (
    <div id="projects" className="space-y-6 bg-[#140303]">

      
      <div className="flex justify-center pt-10 sm:pt-16 lg:pt-20 mb-2">
        <h1 className="text-3xl sm:text-4xl font-bold font-montserrat bg-[#140303] text-gray-300 px-4 py-2 rounded-md">
          Projects Work
        </h1>
      </div>

    
      <div className="flex flex-col items-center gap-6 px-4 sm:px-10 lg:px-20">

        
        <Tabs
          defaultValue="all"
          className="w-full flex flex-col items-center"
          onValueChange={setActiveTab}
        >

        

          <TabsContent value={activeTab} className="mt-6 w-full flex justify-center">

            {filteredProjects.length > 0 ? (

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">

                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}

              </div>

            ) : (

              <div className="text-center py-12">
                <Code2 className="mx-auto h-12 w-12 text-muted-foreground" />
                
              </div>

            )}

          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full flex flex-col bg-gray-300 w-full max-w-sm mx-auto">

      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg sm:text-xl">
            {project.title}
          </CardTitle>

          {project.featured && <Badge>Featured</Badge>}
        </div>

        <CardDescription className="line-clamp-2 text-sm">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow p-4 pt-0">
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between p-4 pt-0">
        <Button variant="outline" size="sm" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </a>
        </Button>

        <Button size="sm" asChild>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Demo
          </a>
        </Button>
      </CardFooter>

    </Card>
  )
}