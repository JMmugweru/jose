export const courses = [
  {
    id: 1,
    title: "Python for Beginners",
    image: "/python.svg",
    description:
      "Learn Python from scratch. Ideal for beginners looking to enter the programming world.",
    price: 49.99,
    category: "Programming",
    language: "Python",
    instructor: "John Doe",
    duration: "10 hours",
    rating: 4.7,
    reviews: [
      {
        user: "Alice",
        rating: 5,
        comment: "Very beginner-friendly course!",
        date: "2024-10-01",
      },
      {
        user: "Bob",
        rating: 4,
        comment: "Great course but could use more examples.",
        date: "2024-09-21",
      },
    ],
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    image: "/js.svg",
    description:
      "Master JavaScript and build interactive web applications with ease.",
    price: 59.99,
    category: "Programming",
    language: "JavaScript",
    instructor: "Jane Smith",
    duration: "15 hours",
    rating: 4.8,
    reviews: [
      {
        user: "Charlie",
        rating: 5,
        comment: "Perfect course for learning JavaScript!",
        date: "2024-11-05",
      },
    ],
  },
  {
    id: 3,
    title: "C++ Fundamentals",
    image: "/CPlusPlus.svg",
    description:
      "A comprehensive guide to understanding and using C++ for software development.",
    price: 64.99,
    category: "Programming",
    language: "C++",
    instructor: "Chris White",
    duration: "12 hours",
    rating: 4.5,
    reviews: [
      {
        user: "Dana",
        rating: 4,
        comment: "Good course, covers all basics!",
        date: "2024-08-15",
      },
    ],
  },
  {
    id: 4,
    title: "Introduction to C#",
    image: "/CSharp.svg",
    description:
      "Learn C# from the ground up, focusing on the essentials of this powerful language.",
    price: 39.99,
    category: "Programming",
    language: "C#",
    instructor: "Emily Brown",
    duration: "8 hours",
    rating: 4.4,
    reviews: [
      {
        user: "Frank",
        rating: 4,
        comment: "Solid course but lacks advanced topics.",
        date: "2024-06-22",
      },
    ],
  },
  {
    id: 5,
    title: "HTML & CSS for Web Development",
    image: "/css.png",
    description:
      "Learn HTML and CSS from scratch and start building beautiful websites.",
    price: 29.99,
    category: "Web Development",
    language: "HTML, CSS",
    instructor: "Sara Green",
    duration: "6 hours",
    rating: 4.6,
    reviews: [
      {
        user: "George",
        rating: 5,
        comment: "Excellent for web beginners!",
        date: "2024-03-14",
      },
    ],
  },
  {
    id: 6,
    title: "React - The Complete Guide",
    image: "/react.png",
    description: "Master React.js and build powerful, fast web applications.",
    price: 69.99,
    category: "Web Development",
    language: "React",
    instructor: "Henry Black",
    duration: "20 hours",
    rating: 4.9,
    reviews: [
      {
        user: "Ivy",
        rating: 5,
        comment: "Best React course out there!",
        date: "2024-09-30",
      },
    ],
  },
  {
    id: 7,
    title: "Java Programming Masterclass",
    image: "/java.svg",
    description:
      "In-depth Java course, ideal for beginners and experienced programmers alike.",
    price: 79.99,
    category: "Programming",
    language: "Java",
    instructor: "Jack Wilson",
    duration: "25 hours",
    rating: 4.7,
    reviews: [
      {
        user: "Karen",
        rating: 5,
        comment: "Extensive Java course, worth every penny!",
        date: "2024-07-19",
      },
    ],
  },
  {
    id: 8,
    title: "Angular for Beginners",
    image: "/angular.png",
    description: "Learn Angular and build dynamic, modern web applications.",
    price: 49.99,
    category: "Web Development",
    language: "Angular",
    instructor: "Liam Jones",
    duration: "18 hours",
    rating: 4.5,
    reviews: [],
  },
  {
    id: 9,
    title: "Introduction to Go Programming",
    image: "/go.jpg",
    description:
      "A beginner's guide to programming with Go, Google's programming language.",
    price: 55.99,
    category: "Programming",
    language: "Go",
    instructor: "Olivia Miller",
    duration: "10 hours",
    rating: 4.3,
    reviews: [
      {
        user: "Michael",
        rating: 4,
        comment: "Good intro to Go programming!",
        date: "2024-08-05",
      },
    ],
  },
  {
    id: 10,
    title: "Ruby on Rails for Web Developers",
    image: "/ruby.png",
    description:
      "Build web applications with Ruby on Rails, a popular web development framework.",
    price: 62.99,
    category: "Web Development",
    language: "Ruby",
    instructor: "Nancy King",
    duration: "14 hours",
    rating: 4.4,
    reviews: [
      {
        user: "Peter",
        rating: 5,
        comment: "Comprehensive Rails course!",
        date: "2024-10-12",
      },
    ],
  },
  {
    id: 11,
    title: "iOS Development with Swift",
    image: "/swift.svg",
    description:
      "Start building iOS apps with Swift, Apple's programming language for iOS development.",
    price: 99.99,
    category: "Mobile Development",
    language: "Swift",
    instructor: "Quinn Carter",
    duration: "30 hours",
    rating: 4.8,
    reviews: [
      {
        user: "Sophia",
        rating: 5,
        comment: "Fantastic iOS course!",
        date: "2024-11-03",
      },
    ],
  },
  {
    id: 12,
    title: "TypeScript for JavaScript Developers",
    description:
      "Enhance your JavaScript skills by learning TypeScript, the language with static types.",
    price: 54.99,
    category: "Programming",
    language: "TypeScript",
    instructor: "Rachel Green",
    duration: "12 hours",
    rating: 4.6,
    image: "/TypeScript.svg",
    reviews: [
      {
        user: "Lucas",
        rating: 5,
        comment:
          "Great course for JavaScript developers transitioning to TypeScript!",
        date: "2024-09-17",
      },
    ],
  },
  {
    id: 13,
    title: "Mastering PHP for Web Development",
    description:
      "Learn PHP from scratch and build dynamic, data-driven web applications.",
    price: 47.99,
    category: "Web Development",
    language: "PHP",
    instructor: "Mark Spencer",
    duration: "15 hours",
    rating: 4.5,
    image: "/PHP.svg",
    reviews: [
      {
        user: "Nina",
        rating: 4,
        comment: "Solid PHP course, covers all essentials!",
        date: "2024-05-20",
      },
    ],
  },
];

