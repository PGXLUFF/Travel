import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Users, Map, Heart, Shield, Star, Flame, Leaf, Globe2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Intro Travels India",
  description:
    "At INTRO TRAVELS INDIA, we don't just create trips — we create life-changing journeys. Explore authentic cultures, breathtaking landscapes, and unforgettable local experiences with India's most trusted travel company.",
  keywords: ["about intro travels india", "india travel company", "best tour operator india", "authentic travel india"],
  openGraph: {
    title: "About Us - Intro Travels India",
    description:
      "We create life-changing journeys across India. Travel with purpose. Return with memories for life.",
    url: "https://introtravelsindia.com/about",
    type: "website"
  }
};

const stats = [
  { value: "10,000+", label: "Happy Travellers" },
  { value: "50+", label: "Destinations Covered" },
  { value: "120+", label: "Licensed Local Guides" },
  { value: "8+ Yrs", label: "Of Excellence" }
];

const values = [
  {
    icon: Compass,
    title: "Authentic Exploration",
    description:
      "We take you off the beaten track — hidden temples, local bazaars, secret viewpoints — places most tourists never see.",
    bg: "bg-orange-50",
    iconBg: "bg-orange-100 text-orange-600"
  },
  {
    icon: Shield,
    title: "Safety & Comfort",
    description:
      "Every itinerary includes licensed vehicles, vetted guides, and 24/7 on-ground coordination so you're always supported.",
    bg: "bg-teal-50",
    iconBg: "bg-teal-100 text-teal-700"
  },
  {
    icon: Leaf,
    title: "Sustainable Travel",
    description:
      "We employ native guides and partner with community lodges to ensure tourism benefits the local economy and environment.",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100 text-emerald-700"
  },
  {
    icon: Flame,
    title: "Transformative Journeys",
    description:
      "We believe travel should inspire and transform. Every trip is designed to change the way you see the world.",
    bg: "bg-amber-50",
    iconBg: "bg-amber-100 text-amber-700"
  },
  {
    icon: Heart,
    title: "Personalised Care",
    description:
      "Your trip, your rules. We customise every detail around your passions, travel style, timeline, and group preferences.",
    bg: "bg-rose-50",
    iconBg: "bg-rose-100 text-rose-600"
  },
  {
    icon: Globe2,
    title: "Rich Cultural Access",
    description:
      "From Rajasthani folk performances to Kerala backwater village stays — we connect you deeply with India's diverse cultures.",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100 text-blue-700"
  }
];

const journey = [
  { step: "01", title: "Plan", desc: "Share your travel dates, budget, and interests with us." },
  { step: "02", title: "Customise", desc: "Our experts craft a bespoke itinerary just for you." },
  { step: "03", title: "Travel", desc: "We handle every detail — flights, stays, and activities." },
  { step: "04", title: "Remember", desc: "Return with stories and memories that last forever." }
];

