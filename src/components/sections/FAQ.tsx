import { useState } from "react";
import { ChevronDown, MessageCircle, PlayCircle, Send, ShieldQuestion, ArrowRight } from "lucide-react";

type FAQItem = {
  q: string;
  a: React.ReactNode;
};

type FAQCategory = {
  category: string;
  items: FAQItem[];
};

const faqData: FAQCategory[] = [
  {
    category: "Getting Started",
    items: [
      {
        q: "Where do I get the app?",
        a: "Search “Student Sahayak” on the Play Store.",
      },
      {
        q: "Where's your website?",
        a: <a href="https://www.studentsahayak.in" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">www.studentsahayak.in</a>,
      },
      {
        q: "Where's the full demo video?",
        a: (
          <div className="flex flex-col gap-3">
            <p>Watch the complete walkthrough right here, or subscribe to our YouTube channel, Student Sahayak International, for more.</p>
            {/* [DEV: insert demo video link/embed here] */}
            <a href="#" className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 hover:bg-red-600/30 px-4 py-2 rounded-lg font-medium w-fit transition-colors border border-red-500/30">
              <PlayCircle className="w-5 h-5" />
              Watch Demo Video
            </a>
          </div>
        ),
      },
      {
        q: "How do I join your WhatsApp group?",
        a: (
          <div className="flex flex-col gap-3">
            <p>Tap below for daily updates, or message us directly at +91 95885 33265.</p>
            {/* [DEV: insert WhatsApp group link here] */}
            <a href="#" className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 hover:bg-green-500/30 px-4 py-2 rounded-lg font-medium w-fit transition-colors border border-green-500/30">
              <MessageCircle className="w-5 h-5" />
              Join WhatsApp Group
            </a>
          </div>
        ),
      },
      {
        q: "How do I join your Telegram group?",
        a: (
          <div className="flex flex-col gap-3">
            <p>Tap below for free PDFs and study material.</p>
            {/* [DEV: insert Telegram group link here] */}
            <a href="#" className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 px-4 py-2 rounded-lg font-medium w-fit transition-colors border border-blue-500/30">
              <Send className="w-5 h-5" />
              Join Telegram Group
            </a>
          </div>
        ),
      },
      {
        q: "My exam syllabus isn't on the app. What now?",
        a: "Tell us — we add any missing syllabus within 24 hours.",
      },
    ],
  },
  {
    category: "Plans & Guarantee",
    items: [
      {
        q: "How many plans do you offer?",
        a: "Three — Solo System Plan, Sahayak Plan, and Challenge Plan.",
      },
      {
        q: "What is Student Sahayak guaranteeing you?",
        a: "If you make your schedule daily on our application, we guarantee your preparation and your confidence will increase.",
      },
      {
        q: "Why isn't this free?",
        a: (
          <div className="flex flex-col gap-3">
            <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-300">
              “When you pay for your consistency, your chances of becoming consistent are higher.” — Student Sahayak
            </blockquote>
            <p>
              You pay for food, and you eat it properly. You pay for entertainment, and you actually watch it. Most students have never paid for their own consistency — only for courses and lectures. Some months your mind will tell you this is a waste of time. That's just your comfort zone talking. Don't listen to it. And if you genuinely can't afford it — see the next question.
            </p>
          </div>
        ),
      },
      {
        q: "Is Student Sahayak free for students who can't afford it?",
        a: "Yes — for students below the poverty line. Message us on WhatsApp for one month free. Genuine usage gets you the next month free too.",
      },
    ],
  },
  {
    category: "Our Philosophy",
    items: [
      {
        q: "How is Student Sahayak different from coaching or YouTube?",
        a: "Once you've paid a coaching institute, their job is basically done — everything after that is on you. But cracking the exam takes managing your schedule, revision, backlog, syllabus, consistency, habits, and your own learning style. That's what we protect. You get a leaderboard, mentor guidance, and real support — including psychological support, not just content.",
      },
      {
        q: "Why do you believe in this system?",
        a: (
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Middle-class students compete for the same exams as students with far more resources — that's not a fair fight.</li>
            <li>We believe every student deserves a system, not just those who can afford one.</li>
            <li>We want to make students independent, so they can manage everything — schedule, revision, consistency — in one place.</li>
            <li>Middle-class students don't get years to figure this out — most have 3-4 years before the pressure becomes unbearable.</li>
            <li>A hardworking student deserves a good system. Affordable alone isn't enough — students who crack these exams often have extensive mentorship and technology behind them. We believe every student deserves that same quality.</li>
          </ul>
        ),
      },
      {
        q: "What does our logo mean?",
        a: "That's my Nani. Not a celebrity, not a public figure — my grandmother. We believe hardworking people deserve recognition, not just the famous or the wealthy. The people who inspire us most are often the ones nobody's heard of — a parent, a neighbor, someone who came from nothing and built something anyway.",
      },
    ],
  },
  {
    category: "Programs",
    items: [
      {
        q: "How does the Paid Internship work?",
        a: (
          <div className="flex flex-col gap-3">
            <p>To understand the full process, check our website or watch the full video on YouTube.</p>
            {/* [DEV: insert internship video link here] */}
            <a href="#" className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 hover:bg-red-600/30 px-4 py-2 rounded-lg font-medium w-fit transition-colors border border-red-500/30">
              <PlayCircle className="w-5 h-5" />
              Watch Internship Video
            </a>
          </div>
        ),
      },
      {
        q: "How do I earn or get a discount?",
        a: (
          <div className="flex flex-col gap-3">
            <p>Everything you need is inside our Consistency Circle.</p>
            {/* [DEV: insert Consistency Circle link here] */}
            <a href="#" className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 px-4 py-2 rounded-lg font-medium w-fit transition-colors border border-purple-500/30">
              <ArrowRight className="w-5 h-5" />
              Join Consistency Circle
            </a>
          </div>
        ),
      },
    ],
  },
  {
    category: "Contact & Support",
    items: [
      {
        q: "How do I contact you, and where else can I follow along?",
        a: "Call or WhatsApp +91 95885 33265, or email sahayakstudent4@gmail.com. Subscribe to our YouTube channel, Student Sahayak International, for more updates.",
      },
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>("cat-0-item-0");

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section className="bg-gray-900 py-16 sm:py-24 relative overflow-hidden" id="faq">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-4 ring-1 ring-white/10">
            <ShieldQuestion className="h-6 w-6 text-yellow-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to know about Student Sahayak and how we can help transform your academic journey.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-12 sm:gap-16">
          {faqData.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4 sm:mb-6 px-2 sm:px-4">
                {category.category}
              </h3>
              <div className="flex flex-col border-t border-white/10">
                {category.items.map((item, itemIndex) => {
                  const id = `cat-${catIndex}-item-${itemIndex}`;
                  const isOpen = openIndex === id;
                  
                  return (
                    <div 
                      key={itemIndex} 
                      className={`border-b border-white/10 overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-white/[0.03]' : 'hover:bg-white/[0.02]'}`}
                    >
                      <button
                        onClick={() => toggleFAQ(id)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none"
                      >
                        <span className={`font-medium text-base sm:text-lg pr-4 transition-colors duration-300 ${isOpen ? 'text-yellow-400' : 'text-white'}`}>
                          {item.q}
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-yellow-400' : 'text-gray-500'}`} 
                        />
                      </button>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <div className="px-4 sm:px-5 pb-5 text-gray-300 text-sm sm:text-base leading-relaxed">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
