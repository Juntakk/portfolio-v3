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
          >
            <Link
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
              to={destination}
              smooth={true}
              duration={1000}
            >
              <span
                className={`lg:text-3xl text-xl ${
                  isActive
                    ? "text-[#64ffda] border-b-2 border-[#64ffda] py-1" // Active link styles
                    : "text-[#ccd6f6] dark:text-gray-400" // Inactive link styles
                }`}
              >
                {icon}
              </span>
            </Link>
          </motion.li>
        </TooltipTrigger>
        <TooltipContent
          side="right" // Tooltip appears on the right
          className="bg-transparent text-accent border border-accent" // Tooltip styles
        >
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default NavLink;
