"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we couldn't find the page you were looking for.</p>
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
