import { Menu, X } from "lucide-react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          
          {/* Centered Nav (Desktop) */}
          <ul className="hidden lg:flex space-x-12 mx-auto">
            <li>
              <AnchorLink
                href="#home"
                className="hover:text-orange-500 transition"
                offset="80"
              >
                Home
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#about"
                className="hover:text-orange-500 transition"
                offset="80"
              >
                About
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#technology"
                className="hover:text-orange-500 transition"
                offset="80"
              >
                Technology
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#projects"
                className="hover:text-orange-500 transition"
                offset="80"
              >
                Projects
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#contact"
                className="hover:text-orange-500 transition"
                offset="80"
              >
                Contact
              </AnchorLink>
            </li>
          </ul>

          {/* Right-aligned Mobile Menu Button */}
          <div className="lg:hidden flex justify-end flex-1">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 top-0 z-20 bg-neutral-900 w-full h-screen p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="space-y-6 text-lg">
              <li>
                <AnchorLink href="#home" onClick={toggleNavbar}>
                  Home
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#about" onClick={toggleNavbar}>
                  About
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#projects" onClick={toggleNavbar}>
                  Projects
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#contact" onClick={toggleNavbar}>
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
