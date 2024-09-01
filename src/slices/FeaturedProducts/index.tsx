import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createClient } from "@/prismicio";
import { Content, ContentRelationshipField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FeaturedProducts`.
 */
export type FeaturedProductsProps =
  SliceComponentProps<Content.FeaturedProductsSlice>;

/**
 * Component for "FeaturedProducts" Slices.
 */
const FeaturedProducts = async ({ slice }: FeaturedProductsProps) => {
  const products = slice.primary.products

  if (products.length === 0) return null

  return <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-blue-900">
        <PrismicRichText field={slice.primary.title} />
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {
          products.map(({ product }) => <FeaturedProductCard product={product} />)
        }
      </div>
    </div>
  </section>
};

async function FeaturedProductCard({ product }: { product: ContentRelationshipField<"product"> }) {
  const client = createClient()
  // @ts-expect-error uid exists
  const { data: { title, description, image }, id } = await client.getByUID("product", product.uid)

  return <Card key={id} className="backdrop-blur-md bg-white/30 border-white/20 overflow-hidden">
    <CardContent className="p-4">
      <PrismicNextImage field={image} />
      <h3 className="text-lg font-bold mt-2 text-blue-900">
        <PrismicRichText field={title} />
      </h3>
      <p className="text-sm text-blue-700">
        <PrismicRichText field={description} />
      </p>
      <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">View Details</Button>
    </CardContent>
  </Card>
}

export default FeaturedProducts;
