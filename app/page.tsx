import Image from "next/image"
import { SocialSidebar } from "@/components/social-sidebar"

export default function ComingSoon() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-start overflow-hidden bg-background px-6 pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-24 md:pb-0">
      
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[600px] w-[600px] rounded-full bg-primary/[0.04] blur-[120px]" />
      </div>

      <div
        className="pointer-events-none absolute left-1/3 top-1/3 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[400px] w-[400px] rounded-full bg-accent/[0.03] blur-[100px]" />
      </div>

      <SocialSidebar />

      <div className="relative flex flex-col items-center gap-4 sm:gap-6 md:gap-8 text-center">
        
        <Image
          src="/logo-white.svg"
          alt="Mosaico Lab"
          width={500}
          height={140}
          priority
          className="h-auto w-[280px] sm:w-[320px] md:w-[420px] lg:w-[500px]"
        />

        <div className="-mt-2 flex flex-col items-center gap-4">
          
          <h1 className="font-sans text-sm font-light uppercase tracking-[0.35em] text-foreground md:text-base">
            Estamos montando algo.
          </h1>

          <p className="font-sans text-sm font-bold uppercase tracking-[0.35em] text-foreground md:text-base">
            Peça por peça.
          </p>

          <p className="mt-4 font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground md:text-sm">
            Em breve...
          </p>

        </div>
      </div>
    </main>
  )
}