const AboutPage = () => {
  return (
    <main className="w-full min-h-screen bg-[#FAF7F2] pb-20 overflow-x-hidden">

      {/* ─── HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative w-full bg-primary text-white overflow-hidden rounded-b-[3.5rem] shadow-xl">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Image/about_hero.png"
            alt="Intro Travels India about us"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
        </div>

        {/* Orange orbs */}
        <div className="orange-orb w-[450px] h-[450px] -top-20 right-0 opacity-50" />
        <div className="teal-orb w-[300px] h-[300px] bottom-0 left-1/3 opacity-40" />

        <div className="relative z-10 px-6 md:px-12 lg:px-24 py-24 md:py-36">
          <div className="max-w-[760px] flex flex-col gap-7">
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-400 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm w-fit border border-white/10">
              ✦ Who We Are · About Us
            </span>
            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight text-white">
              We Create{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                Life-Changing
              </span>
              <br />
              Journeys
            </h1>
            <p className="text-white/75 text-base md:text-xl leading-relaxed max-w-[640px]">
              At <strong className="text-white font-bold">INTRO TRAVELS INDIA</strong>, we don't just create
              trips — we create life-changing journeys. Every experience is carefully designed to help you
              connect deeper, explore further, taste authentic cultures, and give back to the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="#our-story"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-bold text-sm hover:shadow-orange-400/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Our Story →
              </a>
              <a
                href="#our-values"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 backdrop-blur-sm text-white rounded-full font-bold text-sm hover:bg-white/20 transition-all duration-300"
              >
                Our Values
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ROW ─────────────────────────────────────────────── */}
      <section className="w-full px-6 md:px-12 lg:px-24 -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 bg-white border border-black/[0.04] shadow-xl rounded-[2.5rem] p-8 md:p-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-1 border-r last:border-r-0 border-black/[0.06] px-4">
              <span className="font-display font-extrabold text-3xl md:text-4xl bg-gradient-to-r from-orange-500 to-teal-600 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-primary/50 font-semibold uppercase tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── OUR STORY ─────────────────────────────────────────────── */}
      <section id="our-story" className="relative w-full px-6 md:px-12 lg:px-24 py-24 overflow-hidden">
        <div className="orange-orb w-[350px] h-[350px] top-10 -left-20 opacity-40" />
        <div className="teal-orb w-[300px] h-[300px] bottom-0 right-0 opacity-30" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="/Image/hero_taj_mahal.png"
                alt="Intro Travels India story"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-[1.5rem] p-5 shadow-lg shadow-orange-200 max-w-[180px]">
              <span className="font-display font-extrabold text-4xl block">8+</span>
              <span className="text-xs font-semibold opacity-90 uppercase tracking-wide">Years of Crafting Memories</span>
            </div>
          </div>

          {/* Text side */}
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest font-extrabold text-orange-500">
              ✦ Our Story
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-primary leading-tight">
              Travel With Purpose.{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Return With Memories.
              </span>
            </h2>
            <div className="flex flex-col gap-5 text-primary/65 text-base md:text-lg leading-relaxed">
              <p>
                At <strong className="text-primary font-bold">INTRO TRAVELS INDIA</strong>, we don't just create
                trips — we create <em>life-changing journeys</em>. Every experience is carefully designed to help
                you connect deeper, explore further, taste authentic cultures, and give back to the world.
              </p>
              <p>
                From breathtaking landscapes and hidden gems to unforgettable local experiences, our adventures
                are made for travellers who want more than just a vacation. We believe travel should inspire,
                transform, and leave you with stories that stay forever.
              </p>
              <p>
                Whether you're chasing vibrant cultures, meaningful connections, thrilling adventures, or soulful
                moments, <strong className="text-primary font-bold">INTRO TRAVELS INDIA</strong> turns every
                journey into an experience that changes the way you see the world.
              </p>
            </div>
            <blockquote className="border-l-4 border-orange-400 pl-5 italic text-primary/70 text-base font-medium bg-orange-50 py-4 pr-4 rounded-r-2xl">
              "Travel with us. Explore with purpose. Return with memories for life."
            </blockquote>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS / JOURNEY STEPS ─────────────────────────── */}
      <section className="relative w-full section-warm py-20 overflow-hidden">
        <div className="orange-orb w-[300px] h-[300px] top-0 right-10 opacity-50" />
        <div className="px-6 md:px-12 lg:px-24 relative z-10">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest font-extrabold text-orange-500 mb-2 block">
              ✦ How It Works
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-primary">
              Your Journey in{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">4 Steps</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((item, i) => (
              <div key={i} className="relative bg-white/80 backdrop-blur-sm border border-orange-100 rounded-[2rem] p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                <span className="font-display font-extrabold text-5xl text-orange-100">{item.step}</span>
                <h3 className="font-display font-bold text-xl text-primary -mt-2">{item.title}</h3>
                <p className="text-primary/60 text-sm leading-relaxed">{item.desc}</p>
                <div className="w-8 h-1 rounded-full bg-gradient-to-r from-orange-400 to-amber-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR VALUES ────────────────────────────────────────────── */}
      <section id="our-values" className="relative w-full px-6 md:px-12 lg:px-24 py-24 overflow-hidden">
        <div className="teal-orb w-[350px] h-[350px] -right-20 top-1/2 opacity-40" />
        <div className="orange-orb w-[280px] h-[280px] -left-10 bottom-10 opacity-30" />

        <div className="relative z-10">
          <div className="mb-14 text-center">
            <span className="text-xs uppercase tracking-widest font-extrabold text-orange-500 mb-2 block">
              ✦ Our Core Beliefs
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-primary">
              Values That Drive{" "}
              <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Every Journey</span>
            </h2>
            <p className="text-primary/55 text-base md:text-lg max-w-[600px] mx-auto mt-4 leading-relaxed">
              We build every package around six fundamental pillars that guarantee authenticity, safety, 
              sustainability, and personal transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className={`${val.bg} rounded-[2rem] p-7 border border-white/60 shadow-sm flex flex-col gap-5 premium-card`}
                >
                  <div className={`w-12 h-12 rounded-2xl ${val.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-primary mb-2">{val.title}</h3>
                    <p className="text-primary/60 text-sm leading-relaxed">{val.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA STRIP ───────────────────────────────────────── */}
      <section className="relative w-full px-6 md:px-12 lg:px-24 py-6">
        <div className="relative rounded-[3rem] overflow-hidden bg-primary text-white px-8 md:px-16 py-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute inset-0">
            <Image src="/Image/hero_kashmir.png" alt="Kashmir travel" fill className="object-cover opacity-15" />
            <div className="absolute inset-0 bg-primary/90" />
          </div>
          <div className="orange-orb w-[250px] h-[250px] -top-10 right-40 opacity-40" />
          <div className="relative z-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Journey?</span>
            </h2>
            <p className="text-white/65 text-base mt-2">Talk to our travel experts — no obligation, just inspiration.</p>
          </div>
          <div className="relative z-10 flex gap-4 flex-col sm:flex-row">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-bold text-sm hover:shadow-orange-300/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us →
            </a>
            <a
              href="/"
              className="px-8 py-4 bg-white/10 border border-white/20 backdrop-blur-sm text-white rounded-full font-bold text-sm hover:bg-white/20 transition-all duration-300"
            >
              View Packages
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
