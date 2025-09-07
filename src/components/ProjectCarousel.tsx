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
    <Carousel className='w-full max-w-2xl mx-auto rounded-lg mt-2'>
      <CarouselContent>
        {project.screenShots.map((screenshot, index) => (
          <CarouselItem key={index}>
            <div className='p-2'>
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
          <CarouselPrevious className='hidden ml-2 sm:flex top-1/2 transform -translate-y-1/2 text-primary dark:text-accent hover:text-primary dark:hover:text-primary transition-colors duration-200 bg-accent/80 dark:bg-card/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-accent/90 dark:hover:bg-accent border border-accent dark:border-border' />
          <CarouselNext className='hidden mr-2 sm:flex top-1/2 transform -translate-y-1/2 text-primary dark:text-accent hover:text-primary dark:hover:text-primary transition-colors duration-200 bg-accent/80 dark:bg-card/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-accent/90 dark:hover:bg-accent border border-muted dark:border-border' />
        </>
      ) : (
        ""
      )}
    </Carousel>
  );
};

export default ProjectCarousel;
