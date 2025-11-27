"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";

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

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[200vh] sm:h-[300vh] py-20 sm:py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="flex flex-col items-center"
      >
        <motion.div className="flex flex-col sm:flex-row sm:flex-row-reverse sm:space-x-reverse sm:space-x-4 sm:mb-10 mb-6 justify-center">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-col sm:flex-row sm:mb-10 mb-6 space-x-0 sm:space-x-4 justify-center">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-col sm:flex-row sm:flex-row-reverse sm:space-x-reverse sm:space-x-4 justify-center">
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
    <div className="max-w-7xl relative mx-auto py-10 sm:py-20 px-4 w-full left-0 top-0">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300 leading-tight"
      >
        Discover Authentic <br /> Kyanite Gems
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl text-sm sm:text-base md:text-lg mt-4 sm:mt-8 text-gray-700 dark:text-gray-300"
      >
        Experience the beauty and healing properties of premium kyanite stones sourced directly from the mines of Nepal.
        Each piece is carefully selected for its unique crystalline structure and vibrant blue hues.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 sm:mt-10"
      >
        <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full p-0.5">
          <div className="bg-white dark:bg-gray-900 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">
            Ethically Sourced • Premium Quality • Natural Beauty
          </div>
        </div>
      </motion.div>
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
        y: -20,
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
      key={product.title}
      className="group/product h-80 w-64 sm:w-72 md:w-[30rem] relative shrink-0 rounded-3xl overflow-hidden shadow-2xl"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 z-10 rounded-3xl"></div>
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0 transition-transform duration-500 group-hover/product:scale-110"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-3xl opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4 sm:p-6"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/70 to-transparent rounded-3xl opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">
        <h2 className="text-white text-lg sm:text-xl font-semibold mb-2">{product.title}</h2>
        <div className="flex items-center">
          <span className="text-cyan-300 text-xs sm:text-sm">View details</span>
          <svg
            className="w-4 h-4 text-cyan-300 ml-1 group-hover/product:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};
