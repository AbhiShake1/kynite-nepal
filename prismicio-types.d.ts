// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice = HeroSlice;

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

export type AllDocumentTypes = HomeDocument;

/**
 * Primary content in *CallToAction → Default → Primary*
 */
export interface CallToActionSliceDefaultPrimary {
  /**
   * Image field in *CallToAction → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * title field in *CallToAction → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * paragraph field in *CallToAction → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.default.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * buttonLink field in *CallToAction → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Redirect URL for CTA button
   * - **API ID Path**: call_to_action.default.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField;

  /**
   * buttonLabel field in *CallToAction → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for CTA button
   * - **API ID Path**: call_to_action.default.primary.buttonLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttonLabel: prismic.KeyTextField;
}

/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CallToActionSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *CallToAction → AlignLeft → Primary*
 */
export interface CallToActionSliceAlignLeftPrimary {
  /**
   * Image field in *CallToAction → AlignLeft → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.alignLeft.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * title field in *CallToAction → AlignLeft → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.alignLeft.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * paragraph field in *CallToAction → AlignLeft → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.alignLeft.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * buttonLink field in *CallToAction → AlignLeft → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Redirect URL for CTA button
   * - **API ID Path**: call_to_action.alignLeft.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField;

  /**
   * buttonLabel field in *CallToAction → AlignLeft → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for CTA button
   * - **API ID Path**: call_to_action.alignLeft.primary.buttonLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttonLabel: prismic.KeyTextField;
}

/**
 * AlignLeft variation for CallToAction Slice
 *
 * - **API ID**: `alignLeft`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceAlignLeft = prismic.SharedSliceVariation<
  "alignLeft",
  Simplify<CallToActionSliceAlignLeftPrimary>,
  never
>;

/**
 * Slice variation for *CallToAction*
 */
type CallToActionSliceVariation =
  | CallToActionSliceDefault
  | CallToActionSliceAlignLeft;

/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: CallToAction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSlice = prismic.SharedSlice<
  "call_to_action",
  CallToActionSliceVariation
>;

/**
 * Item in *HomeHero → Default → Primary → ctaButtons*
 */
export interface FeaturedProductsSliceDefaultPrimaryCtabuttonsItem {
  /**
   * ctaButton field in *HomeHero → Default → Primary → ctaButtons*
   *
   * - **Field Type**: Link
   * - **Placeholder**: /shop
   * - **API ID Path**: featured_products.default.primary.ctabuttons[].ctabutton
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  ctabutton: prismic.LinkField;
}

/**
 * Primary content in *HomeHero → Default → Primary*
 */
export interface FeaturedProductsSliceDefaultPrimary {
  /**
   * title field in *HomeHero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_products.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *HomeHero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_products.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * imageUrl field in *HomeHero → Default → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: https://t3.ftcdn.net/jpg/09/35/35/74/360_F_935357401_HqLmEodQnYeiUqxhOA33n9NXwahMb0EQ.jpg
   * - **API ID Path**: featured_products.default.primary.imageurl
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  imageurl: prismic.LinkToMediaField;

  /**
   * ctaButtons field in *HomeHero → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_products.default.primary.ctabuttons[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  ctabuttons: prismic.GroupField<
    Simplify<FeaturedProductsSliceDefaultPrimaryCtabuttonsItem>
  >;
}

/**
 * Default variation for HomeHero Slice
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
 * Slice variation for *HomeHero*
 */
type FeaturedProductsSliceVariation = FeaturedProductsSliceDefault;

/**
 * HomeHero Shared Slice
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
      AllDocumentTypes,
      CallToActionSlice,
      CallToActionSliceDefaultPrimary,
      CallToActionSliceAlignLeftPrimary,
      CallToActionSliceVariation,
      CallToActionSliceDefault,
      CallToActionSliceAlignLeft,
      FeaturedProductsSlice,
      FeaturedProductsSliceDefaultPrimaryCtabuttonsItem,
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
