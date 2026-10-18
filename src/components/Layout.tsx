import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
    { name: "الرئيسية", href: "#hero" },
    { name: "عن المصنع", href: "#about" },
    { name: "منتجاتنا", href: "#products" },
    { name: "المميزات", href: "#features" },
    { name: "آراء العملاء", href: "#testimonials" },
    { name: "اتصل بنا", href: "#contact" }
  ];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="noise" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarCentered
          logo="شركة المتولي للمنتجات الفولاذية"
          ctaButton={{
            text: "تواصل معنا",
            href: "tel:0126369088",
          }}
          navItems={navItems}
        />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimple
          brand="مصنع شركة المتولي للمنتجات الفولاذية"
          columns={[
            {
              title: "روابط سريعة",
              items: [
                { label: "الرئيسية", href: "#hero" },
                { label: "عن المصنع", href: "#about" },
                { label: "منتجات الفولاذ", href: "#products" },
                { label: "التسهيلات الماليّة", href: "#pricing" },
              ],
            },
            {
              title: "الموقع والتواصل",
              items: [
                { label: "حي الجوهرة، جدة 22426", href: "#contact" },
                { label: "هاتف: 0126369088", href: "tel:0126369088" },
                { label: "الموقع: msp.com.sa", href: "https://msp.com.sa" },
              ],
            },
          ]}
          copyright="© 2025 مصنع شركة المتولي للمنتجات الفولاذية. جميع الحقوق محفوظة."
          links={[
            { label: "سياسة الخصوصية", href: "#" },
            { label: "الشروط والأحكام", href: "#" },
          ]}
        />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}