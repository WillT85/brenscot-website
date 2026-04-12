import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you within 24 hours.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Let's discuss your next project.</h2>
            <p className="text-secondary-foreground/70 text-lg mb-12 max-w-md">
              Ready to start building? Contact us for a consultation and a detailed estimate.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold mb-1">Phone</div>
                  <div className="text-secondary-foreground/70">(555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold mb-1">Email</div>
                  <div className="text-secondary-foreground/70">build@brenscotbuilder.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold mb-1">Office</div>
                  <div className="text-secondary-foreground/70">142 Builder's Way, Suite 100<br/>Industrial District, ST 12345</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background text-foreground p-8 md:p-10 shadow-xl"
          >
            <h3 className="text-2xl font-serif font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <Input id="name" required className="rounded-none border-border bg-transparent h-12 focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <Input id="phone" type="tel" required className="rounded-none border-border bg-transparent h-12 focus-visible:ring-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                <Input id="email" type="email" required className="rounded-none border-border bg-transparent h-12 focus-visible:ring-primary" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Project Details</label>
                <Textarea id="message" required rows={5} className="rounded-none border-border bg-transparent resize-none focus-visible:ring-primary" />
              </div>
              <Button type="submit" className="w-full h-14 rounded-none font-bold uppercase tracking-widest">
                Request Estimate
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
