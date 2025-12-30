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

export default function StyleGuide() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Style Guide</h1>
          <p className="text-muted-foreground">
            Internal reference for design system components and styling
          </p>
        </div>

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
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    font-heading
                  </code>
                </div>
                <p className="font-heading text-2xl">
                  Noto Serif Display - The quick brown fox jumps over the lazy
                  dog
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  CSS Variable: <code>var(--font-heading)</code> | Google Font:
                  Noto Serif Display
                </p>
              </div>
              <Separator />
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Body</span>
                  <code className="text-xs bg-muted px-2 py-1 rounded">
                    font-body
                  </code>
                </div>
                <p className="font-body text-base">
                  Manrope - The quick brown fox jumps over the lazy dog
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  CSS Variable: <code>var(--font-body)</code> | Google Font:
                  Manrope
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6 space-y-6">
              <div>
                <h1 className="text-5xl font-bold mb-2">Heading 1</h1>
                <code className="text-xs text-muted-foreground">
                  text-5xl font-bold
                </code>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-2">Heading 2</h2>
                <code className="text-xs text-muted-foreground">
                  text-4xl font-bold
                </code>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">Heading 3</h3>
                <code className="text-xs text-muted-foreground">
                  text-3xl font-bold
                </code>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Heading 4</h4>
                <code className="text-xs text-muted-foreground">
                  text-2xl font-bold
                </code>
              </div>
              <div>
                <h5 className="text-xl font-semibold mb-2">Heading 5</h5>
                <code className="text-xs text-muted-foreground">
                  text-xl font-semibold
                </code>
              </div>
              <div>
                <h6 className="text-lg font-semibold mb-2">Heading 6</h6>
                <code className="text-xs text-muted-foreground">
                  text-lg font-semibold
                </code>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 space-y-4">
              <div>
                <p className="text-base mb-2">
                  Body text - The quick brown fox jumps over the lazy dog.
                  Regular paragraph text with normal weight and size.
                </p>
                <code className="text-xs text-muted-foreground">text-base</code>
              </div>
              <div>
                <p className="text-lg mb-2">
                  Large text - The quick brown fox jumps over the lazy dog.
                </p>
                <code className="text-xs text-muted-foreground">text-lg</code>
              </div>
              <div>
                <p className="text-sm mb-2">
                  Small text - The quick brown fox jumps over the lazy dog.
                </p>
                <code className="text-xs text-muted-foreground">text-sm</code>
              </div>
              <div>
                <p className="text-xs mb-2">
                  Extra small text - The quick brown fox jumps over the lazy
                  dog.
                </p>
                <code className="text-xs text-muted-foreground">text-xs</code>
              </div>
              <div>
                <p className="text-muted-foreground mb-2">
                  Muted text - Used for less important information
                </p>
                <code className="text-xs text-muted-foreground">
                  text-muted-foreground
                </code>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-16" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Colors</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Brand Colors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Primary</span>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      var(--primary)
                    </code>
                  </div>
                  <div className="h-12 bg-primary rounded border border-border"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Secondary</span>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      var(--secondary)
                    </code>
                  </div>
                  <div className="h-12 bg-secondary rounded border border-border"></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>State Colors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Destructive</span>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      var(--destructive)
                    </code>
                  </div>
                  <div className="h-12 bg-destructive rounded border border-border"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Success</span>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      var(--success)
                    </code>
                  </div>
                  <div className="h-12 bg-success rounded border border-border"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Warning</span>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      var(--warning)
                    </code>
                  </div>
                  <div className="h-12 bg-warning rounded border border-border"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Info</span>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      var(--info)
                    </code>
                  </div>
                  <div className="h-12 bg-info rounded border border-border"></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>UI Colors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Background</span>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      var(--background)
                    </code>
                  </div>
                  <div className="h-12 bg-background rounded border border-border"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Foreground</span>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      var(--foreground)
                    </code>
                  </div>
                  <div className="h-12 bg-foreground rounded border border-border"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Muted</span>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      var(--muted)
                    </code>
                  </div>
                  <div className="h-12 bg-muted rounded border border-border"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Border</span>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      var(--border)
                    </code>
                  </div>
                  <div className="h-12 border-4 border-border rounded"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>OKLCH Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm font-mono">
                <h4 className="font-semibold mb-2 text-foreground">Brand</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-muted-foreground">--primary:</span>{" "}
                    55% 0.15 260
                  </div>
                  <div>
                    <span className="text-muted-foreground">--secondary:</span>{" "}
                    75% 0.05 30
                  </div>
                </div>
                <h4 className="font-semibold mb-2 text-foreground">State</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-muted-foreground">
                      --destructive:
                    </span>{" "}
                    55% 0.20 25
                  </div>
                  <div>
                    <span className="text-muted-foreground">--success:</span>{" "}
                    60% 0.15 145
                  </div>
                  <div>
                    <span className="text-muted-foreground">--warning:</span>{" "}
                    75% 0.15 85
                  </div>
                  <div>
                    <span className="text-muted-foreground">--info:</span> 65%
                    0.15 250
                  </div>
                </div>
                <h4 className="font-semibold mb-2 text-foreground">UI</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-muted-foreground">--background:</span>{" "}
                    98% 0 0
                  </div>
                  <div>
                    <span className="text-muted-foreground">--foreground:</span>{" "}
                    20% 0 0
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-16" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Buttons</h2>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>State Button Variants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="warning">Warning</Button>
                  <Button variant="info">Info</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Button Sizes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <span>→</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Button States</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-16" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Form Elements</h2>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Input Fields</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="input-default">Default Input</Label>
                  <Input id="input-default" placeholder="Enter text..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="input-disabled">Disabled Input</Label>
                  <Input id="input-disabled" placeholder="Disabled" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="textarea">Textarea</Label>
                  <Textarea
                    id="textarea"
                    placeholder="Enter multiple lines..."
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Select</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Select Option</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Checkboxes & Switches</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkbox1" />
                  <Label htmlFor="checkbox1">Checkbox option</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkbox2" defaultChecked />
                  <Label htmlFor="checkbox2">Checked checkbox</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="switch1" />
                  <Label htmlFor="switch1">Switch option</Label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Slider</CardTitle>
              </CardHeader>
              <CardContent>
                <Slider defaultValue={[50]} max={100} step={1} />
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-16" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Badges</h2>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Badge Variants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>State Badge Variants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-16" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Alerts</h2>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Alert Variants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Default Alert</AlertTitle>
                  <AlertDescription>
                    This is a default alert with informational content.
                  </AlertDescription>
                </Alert>

                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Destructive Alert</AlertTitle>
                  <AlertDescription>
                    This alert indicates an error or destructive action.
                  </AlertDescription>
                </Alert>

                <Alert variant="success">
                  <CheckCircle className="h-4 w-4" />
                  <AlertTitle>Success Alert</AlertTitle>
                  <AlertDescription>
                    This alert indicates a successful operation.
                  </AlertDescription>
                </Alert>

                <Alert variant="warning">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Warning Alert</AlertTitle>
                  <AlertDescription>
                    This alert warns about potential issues.
                  </AlertDescription>
                </Alert>

                <Alert variant="info">
                  <Info className="h-4 w-4" />
                  <AlertTitle>Info Alert</AlertTitle>
                  <AlertDescription>
                    This alert provides additional information.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-16" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Cards</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Simple Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This is a basic card with a header and content area. Cards are
                  used throughout the site for grouping related content.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Card with Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Cards can contain any type of content including buttons and
                  form elements.
                </p>
                <Button size="sm">Action</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-16" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Lists</h2>

          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Unordered List</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>First list item</li>
                  <li>Second list item</li>
                  <li>Third list item</li>
                  <li>Fourth list item</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Ordered List</h3>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>First step</li>
                  <li>Second step</li>
                  <li>Third step</li>
                  <li>Fourth step</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-16" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Links</h2>

          <Card>
            <CardContent className="pt-6 space-y-4">
              <div>
                <a href="#" className="text-primary hover:underline">
                  Primary link
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Muted link with hover
                </a>
              </div>
              <div>
                <a href="#" className="underline">
                  Underlined link
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-16" />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Spacing Scale</h2>

          <Card>
            <CardContent className="pt-6 space-y-2">
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm text-muted-foreground">0.5rem</div>
                <div
                  className="h-2 bg-primary"
                  style={{ width: "0.5rem" }}
                ></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm text-muted-foreground">1rem</div>
                <div className="h-2 bg-primary" style={{ width: "1rem" }}></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm text-muted-foreground">1.5rem</div>
                <div
                  className="h-2 bg-primary"
                  style={{ width: "1.5rem" }}
                ></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm text-muted-foreground">2rem</div>
                <div className="h-2 bg-primary" style={{ width: "2rem" }}></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm text-muted-foreground">3rem</div>
                <div className="h-2 bg-primary" style={{ width: "3rem" }}></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm text-muted-foreground">4rem</div>
                <div className="h-2 bg-primary" style={{ width: "4rem" }}></div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
  );
}
