import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutUsSection`.
 */
export type AboutUsSectionProps =
  SliceComponentProps<Content.AboutUsSectionSlice>;

/**
 * Component for "AboutUsSection" Slices.
 */
const AboutUsSection = ({ slice }: AboutUsSectionProps): JSX.Element => {
  return <section className="w-full py-12 md:py-24 lg:py-32 backdrop-blur-sm bg-blue-500/10">
    <div className="container px-4 md:px-6 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-blue-900">
        <PrismicRichText field={slice.primary.title} />
      </h2>
      <p className="mx-auto max-w-[700px] text-blue-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
        <PrismicRichText field={slice.primary.description} />
      </p>
    </div>
  </section>
};

export default AboutUsSection;
