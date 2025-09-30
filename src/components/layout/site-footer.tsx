import Link from 'next/link';
import { Icons } from '@/components/icons';

const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'Portable X-ray Machines', href: '/products/portable-xray' },
      { name: 'Digital Radiography Systems', href: '/products/digital-radiography' },
      { name: 'Wireless DR Panels', href: '/products/wireless-dr-panels' },
      { name: 'AI Diagnostic Equipment', href: '/products/ai-diagnostics' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Sitemap', href: '/sitemap.xml' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Documentation', href: '/support/documentation' },
      { name: 'FAQs', href: '/support/faqs' },
      { name: 'Help Center', href: '/support/help-center' },
      { name: 'Service Request', href: '/support/service-request' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Icons.logo className="h-10 w-10" />
              <span className="text-xl font-bold">Spox Healthcare</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Leading manufacturer of advanced medical imaging equipment and diagnostic solutions. 
              Empowering healthcare professionals with cutting-edge technology for better patient outcomes.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Facebook</span>
                <Icons.facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <Icons.twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Instagram</span>
                <Icons.instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">LinkedIn</span>
                <Icons.linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">YouTube</span>
                <Icons.youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Spox Healthcare Private Limited. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
