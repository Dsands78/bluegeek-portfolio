export default function Footer() {
    return (
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between text-sm">
          <span className="text-muted">© {new Date().getFullYear()} Derek T. Sands</span>
          <a className="underline" href="/contact">Contact</a>
        </div>
      </footer>
    );
  }
  