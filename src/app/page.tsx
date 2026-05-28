"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Award, Droplet, Facebook, Instagram, Leaf, Sparkles, Star, Twitter, Wrench } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="medium"
        background="aurora"
        cardStyle="inset"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Pricing",
          id: "#pricing",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      button={{
        text: "Get a Free Quote",
        href: "#contact",
      }}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ifjncz"
      logoAlt="HVAC Solutions Logo"
      brandName="HVAC Solutions"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="HVAC Solutions"
      description="Your trusted partner for comfortable living. We provide expert heating, ventilation, and air conditioning services for homes and businesses."
      buttons={[
        {
          text: "Request a Free Quote",
          href: "#contact",
        },
        {
          text: "Explore Services",
          href: "#services",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-woman-wearing-helmet_23-2149366663.jpg"
      imageAlt="HVAC technician servicing an outdoor unit"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Experience Unmatched Comfort & Service"
      description="With over 20 years in the HVAC industry, we are dedicated to providing top-tier installation, maintenance, and repair services. Our certified technicians ensure your home or business stays comfortable year-round with efficient and reliable climate control solutions."
      tag="About Us"
      imageSrc="http://img.b2bpic.net/free-photo/mature-engineer_1098-18201.jpg"
      imageAlt="Team of HVAC technicians discussing plans"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Wrench,
          title: "Expert Repairs",
          description: "Fast and reliable repair services for all major HVAC brands, ensuring minimal downtime and maximum comfort.",
        },
        {
          icon: Droplet,
          title: "New Installations",
          description: "Professional installation of high-efficiency AC and heating systems tailored to your property's specific needs.",
        },
        {
          icon: Leaf,
          title: "Routine Maintenance",
          description: "Preventative maintenance plans to keep your systems running smoothly, improve air quality, and extend equipment life.",
        },
        {
          icon: Star,
          title: "Smart Thermostats",
          description: "Upgrade to smart thermostats for enhanced control, energy savings, and personalized climate management.",
        },
      ]}
      title="Comprehensive HVAC Services"
      description="From emergency repairs to routine maintenance, our team is equipped to handle all your heating and cooling needs with precision and care."
      tag="What We Offer"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "AC Installation",
          price: "Starting at $2500",
          variant: "Cooling",
          imageSrc: "http://img.b2bpic.net/free-photo/zoom-shot-manifold-meters_482257-91084.jpg",
          imageAlt: "New AC unit installation",
        },
        {
          id: "p2",
          name: "Furnace Repair",
          price: "Call for Estimate",
          variant: "Heating",
          imageSrc: "http://img.b2bpic.net/free-photo/worker-repairing-water-heater_23-2149334227.jpg",
          imageAlt: "Technician repairing a furnace",
        },
        {
          id: "p3",
          name: "Air Duct Cleaning",
          price: "From $350",
          variant: "Air Quality",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-ventilation-system_23-2149388951.jpg",
          imageAlt: "Air duct cleaning process",
        },
        {
          id: "p4",
          name: "Maintenance Plans",
          price: "Starting at $199/year",
          variant: "Preventative",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-busy-experienced-distant-worker-keyboards-laptop-computer-calculates-costs_273609-44853.jpg",
          imageAlt: "HVAC maintenance checklist",
        },
        {
          id: "p5",
          name: "Smart Thermostat Upgrade",
          price: "Installed from $400",
          variant: "Efficiency",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-adult-enjoying-home-comfort-with-heating_23-2149134353.jpg",
          imageAlt: "Smart home thermostat",
        },
        {
          id: "p6",
          name: "Emergency Services",
          price: "24/7 Availability",
          variant: "Urgent Care",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-holds-smartphone-with-greenscreen_482257-76601.jpg",
          imageAlt: "Technician responding to emergency call",
        },
      ]}
      title="Our Main Services"
      description="Explore our core HVAC services designed to provide optimal comfort and efficiency for your home or business."
      tag="Service Packages"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          badge: "Essential",
          badgeIcon: Sparkles,
          price: "$199/year",
          subtitle: "Basic Annual Check-up",
          buttons: [
            {
              text: "Select Basic",
              href: "#contact",
            },
          ],
          features: [
            "One annual inspection",
            "Filter replacement",
            "Basic system cleaning",
            "Priority scheduling",
          ],
        },
        {
          id: "premium",
          badge: "Recommended",
          badgeIcon: Star,
          price: "$349/year",
          subtitle: "Comprehensive Home Comfort",
          buttons: [
            {
              text: "Select Premium",
              href: "#contact",
            },
          ],
          features: [
            "Two annual inspections (AC & Heating)",
            "Premium filter replacement",
            "Deep system cleaning",
            "10% discount on repairs",
            "Emergency service priority",
          ],
        },
        {
          id: "ultimate",
          badge: "Ultimate Value",
          badgeIcon: Award,
          price: "$499/year",
          subtitle: "Total Climate Peace of Mind",
          buttons: [
            {
              text: "Select Ultimate",
              href: "#contact",
            },
          ],
          features: [
            "Two annual inspections (AC & Heating)",
            "Advanced filter replacement",
            "Full system tune-up & cleaning",
            "20% discount on repairs",
            "No-wait emergency service",
            "Indoor air quality check",
          ],
        },
      ]}
      title="Flexible Maintenance Plans"
      description="Choose a plan that fits your needs and budget, ensuring your HVAC system performs optimally all year long."
      tag="Our Pricing"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          handle: "@SarahJHomes",
          testimonial: "HVAC Solutions saved us during a heatwave! Fast, professional, and our AC is running perfectly. Highly recommend their emergency service.",
          imageSrc: "http://img.b2bpic.net/free-photo/expressive-young-girl-posing-studio_176474-69966.jpg",
          imageAlt: "Customer Sarah J.",
        },
        {
          id: "t2",
          name: "Michael R.",
          handle: "@MikeR_Contractor",
          testimonial: "Their team installed a new furnace for my business. The process was seamless, and the heating is incredibly efficient. Excellent work!",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-warm-winter-drink_23-2151876939.jpg",
          imageAlt: "Customer Michael R.",
        },
        {
          id: "t3",
          name: "Emily C.",
          handle: "@EmilyC_Design",
          testimonial: "I'm amazed at the improvement in our indoor air quality after their duct cleaning service. Breathing easier now, thank you!",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-family-life-home_23-2148463586.jpg",
          imageAlt: "Customer Emily C.",
        },
        {
          id: "t4",
          name: "David P.",
          handle: "@DavidP_Realty",
          testimonial: "We trust HVAC Solutions for all our property management needs. Their maintenance plans are a lifesaver and prevent costly issues.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-room-beautiful-couch-people_1303-776.jpg",
          imageAlt: "Customer David P.",
        },
        {
          id: "t5",
          name: "Jessica L.",
          handle: "@JessL_Family",
          testimonial: "The technicians were polite and knowledgeable, explaining everything clearly. Our home feels so much more comfortable after their visit.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-worker-uniform-gesturing-with-fingers-looking-mild-front-view_176474-21707.jpg",
          imageAlt: "Customer Jessica L.",
        },
      ]}
      title="Hear From Our Happy Customers"
      description="Our clients consistently praise our professionalism, efficiency, and dedication to providing the best HVAC solutions."
      tag="Customer Stories"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "http://img.b2bpic.net/free-photo/close-up-air-fryer_23-2151723438.jpg",
        "http://img.b2bpic.net/free-photo/serviceman-does-checkup-client-car_482257-76119.jpg",
        "http://img.b2bpic.net/free-photo/close-up-ventilation-system_23-2149388956.jpg",
        "http://img.b2bpic.net/free-photo/medium-shot-guys-posing-together_23-2149241592.jpg",
        "http://img.b2bpic.net/free-photo/man-looking-tablet-with-intelligent-software-placed-kitchen-table-controlling-light-with-high_482257-2843.jpg",
        "http://img.b2bpic.net/free-photo/learning-map_1098-14838.jpg",
        "http://img.b2bpic.net/free-photo/close-up-ventilation-system_23-2149388990.jpg",
      ]}
      title="Proudly Partnering With Industry Leaders"
      description="We are committed to providing you with the best, which is why we partner with trusted names in HVAC manufacturing."
      tag="Our Partners"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How often should I have my HVAC system serviced?",
          content: "We recommend servicing your HVAC system at least once a year, ideally in the spring for your AC and in the fall for your heating system, to ensure optimal performance and longevity.",
        },
        {
          id: "q2",
          title: "What are the benefits of a smart thermostat?",
          content: "Smart thermostats offer several benefits, including energy savings through programmable schedules, remote control via smartphone, improved comfort, and insights into your energy usage patterns.",
        },
        {
          id: "q3",
          title: "How long does an HVAC installation take?",
          content: "The duration of an HVAC installation varies depending on the system type and complexity. A standard replacement typically takes 1-3 days, while new constructions might take longer. We'll provide a detailed timeline during your consultation.",
        },
        {
          id: "q4",
          title: "Do you offer emergency repair services?",
          content: "Yes, we offer 24/7 emergency HVAC repair services to address unexpected breakdowns and ensure your comfort and safety. Contact us anytime for urgent assistance.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about our HVAC services, maintenance, and installations."
      tag="Got Questions?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Contact Us"
      title="Get a Free HVAC Quote Today!"
      description="Ready to improve your home's comfort? Fill out the form below or call us to schedule a consultation and receive a no-obligation quote."
      inputPlaceholder="Enter your email"
      buttonText="Submit Inquiry"
      termsText="By submitting, you agree to our privacy policy and terms of service."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ifjncz"
      logoAlt="HVAC Solutions Logo"
      logoText="HVAC Solutions"
      copyrightText="© 2024 HVAC Solutions. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "https://facebook.com/hvacsolutions",
          ariaLabel: "Facebook",
        },
        {
          icon: Twitter,
          href: "https://twitter.com/hvacsolutions",
          ariaLabel: "Twitter",
        },
        {
          icon: Instagram,
          href: "https://instagram.com/hvacsolutions",
          ariaLabel: "Instagram",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
