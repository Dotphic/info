import { useState } from "react";
import { motion } from "motion/react";
import SplitTextReveal from "../components/SplitTextReveal";
import FloatingStrokes from "../components/FloatingStrokes";

const socials = [
  { label: "Instagram", handle: "@dotphic", href: "https://www.instagram.com/dotphic" },
  { label: "LinkedIn", handle: "robelsebsibe", href: "https://www.linkedin.com/in/robelsebsibe" },
  { label: "ArtStation", handle: "dotphic", href: "https://www.artstation.com/dotphic" },
  { label: "Spotify", handle: "Dotphic", href: "https://open.spotify.com/artist/7Df0EzIGOjD6f50pHY38d0" },
  { label: "YouTube", handle: "@dotphic", href: "https://www.youtube.com/@dotphic" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = e.target;
    window.location.href = `mailto:robsizerex@gmail.com?subject=${encodeURIComponent(
      subject.value
    )}&body=${encodeURIComponent(`Name: ${name.value}\nEmail: ${email.value}\n\n${message.value}`)}`;
    setSent(true);
  };

  return (
    <div className="relative bg-black min-h-screen text-white overflow-hidden">
      <FloatingStrokes count={12} />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-10 lg:px-16 pt-40 pb-16">
        {/* Big background type */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-coolvetica text-white/[0.03] text-[22vw] leading-none whitespace-nowrap">
            CONTACT
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-10"
          >
            [GET IN TOUCH]
          </motion.p>

          <h1 className="font-coolvetica text-amber-50 text-[12vw] leading-[0.85] mb-16">
            <SplitTextReveal splitBy="char" staggerDelay={0.04} duration={0.8} triggerOnLoad>
              Let's build
            </SplitTextReveal>
            <br />
            <SplitTextReveal splitBy="char" staggerDelay={0.04} duration={0.8} triggerOnLoad delay={0.3}>
              something.
            </SplitTextReveal>
          </h1>

          {/* Bottom label bar */}
          <div className="flex items-center justify-between border-t border-white/10 pt-6">
            <p className="text-neutral-500 text-xs md:text-sm max-w-sm leading-relaxed">
              Open for creative collaborations, commissions, and new opportunities.
            </p>
            <a
              href="mailto:robsizerex@gmail.com"
              className="text-amber-50/60 hover:text-amber-50 text-xs uppercase tracking-[0.25em] transition-colors border-b border-amber-50/20 hover:border-amber-50/60 pb-0.5"
            >
              robsizerex@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Main content — two columns */}
      <section className="relative px-6 md:px-10 lg:px-16 py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">

          {/* Left — form */}
          <div>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-20"
              >
                <p className="font-coolvetica text-amber-50 text-5xl mb-4">Message sent.</p>
                <p className="text-neutral-500 text-sm">Your email client should be open — I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-0">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                  { id: "subject", label: "Subject", type: "text", placeholder: "What's this about?" },
                ].map((field) => (
                  <div key={field.id} className="group border-b border-white/10 focus-within:border-amber-50/40 transition-colors py-5">
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required
                      className="w-full bg-transparent text-amber-50 text-lg placeholder:text-neutral-600 focus:outline-none"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <div className="group border-b border-white/10 focus-within:border-amber-50/40 transition-colors py-5">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-transparent text-amber-50 text-lg placeholder:text-neutral-700 focus:outline-none resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <div className="pt-10">
                  <button
                    type="submit"
                    className="group relative overflow-hidden bg-amber-50 text-black text-sm uppercase tracking-[0.25em] py-4 px-12 hover:bg-[rgb(248,22,14)] hover:text-white transition-colors duration-200 ease-out"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right — info */}
          <div className="flex flex-col justify-between gap-16 lg:gap-0">
            {/* Direct contact */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-8">Direct</p>
              <a
                href="mailto:robsizerex@gmail.com"
                className="block font-coolvetica text-amber-50 text-3xl md:text-4xl hover:text-[rgb(248,22,14)] transition-colors duration-200 mb-3"
              >
                robsizerex@gmail.com
              </a>
              <p className="text-neutral-600 text-sm">Denver, Colorado</p>
            </div>

            {/* Socials — editorial list */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">Elsewhere</p>
              <div className="space-y-0">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="group flex items-center justify-between border-b border-white/5 py-4 hover:border-white/20 transition-colors"
                  >
                    <span className="text-neutral-500 text-xs uppercase tracking-widest group-hover:text-neutral-300 transition-colors">{s.label}</span>
                    <span className="text-amber-50/70 text-sm group-hover:text-amber-50 group-hover:translate-x-1 transition-all duration-200">{s.handle} →</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability tag */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">Available for work</span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
