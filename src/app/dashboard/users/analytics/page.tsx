"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Download, TrendingUp, Users, UserCheck, UserX, Calendar } from "lucide-react"

// Mock data for charts

const cohortRetention = [
  { cohort: "Week 1", week1: 100, week2: 82, week3: 75, week4: 68 },
  { cohort: "Week 2", week1: 100, week2: 78, week3: 71, week4: 65 },
  { cohort: "Week 3", week1: 100, week2: 85, week3: 77, week4: 72 },
  { cohort: "Week 4", week1: 100, week2: 88, week3: 81, week4: 76 }
]

export default function UserAnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d")
  
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">User Analytics</h1>
        <p className="text-muted-foreground">
          Deep insights into user behavior, engagement, and retention
        </p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Growth</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+25.7%</div>
            <p className="text-xs text-muted-foreground">
              Compared to previous period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Rate</CardTitle>
            <UserCheck className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">70%</div>
            <p className="text-xs text-muted-foreground">
              Daily active users
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Churn Rate</CardTitle>
            <UserX className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <p className="text-xs text-muted-foreground">
              Monthly churn
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Session</CardTitle>
            <Calendar className="h-4 w-4 text-accent-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24m 32s</div>
            <p className="text-xs text-muted-foreground">
              Average session duration
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="growth" className="space-y-4">
        <TabsList>
          <TabsTrigger value="growth">User Growth</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="retention">Retention</TabsTrigger>
          <TabsTrigger value="geographic">Geographic</TabsTrigger>
        </TabsList>

        <TabsContent value="growth" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Growth Trends</CardTitle>
              <CardDescription>
                Total users vs active users over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center rounded-md border border-dashed">
                <div className="text-center">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">User Growth Chart</h3>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    Line chart showing total user growth and active user trends would be displayed here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Acquisition Channels</CardTitle>
                <CardDescription>Where new users come from</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                      <span className="text-sm">Organic Search</span>
                    </div>
                    <span className="text-sm font-medium">42%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-secondary rounded-full" />
                      <span className="text-sm">Social Media</span>
                    </div>
                    <span className="text-sm font-medium">28%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-accent rounded-full" />
                      <span className="text-sm">Direct</span>
                    </div>
                    <span className="text-sm font-medium">18%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-muted rounded-full" />
                      <span className="text-sm">Referral</span>
                    </div>
                    <span className="text-sm font-medium">12%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Types</CardTitle>
                <CardDescription>Distribution by account type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Free Users</span>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full">
                      <div className="h-2 bg-primary rounded-full w-[65%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Premium Users</span>
                      <span className="text-sm font-medium">25%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full">
                      <div className="h-2 bg-secondary rounded-full w-[25%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Enterprise Users</span>
                      <span className="text-sm font-medium">10%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full">
                      <div className="h-2 bg-accent rounded-full w-[10%]" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Daily Engagement Patterns</CardTitle>
              <CardDescription>
                User sessions and average duration by day of week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center rounded-md border border-dashed">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Engagement Chart</h3>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    Bar chart showing daily sessions and average session duration would be displayed here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="retention" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cohort Retention Analysis</CardTitle>
              <CardDescription>
                User retention by weekly cohorts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Cohort</th>
                      <th className="text-center py-2">Week 1</th>
                      <th className="text-center py-2">Week 2</th>
                      <th className="text-center py-2">Week 3</th>
                      <th className="text-center py-2">Week 4</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cohortRetention.map((cohort, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2">{cohort.cohort}</td>
                        <td className="text-center py-2">
                          <div className="inline-flex items-center justify-center w-16 h-8 rounded bg-primary/90">
                            {cohort.week1}%
                          </div>
                        </td>
                        <td className="text-center py-2">
                          <div className="inline-flex items-center justify-center w-16 h-8 rounded bg-primary/80">
                            {cohort.week2}%
                          </div>
                        </td>
                        <td className="text-center py-2">
                          <div className="inline-flex items-center justify-center w-16 h-8 rounded bg-primary/75">
                            {cohort.week3}%
                          </div>
                        </td>
                        <td className="text-center py-2">
                          <div className="inline-flex items-center justify-center w-16 h-8 rounded bg-primary/68">
                            {cohort.week4}%
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="geographic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Geographic Distribution</CardTitle>
              <CardDescription>
                User distribution across regions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center rounded-md border border-dashed">
                <div className="text-center">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Geographic Map</h3>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    World map showing user distribution by country would be displayed here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
