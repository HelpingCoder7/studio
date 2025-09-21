"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";

import { submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import React from "react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Sending..." : "Service under development"}
    </Button>
  );
}

export function Contact() {
  const [state, formAction] = useActionState(submitContactForm, null);
  const { toast } = useToast();
  const formRef = React.useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.message) {
      if (state.errors) {
        toast({ title: "Error", description: state.message, variant: "destructive" });
      } else {
        toast({ title: "Success!", description: state.message });
        formRef.current?.reset();
      }
    }
  }, [state, toast]);
  
  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-6">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          Get In Touch
        </h2>
        <p className="mt-4 max-w-2xl text-foreground/80 md:text-lg">
          Have a question or want to work together? Feel free to reach out.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              Here's how you can reach me directly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:sudarshanshrivastava7@gmail.com" className="hover:underline">
                sudarshanshrivastava7@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:9827763713" className="hover:underline">
                +91 9827763713
              </a>
            </div>
          </CardContent>
        </Card>
        
        <Card>
           <CardHeader>
            <CardTitle>Send a Message</CardTitle>
             <CardDescription>
              Or fill out this form and I will get back to you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-4">
              <div className="space-y-1">
                <Input id="name" name="name" placeholder="Your Name" />
                {state?.errors?.name && <p className="text-sm text-destructive">{state.errors.name}</p>}
              </div>
              <div className="space-y-1">
                <Input id="email" name="email" type="email" placeholder="Your Email" />
                {state?.errors?.email && <p className="text-sm text-destructive">{state.errors.email}</p>}
              </div>
              <div className="space-y-1">
                <Textarea id="message" name="message" placeholder="Your Message" rows={5} />
                 {state?.errors?.message && <p className="text-sm text-destructive">{state.errors.message}</p>}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
