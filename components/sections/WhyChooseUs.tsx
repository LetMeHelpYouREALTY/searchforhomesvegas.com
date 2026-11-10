import { Shield, TrendingUp, Users, Award, Clock, Home, Calendar, Phone } from "lucide-react";
import AgentPortrait from "@/components/agent/AgentPortrait";
import CalendlyButton from "@/components/calendly/CalendlyButton";
import { CALENDLY } from "@/lib/calendly";

const features = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description: "Serving Las Vegas and Henderson since 2008 with proven results.",
  },
  {
    icon: TrendingUp,
    title: "Market Knowledge",
    description: "Deep understanding of local market trends and neighborhood insights.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Dedicated attention to every client with customized solutions.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "500+ successful transactions and satisfied clients.",
  },
  {
    icon: Clock,
    title: "Responsive",
    description: "Quick response times and seamless communication throughout.",
  },
  {
    icon: Home,
    title: "Full Service",
    description: "Complete support from search to closing and beyond.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <AgentPortrait size="lg" caption />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Dr. Jan
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
            Experience the difference of working with a trusted Las Vegas real estate professional
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <CalendlyButton
              url={CALENDLY.buyerConsultation}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 font-semibold no-underline hover:bg-blue-700"
            >
              <Calendar className="h-4 w-4" />
              Schedule online
            </CalendlyButton>
            <a
              href="tel:+17025001955"
              className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-800 px-6 py-3 font-semibold no-underline hover:border-slate-500"
            >
              <Phone className="h-4 w-4" />
              702-500-1955
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="bg-blue-100 rounded-full p-4 mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