export const instructors = [
  {
    id: 1,
    name: "John Doe",
    bio: "John is a seasoned Python developer with over 10 years of experience in teaching and industry practice. He's passionate about making Python accessible to beginners.",
    experience: "10+ years",
    profile_picture:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    courses_taught: ["Python for Beginners"],
  },
  {
    id: 2,
    name: "Jane Smith",
    bio: "Jane is a front-end developer with expertise in JavaScript and modern web technologies. She's helped hundreds of students master JavaScript in interactive ways.",
    experience: "8+ years",
    profile_picture:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    courses_taught: ["JavaScript Essentials"],
  },
  {
    id: 3,
    name: "Chris White",
    bio: "Chris is a software engineer with a deep understanding of C++ and low-level programming. He has worked in the gaming industry and developed several open-source libraries.",
    experience: "12+ years",
    profile_picture:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    courses_taught: ["C++ Fundamentals"],
  },
  {
    id: 4,
    name: "Emily Brown",
    bio: "Emily is a C# developer specializing in application development for enterprise-level solutions. She loves sharing her expertise through comprehensive courses.",
    experience: "7+ years",
    profile_picture:
      "https://images.unsplash.com/photo-1524952249965-023a2a31663d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    courses_taught: ["Introduction to C#"],
  },
  {
    id: 5,
    name: "Sara Green",
    bio: "Sara is a web designer and developer who has been creating beautiful and responsive websites for over 5 years. Her courses on HTML & CSS are among the most popular.",
    experience: "5+ years",
    profile_picture:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    courses_taught: ["HTML & CSS for Web Development"],
  },
  {
    id: 6,
    name: "Henry Black",
    bio: "Henry is a React expert who has worked with various startups to build scalable web applications. His teaching style is hands-on, focusing on real-world projects.",
    experience: "6+ years",
    profile_picture:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    courses_taught: ["React - The Complete Guide"],
  },
  {
    id: 7,
    name: "Jack Wilson",
    bio: "Jack is a Java instructor with an extensive background in both teaching and development. He has worked on complex software systems for large corporations.",
    experience: "15+ years",
    profile_picture:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    courses_taught: ["Java Programming Masterclass"],
  },
  {
    id: 8,
    name: "Liam Jones",
    bio: "Liam is a full-stack developer and Angular expert. His passion is helping developers learn new technologies to enhance their career prospects.",
    experience: "8+ years",
    profile_picture:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    courses_taught: ["Angular for Beginners"],
  },
  {
    id: 9,
    name: "Olivia Miller",
    bio: "Olivia is a software developer with a background in Go programming and cloud infrastructure. She enjoys teaching Go to help developers create efficient applications.",
    experience: "6+ years",
    profile_picture:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    courses_taught: ["Introduction to Go Programming"],
  },
  {
    id: 10,
    name: "Nancy King",
    bio: "Nancy is a Ruby on Rails developer who has built multiple web applications for startups and enterprises. Her course focuses on practical skills for web developers.",
    experience: "9+ years",
    profile_picture:
      "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    courses_taught: ["Ruby on Rails for Web Developers"],
  },
  {
    id: 11,
    name: "Quinn Carter",
    bio: "Quinn is an iOS developer and Swift specialist. He has worked on various high-profile iOS applications and loves teaching others to build amazing iOS apps.",
    experience: "10+ years",
    profile_picture:
      "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    courses_taught: ["iOS Development with Swift"],
  },
  {
    id: 12,
    name: "Rachel Green",
    bio: "Rachel is a TypeScript and JavaScript expert who focuses on type safety and clean code practices. She enjoys helping JavaScript developers adopt TypeScript.",
    experience: "6+ years",
    profile_picture:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    courses_taught: ["TypeScript for JavaScript Developers"],
  },
  {
    id: 13,
    name: "Mark Spencer",
    bio: "Mark is a back-end developer specializing in PHP and database-driven applications. He’s been teaching PHP and MySQL for over a decade.",
    experience: "10+ years",
    profile_picture:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    courses_taught: ["Mastering PHP for Web Development"],
  },
];
