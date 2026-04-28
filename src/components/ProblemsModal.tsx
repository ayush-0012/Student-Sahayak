import { X, AlertCircle, Heart, Users, Brain, Shield, Target, TrendingUp, Wallet, CheckCircle2, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect } from "react";

interface ProblemsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProblemsModal({ isOpen, onClose }: ProblemsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-neutral-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-gradient-to-r from-red-500/10 to-orange-500/10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              What Problems We <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Solve</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-1">Our mission to transform the student experience</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-12 custom-scrollbar">
          
          {/* Individual / Student Level */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                <Users className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Individual & Student Level</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Inconsistency & Unstructured Prep */}
              <ProblemCard 
                icon={<Target className="h-5 w-5 text-red-400" />}
                title="Unstructured Preparation"
                description="Fixing inconsistency by creating a holistic system that transforms unstructured chaos into a disciplined, high-performance routine."
              />
              
              {/* Mental Health */}
              <ProblemCard 
                icon={<Brain className="h-5 w-5 text-purple-400" />}
                title="Mental Well-being"
                description="Combatting isolation and the feeling of being alone during preparation. We address rising mental health issues through active support."
              />

              {/* Mentorship */}
              <ProblemCard 
                icon={<Shield className="h-5 w-5 text-blue-400" />}
                title="Data-Driven Mentorship"
                description="Guidance based on your specific syllabus, schedule, backlog, and revision history. We know your mindset and past record intimately."
              />

              {/* Financial Barrier */}
              <ProblemCard 
                icon={<Wallet className="h-5 w-5 text-green-400" />}
                title="Financial Accessibility"
                description="Professional mentorship usually costs 40k-80k. We provide FREE mentorship to weaker sections to build their confidence."
              />

              {/* Information Overload */}
              <ProblemCard 
                icon={<AlertCircle className="h-5 w-5 text-yellow-400" />}
                title="Strategy & Biased Advice"
                description="Cutting through the noise of generic strategy videos. We provide honest counseling, unlike course sellers who are often biased."
              />

              {/* Distractions */}
              <ProblemCard 
                icon={<TrendingUp className="h-5 w-5 text-pink-400" />}
                title="Execution & Momentum"
                description="Closing the execution gap and eliminating social media distractions that break your momentum and focus."
              />

              {/* Financial Backup */}
              <ProblemCard 
                icon={<Shield className="h-5 w-5 text-orange-400" />}
                title="Financial Backup"
                description="Addressing the lack of financial backup for students. We help you plan for a secure future while you chase your exam goals."
              />

              {/* 360 Degree Question */}
              <ProblemCard 
                icon={<CheckCircle2 className="h-5 w-5 text-indigo-400" />}
                title="The 360° Reality Check"
                description="Helping you answer: 'Are you really made for this?' We evaluate Mental, Physical, Financial, and Emotional readiness."
              />
            </div>
          </section>

          {/* Society Level */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Society Level</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProblemCard 
                icon={<Target className="h-5 w-5 text-orange-400" />}
                title="Character Building"
                description="We focus on building strong individuals who contribute meaningfully to society beyond just passing exams."
              />
              <ProblemCard 
                icon={<Shield className="h-5 w-5 text-red-400" />}
                title="Education System Loopholes"
                description="Addressing systemic gaps where traditional institutions fail to provide personalized, honest guidance."
              />
            </div>
          </section>

          {/* Core Beliefs */}
          <section className="bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Heart className="h-32 w-32 text-red-500" />
            </div>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                <Heart className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">What We Believe In</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <BeliefItem 
                title="Honesty"
                description="Providing transparent, unbiased advice even if it means recommending resources outside our own."
              />
              <BeliefItem 
                title="Empathy & Compassion"
                description="Deeply understanding the pain and pressure students face every single day."
              />
              <BeliefItem 
                title="Action Oriented"
                description="We believe actions speak louder than words. Results are our true measure of success."
              />
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 bg-black flex justify-center sm:justify-end">
          <Button 
            onClick={onClose}
            className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold rounded-full px-8"
          >
            I Understand
          </Button>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}

function ProblemCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
      <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function BeliefItem({ title, description }: { title: string, description: string }) {
  return (
    <div className="text-center sm:text-left">
      <h4 className="text-lg font-bold text-red-400 mb-2">{title}</h4>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
