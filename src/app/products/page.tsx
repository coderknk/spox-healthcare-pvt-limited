import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const metadata = {
  title: 'Our Products | Spox Healthcare',
  description: 'Explore our range of advanced medical imaging and diagnostic equipment.',
};

const products = [
  {
    id: 1,
    name: 'TEMSIS MiniX',
    category: 'Portable X-ray System',
    description: 'Ultra-portable digital X-ray system with high-resolution imaging and wireless capabilities.',
    features: [
      'Wireless DR Panel',
      'High-Resolution Imaging',
      'Lightweight Design',
      'Battery Operated',
      'DICOM Compatible'
    ],
    image: '/images/products/temsis-minix.jpg',
    href: '/products/temsis-minix',
  },
  {
    id: 2,
    name: 'DR-3000',
    category: 'Digital Radiography System',
    description: 'Advanced digital radiography system with AI-powered image enhancement and analysis.',
    features: [
      'AI-Powered Analysis',
      'High-Speed Imaging',
      'DICOM Compatible',
      'Multi-format Export',
      'User-friendly Interface'
    ],
    image: '/images/products/dr-3000.jpg',
    href: '/products/dr-3000',
  },
  {
    id: 3,
    name: 'Wireless DR Panel Pro',
    category: 'Wireless Detector',
    description: 'High-performance wireless DR panel with exceptional image quality and fast workflow integration.',
    features: [
      'Wireless Connectivity',
      'High DQE',
      'Durable Design',
      'Fast Image Acquisition',
      'Compatible with Multiple Systems'
    ],
    image: '/images/products/wireless-dr-panel.jpg',
    href: '/products/wireless-dr-panel-pro',
  },
  {
    id: 4,
    name: 'AI-Rad Suite',
    category: 'AI Diagnostic Software',
    description: 'Comprehensive AI-powered diagnostic software suite for advanced medical imaging analysis.',
    features: [
      'Automated Analysis',
      'Multiple Modality Support',
      'Cloud Integration',
      'Real-time Processing',
      'Customizable Workflows'
    ],
    image: '/images/products/ai-rad-suite.jpg',
    href: '/products/ai-rad-suite',
  },
];

export default function ProductsPage() {
  return (
    <div className="container py-16 lg:py-24">
      <div className="mx-auto max-w-4xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Our Products
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Innovative medical imaging solutions designed for accuracy, efficiency, and patient comfort.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md">
            <div className="relative h-64 overflow-hidden bg-muted">
              <div className="flex h-full items-center justify-center bg-primary/5 p-8">
                <span className="text-lg font-medium text-muted-foreground">
                  {product.name} Image
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute bottom-4 left-4 right-4">
                  <Button className="w-full" asChild>
                    <a href={product.href}>
                      View Details
                    </a>
                  </Button>
                </div>
              </div>
              <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                {product.category}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="mt-2 text-muted-foreground">{product.description}</p>
              
              <div className="mt-4 space-y-2">
                {product.features.slice(0, 3).map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <Icons.check className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                {product.features.length > 3 && (
                  <div className="text-sm text-muted-foreground">
                    +{product.features.length - 3} more features
                  </div>
                )}
              </div>
              
              <div className="mt-6 flex items-center justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={product.href}>
                    Learn More
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href="/contact">
                    Get a Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 rounded-2xl bg-primary/5 p-12 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Looking for something specific?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our team of experts can help you find the perfect solution for your healthcare facility's needs.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <a href="/contact">
                Contact Our Sales Team
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
