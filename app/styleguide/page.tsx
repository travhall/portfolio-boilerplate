"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

export default function StyleGuide() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-6xl font-sans">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Style Guide</h1>
        <p className="text-muted-foreground">
          Internal reference for design system components and styling
        </p>
      </div>

      {/* Typography */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Typography</h2>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Font Families</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Headings</span>
                <code className="text-xs bg-muted px-2 py-1 rounded">font-heading</code>
              </div>
              <p className="font-heading text-2xl">
                Noto Serif Display - The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <Separator />
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Sans (Body)</span>
                <code className="text-xs bg-muted px-2 py-1 rounded">font-sans</code>
              </div>
              <p className="font-sans text-base">
                Manrope - The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <h1 className="text-4xl font-bold">Heading 1</h1>
              <h2 className="text-3xl font-bold">Heading 2</h2>
              <h3 className="text-2xl font-bold">Heading 3</h3>
              <h4 className="text-xl font-bold">Heading 4</h4>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-base text-foreground">Body text (base)</p>
              <p className="text-sm text-muted-foreground">Muted text (small)</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Overline text</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Colors */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Colors (OKLch)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-20 bg-primary rounded-lg border shadow-sm"></div>
            <p className="text-xs font-medium text-center">Primary</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-secondary rounded-lg border shadow-sm"></div>
            <p className="text-xs font-medium text-center">Secondary</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-accent rounded-lg border shadow-sm"></div>
            <p className="text-xs font-medium text-center">Accent</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-muted rounded-lg border shadow-sm"></div>
            <p className="text-xs font-medium text-center">Muted</p>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Navigation & Tabs */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Navigation & Selection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <p className="text-sm text-muted-foreground p-4 border rounded-md mt-2">
                    Manage your account settings and preferences.
                  </p>
                </TabsContent>
                <TabsContent value="password">
                  <p className="text-sm text-muted-foreground p-4 border rounded-md mt-2">
                    Update your password and security credentials.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accordion</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it responsive?</AccordionTrigger>
                  <AccordionContent>
                    Yes! It uses Tailwind CSS for fully responsive behavior.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it customized?</AccordionTrigger>
                  <AccordionContent>
                    This is using the standard shadcn/ui base with custom OKLch colors.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Buttons */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Buttons & Badges</h2>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Button variant="default">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Overlays */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Feedback & Overlays</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Dialog</CardTitle>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Modal</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Example Dialog</DialogTitle>
                    <DialogDescription>
                      This is a sample dialog content to show overlay styling.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button type="submit">Okay</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popovers & Tooltips</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="secondary">Hover Me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Sample Tooltip</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Popover</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <p className="text-sm font-medium">Quick Settings</p>
                  <Separator className="my-2" />
                  <p className="text-xs text-muted-foreground">Adjust your preferences here.</p>
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Forms */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Form Controls</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Inputs & Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-1.5">
                <Label htmlFor="email">Email Address</Label>
                <Input type="email" id="email" placeholder="hello@example.com" />
              </div>
              <div className="flex items-center space-x-2 border p-3 rounded-md">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms</Label>
              </div>
              <div className="flex items-center space-x-2 border p-3 rounded-md">
                <Switch id="notify" />
                <Label htmlFor="notify">Enable Notifications</Label>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Selectors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <div className="space-y-4">
                <Label>Adjust Volume</Label>
                <Slider defaultValue={[75]} max={100} step={1} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Misc */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Data & Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Avatars</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">AR</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Progress & Loading</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Progress value={45} />
              <div className="flex items-center space-x-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[150px]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="mt-20 pt-10 border-t text-center text-muted-foreground">
        <p className="text-sm">End of Style Guide</p>
      </div>
    </div>
  );
}
