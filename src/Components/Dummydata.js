const dummydata = [
    {
      id: 1,
      title: "Introduction to React",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s",
      author: "John Doe",
      curriculum: [
        { title: "Setting up React", duration: "10:32", completed: true },
        { title: "Understanding Components", duration: "15:45", completed: true },
        { title: "State and Props", duration: "12:20", completed: false },
      ],
    },
    {
      id: 2,
      title: "Advanced JavaScript Techniques",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s",
      author: "Jane Smith",
      curriculum: [
        { title: "Functional Programming Basics", duration: "20:15", completed: false },
        { title: "Promises and Async Await", duration: "18:30", completed: true },
        { title: "ES6 Features", duration: "25:00", completed: true },
      ],
    },
    {
      id: 3,
      title: "Python for Data Science",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s",
      author: "Emily Brown",
      curriculum: [
        { title: "Introduction to Python", duration: "14:50", completed: true },
        { title: "Data Manipulation with Pandas", duration: "22:05", completed: false },
        { title: "Data Visualization with Matplotlib", duration: "19:18", completed: false },
      ],
    },
    {
      id: 4,
      title: "Web Development Fundamentals",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s",
      author: "Michael Johnson",
      curriculum: [
        { title: "HTML and CSS Basics", duration: "16:40", completed: true },
        { title: "JavaScript Fundamentals", duration: "21:55", completed: true },
        { title: "Introduction to Backend", duration: "24:10", completed: false },
      ],
    },
    {
      id: 5,
      title: "Machine Learning Basics",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s",
      author: "Alex Davis",
      curriculum: [
        { title: "Introduction to ML Algorithms", duration: "17:20", completed: true },
        { title: "Linear Regression Explained", duration: "23:30", completed: false },
        { title: "Supervised vs Unsupervised Learning", duration: "20:45", completed: false },
      ],
    },
    {
      id: 6,
      title: "Cybersecurity Essentials",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s",
      author: "Sophia Johnson",
      curriculum: [
        { title: "Introduction to Cybersecurity", duration: "18:05", completed: true },
        { title: "Network Security Fundamentals", duration: "26:15", completed: true },
        { title: "Ethical Hacking Techniques", duration: "30:00", completed: false },
      ],
    },
    {
      id: 7,
      title: "iOS App Development",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s",
      author: "David Miller",
      curriculum: [
        { title: "Setting up Xcode", duration: "12:25", completed: true },
        { title: "Swift Programming Basics", duration: "14:40", completed: false },
        { title: "Building User Interfaces", duration: "19:55", completed: false },
      ],
    },
    {
      id: 8,
      title: "Blockchain Technology",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s",
      author: "Andrew White",
      curriculum: [
        { title: "Introduction to Blockchain", duration: "13:10", completed: true },
        { title: "Smart Contracts and Ethereum", duration: "18:20", completed: true },
        { title: "Decentralized Applications", duration: "22:45", completed: false },
      ],
    },
    {
      id: 9,
      title: "Data Structures and Algorithms",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s",
      author: "Sophie Clark",
      curriculum: [
        { title: "Arrays and Linked Lists", duration: "15:30", completed: true },
        { title: "Sorting Algorithms", duration: "28:00", completed: false },
        { title: "Graph Algorithms", duration: "25:20", completed: false },
      ],
    },
    {
      id: 10,
      title: "UI/UX Design Fundamentals",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s",
      author: "Oliver Wilson",
      curriculum: [
        { title: "User Research Techniques", duration: "18:45", completed: true },
        { title: "Wireframing and Prototyping", duration: "20:50", completed: true },
        { title: "Designing for Accessibility", duration: "17:55", completed: false },
      ],
    },
    {
      id: 11,
      title: "Cloud Computing Basics",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s",
      author: "Isabella Moore",
      curriculum: [
        { title: "Introduction to Cloud Platforms", duration: "16:15", completed: true },
        { title: "Cloud Security Best Practices", duration: "23:30", completed: false },
        { title: "Serverless Architecture", duration: "19:40", completed: false },
      ],
    },
    {
      id: 12,
      title: "Artificial Intelligence",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s",
      author: "Daniel Thompson",
      curriculum: [
        { title: "Neural Networks Overview", duration: "22:05", completed: true },
        { title: "Deep Learning Concepts", duration: "27:30", completed: false },
        { title: "AI Ethics and Bias", duration: "21:20", completed: false },
      ],
    },
    {
      id: 13,
      title: "Digital Marketing Strategies",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s",
      author: "Sophia Williams",
      curriculum: [
        { title: "SEO Fundamentals", duration: "14:50", completed: true },
        { title: "Social Media Marketing", duration: "18:15", completed: false },
        { title: "Paid Advertising Techniques", duration: "16:25", completed: false },
      ],
    },
    {
      id: 14,
      title: "Business Analytics",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s",
      author: "Jack Robinson",
      curriculum: [
        { title: "Data Analysis Tools", duration: "19:20", completed: true },
        { title: "Predictive Modeling", duration: "24:40", completed: false },
        { title: "Business Intelligence Concepts", duration: "22:15", completed: false },
      ],
    },
    {
      id: 15,
      title: "Photography Basics",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0Yxms8HmXGCgIOF6h3TAlJkRTRiPDIdz0A&s",
      author: "Ella Anderson",
      curriculum: [
        { title: "Understanding Camera Settings", duration: "16:30", completed: true },
        { title: "Composition Techniques", duration: "21:45", completed: false },
        { title: "Editing and Post-Processing", duration: "18:55", completed: false },
      ],
    },
  ];
  
  export default dummydata;
  
