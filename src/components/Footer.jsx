import React from "react";

const links = [
  { title: "Portfolio", href: "#" },
  { title: "Showcase", href: "#" },
  { title: "Music", href: "#" },
  { title: "Contact", href: "#" },
  { title: "Help", href: "#" },
  { title: "About", href: "#" },
];

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="text-white/70 transition-colors hover:text-white hover:underline"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className=" w-full bg-black/90 text-white py-16 border-t border-white/10 relative">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col items-center md:flex-row justify-between mb-12 text-center md:text-left">
          <div className="max-w-sm">
            <h2 className="text-2xl font-bold mb-4">Dotphic</h2>
            <p className="text-white/70 text-sm leading-relaxed">
              I make music, art, designs, I'm that guy she tells you not to
              worry about.
            </p>
          </div>
          <nav className="mt-6 md:mt-0">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {links.map((link) => (
                <li key={link.title}>
                  <FooterLink href={link.href}>{link.title}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 gap-4 text-center md:text-left">
          <p className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} Dotphic. All rights reserved.
          </p>
          <div className="flex gap-6">
            <FooterLink href="#">Twitter</FooterLink>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">LinkedIn</FooterLink>
          </div>
          <p className="text-sm text-white/70">
            Powered by Injera. Made by{" "}
            <FooterLink
              href="https://github.com/NatnaelTaddese"
              target="_blank"
            >
              NAT
            </FooterLink>
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 noise-overlay w-[100vw]"></div>
    </footer>
  );
};

export default Footer;
