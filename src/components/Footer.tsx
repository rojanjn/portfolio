import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Made with <Heart className="w-4 h-4 fill-current" />{" "}
            by Rojan Jafarnezhad
          </p>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}