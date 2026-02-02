import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
      <p className="font-mono text-xs uppercase tracking-widest text-secondary mb-4">
        // ERROR_CODE
      </p>
      <h1 className="text-8xl md:text-9xl font-serif font-light text-foreground">404</h1>
      <h2 className="text-xl md:text-2xl font-serif font-light mt-6 text-center text-muted-foreground">
        Signal_Not_Found
      </h2>
      <p className="text-muted-foreground/70 mt-3 text-center max-w-md font-mono text-sm">
        The requested resource has been moved or does not exist in this system.
      </p>
      <Link
        href="/"
        className="mt-10 px-8 py-3 border border-border hover:bg-secondary hover:border-secondary hover:text-background font-mono text-sm uppercase tracking-widest transition-all"
      >
        [ Return_to_Base ]
      </Link>
    </div>
  );
}
