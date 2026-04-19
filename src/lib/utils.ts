import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Define the questions based on the SS METER document
export const questions = [
  {
    id: 1,
    block: "Data Precision & Operational Tracking",
    text: "The Syllabus Progress Meter: Can you state the exact percentage (e.g., 62%) of the syllabus you have mastered, or are you just 'finishing books'?",
    options: [
      {
        label: "Yes, I use a syllabus-completion tracker",
        value: "A",
        points: 5,
      },
      {
        label: "I know which subjects are done, but not the percentage",
        value: "B",
        points: 2,
      },
      {
        label: "I'm just moving from one chapter to the next",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 2,
    block: "Data Precision & Operational Tracking",
    text: "The Backlog Metric: Do you know the exact number of hours or chapters currently sitting in your 'Backlog,' or is it just a vague 'mountain' in your head?",
    options: [
      {
        label: "Yes, I have a clear, written backlog list",
        value: "A",
        points: 5,
      },
      { label: "I have a rough idea of what's pending", value: "B", points: 2 },
      { label: "No idea, I just know I'm far behind", value: "C", points: 0 },
    ],
  },
  {
    id: 3,
    block: "Data Precision & Operational Tracking",
    text: "The 30-Day Consistency Log: In the last 30 days, do you know the exact number of days you hit your target study hours?",
    options: [
      { label: "Yes, I have a consistency tracker/log", value: "A", points: 5 },
      {
        label: "I think it was most days, but I'm not sure",
        value: "B",
        points: 2,
      },
      { label: "I don't track my days at all", value: "C", points: 0 },
    ],
  },
  {
    id: 4,
    block: "Data Precision & Operational Tracking",
    text: "The Daily Velocity Test: Do you know exactly which subjects are weak and which are strong?",
    options: [
      { label: "Yes, I have calculated", value: "A", points: 5 },
      { label: "I have a general sense", value: "B", points: 2 },
      { label: "No, I never thought to measure it", value: "C", points: 0 },
    ],
  },
  {
    id: 5,
    block: "Data Precision & Operational Tracking",
    text: "The Decision Fatigue: Do you spend more than 5 minutes every morning deciding 'What to study today'? (Are you regularly making a schedule?)",
    options: [
      {
        label: "Zero minutes. My schedule is fixed 24 hours in advance",
        value: "A",
        points: 5,
      },
      { label: "10-15 minutes of shuffling books", value: "B", points: 2 },
      {
        label: "I decide based on what I feel like studying at that moment",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 6,
    block: "Data Precision & Operational Tracking",
    text: "The Feedback Frequency: How often does a superior strategist review your daily study logs to point out where you are leaking time?",
    options: [
      { label: "Daily", value: "A", points: 5 },
      { label: "Once a month or after a mock test", value: "B", points: 2 },
      {
        label: "Never. No one reviews my study patterns",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 7,
    block: "Memory Mastery & Retrieval Science",
    text: "The Revision 'Due Date': Do you have a 'Revision Tracker' that tells you exactly which topic is due for its 3rd or 7th-day review today?",
    options: [
      {
        label: "Yes, my revision is automated/scheduled",
        value: "A",
        points: 5,
      },
      {
        label: "I revise whenever I feel I'm forgetting something",
        value: "B",
        points: 2,
      },
      {
        label: "I only revise when I finish the entire subject",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 8,
    block: "Memory Mastery & Retrieval Science",
    text: "The Active Recall Audit (Memory Management): At the end of your day, do you perform a 'Blind Active Recall' (closing your eyes and mapping out everything you learned), or do you just rely on 'Re-reading' your notes?",
    options: [
      {
        label: "Yes, I spend 30 minutes daily on pure Active Recall",
        value: "A",
        points: 5,
      },
      {
        label: "I do it occasionally for difficult topics",
        value: "B",
        points: 2,
      },
      {
        label: "I don't do recall; I just re-read my notes/highlighted text",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 9,
    block: "Memory Mastery & Retrieval Science",
    text: "The Recovery Strategy: Do you have a fixed 'Power Down' routine to ensure your brain enters deep sleep for memory consolidation, or do you scroll until you fall asleep?",
    options: [
      {
        label: "Strict no-screen policy 1 hour before bed",
        value: "A",
        points: 5,
      },
      {
        label: "I check my phone 'one last time' in bed",
        value: "B",
        points: 2,
      },
      {
        label: "I fall asleep while watching videos/scrolling",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 10,
    block: "Cognitive Health & Focus Control",
    text: "The 'Deep Work' Threshold: Can you sit for 90 minutes straight without touching your phone, water, or leaving your chair?",
    options: [
      {
        label: "Yes, I consistently hit 90-120 minute blocks",
        value: "A",
        points: 5,
      },
      { label: "I get distracted every 30-45 minutes", value: "B", points: 2 },
      { label: "I check my phone every 10-15 minutes", value: "C", points: 0 },
    ],
  },
  {
    id: 11,
    block: "Cognitive Health & Focus Control",
    text: "The 'Doom-Scrolling' Tax: How many minutes of your day are lost to 'Brain-Rot' content (Instagram Reels, YouTube Shorts, or endless Blog scrolling)?",
    options: [
      {
        label:
          "Zero. My phone is locked during study hours and I have deleted entertainment apps",
        value: "A",
        points: 5,
      },
      {
        label: "I scroll for 30–60 minutes daily, usually as a 'break'",
        value: "B",
        points: 2,
      },
      {
        label: "2+ hours daily. I find myself scrolling reflexively",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 12,
    block: "Cognitive Health & Focus Control",
    text: "The Cerebral Hygiene Protocol: Do you perform 'Cerebral Hygiene' (meditation, deep breathing, or silence) to clear the mental clutter, or is your brain a 'dumping ground'?",
    options: [
      {
        label: "Yes, I spend 10–15 minutes daily in silence/meditation",
        value: "A",
        points: 5,
      },
      {
        label: "I try to sit quietly only when I am extremely stressed",
        value: "B",
        points: 2,
      },
      {
        label: "Never. If I'm not studying, I am consuming content",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 13,
    block: "Bio-Mechanical & Physical Optimization",
    text: "The Postural Oxygen Tax: Do you maintain a straight spine with a neck angle of less than 15 degrees, or is your head tilted at 45+ degrees (The 'Text-Neck')?",
    options: [
      {
        label: "My books are on a stand at eye level; my spine is neutral",
        value: "A",
        points: 5,
      },
      {
        label: "I try to sit straight, but after 30 minutes, I slouch",
        value: "B",
        points: 2,
      },
      {
        label: "I study lying on the bed or slouched on a sofa",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 14,
    block: "Bio-Mechanical & Physical Optimization",
    text: "The 'Environmental Peak' Awareness: Do you know your exact 'Peak Productivity Variable' (Temperature, Lighting, Sound) where your brain hits a Flow State?",
    options: [
      {
        label: "Yes, I have a 'Focus Bunker' with optimized light/zero noise",
        value: "A",
        points: 5,
      },
      {
        label: "I have a fixed desk, but I get distracted by family/lighting",
        value: "B",
        points: 2,
      },
      {
        label: "I study in random places (bed, dining table, balcony)",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 15,
    block: "Bio-Mechanical & Physical Optimization",
    text: "The 'Physical Reset' Rule: Do you perform at least 30–40 minutes of high-intensity physical activity to flush out cortisol?",
    options: [
      {
        label: "Yes, I complete my 4000-step sprint/workout 5-6 days a week",
        value: "A",
        points: 5,
      },
      { label: "I walk or play occasionally", value: "B", points: 2 },
      { label: "Zero physical activity", value: "C", points: 0 },
    ],
  },
  {
    id: 16,
    block: "Bio-Mechanical & Physical Optimization",
    text: "The 'Fuel' & Diet Tracking: Do you track your intake of junk food/processed sugar, knowing that high-glycemic foods cause 'brain fog'?",
    options: [
      {
        label: "I log my meals and strictly follow a 'Clean Fuel' policy",
        value: "A",
        points: 5,
      },
      {
        label: "I try to eat healthy but don't track junk",
        value: "B",
        points: 2,
      },
      { label: "I eat whatever is available", value: "C", points: 0 },
    ],
  },
  {
    id: 17,
    block: "Tactical Testing & Strategic Support",
    text: "The Mock Test Frequency: Have you given a full-length mock test in the last 7 days?",
    options: [
      { label: "Yes, without fail", value: "A", points: 5 },
      {
        label: "No, I'll start when the syllabus is 80% done",
        value: "B",
        points: 2,
      },
      {
        label: "I'm terrified of mock tests and avoid them",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 18,
    block: "Tactical Testing & Strategic Support",
    text: "The Competitive 'Rank' Awareness: Do you know how your daily output compares to the top 1% of aspirants?",
    options: [
      {
        label: "Yes, I have a leaderboard/peer-group comparison",
        value: "A",
        points: 5,
      },
      {
        label: "I have a vague idea from a few friends",
        value: "B",
        points: 2,
      },
      { label: "No, I study in total isolation", value: "C", points: 0 },
    ],
  },
  {
    id: 19,
    block: "Mental Resilience & Expert Guidance",
    text: "The 24/7 Expert Gap: Do you have a dedicated mentor available 24/7 who can resolve a preparation related doubt the moment it strikes?",
    options: [
      { label: "Yes, I have 24/7 on-call/chat support", value: "A", points: 5 },
      {
        label: "I have a teacher, but I have to wait for the next class",
        value: "B",
        points: 2,
      },
      {
        label: "No, I have to find answers on Google/YouTube myself",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 20,
    block: "Mental Resilience & Expert Guidance",
    text: "The Mental De-clutter (Journaling): Do you practice daily Journaling to offload your exam anxiety and 'What if' thoughts?",
    options: [
      {
        label: "I journal every night to clear my mental cache",
        value: "A",
        points: 5,
      },
      {
        label: "I write things down only when I'm very stressed",
        value: "B",
        points: 2,
      },
      {
        label: "I don't journal; I just try to ignore the stress",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 21,
    block: "Mental Resilience & Expert Guidance",
    text: "The 'Hardship' Perspective: When you face a very difficult topic that you cannot understand, what is your internal dialogue?",
    options: [
      {
        label: "'This is a challenge. If I solve this, I will be ahead.'",
        value: "A",
        points: 5,
      },
      {
        label: "'I'll try to do the basics and move on.'",
        value: "B",
        points: 2,
      },
      {
        label: "'I'm not smart enough for this subject.'",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 22,
    block: "Mental Resilience & Expert Guidance",
    text: "The Accountability Mirror: When you are inconsistent, who or what do you blame most often?",
    options: [
      {
        label: "I blame my lack of discipline and fix it immediately",
        value: "A",
        points: 5,
      },
      {
        label: "I blame the situation but try to improve",
        value: "B",
        points: 2,
      },
      {
        label: "I blame the teachers, competition, or luck",
        value: "C",
        points: 0,
      },
    ],
  },
  {
    id: 23,
    block: "Mental Resilience & Expert Guidance",
    text: "Do you know exactly why you need to remain consistent for this month specifically? Do you see how these 30 days connect to your final success, or are you just 'counting days'?",
    options: [
      {
        label:
          "Yes, I have mapped my monthly targets to my life goals; I know why every hour matters",
        value: "A",
        points: 5,
      },
      {
        label:
          "I try to be consistent because I know I should, but I lose track of the 'Why' easily",
        value: "B",
        points: 2,
      },
      { label: "No", value: "C", points: 0 },
    ],
  },
  {
    id: 24,
    block: "General",
    text: "How much you are confused about your sources?",
    options: [
      { label: "I stick to my sources.", value: "A", points: 5 },
      { label: "I changes frequently.", value: "B", points: 2 },
      { label: "I still do not know.", value: "C", points: 0 },
    ],
  },
  {
    id: 25,
    block: "General",
    text: "Do you give weekly test?",
    options: [
      { label: "Every week", value: "A", points: 5 },
      { label: "Not regular.", value: "B", points: 2 },
      { label: "Hardly any.", value: "C", points: 0 },
    ],
  },
];
