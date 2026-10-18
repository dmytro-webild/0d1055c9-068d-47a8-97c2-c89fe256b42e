import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Menu", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Location", href: "#contact" }
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
          navItems={navItems}
        />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimple
          brand="Attaboy | أتابوي"
          columns={[
            {
              title: "Quick Links",
              items: [
                { label: "Home", href: "#hero" },
                { label: "Menu", href: "#products" },
                { label: "About", href: "#about" },
              ],
            },
            {
              title: "Visit Us",
              items: [
                { label: "Hira Street, Al Marwah", href: "#contact" },
                { label: "Jeddah, Saudi Arabia", href: "#contact" },
              ],
            },
          ]}
          copyright="© 2024 Attaboy Restaurant. All rights reserved."
          links={[
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
          ]}
        />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}