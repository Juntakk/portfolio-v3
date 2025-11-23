import { Project } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Link from "next/link";
import ImageEffect from "./ImageEffect";

const ProjectCarousel = ({
  project,
  currentIndex,
}: {
  project: Project;
  currentIndex: number;
}) => {
  return (
    <Carousel className='w-full max-w-4xl mx-auto rounded-lg'>
      <CarouselContent>
        {project.screenShots.map((screenshot, index) => (
          <CarouselItem key={index}>
            <div>
              <Link
                href={project.demo ? project.demo : project.github || "#"}
                target='_blank'
                rel='noopener noreferrer'
              >
                <ImageEffect
                  sampleImg={screenshot}
                  currentIndex={currentIndex}
                />
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {project.screenShots.length > 1 ? (
        <>
          <CarouselPrevious className='hidden ml-2 sm:flex top-1/2 transform -translate-y-1/2 transition-colors duration-200 backdrop-blur-sm p-3 rounded-full shadow-lg dark:border-accent dark:text-primary dark:bg-accent dark:hover:bg-accent/70' />
          <CarouselNext className='hidden mr-2 sm:flex top-1/2 transform -translate-y-1/2 transition-colors duration-200 backdrop-blur-sm p-3 rounded-full shadow-lg dark:border-accent dark:text-primary dark:bg-accent dark:hover:bg-accent/70' />
        </>
      ) : (
        ""
      )}
    </Carousel>
  );
};

export default ProjectCarousel;
