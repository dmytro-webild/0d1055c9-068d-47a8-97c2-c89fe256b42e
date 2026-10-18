import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#hero"
  },
  {
    "name": "Collections",
    "href": "#products"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "Features",
    "href": "#features"
  },
  {
    "name": "Pricing",
    "href": "#pricing"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  }
];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="noise" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarCentered
      logo="Attaboy | أتابوي"
      ctaButton={{
        text: "Order Online",
        href: "https://linktr.ee",
      }}
     navItems={[
       { name: "Home", href: "#hero" },
       { name: "Menu", href: "#products" },
       { name: "About", href: "#about" },
       { name: "Reviews", href: "#testimonials" },
       { name: "Location", href: "#contact" }
     ]} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimple
      brand="CALI GLOW"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Sustainability",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#",
            },
            {
              label: "FAQs",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Cali Glow Skincare. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms of Service",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
