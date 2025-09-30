'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Icons } from '../icons';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div className="container relative z-10 py-24 md:py-32 lg:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-center lg:text-left">
            <motion.h1 
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Revolutionizing <span className="text-primary">Medical Imaging</span> with AI
            </motion.h1>
            
            <motion.p 
              className="text-lg text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Advanced diagnostic solutions for healthcare professionals. Experience the future of medical imaging with our cutting-edge portable X-ray and digital radiography systems.
            </motion.p>
            
            <motion.div 
              className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" className="px-8 py-6 text-lg" asChild>
                <Link href="/products">
                  Explore Products
                  <Icons.arrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg" asChild>
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-sm text-muted-foreground">Trusted by leading hospitals and clinics worldwide</p>
              <div className="mt-4 flex flex-wrap justify-center gap-8 opacity-70 lg:justify-start">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-24 bg-muted">
                    {/* Replace with actual client logos */}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 -left-8 -right-8 rounded-t-full bg-primary/10 lg:-left-16 lg:-right-16">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
                  {/* Hero image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-full rounded-full bg-primary/20"></div>
                  </div>
                  
                  {/* Floating elements */}
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute h-16 w-16 rounded-full bg-white shadow-lg"
                      style={{
                        top: `${Math.random() * 60 + 20}%`,
                        left: `${Math.random() * 60 + 20}%`,
                      }}
                      animate={{
                        y: [0, 15, 0],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                        delay: i * 0.5,
                      }}
                    >
                      <div className="flex h-full w-full items-center justify-center">
                        <Icons.check className="h-6 w-6 text-primary" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
