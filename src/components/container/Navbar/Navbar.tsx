import Button from "../../ui/Button";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-semibold">
           <img
                src="/logo-symbol.png"
                alt="Company Logo"
                className="h-8 w-auto"
            />Your Logo
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-10 text-sm text-neutral-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Service</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#testimonials" className="hover:text-white">Testimonials</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>

        {/* CTA */}
        <Button className="px-6 py-2 text-sm">Let's Talk</Button>
      </div>
    </header>
  );
};

export default Navbar;
