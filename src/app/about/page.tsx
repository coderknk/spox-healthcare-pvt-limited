import { Metadata } from "next";
import Image from "next/image";
import { TeamCard } from "@/components/about/team-card";

export const metadata: Metadata = {
  title: "About Us - Spox Healthcare",
  description: "Learn about Spox Healthcare's mission, values, and the team behind our innovative medical imaging solutions.",
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "CEO & Founder",
      image: "/team/sarah-johnson.jpg",
      description: "With over 15 years of experience in medical imaging, Dr. Johnson founded Spox Healthcare to revolutionize diagnostic imaging solutions.",
      socialLinks: {
        linkedin: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/team/michael-chen.jpg",
      description: "Technology expert with a passion for developing cutting-edge medical imaging software and hardware solutions.",
      socialLinks: {
        linkedin: "#",
      },
    },
    {
      name: "Priya Patel",
      role: "Head of Research",
      image: "/team/priya-patel.jpg",
      description: "Leading our research initiatives to develop the next generation of medical imaging technologies.",
      socialLinks: {
        linkedin: "#",
      },
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Spox Healthcare</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Pioneering the future of medical imaging with innovative technology and exceptional patient care.
        </p>
      </section>

      {/* Our Story */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-foreground/80">
              <p>
                Founded in 2015, Spox Healthcare began with a simple mission: to make advanced medical imaging accessible to healthcare providers of all sizes.
              </p>
              <p>
                What started as a small team of passionate engineers and medical professionals has grown into an industry leader, serving hospitals and clinics across the country.
              </p>
              <p>
                Today, we continue to push the boundaries of medical imaging technology while maintaining our commitment to quality, reliability, and exceptional patient care.
              </p>
            </div>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="/about/our-story.jpg"
              alt="Our Story"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-muted/30 rounded-2xl p-12 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground mb-8">
            To empower healthcare professionals with innovative imaging solutions that improve patient outcomes and advance the field of medical diagnostics.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-lg bg-background">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Continuously pushing the boundaries of medical imaging technology.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-background">
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-muted-foreground">
                Delivering reliable, high-performance imaging solutions.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-background">
              <h3 className="text-xl font-semibold mb-3">Care</h3>
              <p className="text-muted-foreground">
                Putting patients and healthcare providers first in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Leadership</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us in Shaping the Future of Medical Imaging</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Interested in learning more about our solutions or joining our team?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Contact Us
          </a>
          <a
            href="/careers"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View Careers
          </a>
        </div>
      </section>
    </main>
  );
}
