import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navigation - Clean tab style like meghanadhar.com */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background-dark/95 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center h-16 gap-12">
            <a
              href="#"
              className="text-sm font-medium text-white hover:text-primary transition-colors tracking-wide"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide"
            >
              About
            </a>
            <a
              href="#"
              className="text-xl font-display font-bold tracking-tighter text-white hover:text-primary transition-colors px-8"
            >
              Rajesh Rangarajan
            </a>
            <a
              href="#work"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide"
            >
              Work
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide"
            >
              Contact
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between h-16">
            <a
              href="#"
              className="text-lg font-display font-bold tracking-tighter text-white"
            >
              Rajesh Rangarajan
            </a>
            <button className="text-white hover:text-primary transition-colors p-2">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 bg-hero-glow opacity-40 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text Content */}
          <div className="order-2 lg:order-1 flex flex-col gap-6 animate-slide-up">
            <h2 className="text-sm font-medium tracking-[0.2em] text-gray-400 uppercase">
              Spatial Computing Product Manager
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.9]">
              Rajesh
              <br />
              Rangarajan
            </h1>

            {/* Expertise Keywords */}
            <div className="flex flex-wrap gap-3 py-2">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-300 tracking-wide">
                Spatial Computing
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-300 tracking-wide">
                AR/VR
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-300 tracking-wide">
                Cinematography
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-300 tracking-wide">
                Interactive Storytelling
              </span>
            </div>

            <p className="text-lg md:text-xl text-gray-400 max-w-md leading-relaxed">
              Crafting immersive worlds at the intersection of cinematic storytelling and spatial computing.
            </p>

            <div className="pt-6 flex gap-6">
              <a
                href="#work"
                className="group flex items-center gap-2 text-white font-medium border-b border-white/20 pb-1 hover:border-white transition-colors"
              >
                View Selected Works
                <span className="material-symbols-outlined text-lg text-white transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative animate-fade-in">
            <div className="relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-sm transition-all duration-700 ease-out border border-white/5">
              <Image
                src="/final-profile.png"
                alt="Portrait of Rajesh Rangarajan"
                fill
                className="object-cover object-top transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Work Section */}
      <section id="work" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">Selected Works</h2>
            <p className="text-gray-500 max-w-xs text-sm md:text-right">
              A collection of spatial experiences, AR/VR tools, and interactive media.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Project 1 (Large) - Travel Mode / Flight Mode */}
            <a
              href="#"
              className="group project-card relative col-span-1 md:col-span-2 aspect-[16/9] overflow-hidden rounded-sm bg-neutral-900 border border-white/5 hover:border-white/20 transition-colors"
            >
              <Image
                src="/travel-mode-cover.png"
                alt="Travel Mode"
                fill
                className="object-cover transition-transform duration-700 ease-out opacity-80 group-hover:opacity-60"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end bg-gradient-to-t from-background-dark/90 to-transparent">
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 group-hover:scale-105 transition-transform origin-left duration-300">
                  Travel Mode
                </h3>
                <p className="text-gray-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Meta Quest on Lufthansa Airlines • APEX 2024 Award Winner
                </p>
              </div>
            </a>

            {/* Project 2 (Tall) - Together Mode Studio */}
            <a
              href="#"
              className="group project-card relative col-span-1 aspect-[4/5] md:aspect-auto md:row-span-2 overflow-hidden rounded-sm bg-neutral-900 border border-white/5 hover:border-white/20 transition-colors"
            >
              <Image
                src="https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=1000&auto=format&fit=crop"
                alt="Together Mode Studio"
                fill
                className="object-cover transition-transform duration-700 ease-out opacity-80 group-hover:opacity-60"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end bg-gradient-to-t from-background-dark/90 to-transparent">
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:scale-105 transition-transform origin-left duration-300">
                  Together Mode Studio
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  AR-like Shared Spaces • Microsoft Teams (0→1)
                </p>
              </div>
            </a>

            {/* Project 3 - Horizon TV */}
            <a
              href="#"
              className="group project-card relative col-span-1 aspect-square overflow-hidden rounded-sm bg-neutral-900 border border-white/5 hover:border-white/20 transition-colors"
            >
              <Image
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1000&auto=format&fit=crop"
                alt="Horizon TV"
                fill
                className="object-cover transition-transform duration-700 ease-out opacity-80 group-hover:opacity-60"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end bg-gradient-to-t from-background-dark/90 to-transparent">
                <h3 className="text-xl font-display font-bold mb-1 group-hover:scale-105 transition-transform origin-left duration-300">
                  Horizon TV
                </h3>
                <p className="text-gray-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Entertainment Discovery Hub • Meta Quest
                </p>
              </div>
            </a>

            {/* Project 4 - VCaaP */}
            <a
              href="#"
              className="group project-card relative col-span-1 aspect-square overflow-hidden rounded-sm bg-neutral-900 border border-white/5 hover:border-white/20 transition-colors"
            >
              <Image
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
                alt="VCaaP"
                fill
                className="object-cover transition-transform duration-700 ease-out opacity-80 group-hover:opacity-60"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end bg-gradient-to-t from-background-dark/90 to-transparent">
                <h3 className="text-xl font-display font-bold mb-1 group-hover:scale-105 transition-transform origin-left duration-300">
                  VCaaP
                </h3>
                <p className="text-gray-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Video Conferencing as a Platform • Microsoft Teams
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About / Philosophy Section */}
      <section id="about" className="py-24 bg-neutral-900/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="material-symbols-outlined text-4xl text-gray-500 mb-6">movie_filter</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
            &ldquo;I build worlds that are not just seen, but felt.&rdquo;
          </h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-12">
            My work explores the frontiers of spatial computing and video conferencing, transforming passive viewing into
            active participation. Whether it&apos;s a VR headset or a Teams meeting, I believe in creating intuitive, impactful,
            and visually stunning experiences that resonate with audiences on a deeper level.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold mb-2">Let&apos;s create something.</h3>
            <a
              href="mailto:hello@rajesh.com"
              className="text-gray-400 hover:text-white hover:scale-105 inline-block transition-transform"
            >
              hello@rajesh.com
            </a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white hover:scale-110 transition-transform">
              Twitter
            </a>
            <a href="#" className="text-gray-500 hover:text-white hover:scale-110 transition-transform">
              LinkedIn
            </a>
            <a href="#" className="text-gray-500 hover:text-white hover:scale-110 transition-transform">
              Instagram
            </a>
          </div>

          <div className="text-gray-600 text-sm">© 2024 Rajesh Rangarajan.</div>
        </div>
      </footer>
    </>
  );
}

