import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="text-center">
        <h1 className="text-8xl font-light tracking-tight text-foreground">
          404
        </h1>
        <p className="mt-4 text-lg text-fg-secondary">Page not found</p>
        <p className="mt-2 text-sm text-fg-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-accent-fg transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
