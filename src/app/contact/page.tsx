import { ContactForm } from '@/components/contact/contact-form';
import { Icons } from '@/components/icons';

export const metadata = {
  title: 'Contact Us | Spox Healthcare',
  description: 'Get in touch with our team for inquiries, support, or partnership opportunities.',
};

export default function ContactPage() {
  return (
    <div className="container py-16 lg:py-24">
      <div className="mx-auto max-w-4xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Have questions or want to learn more about our products? We'd love to hear from you.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          <ContactForm />
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <p className="text-muted-foreground mb-8">
              Our team is here to help you with any questions about our products or services.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                <Icons.mail className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Email Us</h3>
                <p className="text-muted-foreground">info@spoxhealthcare.com</p>
                <p className="text-muted-foreground">support@spoxhealthcare.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                <Icons.phone className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Call Us</h3>
                <p className="text-muted-foreground">+91 98765 43210</p>
                <p className="text-muted-foreground">+91 11 2345 6789</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                <Icons.mapPin className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">Visit Us</h3>
                <p className="text-muted-foreground">
                  Spox Healthcare Pvt. Ltd.<br />
                  123 Medical Tech Park, Sector 18<br />
                  Noida, Uttar Pradesh 201301<br />
                  India
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-medium mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Icons.facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Icons.twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Icons.linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Icons.instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="aspect-w-16 aspect-h-9 h-96 w-full overflow-hidden rounded-xl bg-muted">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.102558314612!2d77.33401441508276!3d28.62762098241829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d0e3c7a1b7%3A0xf6e7e9c7e3e1e1e1!2sNoida%20Sector%2018!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
