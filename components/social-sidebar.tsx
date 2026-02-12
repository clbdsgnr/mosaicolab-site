import Link from "next/link"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function SocialSidebar() {
  return (
    <div
      className={`
        fixed z-10
        bottom-6 left-1/2 -translate-x-1/2
        flex items-center gap-4
        rounded-full border border-muted/30 bg-background/70 px-4 py-2
        text-muted-foreground backdrop-blur
        md:bottom-auto md:left-auto md:right-6 md:top-1/2 md:-translate-x-0 md:-translate-y-1/2
        md:flex-col md:gap-6 md:rounded-2xl md:px-3 md:py-4
      `}
    >
      <Link
        href="https://www.instagram.com/somosmosaicolab"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="transition-colors duration-300 hover:text-foreground"
      >
        <InstagramIcon className="h-5 w-5" />
      </Link>

      <div className="h-px w-6 bg-muted-foreground/30 md:h-6 md:w-px" />

      <Link
        href="http://linkedin.com/company/mosaicolab"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="transition-colors duration-300 hover:text-foreground"
      >
        <LinkedInIcon className="h-5 w-5" />
      </Link>
    </div>
  )
}
