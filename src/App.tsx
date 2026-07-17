import React from 'react';
import { motion } from 'motion/react';
import { Github, Play, ArrowRight, Wand2, Image as ImageIcon, Sparkles, Video, Youtube, Facebook, Instagram } from 'lucide-react';

const GEM_URL = "https://gemini.google.com/gem/10O-wx191l_AkBPg1qyiq4TLL-GChk4ns?usp=sharing";
const YOUTUBE_URL = "https://youtu.be/N4SlXS1GvlI?si=ayXt-UO_3LYbTlgM";
const YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/N4SlXS1GvlI";
const GITHUB_URL = "https://github.com/ttmt-cc-cutom-gems/miniature-cooking-content-engine-gem";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-charcoal/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-blue/10 text-neon-blue">
            <Sparkles size={18} />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Miniature Cooking Engine
          </span>
        </div>
        <a
          href={GITHUB_URL}
          className="text-gray-400 transition-colors hover:text-white"
          aria-label="GitHub Repository"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={24} />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-24 text-center sm:pt-40 sm:pb-32">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[120px] bg-neon-blue rounded-full"></div>
      
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-neon-blue/30 bg-neon-blue/10 px-4 py-1.5 mb-8 text-sm font-medium text-neon-blue"
        >
          <Sparkles size={14} />
          <span>Powered by Gemini</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl leading-tight"
        >
          Automate Niche Content in <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-yellow">One Click.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-gray-400 sm:text-xl leading-relaxed"
        >
          The Miniature Cooking Content Engine is a custom Gemini Gem that instantly turns a single trigger word into complete 2-clip vertical short scripts, multi-platform social captions, and programmatic long-form SEO blog posts.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={GEM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-14 items-center justify-center gap-2 rounded-full bg-neon-blue px-8 text-base font-semibold text-black transition-all hover:bg-neon-blue/90 hover:scale-105"
          >
            Get the Free Gem
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 text-base font-medium text-white transition-all hover:bg-white/10"
          >
            <Play size={18} />
            Watch Tutorial
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="px-6 py-24 bg-card-bg/50 border-y border-white/5">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Watch the Complete Step-by-Step Guide
          </h2>
          <p className="mt-4 text-gray-400">
            See the unedited 9-minute and 37-second screen recording workflow in action.
          </p>
        </div>
        
        <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-neon-blue/5">
          <iframe
            src={YOUTUBE_EMBED_URL}
            title="Miniature Cooking Content Engine Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 h-full w-full border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: <Wand2 size={24} />,
      title: "Trigger",
      description: "Type \"Generate\" into the Gemini Gem to instantly receive the text architecture."
    },
    {
      icon: <ImageIcon size={24} />,
      title: "Visualize",
      description: "Copy the 4x4 storyboard grid text prompts into the Google Labs Flow interface to render micro-kitchen background frames."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Refine",
      description: "Seamlessly tweak and run quick asset regenerations if any AI visual glitches or artifacts appear."
    },
    {
      icon: <Video size={24} />,
      title: "Stitch",
      description: "Drop the finished 10-second clips into Google Vids, layer your ASMR audio tracks, and export."
    }
  ];

  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-gray-400">
            A simple 4-step workflow to generate high-quality niche content.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col items-start rounded-2xl border border-white/10 bg-card-bg p-8 transition-colors hover:border-neon-blue/50 group"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-neon-blue group-hover:bg-neon-blue/10 transition-colors">
                {step.icon}
              </div>
              <div className="absolute top-8 right-8 font-mono text-5xl font-bold text-white/5">
                0{index + 1}
              </div>
              <h3 className="mb-3 font-display text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 pt-12 pb-8 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-[10px] text-gray-500 font-semibold tracking-widest uppercase flex flex-col gap-8">
          
          {/* Top section: Disclaimer and Created By Card */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <p className="max-w-3xl leading-relaxed lg:flex-1">
              Disclaimer: While this content style has high viral potential, specific views, reach, or income results are not guaranteed. Success heavily relies on consistency and platform updates.
            </p>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:flex-shrink-0">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 w-full md:w-auto">
                <div className="w-12 h-12 rounded-lg bg-neon-blue/10 overflow-hidden flex items-center justify-center flex-shrink-0 border border-neon-blue/20 p-0.5">
                  <img src="https://ttmt-cc-cutom-gems.github.io/wild-mutation-ai-reel-architect-gem/ttmt-cc-custom-gems-logo.svg" alt="TTMT CC Custom Gems" className="w-full h-full object-cover rounded-md" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-neon-blue mb-1">Created By</span>
                  <a href="https://github.com/ttmt-cc-cutom-gems" target="_blank" rel="noreferrer" className="text-white hover:text-neon-blue transition-colors font-bold uppercase tracking-widest text-[11px] mb-0.5">
                    TTMT CC Custom Gems
                  </a>
                  <span className="normal-case tracking-normal text-xs text-gray-400">
                    Custom Gemini Gems for content automations.
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom section: The Time Machine Tech and Social Links */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-4 border-t border-white/5 pt-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-neon-yellow/10 border border-neon-yellow/20 flex items-center justify-center p-0.5">
                <img src="https://ttmt-cc-cutom-gems.github.io/wild-mutation-ai-reel-architect-gem/the-time-machine-tech-logo.svg" alt="The Time Machine Tech" className="w-full h-full object-cover" />
              </div>
              <p className="whitespace-nowrap text-sm text-gray-500 normal-case tracking-normal">
                © {new Date().getFullYear()} <a href="https://www.youtube.com/@TheTimeMachineTech" target="_blank" rel="noreferrer" className="hover:text-neon-blue transition-colors font-medium">The Time Machine Tech</a>
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="https://www.youtube.com/@TheTimeMachineTech" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-[#FF0000] transition-colors normal-case tracking-normal">
                <Youtube className="w-4 h-4" />
                <span>YouTube</span>
              </a>
              <a href="https://www.facebook.com/thetimemachinetech/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-[#1877F2] transition-colors normal-case tracking-normal">
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/thetimemachinetech/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-[#E4405F] transition-colors normal-case tracking-normal">
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
          
          {/* MIT License text */}
          <div className="mt-6 text-center">
            <p className="text-[10px] text-gray-600 max-w-2xl mx-auto leading-relaxed normal-case tracking-normal">
              © {new Date().getFullYear()} The Time Machine Tech<br />
              Released under the MIT License. Copyright © {new Date().getFullYear()} TTMT CC Custom Gems.<br />
              See the <a href="https://github.com/ttmt-cc-cutom-gems/miniature-cooking-content-engine-gem/blob/main/LICENSE" target="_blank" rel="noreferrer" className="underline hover:text-neon-blue transition-colors">LICENSE</a> file for details.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen selection:bg-neon-blue/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
