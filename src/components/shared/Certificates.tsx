import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { VisuallyHidden } from "radix-ui";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";

const Certificates = () => {
  const translations = useTranslation();

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const certificates = [
    { title: "Terraform", src: "/certificates/terraform.jpg" },
    { title: "C++", src: "/certificates/c++_certificate.jpg" },
    { title: "Python", src: "/certificates/react_certificate.jpg" },
    { title: "React", src: "/certificates/python_certificate.jpg" },
  ];

  return (
    <section
      id="certificates"
      className="min-h-full pt-24 pb-20 sm:px-6 lg:px-8 overflow-hidden bg-gray-50 dark:bg-gray-900"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8 sm:mb-12"
      >
        {translations.certificates}
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="flex flex-wrap sm:grid sm:grid-cols-2  gap-6 px-0 md:px-24 justify-center md:justify-start items-center"
      >
        {certificates.map((cert, index) => (
          <AlertDialog key={index}>
            <AlertDialogTrigger asChild>
              <motion.div
                key={index}
                variants={childVariants}
                className="relative w-[400px] h-[300px] sm:h-[225px] sm:w-[300px] border border-accent dark:border-accent hover:border-none  bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group"
              >
                {/* Text in the middle */}
                <div className="cursor-pointer absolute inset-0 text-2xl font-semibold z-50 p-4 sm:p-8 md:p-6 group-hover:opacity-0 top-0 left-0 bg-green w-full h-full flex items-end justify-end text-accent transition-all duration-500 opacity-100">
                  {cert.title}
                </div>

                {/* Image appears on hover */}
                <motion.div className="border-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Image
                    src={cert.src}
                    alt={cert.title}
                    objectFit="cover"
                    className="rounded-lg"
                    height={225}
                    width={400}
                  />
                </motion.div>
              </motion.div>
            </AlertDialogTrigger>
            <VisuallyHidden.Root className="absolute inset-0 z-50 w-full">
              <AlertDialogTitle></AlertDialogTitle>
            </VisuallyHidden.Root>
            <AlertDialogContent className="fixed ml-4 flex-col items-center justify-center p-0 min-w-screen max-w-none bg-transparent border-none">
              <div className="flex flex-col items-center justify-center w-screen h-full">
                <Image
                  src={cert.src}
                  alt={cert.title}
                  className="rounded-lg object-contain w-full"
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 1000px"
                />
              </div>
              <AlertDialogCancel className="text-white text-3xl w-full items-end justify-end flex p-4 bg-transparent rounded-lg hover:bg-accent/80 transition-colors duration-300">
                X
              </AlertDialogCancel>
            </AlertDialogContent>
          </AlertDialog>
        ))}
      </motion.div>
    </section>
  );
};

export default Certificates;
