import { Button } from "@/components/ui/button";
import { type Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { ArrowRight, ChevronsRight, ShoppingCart } from "lucide-react";
import Link from "next/link";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  return <section className="py-12 md:py-24 lg:py-32 xl:py-48">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-900">
              <PrismicRichText field={slice.primary.title} />
            </h1>
            <p className="max-w-[600px] text-blue-800 md:text-xl">
              <PrismicRichText field={slice.primary.description} />
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild>
              <Link href="/shop" className="gap-2">
                <ShoppingCart />
                <span>Shop Now</span>
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/about" className="gap-2">
                <span>Learn More</span>
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
        <div className="backdrop-blur-md bg-white/30 rounded-xl p-2">
          <PrismicNextImage
            field={slice.primary.image}
            // alt="Featured Kyanite Necklace"
            className="mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center sm:w-full lg:order-last"
            height="550"
            // src="/placeholder.svg?height=550&width=400"
            width="400"
          />
        </div>
      </div>
    </div>
  </section >
};

export default Hero;
