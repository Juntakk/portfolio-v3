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
    { title: "Python", src: "/certificates/python_certificate.jpg" },
    { title: "React", src: "/certificates/react_certificate.jpg" },
  ];

  return (
    <section
      id='certificates'
      className='min-h-full pt-24 pb-20 sm:px-6 lg:px-8 overflow-hidden bg-gray-50 dark:bg-gray-900'
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-200 text-center mb-8 sm:mb-12'
      >
        {translations.certificates}
      </motion.h2>

      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className='flex flex-wrap sm:grid sm:grid-cols-2  gap-6 px-0 md:px-24 justify-center md:justify-start items-center'
      >
        {certificates.map((cert, index) => (
          <AlertDialog key={index}>
            <AlertDialogTrigger asChild>
              <motion.div
                key={index}
                variants={childVariants}
                className='relative w-[95vw] sm:w-[300px] h-auto aspect-[4/3] hover:cursor-pointer border border-accent dark:border-accent hover:border-transparent bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group transition-all duration-300'
              >
                {/* Text in the middle */}
                <div className='absolute inset-0 z-20 flex items-end justify-end p-4 sm:p-6 md:p-8 text-2xl font-semibold text-accent bg-green transition-all duration-500 opacity-100 group-hover:opacity-0 rounded-lg'>
                  {cert.title}
                </div>

                {/* Image appears on hover */}
                <motion.div className='absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                  <Image
                    src={cert.src}
                    alt={cert.title}
                    className='object-contain w-full h-full rounded-lg'
                    width={450}
                    height={338}
                    sizes='(max-width: 768px) 90vw, 300px'
                    priority
                  />
                </motion.div>
              </motion.div>
            </AlertDialogTrigger>

            <VisuallyHidden.Root className=''>
              <AlertDialogTitle></AlertDialogTitle>
            </VisuallyHidden.Root>
            <AlertDialogContent className='border-none p-4 max-w-full md:max-w-3xl ml-4 w-full'>
              <AlertDialogCancel className='text-white hover:text-accent transition-all duration-300 ml-auto text-2xl border-none focus:border-none outline-none'>
                X
              </AlertDialogCancel>
              <div className='w-full flex justify-center'>
                <Image
                  src={cert.src}
                  alt={cert.title}
                  className='rounded-lg object-contain w-full h-auto'
                  width={1000}
                  height={600}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px'
                  priority
                />
              </div>
            </AlertDialogContent>
          </AlertDialog>
        ))}
      </motion.div>
    </section>
  );
};

export default Certificates;
