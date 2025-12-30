'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { Check, Copy, FileJson } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

interface ComponentSectionProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  code: string;
  imports?: string;
  isPopular?: boolean;
}

export function ComponentSection({
  id,
  title,
  description,
  children,
  code,
  imports,
  isPopular = false,
}: ComponentSectionProps) {
  const [copiedJsx, setCopiedJsx] = useState(false);
  const [copiedConfig, setCopiedConfig] = useState(false);
  const [hasTracked, setHasTracked] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked) {
            trackComponentView(id);
            setHasTracked(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [id, hasTracked]);

  const trackComponentView = async (componentName: string) => {
    console.log('Component viewed:', componentName);
  };

  const trackCopy = async () => {
    console.log('Component code copied:', id);
  };

  const handleCopyJsx = async () => {
    const fullCode = imports ? `${imports}\n\n${code}` : code;
    await navigator.clipboard.writeText(fullCode);
    setCopiedJsx(true);
    trackCopy();
    setTimeout(() => setCopiedJsx(false), 2000);
  };

  const handleCopyConfig = async () => {
    const config = {
      component: title,
      code: code,
      imports: imports || '',
    };
    await navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setCopiedConfig(true);
    setTimeout(() => setCopiedConfig(false), 2000);
  };

  return (
    <div ref={sectionRef} id={id} className="scroll-mt-20">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CardTitle className="text-2xl">{title}</CardTitle>
              {isPopular && (
                <Badge variant="secondary" className="text-xs">
                  Popular
                </Badge>
              )}
            </div>
          </div>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg border bg-background p-8">
            <div className="flex flex-wrap items-center justify-center gap-4 min-h-[120px]">
              {children}
            </div>
          </div>

          <Separator />

          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold">Code Example</h4>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyJsx}
                  className="h-8 text-xs"
                >
                  {copiedJsx ? (
                    <>
                      <Check className="h-3 w-3 mr-1" />
                      Copied JSX
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 mr-1" />
                      Copy JSX
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyConfig}
                  className="h-8 text-xs"
                >
                  {copiedConfig ? (
                    <>
                      <Check className="h-3 w-3 mr-1" />
                      Copied Config
                    </>
                  ) : (
                    <>
                      <FileJson className="h-3 w-3 mr-1" />
                      Copy Config
                    </>
                  )}
                </Button>
              </div>
            </div>

            {imports && (
              <div className="mb-3">
                <details className="group">
                  <summary className="cursor-pointer text-xs font-medium text-muted-foreground mb-2 hover:text-foreground">
                    View Imports
                  </summary>
                  <pre className="text-xs bg-muted/30 p-3 rounded border overflow-x-auto">
                    <code>{imports}</code>
                  </pre>
                </details>
              </div>
            )}

            <pre className="text-sm bg-muted/30 p-4 rounded-lg border overflow-x-auto">
              <code>{code}</code>
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
