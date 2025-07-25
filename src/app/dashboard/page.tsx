"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bell, CreditCard, DollarSign, Download, LineChart, LogOut, PieChart, Settings, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useDebouncedSettingsStore } from "@/stores/debounced-settings-store"
import { authService } from "@/services/authService"
import { useRouter } from "next/navigation"
import UserDashboardPage from "./user-dashboard/page"

export default function DashboardPage() {
  const { profile } = useDebouncedSettingsStore()
  const [isClient, setIsClient] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const router = useRouter()

  // This ensures hydration issues are avoided
  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      await authService.logout()
      router.push('/auth/login')
    } catch (error) {
      console.error('Logout failed:', error)
    } finally {
      setIsLoggingOut(false)
    }
  }

  if (!isClient) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
              className="h-8 w-8"
              alt="SenseiiWyze Logo"
            />
            <span className="text-lg font-semibold tracking-tight">SenseiiWyze</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Link href="/settings">
            <Button variant="outline" size="icon" className="rounded-full">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full"
            onClick={handleLogout}
            disabled={isLoggingOut}
          >
            <LogOut className="h-4 w-4" />
            <span className="sr-only">Log out</span>
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt={profile.name} />
            <AvatarFallback>{profile.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <div className="grid flex-1 items-start gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 lg:gap-8 md:p-6">
        <div className="col-span-full">
          <Tabs defaultValue="overview" className="w-full">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="userdata">User Data</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8">
                  <Download className="mr-2 h-3.5 w-3.5" />
                  Export
                </Button>
                <Button size="sm" className="h-8">
                  <DollarSign className="mr-2 h-3.5 w-3.5" />
                  Subscribe
                </Button>
              </div>
            </div>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Sales</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">
                      +201 since last hour
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="flex h-[200px] items-center justify-center rounded-md border border-dashed">
                      <div className="flex flex-col items-center gap-2 text-center">
                        <LineChart className="h-8 w-8 text-muted-foreground" />
                        <h3 className="text-lg font-semibold">Revenue Trends</h3>
                        <p className="text-sm text-muted-foreground">
                          Monthly revenue data visualization would appear here
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>
                      You made 265 sales this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div className="flex items-center" key={i}>
                          <Avatar className="h-9 w-9">
                            <AvatarFallback>
                              {String.fromCharCode(64 + i)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none">
                              Customer {i}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              customer{i}@example.com
                            </p>
                          </div>
                          <div className="ml-auto font-medium">
                            +${(Math.random() * 1000).toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Traffic Sources</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="flex h-[300px] items-center justify-center rounded-md border border-dashed">
                      <div className="flex flex-col items-center gap-2 text-center">
                        <PieChart className="h-8 w-8 text-muted-foreground" />
                        <h3 className="text-lg font-semibold">Traffic Distribution</h3>
                        <p className="text-sm text-muted-foreground">
                          Traffic source distribution chart would appear here
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Conversion Rates</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="flex h-[300px] items-center justify-center rounded-md border border-dashed">
                      <div className="flex flex-col items-center gap-2 text-center">
                        <BarChart className="h-8 w-8 text-muted-foreground" />
                        <h3 className="text-lg font-semibold">Conversion Metrics</h3>
                        <p className="text-sm text-muted-foreground">
                          Conversion rate visualization would appear here
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="reports" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Reports</CardTitle>
                  <CardDescription>View and download your monthly performance reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["January", "February", "March", "April", "May"].map((month, i) => (
                      <div key={i} className="flex items-center justify-between border-b pb-4">
                        <div>
                          <p className="font-medium">{month} 2025 Report</p>
                          <p className="text-sm text-muted-foreground">PDF • 2.4MB</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Notifications</CardTitle>
                  <CardDescription>Your latest system notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: "New feature available", desc: "The analytics dashboard has been updated with new features." },
                      { title: "System maintenance", desc: "Scheduled maintenance will occur on July 25th at 2:00 AM UTC." },
                      { title: "Payment successful", desc: "Your subscription has been renewed successfully." },
                      { title: "New team member", desc: "Alex Johnson has joined your workspace." },
                      { title: "Security alert", desc: "New login detected from an unknown device." },
                    ].map((notification, i) => (
                      <div key={i} className="flex gap-4 items-start border-b pb-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Bell className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{notification.title}</p>
                          <p className="text-sm text-muted-foreground">{notification.desc}</p>
                          <p className="text-xs text-muted-foreground mt-1">{i + 1} hour{i !== 0 ? "s" : ""} ago</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="userdata" className="space-y-4">
              <UserDashboardPage />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}