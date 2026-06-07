import { Award, Shield, Star, CheckCircle, Crown, Medal } from "lucide-react";

interface OutcompetitorEntry {
  rank: number;
  initials: string;
  name: string;
  days: number;
  quote: string;
  color: string;
}

const outcompetitors: OutcompetitorEntry[] = [
  {
    rank: 1,
    initials: "PM",
    name: "Priya Mehta",
    days: 185,
    quote: "Every day I asked — did I outcompete yesterday's version of me?",
    color: "from-amber-400 to-yellow-500",
  },
  {
    rank: 2,
    initials: "AR",
    name: "Aarav Rathore",
    days: 183,
    quote: "I stopped waiting for motivation. I just showed up.",
    color: "from-slate-300 to-slate-400",
  },
  {
    rank: 3,
    initials: "NP",
    name: "Nisha Patil",
    days: 182,
    quote: "I built the habit before I built the rank.",
    color: "from-orange-400 to-amber-600",
  },
  {
    rank: 4,
    initials: "SK",
    name: "Siddharth Kumar",
    days: 180,
    quote: "Discipline is the only shortcut that actually works.",
    color: "from-red-400 to-orange-500",
  },
  {
    rank: 5,
    initials: "RV",
    name: "Rohit Verma",
    days: 180,
    quote: "My consistency was my answer to everything that tried to stop me.",
    color: "from-purple-400 to-pink-500",
  },
];

function RankIcon({ rank }: { rank: number }) {
  if (rank === 1)
    return <Crown className="h-5 w-5 text-amber-400 fill-amber-400/30" />;
  if (rank === 2)
    return <Medal className="h-5 w-5 text-slate-300 fill-slate-300/30" />;
  if (rank === 3)
    return <Medal className="h-5 w-5 text-orange-400 fill-orange-400/30" />;
  return (
    <span className="text-gray-500 font-black text-base w-5 text-center">
      {rank}
    </span>
  );
}

function rankBorderClass(rank: number) {
  if (rank === 1) return "border-amber-400/40 bg-amber-400/5";
  if (rank === 2) return "border-slate-400/30 bg-slate-400/5";
  if (rank === 3) return "border-orange-500/30 bg-orange-500/5";
  return "border-white/8 bg-white/[0.03]";
}

function rankGlowClass(rank: number) {
  if (rank === 1)
    return "absolute -inset-px rounded-2xl bg-gradient-to-r from-amber-400/20 via-yellow-400/10 to-amber-400/20 blur-sm";
  if (rank === 2)
    return "absolute -inset-px rounded-2xl bg-gradient-to-r from-slate-400/10 to-slate-300/10 blur-sm";
  if (rank === 3)
    return "absolute -inset-px rounded-2xl bg-gradient-to-r from-orange-500/15 to-amber-500/10 blur-sm";
  return "";
}

