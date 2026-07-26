import React from "react";
import {
  Award,
  Sparkles,
  Share2,
  MessageCircle,
  ShieldCheck,
  Gift,
  Crown,
  BadgePercent,
  Clock,
  HelpCircle,
  CheckCircle,
  Users,
  ChevronRight,
} from "lucide-react";

export default function ReferralSystem() {
  // Handle General WhatsApp Support DM Claim Trigger
  const handleClaimViaSupport = () => {
    const text = encodeURIComponent(
      `Hi Student Sahayak Operations Support! 🌟\n\nI am ready to claim my Consistency Circle milestone reward.\n\nPlease verify my active network referral count and apply my promotional markdown discount token to my account's next upcoming billing iteration!\n\nThank you!`
    );
    window.open(`https://wa.me/919999999999?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-24 pb-20 relative overflow-hidden font-sans">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl space-y-16">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto border-b border-white/10 pb-10">
          <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 border border-amber-500/30 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Consistency Circle Program
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/20">
              Solo Plan Exclusive
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
            Consistency Circle <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500">Referral System</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Build your squad, stay consistent together, and unlock up to 50% off your subscription renewal plus official Ambassador status.
          </p>
        </div>

        {/* Main Consistency Circle Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-br from-gray-900 via-gray-900/90 to-gray-950 p-8 sm:p-14 shadow-2xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-96 h-96 bg-gradient-to-br from-amber-500/20 via-yellow-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-96 h-96 bg-gradient-to-tr from-red-600/10 via-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 font-extrabold text-sm mb-8 tracking-wide shadow-inner">
              🔥 WHY WE BUILT THIS
            </div>

            {/* The Inspirational Quote from PRD */}
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight sm:leading-snug tracking-tight mb-8 font-serif italic border-l-4 sm:border-l-0 sm:border-t-2 sm:border-b-2 border-amber-400/60 pl-6 sm:pl-0 py-6 bg-gradient-to-r sm:bg-gradient-to-b from-amber-400/5 via-transparent to-amber-400/5 rounded-2xl">
              "You are the average of the 5 people around you. If your environment isn't consistent, you have to fight twice as hard to stay consistent yourself."
            </blockquote>

            <p className="text-xl sm:text-2xl text-gray-200 font-medium mb-8">
              So don't do this alone. <span className="text-amber-400 font-bold underline decoration-amber-500/50 underline-offset-8">Bring your squad</span> — and get rewarded for it.
            </p>

            <div className="inline-flex items-center gap-3 text-sm text-gray-300 bg-black/50 px-6 py-3.5 rounded-2xl border border-white/10 shadow-lg">
              <ShieldCheck className="w-5 h-5 text-green-400 shrink-0" />
              <span>Applicability: Exclusive to the <strong className="text-amber-400">Solo Plan</strong> parameters.</span>
            </div>
          </div>
        </div>

        {/* FULL-WIDTH HOW IT WORKS SECTION */}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-950 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-amber-400 font-extrabold text-xs uppercase tracking-widest mb-2">
              <HelpCircle className="w-4 h-4" /> Simple Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Works</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Three seamless steps to empower your friends and earn massive subscription markdowns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="bg-black/40 border border-white/10 hover:border-amber-500/50 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-black text-lg group-hover:scale-110 transition-transform shadow-inner">
                    01
                  </div>
                  <Share2 className="w-6 h-6 text-gray-600 group-hover:text-amber-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  Share Your Unique Code
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Upon your first successful Solo Plan payment, the system generates your unique alphanumeric code string (e.g. <strong className="text-white font-mono">RAHUL10</strong>). Share this code with peers preparing for their goals.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-amber-400/80">
                <span>Valid for up to 10 friends</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-black/40 border border-white/10 hover:border-yellow-500/50 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 font-black text-lg group-hover:scale-110 transition-transform shadow-inner">
                    02
                  </div>
                  <BadgePercent className="w-6 h-6 text-gray-600 group-hover:text-yellow-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                  10% Friend Discount
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When your friends apply your code during checkout, they receive an immediate <strong className="text-yellow-400 font-semibold">10% flat discount</strong> off their initial system subscription payment instantly.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-yellow-400/80">
                <span>Instant checkout deduction</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-black/40 border border-white/10 hover:border-orange-500/50 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-400/10 border border-orange-400/30 flex items-center justify-center text-orange-400 font-black text-lg group-hover:scale-110 transition-transform shadow-inner">
                    03
                  </div>
                  <Award className="w-6 h-6 text-gray-600 group-hover:text-orange-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                  Unlock Renewal Discounts
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  As your referrals complete invoice settlements, your successful referral count increments—unlocking renewal rate markdowns from <strong className="text-white">20% to 50% off</strong> and Ambassador status!
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-orange-400/80">
                <span>Real-time counter updates</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

        {/* MILESTONES & REWARDS MATRIX */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Your Milestones & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Rewards</span>
            </h2>
            <p className="text-gray-400 text-base mt-3">
              Progressive renewal rate markdowns designed to reward your commitment to a consistent community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Milestone 1: Tier 1 (1+ Friend) */}
            <div className="relative rounded-3xl p-8 bg-gradient-to-b from-gray-900 to-gray-950 border border-white/10 hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/15">
                    TIER 1
                  </span>
                  <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" /> 1 Friend
                  </span>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-500/30 flex items-center justify-center mb-6 text-amber-400 shadow-inner group-hover:scale-110 transition-transform">
                  <Gift className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-2">Bring 1 Friend</h3>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 mb-4">
                  20% OFF
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Receive a flat <strong className="text-white">20% discount</strong> applied directly to your account's next scheduled system renewal bill cycle.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 text-xs text-gray-500 font-medium">
                Applied to next upcoming billing iteration
              </div>
            </div>

            {/* Milestone 2: Tier 2 (3+ Friends) */}
            <div className="relative rounded-3xl p-8 bg-gradient-to-b from-gray-900 to-gray-950 border border-white/10 hover:border-amber-500/60 transition-all duration-300 shadow-xl flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/15">
                    TIER 2
                  </span>
                  <span className="text-xs font-bold text-yellow-400 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" /> 3 Friends
                  </span>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/30 to-orange-500/10 border border-amber-500/40 flex items-center justify-center mb-6 text-yellow-400 shadow-inner group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-2">Bring 3 Friends</h3>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 mb-4">
                  40% OFF
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Receive a substantial <strong className="text-white">40% markdown</strong> applied directly to your account's next scheduled renewal bill cycle.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 text-xs text-gray-500 font-medium">
                Applied to next upcoming billing iteration
              </div>
            </div>

            {/* Milestone 3: Tier 3 (5+ Friends - Ambassador) */}
            <div className="relative rounded-3xl p-8 bg-gradient-to-b from-amber-950/40 via-gray-900 to-gray-950 border border-amber-400/80 hover:border-amber-400 transition-all duration-300 shadow-2xl shadow-amber-500/10 ring-1 ring-amber-400/30 flex flex-col justify-between group">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-extrabold text-[11px] px-4 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                <Crown className="w-3.5 h-3.5 fill-black" /> Highest Honour & Ongoing Rate
              </div>

              <div>
                <div className="flex items-center justify-between mb-6 mt-2">
                  <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 border border-amber-500/30">
                    TIER 3 (FINAL)
                  </span>
                  <span className="text-xs font-bold text-orange-400 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" /> 5+ Friends
                  </span>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400/40 via-amber-500/20 to-orange-500/20 border border-yellow-400/50 flex items-center justify-center mb-6 text-yellow-300 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                  <Crown className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-2">Bring 5+ Friends</h3>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 mb-3">
                  50% ONGOING
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/30 text-xs font-extrabold text-amber-300 tracking-wide uppercase">
                    + STUDENT SAHAYAK AMBASSADOR
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Receive a permanent <strong className="text-white">50% rate adjustment</strong> ongoing + get your account profile officially promoted to Ambassador status!
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 text-xs text-amber-400/80 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Permanent status & ongoing discounts
              </div>
            </div>
          </div>
        </div>

        {/* CLAIM REWARD CALL-TO-ACTION BANNER */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent border border-amber-500/30 p-8 sm:p-14 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-3xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold mb-4">
              <Clock className="w-3.5 h-3.5" /> Ready for Your Renewal Cycle?
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Ready to claim your milestone reward?
            </h3>
            <p className="text-gray-300 mt-4 text-base sm:text-lg leading-relaxed">
              Message our operations support desk anytime via text or WhatsApp. We will immediately verify your active network count metrics and apply your promotional markdown discount token directly to your account's next upcoming billing iteration.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm font-semibold text-gray-400 justify-center lg:justify-start">
              <span className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-4 h-4" /> Real-time network count verification
              </span>
              <span className="flex items-center gap-2 text-amber-400">
                <Sparkles className="w-4 h-4" /> Instant promo token override
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <button
              onClick={handleClaimViaSupport}
              className="px-8 py-5 rounded-2xl font-black text-base transition-all flex items-center justify-center gap-3 shadow-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black hover:scale-105 shadow-green-500/20"
            >
              <MessageCircle className="w-5 h-5 fill-black" /> Message Support on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
