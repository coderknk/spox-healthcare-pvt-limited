'use client';

import { motion } from 'framer-motion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Radiology Department Head',
    hospital: 'Metro Health Hospital, Delhi',
    content: 'The TEMSIS MiniX has revolutionized our mobile imaging services. The image quality is exceptional, and the wireless functionality has significantly improved our workflow efficiency.',
    rating: 5,
    initials: 'SJ',
  },
  {
    id: 2,
    name: 'Dr. Rajesh Kumar',
    role: 'Chief Radiologist',
    hospital: 'Apollo Hospitals, Mumbai',
    content: 'We\'ve been using the TEMSIS MiniX for six months now, and it has exceeded our expectations. The portability is unmatched, and the image quality is on par with our stationary units.',
    rating: 5,
    initials: 'RK',
  },
  {
    id: 3,
    name: 'Dr. Priya Singh',
    role: 'Emergency Medicine Specialist',
    hospital: 'Fortis Hospital, Bangalore',
    content: 'In emergency situations, every second counts. The TEMSIS MiniX allows us to get high-quality X-rays at the patient\'s bedside, which has been a game-changer for our trauma unit.',
    rating: 4,
    initials: 'PS',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what healthcare professionals are saying about TEMSIS MiniX.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="relative bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="absolute -top-4 left-6 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                {testimonial.rating.toFixed(1)} ★
              </div>
              
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="h-14 w-14 bg-primary/10 text-primary">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-muted-foreground/80">
                    {testimonial.hospital}
                  </p>
                </div>
              </div>
              
              <blockquote className="relative pl-2 border-l-2 border-primary/20">
                <p className="text-muted-foreground italic relative">
                  "{testimonial.content}"
                </p>
              </blockquote>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-primary/5 rounded-full">
            <div className="flex -space-x-2 mr-4">
              {[1, 2, 3].map((i) => (
                <Avatar key={i} className="h-10 w-10 border-2 border-background">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {testimonials[i-1]?.initials || `U${i}`}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm font-medium text-foreground">
                  4.9/5 from 500+ reviews
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Trusted by healthcare providers across India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
