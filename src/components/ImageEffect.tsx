// Import dependencies
import React, { MouseEvent, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

// ImageEffect component
const ImageEffect = ({ sampleImg }: { sampleImg: StaticImageData }) => {
  // State variables
  const [zoomable, setZoomable] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({
    x: 100,
    y: 100,
    mouseX: 0,
    mouseY: 0,
  });

  useEffect(() => {
    const handleMobile = () => {
      setIsMobile(window.innerWidth < 1025);
    };
    handleMobile();
  }, []);
  // Constants for magnifier size and zoom level
  const MAGNIFIER_SIZE = isMobile ? 0 : 350;
  const ZOOM_LEVEL = 1.55;
  // Event handlers
  const handleMouseEnter = (e: MouseEvent) => {
    const element = e.currentTarget;
    const { width, height } = element.getBoundingClientRect();
    setImageSize({ width, height });
    setZoomable(true);
    updatePosition(e);
  };

  const handleMouseLeave = (e: MouseEvent) => {
    setZoomable(false);
    updatePosition(e);
  };

  const handleMouseMove = (e: MouseEvent) => {
    updatePosition(e);
  };

  const updatePosition = (e: MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setPosition({
      x: -x * ZOOM_LEVEL + MAGNIFIER_SIZE / 2,
      y: -y * ZOOM_LEVEL + MAGNIFIER_SIZE / 2,
      mouseX: x - MAGNIFIER_SIZE / 2,
      mouseY: y - MAGNIFIER_SIZE / 2,
    });
  };

  // Render method
  return (
    <div className="flex justify-center items-center">
      <div
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden"
      >
        <Image
          src={sampleImg}
          alt={`Screenshot`}
          width={0}
          height={0}
          layout="responsive"
          className="rounded-lg border object-cover"
          quality={100}
        />
        <div
          style={{
            backgroundPosition: `${position.x}px ${position.y}px`,
            backgroundImage: `url(${sampleImg.src})`,
            backgroundSize: `${imageSize.width * ZOOM_LEVEL}px ${
              imageSize.height * ZOOM_LEVEL
            }px`,
            backgroundRepeat: "no-repeat",
            display: zoomable ? "block" : "none",
            top: `${position.mouseY}px`,
            left: `${position.mouseX}px`,
            width: `${MAGNIFIER_SIZE}px`,
            height: `${MAGNIFIER_SIZE}px`,
          }}
          className={`z-50 border-4 rounded-full pointer-events-none absolute border-gray-500`}
        />
      </div>
    </div>
  );
};

export default ImageEffect;
