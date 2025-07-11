import { Description } from "@radix-ui/react-toast";

export const newsData = {
  hero: {
    title: "News & Events",
    description: "Stay updated with the latest happenings at Music Do Re Mi",
  },
  news: {
    title: "Latest News",
    items: [
      {
        title: "Celebrating Our Students' Outstanding Achievements in 2025",
        date: "2025",
        image: "/assets/generic/10 - recital event.jpg",
        summary:
          "Congratulations to our talented students and dedicated teachers for their remarkable achievements in ABRSM, NFMC, GMTA, and All State competitions!",
        content:
          "We are incredibly proud to announce that our students have achieved exceptional results across multiple prestigious music examinations and competitions. Here are our outstanding achievers:",
        achievements: {
          piano: {
            title: "Piano Excellence",
            teachers: [
              {
                name: "Patty Chen",
                students: [
                  {
                    name: "Jayden Qian",
                    awards: ["ABRSM with Distinction", "NFMC"],
                  },
                  {
                    name: "Kelvin Yuan Gao",
                    awards: ["ABRSM with Merit", "NFMC"],
                  },
                  { name: "Jessie Ma", awards: ["ABRSM with Merit", "NFMC"] },
                  {
                    name: "Zhengbo Jiang",
                    awards: ["ABRSM with Distinction", "NFMC Superior Rating"],
                  },
                  {
                    name: "Aiden Wang",
                    awards: ["ABRSM", "NFMC Superior Rating"],
                  },
                  { name: "Katie Wang", awards: ["ABRSM with Merit", "IMAS"] },
                  {
                    name: "Jasmine Wang",
                    awards: ["NFMC Superior+ Rating", "3rd Place"],
                  },
                  { name: "Teddy Marshall", awards: ["NFMC Superior Rating"] },
                  { name: "Philip Deng", awards: ["NFMC Superior Rating"] },
                ],
              },
              {
                name: "Joyce Doyle",
                students: [
                  { name: "Bill Zhou", awards: ["NFMC Superior Rating"] },
                  { name: "Iris Chen", awards: ["NFMC Superior+ Rating"] },
                  { name: "Ivy Yin", awards: ["NFMC Superior Rating"] },
                  { name: "Darsh Raja", awards: ["NFMC Superior Rating"] },
                  { name: "Anish Raja", awards: ["NFMC Superior+ Rating"] },
                  {
                    name: "Charlene Carrizo",
                    awards: ["NFMC Superior Rating"],
                  },
                  {
                    name: "Sophia Lawrence",
                    awards: ["NFMC Superior+ Rating"],
                  },
                  { name: "Matthew Ma", awards: ["NFMC Superior+ Rating"] },
                  { name: "Mark Ma", awards: ["NFMC Superior+", "1st Place"] },
                  {
                    name: "Michael Ma",
                    awards: ["NFMC Superior+ Rating", "2nd Place"],
                  },
                  { name: "Alan Lam", awards: ["NFMC Superior+ Rating"] },
                  { name: "Logan Wen", awards: ["NFMC Superior+ Rating"] },
                  { name: "Olivia Ju", awards: ["NFMC Superior Rating"] },
                ],
              },
            ],
          },
          clarinet: {
            title: "Clarinet & Saxophone Excellence",
            teachers: [
              {
                name: "Jay Webler",
                students: [
                  { name: "Yangyang Gao", awards: ["All State"] },
                  { name: "Eric Mao", awards: ["All State"] },
                  { name: "Alex Zhou", awards: ["All State"] },
                  { name: "Zhenbo Jaydon Jiang", awards: ["All State"] },
                  { name: "Andrew Chen", awards: ["All State"] },
                  { name: "Joseph Lee", awards: ["All State"] },
                  { name: "Alex Zheng", awards: ["All State"] },
                  { name: "Raymond Chen", awards: ["All State"] },
                  { name: "Yinan Chen", awards: ["All State"] },
                  { name: "Yisheng Chen", awards: ["All State"] },
                  { name: "Jason Zhou", awards: ["All State"] },
                ],
              },
              {
                name: "Ricardo Silva Ferierra",
                students: [{ name: "Jeremy Yang", awards: ["All State"] }],
              },
            ],
          },
          other: {
            title: "Additional Outstanding Achievements",
            teachers: [
              {
                name: "Sunny Kim",
                students: [
                  {
                    name: "Erik Lee Christ",
                    awards: ["GMTA Outstanding Performer"],
                  },
                  {
                    name: "Edward Kim",
                    awards: ["GMTA Outstanding Performer Regional"],
                  },
                  { name: "Abigail Kim", awards: ["GMTA"] },
                ],
              },
            ],
          },
        },
      },
    ],
  },
  events: {
    title: "Events",
    description:
      "Join us for our exciting events and activities throughout the year.",
    items: [
      {
        name: "☀️ Summer Concert 🎙️",
        date: "July 19, 2025",
        time: "7:00 PM onwards",
        location: "Music Do Re Mi School, Suite#525, 10740 Medlock Bridge Road, John Creek, GA",
        description: "Come Join Us for Our Concert, Free Admission 🆓",
      },
      {
        name: "🥁 Drums Lesson 🥁",
        date: "TBD",
        time: "Ages 3+",
        location: "Music Do Re Mi School",
        image: "/assets/events/drum-lessons.png",
        description:
          "New Semester, New Adventure of Drum Rolls!",
      },
      {
        name: "Chamber Music Program",
        date: "August 13, 2025 - December 10th 2025",
        time: "Total 18 sessions",
        location:
          "Music Do Re Mi School - Recital Hall, Suite #525, 10740 Medlock Bridge Road, John Creek, GA",
        image: "/assets/events/chamber-music.png",
        description:
          "Improving Musical Skills, Sightreading, Rhythm, Music Theory, Musical sensitivities, Musical confidence, Communication and Teamwork.",
      },
    ],
  },
};
