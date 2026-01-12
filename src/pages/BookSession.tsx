import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, Camera, Film, Users, DollarSign, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const sessionTypes = [
  {
    id: "portrait",
    name: "Portrait Photography",
    icon: Camera,
    duration: "2-3 hours",
    price: "Starting at $500",
    description: "Professional headshots and personal portraits",
  },
  {
    id: "event",
    name: "Event Coverage",
    icon: Users,
    duration: "4-8 hours",
    price: "Starting at $1,200",
    description: "Weddings, corporate events, and celebrations",
  },
  {
    id: "commercial",
    name: "Commercial Shoot",
    icon: Camera,
    duration: "Full day",
    price: "Starting at $2,000",
    description: "Product photography and brand content",
  },
  {
    id: "film",
    name: "Video Production",
    icon: Film,
    duration: "Variable",
    price: "Custom quote",
    description: "Cinematic videos and documentaries",
  },
];

const BookSession = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedSession, setSelectedSession] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Booking Request Received!",
      description: "We'll contact you within 24 hours to confirm your session details.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setSelectedSession("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-light via-background to-background pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm">
              Book Your Session
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-3 sm:mt-4 mb-4 sm:mb-6">
              Let's Create Something
              <span className="text-gradient-gold"> Extraordinary</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your session type and fill out the form below. We'll get back to you within 24 hours to discuss your vision and confirm the details.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {sessionTypes.map((session, index) => {
              const Icon = session.icon;
              return (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {session.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {session.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Clock size={14} />
                    <span>{session.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <DollarSign size={16} />
                    <span>{session.price}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 sm:py-16 md:py-20 bg-charcoal-light">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-10"
          >
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-3">
                Complete Your Booking
              </h2>
              <p className="text-muted-foreground">
                Fill in your details and we'll be in touch soon
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    required
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    required
                    className="bg-background border-border"
                  />
                </div>
              </div>

              {/* Session Details */}
              <div className="space-y-2">
                <Label htmlFor="sessionType">Session Type *</Label>
                <Select value={selectedSession} onValueChange={setSelectedSession} required>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select a session type" />
                  </SelectTrigger>
                  <SelectContent>
                    {sessionTypes.map((session) => (
                      <SelectItem key={session.id} value={session.id}>
                        {session.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="preferredDate">Preferred Date *</Label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    required
                    className="bg-background border-border"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Preferred Time</Label>
                  <Input
                    id="preferredTime"
                    name="preferredTime"
                    type="time"
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location/Venue</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="Studio, outdoor, your venue..."
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell Us About Your Vision *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describe your vision, any specific requirements, or questions you might have..."
                  rows={6}
                  required
                  className="bg-background border-border resize-none"
                />
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <Label htmlFor="budget">Estimated Budget (Optional)</Label>
                <Input
                  id="budget"
                  name="budget"
                  type="text"
                  placeholder="e.g., $500 - $1,000"
                  className="bg-background border-border"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Calendar size={20} />
                      Submit Booking Request
                    </span>
                  )}
                </Button>
              </div>

              <p className="text-xs text-center text-muted-foreground mt-4">
                By submitting this form, you agree to be contacted regarding your booking request.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookSession;
