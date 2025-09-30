'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const products = [
  {
    id: 1,
    name: 'TEMSIS MiniX',
    category: 'Portable X-ray System',
    description: 'Ultra-portable digital X-ray system with high-resolution imaging and wireless capabilities.',
    features: ['Wireless DR Panel', 'High-Resolution Imaging', 'Lightweight Design'],
    image: '/images/products/temsis-minix.jpg',
    href: '/products/temsis-minix',
  },
  {
    id: 2,
    name: 'DR-3000',
    category: 'Digital Radiography System',
    description: 'Advanced digital radiography system with AI-powered image enhancement and analysis.',
    features: ['AI-Powered Analysis', 'High-Speed Imaging', 'DICOM Compatible'],
    image: '/images/products/dr-3000.jpg',
    href: '/products/dr-3000',
  },
  {
    id: 3,
    name: 'Wireless DR Panel Pro',
    category: 'Wireless Detector',
    description: 'High-performance wireless DR panel with exceptional image quality and fast workflow integration.',
    features: ['Wireless Connectivity', 'High DQE', 'Durable Design'],
    image: '/images/products/wireless-dr-panel.jpg',
    href: '/products/wireless-dr-panel-pro',
  },
];

export function ProductsSection() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Medical Imaging Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover our range of advanced medical imaging equipment designed for accuracy, efficiency, and patient comfort.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                {/* Placeholder for product image */}
                <div className="flex h-full items-center justify-center bg-primary/5 p-8">
                  <span className="text-lg font-medium text-muted-foreground">
                    {product.name} Image
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button className="w-full" asChild>
                      <Link href={product.href}>View Details</Link>
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
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <svg
                        className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex items-center justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={product.href}>
                      Learn More
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="/contact">
                      Get a Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/products">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
