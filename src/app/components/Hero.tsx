"use client";
import { useRef, useState, useEffect } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };
  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos + 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath:
        "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",

      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
  const getVideoSrc = (index: number) => `/videos/hero-u-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-hidden">
      {/* {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )} */}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVideoClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                onLoadedData={handleVideoLoad}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
              />
            </div>
          </div>
          <video
            loop
            muted
            id="next-video"
            className="absolute-center invisible z-20 size-64 object-cover object-center"
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            onLoad={handleVideoLoad}
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            onLoadedData={handleVideoLoad}
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-linen-100 difference">
          & Respect Others
        </h1>
      </div>
      <div className="absolute left-0 top-0 z-40">
        <div className="mt-24 px-5 sm:px-10">
          <h1 className="special-font hero-heading text-linen-100 difference">
            Love <b>Y</b>ourself
          </h1>
          <p className="mb-5 max-w-64 font-robert-regular text-lg text-linen-200">
            Love is a powerful force <br /> that can heal any wound.
          </p>
          <Button
            id="watch-trailer"
            title="Learn More"
            leftIcon={<TiLocationArrow />}
            containerClass="bg-vanilla-100 flex-center gap-1 mt-10"
          />
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-raisin-black">
        & <b>R</b>espect Others
      </h1>
    </div>
  );
};

export default Hero;