"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BarChart3,
  TrendingUp,
  Target,
  Download,
  MessageSquare,
  Database
} from "lucide-react"

// Mock data for individual user
const userData = {
  name: "Alex Johnson",
  level: "Advanced",
  avatar: "https://github.com/shadcn.png",
  coreMetrics: {
    vision: 85,
    grit: 92,
    logic: 78,
    algorithm: 88
  },
  overallReadiness: 86,
  programsCompleted: 3,
  skillsAcquired: 12
}

const skillsData = [
  { name: "Problem Solving", score: 89, color: "bg-primary" },
  { name: "Critical Thinking", score: 85, color: "bg-secondary" },
  { name: "Data Analysis", score: 78, color: "bg-accent" },
  { name: "Communication", score: 92, color: "bg-muted" }
]

const programData = [
  {
    id: 1,
    name: "AI/ML Fundamentals",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
    score: 88,
    status: "Ready",
    progress: 95
  },
  {
    id: 2,
    name: "Data Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    score: 92,
    status: "Ready",
    progress: 100
  },
  {
    id: 3,
    name: "IoT Tech Support",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop",
    score: 75,
    status: "Almost",
    progress: 80
  },
  {
    id: 4,
    name: "Cyber Security",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop",
    score: 68,
    status: "Not Ready",
    progress: 65
  }
]

const tableData = [
  { skill: "Python Programming", current: 85, target: 90, progress: 94 },
  { skill: "Machine Learning", current: 78, target: 85, progress: 92 },
  { skill: "Data Visualization", current: 92, target: 80, progress: 100 },
  { skill: "Statistical Analysis", current: 75, target: 85, progress: 88 },
  { skill: "Database Management", current: 68, target: 75, progress: 91 },
  { skill: "Cloud Computing", current: 82, target: 80, progress: 100 }
]

const getStatusTextColor = (status: string) => {
  switch (status) {
    case 'Ready': return 'bg-primary text-primary-foreground'
    case 'Almost': return 'bg-secondary text-secondary-foreground'
    case 'Not Ready': return 'bg-destructive text-destructive-foreground'
    default: return 'bg-muted text-muted-foreground'
  }
}

export default function ProgramReadinessDashboard() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Program Readiness Dashboard</h1>
            <p className="text-muted-foreground mt-1">Track your learning progress and program readiness</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Coach
            </Button>
            <Button className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Raw Data
            </Button>
          </div>
        </div>

        {/* User Profile Section */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src={userData.avatar} alt={userData.name} />
                <AvatarFallback>{userData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground">{userData.name}</h2>
                <p className="text-muted-foreground">{userData.level} Level</p>
                <div className="flex gap-6 mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userData.coreMetrics.vision}%</div>
                    <div className="text-sm text-muted-foreground">Vision</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userData.coreMetrics.grit}%</div>
                    <div className="text-sm text-muted-foreground">Grit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userData.coreMetrics.logic}%</div>
                    <div className="text-sm text-muted-foreground">Logic</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userData.coreMetrics.algorithm}%</div>
                    <div className="text-sm text-muted-foreground">Algorithm</div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">{userData.overallReadiness}%</div>
                <div className="text-sm text-muted-foreground">Overall Readiness</div>
                <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                  <span>{userData.programsCompleted} Programs</span>
                  <span>{userData.skillsAcquired} Skills</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Visualization */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Skills Overview
            </CardTitle>
            <CardDescription>Your current skill levels and performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative h-64 bg-muted rounded-lg">
              {/* Bubble Chart Placeholder */}
              <div className="absolute inset-4 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  {skillsData.map((skill) => (
                    <div
                      key={skill.name}
                      className={`w-20 h-20 rounded-full ${skill.color} flex items-center justify-center text-primary-foreground text-xs font-medium cursor-pointer hover:scale-110 transition-transform`}
                      onClick={() => setSelectedSkill(skill.name)}
                    >
                      <div className="text-center">
                        <div className="text-xs">{skill.name.split(' ')[0]}</div>
                        <div className="text-xs">{skill.score}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {selectedSkill && (
              <div className="mt-4 p-4 bg-accent rounded-lg">
                <p className="text-sm text-accent-foreground">
                  <strong>{selectedSkill}:</strong> {skillsData.find(s => s.name === selectedSkill)?.score}% proficiency
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Program Readiness Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programData.map((program) => (
            <Card key={program.id} className="overflow-hidden">
              <div className="h-32 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-sm mb-2 text-foreground">{program.name}</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-foreground">{program.score}%</span>
                  <Badge className={getStatusTextColor(program.status)}>
                    {program.status}
                  </Badge>
                </div>
                <Progress value={program.progress} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">{program.progress}% Complete</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Data Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Detailed Progress
            </CardTitle>
            <CardDescription>Skill-by-skill breakdown of your progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-foreground">Skill</th>
                    <th className="text-left py-3 px-4 text-foreground">Current</th>
                    <th className="text-left py-3 px-4 text-foreground">Target</th>
                    <th className="text-left py-3 px-4 text-foreground">Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50">
                      <td className="py-3 px-4 font-medium text-foreground">{row.skill}</td>
                      <td className="py-3 px-4 text-foreground">{row.current}%</td>
                      <td className="py-3 px-4 text-foreground">{row.target}%</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Progress value={row.progress} className="h-2 flex-1" />
                          <span className="text-sm text-muted-foreground w-12">{row.progress}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Performance Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Performance Analytics
            </CardTitle>
            <CardDescription>Detailed analysis of your learning journey</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="skills" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="programs">Programs</TabsTrigger>
              </TabsList>
              <TabsContent value="skills" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skillsData.map((skill) => (
                    <div key={skill.name} className="p-4 border border-border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-foreground">{skill.name}</h4>
                        <Badge variant="outline">{skill.score}%</Badge>
                      </div>
                      <Progress value={skill.score} className="h-2" />
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="programs" className="space-y-4">
                <div className="space-y-4">
                  {programData.map((program) => (
                    <div key={program.id} className="p-4 border border-border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-foreground">{program.name}</h4>
                        <div className="flex gap-2">
                          <Badge variant="outline">{program.score}%</Badge>
                          <Badge className={getStatusTextColor(program.status)}>
                            {program.status}
                          </Badge>
                        </div>
                      </div>
                      <Progress value={program.progress} className="h-2 mb-2" />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Progress: {program.progress}%</span>
                        <span>Readiness: {program.score}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}