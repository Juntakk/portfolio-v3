"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const ImageEffect = ({
  sampleImg,
  currentIndex,
}: {
  sampleImg: StaticImageData;
  currentIndex: number;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [currentIndex, sampleImg]);

  return (
    <div className='flex justify-center items-center w-full'>
      <div className='relative w-full overflow-hidden rounded-lg'>
        {/* Loader */}
        {isLoading && (
          <div className='absolute inset-0 z-10 flex items-center justify-center bg-primary animate-pulse rounded-lg'>
            <Loader2 size={60} className='animate-spin text-accent' />
          </div>
        )}

        {/* Image */}
        <Image
          src={sampleImg}
          alt='Screenshot'
          layout='responsive'
          className={cn(
            "object-cover rounded-lg transition-opacity duration-500",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          quality={100}
          onLoad={() => {
            setTimeout(() => setIsLoading(false), 200);
          }}
          priority={false}
        />
      </div>
    </div>
  );
};

export default ImageEffect;
