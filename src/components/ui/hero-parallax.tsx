"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Adjusted spring configuration for faster transitions
  const springConfig = { stiffness: 400, damping: 30, bounce: 0 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 500]), // Reduced range
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -500]), // Reduced range
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]), // Reduced rotation
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.3, 1]), // Slightly adjusted
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]), // Reduced rotation
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-300, 200]), // Reduced range
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-full py-4 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          // rotateX,
          // rotateZ,
          // translateY,
          // opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-2 mb-0 overflow-x-auto">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-0 space-x-2 overflow-x-auto">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-2 ">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-10 md:py-4 px-4 left-0 top-0">
      <h1 className="text-center text-xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
        <span className="text-blue-800 dark:text-white">Get Started Today</span>
      </h1>
      <p className="text-balance mb-10 mt-4 text-center text-muted-foreground md:text-lg lg:text-xl dark:text-white">
        Join our community and kickstart your career abroad. Sign up now to explore job opportunities around the world and start your journey toward success—no matter where you want to go.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -10, // Reduced hover effect
      }}
      key={product.title}
      className="group/product relative flex-shrink-0 w-full max-w-[200px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px]"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-md" // Reduced shadow effect
      >
        <Image
          src={product.thumbnail}
          layout="responsive"
          width={200} // Further reduced width
          height={200} // Further reduced height
          className="object-cover object-center"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-70 bg-white dark:bg-black pointer-events-none"></div> {/* Slightly adjusted opacity */}
      <h2 className="absolute bottom-2 left-2 opacity-0 group-hover/product:opacity-100 text-muted-foreground dark:text-white text-xs sm:text-sm md:text-base">
        {product.title}
      </h2>
    </motion.div>
  );
};


