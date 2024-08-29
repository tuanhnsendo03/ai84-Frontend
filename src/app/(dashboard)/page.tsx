"use client";

import NavbarSimple from "@/app/_components/sections/navbar/navbar-simple";
import HeroWithPhoneMockup from "@/app/_components/sections/hero-sections/hero-with-phone-mockup";
import NewsletterCenteredCard from "@/app/_components/sections/newsletter-sections/newsletter-centered-card";
import NewsletterSideBySideOnCard from "@/app/_components/sections/newsletter-sections/newsletter-side-by-side-on-card";
import TestimonialsGrid from "@/app/_components/sections/testimonials/testimonials-grid";
import BannerWithButton from "@/app/_components/sections/banners/banner-with-button";
import BannerWithLink from "@/app/_components/sections/banners/banner-with-link";
import HeroSimpleCentered from "@/app/_components/sections/hero-sections/hero-simple-centered";
import HeroSplitWithImage from "@/app/_components/sections/hero-sections/hero-split-with-image";
import HeroSplitWithScreenshot from "@/app/_components/sections/hero-sections/hero-split-with-screenshot";
import HeroWithAngledImageOnRight from "@/app/_components/sections/hero-sections/hero-with-angled-image-on-right";
import HeroWithOffsetImage from "@/app/_components/sections/hero-sections/hero-with-offset-image";
import CtaWithAppScreenshot from "@/app/_components/sections/cta-sections/cta-with-app-screenshot";
import CtaSimpleCentered from "@/app/_components/sections/cta-sections/cta-simple-centered";
import CtaSimpleJustified from "@/app/_components/sections/cta-sections/cta-simple-justified";
import NewsletterSimpleSideBySide from "@/app/_components/sections/newsletter-sections/newsletter-simple-side-by-side";
import NewsletterSimpleStacked from "@/app/_components/sections/newsletter-sections/newsletter-simple-stacked";
import LogosSimpleWithHeading from "@/app/_components/sections/logo-clouds/logos-simple-with-heading";
import LogosSplitWithLogosOnRight from "@/app/_components/sections/logo-clouds/logos-split-with-logos-on-right";
import LogosSimple from "@/app/_components/sections/logo-clouds/logos-simple";
import TestimonialsOffWhiteGrid from "@/app/_components/sections/testimonials/testimonials-off-white-grid";
import FaqsOffsetWithSupportingText from "@/app/_components/sections/faqs/faqs-offset-with-supporting-text";
import FaqsCenteredAccordion from "@/app/_components/sections/faqs/faqs-centered-accordion";
import FooterSocialLinksOnly from "@/app/_components/sections/footers/footer-social-links-only";
import FooterSimpleCentered from "@/app/_components/sections/footers/footer-simple-centered";
import FooterFourColumnWithNewsletter from "@/app/_components/sections/footers/footer-four-column-with-newsletter";
import FooterFourColumnWithNewsletterBelow from "@/app/_components/sections/footers/footer-four-column-with-newsletter-below";
import FooterFourColumnWithCompanyMission from "@/app/_components/sections/footers/footer-four-column-with-company-mission";
import StatsSimple from "@/app/_components/sections/stats/stats-simple";
import StatsSimpleGrid from "@/app/_components/sections/stats/stats-simple-grid";
import StatsSplitWithImage from "@/app/_components/sections/stats/stats-split-with-image";
import StatsWithDescription from "@/app/_components/sections/stats/stats-with-description";
import CtaTwoColumnsWithPhoto from "@/app/_components/sections/cta-sections/cta-two-columns-with-photo";

import React, { FC } from "react";
import config from "@/settings.json";
import { TemplateTheme } from "@/app/_components/sections/base/ai-component-props";

const ComponentByName: Record<string, FC> = {
  NavbarSimple: NavbarSimple,
  HeroWithPhoneMockup: HeroWithPhoneMockup,
  NewsletterCenteredCard: NewsletterCenteredCard,
  NewsletterSideBySideOnCard: NewsletterSideBySideOnCard,
  TestimonialsGrid: TestimonialsGrid,
  BannerWithButton: BannerWithButton,
  BannerWithLink: BannerWithLink,
  HeroSimpleCentered: HeroSimpleCentered,
  HeroSplitWithImage: HeroSplitWithImage,
  HeroSplitWithScreenshot: HeroSplitWithScreenshot,
  HeroWithAngledImageOnRight: HeroWithAngledImageOnRight,
  HeroWithOffsetImage: HeroWithOffsetImage,
  CtaWithAppScreenshot: CtaWithAppScreenshot,
  CtaSimpleCentered: CtaSimpleCentered,
  CtaSimpleJustified: CtaSimpleJustified,
  NewsletterSimpleSideBySide: NewsletterSimpleSideBySide,
  NewsletterSimpleStacked: NewsletterSimpleStacked,
  LogosSimpleWithHeading: LogosSimpleWithHeading,
  LogosSplitWithLogosOnRight: LogosSplitWithLogosOnRight,
  LogosSimple: LogosSimple,
  TestimonialsOffWhiteGrid: TestimonialsOffWhiteGrid,
  FaqsOffsetWithSupportingText: FaqsOffsetWithSupportingText,
  FaqsCenteredAccordion: FaqsCenteredAccordion,
  FooterSocialLinksOnly: FooterSocialLinksOnly,
  FooterSimpleCentered: FooterSimpleCentered,
  FooterFourColumnWithNewsletter: FooterFourColumnWithNewsletter,
  FooterFourColumnWithNewsletterBelow: FooterFourColumnWithNewsletterBelow,
  FooterFourColumnWithCompanyMission: FooterFourColumnWithCompanyMission,
  StatsSimple: StatsSimple,
  StatsSimpleGrid: StatsSimpleGrid,
  StatsSplitWithImage: StatsSplitWithImage,
  StatsWithDescription: StatsWithDescription,
  CtaTwoColumnsWithPhoto: CtaTwoColumnsWithPhoto,
};

export default function Page() {
  const theme = config.theme as TemplateTheme;
  return (
    <main className={`h-full overflow-y-auto`}>
    
        <BannerWithLink theme={theme} />
    
        <StatsSimple theme={theme} />
    
        <NavbarSimple theme={theme} />
    
        <HeroWithOffsetImage theme={theme} />
    
        <TestimonialsGrid theme={theme} />
    
        <StatsSimpleGrid theme={theme} />
    
        <CtaSimpleCentered theme={theme} />
    
        <FaqsOffsetWithSupportingText theme={theme} />
    
        <NewsletterCenteredCard theme={theme} />
    
        <FooterSimpleCentered theme={theme} />
    
    </main>
  );
}
