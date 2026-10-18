import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import FeaturesImageBento from "@/components/sections/features/FeaturesImageBento";

export default function ProductsSection() {
  return (
    <SectionErrorBoundary name="products">
      <div id="products">
        <FeaturesImageBento
          tag="Menu Highlights"
          title="Fast Food Masterpieces Crafted in Al Marwah"
          description="Explore our crowd-favorite burgers, wraps, and crispy sides made fresh daily on Hira Street, Jeddah."
          primaryButton={{
            text: "Order Now",
            href: "https://linktr.ee",
          }}
          secondaryButton={{
            text: "View Location",
            href: "#contact",
          }}
          textAnimation="slide-up"
          items={[
            {
              title: "Butter Chicken Burger",
              description: "Crispy chicken fillet dipped in rich butter chicken sauce with melted cheese and house pickles.",
              imageSrc: "",
            },
            {
              title: "Attaboy Chicken Wrap",
              description: "Warm tortilla stuffed with crispy chicken strips, garlic sauce, fresh lettuce, and cheddar.",
              imageSrc: "",
            },
            {
              title: "Loaded Cheese Fries",
              description: "Crispy golden fries drenched in hot melted cheese and signature Attaboy spice mix.",
              imageSrc: "",
            },
            {
              title: "Crispy Chicken Tenders",
              description: "Golden fried tender bites served with garlic mayonnaise and honey mustard sauce.",
              imageSrc: "",
            },
            {
              title: "Smokey BBQ Burger",
              description: "Double crispy chicken patty topped with smokey BBQ sauce, caramelized onions, and pickles.",
              imageSrc: "",
            },
            {
              title: "Spicy Dynamite Strips",
              description: "Tender chicken strips tossed in signature spicy dynamite sauce for a fiery bite.",
              imageSrc: "",
            },
            {
              title: "Thick & Creamy Shakes",
              description: "Indulgent hand-spun milkshakes served cold to complement your favorite fast food meals.",
              imageSrc: "",
            },
          ]}
        />
      </div>
    </SectionErrorBoundary>
  );
}