// app/not-found.tsx
// Shown for any URL that doesn't exist (the 404 page).
// FIX: removed the unused "use client", useRouter import and `router` variable;
// this page needs no client-side code, so it can stay a plain server component.

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we couldn&apos;t find the page you were looking for.</p>
      {/* asChild makes the Button render as the <Link> so it's a real link */}
      <Button
        asChild
        size="lg"
        className="m-5 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
}
