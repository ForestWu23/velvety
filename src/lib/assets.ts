/**
 * Centralised asset registry. All image references in the app should go
 * through this module so that filename changes are a single edit.
 *
 * Vite resolves the BASE_URL prefix automatically (matches `vite.config.ts`
 * `base: '/velvety/'`). In dev, this is just '/'.
 */

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const url = (file: string) => `${base}/assets/images/${file}`;

export const assets = {
  // Brand
  logoLong: url('logoLong.png'),
  logoSmall: url('logoSmall.png'),
  logoSmall2: url('logoSmall2.png'),

  // Hero
  homepageBanner: url('HomepageBanner.png'),
  homepageBannerGif: url('homebannergif.gif'),

  // Who We Are
  whoWeAreImage: url('whoWeAreImage.jpg'),
  whoWeAreBg: url('WhoWeAreBGImage.png'),

  // Three feature cards
  creativeAgencyImage: url('CreativeAgencyImage.png'),
  qualityWorkImage: url('QualityWorkImage.png'),
  professionalTeamImage: url('ProfessionalTeamImage.png'),
  creativeAgencyIcon: url('CreativeAgencyIcon.png'),
  qualityWorkIcon: url('qualityWorkIcon.png'),
  professionalTeamIcon: url('ProfessionalTeamIcon.png'),

  // Services
  ourServicesImage: url('ourServicesImage.png'),
  brandIdentityIcon: url('BrandIdentityIcon.png'),
  webProductIcon: url('WebProductIcon.png'),
  packagingPrintIcon: url('PackagingPrintIcon.png'),
  socialMediaAssetsIcon: url('SocialMediaAssetsIcon.png'),

  // Case studies
  buyerfolioImage: url('BuyerfolioImage.png'),
  nutriBitesImage: url('NutriBitesImage.png'),

  // Testimonials
  clientCommentImage1: url('ClientCommentImage1.png'),
  clientCommentImage2: url('ClientCommentImage2.png'),

  // Clients strip
  thriveLogo: url('ThriveLogo.png'),
  huagenLogo: url('HuagenLogo5x5.png'),
  majorPetsLogo: url('MajorPetsLogo.png'),
  homeLinkLogo: url('HomeLinkLogo.jpg'),

  // CTA
  brightRightImage: url('BrightRightImage.png'),
} as const;

export type AssetKey = keyof typeof assets;
