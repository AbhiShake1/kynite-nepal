// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice =
  | FeaturedProductsSlice
  | AboutUsSectionSlice
  | HeroSlice;

/**
 * Content for home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Title field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Content for Product documents
 */
interface ProductDocumentData {
  /**
   * image field in *Product*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * title field in *Product*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Product*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * price field in *Product*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: product.price
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  price: prismic.NumberField;

  /**
   * category field in *Product*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: product.category
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  category: prismic.SelectField<"necklace" | "earring" | "bracelet" | "raw">;
}

/**
 * Product document from Prismic
 *
 * - **API ID**: `product`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProductDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProductDocumentData>,
    "product",
    Lang
  >;

type ShopDocumentDataSlicesSlice = never;

/**
 * Content for shop documents
 */
interface ShopDocumentData {
  /**
   * Slice Zone field in *shop*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: shop.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ShopDocumentDataSlicesSlice> /**
   * Meta Title field in *shop*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: shop.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *shop*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: shop.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *shop*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: shop.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * shop document from Prismic
 *
 * - **API ID**: `shop`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ShopDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<ShopDocumentData>, "shop", Lang>;

export type AllDocumentTypes = HomeDocument | ProductDocument | ShopDocument;

/**
 * Primary content in *AboutUsSection → Default → Primary*
 */
export interface AboutUsSectionSliceDefaultPrimary {
  /**
   * title field in *AboutUsSection → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us_section.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *AboutUsSection → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us_section.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for AboutUsSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutUsSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutUsSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutUsSection*
 */
type AboutUsSectionSliceVariation = AboutUsSectionSliceDefault;

/**
 * AboutUsSection Shared Slice
 *
 * - **API ID**: `about_us_section`
 * - **Description**: AboutUsSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutUsSectionSlice = prismic.SharedSlice<
  "about_us_section",
  AboutUsSectionSliceVariation
>;

/**
 * Item in *FeaturedProducts → Default → Primary → products*
 */
export interface FeaturedProductsSliceDefaultPrimaryProductsItem {
  /**
   * product field in *FeaturedProducts → Default → Primary → products*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_products.default.primary.products[].product
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  product: prismic.ContentRelationshipField<"product">;
}

/**
 * Primary content in *FeaturedProducts → Default → Primary*
 */
export interface FeaturedProductsSliceDefaultPrimary {
  /**
   * title field in *FeaturedProducts → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_products.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * products field in *FeaturedProducts → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_products.default.primary.products[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  products: prismic.GroupField<
    Simplify<FeaturedProductsSliceDefaultPrimaryProductsItem>
  >;
}

/**
 * Default variation for FeaturedProducts Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedProductsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturedProductsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FeaturedProducts*
 */
type FeaturedProductsSliceVariation = FeaturedProductsSliceDefault;

/**
 * FeaturedProducts Shared Slice
 *
 * - **API ID**: `featured_products`
 * - **Description**: FeaturedProducts
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedProductsSlice = prismic.SharedSlice<
  "featured_products",
  FeaturedProductsSliceVariation
>;

/**
 * Item in *Hero → Image Right → Primary → cta*
 */
export interface HeroSliceImageRightPrimaryCtaItem {
  /**
   * ctaLink field in *Hero → Image Right → Primary → cta*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.cta[].ctalink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  ctalink: prismic.LinkField;

  /**
   * ctaLabel field in *Hero → Image Right → Primary → cta*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.cta[].ctalabel
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  ctalabel: prismic.RichTextField;
}

/**
 * Primary content in *Hero → Image Right → Primary*
 */
export interface HeroSliceImageRightPrimary {
  /**
   * title field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * cta field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.cta[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  cta: prismic.GroupField<Simplify<HeroSliceImageRightPrimaryCtaItem>>;
}

/**
 * Image Right variation for Hero Slice
 *
 * - **API ID**: `imageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceImageRight = prismic.SharedSliceVariation<
  "imageRight",
  Simplify<HeroSliceImageRightPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceImageRight;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      ProductDocument,
      ProductDocumentData,
      ShopDocument,
      ShopDocumentData,
      ShopDocumentDataSlicesSlice,
      AllDocumentTypes,
      AboutUsSectionSlice,
      AboutUsSectionSliceDefaultPrimary,
      AboutUsSectionSliceVariation,
      AboutUsSectionSliceDefault,
      FeaturedProductsSlice,
      FeaturedProductsSliceDefaultPrimaryProductsItem,
      FeaturedProductsSliceDefaultPrimary,
      FeaturedProductsSliceVariation,
      FeaturedProductsSliceDefault,
      HeroSlice,
      HeroSliceImageRightPrimaryCtaItem,
      HeroSliceImageRightPrimary,
      HeroSliceVariation,
      HeroSliceImageRight,
    };
  }
}
