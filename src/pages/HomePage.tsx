import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import PricingHighlightedCards from '@/components/sections/pricing/PricingHighlightedCards';
import TestimonialRatingCards from '@/components/sections/testimonial/TestimonialRatingCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardCarousel
      tag="Luxury Skincare"
      title="Natural Glow, Every Single Day"
      description="Experience our artisanal formulas designed to nourish, protect, and revitalize your skin naturally."
      primaryButton={{
        text: "Shop Now",
        href: "#products",
      }}
      secondaryButton={{
        text: "Our Story",
        href: "#about",
      }}
      items={[
        {
          imageSrc: "https://images.pexels.com/photos/11757209/pexels-photo-11757209.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/8361433/pexels-photo-8361433.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/6767763/pexels-photo-6767763.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/20176612/pexels-photo-20176612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/13095140/pexels-photo-13095140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/34544440/pexels-photo-34544440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="Crafted with Intent"
      descriptions={[
        "We believe in the power of nature to restore and nurture the skin. Every formula is carefully curated with sustainably sourced botanicals, ensuring quality you can trust.",
        "Our mission is simple: to make effective, premium-grade skincare accessible without compromising on ethics or sustainability. We source every ingredient with a focus on potency and purity.",
        "Join our journey towards a cleaner, more radiant future. Your skin deserves the very best nature has to offer.",
      ]}
      primaryButton={{
        text: "Our Ingredients",
        href: "#features",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesBentoGrid
      tag="Our Values"
      title="Pure Ingredients, Proven Results"
      description="We don't just formulate skincare; we build lasting trust through quality and transparency."
      features={[
        {
          title: "Botanical Sourced",
          description: "100% natural, plant-derived active ingredients for maximum potency.",
          imageSrc: "https://images.pexels.com/photos/12255178/pexels-photo-12255178.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Dermatology Tested",
          description: "Formulated by experts and rigorously tested for sensitive skin efficacy.",
          imageSrc: "https://images.pexels.com/photos/10187993/pexels-photo-10187993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Clinical Efficacy",
          description: "Results you can see and feel, validated by real-world consumer studies.",
          imageSrc: "https://images.pexels.com/photos/8376223/pexels-photo-8376223.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Sustainable Packaging",
          description: "Refillable glass vessels that respect our planet and your routine.",
          imageSrc: "https://images.pexels.com/photos/5911996/pexels-photo-5911996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="products" data-section="products">
    <SectionErrorBoundary name="products">
          <FeaturesImageBento
      tag="Shop Collections"
      title="Curated Essentials"
      description="Transform your routine with our high-performance bestsellers."
      items={[
        {
          title: "Deep Hydration Cream",
          description: "Rich, creamy nourishment.",
          imageSrc: "https://images.pexels.com/photos/7795402/pexels-photo-7795402.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Radiant Face Oil",
          description: "Instant glow, deep repair.",
          imageSrc: "https://images.pexels.com/photos/34939749/pexels-photo-34939749.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Gentle Cleanser",
          description: "Refreshing purity.",
          imageSrc: "https://images.pexels.com/photos/8154390/pexels-photo-8154390.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Exfoliation Mask",
          description: "Smooth, refined texture.",
          imageSrc: "https://images.pexels.com/photos/7622921/pexels-photo-7622921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Sun Shield SPF",
          description: "Daily ultimate protection.",
          imageSrc: "https://images.pexels.com/photos/8101512/pexels-photo-8101512.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Night Repair Balm",
          description: "Overnight restoration.",
          imageSrc: "https://images.pexels.com/photos/8129891/pexels-photo-8129891.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Toning Mist",
          description: "Calm, hydrating refresh.",
          imageSrc: "https://images.pexels.com/photos/6728397/pexels-photo-6728397.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingHighlightedCards
      tag="Join The Glow"
      title="Start Your Ritual"
      description="Choose your journey to radiant skin with our tailored subscription options."
      plans={[
        {
          tag: "Essentials",
          price: "$45",
          description: "One-time purchase for your daily routine.",
          features: [
            "Full size moisturizer",
            "Cleanser included",
            "Sustainable packaging",
          ],
          primaryButton: {
            text: "Select",
            href: "#",
          },
        },
        {
          tag: "Complete Ritual",
          price: "$89",
          description: "The full suite for complete skin transformation.",
          features: [
            "Full routine kit",
            "Face oil serum included",
            "Free shipping",
            "Bonus travel set",
          ],
          highlight: "Most Popular",
          primaryButton: {
            text: "Subscribe Now",
            href: "#",
          },
        },
        {
          tag: "Pro Care",
          price: "$129",
          description: "For those serious about total skin health.",
          features: [
            "VIP access to new drops",
            "Concierge support",
            "Quarterly mystery gift",
          ],
          primaryButton: {
            text: "Select",
            href: "#",
          },
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Our Impact"
      title="Results You Can Trust"
      description="Real impact across thousands of routines globally."
      metrics={[
        {
          value: "4.9/5",
          title: "Customer Satisfaction",
          features: [
            "Based on 10k reviews",
            "98% repeat customers",
          ],
        },
        {
          value: "95%",
          title: "Visible Glow",
          features: [
            "Clinically proven in 2 weeks",
            "High customer satisfaction",
          ],
        },
        {
          value: "100%",
          title: "Natural Ingredients",
          features: [
            "Sustainable source",
            "Cruelty-free guarantee",
          ],
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialRatingCards
      tag="Testimonials"
      title="Words from Our Community"
      description="Join thousands of satisfied customers who have unlocked their natural radiance."
      testimonials={[
        {
          name: "Sarah J.",
          role: "Creative Director",
          quote: "The glow is absolutely real. My skin has never felt this hydrated and soft.",
          rating: 5,
          imageSrc: "https://images.pexels.com/photos/20408694/pexels-photo-20408694.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Michael L.",
          role: "Architect",
          quote: "Finally found a routine that works perfectly for my sensitive skin.",
          rating: 5,
          imageSrc: "https://images.pexels.com/photos/37540946/pexels-photo-37540946.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Elena R.",
          role: "Entrepreneur",
          quote: "The texture and quality of these formulas are unparalleled in the market.",
          rating: 5,
          imageSrc: "https://images.pexels.com/photos/6847847/pexels-photo-6847847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "David K.",
          role: "Product Designer",
          quote: "Efficient, natural, and incredibly effective. My new daily standard.",
          rating: 5,
          imageSrc: "https://images.pexels.com/photos/34299108/pexels-photo-34299108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Nina M.",
          role: "Lifestyle Blogger",
          quote: "Simply the best glow I've experienced in years of skincare testing.",
          rating: 5,
          imageSrc: "https://images.pexels.com/photos/7582123/pexels-photo-7582123.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Questions?"
      title="Need Help? Find Answers"
      description="Frequently asked questions to help you understand our process better."
      categories={[
        {
          name: "Ingredients",
          items: [
            {
              question: "Are your ingredients organic?",
              answer: "Yes, we prioritize organic, plant-based botanicals in all formulations.",
            },
            {
              question: "Is it tested on animals?",
              answer: "Never. We are 100% cruelty-free and vegan-friendly.",
            },
          ],
        },
        {
          name: "Routine",
          items: [
            {
              question: "How do I start my routine?",
              answer: "Start with our Essentials set for a simple 3-step introduction.",
            },
            {
              question: "How long until I see results?",
              answer: "Most customers report seeing visible improvement within 14 days.",
            },
          ],
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get in touch"
      text="Ready to unlock your natural radiance? Reach out to our expert team for personalized guidance."
      primaryButton={{
        text: "Contact Support",
        href: "#",
      }}
      secondaryButton={{
        text: "Follow Us",
        href: "#",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
