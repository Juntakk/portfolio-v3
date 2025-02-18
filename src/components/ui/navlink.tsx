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
              spy={true} // Enables active state when scrolling
              offset={-50} // Adjusts active state detection
            >
              <span
                className={`lg:text-3xl text-xl transition-all duration-300 ${
                  isActive
                    ? "text-[#64ffda] border-b-2 border-[#64ffda] py-1" // Active link styles
                    : "text-[#ccd6f6] dark:text-gray-400 hover:text-[#64ffda]" // Inactive link styles
                }`}
              >
                {icon}
              </span>
            </Link>
          </motion.li>
        </TooltipTrigger>
        <TooltipContent
          side="right" // Tooltip appears on the right
          sideOffset={10} // Adds spacing between the icon and tooltip
          className="bg-[#0a192f] text-[#64ffda] border border-[#64ffda] rounded-lg shadow-lg px-3 py-2 text-sm font-medium" // Tooltip styles
        >
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default NavLink;
