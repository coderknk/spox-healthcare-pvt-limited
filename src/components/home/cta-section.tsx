'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Icons } from '../icons';

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
      {/* Decorative elements */}
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20" />
      <div className="absolute -right-32 -top-32 -z-10 h-[400px] w-[400px] rounded-full bg-primary/20" />
      <div className="absolute -bottom-32 -left-32 -z-10 h-[300px] w-[300px] rounded-full bg-primary/20" />
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2 
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Medical Imaging?
          </motion.h2>
          
          <motion.p 
            className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join hundreds of healthcare providers who trust Spox Healthcare for their medical imaging needs. 
            Schedule a demo or request a quote today.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              size="lg" 
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <a href="/contact">
                Request a Demo
                <Icons.arrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="/contact#quote">
                Get a Quote
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" />
              <span>24/7 support</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          className="h-12 w-full text-background" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="currentColor"
            opacity=".25"
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            fill="currentColor"
            opacity=".5"
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,86c57.52-8.18,108.87-41.83,148.8-84.47V0Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
