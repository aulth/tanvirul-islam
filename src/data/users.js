const users = [
    {
      id: "01",
      name: "Mohd Usman",
      username: "mohd.usman_7d3",
      email: "usman@gmail.com",
      avatar: "https://img.icons8.com/color/48/circled-user-male-skin-type-1-2--v1.png",
      phone: "9839872992",
      bio: "Hi, I am Mohd Usman. I am pursuing B.Tech Electrical Engineering from Jamia Millia Islamia.",
      title: "Fullstack Developer",
      course: "B.Tech (Electrical Engineering)",
      from: "2020",
      to: "2024",
      facebook: "yem.usman",
      twitter: "yem_usman",
      instagram: "mohd.usman_7d3",
      whatsapp: "9839872992",
      password: "1234",
      images: [
        {
          src: "https://source.unsplash.com/random/?man",
          date: "27/07/2023",
          caption: "Professor Man",
        },
        {
          src: "https://source.unsplash.com/random/?student",
          date: "02/07/2022",
          caption: "Student studying",
        },
        {
          src: "https://source.unsplash.com/random/?girl",
          date: "20/05/2023",
          caption: "Girl sitting in class",
        },
        {
          src: "https://source.unsplash.com/random/?women",
          date: "21/02/2023",
          caption: "Women working",
        },
        {
          src: "https://source.unsplash.com/random/?collage",
          date: "01/07/2023",
          caption: "This is our college",
        },
        {
          src: "https://source.unsplash.com/random/?office",
          date: "27/06/2023",
          caption: "Office",
        },
        {
          src: "https://source.unsplash.com/random/?ground",
          date: "12/07/2023",
          caption: "Here we play matches",
        },
      ],
    },
    // User 2
    {
      id: "02",
      name: "Emily Johnson",
      username: "emily.johnson_89",
      email: "emily@gmail.com",
      avatar: "https://img.icons8.com/color/48/circled-user-female-skin-type-1-2--v1.png",
      phone: "9876543210",
      bio: "Hello, I'm Emily Johnson. I'm a Computer Science student at Stanford University.",
      title: "Frontend Developer",
      course: "B.Sc (Computer Science)",
      from: "2019",
      to: "2023",
      facebook: "emily.johnson",
      twitter: "emily_john",
      instagram: "emily.johnson_89",
      whatsapp: "9876543210",
      password: "password123",
      images: [
        {
          src: "https://source.unsplash.com/random/?coding",
          date: "15/08/2023",
          caption: "Coding session",
        },
        {
          src: "https://source.unsplash.com/random/?classroom",
          date: "10/03/2022",
          caption: "In the classroom",
        },
        // Add more images here
      ],
    },
    // User 3
    {
      id: "03",
      name: "Alex Smith",
      username: "alex_smith_22",
      email: "alex@gmail.com",
      avatar: "https://img.icons8.com/color/48/circled-user-male-skin-type-5--v1.png",
      phone: "8765432109",
      bio: "Hey there, I'm Alex Smith. Currently majoring in Mechanical Engineering.",
      title: "Mechanical Engineer",
      course: "B.Eng (Mechanical Engineering)",
      from: "2021",
      to: "2025",
      facebook: "alex.smith",
      twitter: "alex_smith_22",
      instagram: "alex_smith_22",
      whatsapp: "8765432109",
      password: "mechanic123",
      images: [
        {
          src: "https://source.unsplash.com/random/?engineering",
          date: "05/09/2023",
          caption: "Engineering workshop",
        },
        {
          src: "https://source.unsplash.com/random/?mechanics",
          date: "20/11/2022",
          caption: "Working on mechanics",
        },
        // Add more images here
      ],
    },
    // User 4
    {
      id: "04",
      name: "Sophia Williams",
      username: "sophia.williams_45",
      email: "sophia@gmail.com",
      avatar: "https://img.icons8.com/color/48/circled-user-female-skin-type-3--v1.png",
      phone: "7654321098",
      bio: "Greetings! I'm Sophia Williams. Psychology enthusiast and aspiring therapist.",
      title: "Psychology Student",
      course: "B.A (Psychology)",
      from: "2018",
      to: "2022",
      facebook: "sophia.williams",
      twitter: "sophia_will45",
      instagram: "sophia.williams_45",
      whatsapp: "7654321098",
      password: "mindmatters",
      images: [
        {
          src: "https://source.unsplash.com/random/?psychology",
          date: "18/06/2023",
          caption: "Exploring psychology",
        },
        {
          src: "https://source.unsplash.com/random/?therapy",
          date: "03/02/2022",
          caption: "Therapy session",
        },
        // Add more images here
      ],
    },
    // User 5
    {
      id: "05",
      name: "Daniel Brown",
      username: "daniel.brown_78",
      email: "daniel@gmail.com",
      avatar: "https://img.icons8.com/color/48/circled-user-male-skin-type-4--v1.png",
      phone: "6543210987",
      bio: "Hello, I'm Daniel Brown. Passionate about environmental science and conservation.",
      title: "Environmental Scientist",
      course: "B.Sc (Environmental Science)",
      from: "2017",
      to: "2021",
      facebook: "daniel.brown",
      twitter: "daniel_brown78",
      instagram: "daniel.brown_78",
      whatsapp: "6543210987",
      password: "greenplanet",
      images: [
        {
          src: "https://source.unsplash.com/random/?environment",
          date: "28/04/2023",
          caption: "In the natural world",
        },
        {
          src: "https://source.unsplash.com/random/?conservation",
          date: "11/09/2022",
          caption: "Conservation efforts",
        },
        // Add more images here
      ],
    },
    // User 6
    {
      id: "06",
      name: "Olivia Martinez",
      username: "olivia.martinez_56",
      email: "olivia@gmail.com",
      avatar: "https://img.icons8.com/color/48/circled-user-female-skin-type-2--v1.png",
      phone: "5432109876",
      bio: "Hi, I'm Olivia Martinez. Film lover and aspiring filmmaker.",
      title: "Film Student",
      course: "B.A (Film Studies)",
      from: "2019",
      to: "2023",
      facebook: "olivia.martinez",
      twitter: "olivia_films56",
      instagram: "olivia.martinez_56",
      whatsapp: "5432109876",
      password: "cinema123",
      images: [
        {
          src: "https://source.unsplash.com/random/?filmmaking",
          date: "02/03/2023",
          caption: "Behind the scenes",
        },
        {
          src: "https://source.unsplash.com/random/?film",
          date: "15/07/2022",
          caption: "Exploring the world of film",
        },
        // Add more images here
      ],
    },
    // User 7
    {
      id: "07",
      name: "William Anderson",
      username: "william.anderson_34",
      email: "william@gmail.com",
      avatar: "https://img.icons8.com/color/48/circled-user-male-skin-type-6--v1.png",
      phone: "4321098765",
      bio: "Greetings, I'm William Anderson. Aspiring astronomer with a love for the cosmos.",
      title: "Astronomy Enthusiast",
      course: "B.Sc (Astronomy)",
      from: "2020",
      to: "2024",
      facebook: "william.anderson",
      twitter: "william_cosmos34",
      instagram: "william.anderson_34",
      whatsapp: "4321098765",
      password: "cosmic123",
      images: [
        {
          src: "https://source.unsplash.com/random/?astronomy",
          date: "06/12/2023",
          caption: "Stargazing adventure",
        },
        {
          src: "https://source.unsplash.com/random/?telescope",
          date: "28/05/2022",
          caption: "Through the telescope",
        },
        // Add more images here
      ],
    },
    // User 8
    {
      id: "08",
      name: "Chloe Lee",
      username: "chloe.lee_67",
      email: "chloe@gmail.com",
      avatar: "https://img.icons8.com/color/48/circled-user-female-skin-type-1-2--v1.png",
      phone: "3210987654",
      bio: "Hello there, I'm Chloe Lee. Literature lover and aspiring author.",
      title: "English Literature Student",
      course: "B.A (English Literature)",
      from: "2018",
      to: "2022",
      facebook: "chloe.lee",
      twitter: "chloe_lit67",
      instagram: "chloe.lee_67",
      whatsapp: "3210987654",
      password: "bookworm123",
      images: [
        {
          src: "https://source.unsplash.com/random/?books",
          date: "10/08/2023",
          caption: "Diving into literature",
        },
        {
          src: "https://source.unsplash.com/random/?writing",
          date: "17/01/2022",
          caption: "Penning down thoughts",
        },
        // Add more images here
      ],
    },
    // User 9
    {
      id: "09",
      name: "Liam Baker",
      username: "liam.baker_90",
      email: "liam@gmail.com",
      avatar: "https://img.icons8.com/color/48/circled-user-male-skin-type-1-2--v1.png",
      phone: "2109876543",
      bio: "Hey, I'm Liam Baker. Sports enthusiast and future sports analyst.",
      title: "Sports Management Student",
      course: "B.S (Sports Management)",
      from: "2021",
      to: "2025",
      facebook: "liam.baker",
      twitter: "liam_sports90",
      instagram: "liam.baker_90",
      whatsapp: "2109876543",
      password: "sportsfan123",
      images: [
        {
          src: "https://source.unsplash.com/random/?sports",
          date: "30/11/2023",
          caption: "Game day excitement",
        },
        {
          src: "https://source.unsplash.com/random/?analysis",
          date: "09/04/2022",
          caption: "Analyzing the game",
        },
        // Add more images here
      ],
    },
    // User 10
    {
      id: "10",
      name: "Ava Miller",
      username: "ava.miller_12",
      email: "ava@gmail.com",
      avatar: "https://img.icons8.com/color/48/circled-user-female-skin-type-4--v1.png",
      phone: "1098765432",
      bio: "Hi, I'm Ava Miller. Nature lover and aspiring environmental activist.",
      title: "Environmental Studies Student",
      course: "B.Sc (Environmental Studies)",
      from: "2019",
      to: "2023",
      facebook: "ava.miller",
      twitter: "ava_eco12",
      instagram: "ava.miller_12",
      whatsapp: "1098765432",
      password: "eco123",
      images: [
        {
          src: "https://source.unsplash.com/random/?nature",
          date: "25/05/2023",
          caption: "Embracing the outdoors",
        },
        {
          src: "https://source.unsplash.com/random/?activism",
          date: "14/03/2022",
          caption: "Advocating for the environment",
        },
        // Add more images here
      ],
    },
    // Add more users here
  ];
  
  export default users;
  