export default function HallOfFame() {
  return (
    <section className="relative bg-gray-950 py-20 sm:py-28 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      </div>

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-5">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-xl animate-pulse" />
              <div className="relative w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/30">
                <Award className="h-8 w-8 text-gray-950" />
              </div>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-4">
            The{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
              1% Outcompetitors
            </span>{" "}
            Wall
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Most students start. Few stay. These are the ones who didn't stop —
            not once, not for a single day. They earned the{" "}
            <span className="text-amber-400 font-bold">Legend Badge</span>,
            completed the Challenge without a single penalty, and outcompeted
            themselves every day.{" "}
            <span className="text-white font-semibold">
              This wall belongs to them.
            </span>
          </p>
        </div>

        {/* Leaderboard */}
        <div className="max-w-3xl mx-auto mb-14 space-y-3">
          {/* Column header */}
          <div className="grid grid-cols-12 items-center px-4 sm:px-6 pb-2">
            <div className="col-span-1 text-center">
              <span className="text-gray-600 text-[11px] font-bold uppercase tracking-widest">
                #
              </span>
            </div>
            <div className="col-span-5 sm:col-span-4 pl-3">
              <span className="text-gray-600 text-[11px] font-bold uppercase tracking-widest">
                Student
              </span>
            </div>
            <div className="col-span-2 text-center hidden sm:block">
              <span className="text-gray-600 text-[11px] font-bold uppercase tracking-widest">
                Days
              </span>
            </div>
            <div className="col-span-3 sm:col-span-2 text-center">
              <span className="text-gray-600 text-[11px] font-bold uppercase tracking-widest">
                Badge
              </span>
            </div>
            <div className="col-span-3 text-center">
              <span className="text-gray-600 text-[11px] font-bold uppercase tracking-widest">
                Penalties
              </span>
            </div>
          </div>

          {/* Rows */}
          {outcompetitors.map((entry) => (
            <div key={entry.rank} className="relative">
              {/* Glow for top 3 */}
              {entry.rank <= 3 && <div className={rankGlowClass(entry.rank)} />}

              <div
                className={`relative grid grid-cols-12 items-center border rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl ${rankBorderClass(entry.rank)}`}
              >
                {/* Rank */}
                <div className="col-span-1 flex items-center justify-center">
                  <RankIcon rank={entry.rank} />
                </div>

                {/* Avatar + name + quote */}
                <div className="col-span-5 sm:col-span-4 flex items-center gap-3 pl-3">
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${entry.color} flex items-center justify-center text-white font-black text-sm flex-shrink-0 shadow-lg`}
                  >
                    {entry.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-bold text-sm truncate">
                      {entry.name}
                    </p>
                    <p className="text-gray-500 text-[11px] leading-tight truncate hidden sm:block">
                      "{entry.quote}"
                    </p>
                    {/* Mobile: show days inline */}
                    <p className="text-amber-400 text-[11px] font-bold sm:hidden">
                      {entry.days} days
                    </p>
                  </div>
                </div>

                {/* Days — desktop only */}
                <div className="col-span-2 text-center hidden sm:block">
                  <span
                    className={`font-black text-lg ${entry.rank === 1 ? "text-amber-300" : "text-gray-200"}`}
                  >
                    {entry.days}
                  </span>
                </div>

                {/* Badge */}
                <div className="col-span-3 sm:col-span-2 flex items-center justify-center">
                  <div className="flex items-center gap-1 bg-amber-400/10 border border-amber-400/30 rounded-full px-2.5 py-1">
                    <Star className="h-3 w-3 text-amber-400 fill-amber-400 flex-shrink-0" />
                    <span className="text-amber-300 text-[10px] font-black uppercase tracking-wide hidden sm:inline">
                      Legend
                    </span>
                  </div>
                </div>

                {/* Zero Penalties */}
                <div className="col-span-3 flex items-center justify-center">
                  <div className="flex items-center gap-1.5 bg-emerald-900/30 border border-emerald-500/20 rounded-full px-2.5 py-1">
                    <CheckCircle className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                    <span className="text-emerald-300 text-[10px] font-bold">
                      0 Penalties
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* "Your spot" row */}
          <div className="relative border border-dashed border-white/10 rounded-2xl px-4 sm:px-6 py-4 grid grid-cols-12 items-center opacity-50 hover:opacity-70 transition-opacity">
            <div className="col-span-1 flex justify-center">
              <span className="text-gray-600 font-black text-base">?</span>
            </div>
            <div className="col-span-5 sm:col-span-4 flex items-center gap-3 pl-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-dashed border-gray-700 flex items-center justify-center flex-shrink-0">
                <Star className="h-4 w-4 text-gray-700" />
              </div>
              <p className="text-gray-600 text-sm font-bold">Your spot</p>
            </div>
            <div className="col-span-2 text-center hidden sm:block">
              <span className="text-gray-700 font-black text-lg">—</span>
            </div>
            <div className="col-span-3 sm:col-span-2 flex justify-center">
              <div className="flex items-center gap-1 bg-gray-800 border border-gray-700 rounded-full px-2.5 py-1">
                <Star className="h-3 w-3 text-gray-600 flex-shrink-0" />
                <span className="text-gray-600 text-[10px] font-black uppercase tracking-wide hidden sm:inline">
                  Earn it
                </span>
              </div>
            </div>
            <div className="col-span-3 flex justify-center">
              <span className="text-gray-700 text-[11px] font-bold">—</span>
            </div>
          </div>
        </div>

        {/* Entry Criteria */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-px bg-gradient-to-r from-amber-400/20 via-yellow-500/10 to-amber-400/20 rounded-2xl" />
            <div className="relative bg-gray-900 border border-white/10 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500/10 to-yellow-600/5 border-b border-white/8 px-6 py-4 flex items-center gap-3">
                <Shield className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <p className="text-amber-300 text-sm font-black uppercase tracking-widest">
                  Entry Criteria
                </p>
              </div>

              <div className="px-6 pt-5 pb-5">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
                  To earn your place here, you must —{" "}
                  <span className="text-white font-semibold">
                    hold the Legend Badge or complete the Challenge Plan
                  </span>
                  , and record{" "}
                  <span className="text-amber-400 font-bold">
                    zero penalties
                  </span>{" "}
                  across your entire journey.{" "}
                  <span className="text-gray-400 italic">
                    No shortcuts. No exceptions.
                  </span>
                </p>

                <div className="space-y-3">
                  {[
                    {
                      num: "01",
                      title: "Legend Badge Earned",
                      desc: "Consistent activity on the platform over the full period.",
                    },
                    {
                      num: "02",
                      title: "Challenge Plan — Zero Penalties",
                      desc: "Not a single day missed or penalised across the entire journey.",
                    },
                    {
                      num: "03",
                      title: "Verification Interview Passed",
                      desc: "A face-to-face conversation — online or offline — where our team reviews your full profile history and asks about your actual journey. Not new questions. Only what you already committed to and recorded.",
                    },
                  ].map((c) => (
                    <div
                      key={c.num}
                      className="flex items-start gap-4 bg-white/[0.03] border border-white/6 rounded-xl px-4 py-3"
                    >
                      <span className="text-amber-400/50 font-black text-lg leading-none flex-shrink-0 mt-0.5">
                        {c.num}
                      </span>
                      <div>
                        <p className="text-white text-sm font-bold">
                          {c.title}
                        </p>
                        <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">
                          {c.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
