import { PawPrintIcon } from "@/components/icons";

const Footer: React.FC<React.HTMLProps<HTMLDivElement>> = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-900 h-28 text-white">
      <div className="md:max-w-7xl px-5 md:px-0 mx-auto flex items-center h-28 justify-between">
        <div className="flex gap-5 items-center">
          <div className="bg-tertiary p-2 rounded-xl">
            <PawPrintIcon />
          </div>
          <span className="font-semibold text-xl">DogWise</span>
        </div>
        <div className="hidden sm:block">
          <span>&copy; {currentYear} DogWise • Alle rechten voorbehouden</span>
        </div>
        <div className="sm:flex gap-5 hidden">
          <a href="tel:32456552678" className="hover:underline">
            Bel ons
          </a>
          <a href="mailto:info@dogwise.be" className="hover:underline">
            E-mail
          </a>
          <a href="https://www.dogwise.be" target="_blank" rel="noopener" className="hover:underline">
            Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
