'use client';

import { motion } from 'framer-motion';
import { Icons } from '../icons';

const features = [
  {
    icon: <Icons.check className="h-8 w-8 text-primary" />,
    title: 'Advanced Imaging',
    description: 'High-resolution imaging with our state-of-the-art digital radiography systems for accurate diagnostics.',
  },
  {
    icon: <Icons.check className="h-8 w-8 text-primary" />,
    title: 'Portable Solutions',
    description: 'Lightweight and portable X-ray machines for point-of-care diagnostics in any setting.',
  },
  {
    icon: <Icons.check className="h-8 w-8 text-primary" />,
    title: 'AI-Powered Analysis',
    description: 'Leverage artificial intelligence for faster and more accurate image analysis and diagnosis.',
  },
  {
    icon: <Icons.check className="h-8 w-8 text-primary" />,
    title: 'Wireless Technology',
    description: 'Seamless wireless connectivity for efficient workflow and data management.',
  },
  {
    icon: <Icons.check className="h-8 w-8 text-primary" />,
    title: 'User-Friendly Interface',
    description: 'Intuitive controls and software for easy operation by healthcare professionals.',
  },
  {
    icon: <Icons.check className="h-8 w-8 text-primary" />,
    title: 'Regulatory Compliant',
    description: 'All our products meet international quality and safety standards for medical devices.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Innovative Features for Modern Healthcare
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our medical imaging solutions are designed with cutting-edge technology to provide the best diagnostic tools for healthcare professionals.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              
              {/* Decorative element */}
              <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-primary/5 transition-all duration-300 group-hover:scale-150" />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Want to learn more about our features?{' '}
            <a href="/contact" className="font-medium text-primary hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
