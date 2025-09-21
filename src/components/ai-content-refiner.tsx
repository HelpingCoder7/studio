"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { refinePortfolioText } from "@/ai/flows/ai-content-assistant";
import { Wand2, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "./ui/skeleton";

export function AIContentRefiner({ initialText }: { initialText: string }) {
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState(initialText);
  const [refinedText, setRefinedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleRefine = async () => {
    setIsLoading(true);
    setRefinedText("");
    try {
      const result = await refinePortfolioText({ text: inputText });
      setRefinedText(result.refinedText);
    } catch (error) {
      console.error("Error refining text:", error);
      toast({
        title: "Error",
        description: "Failed to refine text. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(refinedText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
     toast({
        title: "Copied!",
        description: "The refined text has been copied to your clipboard.",
      });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Wand2 className="mr-2 h-4 w-4" />
          Refine with AI
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>AI Content Assistant</DialogTitle>
          <DialogDescription>
            Use AI to refine your text for a more professional and consistent tone.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Your Text</h3>
            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={10}
              placeholder="Enter text to refine..."
              className="h-48 resize-none"
            />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Refined Version</h3>
            <div className="relative h-48 w-full rounded-md border bg-muted/50 p-3 text-sm">
                {isLoading && (
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                    </div>
                )}
              <p className="whitespace-pre-wrap">{refinedText}</p>
              {refinedText && !isLoading && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 h-7 w-7"
                  onClick={handleCopy}
                >
                  {isCopied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  <span className="sr-only">Copy text</span>
                </Button>
              )}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleRefine} disabled={isLoading}>
            {isLoading ? "Refining..." : "Refine Text"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
