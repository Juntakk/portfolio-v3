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
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              className='flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer group'
              to={destination}
              smooth={true}
              duration={1000}
              spy={true}
            >
              <span
                className={`text-3xl transition-all duration-300 ${
                  isActive
                    ? "text-accent border-b-2 border-accent py-1"
                    : "text-gray-400 hover:text-accent"
                }`}
              >
                {icon}
              </span>
            </Link>
          </motion.li>
        </TooltipTrigger>
        <TooltipContent
          side='right'
          sideOffset={10}
          className='bg-gray-800 border border-accent text-accent rounded-lg shadow-lg p-1 text-xs sm:text-sm font-medium'
        >
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default NavLink;
