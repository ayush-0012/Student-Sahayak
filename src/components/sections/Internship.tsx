import {
    Award,
    BookOpen,
    Briefcase,
    CheckCircle,
    Laptop,
    MessageCircle,
    Phone,
    Play,
    Smartphone,
    Star,
    TrendingUp,
    Trophy,
    Copy,
    Check
} from "lucide-react";
import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "The 6-Month Consistency Streak",
    description: "Maintain your position at the top of the leaderboard for 6 consecutive months, with your plan renewed continuously — no gaps.",
    note: "Strict Rule: If your plan expires on the 5th, you must renew by the 6th. Renewing even a day late (e.g., the 7th) breaks the streak, and that period will not count toward your 6 months. Your rank and renewal history are tracked automatically — no separate application needed to qualify.",
    icon: Trophy,
    color: "from-amber-400 to-orange-500"
  },
  {
    number: "02",
    title: "Contact & Interview",
    description: "Once you complete the 6-month streak, contact our team and we will schedule an interview within one week.",
    note: "This interview includes questions about what you actually studied over those 6 months — ensuring this is about genuine, consistent effort rather than just gaming a leaderboard. Revise properly along the way; it will help you here.",
    icon: Phone,
    color: "from-blue-400 to-cyan-500"
  },
  {
    number: "03",
    title: "10-Day Intensive Training",
    description: "You will go through 10 days of training to understand how we work as an organization — our systems, our culture, and how to translate your own consistency into helping other students.",
    icon: BookOpen,
    color: "from-purple-400 to-pink-500"
  },
  {
    number: "04",
    title: "Check-In Session",
    description: "After the 10 days, you will have a short check-in session with the team to ensure you are getting what you need and are set up to succeed.",
    icon: CheckCircle,
    color: "from-green-400 to-emerald-500"
  },
  {
    number: "05",
    title: "The Internship",
    description: "You will join as a paid intern for 2 to 3 months, working across content creation, video editing, customer support, sales, or day-to-day operations — 100% remote and fully flexible around your own study schedule.",
    icon: Briefcase,
    color: "from-red-400 to-rose-500"
  }
];

const benefits = [
  {
    text: "Real, hands-on work experience at a growing startup",
    icon: Laptop
  },
  {
    text: "A Certificate of Excellence recognizing your consistency and contribution",
    icon: Award
  },
  {
    text: "Performance-based extension beyond 2–3 months",
    icon: TrendingUp
  },
  {
    text: "Potential promotion or permanent placement with Student Sahayak for top performers",
    icon: Star
  }
];

function Internship() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("+91 95885 33265");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-24 relative overflow-hidden" id="internship">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-semibold mb-6">
            <Briefcase className="w-5 h-5" />
            <span>Career Opportunity</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            Paid Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">At Student Sahayak</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
            For our most consistent students
          </p>
          <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-sm shadow-xl">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              If you are able to earn the <span className="text-orange-400 font-bold">Legend Badge</span>, you will automatically be given preference over any other candidate for the internship. If you can stay disciplined with your own goals, you can help other students do the same.
            </p>
            <div className="inline-block bg-white/10 px-6 py-3 rounded-full text-white font-medium border border-white/5">
              <span className="text-gray-400 mr-2">Who's eligible:</span> Any student currently using Student Sahayak.
            </div>
          </div>
        </div>

        {/* Timeline / Steps */}
        <div className="max-w-5xl mx-auto mb-24">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Your Path to the Internship</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full
                  ${index < 2 ? 'lg:col-span-3' : 'lg:col-span-2'} 
                  ${index === 4 ? 'md:col-span-2' : ''}
                `}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-5 mb-5 shrink-0">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${step.color} shadow-lg transform group-hover:scale-110 transition-transform shrink-0`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{step.title}</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 shrink-0 lg:min-h-[60px]">
                  {step.description}
                </p>
                {step.note && (
                  <div className="mt-auto p-5 bg-red-500/10 border border-red-500/20 rounded-xl relative overflow-hidden flex-1 flex flex-col justify-center">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 rounded-l-xl"></div>
                    <p className="text-sm text-red-200 leading-relaxed pl-2">
                      {step.note}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* What you get & Quote */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-10 rounded-3xl border border-gray-700 shadow-2xl hover:border-gray-600 transition-colors">
            <h3 className="text-3xl font-bold text-white mb-8">What You Get:</h3>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-green-500/20 p-2 rounded-full border border-green-500/30 shrink-0">
                    <benefit.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-lg text-gray-200">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center lg:text-left space-y-8 flex flex-col justify-center">
            <div className="relative">
              <div className="absolute -left-6 -top-6 text-6xl text-white/10 font-serif">"</div>
              <blockquote className="text-3xl md:text-4xl font-medium text-white leading-tight relative z-10 italic">
                This isn't just an internship. It's what happens when <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 font-bold not-italic">discipline meets opportunity</span>.
              </blockquote>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm mt-8">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-2">
                <h4 className="text-xl font-bold text-white whitespace-nowrap">Questions? Reach out to us</h4>
                
                <div className="flex items-center gap-2">
                  <a href="https://wa.me/919588533265" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                    <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors shrink-0">
                      <MessageCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="text-lg font-medium whitespace-nowrap">+91 95885 33265</span>
                  </a>
                  <button 
                    onClick={handleCopy}
                    title="Copy number"
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex items-center justify-center shrink-0"
                  >
                    {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">


                <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                  <a href="https://play.google.com/store/apps/details?id=com.sachin.studentsahayak" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                    <Smartphone className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>App on Play Store: <span className="text-blue-500 underline underline-offset-2">Student Sahayak</span></span>
                  </a>
                  <a href="https://www.youtube.com/watch?v=KLDdSyt6DiE" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                    <Play className="w-4 h-4 text-red-400 shrink-0" />
                    <span>YouTube Channel: <span className="text-blue-500 underline underline-offset-2">Student Sahayak International</span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Internship;
