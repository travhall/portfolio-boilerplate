import { Metadata } from "next";
import { contactInfo } from "@/data/contact";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Twitter, Github, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}. ${contactInfo.subtitle}`,
  openGraph: {
    title: `Contact ${profile.name}`,
    description: contactInfo.subtitle,
  },
  twitter: {
    card: "summary",
    title: `Contact ${profile.name}`,
    description: contactInfo.subtitle,
  },
};

const iconMap = {
  Mail,
  Linkedin,
  Twitter,
  Github,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">{contactInfo.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {contactInfo.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.methods.map((method) => {
                const Icon = iconMap[method.icon as keyof typeof iconMap];
                return (
                  <Card
                    key={method.title}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold mb-1">{method.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {method.description}
                          </p>
                          <a
                            href={method.action}
                            target={
                              method.action.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              method.action.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-sm font-medium text-primary hover:underline break-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
                            aria-label={`${method.title}: ${method.value}`}
                          >
                            {method.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p className="text-sm text-muted-foreground">
                      {contactInfo.responseTime}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Availability</h3>
                <p className="text-sm opacity-90">{contactInfo.availability}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-muted/50">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Ready to Start a Project?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Whether you have a specific project in mind or just want to
              explore possibilities, I'm here to help bring your ideas to life.
            </p>
            <Button size="lg" asChild>
              <a href={`mailto:${contactInfo.email}`}>
                <Mail className="mr-2 h-5 w-5" />
                Send Me an Email
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
