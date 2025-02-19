import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Link } from "react-scroll";

type NavLinkProps = {
  icon: ReactNode;
  content: string;
  destination: string;
  isActive: boolean;
};

const NavLink = ({ icon, content, destination, isActive }: NavLinkProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer group"
              to={destination}
              smooth={true}
              duration={1000}
              spy={true}
            >
              <span
                className={`lg:text-3xl text-xl transition-all duration-300 ${
                  isActive
                    ? "text-accent border-b-2 border-accent py-1" // Active link styles (your accent color)
                    : "text-gray-400 hover:text-accent" // Inactive link styles (gray with accent hover)
                }`}
              >
                {icon}
              </span>
            </Link>
          </motion.li>
        </TooltipTrigger>
        <TooltipContent
          side="right"
          sideOffset={10}
          className="bg-white text-gray-700 border border-gray-100 rounded-lg shadow-lg px-3 py-2 text-sm font-medium" // Light mode tooltip
        >
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default NavLink;
