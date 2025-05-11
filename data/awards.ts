export type RecognitionType =
  | "competition"
  | "scholarship"
  | "performance"
  | "academic"
  | "teaching"
  | "community";

export type Award = {
  id: string;
  student: string;
  studentImage?: string;
  teacher: string;
  teacherImage?: string;
  award: string;
  date: string;
  description: string;
  type: RecognitionType;
  category?: string;
  location?: string;
  instrument?: string;
};

export const recognitionsData = {
  title: "Student & Teacher Recognitions",
  description:
    "Celebrating the achievements and accomplishments of our talented students and dedicated teachers.",
  recognitions: [
    {
      name: "Jayden Qian",
      teacher: "Patty Chen",
      awards: [
        { organization: "ABRSM", rating: "w/ Distinction" },
        { organization: "NFMC", rating: "w/ Distinction" },
      ],
    },
    {
      name: "Kelvin Yuan Gao",
      teacher: "Patty Chen",
      awards: [
        { organization: "ABRSM", rating: "w/ Merit" },
        { organization: "NFMC", rating: "w/ Merit" },
      ],
    },
    {
      name: "Jessie Ma",
      teacher: "Patty Chen",
      awards: [
        { organization: "ABRSM", rating: "w/ Merit" },
        { organization: "NFMC", rating: "w/ Merit" },
      ],
    },
    {
      name: "Zhengbo Jiang",
      teacher: "Patty Chen",
      awards: [
        { organization: "ABRSM", rating: "w/ Distinction" },
        { organization: "NFMC", rating: "Superior Rating" },
      ],
    },
    {
      name: "Aiden Wang",
      teacher: "Patty Chen",
      awards: [
        { organization: "ABRSM", rating: "Superior Rating" },
        { organization: "NFMC", rating: "Superior Rating" },
      ],
    },
    {
      name: "Katie Wang",
      teacher: "Patty Chen",
      awards: [
        { organization: "ABRSM", rating: "w/ Merit" },
        { organization: "IMAS", rating: "w/ Merit" },
      ],
    },
    {
      name: "Jasmine Wang",
      teacher: "Patty Chen",
      awards: [
        { organization: "NFMC", rating: "Superior+ Rating" },
        { organization: "NFMC", rating: "3rd Place" },
      ],
    },
    {
      name: "Teddy Marshall",
      teacher: "Patty Chen",
      awards: [{ organization: "NFMC", rating: "Superior Rating" }],
    },
    {
      name: "Philip Deng",
      teacher: "Patty Chen",
      awards: [{ organization: "NFMC", rating: "Superior Rating" }],
    },
    {
      name: "Bill Zhou",
      teacher: "Joyce Doyle",
      awards: [{ organization: "NFMC", rating: "Superior Rating" }],
    },
    {
      name: "Iris Chen",
      teacher: "Joyce Doyle",
      awards: [{ organization: "NFMC", rating: "Superior+ Rating" }],
    },
    {
      name: "Ivy Yin",
      teacher: "Joyce Doyle",
      awards: [{ organization: "NFMC", rating: "Superior Rating" }],
    },
    {
      name: "Darsh Raja",
      teacher: "Joyce Doyle",
      awards: [{ organization: "NFMC", rating: "Superior Rating" }],
    },
    {
      name: "Anish Raja",
      teacher: "Joyce Doyle",
      awards: [{ organization: "NFMC", rating: "Superior+ Rating" }],
    },
    {
      name: "Charlene Carrizo",
      teacher: "Joyce Doyle",
      awards: [{ organization: "NFMC", rating: "Superior Rating" }],
    },
    {
      name: "Sophia Lawrence",
      teacher: "Joyce Doyle",
      awards: [{ organization: "NFMC", rating: "Superior+ Rating" }],
    },
    {
      name: "Matthew Ma",
      teacher: "Joyce Doyle",
      awards: [{ organization: "NFMC", rating: "Superior+ Rating" }],
    },
    {
      name: "Mark Ma",
      teacher: "Joyce Doyle",
      awards: [
        { organization: "NFMC", rating: "Superior+" },
        { organization: "NFMC", rating: "1st Place" },
      ],
    },
    {
      name: "Michael Ma",
      teacher: "Joyce Doyle",
      awards: [
        { organization: "NFMC", rating: "Superior+ Rating" },
        { organization: "NFMC", rating: "2nd Place" },
      ],
    },
    {
      name: "Alan Lam",
      teacher: "Joyce Doyle",
      awards: [{ organization: "NFMC", rating: "Superior+ Rating" }],
    },
    {
      name: "Logan Wen",
      teacher: "Joyce Doyle",
      awards: [{ organization: "NFMC", rating: "Superior+ Rating" }],
    },
    {
      name: "Olivia Ju",
      teacher: "Joyce Doyle",
      awards: [{ organization: "NFMC", rating: "Superior Rating" }],
    },
    {
      name: "Jeremy Yang",
      teacher: "Ricardo Silva Ferierra",
      awards: [{ organization: "All State" }],
    },
    {
      name: "Yangyang Gao",
      teacher: "Jay Webler",
      awards: [{ organization: "All State" }],
    },
    {
      name: "Eric Mao",
      teacher: "Jay Webler",
      awards: [{ organization: "All State" }],
    },
    {
      name: "Alex Zhou",
      teacher: "Jay Webler",
      awards: [{ organization: "All State" }],
    },
    {
      name: "Zhenbo Jaydon Jiang",
      teacher: "Jay Webler",
      awards: [{ organization: "All State" }],
    },
    {
      name: "Andrew Chen",
      teacher: "Jay Webler",
      awards: [{ organization: "All State" }],
    },
    {
      name: "Joseph Lee",
      teacher: "Jay Webler",
      awards: [{ organization: "All State" }],
    },
    {
      name: "Alex Zheng",
      teacher: "Jay Webler",
      awards: [{ organization: "All State" }],
    },
    {
      name: "Raymond Chen",
      teacher: "Jay Webler",
      awards: [{ organization: "All State" }],
    },
    {
      name: "Yinan Chen",
      teacher: "Jay Webler",
      awards: [{ organization: "All State" }],
    },
    {
      name: "Yisheng Chen",
      teacher: "Jay Webler",
      awards: [{ organization: "All State" }],
    },
    {
      name: "Jason Zhou",
      teacher: "Jay Webler",
      awards: [{ organization: "All State" }],
    },
    {
      name: "Erik Lee Christ",
      teacher: "Sunny Kim",
      awards: [{ organization: "GMTA", rating: "Outstanding Performer" }],
    },
    {
      name: "Edward Kim",
      teacher: "Sunny Kim",
      awards: [
        { organization: "GMTA", rating: "Outstanding Performer Regional" },
      ],
    },
    {
      name: "Abigail Kim",
      teacher: "Sunny Kim",
      awards: [{ organization: "GMTA" }],
    },
  ],
};

export const recognitionTypes = [
  { value: "all", label: "All Types" },
  { value: "competition", label: "Competitions" },
  { value: "scholarship", label: "Scholarships" },
  { value: "performance", label: "Performances" },
  { value: "academic", label: "Academic" },
  { value: "teaching", label: "Teaching" },
  { value: "community", label: "Community" },
];

export const instruments = [
  { value: "all", label: "All Instruments" },
  { value: "Piano", label: "Piano" },
  { value: "Violin", label: "Violin" },
  { value: "Guitar", label: "Guitar" },
  { value: "Voice", label: "Voice" },
  { value: "Flute", label: "Flute" },
  { value: "Saxophone", label: "Saxophone" },
  { value: "Cello", label: "Cello" },
  { value: "Trumpet", label: "Trumpet" },
  { value: "Viola", label: "Viola" },
  { value: "Percussion", label: "Percussion" },
  { value: "Composition", label: "Composition" },
  { value: "General Music", label: "General Music" },
];
