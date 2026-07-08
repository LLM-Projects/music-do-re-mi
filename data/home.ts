export const homeData = {
  hero: {
    title: "Discover the Joy of Music",
    description:
      "At Music Do Re Mi, we nurture music talent through expert instruction, inspiring facilities, and a supportive community.",
    video: {
      src: "assets/hero.mov",
      type: "video/quicktime",
      fallback: "Your browser does not support the video tag."
    },
    cta: [
      { label: "Latest Updates", href: "/news", variant: "default" },
      { label: "Contact Us", href: "/contact", variant: "outline" },
    ],
  },
  about: {
    title: "Our Passion for Music Education",
    description:
      "For over 30 years, Music Do Re Mi has been a cornerstone of musical education in the Johns Creek, Suwanee, and Duluth community",
    cta: { label: "About Us", href: "/about" },
    image: "assets/generic/9 - cello lesson.jpg",
    imageAlt: "Music students in a class",
  },
  programs: {
    title: "Our Music Programs",
    description:
      "Discover the perfect program to match your musical interests and goals.",
    items: [
      {
        title: "Piano Lessons",
        description:
          "Master the keyboard with our comprehensive piano curriculum.",
        image: "assets/generic/4 - Piano.JPG",
      },
      {
        title: "Strings - Violin, Viola, Cello, Bass",
        description:
          "From classical to rock, learn to play string instruments with confidence.",
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/RUuM27ljarUqeRP23uJ_nw/o.jpg",
      },
      {
        title: "Band - Guitar, Flute, Clarinet, Saxophone",
        description:
          "We offer a wide range of other music lessons, including guitar, and more.",
        image: "assets/generic/14 - clarinet lesson.jpg",
      },
    ],
    cta: { label: "View Our Teachers", href: "/faculty" },
  },
  testimonials: {
    title: "What Our Customers Say",
    items: [
      {
        quote:
          "Great music school for kids! My 5 yo son goes for piano lessons and really enjoys class with Ms. Irena!",
        author: "Skanda and Chao",
        role: "Parents",
      },
      {
        quote:
          "My kid loves Sunny Kim. She is a piano teacher but also teach my kid about fundamentals music keys . I was so frustrated when my daughter learned 1 year of piano outside and didn't even know how to read the music scores. She enjoys her class and now at least she can play piano without any help. I will recommend this school.",
        author: "Yang",
        role: "Parent",
      },
      {
        quote:
          "My daughter has been going to this school for more than ten years now for different music lessons. DoReMi maintains the quality of its teachers. Special mention to Ms Irina and Ms Bonnie. Great music school!",
        author: "Sukesh",
        role: "Parent",
      },
      {
        quote:
          "Great music school! Tons of variety and the teachers are all amazing! Greatly recommend to any new learners.",
        author: "Ellyne",
        role: "Student",
      },
    ],
  },
  cta: {
    title: "Ready to Begin Your Musical Journey?",
    description:
      "Experience a trial lesson at $45 for a 30 minute session with our expert instructors. Reach us to schedule your trial and discover the joy of music!",
    buttons: [
      { label: "Contact Us", href: "/contact", variant: "default" },
      { label: "Instruments for Rent and Purchase", href: "/instruments", variant: "outline" },
    ],
    image: "assets/generic/2-piano_theory.jpg",
    imageAlt: "Music instruments",
  },
};
