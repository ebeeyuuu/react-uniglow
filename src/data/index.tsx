import { MdPeople, MdConnectWithoutContact } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";
import { SiActivitypub } from "react-icons/si";

export const clubTypes = [
  {
    type: "Academic Clubs",
    description: "Deepen knowledge in specific fields of study.",
  },
  {
    type: "Cultural Clubs",
    description: "Celebrate and promote cultural diversity.",
  },
  {
    type: "Recreational Clubs",
    description: "Focus on leisure activities and hobbies.",
  },
  {
    type: "Volunteer Clubs",
    description: "Engage in community service and helping those in need.",
  },
  {
    type: "Professional Development Clubs",
    description: "Enhance career prospects through networking and workshops.",
  },
  {
    type: "Political Clubs",
    description:
      "Explore political beliefs and participate in civic activities.",
  },
  {
    type: "Artistic Clubs",
    description: "Encourage creativity through various art forms.",
  },
  {
    type: "Entrepreneur Clubs",
    description: "Support business creation and entrepreneurial skills.",
  },
  {
    type: "Environmental Clubs",
    description: "Focus on sustainability and environmental awareness.",
  },
  {
    type: "Social Clubs",
    description: "Provide platforms for socializing and building friendships.",
  },
  {
    type: "Religious Clubs",
    description: "Offer space for faith practices and spiritual discussions.",
  },
  {
    type: "Sports Clubs",
    description: "Participate in various sports and athletic activities.",
  },
  {
    type: "Debate Clubs",
    description: "Develop debating skills through organized debates.",
  },
  {
    type: "Literary Clubs",
    description: "Share passion for reading, writing, and literature.",
  },
  {
    type: "Science and Technology Clubs",
    description: "Engage in hands-on projects and research in STEM fields.",
  },
  {
    type: "Gaming Clubs",
    description: "Cater to video game enthusiasts and gaming culture.",
  },
  {
    type: "Investment Clubs",
    description: "Learn about financial markets and personal finance.",
  },
  {
    type: "Language Clubs",
    description: "Practice new languages and explore related cultures.",
  },
  {
    type: "Media and Journalism Clubs",
    description: "Engage in journalism and media production.",
  },
  {
    type: "Pre-Law Clubs",
    description: "Prepare for law careers through resources and networking.",
  },
  {
    type: "Pre-Medical Clubs",
    description: "Support students planning to attend medical school.",
  },
  {
    type: "Dance Clubs",
    description: "Explore various dance styles and performances.",
  },
  {
    type: "Theater and Drama Clubs",
    description: "Participate in acting and theater productions.",
  },
  {
    type: "Music Clubs",
    description: "Unite music enthusiasts for performance and appreciation.",
  },
  {
    type: "Film and Photography Clubs",
    description: "Explore visual arts through film and photography.",
  },
  {
    type: "Robotics Clubs",
    description: "Design and build robots for competitions or learning.",
  },
  {
    type: "Model United Nations (MUN) Clubs",
    description: "Simulate UN conferences and debate international issues.",
  },
  {
    type: "Quiz and Trivia Clubs",
    description: "Organize knowledge competitions on various topics.",
  },
  {
    type: "Peer Mentoring Clubs",
    description: "Offer guidance and support to fellow students.",
  },
  {
    type: "Outdoor and Adventure Clubs",
    description: "Organize outdoor activities and nature explorations.",
  },
  {
    type: "Student Government and Leadership Clubs",
    description: "Involve students in leadership and campus governance.",
  },
  {
    type: "Charity and Fundraising Clubs",
    description: "Raise funds and support various charitable causes.",
  },
  {
    type: "Health and Wellness Clubs",
    description: "Promote physical and mental well-being activities.",
  },
  {
    type: "Food and Cooking Clubs",
    description: "Explore cuisines and share cooking experiences.",
  },
  {
    type: "Historical and Archaeological Clubs",
    description:
      "Explore history and archaeology through discussions and projects.",
  },
  {
    type: "Animal and Pet Clubs",
    description: "Focus on animal care, welfare, and related activities.",
  },
  {
    type: "Fashion and Design Clubs",
    description: "Explore and showcase work in fashion and design.",
  },
  {
    type: "Public Speaking and Communication Clubs",
    description: "Develop public speaking and communication skills.",
  },
  {
    type: "Social Justice and Advocacy Clubs",
    description: "Advocate for human rights and social change.",
  },
  {
    type: "Astronomy Clubs",
    description: "Explore astronomy and space-related topics.",
  },
  {
    type: "Meditation and Mindfulness Clubs",
    description: "Practice meditation and mindfulness exercises.",
  },
  {
    type: "Peer Tutoring Clubs",
    description: "Provide academic support to fellow students.",
  },
  {
    type: "Ethics and Philosophy Clubs",
    description: "Discuss ethical issues and philosophical questions.",
  },
  {
    type: "Adventure and Travel Clubs",
    description: "Organize trips and explore new places and cultures.",
  },
  {
    type: "Cosplay and Anime Clubs",
    description: "Celebrate anime, manga, and cosplay culture.",
  },
  {
    type: "DIY and Maker Clubs",
    description: "Create and build various projects and crafts.",
  },
  {
    type: "Board Game Clubs",
    description: "Enjoy and discover various board games together.",
  },
  {
    type: "Chess Clubs",
    description: "Learn and play chess, participate in tournaments.",
  },
  {
    type: "Sustainability Clubs",
    description:
      "Promote eco-friendly practices and sustainability initiatives.",
  },
  {
    type: "Coding and Programming Clubs",
    description: "Develop coding skills and work on programming projects.",
  },
  {
    type: "Book Clubs",
    description: "Discuss and analyze various books and literary works.",
  },
  {
    type: "Improv Comedy Clubs",
    description: "Practice and perform improvisational comedy.",
  },
  {
    type: "Fitness Clubs",
    description:
      "Engage in various fitness activities and promote healthy lifestyles.",
  },
  {
    type: "Gardening Clubs",
    description: "Learn about plants, gardening techniques, and horticulture.",
  },
  {
    type: "Virtual Reality Clubs",
    description: "Explore VR technology and its applications.",
  },
  {
    type: "Podcasting Clubs",
    description: "Create and produce podcasts on various topics.",
  },
  {
    type: "Calligraphy and Handwriting Clubs",
    description: "Practice and showcase calligraphy and handwriting skills.",
  },
  {
    type: "Puzzle and Escape Room Clubs",
    description: "Solve puzzles and design escape room challenges.",
  },
  {
    type: "Car Enthusiast Clubs",
    description: "Share passion for automobiles and automotive technology.",
  },
  {
    type: "Upcycling and Recycling Clubs",
    description:
      "Create new items from recycled materials and promote waste reduction.",
  },
];

export const clubExamples = {
  academicClubs: [
    {
      name: "Physics Society",
      university: "Harvard University",
      club_description:
        "Fosters interest in physics through discussions and research projects.",
      university_description:
        "Ivy League university known for academic excellence.",
    },
    {
      name: "Economics Association",
      university: "Stanford University",
      club_description:
        "Engages students in economic theories and real-world applications.",
      university_description:
        "Renowned for innovation and research in Silicon Valley.",
    },
    {
      name: "History Club",
      university: "University of Oxford",
      club_description:
        "Focuses on historical events, research, and discussions.",
      university_description:
        "World-leading institution known for its tradition and scholarship.",
    },
    {
      name: "Biology Society",
      university: "Massachusetts Institute of Technology",
      club_description:
        "Promotes biological sciences through seminars and lab work.",
      university_description:
        "Leading research university known for STEM programs.",
    },
    {
      name: "Literature Club",
      university: "University of Cambridge",
      club_description: "Explores classic and contemporary literature.",
      university_description:
        "Historic institution recognized for literature and arts.",
    },
    {
      name: "Mathematics Society",
      university: "Princeton University",
      club_description:
        "Offers problem-solving sessions and math competitions.",
      university_description:
        "Highly regarded for strong math and science programs.",
    },
    {
      name: "Computer Science Club",
      university: "California Institute of Technology",
      club_description:
        "Explores computational theories and coding challenges.",
      university_description:
        "Focuses on engineering and applied sciences research.",
    },
    {
      name: "Philosophy Club",
      university: "Yale University",
      club_description: "Hosts debates on philosophical concepts and ethics.",
      university_description:
        "Ivy League university recognized for arts and humanities.",
    },
    {
      name: "Chemistry Club",
      university: "University of Chicago",
      club_description:
        "Promotes chemical research and networking with faculty.",
      university_description:
        "Known for rigorous academic programs and research.",
    },
    {
      name: "Engineering Society",
      university: "University of California, Berkeley",
      club_description:
        "Encourages innovation and projects in various engineering fields.",
      university_description:
        "Public research university with a focus on engineering and technology.",
    },
    {
      name: "Political Science Club",
      university: "Columbia University",
      club_description: "Focuses on political theory and current events.",
      university_description:
        "Ivy League school located in New York City with strong social sciences.",
    },
    {
      name: "Neuroscience Society",
      university: "University College London",
      club_description: "Discusses recent developments in brain science.",
      university_description:
        "Top UK institution known for medical research and innovation.",
    },
    {
      name: "Sociology Club",
      university: "University of Toronto",
      club_description:
        "Engages in sociological research and community outreach.",
      university_description:
        "Canada's largest university, recognized for social science programs.",
    },
    {
      name: "Law Society",
      university: "New York University",
      club_description: "Discusses legal cases and concepts.",
      university_description:
        "Leading law school located in the heart of New York City.",
    },
    {
      name: "Anthropology Club",
      university: "University of Edinburgh",
      club_description: "Studies human cultures and societies.",
      university_description:
        "Historic Scottish university known for research in humanities.",
    },
    {
      name: "Environmental Science Society",
      university: "University of Melbourne",
      club_description: "Focuses on sustainability and environmental research.",
      university_description:
        "Australia's top-ranked university, known for environmental studies.",
    },
    {
      name: "Astronomy Club",
      university: "University of Tokyo",
      club_description:
        "Explores the universe through observations and research.",
      university_description:
        "Leading Japanese university with a focus on science and technology.",
    },
    {
      name: "Linguistics Club",
      university: "University of Pennsylvania",
      club_description: "Discusses language theory and linguistic diversity.",
      university_description:
        "Ivy League university known for linguistics and humanities.",
    },
    {
      name: "Business Society",
      university: "London School of Economics",
      club_description:
        "Focuses on entrepreneurship and global business trends.",
      university_description:
        "World-renowned for economics and business programs.",
    },
    {
      name: "Psychology Club",
      university: "Duke University",
      club_description:
        "Promotes mental health awareness and psychological research.",
      university_description:
        "Known for medical research and strong academic programs.",
    },
    {
      name: "Data Science Club",
      university: "National University of Singapore",
      club_description:
        "Engages in data analysis and machine learning projects.",
      university_description:
        "Top Asian university known for innovation and technology.",
    },
    {
      name: "International Relations Club",
      university: "Georgetown University",
      club_description:
        "Discusses global diplomacy and international politics.",
      university_description:
        "Highly regarded for its international affairs programs.",
    },
    {
      name: "Archaeology Society",
      university: "University of Bristol",
      club_description:
        "Explores historical artifacts and ancient civilizations.",
      university_description:
        "UK-based research university with strong archaeology programs.",
    },
    {
      name: "Statistics Club",
      university: "Carnegie Mellon University",
      club_description: "Analyzes data and statistical theories.",
      university_description:
        "Leading research university known for technology and applied sciences.",
    },
    {
      name: "Public Health Club",
      university: "University of Michigan",
      club_description: "Promotes health awareness and policy discussions.",
      university_description:
        "Top public university with strong public health programs.",
    },
    {
      name: "Classics Society",
      university: "University of St Andrews",
      club_description: "Explores ancient Greek and Roman cultures.",
      university_description:
        "Historic Scottish university known for classics and history.",
    },
    {
      name: "Geography Club",
      university: "McGill University",
      club_description: "Discusses human geography and environmental impact.",
      university_description:
        "Canada's leading research university with diverse academic programs.",
    },
    {
      name: "Artificial Intelligence Society",
      university: "Imperial College London",
      club_description: "Focuses on AI development and machine learning.",
      university_description:
        "Top-ranked UK university known for engineering and AI research.",
    },
    {
      name: "Marketing Club",
      university: "University of Southern California",
      club_description:
        "Engages in marketing strategies and business development.",
      university_description:
        "Leading university located in Los Angeles with a strong business school.",
    },
    {
      name: "Civil Engineering Society",
      university: "University of Sydney",
      club_description:
        "Focuses on infrastructure design and urban development.",
      university_description:
        "Australia's oldest university known for engineering and architecture.",
    },
    {
      name: "Cybersecurity Club",
      university: "Purdue University",
      club_description: "Studies information security and ethical hacking.",
      university_description:
        "Renowned for its cybersecurity and computer science programs.",
    },
    {
      name: "Biomedical Engineering Society",
      university: "Johns Hopkins University",
      club_description:
        "Engages in medical innovation and engineering research.",
      university_description:
        "Top medical research institution with a focus on biomedical engineering.",
    },
    {
      name: "Architecture Society",
      university: "University of California, Los Angeles",
      club_description: "Explores architectural design and urban planning.",
      university_description:
        "Public university known for its arts, film, and architecture programs.",
    },
    {
      name: "Physics Club",
      university: "University of Texas at Austin",
      club_description:
        "Encourages research and discussions in theoretical physics.",
      university_description:
        "Top U.S. public university with a strong focus on STEM programs.",
    },
    {
      name: "Human Rights Society",
      university: "University of British Columbia",
      club_description: "Focuses on human rights issues and global justice.",
      university_description:
        "Canadian research university known for social sciences and global studies.",
    },
    {
      name: "Robotics Society",
      university: "University of Waterloo",
      club_description: "Engages in robotics research and innovation.",
      university_description:
        "Canada's top university for engineering and technology.",
    },
    {
      name: "Journalism Club",
      university: "University of Missouri",
      club_description: "Focuses on media ethics and reporting.",
      university_description:
        "Recognized for its journalism program and media studies.",
    },
    {
      name: "Finance Club",
      university: "University of Warwick",
      club_description:
        "Engages in financial markets and investment strategies.",
      university_description:
        "Top UK university known for its business and finance programs.",
    },
    {
      name: "Sustainability Club",
      university: "University of Queensland",
      club_description:
        "Promotes sustainable development and green initiatives.",
      university_description:
        "Top Australian university focused on environmental science.",
    },
    {
      name: "Marine Biology Club",
      university: "University of Hawaii",
      club_description: "Studies marine ecosystems and conservation efforts.",
      university_description:
        "Located in the Pacific, known for its oceanic and environmental research.",
    },
    {
      name: "Game Development Society",
      university: "DigiPen Institute of Technology",
      club_description: "Focuses on game design and software development.",
      university_description:
        "World-renowned for its programs in game development.",
    },
    {
      name: "Ethics Society",
      university: "University of Notre Dame",
      club_description: "Discusses moral philosophy and ethical dilemmas.",
      university_description:
        "Catholic university known for humanities and moral philosophy.",
    },
    {
      name: "Quantum Computing Club",
      university: "University of Waterloo",
      club_description:
        "Explores quantum mechanics and computational applications.",
      university_description:
        "Leader in quantum computing research and technology.",
    },
    {
      name: "Genetics Society",
      university: "University of Copenhagen",
      club_description: "Studies genetic engineering and biotechnology.",
      university_description:
        "Top Danish university known for medical and genetics research.",
    },
  ],
  culturalClubs: [
    {
      name: "Latin American Student Association",
      university: "Harvard University",
      club_description: "Promotes Latin American culture and community.",
      university_description:
        "Ivy League university known for academic excellence.",
    },
    {
      name: "Indian Cultural Society",
      university: "Stanford University",
      club_description: "Celebrates Indian traditions and festivals.",
      university_description:
        "Renowned for innovation and research in Silicon Valley.",
    },
    {
      name: "Chinese Students and Scholars Association",
      university: "University of Oxford",
      club_description:
        "Fosters Chinese culture through events and networking.",
      university_description:
        "World-leading institution known for its tradition and scholarship.",
    },
    {
      name: "African Students Association",
      university: "Massachusetts Institute of Technology",
      club_description: "Promotes African culture and heritage.",
      university_description:
        "Leading research university known for STEM programs.",
    },
    {
      name: "Arab Cultural Society",
      university: "University of Cambridge",
      club_description:
        "Explores Arabic culture through events and discussions.",
      university_description:
        "Historic institution recognized for literature and arts.",
    },
    {
      name: "Korean Student Association",
      university: "Princeton University",
      club_description: "Engages in promoting Korean culture and language.",
      university_description: "Highly regarded for strong academic programs.",
    },
    {
      name: "Hispanic Heritage Club",
      university: "California Institute of Technology",
      club_description:
        "Celebrates Hispanic culture through social and cultural events.",
      university_description:
        "Focuses on engineering and applied sciences research.",
    },
    {
      name: "Italian Society",
      university: "Yale University",
      club_description: "Promotes Italian traditions and cultural exchange.",
      university_description:
        "Ivy League university recognized for arts and humanities.",
    },
    {
      name: "Russian Culture Club",
      university: "University of Chicago",
      club_description: "Engages in Russian cultural activities and language.",
      university_description:
        "Known for rigorous academic programs and research.",
    },
    {
      name: "French Club",
      university: "University of California, Berkeley",
      club_description: "Celebrates French language, cuisine, and traditions.",
      university_description:
        "Public research university with a focus on humanities and social sciences.",
    },
    {
      name: "Japanese Cultural Association",
      university: "Columbia University",
      club_description: "Promotes Japanese culture and traditions.",
      university_description:
        "Ivy League school located in New York City with strong social sciences.",
    },
    {
      name: "Middle Eastern Cultural Society",
      university: "University College London",
      club_description:
        "Focuses on Middle Eastern traditions and cultural exchange.",
      university_description:
        "Top UK institution known for medical research and innovation.",
    },
    {
      name: "Filipino Student Association",
      university: "University of Toronto",
      club_description: "Celebrates Filipino heritage and fosters community.",
      university_description:
        "Canada's largest university, recognized for cultural diversity.",
    },
    {
      name: "Jewish Students Union",
      university: "New York University",
      club_description: "Promotes Jewish culture and heritage through events.",
      university_description:
        "Leading university located in the heart of New York City.",
    },
    {
      name: "Greek Society",
      university: "University of Edinburgh",
      club_description: "Focuses on Greek traditions, language, and culture.",
      university_description:
        "Historic Scottish university known for research in humanities.",
    },
    {
      name: "Turkish Cultural Society",
      university: "University of Melbourne",
      club_description: "Celebrates Turkish culture and traditions.",
      university_description:
        "Australia's top-ranked university, known for diverse cultural studies.",
    },
    {
      name: "Caribbean Students Association",
      university: "University of Tokyo",
      club_description: "Promotes Caribbean culture and fosters community.",
      university_description:
        "Leading Japanese university with a focus on global culture.",
    },
    {
      name: "Persian Cultural Society",
      university: "University of Pennsylvania",
      club_description: "Engages in Persian cultural events and traditions.",
      university_description:
        "Ivy League university known for its humanities programs.",
    },
    {
      name: "German Society",
      university: "London School of Economics",
      club_description: "Focuses on German culture, traditions, and language.",
      university_description:
        "World-renowned for social sciences and global studies.",
    },
    {
      name: "Brazilian Cultural Club",
      university: "Duke University",
      club_description:
        "Celebrates Brazilian culture, language, and traditions.",
      university_description:
        "Known for academic excellence and diverse programs.",
    },
    {
      name: "Thai Student Association",
      university: "National University of Singapore",
      club_description: "Promotes Thai culture and language.",
      university_description:
        "Top Asian university known for multiculturalism and innovation.",
    },
    {
      name: "Irish Cultural Society",
      university: "Georgetown University",
      club_description: "Explores Irish traditions, literature, and history.",
      university_description:
        "Highly regarded for its international affairs programs.",
    },
    {
      name: "Indigenous Students Association",
      university: "University of Queensland",
      club_description: "Celebrates Indigenous Australian culture and history.",
      university_description:
        "Top Australian university known for its cultural programs.",
    },
    {
      name: "Pakistani Student Association",
      university: "University of Warwick",
      club_description: "Focuses on Pakistani culture and traditions.",
      university_description:
        "Top UK university known for cultural and social science studies.",
    },
    {
      name: "Scandinavian Club",
      university: "McGill University",
      club_description: "Celebrates Nordic culture and heritage.",
      university_description:
        "Canada's leading research university with a focus on global diversity.",
    },
    {
      name: "Vietnamese Students Association",
      university: "University of Southern California",
      club_description: "Promotes Vietnamese culture and traditions.",
      university_description:
        "Leading university located in Los Angeles with a strong international focus.",
    },
    {
      name: "Mexican Cultural Society",
      university: "Purdue University",
      club_description: "Celebrates Mexican culture and heritage.",
      university_description:
        "Known for strong engineering and international student communities.",
    },
    {
      name: "Cuban Cultural Club",
      university: "University of Miami",
      club_description: "Engages in Cuban cultural celebrations and events.",
      university_description:
        "Located in Miami, known for a vibrant Latin American community.",
    },
    {
      name: "Australian Indigenous Club",
      university: "University of Sydney",
      club_description:
        "Focuses on Indigenous Australian heritage and culture.",
      university_description:
        "Australia's oldest university known for cultural diversity.",
    },
    {
      name: "African Diaspora Society",
      university: "Johns Hopkins University",
      club_description: "Celebrates African Diaspora culture and heritage.",
      university_description:
        "Top medical research university with diverse cultural clubs.",
    },
    {
      name: "Polish Cultural Society",
      university: "University of Michigan",
      club_description: "Promotes Polish traditions and community.",
      university_description:
        "Top public university with a strong cultural heritage focus.",
    },
    {
      name: "Spanish Society",
      university: "University of St Andrews",
      club_description: "Explores Spanish culture, language, and traditions.",
      university_description:
        "Historic Scottish university known for its humanities and global focus.",
    },
    {
      name: "Ethiopian Student Association",
      university: "University of California, Los Angeles",
      club_description: "Celebrates Ethiopian culture and traditions.",
      university_description:
        "Public university known for its cultural diversity and arts programs.",
    },
    {
      name: "Celtic Cultural Society",
      university: "University of British Columbia",
      club_description: "Focuses on Celtic history and traditions.",
      university_description:
        "Canadian university with a diverse and vibrant student community.",
    },
    {
      name: "Tamil Student Association",
      university: "University of Waterloo",
      club_description: "Promotes Tamil language and cultural events.",
      university_description:
        "Canada's top university for engineering and technology with strong cultural communities.",
    },
    {
      name: "Armenian Student Association",
      university: "University of San Francisco",
      club_description: "Celebrates Armenian culture and traditions.",
      university_description:
        "Located in a diverse urban environment, known for cultural studies.",
    },
    {
      name: "Nepali Cultural Club",
      university: "Carnegie Mellon University",
      club_description: "Focuses on Nepali traditions and cultural heritage.",
      university_description:
        "Leading research university with a vibrant international student population.",
    },
    {
      name: "Moroccan Cultural Society",
      university: "University of Warwick",
      club_description: "Promotes Moroccan culture and history.",
      university_description:
        "Top UK university with a strong international focus.",
    },
    {
      name: "Sri Lankan Students Union",
      university: "University of Melbourne",
      club_description: "Celebrates Sri Lankan culture and traditions.",
      university_description:
        "Australia's leading university with a multicultural student body.",
    },
    {
      name: "Hmong Student Association",
      university: "University of Wisconsin-Madison",
      club_description: "Promotes Hmong cultural heritage.",
      university_description:
        "Top public university with diverse cultural clubs.",
    },
    {
      name: "Native American Student Association",
      university: "University of Arizona",
      club_description:
        "Focuses on Native American traditions and cultural events.",
      university_description:
        "Public research university with strong Indigenous studies programs.",
    },
    {
      name: "Jewish Cultural Society",
      university: "University of Manchester",
      club_description:
        "Promotes Jewish heritage through events and discussions.",
      university_description:
        "Leading UK university known for social sciences and cultural programs.",
    },
    {
      name: "Serbian Cultural Club",
      university: "University of Toronto",
      club_description: "Focuses on Serbian culture and traditions.",
      university_description:
        "Canada's top-ranked university with a diverse cultural scene.",
    },
    {
      name: "Tibetan Cultural Society",
      university: "University of California, San Diego",
      club_description: "Celebrates Tibetan traditions and cultural heritage.",
      university_description:
        "Public research university known for global cultural diversity.",
    },
    {
      name: "Ukrainian Students Union",
      university: "University of Alberta",
      club_description: "Promotes Ukrainian culture and traditions.",
      university_description:
        "Top Canadian university known for its vibrant cultural clubs.",
    },
    {
      name: "Welsh Society",
      university: "University of Bristol",
      club_description: "Focuses on Welsh language, culture, and traditions.",
      university_description:
        "Leading UK university with strong cultural and historical programs.",
    },
  ],
  recreationalClubs: [
    {
      name: "Outdoor Adventure Club",
      university: "University of California, Berkeley",
      club_description: "Organizes hiking, camping, and outdoor activities.",
      university_description:
        "Top public research university known for its liberal arts programs.",
    },
    {
      name: "Rock Climbing Club",
      university: "Stanford University",
      club_description:
        "Offers climbing excursions and training for all levels.",
      university_description:
        "Known for innovation and proximity to outdoor adventures.",
    },
    {
      name: "Sailing Club",
      university: "Harvard University",
      club_description: "Teaches sailing skills and hosts competitions.",
      university_description:
        "Prestigious Ivy League university located near the Charles River.",
    },
    {
      name: "Ski & Snowboard Club",
      university: "University of Colorado Boulder",
      club_description: "Organizes skiing and snowboarding trips.",
      university_description:
        "Located near the Rocky Mountains, known for outdoor sports.",
    },
    {
      name: "Ultimate Frisbee Club",
      university: "Massachusetts Institute of Technology",
      club_description: "Casual and competitive ultimate frisbee games.",
      university_description:
        "Renowned for cutting-edge research and technology programs.",
    },
    {
      name: "Dance Marathon",
      university: "University of Florida",
      club_description: "Hosts dance events to raise funds for charity.",
      university_description:
        "Major public university with a vibrant campus life.",
    },
    {
      name: "Photography Club",
      university: "University of Michigan",
      club_description: "Offers photography workshops and exhibitions.",
      university_description:
        "Top public research university with strong arts programs.",
    },
    {
      name: "Cycling Club",
      university: "University of Cambridge",
      club_description: "Organizes road and mountain biking events.",
      university_description:
        "Historic university with a strong emphasis on sports.",
    },
    {
      name: "Tabletop Gaming Club",
      university: "New York University",
      club_description:
        "Hosts board game nights and strategy game tournaments.",
      university_description:
        "Located in the heart of New York City, known for arts and culture.",
    },
    {
      name: "Surf Club",
      university: "University of California, San Diego",
      club_description:
        "Surfing trips and competitions along the California coast.",
      university_description:
        "Leading public university located near popular beaches.",
    },
    {
      name: "Scuba Diving Club",
      university: "University of Miami",
      club_description: "Offers scuba diving lessons and trips.",
      university_description:
        "Located near coastal waters, known for marine biology research.",
    },
    {
      name: "Gaming Society",
      university: "University of Oxford",
      club_description: "Hosts casual and competitive video gaming events.",
      university_description:
        "World-renowned university with a diverse student body.",
    },
    {
      name: "Running Club",
      university: "University of Edinburgh",
      club_description: "Organizes group runs for all experience levels.",
      university_description:
        "Historic university known for sports and outdoor activities.",
    },
    {
      name: "Chess Club",
      university: "Princeton University",
      club_description: "Competitive and casual chess games and tournaments.",
      university_description:
        "Ivy League university with a strong focus on strategy games.",
    },
    {
      name: "Fishing Club",
      university: "Texas A&M University",
      club_description: "Hosts fishing trips and workshops for all levels.",
      university_description:
        "Large public university known for its outdoor programs.",
    },
    {
      name: "Volleyball Club",
      university: "University of California, Los Angeles",
      club_description:
        "Organizes recreational volleyball games and tournaments.",
      university_description:
        "Public university known for its athletics and sports culture.",
    },
    {
      name: "Yoga and Meditation Club",
      university: "University of Toronto",
      club_description: "Offers yoga and mindfulness sessions.",
      university_description:
        "Top Canadian university with a focus on well-being and diversity.",
    },
    {
      name: "Parkour Club",
      university: "University of Southern California",
      club_description:
        "Teaches parkour techniques and organizes urban training sessions.",
      university_description:
        "Located in Los Angeles, known for an active campus life.",
    },
    {
      name: "E-Sports Club",
      university: "University of Texas at Austin",
      club_description: "Competitive and casual video game competitions.",
      university_description:
        "Major public university with a strong e-sports presence.",
    },
    {
      name: "Martial Arts Club",
      university: "Duke University",
      club_description: "Offers classes in various martial arts disciplines.",
      university_description:
        "Known for academic excellence and a strong sports culture.",
    },
    {
      name: "Kayaking Club",
      university: "University of Virginia",
      club_description: "Organizes river kayaking trips and training.",
      university_description:
        "Public university with access to the Blue Ridge Mountains.",
    },
    {
      name: "Quidditch Club",
      university: "University of Pittsburgh",
      club_description: "Hosts Quidditch matches and tournaments.",
      university_description:
        "Public research university known for unique and fun recreational clubs.",
    },
    {
      name: "Dance Club",
      university: "University of North Carolina at Chapel Hill",
      club_description: "Offers a variety of dance classes and events.",
      university_description: "Top public university with a lively arts scene.",
    },
    {
      name: "Ping Pong Club",
      university: "University of Chicago",
      club_description: "Casual and competitive table tennis matches.",
      university_description:
        "Known for rigorous academics and strong student engagement.",
    },
    {
      name: "Archery Club",
      university: "University of Nottingham",
      club_description: "Offers archery lessons and competitions.",
      university_description:
        "UK university with a strong tradition in recreational sports.",
    },
    {
      name: "Water Polo Club",
      university: "University of California, Davis",
      club_description:
        "Organizes recreational and competitive water polo games.",
      university_description:
        "Public research university with a strong focus on athletics.",
    },
    {
      name: "Badminton Club",
      university: "University of Warwick",
      club_description: "Recreational and competitive badminton games.",
      university_description:
        "Leading UK university with a strong focus on student activities.",
    },
    {
      name: "Rowing Club",
      university: "Yale University",
      club_description: "Offers rowing training and competitions.",
      university_description:
        "Prestigious Ivy League university known for its rowing tradition.",
    },
    {
      name: "Skydiving Club",
      university: "Purdue University",
      club_description: "Organizes skydiving trips and training.",
      university_description:
        "Known for its engineering programs and adventurous student clubs.",
    },
    {
      name: "Equestrian Club",
      university: "University of Kentucky",
      club_description: "Teaches horseback riding and competes in events.",
      university_description:
        "Public university known for its equine programs and strong athletics.",
    },
    {
      name: "Photography Walk Club",
      university: "University of Sydney",
      club_description: "Hosts photography walks to explore the city.",
      university_description:
        "Australia's top university with a vibrant student life.",
    },
    {
      name: "Ballroom Dance Club",
      university: "University of Arizona",
      club_description: "Teaches ballroom dance styles and hosts events.",
      university_description:
        "Public university with a strong focus on arts and recreation.",
    },
    {
      name: "Caving Club",
      university: "University of Birmingham",
      club_description: "Organizes cave exploration trips and training.",
      university_description:
        "Leading UK university with a focus on outdoor activities.",
    },
    {
      name: "Stand-Up Comedy Club",
      university: "University of Melbourne",
      club_description:
        "Encourages students to develop stand-up comedy skills.",
      university_description:
        "Top Australian university known for its creative arts programs.",
    },
    {
      name: "Fencing Club",
      university: "University of Pennsylvania",
      club_description: "Offers fencing training and competitions.",
      university_description:
        "Ivy League university known for strong student-led clubs.",
    },
    {
      name: "Kite Flying Club",
      university: "University of Hawaii at Manoa",
      club_description: "Hosts kite flying events and workshops.",
      university_description:
        "Public university located in a scenic environment.",
    },
    {
      name: "Rugby Club",
      university: "University of Edinburgh",
      club_description: "Recreational and competitive rugby games.",
      university_description:
        "Scottish university known for strong sports programs.",
    },
    {
      name: "Ice Skating Club",
      university: "McGill University",
      club_description: "Organizes ice skating lessons and social events.",
      university_description:
        "Leading Canadian university with a vibrant student life.",
    },
    {
      name: "Dungeons & Dragons Club",
      university: "Carnegie Mellon University",
      club_description: "Hosts tabletop RPG sessions and campaigns.",
      university_description:
        "Top research university known for arts and technology integration.",
    },
    {
      name: "Ultimate Frisbee Club",
      university: "University of Waterloo",
      club_description: "Organizes frisbee games and competitions.",
      university_description:
        "Canada's leading engineering university with a strong focus on student clubs.",
    },
    {
      name: "Lacrosse Club",
      university: "Johns Hopkins University",
      club_description: "Recreational and competitive lacrosse games.",
      university_description:
        "Top medical research university with a strong lacrosse tradition.",
    },
    {
      name: "Frisbee Golf Club",
      university: "University of Wisconsin-Madison",
      club_description: "Offers frisbee golf events and training.",
      university_description:
        "Top public university with a vibrant outdoor culture.",
    },
    {
      name: "Rafting Club",
      university: "University of Oregon",
      club_description: "Organizes river rafting trips.",
      university_description:
        "Public research university known for its proximity to natural attractions.",
    },
    {
      name: "Paintball Club",
      university: "Rutgers University",
      club_description: "Hosts paintball matches and tournaments.",
      university_description:
        "Large public university known for strong campus life.",
    },
    {
      name: "Zumba Fitness Club",
      university: "University of Queensland",
      club_description: "Offers Zumba fitness classes for all levels.",
      university_description:
        "Top Australian university known for active student life.",
    },
    {
      name: "Hacky Sack Club",
      university: "University of Calgary",
      club_description: "Organizes casual and competitive hacky sack games.",
      university_description:
        "Leading Canadian university known for its vibrant campus.",
    },
  ],
  professionalDevelopmentClubs: [
    {
      name: "Business Leaders Society",
      university: "Harvard University",
      club_description: "Focuses on developing leadership and business skills.",
      university_description:
        "Ivy League institution known for its prestigious business school.",
    },
    {
      name: "Entrepreneurship Club",
      university: "Stanford University",
      club_description: "Provides resources for aspiring entrepreneurs.",
      university_description:
        "Renowned for innovation and strong ties to Silicon Valley.",
    },
    {
      name: "Consulting Club",
      university: "University of Pennsylvania",
      club_description:
        "Prepares students for careers in consulting through case studies.",
      university_description:
        "Home to Wharton, one of the world’s leading business schools.",
    },
    {
      name: "Investment Banking Club",
      university: "Columbia University",
      club_description:
        "Guides students in pursuing careers in finance and banking.",
      university_description:
        "Ivy League school with strong connections to Wall Street.",
    },
    {
      name: "Marketing Society",
      university: "University of Michigan",
      club_description:
        "Provides insight and training in modern marketing practices.",
      university_description:
        "Top public research university with a respected business program.",
    },
    {
      name: "Tech Startups Club",
      university: "Massachusetts Institute of Technology",
      club_description:
        "Supports students interested in tech entrepreneurship.",
      university_description:
        "World-renowned for its engineering and technology programs.",
    },
    {
      name: "Women in Business",
      university: "University of California, Berkeley",
      club_description:
        "Empowers women to succeed in business through networking.",
      university_description:
        "Top public university known for its diverse student body.",
    },
    {
      name: "Engineering Leadership Club",
      university: "University of Texas at Austin",
      club_description: "Develops leadership skills for future engineers.",
      university_description:
        "Known for its strong engineering and business programs.",
    },
    {
      name: "Law Society",
      university: "University of Oxford",
      club_description:
        "Prepares students for careers in law with discussions and mock trials.",
      university_description: "Historic university with a leading law program.",
    },
    {
      name: "Finance Club",
      university: "New York University",
      club_description:
        "Helps students explore careers in finance through workshops and speakers.",
      university_description:
        "Located in the financial capital of the world, with a top-tier business school.",
    },
    {
      name: "Data Science Club",
      university: "University of Toronto",
      club_description:
        "Focuses on building skills in data analytics and machine learning.",
      university_description:
        "Top Canadian university with a strong emphasis on technology.",
    },
    {
      name: "Medical Careers Society",
      university: "Johns Hopkins University",
      club_description:
        "Supports students pursuing medical and healthcare careers.",
      university_description:
        "Top research institution known for its medical school.",
    },
    {
      name: "Public Speaking Club",
      university: "University of Southern California",
      club_description:
        "Improves public speaking skills through practice and feedback.",
      university_description:
        "Known for strong communications and business programs.",
    },
    {
      name: "Product Management Club",
      university: "Carnegie Mellon University",
      club_description:
        "Teaches the skills needed to become successful product managers.",
      university_description: "Known for engineering and business innovation.",
    },
    {
      name: "Pre-Law Society",
      university: "Georgetown University",
      club_description:
        "Provides networking and guidance for students pursuing law school.",
      university_description:
        "Known for its law program and political connections.",
    },
    {
      name: "Human Resources Society",
      university: "Cornell University",
      club_description:
        "Prepares students for careers in human resources and organizational management.",
      university_description:
        "Known for its School of Industrial and Labor Relations.",
    },
    {
      name: "Supply Chain Management Club",
      university: "University of Arizona",
      club_description:
        "Focuses on logistics, supply chain management, and operations.",
      university_description:
        "Top public university with strong business and logistics programs.",
    },
    {
      name: "Sustainability & Business Club",
      university: "Duke University",
      club_description:
        "Promotes sustainable business practices and corporate responsibility.",
      university_description:
        "Highly ranked for its environmental and business programs.",
    },
    {
      name: "Real Estate Club",
      university: "University of Florida",
      club_description:
        "Explores the real estate industry through workshops and networking events.",
      university_description:
        "Large public university with a strong business school.",
    },
    {
      name: "Consulting & Strategy Club",
      university: "London School of Economics",
      club_description:
        "Provides consulting resources and case study practice.",
      university_description:
        "Premier university known for its economics and finance programs.",
    },
    {
      name: "Tech Career Society",
      university: "California Institute of Technology",
      club_description:
        "Guides students in building tech career paths through workshops.",
      university_description:
        "Known for its focus on science, technology, and innovation.",
    },
    {
      name: "MBA Consulting Club",
      university: "University of Chicago",
      club_description: "Prepares MBA students for consulting careers.",
      university_description:
        "Home to Booth, a top-tier business school known for analytics.",
    },
    {
      name: "Entrepreneurs Network",
      university: "University of Cambridge",
      club_description:
        "Provides networking opportunities for student entrepreneurs.",
      university_description:
        "Historic UK university with a strong emphasis on innovation.",
    },
    {
      name: "Pre-Med Society",
      university: "University of Virginia",
      club_description: "Supports students preparing for medical school.",
      university_description:
        "Top public university with a strong pre-med program.",
    },
    {
      name: "StartUp Hub",
      university: "University of Sydney",
      club_description:
        "Encourages student-led startup ventures with resources and guidance.",
      university_description:
        "Top Australian university with a vibrant entrepreneurial ecosystem.",
    },
    {
      name: "Healthcare Management Club",
      university: "University of Washington",
      club_description:
        "Focuses on careers in healthcare management and policy.",
      university_description:
        "Leading public university known for its health and business programs.",
    },
    {
      name: "Investment Society",
      university: "University of Edinburgh",
      club_description:
        "Guides students in learning about financial investments.",
      university_description:
        "Historic university with strong finance and economics programs.",
    },
    {
      name: "Leadership & Development Society",
      university: "McGill University",
      club_description:
        "Prepares students for leadership roles in various industries.",
      university_description:
        "Canada's top university with a focus on leadership programs.",
    },
    {
      name: "Accounting Club",
      university: "Indiana University",
      club_description:
        "Provides career insights and resources for aspiring accountants.",
      university_description:
        "Known for its top-tier accounting and business programs.",
    },
    {
      name: "Technology Consulting Club",
      university: "University of Illinois at Urbana-Champaign",
      club_description:
        "Helps students build consulting skills for tech careers.",
      university_description:
        "Major public research university with a strong focus on technology.",
    },
    {
      name: "Entrepreneurs Society",
      university: "University of Melbourne",
      club_description:
        "Provides guidance and networking for student entrepreneurs.",
      university_description:
        "Top Australian university with a vibrant student innovation culture.",
    },
    {
      name: "Sales & Marketing Club",
      university: "University of Warwick",
      club_description: "Focuses on developing sales and marketing skills.",
      university_description:
        "Leading UK university with a strong business program.",
    },
    {
      name: "International Business Club",
      university: "University of Hong Kong",
      club_description: "Prepares students for careers in global business.",
      university_description:
        "Top Asian university known for its international business connections.",
    },
    {
      name: "Investment & Finance Club",
      university: "University of California, Los Angeles",
      club_description:
        "Offers workshops and networking for aspiring finance professionals.",
      university_description:
        "Highly regarded public university with strong business ties.",
    },
    {
      name: "Economics Society",
      university: "University of London",
      club_description:
        "Discusses economic trends and career paths in economics.",
      university_description:
        "Historic UK university with a strong economics department.",
    },
    {
      name: "Marketing and PR Club",
      university: "University of Queensland",
      club_description:
        "Builds marketing and public relations skills through workshops.",
      university_description:
        "Top Australian university known for its business and communications programs.",
    },
    {
      name: "Future Leaders Club",
      university: "University of Wisconsin-Madison",
      club_description:
        "Develops leadership skills through seminars and workshops.",
      university_description:
        "Top public university with a focus on leadership development.",
    },
    {
      name: "Technology & Innovation Society",
      university: "University of Sydney",
      club_description: "Fosters innovation and tech entrepreneurship.",
      university_description:
        "Leading Australian university known for its vibrant tech ecosystem.",
    },
    {
      name: "Accounting & Finance Club",
      university: "University of British Columbia",
      club_description:
        "Prepares students for careers in accounting and finance.",
      university_description:
        "Canada's top university with strong business programs.",
    },
    {
      name: "Corporate Strategy Club",
      university: "University of Toronto",
      club_description:
        "Focuses on business strategy and corporate management.",
      university_description:
        "Top Canadian university with a strong business school.",
    },
    {
      name: "Actuarial Science Club",
      university: "University of Waterloo",
      club_description: "Guides students toward careers in actuarial science.",
      university_description:
        "Canada's leading engineering university with a top actuarial program.",
    },
    {
      name: "Creative Industries Club",
      university: "University of Technology Sydney",
      club_description:
        "Supports careers in creative industries through networking and mentorship.",
      university_description:
        "Top Australian university focused on creative and tech industries.",
    },
    {
      name: "Corporate Law Society",
      university: "University of Auckland",
      club_description: "Prepares students for careers in corporate law.",
      university_description:
        "Top New Zealand university with a leading law program.",
    },
    {
      name: "Business Analytics Club",
      university: "University of Manchester",
      club_description: "Teaches data analysis for business decision-making.",
      university_description:
        "Leading UK university with strong analytics and business programs.",
    },
    {
      name: "Consulting & Investment Society",
      university: "University of Bath",
      club_description: "Helps students build consulting and finance skills.",
      university_description:
        "Top UK university with a focus on business and economics.",
    },
    {
      name: "Law & Policy Club",
      university: "University of Chicago",
      club_description:
        "Discusses law and public policy with a focus on career preparation.",
      university_description:
        "Top private university known for its law and policy programs.",
    },
  ],
  politicalClubs: [
    {
      name: "Democrats Club",
      university: "Harvard University",
      club_description: "Supports and promotes Democratic Party policies.",
      university_description:
        "Ivy League university known for its influence in politics.",
    },
    {
      name: "Republican Society",
      university: "Stanford University",
      club_description: "Promotes Republican values and political engagement.",
      university_description:
        "Top university with strong connections to U.S. politics and Silicon Valley.",
    },
    {
      name: "Political Union",
      university: "Yale University",
      club_description:
        "Engages students in debates about contemporary political issues.",
      university_description:
        "Ivy League university with a rich history of political debate.",
    },
    {
      name: "Young Libertarians Club",
      university: "University of California, Berkeley",
      club_description:
        "Advocates for libertarian policies and personal freedom.",
      university_description:
        "Known for its active and diverse political culture.",
    },
    {
      name: "Socialist Society",
      university: "University of Cambridge",
      club_description:
        "Promotes socialist ideology and progressive political action.",
      university_description:
        "Historic university with a strong political and intellectual tradition.",
    },
    {
      name: "Green Party Students",
      university: "University of Oxford",
      club_description: "Focuses on environmentalism and Green Party politics.",
      university_description:
        "World-renowned institution with a strong focus on public service.",
    },
    {
      name: "International Relations Club",
      university: "Princeton University",
      club_description: "Explores global politics and international diplomacy.",
      university_description:
        "Ivy League school known for its influence on global affairs.",
    },
    {
      name: "Model United Nations",
      university: "University of Toronto",
      club_description:
        "Simulates UN diplomacy to educate students on international issues.",
      university_description:
        "Top Canadian university with a global reputation in political science.",
    },
    {
      name: "Labour Party Club",
      university: "London School of Economics",
      club_description:
        "Supports the UK Labour Party and advocates for its policies.",
      university_description:
        "Premier institution for economics and political thought.",
    },
    {
      name: "Feminist Action Group",
      university: "New York University",
      club_description:
        "Promotes feminist political action and gender equality.",
      university_description:
        "Major university with a diverse and politically active student body.",
    },
    {
      name: "Conservative Society",
      university: "University of Edinburgh",
      club_description:
        "Promotes conservative values and political engagement in Scotland.",
      university_description:
        "Historic university with a vibrant political landscape.",
    },
    {
      name: "Anarchist Collective",
      university: "University of Michigan",
      club_description:
        "Advocates for anarchist theory and decentralized governance.",
      university_description:
        "Major public university known for its politically active students.",
    },
    {
      name: "Social Democrats Club",
      university: "University of Melbourne",
      club_description:
        "Focuses on social democratic policies and government reform.",
      university_description:
        "Leading Australian university with a diverse student population.",
    },
    {
      name: "Political Science Society",
      university: "University of Chicago",
      club_description:
        "Fosters discussion and analysis of political theories and systems.",
      university_description:
        "Highly respected for its social sciences and political thought.",
    },
    {
      name: "Students for Liberty",
      university: "University of Texas at Austin",
      club_description: "Advocates for liberty and limited government.",
      university_description:
        "Top U.S. public university with an engaged student body.",
    },
    {
      name: "Progressive Students' Alliance",
      university: "University of Southern California",
      club_description:
        "Advocates for progressive policies and social justice.",
      university_description:
        "Large private university with a politically active campus.",
    },
    {
      name: "Democratic Socialists Club",
      university: "Cornell University",
      club_description:
        "Promotes democratic socialism and equality in politics.",
      university_description:
        "Ivy League institution with a focus on public engagement.",
    },
    {
      name: "Republican Students Society",
      university: "Duke University",
      club_description:
        "Engages students in Republican politics and conservative values.",
      university_description:
        "Leading U.S. university with strong political involvement.",
    },
    {
      name: "Green Students Movement",
      university: "McGill University",
      club_description:
        "Advocates for environmental policies and climate action.",
      university_description:
        "Top Canadian university with an active student movement.",
    },
    {
      name: "Debate Society",
      university: "University of Oxford",
      club_description:
        "Hosts debates on contemporary political and social issues.",
      university_description:
        "Historic university renowned for its intellectual debates.",
    },
    {
      name: "Libertarian Students Club",
      university: "University of Florida",
      club_description:
        "Promotes libertarian values such as individual freedom and limited government.",
      university_description:
        "Large public university known for its diverse student body.",
    },
    {
      name: "Public Policy Forum",
      university: "University of Virginia",
      club_description:
        "Encourages discussion of public policy and political reform.",
      university_description:
        "Historic university with a strong emphasis on public service.",
    },
    {
      name: "International Socialists Club",
      university: "University of Sydney",
      club_description:
        "Promotes socialist theory and international solidarity.",
      university_description:
        "Leading Australian university with a politically active campus.",
    },
    {
      name: "Political Awareness Group",
      university: "University of Warwick",
      club_description:
        "Raises awareness of political issues through events and discussions.",
      university_description:
        "Top UK university known for its student activism.",
    },
    {
      name: "Global Politics Society",
      university: "University of Hong Kong",
      club_description: "Focuses on global political trends and diplomacy.",
      university_description: "Top Asian university with a global outlook.",
    },
    {
      name: "Labour Students",
      university: "University of Manchester",
      club_description:
        "Advocates for Labour Party policies and government reform.",
      university_description:
        "Leading UK university with strong ties to politics.",
    },
    {
      name: "Constitutional Law Club",
      university: "Georgetown University",
      club_description:
        "Examines constitutional law and its impact on American politics.",
      university_description:
        "Renowned for its law program and political connections.",
    },
    {
      name: "Young Conservatives",
      university: "University of North Carolina at Chapel Hill",
      club_description:
        "Supports conservative values and political engagement.",
      university_description:
        "Top U.S. public university with an active political scene.",
    },
    {
      name: "Students for Bernie",
      university: "University of Washington",
      club_description:
        "Supports the policies of Bernie Sanders and democratic socialism.",
      university_description:
        "Known for its progressive student body and political engagement.",
    },
    {
      name: "Libertarian Action Group",
      university: "University of California, Los Angeles",
      club_description:
        "Advocates for libertarian values and personal freedom.",
      university_description:
        "Top public university with an active political culture.",
    },
    {
      name: "Democratic Action Network",
      university: "University of Wisconsin-Madison",
      club_description:
        "Promotes Democratic Party policies and political activism.",
      university_description:
        "Known for its politically engaged students and strong public affairs programs.",
    },
    {
      name: "Leftist Students' Union",
      university: "University of Queensland",
      club_description: "Advocates for leftist policies and social change.",
      university_description:
        "Top Australian university with a politically engaged student population.",
    },
    {
      name: "Republican Club",
      university: "University of Notre Dame",
      club_description: "Supports conservative and Republican values.",
      university_description:
        "Prominent Catholic university known for its political activity.",
    },
    {
      name: "Green Future Alliance",
      university: "University of British Columbia",
      club_description: "Promotes environmentalism and Green Party policies.",
      university_description:
        "Top Canadian university known for its sustainability initiatives.",
    },
    {
      name: "Liberal Democrats Society",
      university: "University of Exeter",
      club_description:
        "Supports the Liberal Democrats and advocates for centrist policies.",
      university_description:
        "Top UK university with a politically active student body.",
    },
    {
      name: "Communist Students Union",
      university: "University of Leeds",
      club_description: "Promotes Marxist theory and communist policies.",
      university_description:
        "Large UK university with a politically diverse student population.",
    },
    {
      name: "Political Economy Society",
      university: "King's College London",
      club_description: "Discusses the intersection of politics and economics.",
      university_description:
        "Historic London university known for political engagement.",
    },
    {
      name: "Peace & Justice Club",
      university: "University of Illinois at Urbana-Champaign",
      club_description:
        "Focuses on promoting peace, justice, and humanitarianism.",
      university_description:
        "Top U.S. public university known for its strong social advocacy.",
    },
    {
      name: "Students for Trump",
      university: "University of Alabama",
      club_description:
        "Supports the policies of Donald Trump and Republican ideals.",
      university_description:
        "Large public university with an active political scene.",
    },
    {
      name: "Social Justice Forum",
      university: "University of Toronto",
      club_description: "Advocates for social justice and equity in politics.",
      university_description:
        "Top Canadian university with a progressive student body.",
    },
    {
      name: "Global Diplomacy Club",
      university: "University of California, San Diego",
      club_description:
        "Explores international diplomacy and political relations.",
      university_description:
        "Known for its focus on international studies and global politics.",
    },
    {
      name: "Students for Social Change",
      university: "University of Texas at Austin",
      club_description:
        "Advocates for progressive social and political change.",
      university_description:
        "Top public university with an engaged and progressive student body.",
    },
    {
      name: "Environmental Policy Group",
      university: "University of Auckland",
      club_description: "Focuses on environmental policies and sustainability.",
      university_description:
        "Top New Zealand university known for its environmental research.",
    },
    {
      name: "Democracy Matters",
      university: "University of London",
      club_description:
        "Promotes democratic engagement and voter participation.",
      university_description:
        "Historic UK institution known for political advocacy.",
    },
    {
      name: "Radical Politics Society",
      university: "University of Glasgow",
      club_description:
        "Discusses radical political theories and social change.",
      university_description:
        "Top Scottish university with a politically engaged student population.",
    },
  ],
  artisticClubs: [
    {
      name: "Photography Society",
      university: "Harvard University",
      club_description:
        "Explores creative photography and visual storytelling.",
      university_description:
        "Ivy League university known for its academic excellence and cultural influence.",
    },
    {
      name: "Film Club",
      university: "Stanford University",
      club_description:
        "Brings together students with a passion for filmmaking and cinema.",
      university_description:
        "Top U.S. university with strong ties to the arts and technology.",
    },
    {
      name: "Art History Society",
      university: "Yale University",
      club_description:
        "Focuses on the study of art history and contemporary art trends.",
      university_description:
        "Ivy League university with a renowned art collection and museum.",
    },
    {
      name: "Modern Dance Club",
      university: "University of California, Berkeley",
      club_description:
        "Celebrates creative movement and modern dance performances.",
      university_description:
        "Known for its vibrant and diverse art community.",
    },
    {
      name: "Ceramics Club",
      university: "University of Oxford",
      club_description:
        "Offers a space for students to explore pottery and ceramics.",
      university_description:
        "Historic university with a rich cultural and artistic heritage.",
    },
    {
      name: "Theater Production Group",
      university: "University of Cambridge",
      club_description:
        "Produces student-led theatrical performances and plays.",
      university_description:
        "World-renowned university with a strong tradition in the performing arts.",
    },
    {
      name: "A Cappella Group",
      university: "Princeton University",
      club_description:
        "Performs vocal music and arranges student a cappella concerts.",
      university_description:
        "Ivy League university known for its strong music scene.",
    },
    {
      name: "Digital Arts Collective",
      university: "University of Toronto",
      club_description:
        "Focuses on digital art, animation, and multimedia design.",
      university_description:
        "Leading Canadian university with a growing emphasis on digital media.",
    },
    {
      name: "Sculpture Society",
      university: "London School of Economics",
      club_description: "Explores sculpture techniques and 3D artistic forms.",
      university_description:
        "Top university with an active and innovative artistic community.",
    },
    {
      name: "Jazz Band",
      university: "New York University",
      club_description:
        "Performs jazz music and encourages musical collaboration.",
      university_description:
        "Major university with deep ties to New York City's jazz culture.",
    },
    {
      name: "Watercolor Painting Group",
      university: "University of Edinburgh",
      club_description:
        "Provides a space for students to practice and learn watercolor techniques.",
      university_description:
        "Historic Scottish university with a vibrant arts scene.",
    },
    {
      name: "Street Art Collective",
      university: "University of Michigan",
      club_description:
        "Focuses on street art, murals, and graffiti as a form of self-expression.",
      university_description:
        "Top U.S. public university with an active and diverse arts community.",
    },
    {
      name: "Chamber Orchestra",
      university: "University of Melbourne",
      club_description:
        "Performs classical chamber music in a student-led orchestra.",
      university_description:
        "Leading Australian university with a focus on the performing arts.",
    },
    {
      name: "Animation Society",
      university: "University of Chicago",
      club_description:
        "Explores animation techniques and digital storytelling.",
      university_description:
        "Top university known for its innovation in the arts and technology.",
    },
    {
      name: "Calligraphy Club",
      university: "University of Southern California",
      club_description:
        "Offers lessons and workshops on traditional and modern calligraphy.",
      university_description:
        "Major private university with strong artistic and cultural programs.",
    },
    {
      name: "Creative Writing Workshop",
      university: "University of Texas at Austin",
      club_description:
        "Provides a space for students to share and improve their creative writing.",
      university_description:
        "Top U.S. public university with a highly regarded creative writing program.",
    },
    {
      name: "Opera Club",
      university: "Cornell University",
      club_description:
        "Engages students in opera performances and classical music.",
      university_description:
        "Ivy League university with a strong tradition in the performing arts.",
    },
    {
      name: "Fashion Design Collective",
      university: "Duke University",
      club_description:
        "Explores fashion design, garment construction, and creativity.",
      university_description:
        "Leading U.S. university with a creative student body.",
    },
    {
      name: "Photography Studio",
      university: "McGill University",
      club_description:
        "Provides resources and space for photography projects.",
      university_description:
        "Top Canadian university with a strong emphasis on visual arts.",
    },
    {
      name: "Choir Ensemble",
      university: "University of Oxford",
      club_description:
        "Performs choral music and arranges concerts for students.",
      university_description:
        "World-renowned university with a rich history in vocal music.",
    },
    {
      name: "Graphic Design Club",
      university: "University of Florida",
      club_description:
        "Focuses on graphic design projects and creative design challenges.",
      university_description:
        "Large public university with a growing focus on digital arts.",
    },
    {
      name: "Art Therapy Group",
      university: "University of Virginia",
      club_description:
        "Combines art with mental health awareness and therapy.",
      university_description:
        "Historic university with a strong emphasis on student well-being.",
    },
    {
      name: "Painting Collective",
      university: "University of Sydney",
      club_description:
        "Encourages students to explore painting in different styles and mediums.",
      university_description:
        "Leading Australian university known for its vibrant arts culture.",
    },
    {
      name: "Photography Club",
      university: "University of Warwick",
      club_description:
        "Provides photography workshops and exhibitions for students.",
      university_description:
        "Top UK university with an active arts community.",
    },
    {
      name: "Street Photography Society",
      university: "University of Hong Kong",
      club_description: "Explores urban photography and visual storytelling.",
      university_description:
        "Top Asian university with a growing emphasis on the arts.",
    },
    {
      name: "Mural Arts Group",
      university: "University of Manchester",
      club_description: "Creates large-scale public art and murals on campus.",
      university_description:
        "Leading UK university with a strong focus on visual and street arts.",
    },
    {
      name: "Film Production Society",
      university: "Georgetown University",
      club_description: "Produces student films and organizes film festivals.",
      university_description:
        "Top university known for its student-led film projects.",
    },
    {
      name: "Dance Crew",
      university: "University of North Carolina at Chapel Hill",
      club_description: "Performs hip-hop and contemporary dance routines.",
      university_description:
        "Top U.S. public university with a vibrant student dance scene.",
    },
    {
      name: "Theater Improv Group",
      university: "University of Washington",
      club_description: "Focuses on improvisational theater and comedy.",
      university_description:
        "Top public university with a creative performing arts program.",
    },
    {
      name: "Pottery Studio",
      university: "University of California, Los Angeles",
      club_description:
        "Offers access to a studio for pottery and ceramics enthusiasts.",
      university_description:
        "Top public university with a strong connection to the visual arts.",
    },
    {
      name: "Street Dance Club",
      university: "University of Wisconsin-Madison",
      club_description: "Performs street dance routines and hosts workshops.",
      university_description:
        "Known for its student-led dance groups and cultural events.",
    },
    {
      name: "Jazz Ensemble",
      university: "University of Queensland",
      club_description:
        "Performs jazz music and collaborates with other musicians.",
      university_description:
        "Top Australian university with an engaged student arts community.",
    },
    {
      name: "Illustration Club",
      university: "University of Notre Dame",
      club_description:
        "Focuses on drawing and illustrating projects for students.",
      university_description:
        "Prominent university known for its strong student art programs.",
    },
    {
      name: "Sculpture Workshop",
      university: "University of British Columbia",
      club_description:
        "Offers resources for students interested in sculpture and 3D art.",
      university_description:
        "Top Canadian university with a focus on the visual and performing arts.",
    },
    {
      name: "Creative Film Society",
      university: "University of Exeter",
      club_description:
        "Produces student films and encourages collaboration in filmmaking.",
      university_description:
        "Top UK university with an active and engaged film community.",
    },
    {
      name: "Poetry Club",
      university: "University of Leeds",
      club_description: "Focuses on creative writing and poetry performances.",
      university_description:
        "Large UK university with a vibrant arts and literature scene.",
    },
    {
      name: "Public Art Group",
      university: "King's College London",
      club_description:
        "Collaborates on public art installations and street art.",
      university_description:
        "Top London university known for its vibrant arts community.",
    },
    {
      name: "Orchestra Society",
      university: "University of Illinois at Urbana-Champaign",
      club_description: "Performs orchestral music and hosts concerts.",
      university_description:
        "Top U.S. public university with a strong performing arts program.",
    },
    {
      name: "Dance Society",
      university: "University of Alabama",
      club_description:
        "Explores various dance styles and organizes performances.",
      university_description:
        "Large public university with an active student arts community.",
    },
    {
      name: "Poetry Slam Group",
      university: "University of Toronto",
      club_description:
        "Performs spoken word poetry and organizes poetry slams.",
      university_description:
        "Top Canadian university with a vibrant creative writing scene.",
    },
    {
      name: "Street Theater Club",
      university: "University of California, San Diego",
      club_description: "Focuses on outdoor and street theater performances.",
      university_description:
        "Known for its innovative approach to the performing arts.",
    },
    {
      name: "Film Appreciation Society",
      university: "University of Texas at Austin",
      club_description:
        "Hosts screenings and discussions on film theory and criticism.",
      university_description:
        "Top U.S. public university with a strong film and media department.",
    },
    {
      name: "Fashion Show Collective",
      university: "University of Auckland",
      club_description: "Organizes fashion shows and explores fashion design.",
      university_description:
        "Top New Zealand university with a growing fashion and design scene.",
    },
    {
      name: "Musical Theater Club",
      university: "Boston University",
      club_description:
        "Performs musical theater productions with student participation.",
      university_description:
        "Large private university with a strong performing arts tradition.",
    },
    {
      name: "Street Performance Group",
      university: "University of Glasgow",
      club_description: "Explores street performance art and outdoor theater.",
      university_description:
        "Historic university with an active performing arts community.",
    },
    {
      name: "Guitar Ensemble",
      university: "University of Miami",
      club_description: "Performs guitar music in various genres and styles.",
      university_description:
        "Top university with a focus on music and the performing arts.",
    },
    {
      name: "Urban Art Collective",
      university: "University of California, Santa Barbara",
      club_description:
        "Focuses on urban art, murals, and creative installations.",
      university_description:
        "Public university with a growing urban art community.",
    },
  ],
  entrepreneurClubs: [
    {
      name: "Entrepreneurship Club",
      university: "Harvard University",
      club_description:
        "Supports student startups with mentorship and networking opportunities.",
      university_description:
        "Ivy League university known for its strong business and entrepreneurial programs.",
    },
    {
      name: "Startup Incubator",
      university: "Stanford University",
      club_description:
        "Offers resources and support for student-led startups and new ventures.",
      university_description:
        "Top U.S. university with a prominent focus on innovation and entrepreneurship.",
    },
    {
      name: "Business Leaders Club",
      university: "University of Pennsylvania",
      club_description:
        "Provides networking events and workshops for aspiring business leaders.",
      university_description:
        "Ivy League university with a renowned Wharton School of Business.",
    },
    {
      name: "Innovation Hub",
      university: "MIT",
      club_description:
        "Focuses on technology startups and innovation with hands-on projects.",
      university_description:
        "Leading tech university with a strong emphasis on entrepreneurship and innovation.",
    },
    {
      name: "Young Entrepreneurs Network",
      university: "University of California, Berkeley",
      club_description:
        "Connects students interested in starting their own businesses with resources and mentors.",
      university_description:
        "Top public university known for its entrepreneurial spirit and resources.",
    },
    {
      name: "Tech Entrepreneurs Society",
      university: "University of Cambridge",
      club_description:
        "Supports technology startups and tech-driven business ideas.",
      university_description:
        "Historic university with a focus on innovation and research.",
    },
    {
      name: "Entrepreneurial Leadership Club",
      university: "University of Oxford",
      club_description:
        "Provides leadership training and resources for budding entrepreneurs.",
      university_description:
        "World-renowned university with strong connections to the business world.",
    },
    {
      name: "Startup Grind",
      university: "University of Chicago",
      club_description:
        "Hosts events and networking opportunities for startup enthusiasts and entrepreneurs.",
      university_description:
        "Top university with a focus on business and entrepreneurial education.",
    },
    {
      name: "Entrepreneurship Society",
      university: "University of Michigan",
      club_description:
        "Offers workshops, pitch competitions, and networking events for student entrepreneurs.",
      university_description:
        "Leading public university known for its active entrepreneurial community.",
    },
    {
      name: "Business Incubator Program",
      university: "University of Texas at Austin",
      club_description:
        "Supports student-led startups with resources, mentorship, and funding opportunities.",
      university_description:
        "Top public university with a strong focus on business and entrepreneurship.",
    },
    {
      name: "Venture Capital Club",
      university: "University of California, Los Angeles",
      club_description:
        "Focuses on venture capital investment and funding for startups.",
      university_description:
        "Major university with a strong emphasis on business and finance.",
    },
    {
      name: "Startup Founders Network",
      university: "New York University",
      club_description:
        "Connects startup founders with mentors, resources, and investors.",
      university_description:
        "Top university with a prominent business and entrepreneurial community.",
    },
    {
      name: "Young Innovators Club",
      university: "University of Toronto",
      club_description:
        "Supports student innovation and entrepreneurial projects.",
      university_description:
        "Leading Canadian university with a strong focus on technology and business.",
    },
    {
      name: "Entrepreneurship and Innovation Hub",
      university: "London School of Economics",
      club_description:
        "Provides support and resources for student entrepreneurs and innovators.",
      university_description:
        "Top UK university known for its strong business and economics programs.",
    },
    {
      name: "StartUp Weekends",
      university: "University of Southern California",
      club_description:
        "Hosts weekend events where students can launch startups and pitch ideas.",
      university_description:
        "Major university with a strong emphasis on entrepreneurship and innovation.",
    },
    {
      name: "Creative Entrepreneurs Club",
      university: "University of Sydney",
      club_description:
        "Supports creative and artistic startups with resources and networking opportunities.",
      university_description:
        "Leading Australian university with a vibrant entrepreneurial community.",
    },
    {
      name: "Entrepreneurial Venture Club",
      university: "University of Warwick",
      club_description:
        "Focuses on venture creation, business planning, and entrepreneurship education.",
      university_description:
        "Top UK university with a focus on business and innovation.",
    },
    {
      name: "Young Business Leaders",
      university: "University of Florida",
      club_description:
        "Provides opportunities for students to develop leadership and entrepreneurial skills.",
      university_description:
        "Top public university with a strong business program.",
    },
    {
      name: "Tech Startups Club",
      university: "University of Edinburgh",
      club_description:
        "Supports technology-focused startups and innovation projects.",
      university_description:
        "Historic Scottish university with a growing tech and business community.",
    },
    {
      name: "Social Entrepreneurship Network",
      university: "University of Washington",
      club_description:
        "Focuses on startups with social impact and sustainability goals.",
      university_description:
        "Top public university with a commitment to social entrepreneurship.",
    },
    {
      name: "Business Strategy Club",
      university: "University of Melbourne",
      club_description:
        "Explores business strategy, startup development, and entrepreneurial thinking.",
      university_description:
        "Leading Australian university with a focus on business and innovation.",
    },
    {
      name: "Global Entrepreneurs Club",
      university: "University of Hong Kong",
      club_description:
        "Supports international student entrepreneurs with global business insights.",
      university_description:
        "Top Asian university with a strong focus on global business and innovation.",
    },
    {
      name: "Startup Ecosystem Club",
      university: "University of Southern California",
      club_description:
        "Provides networking opportunities and resources for startups and entrepreneurs.",
      university_description:
        "Major university with a robust entrepreneurial ecosystem.",
    },
    {
      name: "Innovators Club",
      university: "University of Auckland",
      club_description:
        "Focuses on fostering innovation and supporting startup ventures.",
      university_description:
        "Top New Zealand university with a strong emphasis on entrepreneurial ventures.",
    },
    {
      name: "Entrepreneurship and Business Club",
      university: "University of Illinois at Urbana-Champaign",
      club_description:
        "Offers resources and networking events for student entrepreneurs and business leaders.",
      university_description:
        "Top U.S. public university with a focus on business and entrepreneurship.",
    },
    {
      name: "Startups and Ventures Club",
      university: "University of Queensland",
      club_description:
        "Supports student-led startups and business ventures with mentoring and resources.",
      university_description:
        "Leading Australian university known for its entrepreneurial initiatives.",
    },
    {
      name: "Business Innovation Club",
      university: "University of Leeds",
      club_description:
        "Focuses on innovative business ideas and startup development.",
      university_description:
        "Large UK university with a strong focus on business and entrepreneurship.",
    },
    {
      name: "Entrepreneurship Society",
      university: "King's College London",
      club_description:
        "Supports entrepreneurial projects and business startups with events and mentorship.",
      university_description:
        "Top London university with a strong business and innovation community.",
    },
    {
      name: "Venture Capital Network",
      university: "Georgetown University",
      club_description:
        "Connects students with venture capitalists and investment opportunities.",
      university_description:
        "Top university with a focus on business and finance.",
    },
    {
      name: "Innovative Startups Club",
      university: "University of Oxford",
      club_description:
        "Supports innovative startups and business ventures with resources and networking.",
      university_description:
        "World-renowned university with a strong tradition in entrepreneurship.",
    },
    {
      name: "Student Ventures Club",
      university: "University of California, San Diego",
      club_description:
        "Focuses on student-led ventures and startup development.",
      university_description:
        "Top public university with a commitment to innovation and entrepreneurship.",
    },
    {
      name: "Tech Innovators Society",
      university: "University of Toronto",
      club_description:
        "Supports technology-driven startups and innovative projects.",
      university_description:
        "Leading Canadian university with a strong emphasis on tech entrepreneurship.",
    },
    {
      name: "Business Incubator Network",
      university: "University of Michigan",
      club_description:
        "Provides resources and support for student entrepreneurs and startup founders.",
      university_description:
        "Top U.S. public university with a strong entrepreneurial ecosystem.",
    },
    {
      name: "Entrepreneurship and Leadership Club",
      university: "University of Warwick",
      club_description:
        "Focuses on developing leadership skills and supporting startup ventures.",
      university_description:
        "Top UK university known for its strong business and leadership programs.",
    },
    {
      name: "Creative Ventures Group",
      university: "University of Sydney",
      club_description:
        "Supports creative startups and innovative business ideas.",
      university_description:
        "Leading Australian university with a vibrant entrepreneurial community.",
    },
    {
      name: "Startup Accelerator Club",
      university: "University of California, Berkeley",
      club_description:
        "Provides acceleration programs and resources for student startups.",
      university_description:
        "Top public university known for its support of innovation and entrepreneurship.",
    },
    {
      name: "Business Innovation Network",
      university: "University of Florida",
      club_description:
        "Focuses on innovative business ideas and startup support.",
      university_description:
        "Leading public university with a strong focus on business and innovation.",
    },
    {
      name: "Entrepreneurship Network",
      university: "University of Southern California",
      club_description:
        "Offers resources, mentorship, and networking for student entrepreneurs.",
      university_description:
        "Top private university with a strong entrepreneurial community.",
    },
    {
      name: "Startup Community Club",
      university: "University of Melbourne",
      club_description:
        "Connects students with startup founders and business mentors.",
      university_description:
        "Leading Australian university with a focus on entrepreneurial ventures.",
    },
    {
      name: "Business Strategy Network",
      university: "University of Leeds",
      club_description:
        "Focuses on business strategy, startup development, and entrepreneurial education.",
      university_description:
        "Top UK university with a vibrant business and entrepreneurial scene.",
    },
    {
      name: "Global Innovators Society",
      university: "University of Chicago",
      club_description:
        "Supports global startup ventures and innovation projects.",
      university_description:
        "Top U.S. university with a strong emphasis on business and global entrepreneurship.",
    },
    {
      name: "Creative Startups Hub",
      university: "University of Queensland",
      club_description:
        "Offers support for creative and innovative startup ventures.",
      university_description:
        "Leading Australian university with a focus on creative entrepreneurship.",
    },
    {
      name: "Business Leaders Network",
      university: "University of Hong Kong",
      club_description:
        "Connects students with business leaders and startup mentors.",
      university_description:
        "Top Asian university known for its strong business programs.",
    },
    {
      name: "Innovative Business Club",
      university: "University of California, Los Angeles",
      club_description:
        "Provides resources and events for innovative startups and business ideas.",
      university_description:
        "Major university with a prominent business and entrepreneurial community.",
    },
    {
      name: "Startup Venture Group",
      university: "Georgetown University",
      club_description:
        "Supports student-led startups with resources and mentorship.",
      university_description:
        "Top U.S. university known for its business and entrepreneurial programs.",
    },
  ],
  environmentalClubs: [
    {
      name: "Green Campus Initiative",
      university: "University of California, Berkeley",
      club_description:
        "Promotes sustainability practices and environmental awareness on campus.",
      university_description:
        "Leading public university known for its environmental and sustainability programs.",
    },
    {
      name: "Eco Warriors",
      university: "University of Oxford",
      club_description:
        "Focuses on environmental advocacy and sustainability projects.",
      university_description:
        "World-renowned university with a strong emphasis on environmental research.",
    },
    {
      name: "Sustainable Living Club",
      university: "Stanford University",
      club_description:
        "Encourages sustainable living practices and environmental education.",
      university_description:
        "Top U.S. university with a focus on sustainability and green initiatives.",
    },
    {
      name: "Environmental Action Network",
      university: "Harvard University",
      club_description:
        "Supports environmental activism and conservation efforts.",
      university_description:
        "Ivy League university with a strong commitment to environmental issues.",
    },
    {
      name: "Eco-Advocates",
      university: "University of Melbourne",
      club_description:
        "Works on environmental advocacy and sustainability initiatives.",
      university_description:
        "Leading Australian university with a focus on environmental and sustainability issues.",
    },
    {
      name: "Green Tech Club",
      university: "MIT",
      club_description:
        "Focuses on green technology and sustainable innovations.",
      university_description:
        "Top tech university known for its cutting-edge environmental research and technology.",
    },
    {
      name: "Planet Protectors",
      university: "University of Toronto",
      club_description:
        "Promotes environmental protection and sustainability projects.",
      university_description:
        "Leading Canadian university with a strong emphasis on environmental sciences.",
    },
    {
      name: "Sustainability Society",
      university: "University of Edinburgh",
      club_description:
        "Encourages sustainable practices and environmental stewardship.",
      university_description:
        "Historic university with a commitment to environmental sustainability.",
    },
    {
      name: "Green Future Club",
      university: "University of Washington",
      club_description:
        "Focuses on future-oriented sustainability and environmental projects.",
      university_description:
        "Top public university with a strong environmental and sustainability focus.",
    },
    {
      name: "Climate Action Network",
      university: "University of Pennsylvania",
      club_description:
        "Works on climate change initiatives and environmental advocacy.",
      university_description:
        "Ivy League university with a robust environmental research program.",
    },
    {
      name: "Eco-Educators",
      university: "University of Chicago",
      club_description:
        "Provides environmental education and promotes eco-friendly practices.",
      university_description:
        "Top university with a focus on interdisciplinary environmental studies.",
    },
    {
      name: "Sustainable Agriculture Club",
      university: "University of California, Davis",
      club_description:
        "Focuses on sustainable farming practices and environmental agriculture.",
      university_description:
        "Leading agricultural university with a strong emphasis on sustainability.",
    },
    {
      name: "Renewable Energy Society",
      university: "University of California, Los Angeles",
      club_description:
        "Promotes renewable energy solutions and sustainability.",
      university_description:
        "Major university with a commitment to renewable energy and environmental research.",
    },
    {
      name: "Eco-Solutions Club",
      university: "University of Sydney",
      club_description:
        "Focuses on practical solutions for environmental issues and sustainability.",
      university_description:
        "Leading Australian university with a strong environmental focus.",
    },
    {
      name: "Green Innovation Club",
      university: "University of California, San Diego",
      club_description:
        "Supports innovative environmental solutions and green technology.",
      university_description:
        "Top public university with a focus on environmental innovation.",
    },
    {
      name: "Environmental Stewardship Club",
      university: "University of Cambridge",
      club_description:
        "Promotes environmental stewardship and sustainable practices.",
      university_description:
        "Historic university with a strong tradition in environmental research and advocacy.",
    },
    {
      name: "Climate Justice League",
      university: "University of Florida",
      club_description:
        "Focuses on climate justice and environmental equity issues.",
      university_description:
        "Top public university with a commitment to climate justice and sustainability.",
    },
    {
      name: "Eco-Action Group",
      university: "University of Leeds",
      club_description:
        "Works on local and global environmental action projects.",
      university_description:
        "Large UK university known for its environmental and sustainability programs.",
    },
    {
      name: "Conservation Society",
      university: "University of Southern California",
      club_description:
        "Focuses on conservation efforts and protecting natural resources.",
      university_description:
        "Major university with a strong emphasis on environmental conservation.",
    },
    {
      name: "Green Campus Coalition",
      university: "University of Glasgow",
      club_description:
        "Promotes campus-wide sustainability and environmental initiatives.",
      university_description:
        "Historic university with a focus on environmental sustainability.",
    },
    {
      name: "Nature Conservation Club",
      university: "University of Warwick",
      club_description:
        "Works on nature conservation projects and environmental education.",
      university_description:
        "Top UK university with a strong commitment to environmental conservation.",
    },
    {
      name: "Sustainable Development Club",
      university: "University of Bristol",
      club_description:
        "Focuses on sustainable development practices and projects.",
      university_description:
        "Leading UK university with an emphasis on sustainability and development.",
    },
    {
      name: "Green Awareness Group",
      university: "University of Queensland",
      club_description:
        "Promotes environmental awareness and sustainability initiatives.",
      university_description:
        "Leading Australian university known for its commitment to environmental issues.",
    },
    {
      name: "Clean Energy Club",
      university: "Georgetown University",
      club_description:
        "Focuses on clean energy solutions and environmental sustainability.",
      university_description:
        "Top university with a strong focus on energy and environmental policy.",
    },
    {
      name: "Eco-Friendly Campus Group",
      university: "University of Hong Kong",
      club_description:
        "Promotes eco-friendly practices and sustainability on campus.",
      university_description:
        "Leading Asian university with a focus on environmental sustainability.",
    },
    {
      name: "Sustainable Solutions Society",
      university: "University of Illinois at Urbana-Champaign",
      club_description:
        "Works on finding and implementing sustainable solutions for environmental challenges.",
      university_description:
        "Top U.S. public university with a strong environmental research program.",
    },
    {
      name: "Green Initiatives Club",
      university: "University of Melbourne",
      club_description:
        "Focuses on campus and community-wide green initiatives.",
      university_description:
        "Leading Australian university known for its strong environmental and sustainability programs.",
    },
    {
      name: "Climate Change Club",
      university: "University of California, Irvine",
      club_description:
        "Works on climate change awareness and mitigation projects.",
      university_description:
        "Top public university with a commitment to addressing climate change.",
    },
    {
      name: "Environmental Advocacy Network",
      university: "University of Oxford",
      club_description:
        "Supports advocacy efforts for environmental protection and policy change.",
      university_description:
        "Historic university with a strong focus on environmental advocacy.",
    },
    {
      name: "Green Future Network",
      university: "University of Southern California",
      club_description:
        "Promotes future-oriented environmental solutions and sustainability projects.",
      university_description:
        "Major university with a focus on innovative green initiatives.",
    },
    {
      name: "Eco-Culture Club",
      university: "University of California, Santa Barbara",
      club_description:
        "Focuses on integrating sustainability into campus culture and activities.",
      university_description:
        "Top public university known for its strong environmental and sustainability programs.",
    },
    {
      name: "Sustainable Practices Group",
      university: "University of Washington",
      club_description:
        "Works on promoting and implementing sustainable practices.",
      university_description:
        "Top public university with a focus on environmental sustainability and research.",
    },
    {
      name: "Eco-Friends Club",
      university: "University of Cambridge",
      club_description:
        "Encourages eco-friendly practices and environmental conservation.",
      university_description:
        "Historic university with a strong commitment to environmental protection.",
    },
    {
      name: "Environmental Research Society",
      university: "University of Bristol",
      club_description:
        "Focuses on research and projects related to environmental sustainability.",
      university_description:
        "Leading UK university with a strong emphasis on environmental research.",
    },
    {
      name: "Sustainable Solutions Group",
      university: "University of Queensland",
      club_description:
        "Works on innovative solutions to environmental challenges.",
      university_description:
        "Top Australian university with a focus on sustainability and environmental issues.",
    },
    {
      name: "Green Campus Network",
      university: "University of Florida",
      club_description:
        "Promotes environmental sustainability and green initiatives on campus.",
      university_description:
        "Leading public university with a strong focus on environmental programs.",
    },
    {
      name: "Environmental Impact Club",
      university: "University of Illinois at Urbana-Champaign",
      club_description:
        "Focuses on assessing and improving environmental impact.",
      university_description:
        "Top U.S. public university with a strong environmental research focus.",
    },
    {
      name: "Eco-Friendly Solutions Society",
      university: "University of California, Davis",
      club_description:
        "Supports eco-friendly solutions and sustainability initiatives.",
      university_description:
        "Leading agricultural university known for its environmental focus.",
    },
    {
      name: "Climate Awareness Club",
      university: "University of Edinburgh",
      club_description:
        "Works on raising awareness about climate change and environmental issues.",
      university_description:
        "Historic university with a strong focus on climate and environmental research.",
    },
    {
      name: "Green Leaders Society",
      university: "University of Chicago",
      club_description:
        "Encourages leadership in environmental and sustainability initiatives.",
      university_description:
        "Top university with a commitment to environmental leadership and innovation.",
    },
    {
      name: "Eco-Conservation Network",
      university: "University of Sydney",
      club_description:
        "Focuses on conservation efforts and protecting natural habitats.",
      university_description:
        "Leading Australian university with a strong commitment to environmental conservation.",
    },
    {
      name: "Sustainable Practices Club",
      university: "University of Cambridge",
      club_description:
        "Promotes sustainable practices and environmental responsibility.",
      university_description:
        "Historic university known for its emphasis on sustainability and environmental issues.",
    },
  ],
  socialClubs: [
    {
      name: "International Students Association",
      university: "University of California, Berkeley",
      club_description:
        "Supports international students with cultural exchange and social activities.",
      university_description:
        "Top public university known for its diverse student body and global outreach.",
    },
    {
      name: "Campus Connect",
      university: "University of Oxford",
      club_description:
        "Facilitates social events and networking opportunities for students.",
      university_description:
        "Historic university with a strong emphasis on student engagement and community.",
    },
    {
      name: "Student Union Club",
      university: "Stanford University",
      club_description:
        "Organizes campus-wide social events and activities for students.",
      university_description:
        "Leading university with a vibrant student community and numerous social opportunities.",
    },
    {
      name: "Cultural Exchange Network",
      university: "Harvard University",
      club_description:
        "Promotes cross-cultural interactions and social events for students.",
      university_description:
        "Ivy League university with a commitment to diversity and global perspectives.",
    },
    {
      name: "Social Impact Club",
      university: "University of Melbourne",
      club_description:
        "Focuses on social initiatives and community building through events.",
      university_description:
        "Leading Australian university known for its strong emphasis on social impact.",
    },
    {
      name: "Community Outreach Group",
      university: "MIT",
      club_description:
        "Organizes outreach programs and social events to engage with the local community.",
      university_description:
        "Top tech university with a strong focus on community service and engagement.",
    },
    {
      name: "Student Life Association",
      university: "University of Toronto",
      club_description:
        "Enhances student life through social events and community activities.",
      university_description:
        "Leading Canadian university with a diverse range of student organizations and activities.",
    },
    {
      name: "Social Events Committee",
      university: "University of Edinburgh",
      club_description:
        "Plans and executes social events for students and campus communities.",
      university_description:
        "Historic university with a rich tradition of student engagement and activities.",
    },
    {
      name: "Campus Social Club",
      university: "University of Washington",
      club_description:
        "Organizes social events and mixers for students to connect and network.",
      university_description:
        "Top public university with a strong focus on student life and community events.",
    },
    {
      name: "Student Interaction Group",
      university: "University of Pennsylvania",
      club_description:
        "Facilitates social interactions and community-building activities for students.",
      university_description:
        "Ivy League university with a commitment to enhancing student experiences and connections.",
    },
    {
      name: "Social Networking Club",
      university: "University of Chicago",
      club_description:
        "Provides opportunities for students to network and socialize through various events.",
      university_description:
        "Top university known for its vibrant campus life and extensive student network.",
    },
    {
      name: "Campus Connectors",
      university: "University of California, Davis",
      club_description:
        "Organizes social mixers and events to connect students across campus.",
      university_description:
        "Leading agricultural university with a focus on student engagement and social activities.",
    },
    {
      name: "Student Relations Club",
      university: "University of California, Los Angeles",
      club_description:
        "Enhances student relationships through social events and networking opportunities.",
      university_description:
        "Major university with a dynamic student community and extensive social events.",
    },
    {
      name: "Global Students Network",
      university: "University of Sydney",
      club_description:
        "Supports international students with social activities and cultural integration.",
      university_description:
        "Leading Australian university known for its global student network and cultural diversity.",
    },
    {
      name: "Student Engagement Society",
      university: "University of California, San Diego",
      club_description:
        "Facilitates student engagement through social events and community activities.",
      university_description:
        "Top public university with a strong emphasis on student involvement and activities.",
    },
    {
      name: "Student Social Network",
      university: "University of Cambridge",
      club_description:
        "Promotes social networking and community events for students.",
      university_description:
        "Historic university with a strong tradition of student engagement and social activities.",
    },
    {
      name: "Social Club Network",
      university: "University of Bristol",
      club_description:
        "Focuses on creating social opportunities and networking events for students.",
      university_description:
        "Leading UK university with a vibrant student community and numerous social clubs.",
    },
    {
      name: "Campus Social Network",
      university: "University of Queensland",
      club_description:
        "Organizes social events and community-building activities on campus.",
      university_description:
        "Top Australian university known for its active student life and social events.",
    },
    {
      name: "Student Life Committee",
      university: "University of Florida",
      club_description:
        "Enhances student life through social activities and community events.",
      university_description:
        "Leading public university with a strong focus on student engagement and activities.",
    },
    {
      name: "Student Social Events Group",
      university: "University of Illinois at Urbana-Champaign",
      club_description:
        "Plans and hosts social events to foster student connections and campus community.",
      university_description:
        "Top U.S. public university with a diverse range of student activities and social opportunities.",
    },
    {
      name: "Social Activities Club",
      university: "University of Southern California",
      club_description:
        "Focuses on organizing social activities and events for students.",
      university_description:
        "Major university with a strong emphasis on student life and social events.",
    },
    {
      name: "Student Relations Network",
      university: "University of Hong Kong",
      club_description:
        "Supports student interactions and organizes social events for campus engagement.",
      university_description:
        "Leading Asian university with a focus on student community and social activities.",
    },
    {
      name: "Student Social Hub",
      university: "University of Leeds",
      club_description:
        "Provides a hub for social events and networking opportunities for students.",
      university_description:
        "Large UK university known for its active student life and social engagement.",
    },
    {
      name: "Campus Social Activities",
      university: "University of Warwick",
      club_description:
        "Organizes social activities and events to enhance student life.",
      university_description:
        "Top UK university with a strong emphasis on student involvement and social activities.",
    },
    {
      name: "Social Interaction Group",
      university: "University of Sydney",
      club_description:
        "Facilitates social interactions and networking opportunities for students.",
      university_description:
        "Leading Australian university known for its diverse student body and social activities.",
    },
    {
      name: "Student Social Network",
      university: "Georgetown University",
      club_description:
        "Organizes social events and networking opportunities for students.",
      university_description:
        "Top university with a focus on student engagement and community building.",
    },
    {
      name: "Campus Connection Club",
      university: "University of Melbourne",
      club_description:
        "Enhances student connections through social events and activities.",
      university_description:
        "Leading Australian university known for its strong student community and engagement.",
    },
    {
      name: "Student Social Circle",
      university: "University of California, Irvine",
      club_description:
        "Focuses on creating social circles and organizing student events.",
      university_description:
        "Top public university with a strong focus on student interaction and social activities.",
    },
    {
      name: "Social Networking Society",
      university: "University of Southern California",
      club_description:
        "Supports student networking and organizes social events.",
      university_description:
        "Major university with a vibrant campus life and extensive social opportunities.",
    },
    {
      name: "Student Engagement Group",
      university: "University of Edinburgh",
      club_description:
        "Facilitates student engagement through social events and community activities.",
      university_description:
        "Historic university with a rich tradition of student involvement and social activities.",
    },
    {
      name: "Campus Social Events Committee",
      university: "University of Chicago",
      club_description:
        "Plans and executes social events to enhance campus life.",
      university_description:
        "Top university known for its dynamic student life and extensive social events.",
    },
    {
      name: "Student Social Hub",
      university: "University of Pennsylvania",
      club_description:
        "Creates opportunities for social interaction and networking among students.",
      university_description:
        "Ivy League university with a commitment to student life and community engagement.",
    },
    {
      name: "Student Social Activities Club",
      university: "University of California, Davis",
      club_description:
        "Organizes social activities and community-building events for students.",
      university_description:
        "Leading agricultural university with a focus on student engagement and activities.",
    },
    {
      name: "Social Events Network",
      university: "University of Florida",
      club_description:
        "Focuses on organizing social events and activities for students.",
      university_description:
        "Top public university with a vibrant student community and numerous social opportunities.",
    },
    {
      name: "Campus Social Engagement",
      university: "University of Illinois at Urbana-Champaign",
      club_description:
        "Enhances student life through social events and networking opportunities.",
      university_description:
        "Top U.S. public university with a strong emphasis on student activities and engagement.",
    },
    {
      name: "Student Social Club",
      university: "University of Bristol",
      club_description:
        "Provides a platform for social activities and events for students.",
      university_description:
        "Leading UK university known for its active student life and community involvement.",
    },
    {
      name: "Campus Connectors Club",
      university: "University of Queensland",
      club_description:
        "Facilitates social connections and community activities for students.",
      university_description:
        "Top Australian university with a strong focus on student engagement and social activities.",
    },
    {
      name: "Social Activities Network",
      university: "University of Warwick",
      club_description:
        "Organizes social activities and events to enhance student life.",
      university_description:
        "Top UK university with a vibrant student community and numerous social events.",
    },
    {
      name: "Student Social Group",
      university: "University of Sydney",
      club_description:
        "Creates opportunities for socializing and networking among students.",
      university_description:
        "Leading Australian university known for its active student life and social activities.",
    },
    {
      name: "Campus Social Committee",
      university: "University of Melbourne",
      club_description:
        "Plans and executes social events to foster student connections.",
      university_description:
        "Leading Australian university with a focus on student life and community activities.",
    },
    {
      name: "Student Interaction Club",
      university: "University of Southern California",
      club_description:
        "Organizes social events and activities to promote student interactions.",
      university_description:
        "Major university with a vibrant campus life and strong student engagement.",
    },
    {
      name: "Student Social Network",
      university: "University of California, Irvine",
      club_description:
        "Focuses on social networking and community-building for students.",
      university_description:
        "Top public university with a strong emphasis on student life and activities.",
    },
    {
      name: "Social Engagement Society",
      university: "University of Leeds",
      club_description:
        "Supports student engagement through social events and networking opportunities.",
      university_description:
        "Large UK university with a dynamic student community and numerous social events.",
    },
    {
      name: "Campus Social Club",
      university: "University of Queensland",
      club_description:
        "Enhances student life through organizing social events and activities.",
      university_description:
        "Top Australian university with a focus on student engagement and community activities.",
    },
    {
      name: "Student Life Network",
      university: "University of Illinois at Urbana-Champaign",
      club_description:
        "Facilitates social interactions and community-building for students.",
      university_description:
        "Top U.S. public university known for its vibrant student life and social opportunities.",
    },
    {
      name: "Social Network Club",
      university: "University of Toronto",
      club_description:
        "Provides social networking and community events for students.",
      university_description:
        "Leading Canadian university with a diverse student body and active social scene.",
    },
    {
      name: "Student Social Circle",
      university: "University of Cambridge",
      club_description:
        "Creates opportunities for socializing and community-building among students.",
      university_description:
        "Historic university with a strong tradition of student engagement and activities.",
    },
  ],
  religiousClubs: [
    {
      name: "Christian Fellowship",
      university: "Harvard University",
      club_description:
        "Offers a supportive community for Christian students and organizes faith-based events.",
      university_description:
        "Ivy League university with a rich tradition of diverse student groups and religious activities.",
    },
    {
      name: "Muslim Student Association",
      university: "University of California, Berkeley",
      club_description:
        "Supports Muslim students with prayer services, study circles, and community events.",
      university_description:
        "Top public university known for its diverse student body and religious inclusivity.",
    },
    {
      name: "Jewish Student Union",
      university: "University of Chicago",
      club_description:
        "Provides a space for Jewish students to connect through cultural and religious events.",
      university_description:
        "Renowned for its vibrant campus life and support for diverse student groups.",
    },
    {
      name: "Hindu Student Association",
      university: "University of Southern California",
      club_description:
        "Facilitates Hindu worship, festivals, and cultural events for students.",
      university_description:
        "Major university with a strong emphasis on supporting diverse religious communities.",
    },
    {
      name: "Buddhist Student Club",
      university: "University of Toronto",
      club_description:
        "Promotes Buddhist teachings and provides meditation and mindfulness activities.",
      university_description:
        "Leading Canadian university with a commitment to fostering diverse religious practices.",
    },
    {
      name: "Interfaith Council",
      university: "Stanford University",
      club_description:
        "Encourages dialogue and cooperation among students of different faiths.",
      university_description:
        "Top university with a strong focus on inclusivity and interfaith engagement.",
    },
    {
      name: "Sikh Student Association",
      university: "University of British Columbia",
      club_description:
        "Supports Sikh students with religious observances and community service projects.",
      university_description:
        "Leading Canadian university known for its diverse student population and religious support.",
    },
    {
      name: "Catholic Campus Ministry",
      university: "University of Notre Dame",
      club_description:
        "Provides religious services, community service opportunities, and spiritual growth for Catholic students.",
      university_description:
        "Renowned Catholic university with a strong commitment to faith-based student activities.",
    },
    {
      name: "Islamic Society",
      university: "University of Michigan",
      club_description:
        "Organizes prayer services, educational events, and social gatherings for Muslim students.",
      university_description:
        "Major public university with a focus on supporting diverse religious practices.",
    },
    {
      name: "Chabad House",
      university: "University of Pennsylvania",
      club_description:
        "Offers Jewish religious services, educational programs, and cultural events.",
      university_description:
        "Ivy League university known for its vibrant Jewish community and support.",
    },
    {
      name: "Zen Buddhist Society",
      university: "University of Edinburgh",
      club_description:
        "Provides meditation sessions and teachings on Zen Buddhism for students.",
      university_description:
        "Historic university with a focus on spiritual and philosophical exploration.",
    },
    {
      name: "Hillel",
      university: "University of Wisconsin-Madison",
      club_description:
        "Supports Jewish life on campus through events, social activities, and religious observances.",
      university_description:
        "Leading public university with a commitment to Jewish cultural and religious engagement.",
    },
    {
      name: "The Islamic Student Association",
      university: "University of Texas at Austin",
      club_description:
        "Offers religious services, community events, and educational programs for Muslim students.",
      university_description:
        "Major university with a strong focus on supporting diverse faith communities.",
    },
    {
      name: "Baha'i Club",
      university: "University of California, San Diego",
      club_description:
        "Promotes Baha'i teachings and community service activities.",
      university_description:
        "Top public university known for its inclusive environment and support for various religious groups.",
    },
    {
      name: "Christian Student Fellowship",
      university: "University of Oxford",
      club_description:
        "Facilitates Christian worship, study groups, and community service projects.",
      university_description:
        "Historic university with a strong tradition of faith-based student organizations.",
    },
    {
      name: "Soka Gakkai International",
      university: "University of California, Los Angeles",
      club_description:
        "Supports Buddhist practices and community events based on Soka Gakkai teachings.",
      university_description:
        "Major university with a focus on supporting diverse spiritual practices.",
    },
    {
      name: "Interfaith Alliance",
      university: "University of Sydney",
      club_description:
        "Fosters interfaith dialogue and collaboration among students of different religious backgrounds.",
      university_description:
        "Leading Australian university known for its commitment to global and interfaith engagement.",
    },
    {
      name: "Greek Orthodox Student Association",
      university: "University of Florida",
      club_description:
        "Provides support and community for Greek Orthodox students with religious services and cultural events.",
      university_description:
        "Top public university with a focus on supporting diverse religious and cultural groups.",
    },
    {
      name: "Muslim Students' Association",
      university: "University of Alberta",
      club_description:
        "Organizes religious services, social events, and educational programs for Muslim students.",
      university_description:
        "Leading Canadian university known for its diverse student body and religious support.",
    },
    {
      name: "Catholic Student Association",
      university: "University of Melbourne",
      club_description:
        "Facilitates Catholic worship, community service, and faith-based activities.",
      university_description:
        "Top Australian university with a strong emphasis on supporting religious communities.",
    },
    {
      name: "Jewish Life on Campus",
      university: "University of Bristol",
      club_description:
        "Supports Jewish students with religious events, cultural activities, and community service.",
      university_description:
        "Leading UK university with a commitment to Jewish student life and engagement.",
    },
    {
      name: "Hindu Student Network",
      university: "University of Warwick",
      club_description:
        "Organizes religious and cultural events for Hindu students.",
      university_description:
        "Top UK university known for its active student community and support for diverse religions.",
    },
    {
      name: "Buddhist Student Association",
      university: "University of Hong Kong",
      club_description:
        "Provides meditation, teachings, and community events for Buddhist students.",
      university_description:
        "Leading Asian university with a focus on supporting various religious practices.",
    },
    {
      name: "Sikh Youth Society",
      university: "University of Leeds",
      club_description:
        "Supports Sikh students with religious observances and community involvement.",
      university_description:
        "Large UK university with a vibrant Sikh student community and support.",
    },
    {
      name: "Chabad Student Club",
      university: "University of Manchester",
      club_description:
        "Offers Jewish religious services, educational programs, and cultural events.",
      university_description:
        "Major UK university known for its strong support of Jewish student activities.",
    },
    {
      name: "Christian Student Union",
      university: "University of Southern California",
      club_description:
        "Facilitates Christian fellowship, worship, and community service.",
      university_description:
        "Leading university with a strong emphasis on faith-based student engagement.",
    },
    {
      name: "Islamic Cultural Association",
      university: "University of Bristol",
      club_description:
        "Promotes Islamic cultural events and community support for Muslim students.",
      university_description:
        "Top UK university with a commitment to cultural and religious diversity.",
    },
    {
      name: "Soka Gakkai Club",
      university: "University of California, Irvine",
      club_description:
        "Supports Buddhist practices and community events based on Soka Gakkai teachings.",
      university_description:
        "Top public university with a focus on supporting diverse spiritual practices.",
    },
    {
      name: "Christian Fellowship Group",
      university: "University of Melbourne",
      club_description:
        "Provides a community for Christian students with religious services and social events.",
      university_description:
        "Leading Australian university known for its vibrant faith-based student groups.",
    },
    {
      name: "Muslim Students Union",
      university: "University of Sydney",
      club_description:
        "Offers prayer services, educational events, and community activities for Muslim students.",
      university_description:
        "Top Australian university with a commitment to supporting diverse faith communities.",
    },
    {
      name: "Jewish Student Community",
      university: "University of Queensland",
      club_description:
        "Facilitates Jewish religious observances, cultural events, and community service.",
      university_description:
        "Leading Australian university with a strong focus on Jewish student life and activities.",
    },
    {
      name: "Hindu Cultural Society",
      university: "University of Edinburgh",
      club_description:
        "Organizes Hindu religious and cultural events for students.",
      university_description:
        "Historic university with a commitment to supporting diverse cultural and religious groups.",
    },
    {
      name: "Buddhist Meditation Club",
      university: "University of California, Berkeley",
      club_description:
        "Provides meditation sessions and teachings based on Buddhist practices.",
      university_description:
        "Top public university known for its inclusive environment and support for various spiritual practices.",
    },
    {
      name: "Sikh Student Federation",
      university: "University of Toronto",
      club_description:
        "Supports Sikh students with religious observances and community events.",
      university_description:
        "Leading Canadian university known for its diverse student body and cultural engagement.",
    },
    {
      name: "Christian Campus Community",
      university: "University of Oxford",
      club_description:
        "Facilitates Christian worship, study groups, and community service projects.",
      university_description:
        "Historic university with a rich tradition of faith-based student organizations.",
    },
    {
      name: "Islamic Society of America",
      university: "University of Texas at Austin",
      club_description:
        "Organizes religious services, educational programs, and social gatherings for Muslim students.",
      university_description:
        "Top public university with a focus on supporting diverse faith communities.",
    },
    {
      name: "Jewish Life Society",
      university: "University of Chicago",
      club_description:
        "Supports Jewish student life through religious services, cultural events, and community involvement.",
      university_description:
        "Renowned for its vibrant campus life and commitment to religious diversity.",
    },
    {
      name: "Hindu Students Association",
      university: "University of Melbourne",
      club_description:
        "Facilitates Hindu worship and cultural events for students.",
      university_description:
        "Top Australian university with a focus on supporting various religious practices and cultures.",
    },
    {
      name: "Buddhist Club",
      university: "University of Sydney",
      club_description: "Promotes Buddhist teachings and meditation practices.",
      university_description:
        "Leading Australian university known for its support of spiritual and philosophical exploration.",
    },
    {
      name: "Sikh Student Organization",
      university: "University of British Columbia",
      club_description:
        "Provides support for Sikh students through religious observances and community activities.",
      university_description:
        "Top Canadian university with a commitment to fostering diverse cultural and religious practices.",
    },
    {
      name: "Christian Fellowship Society",
      university: "University of Southern California",
      club_description:
        "Offers religious services, study groups, and community service for Christian students.",
      university_description:
        "Major university with a strong focus on faith-based engagement and support.",
    },
    {
      name: "Islamic Culture Club",
      university: "University of Alberta",
      club_description:
        "Supports Muslim students with cultural events, religious services, and educational programs.",
      university_description:
        "Leading Canadian university known for its diverse student body and religious inclusivity.",
    },
    {
      name: "Jewish Student Organization",
      university: "University of Leeds",
      club_description:
        "Provides a community for Jewish students through religious observances and cultural events.",
      university_description:
        "Top UK university with a vibrant Jewish student community.",
    },
    {
      name: "Hindu Student Group",
      university: "University of Warwick",
      club_description:
        "Organizes religious and cultural events for Hindu students.",
      university_description:
        "Leading UK university known for its active student community and support for diverse cultures.",
    },
    {
      name: "Buddhist Student Club",
      university: "University of Hong Kong",
      club_description:
        "Facilitates meditation sessions and Buddhist teachings for students.",
      university_description:
        "Top Asian university with a commitment to diverse spiritual practices.",
    },
    {
      name: "Sikh Cultural Society",
      university: "University of Cambridge",
      club_description:
        "Supports Sikh students with religious services, cultural events, and community service.",
      university_description:
        "Historic university with a focus on cultural and religious engagement.",
    },
    {
      name: "Christian Student Group",
      university: "University of Bristol",
      club_description:
        "Offers Christian worship, community service, and fellowship opportunities.",
      university_description:
        "Leading UK university with a strong focus on supporting faith-based student activities.",
    },
  ],
  sportsClubs: [
    {
      name: "Soccer Club",
      university: "Harvard University",
      club_description:
        "Organizes soccer games, practices, and tournaments for students.",
      university_description:
        "Ivy League university with a strong emphasis on athletics and student sports activities.",
    },
    {
      name: "Basketball Association",
      university: "University of California, Los Angeles",
      club_description:
        "Provides opportunities for students to participate in basketball games and competitions.",
      university_description:
        "Top public university known for its outstanding athletic programs and facilities.",
    },
    {
      name: "Tennis Club",
      university: "University of Florida",
      club_description:
        "Offers tennis training sessions, matches, and tournaments for students.",
      university_description:
        "Leading public university with a focus on sports and recreational activities.",
    },
    {
      name: "Swimming Team",
      university: "University of Texas at Austin",
      club_description:
        "Facilitates swimming practices, competitions, and meets for students.",
      university_description:
        "Major university with extensive facilities and support for various sports.",
    },
    {
      name: "Track and Field Club",
      university: "University of Michigan",
      club_description:
        "Organizes track and field events, practices, and meets for students.",
      university_description:
        "Top public university known for its strong athletics programs and facilities.",
    },
    {
      name: "Rowing Club",
      university: "University of Cambridge",
      club_description:
        "Provides rowing training, races, and events for students.",
      university_description:
        "Historic university with a tradition of excellence in rowing and other sports.",
    },
    {
      name: "Volleyball Team",
      university: "University of Southern California",
      club_description:
        "Offers volleyball practices, matches, and tournaments for students.",
      university_description:
        "Leading university with a commitment to sports and student-athlete development.",
    },
    {
      name: "Ultimate Frisbee Club",
      university: "University of Pennsylvania",
      club_description:
        "Organizes ultimate frisbee games, practices, and competitions for students.",
      university_description:
        "Ivy League university with a focus on promoting diverse sports and recreational activities.",
    },
    {
      name: "Rugby Club",
      university: "University of Sydney",
      club_description:
        "Facilitates rugby practices, matches, and tournaments for students.",
      university_description:
        "Top Australian university with a strong emphasis on sports and student engagement.",
    },
    {
      name: "Badminton Club",
      university: "University of Toronto",
      club_description:
        "Provides badminton training, games, and tournaments for students.",
      university_description:
        "Leading Canadian university known for its support of diverse sports and recreational activities.",
    },
    {
      name: "Baseball Team",
      university: "University of North Carolina at Chapel Hill",
      club_description:
        "Organizes baseball practices, games, and tournaments for students.",
      university_description:
        "Top public university with a strong baseball program and athletic facilities.",
    },
    {
      name: "Golf Club",
      university: "University of Edinburgh",
      club_description:
        "Offers golf training sessions, competitions, and social events for students.",
      university_description:
        "Historic university with a commitment to supporting various sports and recreational activities.",
    },
    {
      name: "Wrestling Team",
      university: "University of Illinois at Urbana-Champaign",
      club_description:
        "Facilitates wrestling practices, meets, and competitions for students.",
      university_description:
        "Major public university known for its comprehensive athletics programs and support.",
    },
    {
      name: "Cricket Club",
      university: "University of Warwick",
      club_description:
        "Provides cricket training, matches, and tournaments for students.",
      university_description:
        "Top UK university with a focus on supporting various sports and recreational activities.",
    },
    {
      name: "Cycling Club",
      university: "University of Melbourne",
      club_description:
        "Organizes cycling events, training sessions, and races for students.",
      university_description:
        "Leading Australian university with a strong emphasis on outdoor sports and activities.",
    },
    {
      name: "Hiking Club",
      university: "University of California, Berkeley",
      club_description:
        "Facilitates hiking trips, training, and events for students.",
      university_description:
        "Top public university known for its commitment to outdoor sports and recreational activities.",
    },
    {
      name: "Gymnastics Team",
      university: "University of Chicago",
      club_description:
        "Offers gymnastics training, routines, and competitions for students.",
      university_description:
        "Renowned university with a focus on supporting diverse athletic programs and activities.",
    },
    {
      name: "Ski Club",
      university: "University of British Columbia",
      club_description:
        "Provides skiing trips, training sessions, and events for students.",
      university_description:
        "Leading Canadian university with a commitment to supporting winter sports and recreational activities.",
    },
    {
      name: "Fencing Club",
      university: "University of Wisconsin-Madison",
      club_description:
        "Organizes fencing practices, matches, and tournaments for students.",
      university_description:
        "Top public university known for its support of diverse sports and activities.",
    },
    {
      name: "Lacrosse Team",
      university: "University of Virginia",
      club_description:
        "Facilitates lacrosse practices, games, and tournaments for students.",
      university_description:
        "Leading public university with a strong focus on athletics and student engagement.",
    },
    {
      name: "Water Polo Club",
      university: "University of Queensland",
      club_description:
        "Offers water polo training, matches, and competitions for students.",
      university_description:
        "Top Australian university with a strong emphasis on supporting water sports.",
    },
    {
      name: "Soccer Association",
      university: "University of Toronto",
      club_description:
        "Provides soccer games, practices, and community events for students.",
      university_description:
        "Leading Canadian university known for its active sports and recreational programs.",
    },
    {
      name: "Tennis Team",
      university: "University of Oxford",
      club_description:
        "Facilitates tennis practices, matches, and tournaments for students.",
      university_description:
        "Historic university with a focus on supporting diverse sports and activities.",
    },
    {
      name: "Swimming and Diving Club",
      university: "University of California, San Diego",
      club_description:
        "Offers swimming and diving practices, competitions, and events for students.",
      university_description:
        "Top public university with extensive aquatic sports facilities and support.",
    },
    {
      name: "Track Club",
      university: "University of Sydney",
      club_description:
        "Organizes track events, practices, and meets for students.",
      university_description:
        "Leading Australian university known for its commitment to track and field sports.",
    },
    {
      name: "Rowing Association",
      university: "University of Edinburgh",
      club_description:
        "Provides rowing training, races, and events for students.",
      university_description:
        "Historic university with a strong tradition in rowing and other sports.",
    },
    {
      name: "Volleyball Club",
      university: "University of Cambridge",
      club_description:
        "Offers volleyball practices, games, and tournaments for students.",
      university_description:
        "Historic university known for its strong support of student-athletes and sports activities.",
    },
    {
      name: "Ultimate Club",
      university: "University of Pennsylvania",
      club_description:
        "Organizes ultimate frisbee games, practices, and tournaments for students.",
      university_description:
        "Ivy League university with a focus on diverse sports and recreational activities.",
    },
    {
      name: "Rugby Team",
      university: "University of Leeds",
      club_description:
        "Facilitates rugby practices, matches, and tournaments for students.",
      university_description:
        "Top UK university with a strong emphasis on sports and student engagement.",
    },
    {
      name: "Badminton Association",
      university: "University of Warwick",
      club_description:
        "Provides badminton training, games, and tournaments for students.",
      university_description:
        "Leading UK university known for its support of various sports and recreational activities.",
    },
    {
      name: "Baseball Club",
      university: "University of Cambridge",
      club_description:
        "Organizes baseball practices, games, and tournaments for students.",
      university_description:
        "Historic university with a commitment to supporting diverse athletic programs.",
    },
    {
      name: "Golf Team",
      university: "University of Bristol",
      club_description:
        "Offers golf training sessions, competitions, and events for students.",
      university_description:
        "Leading UK university known for its support of outdoor sports and activities.",
    },
    {
      name: "Wrestling Club",
      university: "University of Manchester",
      club_description:
        "Provides wrestling practices, matches, and tournaments for students.",
      university_description:
        "Major UK university with a strong focus on athletics and sports programs.",
    },
    {
      name: "Cricket Team",
      university: "University of Melbourne",
      club_description:
        "Organizes cricket practices, games, and tournaments for students.",
      university_description:
        "Top Australian university with a strong emphasis on supporting cricket and other sports.",
    },
    {
      name: "Cycling Team",
      university: "University of Queensland",
      club_description:
        "Offers cycling events, training sessions, and races for students.",
      university_description:
        "Leading Australian university known for its commitment to outdoor and recreational sports.",
    },
    {
      name: "Gymnastics Club",
      university: "University of Sydney",
      club_description:
        "Facilitates gymnastics training, routines, and competitions for students.",
      university_description:
        "Top Australian university with a focus on supporting diverse athletic activities.",
    },
    {
      name: "Ski Team",
      university: "University of British Columbia",
      club_description:
        "Provides skiing trips, training sessions, and events for students.",
      university_description:
        "Leading Canadian university with a strong commitment to winter sports.",
    },
    {
      name: "Fencing Association",
      university: "University of Alberta",
      club_description:
        "Organizes fencing practices, matches, and tournaments for students.",
      university_description:
        "Top Canadian university known for its support of diverse sports and activities.",
    },
    {
      name: "Lacrosse Club",
      university: "University of Toronto",
      club_description:
        "Offers lacrosse practices, games, and tournaments for students.",
      university_description:
        "Leading Canadian university with a strong emphasis on athletics and student sports.",
    },
    {
      name: "Water Polo Team",
      university: "University of Melbourne",
      club_description:
        "Facilitates water polo training, matches, and competitions for students.",
      university_description:
        "Top Australian university with extensive support for water sports.",
    },
    {
      name: "Soccer Team",
      university: "University of Warwick",
      club_description:
        "Organizes soccer games, practices, and tournaments for students.",
      university_description:
        "Leading UK university known for its commitment to student sports and activities.",
    },
    {
      name: "Tennis Club",
      university: "University of Cambridge",
      club_description:
        "Provides tennis training, matches, and tournaments for students.",
      university_description:
        "Historic university with a strong tradition of supporting diverse sports programs.",
    },
    {
      name: "Swimming Team",
      university: "University of Leeds",
      club_description:
        "Offers swimming practices, competitions, and events for students.",
      university_description:
        "Top UK university with a focus on supporting aquatic sports and activities.",
    },
    {
      name: "Track and Field Team",
      university: "University of Edinburgh",
      club_description:
        "Facilitates track and field events, practices, and meets for students.",
      university_description:
        "Historic university with extensive support for track and field sports.",
    },
    {
      name: "Rowing Club",
      university: "University of Bristol",
      club_description:
        "Organizes rowing training, races, and events for students.",
      university_description:
        "Leading UK university with a strong tradition in rowing and other sports.",
    },
    {
      name: "Volleyball Team",
      university: "University of Oxford",
      club_description:
        "Provides volleyball practices, games, and tournaments for students.",
      university_description:
        "Historic university with a focus on supporting diverse student-athlete programs.",
    },
    {
      name: "Ultimate Frisbee Team",
      university: "University of Glasgow",
      club_description:
        "Facilitates ultimate frisbee games, practices, and competitions for students.",
      university_description:
        "Top UK university with a strong emphasis on diverse sports and recreational activities.",
    },
    {
      name: "Rugby Club",
      university: "University of Warwick",
      club_description:
        "Offers rugby practices, matches, and tournaments for students.",
      university_description:
        "Leading UK university known for its support of various sports and student engagement.",
    },
    {
      name: "Badminton Team",
      university: "University of Cambridge",
      club_description:
        "Organizes badminton training, games, and tournaments for students.",
      university_description:
        "Historic university with extensive support for diverse sports and activities.",
    },
    {
      name: "Baseball Club",
      university: "University of Oxford",
      club_description:
        "Provides baseball practices, games, and tournaments for students.",
      university_description:
        "Historic university known for its strong commitment to athletics and sports programs.",
    },
    {
      name: "Golf Club",
      university: "University of Bristol",
      club_description:
        "Offers golf training sessions, competitions, and events for students.",
      university_description:
        "Leading UK university with a focus on outdoor sports and activities.",
    },
    {
      name: "Wrestling Association",
      university: "University of Manchester",
      club_description:
        "Facilitates wrestling practices, matches, and tournaments for students.",
      university_description:
        "Top UK university with a strong emphasis on student sports and activities.",
    },
    {
      name: "Cricket Team",
      university: "University of Melbourne",
      club_description:
        "Organizes cricket practices, games, and tournaments for students.",
      university_description:
        "Leading Australian university with extensive support for cricket and other sports.",
    },
    {
      name: "Cycling Club",
      university: "University of Queensland",
      club_description:
        "Provides cycling events, training sessions, and races for students.",
      university_description:
        "Top Australian university known for its commitment to outdoor sports.",
    },
    {
      name: "Gymnastics Team",
      university: "University of Sydney",
      club_description:
        "Offers gymnastics training, routines, and competitions for students.",
      university_description:
        "Leading Australian university with a focus on diverse athletic activities.",
    },
    {
      name: "Ski Club",
      university: "University of British Columbia",
      club_description:
        "Organizes skiing trips, training sessions, and events for students.",
      university_description:
        "Top Canadian university with a commitment to winter sports.",
    },
    {
      name: "Fencing Club",
      university: "University of Alberta",
      club_description:
        "Facilitates fencing practices, matches, and tournaments for students.",
      university_description:
        "Leading Canadian university with a strong emphasis on diverse sports.",
    },
    {
      name: "Lacrosse Team",
      university: "University of Toronto",
      club_description:
        "Provides lacrosse practices, games, and tournaments for students.",
      university_description:
        "Top Canadian university with extensive support for athletics and student sports.",
    },
    {
      name: "Water Polo Club",
      university: "University of Melbourne",
      club_description:
        "Organizes water polo training, matches, and competitions for students.",
      university_description:
        "Leading Australian university with a commitment to water sports.",
    },
    {
      name: "Soccer Association",
      university: "University of Warwick",
      club_description:
        "Offers soccer games, practices, and tournaments for students.",
      university_description:
        "Top UK university known for its strong support of student-athlete programs.",
    },
    {
      name: "Tennis Team",
      university: "University of Cambridge",
      club_description:
        "Facilitates tennis training, matches, and tournaments for students.",
      university_description:
        "Historic university with a strong tradition in supporting diverse sports programs.",
    },
    {
      name: "Swimming Club",
      university: "University of Leeds",
      club_description:
        "Provides swimming practices, competitions, and events for students.",
      university_description:
        "Leading UK university known for its support of aquatic sports and activities.",
    },
  ],
  debateClubs: [
    {
      name: "Debate Society",
      university: "Harvard University",
      club_description:
        "Organizes competitive debates and public speaking events for students.",
      university_description:
        "Ivy League university with a strong tradition in debate and public speaking.",
    },
    {
      name: "Debate Club",
      university: "University of Oxford",
      club_description:
        "Facilitates inter-collegiate debates and workshops on argumentation skills.",
      university_description:
        "Historic university known for its rich debate tradition and academic excellence.",
    },
    {
      name: "Speech and Debate Team",
      university: "Stanford University",
      club_description:
        "Offers training and competition in debate and public speaking.",
      university_description:
        "Top private university with a strong emphasis on rhetoric and debate.",
    },
    {
      name: "Debate League",
      university: "University of Cambridge",
      club_description:
        "Organizes debates and discussion forums on current issues and policies.",
      university_description:
        "Prestigious university with a long history of debate and intellectual discourse.",
    },
    {
      name: "International Debate Club",
      university: "University of California, Berkeley",
      club_description:
        "Facilitates international debate competitions and cultural exchange.",
      university_description:
        "Leading public university known for its commitment to global issues and debate.",
    },
    {
      name: "Public Speaking and Debate Society",
      university: "University of Chicago",
      club_description:
        "Provides training and opportunities in public speaking and debate.",
      university_description:
        "Renowned university with a focus on fostering debate and communication skills.",
    },
    {
      name: "Debate Team",
      university: "University of Pennsylvania",
      club_description:
        "Organizes competitive debates and public speaking events for students.",
      university_description:
        "Ivy League university with a strong commitment to debate and rhetoric.",
    },
    {
      name: "Debate Forum",
      university: "University of Melbourne",
      club_description:
        "Offers platforms for structured debates and discussions on various topics.",
      university_description:
        "Leading Australian university known for its support of academic debate and discourse.",
    },
    {
      name: "College Debate Club",
      university: "University of Sydney",
      club_description:
        "Facilitates debate competitions and workshops for students.",
      university_description:
        "Top Australian university with a focus on student debate and public speaking.",
    },
    {
      name: "Student Debate Society",
      university: "University of Toronto",
      club_description:
        "Provides opportunities for debate training and competitive events.",
      university_description:
        "Leading Canadian university known for its support of debate and public speaking.",
    },
    {
      name: "Debate and Advocacy Club",
      university: "University of Edinburgh",
      club_description:
        "Organizes debates and advocacy workshops on current issues.",
      university_description:
        "Historic university with a commitment to debate and public policy.",
    },
    {
      name: "Debate Association",
      university: "University of Bristol",
      club_description:
        "Offers debate training, competitions, and public speaking events.",
      university_description:
        "Top UK university with a focus on supporting debate and rhetorical skills.",
    },
    {
      name: "Debate and Oratory Club",
      university: "University of Warwick",
      club_description: "Facilitates debate and oratory training for students.",
      university_description:
        "Leading UK university with a strong emphasis on debate and communication skills.",
    },
    {
      name: "Competitive Debate Club",
      university: "University of Leeds",
      club_description:
        "Provides training and competitive opportunities in debate.",
      university_description:
        "Top UK university known for its support of student debate and public speaking.",
    },
    {
      name: "Global Debate Society",
      university: "University of Bristol",
      club_description:
        "Organizes global debate forums and international competitions.",
      university_description:
        "Leading UK university with a focus on global debate and cultural exchange.",
    },
    {
      name: "Debate and Public Speaking Club",
      university: "University of Glasgow",
      club_description:
        "Offers debate and public speaking training and events.",
      university_description:
        "Top UK university with a strong tradition in debate and rhetorical skills.",
    },
    {
      name: "Student Debate Association",
      university: "University of St Andrews",
      club_description:
        "Facilitates student debates and public speaking workshops.",
      university_description:
        "Historic university known for its support of debate and public speaking.",
    },
    {
      name: "Debate and Discussion Club",
      university: "University of Washington",
      club_description:
        "Organizes debates and discussions on various topics and issues.",
      university_description:
        "Top public university with a focus on fostering debate and discourse.",
    },
    {
      name: "Debate Society",
      university: "University of Southern California",
      club_description:
        "Provides debate training and competitive opportunities for students.",
      university_description:
        "Leading university with a strong emphasis on debate and public speaking.",
    },
    {
      name: "Public Debating Club",
      university: "University of Alberta",
      club_description:
        "Facilitates public debating events and training for students.",
      university_description:
        "Top Canadian university with a focus on supporting debate and public speaking.",
    },
    {
      name: "Debate Club",
      university: "University of Ottawa",
      club_description:
        "Organizes debates and discussion forums on current issues.",
      university_description:
        "Leading Canadian university known for its support of debate and public speaking.",
    },
    {
      name: "International Debating Society",
      university: "University of York",
      club_description:
        "Offers training and opportunities for international debate competitions.",
      university_description:
        "Top UK university with a focus on global debate and cultural exchange.",
    },
    {
      name: "Debate and Rhetoric Club",
      university: "University of Durham",
      club_description:
        "Provides debate training and opportunities for public speaking events.",
      university_description:
        "Leading UK university known for its strong tradition in debate and rhetoric.",
    },
    {
      name: "Student Debate League",
      university: "University of Warwick",
      club_description:
        "Facilitates competitive debates and public speaking workshops.",
      university_description:
        "Top UK university with a commitment to supporting student debate activities.",
    },
    {
      name: "Debate and Advocacy Society",
      university: "University of Cambridge",
      club_description:
        "Organizes debates and advocacy training on various topics.",
      university_description:
        "Historic university with a rich tradition in debate and public advocacy.",
    },
    {
      name: "Debate Club",
      university: "University of Sydney",
      club_description:
        "Offers opportunities for debate and public speaking training.",
      university_description:
        "Leading Australian university known for its commitment to student debate and engagement.",
    },
    {
      name: "Student Debate Forum",
      university: "University of Melbourne",
      club_description:
        "Facilitates debate forums and discussion events for students.",
      university_description:
        "Top Australian university with a focus on fostering debate and discourse.",
    },
    {
      name: "Debate Team",
      university: "University of New South Wales",
      club_description:
        "Provides training and competitive opportunities in debate.",
      university_description:
        "Leading Australian university with a strong emphasis on debate and public speaking.",
    },
    {
      name: "Debate Society",
      university: "University of Queensland",
      club_description: "Organizes debate events and training for students.",
      university_description:
        "Top Australian university with extensive support for debate and rhetorical skills.",
    },
    {
      name: "Public Speaking Club",
      university: "University of Adelaide",
      club_description:
        "Facilitates public speaking and debate training and events.",
      university_description:
        "Leading Australian university known for its commitment to student debate and discourse.",
    },
    {
      name: "Debate Association",
      university: "University of British Columbia",
      club_description:
        "Offers debate training and competitive events for students.",
      university_description:
        "Top Canadian university with a strong focus on supporting student debate.",
    },
    {
      name: "Debate Club",
      university: "McGill University",
      club_description:
        "Provides opportunities for debate training and competitive events.",
      university_description:
        "Leading Canadian university with a commitment to debate and public speaking.",
    },
    {
      name: "Debate Society",
      university: "University of Western Ontario",
      club_description: "Organizes debates and discussion forums for students.",
      university_description:
        "Top Canadian university with extensive support for debate and rhetoric.",
    },
    {
      name: "Student Debate Club",
      university: "University of Alberta",
      club_description:
        "Facilitates student debates and public speaking events.",
      university_description:
        "Leading Canadian university known for its commitment to debate and discussion.",
    },
    {
      name: "Debate and Rhetoric Team",
      university: "University of Toronto",
      club_description:
        "Offers debate training and opportunities for public speaking events.",
      university_description:
        "Top Canadian university with a focus on fostering debate and rhetorical skills.",
    },
    {
      name: "International Debate Association",
      university: "University of Waterloo",
      club_description:
        "Organizes international debate competitions and cultural exchange.",
      university_description:
        "Leading Canadian university with a strong commitment to global debate.",
    },
    {
      name: "Debate and Discussion Society",
      university: "University of Calgary",
      club_description:
        "Provides debate training and discussion forums for students.",
      university_description:
        "Top Canadian university with extensive support for debate and public speaking.",
    },
    {
      name: "Public Debating Team",
      university: "University of Victoria",
      club_description:
        "Facilitates public debates and discussion events for students.",
      university_description:
        "Leading Canadian university known for its support of debate and discourse.",
    },
    {
      name: "Debate Club",
      university: "University of Ottawa",
      club_description:
        "Organizes debates and public speaking workshops for students.",
      university_description:
        "Top Canadian university with a focus on fostering debate and rhetorical skills.",
    },
    {
      name: "Debate and Oratory Team",
      university: "University of Alberta",
      club_description:
        "Offers opportunities for debate training and public speaking events.",
      university_description:
        "Leading Canadian university with a strong emphasis on debate and oratory.",
    },
    {
      name: "Global Debate Club",
      university: "University of Toronto",
      club_description:
        "Facilitates global debate forums and competitions for students.",
      university_description:
        "Top Canadian university with a commitment to supporting international debate.",
    },
    {
      name: "Student Debate Association",
      university: "University of Montreal",
      club_description:
        "Provides training and competitive opportunities in debate.",
      university_description:
        "Leading Canadian university known for its strong focus on debate and rhetoric.",
    },
    {
      name: "Debate Society",
      university: "University of Sherbrooke",
      club_description:
        "Organizes debate events and public speaking workshops for students.",
      university_description:
        "Top Canadian university with extensive support for debate and discourse.",
    },
    {
      name: "Debate and Discussion Club",
      university: "University of Laval",
      club_description:
        "Offers opportunities for debate and public speaking events.",
      university_description:
        "Leading Canadian university with a focus on fostering debate and discussion",
    },
    {
      name: "Debate Club",
      university: "University of Quebec",
      club_description:
        "Facilitates debates and discussion forums on various topics.",
      university_description:
        "Top Canadian university known for its commitment to student debate and rhetoric.",
    },
  ],
  literaryClubs: [
    {
      name: "Literary Society",
      university: "Harvard University",
      club_description:
        "Hosts readings, workshops, and discussions on literature.",
      university_description:
        "Ivy League university with a strong tradition in literary studies and creative writing.",
    },
    {
      name: "Writers' Club",
      university: "University of Oxford",
      club_description:
        "Facilitates writing workshops and literary events for students.",
      university_description:
        "Historic university known for its support of literature and creative writing.",
    },
    {
      name: "Poetry Society",
      university: "Stanford University",
      club_description:
        "Organizes poetry readings, workshops, and discussions.",
      university_description:
        "Top private university with a focus on creative writing and literary arts.",
    },
    {
      name: "Literary Arts Club",
      university: "University of Cambridge",
      club_description:
        "Offers opportunities for literary discussions and creative writing events.",
      university_description:
        "Prestigious university with a rich tradition in literature and creative expression.",
    },
    {
      name: "Creative Writing Club",
      university: "University of California, Berkeley",
      club_description:
        "Facilitates creative writing workshops and literary readings.",
      university_description:
        "Leading public university with a strong emphasis on creative writing and literary studies.",
    },
    {
      name: "Fiction Writing Society",
      university: "University of Chicago",
      club_description:
        "Provides workshops and events for fiction writing and literary critique.",
      university_description:
        "Renowned university with a focus on fostering literary and creative writing skills.",
    },
    {
      name: "Literary Discussion Group",
      university: "University of Pennsylvania",
      club_description:
        "Hosts literary discussions and book reviews for students.",
      university_description:
        "Ivy League university known for its support of literary studies and creative writing.",
    },
    {
      name: "Poetry Workshop",
      university: "University of Melbourne",
      club_description:
        "Organizes poetry workshops, readings, and literary events.",
      university_description:
        "Leading Australian university with a focus on supporting literary arts and creative writing.",
    },
    {
      name: "Creative Writing Society",
      university: "University of Sydney",
      club_description:
        "Facilitates creative writing workshops and literary discussions.",
      university_description:
        "Top Australian university with extensive support for literary arts and writing.",
    },
    {
      name: "Literary Club",
      university: "University of Toronto",
      club_description:
        "Provides opportunities for literary discussions and writing workshops.",
      university_description:
        "Leading Canadian university known for its commitment to literary studies and creative writing.",
    },
    {
      name: "Book Club",
      university: "University of Edinburgh",
      club_description:
        "Hosts book readings, discussions, and literary events.",
      university_description:
        "Historic university with a strong tradition in literature and literary criticism.",
    },
    {
      name: "Creative Writing Club",
      university: "University of Bristol",
      club_description:
        "Organizes creative writing workshops and literary critiques.",
      university_description:
        "Top UK university with a focus on fostering creative writing and literary discussions.",
    },
    {
      name: "Poetry and Prose Club",
      university: "University of Warwick",
      club_description:
        "Offers workshops and events for poetry and prose writing.",
      university_description:
        "Leading UK university known for its support of literary arts and creative writing.",
    },
    {
      name: "Literary Arts Society",
      university: "University of Leeds",
      club_description:
        "Facilitates literary discussions and creative writing events.",
      university_description:
        "Top UK university with a strong tradition in literary arts and creative expression.",
    },
    {
      name: "Creative Writing and Poetry Club",
      university: "University of Glasgow",
      club_description:
        "Provides workshops and events for creative writing and poetry.",
      university_description:
        "Leading UK university known for its support of literary arts and writing.",
    },
    {
      name: "Book and Writing Club",
      university: "University of St Andrews",
      club_description:
        "Hosts book discussions and creative writing workshops.",
      university_description:
        "Historic university with a focus on fostering literary arts and creative writing.",
    },
    {
      name: "Literary Discussion Club",
      university: "University of Washington",
      club_description:
        "Organizes literary discussions, book reviews, and writing events.",
      university_description:
        "Top public university with a commitment to literary studies and creative writing.",
    },
    {
      name: "Poetry Society",
      university: "University of Southern California",
      club_description:
        "Facilitates poetry readings, workshops, and literary discussions.",
      university_description:
        "Leading university with a strong emphasis on literary arts and creative writing.",
    },
    {
      name: "Creative Writers' Society",
      university: "University of Alberta",
      club_description:
        "Offers workshops and events for creative writing and literary critique.",
      university_description:
        "Top Canadian university known for its support of literary arts and writing.",
    },
    {
      name: "Literary Club",
      university: "University of Ottawa",
      club_description:
        "Provides opportunities for literary discussions and writing events.",
      university_description:
        "Leading Canadian university with a focus on literary studies and creative writing.",
    },
    {
      name: "Fiction and Poetry Club",
      university: "University of York",
      club_description:
        "Organizes fiction and poetry workshops and literary events.",
      university_description:
        "Top UK university with a commitment to fostering creative writing and literary arts.",
    },
    {
      name: "Creative Writing Group",
      university: "University of Durham",
      club_description:
        "Hosts creative writing workshops and literary discussions.",
      university_description:
        "Leading UK university known for its support of creative writing and literary studies.",
    },
    {
      name: "Literary Arts Club",
      university: "University of Warwick",
      club_description:
        "Facilitates literary discussions and creative writing events.",
      university_description:
        "Top UK university with extensive support for literary arts and writing.",
    },
    {
      name: "Poetry and Fiction Club",
      university: "University of Cambridge",
      club_description:
        "Offers opportunities for poetry and fiction writing workshops.",
      university_description:
        "Prestigious university with a strong tradition in literary arts and creative expression.",
    },
    {
      name: "Creative Writing Society",
      university: "University of Melbourne",
      club_description:
        "Organizes creative writing workshops and literary events.",
      university_description:
        "Leading Australian university with a focus on fostering literary arts and writing.",
    },
    {
      name: "Book Review Club",
      university: "University of Sydney",
      club_description:
        "Hosts book reviews, literary discussions, and writing events.",
      university_description:
        "Top Australian university with extensive support for literary studies and creative writing.",
    },
    {
      name: "Literary Circle",
      university: "University of Queensland",
      club_description:
        "Facilitates literary discussions and creative writing workshops.",
      university_description:
        "Leading Australian university with a strong emphasis on literary arts and writing.",
    },
    {
      name: "Poetry Club",
      university: "University of British Columbia",
      club_description:
        "Organizes poetry readings, workshops, and discussions.",
      university_description:
        "Top Canadian university known for its commitment to literary arts and creative writing.",
    },
    {
      name: "Creative Writing Club",
      university: "McGill University",
      club_description:
        "Provides workshops and events for creative writing and literary critique.",
      university_description:
        "Leading Canadian university with extensive support for literary arts and writing.",
    },
    {
      name: "Literary Discussion Group",
      university: "University of Western Ontario",
      club_description:
        "Hosts literary discussions, book reviews, and writing events.",
      university_description:
        "Top Canadian university with a focus on literary studies and creative writing.",
    },
    {
      name: "Writers' Society",
      university: "University of Calgary",
      club_description:
        "Facilitates creative writing workshops and literary discussions.",
      university_description:
        "Leading Canadian university known for its support of literary arts and writing.",
    },
    {
      name: "Creative Writing and Poetry Society",
      university: "University of Victoria",
      club_description:
        "Offers opportunities for poetry and fiction workshops and events.",
      university_description:
        "Top Canadian university with a focus on fostering literary arts and writing.",
    },
    {
      name: "Literary Club",
      university: "University of Ottawa",
      club_description:
        "Provides literary discussion forums and creative writing workshops.",
      university_description:
        "Leading Canadian university known for its strong commitment to literary studies.",
    },
    {
      name: "Creative Writing Association",
      university: "University of Laval",
      club_description:
        "Organizes creative writing workshops and literary critique events.",
      university_description:
        "Top Canadian university with extensive support for literary arts and writing.",
    },
    {
      name: "Literary Arts Society",
      university: "University of Sherbrooke",
      club_description:
        "Facilitates literary discussions and creative writing opportunities.",
      university_description:
        "Leading Canadian university known for its support of literary studies and creative writing.",
    },
    {
      name: "Book Club",
      university: "University of Quebec",
      club_description: "Hosts book readings, discussions, and writing events.",
      university_description:
        "Top Canadian university with a strong emphasis on literary arts and discourse.",
    },
  ],
  scienceAndTechnologyClub: [
    {
      name: "Tech Innovators Club",
      university: "Massachusetts Institute of Technology",
      club_description:
        "Focuses on cutting-edge technology projects and innovations.",
      university_description:
        "Renowned for its emphasis on technological advancements and scientific research.",
    },
    {
      name: "Robotics Club",
      university: "Stanford University",
      club_description:
        "Provides hands-on experience with robotics and automation technologies.",
      university_description:
        "Leading institution in technology and engineering research.",
    },
    {
      name: "Computer Science Society",
      university: "University of California, Berkeley",
      club_description:
        "Hosts events and workshops on computer science and software development.",
      university_description:
        "Top university known for its strong computer science and engineering programs.",
    },
    {
      name: "AI Research Group",
      university: "Carnegie Mellon University",
      club_description:
        "Engages in artificial intelligence research and development.",
      university_description:
        "Highly regarded for its AI research and technological innovation.",
    },
    {
      name: "Quantum Computing Club",
      university: "University of Cambridge",
      club_description:
        "Explores advancements in quantum computing and quantum mechanics.",
      university_description:
        "Prestigious university with a strong focus on scientific research and technology.",
    },
    {
      name: "Engineering Society",
      university: "Georgia Institute of Technology",
      club_description:
        "Offers workshops and events related to engineering and technology.",
      university_description:
        "Top university known for its engineering and technology programs.",
    },
    {
      name: "Tech Explorers Club",
      university: "University of Illinois Urbana-Champaign",
      club_description:
        "Focuses on exploring new technologies and their applications.",
      university_description:
        "Leading institution in engineering and technology research.",
    },
    {
      name: "Data Science Society",
      university: "University of Michigan",
      club_description:
        "Organizes events and workshops on data science and analytics.",
      university_description:
        "Top university with a strong emphasis on data science and technological research.",
    },
    {
      name: "Cybersecurity Club",
      university: "University of California, San Diego",
      club_description: "Focuses on cybersecurity topics and practices.",
      university_description:
        "Renowned for its research and education in cybersecurity and technology.",
    },
    {
      name: "Bioinformatics Club",
      university: "Harvard University",
      club_description:
        "Explores the intersection of biology and data science.",
      university_description:
        "Ivy League university with a strong focus on scientific research and technology.",
    },
    {
      name: "Electronics Club",
      university: "University of Bristol",
      club_description:
        "Provides hands-on experience with electronics and circuit design.",
      university_description:
        "Leading UK university known for its engineering and technological research.",
    },
    {
      name: "Software Engineering Society",
      university: "University of Toronto",
      club_description:
        "Hosts workshops and events on software development and engineering.",
      university_description:
        "Top Canadian university with a strong focus on software engineering and technology.",
    },
    {
      name: "Tech Startups Club",
      university: "University of Washington",
      club_description:
        "Supports students interested in launching tech startups and ventures.",
      university_description:
        "Known for its innovation and support for technology startups.",
    },
    {
      name: "Mechanical Engineering Club",
      university: "University of Michigan",
      club_description:
        "Provides resources and events related to mechanical engineering.",
      university_description:
        "Top university with a strong mechanical engineering program.",
    },
    {
      name: "Space Exploration Society",
      university: "California Institute of Technology",
      club_description:
        "Focuses on space science and exploration technologies.",
      university_description:
        "Leading institution in space research and technology.",
    },
    {
      name: "Bioengineering Club",
      university: "Johns Hopkins University",
      club_description:
        "Explores advancements in bioengineering and medical technologies.",
      university_description:
        "Renowned for its research and development in bioengineering and healthcare technology.",
    },
    {
      name: "Tech Policy Club",
      university: "University of Oxford",
      club_description:
        "Examines the intersection of technology and public policy.",
      university_description:
        "Prestigious university with a focus on technology policy and regulation.",
    },
    {
      name: "Innovation Club",
      university: "University of Cambridge",
      club_description:
        "Supports innovation and technology development projects.",
      university_description:
        "Historic university known for its contributions to technological advancements.",
    },
    {
      name: "App Development Society",
      university: "University of California, Los Angeles",
      club_description:
        "Organizes events and workshops on mobile app development.",
      university_description:
        "Top university with a strong focus on technology and app development.",
    },
    {
      name: "Network Security Club",
      university: "University of Pennsylvania",
      club_description:
        "Focuses on network security technologies and practices.",
      university_description:
        "Ivy League university known for its emphasis on technology and cybersecurity.",
    },
    {
      name: "Sustainable Tech Club",
      university: "University of Sydney",
      club_description:
        "Explores sustainable technology solutions and innovations.",
      university_description:
        "Leading Australian university with a focus on sustainable technology and research.",
    },
    {
      name: "AI and Robotics Club",
      university: "University of Melbourne",
      club_description:
        "Combines artificial intelligence and robotics research.",
      university_description:
        "Top Australian university known for its advancements in AI and robotics.",
    },
    {
      name: "Tech Ethics Club",
      university: "University of Edinburgh",
      club_description:
        "Examines ethical issues related to technology and innovation.",
      university_description:
        "Historic university with a strong focus on technology and ethics.",
    },
    {
      name: "Software Development Society",
      university: "University of Glasgow",
      club_description:
        "Hosts workshops and events on software development and engineering.",
      university_description:
        "Leading UK university with a strong emphasis on software engineering.",
    },
    {
      name: "Renewable Energy Club",
      university: "University of Alberta",
      club_description:
        "Focuses on renewable energy technologies and sustainability.",
      university_description:
        "Top Canadian university known for its research in renewable energy and technology.",
    },
    {
      name: "Technology and Innovation Club",
      university: "University of Waterloo",
      club_description:
        "Supports technology and innovation projects and initiatives.",
      university_description:
        "Leading Canadian university with a focus on technological advancements and innovation.",
    },
    {
      name: "Biomedical Engineering Society",
      university: "University of Toronto",
      club_description:
        "Explores biomedical engineering technologies and research.",
      university_description:
        "Top Canadian university with a strong emphasis on biomedical engineering.",
    },
    {
      name: "Tech Enthusiasts Club",
      university: "University of Western Ontario",
      club_description:
        "Hosts events and discussions on various technology topics.",
      university_description:
        "Leading Canadian university with a focus on technology and innovation.",
    },
    {
      name: "Tech for Good Club",
      university: "University of York",
      club_description:
        "Explores how technology can be used for social good and impact.",
      university_description:
        "Top UK university known for its support of technology and social impact.",
    },
    {
      name: "Computational Science Club",
      university: "University of St Andrews",
      club_description:
        "Provides opportunities for computational science projects and research.",
      university_description:
        "Historic university with a focus on scientific and computational research.",
    },
    {
      name: "Engineering and Technology Club",
      university: "University of Sheffield",
      club_description:
        "Organizes events and workshops on engineering and technology topics.",
      university_description:
        "Top UK university with a strong engineering and technology program.",
    },
    {
      name: "Smart Cities Club",
      university: "University of Newcastle",
      club_description:
        "Focuses on technologies and innovations for smart cities.",
      university_description:
        "Leading UK university known for its research in smart city technologies.",
    },
    {
      name: "Tech Entrepreneurship Club",
      university: "University of Leicester",
      club_description:
        "Supports student ventures and startups in the technology sector.",
      university_description:
        "Top UK university with a focus on technology entrepreneurship and innovation.",
    },
    {
      name: "Digital Media Club",
      university: "University of Southampton",
      club_description:
        "Explores digital media technologies and creative applications.",
      university_description:
        "Leading UK university known for its contributions to digital media and technology.",
    },
    {
      name: "Tech Development Club",
      university: "University of Exeter",
      club_description:
        "Organizes workshops and events on technology development and innovation.",
      university_description:
        "Top UK university with a focus on technology and development.",
    },
    {
      name: "Information Technology Society",
      university: "University of Liverpool",
      club_description:
        "Hosts events and workshops related to information technology and systems.",
      university_description:
        "Leading UK university with a strong emphasis on IT and technology research.",
    },
    {
      name: "Emerging Technologies Club",
      university: "University of Bristol",
      club_description:
        "Explores new and emerging technologies and their applications.",
      university_description:
        "Top UK university known for its research in emerging technologies.",
    },
    {
      name: "Tech Research Group",
      university: "University College London",
      club_description:
        "Supports research and development in various technology fields.",
      university_description:
        "Prestigious university with a strong focus on technological research and innovation.",
    },
    {
      name: "Space Technology Club",
      university: "Imperial College London",
      club_description:
        "Focuses on technologies related to space exploration and research.",
      university_description:
        "Leading UK university known for its research in space technology and engineering.",
    },
    {
      name: "Engineering Innovation Club",
      university: "University of Bath",
      club_description:
        "Organizes events and projects focused on engineering innovation.",
      university_description:
        "Top UK university with a focus on engineering and technological advancements.",
    },
    {
      name: "Health Tech Club",
      university: "University of Warwick",
      club_description:
        "Explores technologies related to healthcare and medical advancements.",
      university_description:
        "Leading UK university known for its research in health technology and innovation.",
    },
    {
      name: "Software Development Club",
      university: "University of Durham",
      club_description:
        "Provides opportunities for software development projects and workshops.",
      university_description:
        "Top UK university with a strong emphasis on software engineering and development.",
    },
    {
      name: "Tech Innovation Hub",
      university: "University of Essex",
      club_description:
        "Supports innovative technology projects and entrepreneurial ventures.",
      university_description:
        "Leading UK university known for its focus on technology and innovation.",
    },
    {
      name: "Advanced Computing Society",
      university: "University of Hertfordshire",
      club_description:
        "Focuses on advanced computing technologies and research.",
      university_description:
        "Top UK university with a strong emphasis on advanced computing and technology.",
    },
  ],
  gamingClubs: [
    {
      name: "Game Developers Club",
      university: "University of California, Irvine",
      club_description: "Focuses on game development and design projects.",
      university_description:
        "Renowned for its emphasis on gaming and interactive media research.",
    },
    {
      name: "eSports Club",
      university: "University of Washington",
      club_description: "Organizes competitive gaming events and tournaments.",
      university_description:
        "Top university with a strong eSports and gaming community.",
    },
    {
      name: "Board Game Society",
      university: "University of Oxford",
      club_description: "Hosts events and meetups for board game enthusiasts.",
      university_description:
        "Prestigious university with a vibrant student gaming community.",
    },
    {
      name: "Video Game Club",
      university: "University of Toronto",
      club_description: "Explores various video games and their development.",
      university_description:
        "Top Canadian university with a strong focus on gaming and technology.",
    },
    {
      name: "Retro Gaming Club",
      university: "University of Bristol",
      club_description: "Focuses on classic and retro video games.",
      university_description:
        "Leading UK university with a passionate gaming community.",
    },
    {
      name: "Game Design Society",
      university: "University of Southern California",
      club_description:
        "Offers workshops and projects on game design and development.",
      university_description:
        "Known for its strong emphasis on game design and interactive media.",
    },
    {
      name: "Competitive Gaming Club",
      university: "Georgia Institute of Technology",
      club_description: "Hosts competitive gaming tournaments and events.",
      university_description:
        "Top university with a strong eSports and competitive gaming scene.",
    },
    {
      name: "Role-Playing Game Club",
      university: "University of Edinburgh",
      club_description: "Focuses on tabletop role-playing games and campaigns.",
      university_description:
        "Historic university with a thriving gaming and role-playing community.",
    },
    {
      name: "Game Modding Club",
      university: "University of Melbourne",
      club_description: "Explores game modding and custom content creation.",
      university_description:
        "Leading Australian university with a focus on gaming and technology.",
    },
    {
      name: "Gaming Strategy Club",
      university: "University of Pennsylvania",
      club_description:
        "Analyzes and develops strategies for various gaming genres.",
      university_description:
        "Ivy League university with a strong emphasis on gaming strategy and research.",
    },
    {
      name: "Virtual Reality Gaming Club",
      university: "University of Cambridge",
      club_description: "Explores virtual reality games and technologies.",
      university_description:
        "Prestigious university with a focus on cutting-edge gaming technologies.",
    },
    {
      name: "Game Development Workshop",
      university: "University of Sydney",
      club_description:
        "Provides hands-on workshops for game development and design.",
      university_description:
        "Leading Australian university known for its contributions to gaming and technology.",
    },
    {
      name: "Mobile Gaming Club",
      university: "University of California, Los Angeles",
      club_description: "Focuses on mobile game development and gameplay.",
      university_description:
        "Top university with a strong focus on mobile technology and gaming.",
    },
    {
      name: "Gaming Culture Club",
      university: "University of York",
      club_description: "Explores the cultural aspects and history of gaming.",
      university_description:
        "Top UK university with a focus on gaming culture and media studies.",
    },
    {
      name: "Game Music Club",
      university: "University of St Andrews",
      club_description: "Focuses on music and soundtracks from video games.",
      university_description:
        "Historic university with a strong emphasis on music and gaming studies.",
    },
    {
      name: "Game Mechanics Society",
      university: "University of Alberta",
      club_description: "Analyzes and develops game mechanics and systems.",
      university_description:
        "Leading Canadian university known for its focus on game design and development.",
    },
    {
      name: "Fantasy Gaming Club",
      university: "University of Warwick",
      club_description:
        "Explores fantasy and adventure-based games and campaigns.",
      university_description:
        "Top UK university with a vibrant fantasy gaming community.",
    },
    {
      name: "Indie Game Developers",
      university: "University of Sheffield",
      club_description:
        "Supports indie game development projects and collaborations.",
      university_description:
        "Leading UK university with a focus on independent game development.",
    },
    {
      name: "Gaming Hardware Club",
      university: "University of Glasgow",
      club_description:
        "Focuses on gaming hardware and technology innovations.",
      university_description:
        "Top UK university known for its research in gaming and technology.",
    },
    {
      name: "Simulation Gaming Club",
      university: "University of Toronto",
      club_description:
        "Explores simulation games and their design principles.",
      university_description:
        "Top Canadian university with a strong emphasis on simulation gaming.",
    },
    {
      name: "Game Jam Society",
      university: "University of Southampton",
      club_description:
        "Hosts game jams and collaborative game development events.",
      university_description:
        "Leading UK university known for its support of game development initiatives.",
    },
    {
      name: "Strategic Gaming Club",
      university: "University of Illinois Urbana-Champaign",
      club_description: "Focuses on strategy games and game theory.",
      university_description:
        "Top university with a strong emphasis on strategic gaming and analysis.",
    },
    {
      name: "Gaming Network Club",
      university: "University of Sydney",
      club_description:
        "Connects gamers and organizes online and offline gaming events.",
      university_description:
        "Leading Australian university with a strong gaming network.",
    },
    {
      name: "Game Narrative Club",
      university: "University of Exeter",
      club_description:
        "Explores storytelling and narrative techniques in games.",
      university_description:
        "Top UK university with a focus on game narrative and storytelling.",
    },
    {
      name: "Competitive eSports Club",
      university: "University of California, Berkeley",
      club_description:
        "Organizes competitive eSports tournaments and leagues.",
      university_description:
        "Top university with a strong eSports and competitive gaming scene.",
    },
    {
      name: "Digital Game Design Club",
      university: "University of Bath",
      club_description:
        "Offers workshops on digital game design and development.",
      university_description:
        "Leading UK university with a focus on digital game design and innovation.",
    },
    {
      name: "Gaming Communities Club",
      university: "University of Warwick",
      club_description:
        "Explores and supports various gaming communities and groups.",
      university_description:
        "Top UK university known for its active gaming communities.",
    },
    {
      name: "Tabletop Gaming Club",
      university: "University of Leicester",
      club_description: "Focuses on tabletop gaming and board game strategy.",
      university_description:
        "Leading UK university with a strong tabletop gaming culture.",
    },
    {
      name: "Game Development Network",
      university: "University of Nottingham",
      club_description:
        "Supports game development projects and networking opportunities.",
      university_description:
        "Top UK university with a focus on game development and networking.",
    },
    {
      name: "Game Theory Club",
      university: "University of Oxford",
      club_description:
        "Analyzes game theory and its applications in various games.",
      university_description:
        "Prestigious university with a strong emphasis on game theory and research.",
    },
    {
      name: "Role-Playing Game Society",
      university: "University of Bristol",
      club_description:
        "Explores tabletop role-playing games and creative storytelling.",
      university_description:
        "Leading UK university with a vibrant role-playing game community.",
    },
    {
      name: "Game Art Club",
      university: "University of Arts London",
      club_description: "Focuses on art and design in video games.",
      university_description:
        "Top UK university known for its contributions to game art and design.",
    },
    {
      name: "Virtual Game Club",
      university: "University of Cambridge",
      club_description:
        "Explores virtual games and immersive gaming experiences.",
      university_description:
        "Prestigious university with a focus on virtual and immersive gaming.",
    },
    {
      name: "Multiplayer Gaming Club",
      university: "University of Edinburgh",
      club_description: "Organizes multiplayer gaming events and tournaments.",
      university_description:
        "Historic university with a strong emphasis on multiplayer gaming.",
    },
    {
      name: "Interactive Entertainment Club",
      university: "University of Queensland",
      club_description:
        "Focuses on interactive entertainment and gaming experiences.",
      university_description:
        "Leading Australian university known for its interactive media research.",
    },
    {
      name: "Game Innovation Society",
      university: "University of Western Australia",
      club_description:
        "Supports innovative game development projects and ideas.",
      university_description:
        "Top Australian university with a focus on game innovation and development.",
    },
    {
      name: "Online Gaming Club",
      university: "University of Tasmania",
      club_description: "Connects online gamers and organizes virtual events.",
      university_description:
        "Leading Australian university with a strong online gaming community.",
    },
    {
      name: "Game Mechanics Workshop",
      university: "University of Adelaide",
      club_description:
        "Offers workshops on game mechanics and design principles.",
      university_description:
        "Top Australian university with a focus on game mechanics and development.",
    },
    {
      name: "Fantasy Role-Playing Club",
      university: "University of Sydney",
      club_description: "Explores fantasy role-playing games and storytelling.",
      university_description:
        "Leading Australian university with a vibrant fantasy gaming community.",
    },
    {
      name: "Game Development Hub",
      university: "University of Melbourne",
      club_description:
        "Supports game development projects and collaborative efforts.",
      university_description:
        "Top Australian university known for its focus on game development.",
    },
    {
      name: "Interactive Media Club",
      university: "University of Technology Sydney",
      club_description: "Explores interactive media and gaming technologies.",
      university_description:
        "Leading Australian university with a focus on interactive media and gaming.",
    },
    {
      name: "Digital Games Society",
      university: "University of Newcastle",
      club_description: "Focuses on digital games and interactive experiences.",
      university_description:
        "Top Australian university with a strong emphasis on digital games and technology.",
    },
    {
      name: "Game Testing Club",
      university: "University of Adelaide",
      club_description:
        "Explores game testing techniques and quality assurance.",
      university_description:
        "Top Australian university known for its focus on game testing and development.",
    },
  ],
  investmentClubs: [
    {
      name: "Student Investment Fund",
      university: "University of Pennsylvania",
      club_description:
        "Manages a real portfolio and educates students on investment strategies.",
      university_description:
        "Top Ivy League university known for its finance and investment programs.",
    },
    {
      name: "Finance & Investment Society",
      university: "Harvard University",
      club_description:
        "Focuses on investment strategies, stock analysis, and finance-related events.",
      university_description:
        "World-renowned university with a strong finance and investment emphasis.",
    },
    {
      name: "Global Investment Club",
      university: "University of Cambridge",
      club_description:
        "Explores global investment opportunities and strategies.",
      university_description:
        "Prestigious university known for international business and finance programs.",
    },
    {
      name: "Investment Banking Society",
      university: "New York University",
      club_description:
        "Prepares students for careers in investment banking and finance.",
      university_description:
        "Top university located in the heart of the global financial capital.",
    },
    {
      name: "Private Equity Club",
      university: "London School of Economics",
      club_description:
        "Focuses on private equity investments and related financial education.",
      university_description:
        "Leading university in economics and finance with a strong investment focus.",
    },
    {
      name: "Impact Investment Group",
      university: "Stanford University",
      club_description:
        "Focuses on investments with social and environmental impacts.",
      university_description:
        "Top university known for innovation and impact investing.",
    },
    {
      name: "Alternative Investments Club",
      university: "Massachusetts Institute of Technology",
      club_description:
        "Explores hedge funds, real estate, and alternative asset classes.",
      university_description:
        "World-leading technology institution with strong finance research.",
    },
    {
      name: "Value Investing Club",
      university: "Columbia University",
      club_description: "Focuses on value investing principles and strategies.",
      university_description:
        "Top Ivy League university known for its finance and value investing programs.",
    },
    {
      name: "Venture Capital Club",
      university: "University of California, Berkeley",
      club_description:
        "Educates students on venture capital and startup investment.",
      university_description:
        "Top university with a strong focus on entrepreneurship and venture capital.",
    },
    {
      name: "Quantitative Finance Society",
      university: "Princeton University",
      club_description:
        "Focuses on quantitative investment strategies and modeling.",
      university_description:
        "Ivy League university known for its excellence in quantitative finance.",
    },
    {
      name: "Real Estate Investment Club",
      university: "University of Southern California",
      club_description:
        "Focuses on real estate investment and development strategies.",
      university_description:
        "Top U.S. university with a strong real estate program.",
    },
    {
      name: "Sustainable Investing Club",
      university: "Yale University",
      club_description:
        "Focuses on sustainability-focused investment strategies.",
      university_description:
        "Ivy League university known for its strong focus on sustainability and ethics.",
    },
    {
      name: "Tech Investing Society",
      university: "University of Oxford",
      club_description:
        "Explores investment opportunities in technology and innovation.",
      university_description:
        "Prestigious university with a strong focus on tech and innovation investments.",
    },
    {
      name: "Crypto Investment Club",
      university: "University of Toronto",
      club_description: "Focuses on cryptocurrency and blockchain investments.",
      university_description:
        "Top Canadian university with a strong focus on financial technology.",
    },
    {
      name: "Equity Research Club",
      university: "University of Chicago",
      club_description:
        "Analyzes and researches public equities for investment strategies.",
      university_description:
        "Leading university in finance with a focus on equity research.",
    },
    {
      name: "Global Markets Investment Club",
      university: "London Business School",
      club_description:
        "Focuses on global financial markets and investment opportunities.",
      university_description:
        "Top business school known for global finance and investment education.",
    },
    {
      name: "Stock Pitch Club",
      university: "Cornell University",
      club_description:
        "Hosts stock pitch competitions and teaches stock analysis.",
      university_description:
        "Top Ivy League university with a strong finance and investment focus.",
    },
    {
      name: "Hedge Fund Society",
      university: "University of Michigan",
      club_description:
        "Explores hedge fund strategies and career opportunities.",
      university_description:
        "Top public university with a strong finance and hedge fund focus.",
    },
    {
      name: "Student Venture Fund",
      university: "Duke University",
      club_description:
        "Focuses on venture capital and startup investment opportunities.",
      university_description:
        "Top U.S. university known for venture capital and entrepreneurship programs.",
    },
    {
      name: "Emerging Markets Club",
      university: "University of Texas at Austin",
      club_description:
        "Explores investment opportunities in emerging markets.",
      university_description:
        "Leading U.S. university with a focus on global finance and investment.",
    },
    {
      name: "Finance & Trading Society",
      university: "University of Warwick",
      club_description:
        "Focuses on trading strategies and financial market analysis.",
      university_description:
        "Top UK university with a strong finance and trading emphasis.",
    },
    {
      name: "Socially Responsible Investing Club",
      university: "University of Notre Dame",
      club_description:
        "Focuses on socially responsible and ethical investment strategies.",
      university_description:
        "Top U.S. university known for its focus on ethics and social responsibility.",
    },
    {
      name: "FinTech Investment Club",
      university: "Imperial College London",
      club_description:
        "Explores investments in financial technology and innovation.",
      university_description:
        "Top UK university with a focus on technology and innovation in finance.",
    },
    {
      name: "International Finance Club",
      university: "University of Edinburgh",
      club_description: "Explores global finance and investment opportunities.",
      university_description:
        "Top Scottish university known for its strong international finance focus.",
    },
    {
      name: "Investment Analysis Group",
      university: "University of Melbourne",
      club_description:
        "Focuses on portfolio analysis and stock market strategies.",
      university_description:
        "Leading Australian university with a strong investment analysis program.",
    },
    {
      name: "Derivatives Trading Club",
      university: "University of Sydney",
      club_description:
        "Explores derivatives trading strategies and risk management.",
      university_description:
        "Top Australian university known for its focus on finance and derivatives.",
    },
    {
      name: "Real Asset Investment Club",
      university: "University of British Columbia",
      club_description:
        "Focuses on real asset investment, including infrastructure and real estate.",
      university_description:
        "Top Canadian university with a strong real asset investment program.",
    },
    {
      name: "Growth Investing Society",
      university: "Carnegie Mellon University",
      club_description:
        "Focuses on growth investing strategies in emerging industries.",
      university_description:
        "Top U.S. university known for its strong focus on technology and growth sectors.",
    },
    {
      name: "Investment Research Group",
      university: "University of Queensland",
      club_description:
        "Conducts research and analysis on investment trends and markets.",
      university_description:
        "Leading Australian university known for its finance and investment research.",
    },
    {
      name: "Private Wealth Management Club",
      university: "University of Toronto",
      club_description: "Focuses on private wealth management strategies.",
      university_description:
        "Top Canadian university with a strong focus on finance and wealth management.",
    },
    {
      name: "Corporate Finance Club",
      university: "University of New South Wales",
      club_description:
        "Explores corporate finance and capital investment strategies.",
      university_description:
        "Leading Australian university with a strong corporate finance program.",
    },
    {
      name: "Blockchain Investment Group",
      university: "University of Cambridge",
      club_description:
        "Focuses on blockchain investments and financial technology.",
      university_description:
        "Prestigious university with a focus on blockchain and innovation in finance.",
    },
    {
      name: "Investment & Trading Society",
      university: "University of Leeds",
      club_description:
        "Focuses on trading strategies and investment analysis.",
      university_description:
        "Top UK university with a strong finance and trading focus.",
    },
    {
      name: "Student Portfolio Management Club",
      university: "McGill University",
      club_description:
        "Manages a student-run portfolio and teaches investment strategies.",
      university_description:
        "Top Canadian university with a strong emphasis on finance and investment.",
    },
    {
      name: "Global Finance Club",
      university: "University of Hong Kong",
      club_description:
        "Focuses on global finance and investment opportunities in Asia.",
      university_description:
        "Leading Asian university known for its focus on global finance.",
    },
    {
      name: "Investment Strategy Club",
      university: "University of Waterloo",
      club_description:
        "Teaches investment strategies and portfolio management.",
      university_description:
        "Top Canadian university with a focus on finance and technology.",
    },
    {
      name: "Risk Management Club",
      university: "University of Virginia",
      club_description: "Focuses on risk management and mitigation strategies.",
      university_description:
        "Top U.S. university with a strong focus on finance and risk management.",
    },
    {
      name: "Entrepreneurship & Investment Club",
      university: "University of Bath",
      club_description:
        "Explores investment opportunities in startups and entrepreneurship.",
      university_description:
        "Leading UK university known for its focus on entrepreneurship and venture capital.",
    },
    {
      name: "Tech Finance Club",
      university: "University of California, San Diego",
      club_description:
        "Focuses on finance and investment in the technology sector.",
      university_description:
        "Top U.S. university with a strong focus on technology and finance.",
    },
    {
      name: "Financial Markets Society",
      university: "University of Manchester",
      club_description: "Explores financial markets and trading strategies.",
      university_description:
        "Top UK university with a strong emphasis on finance and financial markets.",
    },
    {
      name: "Investment Leadership Club",
      university: "University of Sydney",
      club_description:
        "Focuses on leadership roles in finance and investment management.",
      university_description:
        "Top Australian university with a focus on finance and leadership.",
    },
    {
      name: "Venture Investment Group",
      university: "University of Queensland",
      club_description: "Focuses on venture capital and startup investments.",
      university_description:
        "Leading Australian university known for its focus on venture capital.",
    },
    {
      name: "Quantitative Investing Club",
      university: "University of Melbourne",
      club_description:
        "Focuses on quantitative investing strategies and modeling.",
      university_description:
        "Leading Australian university known for its strong quantitative finance program.",
    },
    {
      name: "Emerging Tech Investment Club",
      university: "University of California, Irvine",
      club_description:
        "Explores investment opportunities in emerging technologies.",
      university_description:
        "Top U.S. university with a focus on finance and emerging tech.",
    },
    {
      name: "Investment & Real Estate Club",
      university: "University of Toronto",
      club_description: "Focuses on real estate and investment strategies.",
      university_description:
        "Top Canadian university known for its focus on finance and real estate.",
    },
  ],
  languageClubs: [
    {
      name: "Spanish Language & Culture Club",
      university: "University of California, Los Angeles",
      club_description:
        "Promotes Spanish language learning and cultural exchange.",
      university_description:
        "Top public university known for its global diversity and academic excellence.",
    },
    {
      name: "French Language Society",
      university: "Harvard University",
      club_description:
        "Enhances French language skills and appreciation for French culture.",
      university_description:
        "World-renowned Ivy League university with a rich cultural environment.",
    },
    {
      name: "Mandarin Language Club",
      university: "University of Cambridge",
      club_description:
        "Focuses on learning Mandarin and understanding Chinese culture.",
      university_description:
        "Prestigious university with a strong global outlook and diverse student body.",
    },
    {
      name: "German Language & Film Club",
      university: "New York University",
      club_description:
        "Combines German language learning with film screenings and discussions.",
      university_description:
        "Top university with a vibrant cultural scene in the heart of New York City.",
    },
    {
      name: "Japanese Language & Culture Association",
      university: "University of Tokyo",
      club_description:
        "Provides opportunities to practice Japanese and learn about Japanese traditions.",
      university_description:
        "Top university in Japan with a strong focus on cultural and academic exchange.",
    },
    {
      name: "Russian Language & Literature Club",
      university: "Yale University",
      club_description:
        "Explores Russian language, literature, and culture through events and activities.",
      university_description:
        "Ivy League university known for its strong language and literature programs.",
    },
    {
      name: "Arabic Language Association",
      university: "University of Michigan",
      club_description:
        "Focuses on Arabic language skills and Middle Eastern cultural understanding.",
      university_description:
        "Top public university with a diverse student body and cultural programs.",
    },
    {
      name: "Korean Language & Culture Club",
      university: "Seoul National University",
      club_description:
        "Promotes Korean language proficiency and cultural events.",
      university_description:
        "Leading university in South Korea with a focus on global outreach and education.",
    },
    {
      name: "Portuguese Language Club",
      university: "University of Lisbon",
      club_description: "Teaches Portuguese and explores Lusophone cultures.",
      university_description:
        "Top Portuguese university with a strong focus on language and cultural studies.",
    },
    {
      name: "Italian Language & Conversation Group",
      university: "University of Oxford",
      club_description:
        "Encourages conversational Italian and cultural appreciation.",
      university_description:
        "Prestigious UK university known for its rich cultural and academic environment.",
    },
    {
      name: "Hindi Language & Culture Club",
      university: "Jawaharlal Nehru University",
      club_description:
        "Focuses on Hindi language practice and Indian cultural heritage.",
      university_description:
        "Top Indian university with a strong focus on language studies and cultural programs.",
    },
    {
      name: "Latin Language Society",
      university: "University of Edinburgh",
      club_description:
        "Explores Latin language and Roman culture through discussions and readings.",
      university_description:
        "Top UK university known for its classics and humanities programs.",
    },
    {
      name: "Swahili Language Club",
      university: "University of Nairobi",
      club_description:
        "Promotes Swahili language learning and East African culture.",
      university_description:
        "Top Kenyan university with a focus on regional language and cultural education.",
    },
    {
      name: "Hebrew Language & Cultural Club",
      university: "Hebrew University of Jerusalem",
      club_description:
        "Provides opportunities for Hebrew language practice and cultural events.",
      university_description:
        "Leading university in Israel with a strong focus on language and cultural studies.",
    },
    {
      name: "American Sign Language Club",
      university: "University of California, Berkeley",
      club_description:
        "Promotes ASL proficiency and awareness of Deaf culture.",
      university_description:
        "Top U.S. public university known for its social justice and inclusivity efforts.",
    },
    {
      name: "Turkish Language & Culture Group",
      university: "Bogazici University",
      club_description:
        "Focuses on Turkish language practice and cultural exchange.",
      university_description:
        "Top university in Turkey known for its strong international connections and language programs.",
    },
    {
      name: "Persian Language Club",
      university: "University of Toronto",
      club_description:
        "Explores Persian language and culture through events and discussions.",
      university_description:
        "Top Canadian university with a diverse student body and global focus.",
    },
    {
      name: "Greek Language Society",
      university: "University of Athens",
      club_description:
        "Promotes learning Modern Greek and engaging with Greek culture.",
      university_description:
        "Leading university in Greece with a focus on language and classical studies.",
    },
    {
      name: "Dutch Language & Culture Club",
      university: "Leiden University",
      club_description:
        "Focuses on Dutch language learning and exploring Dutch culture.",
      university_description:
        "Top Dutch university with a rich history and global academic reputation.",
    },
    {
      name: "Polish Language & Culture Association",
      university: "University of Warsaw",
      club_description:
        "Promotes Polish language practice and appreciation for Polish culture.",
      university_description:
        "Top Polish university with a strong focus on cultural and language studies.",
    },
    {
      name: "Thai Language Club",
      university: "Chulalongkorn University",
      club_description:
        "Encourages learning Thai and engaging with Thai cultural traditions.",
      university_description:
        "Top university in Thailand with a focus on global cultural exchange.",
    },
    {
      name: "Vietnamese Language & Culture Society",
      university: "Vietnam National University",
      club_description:
        "Promotes Vietnamese language learning and cultural appreciation.",
      university_description:
        "Leading Vietnamese university known for its focus on regional language and culture.",
    },
    {
      name: "Urdu Language Society",
      university: "Lahore University of Management Sciences",
      club_description:
        "Promotes learning Urdu and understanding Pakistani culture.",
      university_description:
        "Top Pakistani university known for its focus on language and cultural heritage.",
    },
    {
      name: "Cantonese Language Club",
      university: "University of Hong Kong",
      club_description:
        "Focuses on Cantonese language practice and cultural events.",
      university_description:
        "Top university in Hong Kong with a focus on language and cultural education.",
    },
    {
      name: "Swedish Language & Culture Group",
      university: "Lund University",
      club_description:
        "Promotes Swedish language learning and cultural exploration.",
      university_description:
        "Top Swedish university known for its focus on language and cultural exchange.",
    },
    {
      name: "Tamil Language Society",
      university: "University of Madras",
      club_description:
        "Focuses on Tamil language practice and South Indian cultural events.",
      university_description:
        "Leading university in India with a focus on Tamil language and heritage.",
    },
    {
      name: "Norwegian Language Club",
      university: "University of Oslo",
      club_description:
        "Promotes learning Norwegian and exploring Norwegian culture.",
      university_description:
        "Top Norwegian university known for its focus on language and cultural studies.",
    },
    {
      name: "Finnish Language Society",
      university: "University of Helsinki",
      club_description:
        "Focuses on learning Finnish and engaging with Finnish traditions.",
      university_description:
        "Leading Finnish university known for its strong language and cultural programs.",
    },
    {
      name: "Romanian Language & Culture Club",
      university: "University of Bucharest",
      club_description:
        "Promotes Romanian language practice and appreciation for Romanian culture.",
      university_description:
        "Top Romanian university with a strong focus on language and cultural studies.",
    },
    {
      name: "Hungarian Language Society",
      university: "Eötvös Loránd University",
      club_description:
        "Encourages learning Hungarian and engaging with Hungarian culture.",
      university_description:
        "Top Hungarian university known for its strong language and cultural focus.",
    },
    {
      name: "Ukrainian Language & Culture Club",
      university: "Kyiv National University",
      club_description:
        "Focuses on Ukrainian language learning and cultural appreciation.",
      university_description:
        "Leading Ukrainian university known for its focus on language and regional culture.",
    },
    {
      name: "Indonesian Language & Cultural Association",
      university: "University of Indonesia",
      club_description:
        "Promotes Indonesian language skills and cultural exchange.",
      university_description:
        "Top university in Indonesia with a strong focus on regional language and culture.",
    },
    {
      name: "Czech Language Society",
      university: "Charles University",
      club_description:
        "Focuses on Czech language practice and cultural exploration.",
      university_description:
        "Top Czech university with a rich history and focus on language studies.",
    },
    {
      name: "Zulu Language & Culture Club",
      university: "University of KwaZulu-Natal",
      club_description:
        "Promotes Zulu language learning and appreciation for Zulu culture.",
      university_description:
        "Leading South African university with a focus on regional language and culture.",
    },
    {
      name: "Filipino Language Society",
      university: "University of the Philippines",
      club_description:
        "Focuses on promoting Filipino language skills and cultural awareness.",
      university_description:
        "Top university in the Philippines with a focus on national language and heritage.",
    },
    {
      name: "Esperanto Language Club",
      university: "University of Zurich",
      club_description:
        "Encourages learning Esperanto and discussing its global potential.",
      university_description:
        "Top Swiss university known for its global outlook and linguistic diversity.",
    },
    {
      name: "Welsh Language & Culture Society",
      university: "Cardiff University",
      club_description:
        "Promotes Welsh language learning and cultural appreciation.",
      university_description:
        "Top university in Wales with a strong focus on regional language and culture.",
    },
    {
      name: "Farsi Language Society",
      university: "Tehran University",
      club_description:
        "Focuses on Farsi language skills and Persian cultural appreciation.",
      university_description:
        "Top university in Iran with a strong focus on language and cultural education.",
    },
    {
      name: "Icelandic Language Society",
      university: "University of Iceland",
      club_description:
        "Promotes Icelandic language practice and cultural appreciation.",
      university_description:
        "Top Icelandic university with a focus on language and regional heritage.",
    },
    {
      name: "Quechua Language Society",
      university: "Pontifical Catholic University of Peru",
      club_description:
        "Focuses on promoting Quechua language learning and Andean culture.",
      university_description:
        "Top university in Peru with a focus on indigenous languages and cultures.",
    },
    {
      name: "Haitian Creole Language Society",
      university: "University of Haiti",
      club_description:
        "Promotes learning Haitian Creole and understanding local traditions.",
      university_description:
        "Top Haitian university known for its focus on language and cultural education.",
    },
    {
      name: "Gaelic Language Club",
      university: "University of Glasgow",
      club_description:
        "Focuses on Gaelic language practice and Scottish cultural events.",
      university_description:
        "Leading Scottish university with a focus on language and regional heritage.",
    },
    {
      name: "Tibetan Language & Culture Society",
      university: "Tibet University",
      club_description:
        "Promotes Tibetan language learning and cultural understanding.",
      university_description:
        "Top university in Tibet with a focus on regional language and traditions.",
    },
    {
      name: "Maori Language Society",
      university: "University of Auckland",
      club_description:
        "Encourages learning Maori and engaging with New Zealand's indigenous culture.",
      university_description:
        "Top New Zealand university known for its focus on Maori language and heritage.",
    },
    {
      name: "Sinhala Language & Culture Society",
      university: "University of Colombo",
      club_description:
        "Focuses on learning Sinhala and promoting Sri Lankan cultural heritage.",
      university_description:
        "Top Sri Lankan university with a strong focus on language and cultural programs.",
    },
  ],
  mediaAndJournalismClubs: [
    {
      name: "The Harvard Crimson",
      university: "Harvard University",
      club_description:
        "Harvard's student-run newspaper reporting campus and national news.",
      university_description:
        "Prestigious Ivy League university known for its academic excellence and research.",
    },
    {
      name: "NYU Journalism Club",
      university: "New York University",
      club_description:
        "Focuses on multimedia journalism and news writing skills.",
      university_description:
        "Top university located in the heart of New York, known for its media programs.",
    },
    {
      name: "Daily Bruin",
      university: "University of California, Los Angeles",
      club_description:
        "UCLA's independent student-run newspaper covering campus news.",
      university_description:
        "Top public university known for its strong media and communications programs.",
    },
    {
      name: "The Stanford Daily",
      university: "Stanford University",
      club_description:
        "Student-run newspaper covering campus events and global issues.",
      university_description:
        "World-renowned university known for innovation and research.",
    },
    {
      name: "The Cambridge Review",
      university: "University of Cambridge",
      club_description:
        "Focuses on investigative journalism and critical reporting.",
      university_description:
        "Prestigious UK university with a global reputation for academic excellence.",
    },
    {
      name: "Oxford Media Society",
      university: "University of Oxford",
      club_description:
        "Encourages student discussions on media, journalism, and ethics.",
      university_description:
        "Historic university with a strong humanities and media program.",
    },
    {
      name: "The Michigan Daily",
      university: "University of Michigan",
      club_description:
        "Student-run newspaper reporting on campus and local news.",
      university_description:
        "Top public university with a strong reputation in journalism and media studies.",
    },
    {
      name: "The McGill Tribune",
      university: "McGill University",
      club_description:
        "Independent student newspaper covering campus news and opinions.",
      university_description:
        "Top Canadian university known for its research and diverse student body.",
    },
    {
      name: "USC Annenberg Media",
      university: "University of Southern California",
      club_description:
        "Student-run multimedia platform focusing on news, sports, and entertainment.",
      university_description:
        "Private university renowned for its media, communication, and journalism programs.",
    },
    {
      name: "The Tartan",
      university: "Carnegie Mellon University",
      club_description:
        "Student-run newspaper with a focus on campus tech and innovation.",
      university_description:
        "Leading university in tech and innovation, with a strong media department.",
    },
    {
      name: "Varsity Publications",
      university: "University of Toronto",
      club_description:
        "Independent student newspaper and magazine covering university life.",
      university_description:
        "Top Canadian university known for its research and diverse academic offerings.",
    },
    {
      name: "Columbia Journalism Association",
      university: "Columbia University",
      club_description:
        "Prepares students for careers in journalism through workshops and projects.",
      university_description:
        "Ivy League university with one of the top journalism schools in the world.",
    },
    {
      name: "The Daily Northwestern",
      university: "Northwestern University",
      club_description:
        "Student-run newspaper that covers campus and Chicago news.",
      university_description:
        "Top private university known for its media and journalism programs.",
    },
    {
      name: "The Hoya",
      university: "Georgetown University",
      club_description:
        "Independent student newspaper with a focus on campus and national issues.",
      university_description:
        "Top university in Washington, D.C., known for its political science and media programs.",
    },
    {
      name: "The Cornell Daily Sun",
      university: "Cornell University",
      club_description:
        "Student-run newspaper reporting on campus events and community news.",
      university_description:
        "Ivy League university with a diverse range of academic programs.",
    },
    {
      name: "The Cavalier Daily",
      university: "University of Virginia",
      club_description:
        "Independent newspaper covering UVA campus news and opinions.",
      university_description:
        "Top public university with a strong focus on liberal arts and media studies.",
    },
    {
      name: "The Berkeley Beacon",
      university: "Emerson College",
      club_description: "Focuses on journalism and multimedia storytelling.",
      university_description:
        "Private college specializing in communication, media, and the arts.",
    },
    {
      name: "The Brown Daily Herald",
      university: "Brown University",
      club_description:
        "Student-run newspaper covering campus, national, and global issues.",
      university_description:
        "Ivy League university known for its open curriculum and vibrant student life.",
    },
    {
      name: "The Lantern",
      university: "Ohio State University",
      club_description:
        "Independent student newspaper covering sports, news, and campus events.",
      university_description:
        "Top public university known for its large student body and diverse programs.",
    },
    {
      name: "The Daily Tar Heel",
      university: "University of North Carolina at Chapel Hill",
      club_description:
        "Student-run newspaper reporting on campus and local news.",
      university_description:
        "Top public university known for its strong media and journalism programs.",
    },
    {
      name: "The Varsity News",
      university: "University of Sydney",
      club_description:
        "Student-run publication focusing on Australian campus and cultural news.",
      university_description:
        "Leading Australian university with a focus on research and global impact.",
    },
    {
      name: "King's News & Media Club",
      university: "King's College London",
      club_description:
        "Encourages student participation in media and journalism projects.",
      university_description:
        "Top UK university with a strong focus on humanities and media studies.",
    },
    {
      name: "The Beaver",
      university: "London School of Economics",
      club_description:
        "Student-run newspaper reporting on politics, economics, and campus life.",
      university_description:
        "Prestigious UK university known for economics and social sciences.",
    },
    {
      name: "The Trinity Times",
      university: "University of Dublin, Trinity College",
      club_description:
        "Focuses on campus news, student opinions, and Irish cultural events.",
      university_description:
        "Top Irish university known for its academic excellence and student life.",
    },
    {
      name: "The UBC Thunderbird",
      university: "University of British Columbia",
      club_description:
        "Student newspaper reporting on campus issues and events.",
      university_description:
        "Leading Canadian university known for research and diverse programs.",
    },
    {
      name: "The Chi Tribune",
      university: "University of Chicago",
      club_description:
        "Focuses on investigative journalism and campus reporting.",
      university_description:
        "Private university known for its academic rigor and strong media programs.",
    },
    {
      name: "MediaLab",
      university: "Massachusetts Institute of Technology",
      club_description:
        "Focuses on media innovation, technology, and digital journalism.",
      university_description:
        "Top university for STEM with a strong focus on media innovation.",
    },
    {
      name: "ANU Media Society",
      university: "Australian National University",
      club_description:
        "Provides students with skills in journalism and multimedia production.",
      university_description:
        "Leading university in Australia known for research and media studies.",
    },
    {
      name: "University Times",
      university: "University of Cape Town",
      club_description: "Focuses on campus and local news reporting.",
      university_description:
        "Top African university known for its strong focus on social sciences and media.",
    },
    {
      name: "Journalism Collective",
      university: "University of Melbourne",
      club_description:
        "Engages students in journalism and media production projects.",
      university_description:
        "Top Australian university known for its diverse academic programs.",
    },
    {
      name: "Tokyo Journalism Network",
      university: "University of Tokyo",
      club_description:
        "Focuses on Japanese media and international journalism.",
      university_description:
        "Leading university in Japan with a strong focus on global academic outreach.",
    },
    {
      name: "The Varsity",
      university: "University of Toronto",
      club_description:
        "Student-run newspaper that reports on university and local news.",
      university_description:
        "Top Canadian university known for its research and global student body.",
    },
    {
      name: "The Argonaut",
      university: "University of Idaho",
      club_description: "Covers university news, opinions, and local events.",
      university_description:
        "Public university in Idaho with a focus on student media and community engagement.",
    },
    {
      name: "The Rice Thresher",
      university: "Rice University",
      club_description:
        "Focuses on campus issues, sports, and student life reporting.",
      university_description:
        "Private university in Texas with a strong focus on media and journalism.",
    },
    {
      name: "The Minnesota Daily",
      university: "University of Minnesota",
      club_description:
        "Student-run newspaper reporting on university and local news.",
      university_description:
        "Public research university with strong media and journalism programs.",
    },
    {
      name: "The Georgetown Voice",
      university: "Georgetown University",
      club_description:
        "Covers campus politics, student opinions, and national issues.",
      university_description:
        "Top university in Washington, D.C., with a strong focus on media and politics.",
    },
    {
      name: "Texas Student Media",
      university: "University of Texas at Austin",
      club_description:
        "Provides multimedia journalism experiences for students.",
      university_description:
        "Top public university in Texas with a renowned journalism program.",
    },
    {
      name: "Daily Princetonian",
      university: "Princeton University",
      club_description:
        "Student-run newspaper covering campus and global news.",
      university_description:
        "Ivy League university with a focus on research and liberal arts.",
    },
    {
      name: "The Vanderbilt Hustler",
      university: "Vanderbilt University",
      club_description:
        "Student-run newspaper covering news, sports, and campus events.",
      university_description:
        "Private university in Tennessee known for its diverse student body and programs.",
    },
    {
      name: "The Tech",
      university: "Massachusetts Institute of Technology",
      club_description:
        "Focuses on tech news, campus issues, and student opinions.",
      university_description:
        "Leading university for STEM with a focus on innovation and media.",
    },
    {
      name: "The Stony Brook Press",
      university: "Stony Brook University",
      club_description:
        "Covers campus issues, student opinions, and local news.",
      university_description:
        "Top public university in New York known for its media and communications programs.",
    },
    {
      name: "UCLA Radio",
      university: "University of California, Los Angeles",
      club_description:
        "Student-run radio station covering campus events and music.",
      university_description:
        "Top public university with a renowned media and entertainment program.",
    },
    {
      name: "The Daily Texan",
      university: "University of Texas at Austin",
      club_description:
        "Student newspaper reporting on campus, local, and national news.",
      university_description:
        "Top public university with a strong media and communications department.",
    },
    {
      name: "NYU Radio",
      university: "New York University",
      club_description:
        "Student-run radio covering news, music, and student life.",
      university_description:
        "Top university in New York known for its media and communications programs.",
    },
    {
      name: "The Observer",
      university: "University of Notre Dame",
      club_description:
        "Student-run newspaper reporting on campus issues and national news.",
      university_description:
        "Private Catholic university known for its liberal arts and media programs.",
    },
    {
      name: "The Emory Wheel",
      university: "Emory University",
      club_description: "Covers campus news, opinions, and local events.",
      university_description:
        "Private university in Georgia known for its media and humanities programs.",
    },
    {
      name: "Media Matters Club",
      university: "University of Glasgow",
      club_description: "Engages students in media production and journalism.",
      university_description:
        "Leading Scottish university with a focus on liberal arts and media.",
    },
  ],
  preLawClubs: [
    {
      name: "Harvard Pre-Law Society",
      university: "Harvard University",
      club_description:
        "Prepares students for law school with LSAT prep and legal discussions.",
      university_description:
        "Ivy League university known for its prestigious law program and academic excellence.",
    },
    {
      name: "Yale Undergraduate Legal Aid Association",
      university: "Yale University",
      club_description:
        "Provides legal aid services and prepares students for law careers.",
      university_description:
        "Ivy League university recognized for its world-renowned law school.",
    },
    {
      name: "Berkeley Pre-Law Society",
      university: "University of California, Berkeley",
      club_description:
        "Helps students explore legal careers and navigate law school admissions.",
      university_description:
        "Top public university known for its commitment to social justice and law.",
    },
    {
      name: "NYU Pre-Law Society",
      university: "New York University",
      club_description:
        "Offers law school resources, networking, and career guidance.",
      university_description:
        "Private university located in New York, known for strong law and legal studies programs.",
    },
    {
      name: "Stanford Pre-Law Society",
      university: "Stanford University",
      club_description:
        "Supports aspiring lawyers through workshops, panels, and networking events.",
      university_description:
        "Leading research university with a focus on innovation and law.",
    },
    {
      name: "UCLA Pre-Law Society",
      university: "University of California, Los Angeles",
      club_description:
        "Prepares students for law school and legal careers with resources and events.",
      university_description:
        "Top public university in California with a strong reputation in law and legal studies.",
    },
    {
      name: "Georgetown Pre-Law Society",
      university: "Georgetown University",
      club_description:
        "Offers law school prep and connections with law professionals.",
      university_description:
        "Top university in Washington, D.C., known for its law program and political ties.",
    },
    {
      name: "Columbia Pre-Law Society",
      university: "Columbia University",
      club_description:
        "Helps students prepare for law school with resources and mentorship.",
      university_description:
        "Ivy League university in New York known for its prestigious law school.",
    },
    {
      name: "Cornell Pre-Law Society",
      university: "Cornell University",
      club_description:
        "Provides law school application guidance and legal career insights.",
      university_description:
        "Ivy League university with a focus on interdisciplinary studies, including law.",
    },
    {
      name: "USC Pre-Law Society",
      university: "University of Southern California",
      club_description:
        "Prepares students for the legal field through law panels and LSAT prep.",
      university_description:
        "Private university in Los Angeles known for its strong legal studies programs.",
    },
    {
      name: "University of Michigan Pre-Law Society",
      university: "University of Michigan",
      club_description:
        "Supports aspiring law students with resources, mentorship, and networking.",
      university_description:
        "Top public university known for its prestigious law school and legal studies.",
    },
    {
      name: "Northwestern Pre-Law Society",
      university: "Northwestern University",
      club_description:
        "Connects students with law school resources and networking opportunities.",
      university_description:
        "Private university known for its top-tier law school and legal education.",
    },
    {
      name: "Duke Pre-Law Society",
      university: "Duke University",
      club_description:
        "Offers guidance and networking opportunities for aspiring law students.",
      university_description:
        "Private university known for its law school and interdisciplinary approach to law.",
    },
    {
      name: "Penn State Pre-Law Society",
      university: "Pennsylvania State University",
      club_description:
        "Prepares students for law school with LSAT prep and legal seminars.",
      university_description:
        "Top public university known for its large student body and diverse academic offerings.",
    },
    {
      name: "Princeton Pre-Law Society",
      university: "Princeton University",
      club_description:
        "Provides law school application support and legal career insights.",
      university_description:
        "Ivy League university with a focus on academic excellence and interdisciplinary studies.",
    },
    {
      name: "University of Texas Pre-Law Society",
      university: "University of Texas at Austin",
      club_description:
        "Helps students navigate the law school admissions process with workshops.",
      university_description:
        "Top public university in Texas known for its law program and large student body.",
    },
    {
      name: "Boston University Pre-Law Society",
      university: "Boston University",
      club_description:
        "Offers resources for LSAT prep and law school admissions.",
      university_description:
        "Private university in Boston with a strong law and legal studies program.",
    },
    {
      name: "Emory Pre-Law Society",
      university: "Emory University",
      club_description:
        "Connects students with law professionals and prepares for law school.",
      university_description:
        "Private university known for its legal studies and pre-professional programs.",
    },
    {
      name: "University of Chicago Pre-Law Society",
      university: "University of Chicago",
      club_description:
        "Supports students pursuing law school with networking and mentorship.",
      university_description:
        "Private university known for its prestigious law program and academic rigor.",
    },
    {
      name: "Vanderbilt Pre-Law Society",
      university: "Vanderbilt University",
      club_description:
        "Offers law school application resources and career panels.",
      university_description:
        "Private university in Tennessee known for its strong law school and pre-law programs.",
    },
    {
      name: "UC Davis Pre-Law Society",
      university: "University of California, Davis",
      club_description:
        "Provides law school application resources and legal career workshops.",
      university_description:
        "Public university in California known for its law school and diverse programs.",
    },
    {
      name: "University of Florida Pre-Law Society",
      university: "University of Florida",
      club_description:
        "Prepares students for law school with LSAT prep and legal discussions.",
      university_description:
        "Top public university in Florida known for its law program and large student body.",
    },
    {
      name: "Ohio State Pre-Law Society",
      university: "Ohio State University",
      club_description:
        "Supports aspiring law students with networking and application workshops.",
      university_description:
        "Top public university in Ohio known for its large campus and strong law program.",
    },
    {
      name: "Notre Dame Pre-Law Society",
      university: "University of Notre Dame",
      club_description:
        "Provides guidance and networking opportunities for aspiring lawyers.",
      university_description:
        "Private Catholic university known for its law school and pre-law programs.",
    },
    {
      name: "Tulane Pre-Law Society",
      university: "Tulane University",
      club_description:
        "Offers law school application workshops and legal career guidance.",
      university_description:
        "Private university in Louisiana known for its legal studies and pre-law program.",
    },
    {
      name: "Wake Forest Pre-Law Society",
      university: "Wake Forest University",
      club_description:
        "Supports students pursuing law school with LSAT prep and mentorship.",
      university_description:
        "Private university in North Carolina with a strong focus on pre-law education.",
    },
    {
      name: "University of Arizona Pre-Law Society",
      university: "University of Arizona",
      club_description:
        "Prepares students for law school with application workshops and resources.",
      university_description:
        "Public university in Arizona known for its law program and student community.",
    },
    {
      name: "University of Washington Pre-Law Society",
      university: "University of Washington",
      club_description: "Offers LSAT prep and law school admission resources.",
      university_description:
        "Top public university in Washington known for its research and pre-law program.",
    },
    {
      name: "University of Virginia Pre-Law Society",
      university: "University of Virginia",
      club_description:
        "Supports aspiring law students with resources and networking.",
      university_description:
        "Top public university known for its prestigious law school and legal studies.",
    },
    {
      name: "SMU Pre-Law Society",
      university: "Southern Methodist University",
      club_description:
        "Prepares students for law school with LSAT prep and legal seminars.",
      university_description:
        "Private university in Texas known for its law program and strong pre-law support.",
    },
    {
      name: "George Washington University Pre-Law Society",
      university: "George Washington University",
      club_description:
        "Offers law school prep resources and legal career workshops.",
      university_description:
        "Private university in Washington, D.C., with a strong legal studies program.",
    },
    {
      name: "Fordham Pre-Law Society",
      university: "Fordham University",
      club_description:
        "Supports aspiring lawyers with networking and law school guidance.",
      university_description:
        "Private university in New York known for its law school and legal programs.",
    },
    {
      name: "Indiana University Pre-Law Society",
      university: "Indiana University Bloomington",
      club_description:
        "Provides law school prep resources and legal career workshops.",
      university_description:
        "Public university in Indiana known for its law program and student life.",
    },
    {
      name: "University of Miami Pre-Law Society",
      university: "University of Miami",
      club_description:
        "Prepares students for law school with LSAT prep and legal seminars.",
      university_description:
        "Private university in Florida known for its pre-law program and diverse student body.",
    },
    {
      name: "University of Maryland Pre-Law Society",
      university: "University of Maryland, College Park",
      club_description:
        "Supports aspiring law students with law school resources and networking.",
      university_description:
        "Public university in Maryland with a strong pre-law program and student community.",
    },
    {
      name: "University of Colorado Pre-Law Society",
      university: "University of Colorado Boulder",
      club_description:
        "Prepares students for law school with LSAT prep and legal resources.",
      university_description:
        "Public university in Colorado known for its law program and pre-law resources.",
    },
    {
      name: "UC Santa Barbara Pre-Law Society",
      university: "University of California, Santa Barbara",
      club_description:
        "Supports law school preparation through workshops and LSAT resources.",
      university_description:
        "Public university in California with a strong focus on legal studies and pre-law.",
    },
    {
      name: "University of Kentucky Pre-Law Society",
      university: "University of Kentucky",
      club_description:
        "Offers guidance on law school applications and LSAT prep.",
      university_description:
        "Public university in Kentucky known for its pre-law program and student support.",
    },
    {
      name: "University of Alabama Pre-Law Society",
      university: "University of Alabama",
      club_description:
        "Prepares students for law school with legal career workshops and LSAT prep.",
      university_description:
        "Public university in Alabama known for its law program and large student body.",
    },
    {
      name: "University of Georgia Pre-Law Society",
      university: "University of Georgia",
      club_description:
        "Supports aspiring lawyers with resources and law school preparation.",
      university_description:
        "Public university in Georgia known for its law program and pre-law resources.",
    },
    {
      name: "University of Illinois Pre-Law Society",
      university: "University of Illinois Urbana-Champaign",
      club_description:
        "Offers law school prep resources and networking opportunities.",
      university_description:
        "Top public university in Illinois known for its pre-law and legal programs.",
    },
    {
      name: "University of Pittsburgh Pre-Law Society",
      university: "University of Pittsburgh",
      club_description:
        "Prepares students for law school with LSAT resources and workshops.",
      university_description:
        "Public university in Pennsylvania known for its strong law school and pre-law program.",
    },
    {
      name: "UC Irvine Pre-Law Society",
      university: "University of California, Irvine",
      club_description:
        "Supports students pursuing law school with application guidance and LSAT prep.",
      university_description:
        "Public university in California known for its pre-law program and academic focus.",
    },
    {
      name: "University of Kansas Pre-Law Society",
      university: "University of Kansas",
      club_description:
        "Helps students prepare for law school with workshops and networking events.",
      university_description:
        "Public university in Kansas known for its strong law program and student resources.",
    },
    {
      name: "Temple University Pre-Law Society",
      university: "Temple University",
      club_description:
        "Provides guidance on law school applications and LSAT resources.",
      university_description:
        "Public university in Philadelphia with a strong pre-law program and legal studies.",
    },
    {
      name: "Rutgers Pre-Law Society",
      university: "Rutgers University",
      club_description:
        "Prepares students for law school with LSAT resources and workshops.",
      university_description:
        "Top public university in New Jersey known for its law program and large student body.",
    },
  ],
  preMedicalClubs: [
    {
      name: "Harvard Premedical Society",
      university: "Harvard University",
      club_description:
        "Provides support for aspiring medical students with resources and mentorship.",
      university_description:
        "Ivy League university with a strong focus on pre-med education and medical research.",
    },
    {
      name: "Yale Premedical Society",
      university: "Yale University",
      club_description:
        "Supports pre-med students with MCAT prep, shadowing opportunities, and networking.",
      university_description:
        "Ivy League university known for its top-tier medical program.",
    },
    {
      name: "Berkeley Premedical Society",
      university: "University of California, Berkeley",
      club_description:
        "Helps students prepare for medical school through workshops and clinical experiences.",
      university_description:
        "Public university with a reputation for excellence in science and medical fields.",
    },
    {
      name: "NYU Premedical Society",
      university: "New York University",
      club_description:
        "Offers pre-med students guidance, mentorship, and networking opportunities.",
      university_description:
        "Private university known for its strong medical school and pre-med programs.",
    },
    {
      name: "Stanford Premedical Society",
      university: "Stanford University",
      club_description:
        "Connects pre-med students with resources like MCAT prep and clinical experience.",
      university_description:
        "Prestigious university with a focus on innovation in medical research and education.",
    },
    {
      name: "UCLA Premedical Society",
      university: "University of California, Los Angeles",
      club_description:
        "Offers students MCAT prep and exposure to clinical experiences.",
      university_description:
        "Top public university in California known for its outstanding medical program.",
    },
    {
      name: "Georgetown Premedical Society",
      university: "Georgetown University",
      club_description:
        "Provides resources for medical school applications and healthcare-related volunteering.",
      university_description:
        "Private university with a strong focus on pre-med education and healthcare policy.",
    },
    {
      name: "Columbia Premedical Society",
      university: "Columbia University",
      club_description:
        "Helps students prepare for medical school with resources, mentorship, and networking.",
      university_description:
        "Ivy League university in New York known for its prestigious medical program.",
    },
    {
      name: "Cornell Premedical Society",
      university: "Cornell University",
      club_description:
        "Offers MCAT prep, healthcare career panels, and mentorship opportunities.",
      university_description:
        "Ivy League university with a strong focus on interdisciplinary studies, including medicine.",
    },
    {
      name: "USC Premedical Society",
      university: "University of Southern California",
      club_description:
        "Supports pre-med students with MCAT prep, clinical volunteering, and research.",
      university_description:
        "Private university in Los Angeles known for its leading medical and healthcare programs.",
    },
    {
      name: "University of Michigan Premedical Society",
      university: "University of Michigan",
      club_description:
        "Offers resources for pre-med students, including volunteering and research opportunities.",
      university_description:
        "Top public university with a renowned medical school and strong pre-med support.",
    },
    {
      name: "Northwestern Premedical Society",
      university: "Northwestern University",
      club_description:
        "Supports aspiring medical students with MCAT prep and clinical shadowing opportunities.",
      university_description:
        "Private university known for its excellent pre-med and medical programs.",
    },
    {
      name: "Duke Premedical Society",
      university: "Duke University",
      club_description:
        "Connects pre-med students with shadowing, research, and MCAT preparation.",
      university_description:
        "Private university known for its leading medical school and strong focus on healthcare.",
    },
    {
      name: "Penn State Premedical Society",
      university: "Pennsylvania State University",
      club_description:
        "Prepares students for medical school with resources, volunteer opportunities, and MCAT prep.",
      university_description:
        "Top public university known for its large student body and strong science programs.",
    },
    {
      name: "Princeton Premedical Society",
      university: "Princeton University",
      club_description:
        "Provides guidance for medical school applications and connects students with clinical opportunities.",
      university_description:
        "Ivy League university known for its academic excellence and interdisciplinary studies, including pre-med.",
    },
    {
      name: "University of Texas Premedical Society",
      university: "University of Texas at Austin",
      club_description:
        "Supports students in their journey to medical school with mentorship and volunteering.",
      university_description:
        "Top public university in Texas known for its pre-med and healthcare programs.",
    },
    {
      name: "Boston University Premedical Society",
      university: "Boston University",
      club_description:
        "Offers students resources for MCAT prep, clinical experience, and medical school applications.",
      university_description:
        "Private university known for its robust pre-med and medical programs.",
    },
    {
      name: "Emory Premedical Society",
      university: "Emory University",
      club_description:
        "Connects pre-med students with research, clinical experiences, and application workshops.",
      university_description:
        "Private university known for its healthcare and medical research programs.",
    },
    {
      name: "University of Chicago Premedical Society",
      university: "University of Chicago",
      club_description:
        "Offers students resources for medical school prep, clinical shadowing, and networking.",
      university_description:
        "Private university with a strong focus on research and pre-med education.",
    },
    {
      name: "Vanderbilt Premedical Society",
      university: "Vanderbilt University",
      club_description:
        "Provides guidance on MCAT prep, medical school applications, and clinical volunteering.",
      university_description:
        "Private university known for its medical research and pre-med support programs.",
    },
    {
      name: "UC Davis Premedical Society",
      university: "University of California, Davis",
      club_description:
        "Prepares students for medical school with MCAT prep and clinical shadowing.",
      university_description:
        "Public university in California known for its strong medical and healthcare programs.",
    },
    {
      name: "University of Florida Premedical Society",
      university: "University of Florida",
      club_description:
        "Supports pre-med students with clinical experiences, MCAT prep, and medical school guidance.",
      university_description:
        "Top public university in Florida known for its large student body and medical programs.",
    },
    {
      name: "Ohio State Premedical Society",
      university: "Ohio State University",
      club_description:
        "Provides resources for medical school prep, clinical shadowing, and healthcare volunteering.",
      university_description:
        "Top public university in Ohio known for its medical school and healthcare programs.",
    },
    {
      name: "Notre Dame Premedical Society",
      university: "University of Notre Dame",
      club_description:
        "Connects students with clinical and research opportunities, along with MCAT prep.",
      university_description:
        "Private Catholic university with a strong focus on pre-medical education.",
    },
    {
      name: "Tulane Premedical Society",
      university: "Tulane University",
      club_description:
        "Prepares students for medical school with MCAT prep, shadowing, and volunteer opportunities.",
      university_description:
        "Private university in Louisiana with strong pre-med and healthcare programs.",
    },
    {
      name: "Wake Forest Premedical Society",
      university: "Wake Forest University",
      club_description:
        "Offers pre-med students resources for medical school applications, MCAT prep, and clinical experience.",
      university_description:
        "Private university in North Carolina with a strong focus on pre-med education.",
    },
    {
      name: "University of Arizona Premedical Society",
      university: "University of Arizona",
      club_description:
        "Supports aspiring doctors with MCAT prep, shadowing opportunities, and application guidance.",
      university_description:
        "Public university in Arizona known for its healthcare programs and student resources.",
    },
    {
      name: "University of Washington Premedical Society",
      university: "University of Washington",
      club_description:
        "Provides pre-med students with clinical shadowing, research, and volunteer opportunities.",
      university_description:
        "Top public university known for its research and pre-medical education programs.",
    },
    {
      name: "University of Virginia Premedical Society",
      university: "University of Virginia",
      club_description:
        "Supports students with MCAT prep, clinical volunteering, and mentorship.",
      university_description:
        "Top public university known for its strong medical school and healthcare programs.",
    },
    {
      name: "SMU Premedical Society",
      university: "Southern Methodist University",
      club_description:
        "Helps students navigate the medical school application process with mentorship and clinical experience.",
      university_description:
        "Private university in Texas known for its healthcare and medical programs.",
    },
    {
      name: "George Washington University Premedical Society",
      university: "George Washington University",
      club_description:
        "Provides MCAT prep, clinical volunteering, and medical school guidance.",
      university_description:
        "Private university in Washington, D.C., known for its healthcare and medical programs.",
    },
    {
      name: "Fordham Premedical Society",
      university: "Fordham University",
      club_description:
        "Supports pre-med students with resources for clinical experiences and medical school prep.",
      university_description:
        "Private university in New York known for its strong healthcare programs.",
    },
    {
      name: "Indiana University Premedical Society",
      university: "Indiana University Bloomington",
      club_description:
        "Offers resources for MCAT prep, clinical volunteering, and medical school applications.",
      university_description:
        "Public university in Indiana known for its healthcare programs and pre-med resources.",
    },
    {
      name: "University of Miami Premedical Society",
      university: "University of Miami",
      club_description:
        "Supports aspiring medical students with MCAT prep, clinical shadowing, and volunteering.",
      university_description:
        "Private university in Florida known for its medical programs and pre-med support.",
    },
    {
      name: "University of Maryland Premedical Society",
      university: "University of Maryland, College Park",
      club_description:
        "Provides students with MCAT prep, clinical shadowing, and healthcare volunteering.",
      university_description:
        "Public university in Maryland known for its large student body and pre-med resources.",
    },
    {
      name: "University of Colorado Premedical Society",
      university: "University of Colorado Boulder",
      club_description:
        "Helps students prepare for medical school with resources, mentorship, and clinical experience.",
      university_description:
        "Public university in Colorado with a focus on science and medical programs.",
    },
    {
      name: "Temple University Premedical Society",
      university: "Temple University",
      club_description:
        "Provides resources for medical school prep, clinical volunteering, and MCAT workshops.",
      university_description:
        "Public university in Philadelphia known for its medical school and healthcare programs.",
    },
    {
      name: "University of South Carolina Premedical Society",
      university: "University of South Carolina",
      club_description:
        "Offers guidance on medical school applications, MCAT prep, and clinical experiences.",
      university_description:
        "Public university known for its healthcare programs and pre-med resources.",
    },
    {
      name: "University of Wisconsin Premedical Society",
      university: "University of Wisconsin-Madison",
      club_description:
        "Supports pre-med students with resources for MCAT prep, clinical volunteering, and research.",
      university_description:
        "Top public university known for its medical programs and research opportunities.",
    },
    {
      name: "University of Minnesota Premedical Society",
      university: "University of Minnesota",
      club_description:
        "Connects students with MCAT prep, clinical volunteering, and mentorship opportunities.",
      university_description:
        "Public university in Minnesota known for its healthcare programs and medical research.",
    },
    {
      name: "University of Iowa Premedical Society",
      university: "University of Iowa",
      club_description:
        "Helps students prepare for medical school with resources for MCAT prep and shadowing.",
      university_description:
        "Public university in Iowa known for its strong pre-med and medical programs.",
    },
    {
      name: "University of Delaware Premedical Society",
      university: "University of Delaware",
      club_description:
        "Supports students with MCAT resources, clinical volunteering, and mentorship.",
      university_description:
        "Public university in Delaware known for its medical research and pre-med programs.",
    },
    {
      name: "Florida State Premedical Society",
      university: "Florida State University",
      club_description:
        "Offers pre-med students MCAT prep, clinical shadowing, and medical school guidance.",
      university_description:
        "Public university in Florida known for its pre-med and medical programs.",
    },
    {
      name: "UC San Diego Premedical Society",
      university: "University of California, San Diego",
      club_description:
        "Provides support with MCAT prep, clinical volunteering, and medical school applications.",
      university_description:
        "Top public university in California known for its medical programs and research.",
    },
    {
      name: "University of Nebraska Premedical Society",
      university: "University of Nebraska",
      club_description:
        "Helps students prepare for medical school with resources, MCAT prep, and volunteering.",
      university_description:
        "Public university in Nebraska known for its healthcare and medical programs.",
    },
    {
      name: "University of Arizona Premedical Society",
      university: "University of Arizona",
      club_description:
        "Provides resources for MCAT prep, clinical shadowing, and volunteering opportunities.",
      university_description:
        "Public university in Arizona known for its medical school and healthcare programs.",
    },
  ],
  danceClubs: [
    {
      name: "Harvard Ballroom Dance Team",
      university: "Harvard University",
      club_description:
        "Competitive ballroom dance team that focuses on Latin and Standard dances.",
      university_description:
        "Ivy League university with a variety of student dance organizations.",
    },
    {
      name: "Yale Dancers",
      university: "Yale University",
      club_description:
        "A contemporary dance group that explores modern choreography and creative movement.",
      university_description:
        "Ivy League university known for fostering arts and creativity.",
    },
    {
      name: "UC Berkeley Dance Team",
      university: "University of California, Berkeley",
      club_description:
        "Performs at athletic events and competitions, with a focus on jazz and pom routines.",
      university_description:
        "Top public university with a strong student-run arts scene.",
    },
    {
      name: "NYU Dance Team",
      university: "New York University",
      club_description:
        "Performs jazz, hip hop, and contemporary routines at university events.",
      university_description:
        "Private university in NYC known for its strong performing arts programs.",
    },
    {
      name: "Stanford Cardinal Ballet",
      university: "Stanford University",
      club_description:
        "A student-run ballet company that produces classical and contemporary ballet performances.",
      university_description:
        "Prestigious university with a focus on both academic and artistic excellence.",
    },
    {
      name: "UCLA Bruin Bhangra",
      university: "University of California, Los Angeles",
      club_description:
        "Celebrates Punjabi culture through energetic Bhangra dance performances.",
      university_description:
        "Top public university in California with a large cultural dance scene.",
    },
    {
      name: "Georgetown Rangila",
      university: "Georgetown University",
      club_description:
        "A South Asian cultural dance group known for organizing an annual dance showcase.",
      university_description:
        "Private university known for its vibrant multicultural clubs.",
    },
    {
      name: "Columbia University Ballet Collaborative",
      university: "Columbia University",
      club_description:
        "Provides pre-professional ballet training and performance opportunities.",
      university_description:
        "Ivy League university with a strong student-led arts community.",
    },
    {
      name: "Cornell BreakFree",
      university: "Cornell University",
      club_description:
        "A hip hop and breakdancing group that promotes urban dance styles.",
      university_description:
        "Ivy League university with a diverse array of dance teams.",
    },
    {
      name: "USC Repertory Dance Company",
      university: "University of Southern California",
      club_description:
        "A contemporary dance company that focuses on modern and postmodern dance.",
      university_description:
        "Private university in Los Angeles with a strong performing arts reputation.",
    },
    {
      name: "Michigan Dance Team",
      university: "University of Michigan",
      club_description:
        "Performs at sports events and competitions, specializing in jazz, pom, and hip hop.",
      university_description:
        "Public university known for its extensive extracurricular activities and sports culture.",
    },
    {
      name: "Northwestern Dance Marathon",
      university: "Northwestern University",
      club_description:
        "Combines dance with philanthropy, raising funds for charity through a large dance marathon.",
      university_description:
        "Private university known for integrating service with student life.",
    },
    {
      name: "Duke Sabrosura",
      university: "Duke University",
      club_description:
        "A Latin dance team that specializes in Salsa, Bachata, and other Latin styles.",
      university_description:
        "Private university with a diverse range of cultural and performance clubs.",
    },
    {
      name: "Penn State Lionettes",
      university: "Pennsylvania State University",
      club_description:
        "The official dance team of Penn State, performing at football and basketball games.",
      university_description:
        "Public university with a vibrant sports culture and student involvement.",
    },
    {
      name: "Princeton TapCats",
      university: "Princeton University",
      club_description:
        "A student-run tap dance group that performs at university events.",
      university_description:
        "Ivy League university known for its commitment to fostering student creativity.",
    },
    {
      name: "Texas Pom Squad",
      university: "University of Texas at Austin",
      club_description:
        "Performs at athletic events with routines focused on pom, jazz, and hip hop.",
      university_description:
        "Top public university with a large student body and active dance community.",
    },
    {
      name: "Boston University Fusion",
      university: "Boston University",
      club_description:
        "A dance crew that blends hip hop, contemporary, and jazz styles.",
      university_description:
        "Private university known for its performing arts and vibrant student life.",
    },
    {
      name: "Emory AHANA Dance",
      university: "Emory University",
      club_description:
        "A multicultural dance team that performs styles ranging from hip hop to traditional cultural dances.",
      university_description:
        "Private university with a focus on diversity and cultural engagement.",
    },
    {
      name: "UChicago Dance Council",
      university: "University of Chicago",
      club_description:
        "Oversees various dance groups on campus, organizing performances and events.",
      university_description:
        "Private university known for its vibrant intellectual and cultural community.",
    },
    {
      name: "Vanderbilt Vibe",
      university: "Vanderbilt University",
      club_description:
        "A hip hop dance team that competes and performs at university events.",
      university_description:
        "Private university in Tennessee with a strong student-led dance scene.",
    },
    {
      name: "UC Davis Dance Team",
      university: "University of California, Davis",
      club_description:
        "Performs at sports events and competitions, with a focus on jazz, pom, and hip hop.",
      university_description:
        "Public university in California known for its strong dance community.",
    },
    {
      name: "UF Extreme Dance",
      university: "University of Florida",
      club_description:
        "A competitive hip hop dance team that performs at university and local events.",
      university_description:
        "Top public university in Florida with a diverse range of student organizations.",
    },
    {
      name: "Ohio State Dance Team",
      university: "Ohio State University",
      club_description:
        "Performs at football and basketball games, specializing in jazz, pom, and hip hop.",
      university_description:
        "Public university in Ohio with a strong sports and student activities culture.",
    },
    {
      name: "Notre Dame Dance Company",
      university: "University of Notre Dame",
      club_description:
        "A student-led dance group that performs a variety of styles, including ballet and contemporary.",
      university_description:
        "Private Catholic university with a strong tradition of student involvement in the arts.",
    },
    {
      name: "Tulane Shockwave Dance Team",
      university: "Tulane University",
      club_description:
        "Performs at Tulane athletic events, specializing in pom and hip hop routines.",
      university_description:
        "Private university in New Orleans with an active student life scene.",
    },
    {
      name: "Wake Forest Salsa Club",
      university: "Wake Forest University",
      club_description:
        "Teaches and performs Salsa and other Latin dance styles.",
      university_description:
        "Private university in North Carolina known for its cultural dance clubs.",
    },
    {
      name: "University of Arizona Hip Hop Coalition",
      university: "University of Arizona",
      club_description:
        "Promotes hip hop dance culture through performances and competitions.",
      university_description:
        "Public university in Arizona with a strong urban dance scene.",
    },
    {
      name: "UW Dance Team",
      university: "University of Washington",
      club_description:
        "Performs at football and basketball games with pom, jazz, and hip hop routines.",
      university_description:
        "Public university in Washington with a vibrant dance and sports culture.",
    },
    {
      name: "UVA Salsa Club",
      university: "University of Virginia",
      club_description:
        "Focuses on teaching and performing Salsa and other Latin dance forms.",
      university_description:
        "Public university in Virginia with a strong focus on cultural and performance arts.",
    },
    {
      name: "SMU Pom Squad",
      university: "Southern Methodist University",
      club_description:
        "Performs at athletic events, with routines in jazz, pom, and hip hop.",
      university_description:
        "Private university in Texas with a large student involvement in the arts and sports.",
    },
    {
      name: "GW Balance Dance Group",
      university: "George Washington University",
      club_description:
        "A contemporary dance group that promotes creative expression through choreography.",
      university_description:
        "Private university in Washington, D.C., with a focus on student-led arts.",
    },
    {
      name: "Fordham Expressions Dance Alliance",
      university: "Fordham University",
      club_description:
        "A contemporary and modern dance group that performs at various events.",
      university_description:
        "Private university in New York known for its strong performing arts culture.",
    },
    {
      name: "IU HooSher Bhangra",
      university: "Indiana University Bloomington",
      club_description:
        "A competitive Bhangra team that performs at cultural events and competitions.",
      university_description:
        "Public university in Indiana known for its strong cultural dance presence.",
    },
    {
      name: "Miami University Dance Theatre",
      university: "Miami University",
      club_description:
        "A contemporary dance group that performs student-choreographed works.",
      university_description:
        "Public university in Ohio with a focus on student-run arts and dance.",
    },
    {
      name: "University of Maryland Terrapin Dance Team",
      university: "University of Maryland, College Park",
      club_description:
        "Performs at athletic events, with routines focused on pom, jazz, and hip hop.",
      university_description:
        "Public university in Maryland known for its strong sports and dance culture.",
    },
    {
      name: "Colorado Dance Team",
      university: "University of Colorado Boulder",
      club_description:
        "Performs at football and basketball games, focusing on jazz, pom, and hip hop.",
      university_description:
        "Public university in Colorado with a strong student-run dance scene.",
    },
    {
      name: "Temple Owl Dance Team",
      university: "Temple University",
      club_description:
        "Performs at university sporting events with routines in pom, jazz, and hip hop.",
      university_description:
        "Public university in Philadelphia known for its sports and performing arts programs.",
    },
    {
      name: "University of South Carolina Cockettes",
      university: "University of South Carolina",
      club_description:
        "A hip hop and jazz dance team that performs at athletic events.",
      university_description:
        "Public university known for its strong sports and student-run organizations.",
    },
    {
      name: "University of Kentucky Dance Team",
      university: "University of Kentucky",
      club_description:
        "Performs at basketball and football games, specializing in pom and jazz routines.",
      university_description:
        "Public university in Kentucky known for its sports and student activities.",
    },
    {
      name: "FSU Seminole Dance Force",
      university: "Florida State University",
      club_description:
        "Performs hip hop, pom, and jazz routines at athletic events and competitions.",
      university_description:
        "Top public university in Florida with a large student-run dance community.",
    },
    {
      name: "University of Minnesota Premier Dance Team",
      university: "University of Minnesota",
      club_description:
        "Performs at sports events and competitions, with routines in jazz, pom, and hip hop.",
      university_description:
        "Public university in Minnesota with a large student activities scene.",
    },
    {
      name: "University of Nebraska Dance Team",
      university: "University of Nebraska",
      club_description:
        "Performs at football and basketball games, with routines focused on pom and jazz.",
      university_description:
        "Public university in Nebraska known for its student-run dance teams.",
    },
    {
      name: "University of Tennessee Dance Society",
      university: "University of Tennessee",
      club_description:
        "A student-led dance group that performs a variety of styles, from ballet to hip hop.",
      university_description:
        "Public university in Tennessee known for its strong student organizations.",
    },
    {
      name: "Clemson Tiger Dancers",
      university: "Clemson University",
      club_description:
        "Performs at athletic events and competitions, with routines in pom, jazz, and hip hop.",
      university_description:
        "Public university in South Carolina with a strong student involvement in the arts.",
    },
    {
      name: "University of Delaware Dance Team",
      university: "University of Delaware",
      club_description:
        "Performs at athletic events and competitions, specializing in jazz, pom, and hip hop.",
      university_description:
        "Public university in Delaware known for its strong student activities and sports.",
    },
    {
      name: "University of Georgia Georgettes",
      university: "University of Georgia",
      club_description:
        "Performs at athletic events, with routines in jazz, pom, and hip hop.",
      university_description:
        "Public university in Georgia with a strong sports culture and student-run activities.",
    },
    {
      name: "Ole Miss Rebelettes",
      university: "University of Mississippi",
      club_description:
        "Performs at football and basketball games, with routines focused on jazz and pom.",
      university_description:
        "Public university in Mississippi with a strong sports and student activities scene.",
    },
    {
      name: "University of Oklahoma Pom Squad",
      university: "University of Oklahoma",
      club_description:
        "Performs at university sporting events with jazz, pom, and hip hop routines.",
      university_description:
        "Public university in Oklahoma known for its sports and student-run dance groups.",
    },
  ],
  theatreAndDramaClubs: [
    {
      name: "Harvard Radcliffe Dramatic Club",
      university: "Harvard University",
      club_description:
        "Produces a wide range of theatrical performances including musicals, plays, and original works.",
      university_description:
        "Ivy League university known for its rich history in the arts and humanities.",
    },
    {
      name: "Yale Dramat",
      university: "Yale University",
      club_description:
        "The second-oldest college theater group in the U.S., producing high-quality student performances.",
      university_description:
        "Ivy League university with a prestigious theater tradition.",
    },
    {
      name: "UC Berkeley Theatre Club",
      university: "University of California, Berkeley",
      club_description:
        "Provides students with opportunities to act, direct, and work behind the scenes in various productions.",
      university_description:
        "Public university in California with a strong student-led performing arts scene.",
    },
    {
      name: "NYU Tisch Drama Stageworks",
      university: "New York University",
      club_description:
        "A theater company offering performance opportunities to students in the drama program.",
      university_description:
        "Private university with a top-ranked performing arts school in NYC.",
    },
    {
      name: "Stanford Ram's Head Theatrical Society",
      university: "Stanford University",
      club_description:
        "Stanford's oldest and largest student theater group, producing musicals, plays, and original works.",
      university_description:
        "Private university in California known for both academic and artistic excellence.",
    },
    {
      name: "UCLA Act III Theatre Ensemble",
      university: "University of California, Los Angeles",
      club_description:
        "A student-run theater company producing plays, musicals, and original work.",
      university_description:
        "Public university with a renowned film and theater program.",
    },
    {
      name: "Georgetown Mask & Bauble Dramatic Society",
      university: "Georgetown University",
      club_description:
        "The oldest continuously running student theater group in the U.S., producing classic and contemporary plays.",
      university_description:
        "Private university in Washington, D.C., known for its rich student-led arts scene.",
    },
    {
      name: "Columbia Varsity Show",
      university: "Columbia University",
      club_description:
        "An original student-written musical performed annually, with a strong satirical tone.",
      university_description:
        "Ivy League university with a tradition of student-driven artistic expression.",
    },
    {
      name: "Cornell Melodramatics Theatre Company",
      university: "Cornell University",
      club_description:
        "A student-run theater company known for its dedication to musical theater and plays.",
      university_description:
        "Ivy League university in New York with a diverse student theater community.",
    },
    {
      name: "USC Independent Student Productions",
      university: "University of Southern California",
      club_description:
        "Provides students with opportunities to create their own theater and film projects.",
      university_description:
        "Private university in Los Angeles known for its film and performing arts programs.",
    },
    {
      name: "Michigan Rude Mechanicals",
      university: "University of Michigan",
      club_description:
        "A student-run theater company that produces Shakespearean plays and other classical works.",
      university_description:
        "Public university with a strong performing arts tradition and student-led theater groups.",
    },
    {
      name: "Northwestern WAVE Productions",
      university: "Northwestern University",
      club_description:
        "A student theater group producing musicals and plays, focused on innovative and experimental work.",
      university_description:
        "Private university known for its prestigious theater program and student involvement in the arts.",
    },
    {
      name: "Duke Hoof 'n' Horn",
      university: "Duke University",
      club_description:
        "The oldest student-run musical theater group in the South, producing Broadway-style shows.",
      university_description:
        "Private university in North Carolina with a strong tradition of student-led theater.",
    },
    {
      name: "Penn Players",
      university: "University of Pennsylvania",
      club_description:
        "A student theater group focused on contemporary and experimental productions.",
      university_description:
        "Ivy League university in Philadelphia with a vibrant student arts community.",
    },
    {
      name: "Princeton Triangle Club",
      university: "Princeton University",
      club_description:
        "America's oldest touring collegiate musical-comedy troupe, known for producing original shows.",
      university_description:
        "Ivy League university with a strong tradition of student-written and performed theater.",
    },
    {
      name: "Texas Theatre and Dance",
      university: "University of Texas at Austin",
      club_description:
        "Produces a wide range of student-led performances, from classic to contemporary works.",
      university_description:
        "Top public university with a large performing arts program and student theater scene.",
    },
    {
      name: "Boston University On Broadway",
      university: "Boston University",
      club_description:
        "A student-run theater group focused on musical theater, producing several shows annually.",
      university_description:
        "Private university known for its strong student involvement in the performing arts.",
    },
    {
      name: "Emory Ad Hoc Productions",
      university: "Emory University",
      club_description:
        "Produces innovative and experimental theater, focusing on student-written and directed works.",
      university_description:
        "Private university with a vibrant and experimental student theater community.",
    },
    {
      name: "UChicago Off-Off Campus",
      university: "University of Chicago",
      club_description:
        "One of the oldest student-run improv comedy groups in the country, with a focus on sketch comedy.",
      university_description:
        "Private university with a strong intellectual and artistic student culture.",
    },
    {
      name: "Vanderbilt Original Cast",
      university: "Vanderbilt University",
      club_description:
        "A student-run musical theater group producing Broadway-style performances each semester.",
      university_description:
        "Private university in Tennessee with an active student-led theater and arts scene.",
    },
    {
      name: "UC Davis Theatre & Dance",
      university: "University of California, Davis",
      club_description:
        "Produces student-led performances ranging from musicals to contemporary plays.",
      university_description:
        "Public university with a vibrant student theater and arts community.",
    },
    {
      name: "UF Florida Players",
      university: "University of Florida",
      club_description:
        "A student-run theater company that produces a wide range of theatrical performances.",
      university_description:
        "Top public university in Florida with a diverse student theater scene.",
    },
    {
      name: "Ohio State Theatre Group",
      university: "Ohio State University",
      club_description:
        "Provides students with opportunities to act, direct, and work on technical aspects of theater productions.",
      university_description:
        "Public university in Ohio with a strong performing arts program.",
    },
    {
      name: "Notre Dame Pasquerilla East Musical Company",
      university: "University of Notre Dame",
      club_description:
        "Notre Dame's student-run musical theater group, producing a large-scale musical each year.",
      university_description:
        "Private Catholic university known for its strong tradition of student-led arts and theater.",
    },
    {
      name: "Tulane Theatre Productions",
      university: "Tulane University",
      club_description:
        "A student-driven theater company producing plays, musicals, and experimental works.",
      university_description:
        "Private university in New Orleans with a strong performing arts community.",
    },
    {
      name: "Wake Forest Theatre",
      university: "Wake Forest University",
      club_description:
        "Produces student-driven performances, ranging from Shakespeare to contemporary plays.",
      university_description:
        "Private university with a strong commitment to fostering student creativity in the arts.",
    },
    {
      name: "University of Arizona Studio Series",
      university: "University of Arizona",
      club_description:
        "A student-led theater group focusing on experimental and contemporary works.",
      university_description:
        "Public university in Arizona with a strong student-run performing arts program.",
    },
    {
      name: "UW Undergraduate Theatre Society",
      university: "University of Washington",
      club_description:
        "A student theater group that produces a variety of performances including classics, musicals, and original works.",
      university_description:
        "Public university with a thriving student-run arts and theater community.",
    },
    {
      name: "UVA Spectrum Theatre",
      university: "University of Virginia",
      club_description:
        "Focuses on productions that explore social issues and foster dialogue through the arts.",
      university_description:
        "Public university in Virginia with a diverse and active student theater scene.",
    },
    {
      name: "SMU Meadows Theatre",
      university: "Southern Methodist University",
      club_description:
        "Produces a wide range of performances from musicals to classical plays.",
      university_description:
        "Private university in Texas known for its strong performing arts program.",
    },
    {
      name: "GW Generic Theatre Company",
      university: "George Washington University",
      club_description:
        "A student-run theater group that produces classic and contemporary plays.",
      university_description:
        "Private university in Washington, D.C., with an active student-led performing arts scene.",
    },
    {
      name: "Fordham Mimes and Mummers",
      university: "Fordham University",
      club_description:
        "The oldest student theater group in New York City, producing a variety of classic and contemporary works.",
      university_description:
        "Private university in NYC with a strong tradition of student theater.",
    },
    {
      name: "IU University Players",
      university: "Indiana University Bloomington",
      club_description:
        "A student-run theater group producing contemporary and classical works.",
      university_description:
        "Public university in Indiana known for its strong student-run arts and theater scene.",
    },
    {
      name: "Miami University Stage Left",
      university: "Miami University",
      club_description:
        "Produces student-directed performances, focusing on innovative and thought-provoking theater.",
      university_description:
        "Public university in Ohio with a strong student-driven performing arts culture.",
    },
    {
      name: "UMD The Hoot Theatre Company",
      university: "University of Maryland, College Park",
      club_description:
        "Produces student-written and directed plays, with a focus on new and experimental works.",
      university_description:
        "Public university with a large student-run performing arts community.",
    },
    {
      name: "Colorado Shakespeare Club",
      university: "University of Colorado Boulder",
      club_description:
        "A student-run group focusing on performances of Shakespeare's works.",
      university_description:
        "Public university in Colorado with a strong tradition of student-driven performing arts.",
    },
    {
      name: "Temple Broadway on Broad",
      university: "Temple University",
      club_description:
        "A student-run musical theater group producing full-scale Broadway shows.",
      university_description:
        "Public university in Philadelphia with a strong student-run arts and theater community.",
    },
    {
      name: "UCSB Shrunken Heads Theatre Company",
      university: "University of California, Santa Barbara",
      club_description:
        "A student-run theater group known for its innovative and experimental productions.",
      university_description:
        "Public university in California with a vibrant student-led performing arts scene.",
    },
    {
      name: "UGA Thalian Blackfriars",
      university: "University of Georgia",
      club_description:
        "Produces a wide range of performances from contemporary plays to classic works.",
      university_description:
        "Public university in Georgia with a strong student-run arts and theater culture.",
    },
    {
      name: "Florida State School of Theatre",
      university: "Florida State University",
      club_description:
        "Produces student-led performances in a variety of genres, from musicals to contemporary drama.",
      university_description:
        "Top public university in Florida with a thriving student arts community.",
    },
    {
      name: "BYU Young Ambassadors",
      university: "Brigham Young University",
      club_description:
        "A touring musical theater group that combines song, dance, and acting.",
      university_description:
        "Private religious university with a strong performing arts program.",
    },
    {
      name: "Purdue Purdue Theatre",
      university: "Purdue University",
      club_description:
        "Produces student-led performances ranging from musicals to contemporary plays.",
      university_description:
        "Public university in Indiana with a vibrant performing arts scene.",
    },
    {
      name: "Virginia Tech Theatre Club",
      university: "Virginia Tech",
      club_description:
        "Provides students with opportunities to act, direct, and work on technical aspects of theater productions.",
      university_description:
        "Public university in Virginia known for its active student-run arts and theater groups.",
    },
    {
      name: "University of Oregon No Shame Theatre",
      university: "University of Oregon",
      club_description:
        "An experimental, student-run theater group encouraging bold, no-holds-barred performances.",
      university_description:
        "Public university with a lively student-run performing arts community.",
    },
    {
      name: "UCLA Act III Theatre Ensemble",
      university: "University of California, Los Angeles",
      club_description:
        "A student-run theater company producing plays, musicals, and original works.",
      university_description:
        "Public university with a renowned film and theater program.",
    },
    {
      name: "Cal Poly Theatre",
      university: "California Polytechnic State University",
      club_description:
        "Produces student-led performances ranging from musicals to contemporary plays.",
      university_description:
        "Public university with a strong student-run performing arts program.",
    },
    {
      name: "Ohio University Theater Club",
      university: "Ohio University",
      club_description:
        "Provides students with opportunities to act, direct, and work behind the scenes in various productions.",
      university_description:
        "Public university in Ohio with a strong student-run performing arts scene.",
    },
  ],
  musicClubs: [
    {
      name: "Harvard Opportunes",
      university: "Harvard University",
      club_description:
        "Harvard's premier co-ed a cappella group, performing a range of musical styles.",
      university_description:
        "Ivy League university with a strong tradition in arts and music.",
    },
    {
      name: "Yale Whiffenpoofs",
      university: "Yale University",
      club_description:
        "The world's oldest collegiate a cappella group, performing across the globe.",
      university_description:
        "Ivy League university known for its prestigious a cappella groups.",
    },
    {
      name: "UC Berkeley Marching Band",
      university: "University of California, Berkeley",
      club_description:
        "Student-led marching band performing at athletic events and parades.",
      university_description:
        "Public university with a strong student-led music and performance tradition.",
    },
    {
      name: "NYU Chorale",
      university: "New York University",
      club_description:
        "A student-run choir performing classical and contemporary choral works.",
      university_description:
        "Private university in New York with a vibrant performing arts scene.",
    },
    {
      name: "Stanford Mendicants",
      university: "Stanford University",
      club_description:
        "Stanford's oldest all-male a cappella group, performing a wide range of genres.",
      university_description:
        "Private university in California with a rich student-led music tradition.",
    },
    {
      name: "UCLA Bruin Harmony",
      university: "University of California, Los Angeles",
      club_description:
        "A men's a cappella group known for their high-energy performances and vocal arrangements.",
      university_description:
        "Public university in California with a renowned music program.",
    },
    {
      name: "Georgetown Phantoms",
      university: "Georgetown University",
      club_description:
        "Georgetown’s premier co-ed a cappella group performing pop, indie, and R&B hits.",
      university_description:
        "Private university in Washington, D.C., with a strong student-run music scene.",
    },
    {
      name: "Columbia Orchestra",
      university: "Columbia University",
      club_description:
        "A student orchestra performing classical symphonies and contemporary works.",
      university_description:
        "Ivy League university with a thriving music and arts culture.",
    },
    {
      name: "Cornell Chordials",
      university: "Cornell University",
      club_description:
        "An award-winning co-ed a cappella group known for its unique arrangements.",
      university_description:
        "Ivy League university in New York with a dynamic student music scene.",
    },
    {
      name: "USC Thornton Jazz Orchestra",
      university: "University of Southern California",
      club_description:
        "A jazz ensemble showcasing USC’s top musicians in various genres of jazz.",
      university_description:
        "Private university in Los Angeles with a prestigious music program.",
    },
    {
      name: "Michigan G-Men",
      university: "University of Michigan",
      club_description:
        "An all-male a cappella group known for its powerful vocals and dynamic performances.",
      university_description:
        "Public university with a rich tradition in student-led music groups.",
    },
    {
      name: "Northwestern University Symphony Orchestra",
      university: "Northwestern University",
      club_description:
        "A student orchestra performing a wide range of classical and modern symphonic works.",
      university_description:
        "Private university with one of the top music schools in the U.S.",
    },
    {
      name: "Duke Pitchforks",
      university: "Duke University",
      club_description:
        "Duke’s oldest all-male a cappella group, known for their high-energy performances.",
      university_description:
        "Private university in North Carolina with a vibrant music scene.",
    },
    {
      name: "Penn Counterparts",
      university: "University of Pennsylvania",
      club_description:
        "A co-ed a cappella group focusing on pop and R&B hits with unique vocal arrangements.",
      university_description:
        "Ivy League university in Philadelphia with a diverse student music scene.",
    },
    {
      name: "Princeton Tigertones",
      university: "Princeton University",
      club_description:
        "A renowned all-male a cappella group, performing a range of genres from classical to pop.",
      university_description:
        "Ivy League university known for its prestigious music and performing arts groups.",
    },
    {
      name: "Texas Longhorn Band",
      university: "University of Texas at Austin",
      club_description:
        "The official marching band of UT Austin, performing at sporting events and parades.",
      university_description:
        "Top public university in Texas with a large and active music community.",
    },
    {
      name: "Boston University Pep Band",
      university: "Boston University",
      club_description:
        "A high-energy band performing at sporting events and community gatherings.",
      university_description:
        "Private university in Boston with a strong student-led music scene.",
    },
    {
      name: "Emory Dooley Noted",
      university: "Emory University",
      club_description:
        "A co-ed a cappella group performing popular music with creative arrangements.",
      university_description:
        "Private university in Georgia with a growing music and performing arts culture.",
    },
    {
      name: "UChicago Motet Choir",
      university: "University of Chicago",
      club_description:
        "A student choir performing classical choral music and contemporary works.",
      university_description:
        "Private university with a rich tradition of student-led classical music ensembles.",
    },
    {
      name: "Vanderbilt Melodores",
      university: "Vanderbilt University",
      club_description:
        "An award-winning all-male a cappella group known for their dynamic performances.",
      university_description:
        "Private university in Tennessee with an active student-run music scene.",
    },
    {
      name: "UC Davis Jazz Band",
      university: "University of California, Davis",
      club_description:
        "A student-led jazz ensemble performing across various jazz styles and eras.",
      university_description:
        "Public university with a strong tradition in student-run music groups.",
    },
    {
      name: "UF Symphonic Band",
      university: "University of Florida",
      club_description:
        "A student symphonic band performing classical and contemporary works.",
      university_description:
        "Top public university in Florida with an active student music scene.",
    },
    {
      name: "Ohio State Men's Glee Club",
      university: "Ohio State University",
      club_description:
        "An award-winning men’s chorus performing classical and contemporary choral music.",
      university_description:
        "Public university in Ohio known for its large student-led music community.",
    },
    {
      name: "Notre Dame Folk Choir",
      university: "University of Notre Dame",
      club_description:
        "A student-run choir performing folk and religious music.",
      university_description:
        "Private Catholic university with a rich tradition in music and choral performance.",
    },
    {
      name: "Tulane Green Wave Brass Band",
      university: "Tulane University",
      club_description:
        "A New Orleans-style brass band performing at university events and parades.",
      university_description:
        "Private university in New Orleans with a vibrant student-run music scene.",
    },
    {
      name: "Wake Forest Demon Divas",
      university: "Wake Forest University",
      club_description:
        "An all-female a cappella group known for their powerful vocals and harmonies.",
      university_description:
        "Private university in North Carolina with a strong a cappella tradition.",
    },
    {
      name: "University of Arizona Choir",
      university: "University of Arizona",
      club_description:
        "A student choir performing classical and contemporary choral works.",
      university_description:
        "Public university in Arizona with a strong music program and student-led ensembles.",
    },
    {
      name: "UW Marching Band",
      university: "University of Washington",
      club_description:
        "The official marching band of UW, performing at athletic events and parades.",
      university_description:
        "Public university in Washington with a vibrant student music and marching band tradition.",
    },
    {
      name: "UVA Academical Village People",
      university: "University of Virginia",
      club_description:
        "A male a cappella group known for its creative vocal arrangements and entertaining performances.",
      university_description:
        "Public university in Virginia with a strong a cappella and student music scene.",
    },
    {
      name: "SMU Meadows Wind Ensemble",
      university: "Southern Methodist University",
      club_description:
        "A student wind ensemble performing classical and contemporary works.",
      university_description:
        "Private university in Texas known for its strong performing arts program.",
    },
    {
      name: "GW Vibes",
      university: "George Washington University",
      club_description:
        "A co-ed a cappella group performing a wide range of genres from pop to indie.",
      university_description:
        "Private university in Washington, D.C., with an active student music scene.",
    },
    {
      name: "Fordham Ramblers",
      university: "Fordham University",
      club_description:
        "Fordham’s all-male a cappella group known for their vibrant and powerful performances.",
      university_description:
        "Private university in New York City with a strong student-led music tradition.",
    },
    {
      name: "IU Singing Hoosiers",
      university: "Indiana University Bloomington",
      club_description:
        "A premier show choir performing a mix of contemporary pop and Broadway hits.",
      university_description:
        "Public university in Indiana with a rich tradition in choral and show choir performance.",
    },
    {
      name: "Miami University Men's Glee Club",
      university: "Miami University",
      club_description:
        "One of the oldest collegiate men’s glee clubs, performing classical and contemporary choral music.",
      university_description:
        "Public university in Ohio with a strong choral tradition.",
    },
    {
      name: "UMD Jazz Ensemble",
      university: "University of Maryland, College Park",
      club_description:
        "A student-led jazz band performing a variety of jazz styles.",
      university_description:
        "Public university with a vibrant student music scene.",
    },
    {
      name: "Colorado Boulder a cappella",
      university: "University of Colorado Boulder",
      club_description:
        "A collection of a cappella groups performing a variety of music genres.",
      university_description:
        "Public university in Colorado with a thriving student music culture.",
    },
    {
      name: "Temple Diamond Marching Band",
      university: "Temple University",
      club_description:
        "Temple’s marching band, performing at athletic events and community parades.",
      university_description:
        "Public university in Philadelphia with a strong tradition of student-led music groups.",
    },
    {
      name: "Texas A&M Singing Cadets",
      university: "Texas A&M University",
      club_description:
        "A premier men’s chorus performing a range of genres from classical to contemporary.",
      university_description:
        "Public university in Texas with a rich student-run choral tradition.",
    },
    {
      name: "UIUC Marching Illini",
      university: "University of Illinois Urbana-Champaign",
      club_description:
        "The official marching band of UIUC, performing at athletic events and parades.",
      university_description:
        "Public university in Illinois with a strong student-run music tradition.",
    },
    {
      name: "Lehigh University Philharmonic",
      university: "Lehigh University",
      club_description:
        "A student orchestra performing classical symphonies and contemporary works.",
      university_description:
        "Private university in Pennsylvania with a strong student-led music scene.",
    },
    {
      name: "Pitt Pendulums",
      university: "University of Pittsburgh",
      club_description:
        "A co-ed a cappella group performing contemporary pop and indie music.",
      university_description:
        "Public university in Pennsylvania with a vibrant student-run a cappella and music community.",
    },
    {
      name: "UConn Marching Band",
      university: "University of Connecticut",
      club_description:
        "The official marching band of UConn, performing at athletic events and parades.",
      university_description:
        "Public university with a strong tradition of student-led music groups.",
    },
    {
      name: "Cal Poly Mustangs Band",
      university: "California Polytechnic State University",
      club_description:
        "A student-led marching band performing at university and community events.",
      university_description:
        "Public university with a vibrant student music and performing arts scene.",
    },
    {
      name: "Iowa State University Symphony",
      university: "Iowa State University",
      club_description:
        "A student orchestra performing classical and modern symphonic works.",
      university_description:
        "Public university in Iowa with a strong student-led music tradition.",
    },
    {
      name: "BYU Vocal Point",
      university: "Brigham Young University",
      club_description:
        "A renowned a cappella group performing a wide variety of genres.",
      university_description:
        "Private religious university known for its prestigious a cappella and choral groups.",
    },
    {
      name: "University of Richmond Octāves",
      university: "University of Richmond",
      club_description:
        "An all-male a cappella group performing contemporary pop music.",
      university_description:
        "Private university in Virginia with an active a cappella and student music scene.",
    },
    {
      name: "Penn State Blue Band",
      university: "Pennsylvania State University",
      club_description:
        "Penn State’s official marching band, performing at athletic events and parades.",
      university_description:
        "Public university in Pennsylvania with a large student-run music community.",
    },
    {
      name: "University of Miami Frost Symphony Orchestra",
      university: "University of Miami",
      club_description:
        "A student orchestra performing classical and contemporary symphonic works.",
      university_description:
        "Private university in Florida with a renowned music program and active student music groups.",
    },
  ],
  filmAndPhotographyClubs: [
    {
      name: "Harvard Film Club",
      university: "Harvard University",
      club_description:
        "A student-run organization dedicated to film screenings, discussions, and producing short films.",
      university_description:
        "Ivy League university with a strong tradition in arts and humanities.",
    },
    {
      name: "Yale Film Society",
      university: "Yale University",
      club_description:
        "Promotes appreciation of film through screenings and discussions with industry professionals.",
      university_description:
        "Ivy League university known for its prestigious arts programs.",
    },
    {
      name: "UC Berkeley Photography Club",
      university: "University of California, Berkeley",
      club_description:
        "A community of photography enthusiasts offering workshops and gallery showcases.",
      university_description:
        "Public university with a vibrant creative arts scene.",
    },
    {
      name: "NYU Tisch Film Club",
      university: "New York University",
      club_description:
        "A club for NYU students passionate about film production and critical analysis.",
      university_description:
        "Private university in New York City with a renowned film school.",
    },
    {
      name: "Stanford University Film Society",
      university: "Stanford University",
      club_description:
        "Hosts screenings, discussions, and offers support for student filmmakers.",
      university_description:
        "Private university in California known for its tech and creative synergy.",
    },
    {
      name: "UCLA Film and Photography Society",
      university: "University of California, Los Angeles",
      club_description:
        "A student-run club offering film screenings, photography exhibitions, and collaborations.",
      university_description:
        "Public university in California with a strong focus on film and media studies.",
    },
    {
      name: "Georgetown Photography Society",
      university: "Georgetown University",
      club_description:
        "Provides workshops and events for students interested in improving their photography skills.",
      university_description:
        "Private university in Washington, D.C., with a growing photography and arts community.",
    },
    {
      name: "Columbia University Film Production Club",
      university: "Columbia University",
      club_description:
        "Focuses on student-led film projects, from script development to production.",
      university_description:
        "Ivy League university in New York City with a thriving film and media culture.",
    },
    {
      name: "Cornell Film Club",
      university: "Cornell University",
      club_description:
        "A student group dedicated to film screenings, analysis, and creation of original short films.",
      university_description:
        "Ivy League university with a strong emphasis on creative arts.",
    },
    {
      name: "USC Cinema Club",
      university: "University of Southern California",
      club_description:
        "USC’s premier student film club, providing opportunities for screenings and collaborations.",
      university_description:
        "Private university in Los Angeles with one of the top film schools in the world.",
    },
    {
      name: "Michigan Photography Society",
      university: "University of Michigan",
      club_description:
        "A club for photography lovers that organizes photo walks, exhibitions, and critiques.",
      university_description:
        "Public university with a vibrant arts community.",
    },
    {
      name: "Northwestern Filmmakers Association",
      university: "Northwestern University",
      club_description:
        "A club supporting student filmmakers through networking, workshops, and production resources.",
      university_description:
        "Private university with a top-tier film and theater program.",
    },
    {
      name: "Duke Film Society",
      university: "Duke University",
      club_description:
        "A student organization focused on film screenings, discussions, and student filmmaking.",
      university_description:
        "Private university in North Carolina with a strong film and arts scene.",
    },
    {
      name: "Penn Photography Club",
      university: "University of Pennsylvania",
      club_description:
        "Offers resources, workshops, and opportunities for student photographers to showcase their work.",
      university_description:
        "Ivy League university in Philadelphia with a dynamic creative arts community.",
    },
    {
      name: "Princeton Film and Media Studies Club",
      university: "Princeton University",
      club_description:
        "Encourages film appreciation through screenings, discussions, and student productions.",
      university_description:
        "Ivy League university with a growing focus on media and film.",
    },
    {
      name: "Texas Filmmakers Club",
      university: "University of Texas at Austin",
      club_description:
        "A student organization supporting the creation of student films, from scriptwriting to editing.",
      university_description:
        "Top public university in Texas with a renowned film and media program.",
    },
    {
      name: "Boston University Photography Club",
      university: "Boston University",
      club_description:
        "A club dedicated to exploring various forms of photography through workshops and exhibitions.",
      university_description:
        "Private university in Boston with a vibrant creative arts scene.",
    },
    {
      name: "Emory Film Society",
      university: "Emory University",
      club_description:
        "A group that hosts film screenings, discussions, and supports student filmmakers.",
      university_description:
        "Private university in Georgia with a growing film community.",
    },
    {
      name: "University of Chicago Film Club",
      university: "University of Chicago",
      club_description:
        "Hosts film screenings and discussions, and promotes student-led film projects.",
      university_description:
        "Private university with a rich tradition in film analysis and criticism.",
    },
    {
      name: "Vanderbilt Photography Club",
      university: "Vanderbilt University",
      club_description:
        "Offers students the chance to develop photography skills through workshops and exhibitions.",
      university_description:
        "Private university in Tennessee with an active student photography scene.",
    },
    {
      name: "UC Davis Film Collective",
      university: "University of California, Davis",
      club_description:
        "A student group supporting film production, screenings, and industry networking.",
      university_description:
        "Public university with a strong focus on media and creative arts.",
    },
    {
      name: "UF Photography Club",
      university: "University of Florida",
      club_description:
        "A club for photography enthusiasts that organizes workshops, photo walks, and exhibitions.",
      university_description:
        "Top public university in Florida with a vibrant photography scene.",
    },
    {
      name: "Ohio State Film Club",
      university: "Ohio State University",
      club_description:
        "A club dedicated to film screenings, discussions, and student film productions.",
      university_description:
        "Public university in Ohio known for its large creative arts community.",
    },
    {
      name: "Notre Dame Photography Society",
      university: "University of Notre Dame",
      club_description:
        "A student-run club focusing on photography workshops, exhibitions, and critique sessions.",
      university_description:
        "Private Catholic university with a rich tradition in visual arts.",
    },
    {
      name: "Tulane Film and Media Arts Club",
      university: "Tulane University",
      club_description:
        "A group for students passionate about film screenings, discussions, and production.",
      university_description:
        "Private university in New Orleans with a growing film and media scene.",
    },
    {
      name: "Wake Forest Film Society",
      university: "Wake Forest University",
      club_description:
        "Promotes film appreciation through screenings, discussions, and student productions.",
      university_description:
        "Private university in North Carolina with a strong film community.",
    },
    {
      name: "University of Arizona Photography Club",
      university: "University of Arizona",
      club_description:
        "Offers opportunities for students to develop their photography skills and showcase their work.",
      university_description:
        "Public university in Arizona with an active student-led photography scene.",
    },
    {
      name: "UW Cinema Society",
      university: "University of Washington",
      club_description:
        "A student group focused on hosting film screenings, discussions, and creating student films.",
      university_description:
        "Public university in Washington with a vibrant media and film production community.",
    },
    {
      name: "UVA Photography Club",
      university: "University of Virginia",
      club_description:
        "A club for students passionate about photography, offering workshops and exhibitions.",
      university_description:
        "Public university in Virginia with an active creative arts community.",
    },
    {
      name: "SMU Film Society",
      university: "Southern Methodist University",
      club_description:
        "A student organization promoting film appreciation and student-led film productions.",
      university_description:
        "Private university in Texas with a strong focus on media and film production.",
    },
    {
      name: "GW Film Society",
      university: "George Washington University",
      club_description:
        "Hosts film screenings, discussions, and supports student filmmakers.",
      university_description:
        "Private university in Washington, D.C., with a vibrant film community.",
    },
    {
      name: "Fordham Film Collective",
      university: "Fordham University",
      club_description:
        "A student group promoting film production and appreciation through events and collaborations.",
      university_description:
        "Private university in New York City with a strong student-led film scene.",
    },
    {
      name: "IU Photography Club",
      university: "Indiana University Bloomington",
      club_description:
        "A student organization offering resources, workshops, and opportunities to showcase photography.",
      university_description:
        "Public university in Indiana with a vibrant photography and visual arts community.",
    },
    {
      name: "Miami University Film Society",
      university: "Miami University",
      club_description:
        "Promotes film appreciation through screenings and discussions, and supports student filmmaking.",
      university_description:
        "Public university in Ohio with a dynamic film and creative arts scene.",
    },
    {
      name: "UMD Film Club",
      university: "University of Maryland, College Park",
      club_description:
        "A student-run club dedicated to film screenings, discussions, and producing student films.",
      university_description:
        "Public university with a large student-led film and media community.",
    },
    {
      name: "CU Boulder Photography Club",
      university: "University of Colorado Boulder",
      club_description:
        "A club offering opportunities to improve photography skills through workshops and exhibitions.",
      university_description:
        "Public university in Colorado with a vibrant student photography community.",
    },
    {
      name: "Temple Film and Media Arts Society",
      university: "Temple University",
      club_description:
        "A student group focused on promoting film screenings, discussions, and student filmmaking.",
      university_description:
        "Public university in Philadelphia with a strong media and arts program.",
    },
    {
      name: "Texas A&M Photography Club",
      university: "Texas A&M University",
      club_description:
        "Offers students a platform to develop their photography skills and share their work.",
      university_description:
        "Public university in Texas with a strong visual arts and photography community.",
    },
    {
      name: "Clemson Film Society",
      university: "Clemson University",
      club_description:
        "A student organization hosting film screenings, discussions, and supporting student filmmakers.",
      university_description:
        "Public university in South Carolina with a growing film and arts scene.",
    },
    {
      name: "University of Delaware Photography Club",
      university: "University of Delaware",
      club_description:
        "A club dedicated to exploring photography through workshops, exhibitions, and critiques.",
      university_description:
        "Public university in Delaware with a vibrant student photography community.",
    },
    {
      name: "University of Kentucky Film Collective",
      university: "University of Kentucky",
      club_description:
        "A club for students interested in film screenings, discussions, and creating student films.",
      university_description:
        "Public university in Kentucky with an active student-run film and media scene.",
    },
    {
      name: "Marquette Film and Photography Society",
      university: "Marquette University",
      club_description:
        "A student group promoting both film and photography through events and collaborations.",
      university_description:
        "Private Catholic university in Wisconsin with a growing media arts scene.",
    },
    {
      name: "Rutgers Film Club",
      university: "Rutgers University",
      club_description:
        "A club focused on promoting film appreciation through screenings and student film productions.",
      university_description:
        "Public university in New Jersey with a dynamic student-led film and media community.",
    },
    {
      name: "University of Alabama Photography Club",
      university: "University of Alabama",
      club_description:
        "A club offering workshops and exhibitions for students passionate about photography.",
      university_description:
        "Public university in Alabama with a growing photography and creative arts community.",
    },
    {
      name: "Florida State Film Society",
      university: "Florida State University",
      club_description:
        "A student-run organization focused on film appreciation, screenings, and student filmmaking.",
      university_description:
        "Public university in Florida with a prestigious film school.",
    },
    {
      name: "Michigan State Photography Club",
      university: "Michigan State University",
      club_description:
        "A club dedicated to improving photography skills through workshops and photo critiques.",
      university_description:
        "Public university in Michigan with a vibrant student photography scene.",
    },
  ],
  roboticsClubs: [
    {
      name: "MIT Robotics Club",
      university: "Massachusetts Institute of Technology",
      club_description:
        "Focuses on developing and programming advanced robots for various applications.",
      university_description:
        "Ivy League university known for its leading-edge technology and robotics research.",
    },
    {
      name: "Stanford Robotics Club",
      university: "Stanford University",
      club_description:
        "Engages in robotics projects, competitions, and workshops for students of all levels.",
      university_description:
        "Private university in California with a strong emphasis on engineering and robotics.",
    },
    {
      name: "UC Berkeley Robotics Club",
      university: "University of California, Berkeley",
      club_description:
        "Supports robotics research and competitions, offering hands-on projects and learning experiences.",
      university_description:
        "Public university in California with a renowned robotics and engineering program.",
    },
    {
      name: "Carnegie Mellon Robotics Club",
      university: "Carnegie Mellon University",
      club_description:
        "Provides opportunities for students to work on robotics projects and participate in competitions.",
      university_description:
        "Private university in Pennsylvania known for its top-ranked robotics and AI programs.",
    },
    {
      name: "Georgia Tech Robotics Club",
      university: "Georgia Institute of Technology",
      club_description:
        "Promotes robotics research, competitions, and student-led projects.",
      university_description:
        "Public university in Georgia with a prestigious engineering and robotics program.",
    },
    {
      name: "University of Michigan Robotics Club",
      university: "University of Michigan",
      club_description:
        "Offers a platform for students to engage in robotics research and competitions.",
      university_description:
        "Public university with a strong focus on engineering and robotics innovations.",
    },
    {
      name: "University of Illinois Robotics Club",
      university: "University of Illinois Urbana-Champaign",
      club_description:
        "Involves students in robotics projects and competitions, providing hands-on experience.",
      university_description:
        "Public university in Illinois with a well-regarded engineering and robotics program.",
    },
    {
      name: "Purdue Robotics Club",
      university: "Purdue University",
      club_description:
        "Supports robotics research and student projects, with a focus on practical applications.",
      university_description:
        "Public university in Indiana known for its engineering and robotics expertise.",
    },
    {
      name: "Harvard Robotics Club",
      university: "Harvard University",
      club_description:
        "Provides resources and support for students interested in robotics and related technologies.",
      university_description:
        "Ivy League university with a growing focus on robotics and engineering.",
    },
    {
      name: "University of Texas Robotics Club",
      university: "University of Texas at Austin",
      club_description:
        "Focuses on robotics projects, competitions, and research opportunities for students.",
      university_description:
        "Public university with a strong emphasis on engineering and robotics.",
    },
    {
      name: "University of California, San Diego Robotics Club",
      university: "University of California, San Diego",
      club_description:
        "Encourages robotics innovation through projects, workshops, and competitions.",
      university_description:
        "Public university with a notable engineering and robotics research program.",
    },
    {
      name: "University of Washington Robotics Club",
      university: "University of Washington",
      club_description:
        "Offers hands-on experience with robotics through student-led projects and competitions.",
      university_description:
        "Public university in Washington with a strong robotics and engineering focus.",
    },
    {
      name: "University of Southern California Robotics Club",
      university: "University of Southern California",
      club_description:
        "Provides opportunities for students to work on robotics projects and participate in research.",
      university_description:
        "Private university in California known for its engineering and robotics programs.",
    },
    {
      name: "Northwestern Robotics Club",
      university: "Northwestern University",
      club_description:
        "Engages students in robotics research, competitions, and hands-on projects.",
      university_description:
        "Private university with a strong focus on engineering and robotics.",
    },
    {
      name: "University of Florida Robotics Club",
      university: "University of Florida",
      club_description:
        "Supports student robotics projects and competitions, offering practical experience.",
      university_description:
        "Public university with a strong emphasis on engineering and robotics.",
    },
    {
      name: "University of Pennsylvania Robotics Club",
      university: "University of Pennsylvania",
      club_description:
        "Encourages student participation in robotics research and competitions.",
      university_description:
        "Ivy League university with a notable engineering and robotics program.",
    },
    {
      name: "University of California, Irvine Robotics Club",
      university: "University of California, Irvine",
      club_description:
        "Provides resources and support for student-led robotics projects and competitions.",
      university_description:
        "Public university in California known for its engineering and robotics research.",
    },
    {
      name: "University of Wisconsin Robotics Club",
      university: "University of Wisconsin-Madison",
      club_description:
        "Engages students in robotics through projects, competitions, and workshops.",
      university_description:
        "Public university with a strong focus on engineering and robotics.",
    },
    {
      name: "University of Colorado Robotics Club",
      university: "University of Colorado Boulder",
      club_description:
        "Offers opportunities for students to participate in robotics projects and research.",
      university_description:
        "Public university with a notable engineering and robotics program.",
    },
    {
      name: "Duke Robotics Club",
      university: "Duke University",
      club_description:
        "Promotes robotics research and student projects, providing hands-on learning experiences.",
      university_description:
        "Private university in North Carolina with a growing robotics and engineering program.",
    },
    {
      name: "University of Maryland Robotics Club",
      university: "University of Maryland, College Park",
      club_description:
        "Supports robotics research and student-led projects with a focus on innovation.",
      university_description:
        "Public university with a strong emphasis on engineering and robotics.",
    },
    {
      name: "University of Arizona Robotics Club",
      university: "University of Arizona",
      club_description:
        "Provides a platform for students to work on robotics projects and participate in competitions.",
      university_description:
        "Public university in Arizona with a notable engineering and robotics focus.",
    },
    {
      name: "University of Illinois Robotics Club",
      university: "University of Illinois Chicago",
      club_description:
        "Engages students in robotics research and hands-on projects.",
      university_description:
        "Public university with a strong focus on engineering and robotics.",
    },
    {
      name: "University of Virginia Robotics Club",
      university: "University of Virginia",
      club_description:
        "Offers opportunities for student involvement in robotics research and projects.",
      university_description:
        "Public university in Virginia with a growing robotics and engineering community.",
    },
    {
      name: "University of Minnesota Robotics Club",
      university: "University of Minnesota",
      club_description:
        "Provides support for student robotics projects, competitions, and research.",
      university_description:
        "Public university with a strong emphasis on engineering and robotics.",
    },
    {
      name: "University of Iowa Robotics Club",
      university: "University of Iowa",
      club_description:
        "Encourages student participation in robotics through projects and competitions.",
      university_description:
        "Public university with a growing focus on robotics and engineering.",
    },
    {
      name: "University of Nebraska Robotics Club",
      university: "University of Nebraska-Lincoln",
      club_description:
        "Supports student robotics projects and competitions, providing hands-on experience.",
      university_description:
        "Public university with a strong engineering and robotics program.",
    },
    {
      name: "University of Oklahoma Robotics Club",
      university: "University of Oklahoma",
      club_description:
        "Promotes robotics research and hands-on projects for students.",
      university_description:
        "Public university with a notable focus on engineering and robotics.",
    },
    {
      name: "University of Tennessee Robotics Club",
      university: "University of Tennessee",
      club_description:
        "Offers a platform for student-led robotics projects and competitions.",
      university_description:
        "Public university with a growing robotics and engineering program.",
    },
    {
      name: "University of Kentucky Robotics Club",
      university: "University of Kentucky",
      club_description:
        "Provides resources and support for student robotics projects and research.",
      university_description:
        "Public university with a strong focus on engineering and robotics.",
    },
    {
      name: "University of Pittsburgh Robotics Club",
      university: "University of Pittsburgh",
      club_description:
        "Engages students in robotics research, projects, and competitions.",
      university_description:
        "Public university with a notable robotics and engineering program.",
    },
    {
      name: "University of South Carolina Robotics Club",
      university: "University of South Carolina",
      club_description:
        "Supports robotics research and student projects with a focus on practical applications.",
      university_description:
        "Public university with a growing emphasis on engineering and robotics.",
    },
    {
      name: "Clemson Robotics Club",
      university: "Clemson University",
      club_description:
        "Promotes robotics research, competitions, and student-led projects.",
      university_description:
        "Public university with a strong focus on engineering and robotics.",
    },
    {
      name: "Rutgers Robotics Club",
      university: "Rutgers University",
      club_description:
        "Offers hands-on experience in robotics through projects and competitions.",
      university_description:
        "Public university in New Jersey with a dynamic robotics and engineering community.",
    },
    {
      name: "Michigan State Robotics Club",
      university: "Michigan State University",
      club_description:
        "Provides opportunities for student involvement in robotics projects and research.",
      university_description:
        "Public university in Michigan with a notable engineering and robotics focus.",
    },
    {
      name: "Washington University Robotics Club",
      university: "Washington University in St. Louis",
      club_description:
        "Supports student robotics projects and competitions with a focus on innovation.",
      university_description:
        "Private university in Missouri with a growing robotics and engineering program.",
    },
    {
      name: "University of Miami Robotics Club",
      university: "University of Miami",
      club_description:
        "Engages students in robotics through research projects, workshops, and competitions.",
      university_description:
        "Private university in Florida with a strong focus on engineering and robotics.",
    },
    {
      name: "University of California, Santa Barbara Robotics Club",
      university: "University of California, Santa Barbara",
      club_description:
        "Provides a platform for student robotics projects and research opportunities.",
      university_description:
        "Public university with a notable emphasis on engineering and robotics.",
    },
    {
      name: "University of Notre Dame Robotics Club",
      university: "University of Notre Dame",
      club_description:
        "Offers opportunities for students to engage in robotics projects and competitions.",
      university_description:
        "Private university with a growing focus on engineering and robotics.",
    },
    {
      name: "University of San Diego Robotics Club",
      university: "University of San Diego",
      club_description:
        "Supports student robotics projects and hands-on experience through workshops and competitions.",
      university_description:
        "Private university in California with a strong engineering and robotics focus.",
    },
    {
      name: "University of Denver Robotics Club",
      university: "University of Denver",
      club_description:
        "Engages students in robotics through hands-on projects and research opportunities.",
      university_description:
        "Private university in Colorado with a growing robotics and engineering program.",
    },
    {
      name: "DePaul University Robotics Club",
      university: "DePaul University",
      club_description:
        "Provides support for student robotics projects and competitions.",
      university_description:
        "Private university in Illinois with a notable focus on engineering and robotics.",
    },
    {
      name: "Santa Clara University Robotics Club",
      university: "Santa Clara University",
      club_description:
        "Offers opportunities for students to participate in robotics projects and research.",
      university_description:
        "Private university in California with a strong focus on engineering and robotics.",
    },
    {
      name: "California State University, Long Beach Robotics Club",
      university: "California State University, Long Beach",
      club_description:
        "Supports student robotics projects and hands-on learning experiences.",
      university_description:
        "Public university in California with a notable engineering and robotics program.",
    },
    {
      name: "University of Central Florida Robotics Club",
      university: "University of Central Florida",
      club_description:
        "Engages students in robotics research, projects, and competitions.",
      university_description:
        "Public university with a strong focus on engineering and robotics.",
    },
    {
      name: "University of Houston Robotics Club",
      university: "University of Houston",
      club_description:
        "Offers hands-on experience and research opportunities in robotics.",
      university_description:
        "Public university with a growing emphasis on engineering and robotics.",
    },
  ],
  modelUnitedNationsClubs: [
    {
      name: "Harvard Model United Nations",
      university: "Harvard University",
      club_description:
        "A prestigious MUN club offering extensive simulations and conferences with a focus on global diplomacy.",
      university_description:
        "Ivy League university known for its rigorous academic programs and influential MUN team.",
    },
    {
      name: "Stanford Model United Nations",
      university: "Stanford University",
      club_description:
        "Engages students in MUN conferences, fostering skills in diplomacy and international relations.",
      university_description:
        "Private university in California renowned for its strong MUN program and global influence.",
    },
    {
      name: "Yale Model United Nations",
      university: "Yale University",
      club_description:
        "Offers a platform for students to participate in high-level MUN simulations and develop negotiation skills.",
      university_description:
        "Ivy League university with a distinguished MUN team and a focus on global issues.",
    },
    {
      name: "University of Chicago Model United Nations",
      university: "University of Chicago",
      club_description:
        "Provides opportunities for students to engage in MUN conferences and enhance their understanding of international relations.",
      university_description:
        "Private university known for its strong MUN presence and academic rigor.",
    },
    {
      name: "Columbia Model United Nations",
      university: "Columbia University",
      club_description:
        "Promotes participation in MUN conferences, offering training and simulations to develop diplomatic skills.",
      university_description:
        "Ivy League university with a prominent MUN program and a global outlook.",
    },
    {
      name: "MIT Model United Nations",
      university: "Massachusetts Institute of Technology",
      club_description:
        "Supports student involvement in MUN conferences and simulations with a focus on technical and diplomatic skills.",
      university_description:
        "Ivy League university renowned for its technical excellence and influential MUN team.",
    },
    {
      name: "University of California, Berkeley Model United Nations",
      university: "University of California, Berkeley",
      club_description:
        "Encourages participation in MUN conferences and fosters skills in diplomacy and international policy.",
      university_description:
        "Public university with a strong emphasis on global issues and a leading MUN program.",
    },
    {
      name: "University of California, Los Angeles Model United Nations",
      university: "University of California, Los Angeles",
      club_description:
        "Provides opportunities for students to engage in MUN simulations and conferences with a focus on international diplomacy.",
      university_description:
        "Public university in California with a notable MUN team and global focus.",
    },
    {
      name: "Georgetown University Model United Nations",
      university: "Georgetown University",
      club_description:
        "Offers training and participation in MUN conferences, emphasizing diplomatic and international relations skills.",
      university_description:
        "Private university in Washington, D.C. known for its strong MUN program and global influence.",
    },
    {
      name: "University of Pennsylvania Model United Nations",
      university: "University of Pennsylvania",
      club_description:
        "Supports student engagement in MUN simulations and conferences, fostering skills in diplomacy and global issues.",
      university_description:
        "Ivy League university with a prominent MUN team and international focus.",
    },
    {
      name: "Duke University Model United Nations",
      university: "Duke University",
      club_description:
        "Encourages student participation in MUN conferences, offering training in international diplomacy and relations.",
      university_description:
        "Private university with a strong MUN program and emphasis on global issues.",
    },
    {
      name: "University of Virginia Model United Nations",
      university: "University of Virginia",
      club_description:
        "Provides a platform for students to engage in MUN conferences and develop diplomatic skills.",
      university_description:
        "Public university with a notable MUN team and focus on international relations.",
    },
    {
      name: "University of Michigan Model United Nations",
      university: "University of Michigan",
      club_description:
        "Promotes student involvement in MUN conferences and simulations with a focus on international diplomacy.",
      university_description:
        "Public university with a strong emphasis on global issues and a leading MUN program.",
    },
    {
      name: "New York University Model United Nations",
      university: "New York University",
      club_description:
        "Offers opportunities for students to participate in MUN conferences and develop skills in diplomacy and international relations.",
      university_description:
        "Private university in New York City with a prominent MUN team and global focus.",
    },
    {
      name: "University of Texas Model United Nations",
      university: "University of Texas at Austin",
      club_description:
        "Supports student participation in MUN conferences and simulations with a focus on diplomacy and global policy.",
      university_description:
        "Public university with a growing MUN program and international outlook.",
    },
    {
      name: "University of North Carolina Model United Nations",
      university: "University of North Carolina at Chapel Hill",
      club_description:
        "Encourages involvement in MUN conferences and provides training in diplomatic skills and international relations.",
      university_description:
        "Public university with a notable MUN team and emphasis on global issues.",
    },
    {
      name: "University of Wisconsin Model United Nations",
      university: "University of Wisconsin-Madison",
      club_description:
        "Provides a platform for students to engage in MUN simulations and conferences, fostering diplomatic skills.",
      university_description:
        "Public university with a strong MUN program and international focus.",
    },
    {
      name: "University of Florida Model United Nations",
      university: "University of Florida",
      club_description:
        "Offers opportunities for students to participate in MUN conferences and develop skills in international diplomacy.",
      university_description:
        "Public university with a growing MUN team and global outlook.",
    },
    {
      name: "University of Arizona Model United Nations",
      university: "University of Arizona",
      club_description:
        "Supports student engagement in MUN simulations and conferences with a focus on diplomatic and global issues.",
      university_description:
        "Public university with a notable MUN program and emphasis on international relations.",
    },
    {
      name: "University of Illinois Model United Nations",
      university: "University of Illinois Urbana-Champaign",
      club_description:
        "Encourages student participation in MUN conferences and provides training in diplomacy and international relations.",
      university_description:
        "Public university with a strong MUN team and focus on global issues.",
    },
    {
      name: "University of Colorado Model United Nations",
      university: "University of Colorado Boulder",
      club_description:
        "Provides a platform for students to engage in MUN conferences and develop skills in diplomacy.",
      university_description:
        "Public university with a growing MUN program and international focus.",
    },
    {
      name: "University of Maryland Model United Nations",
      university: "University of Maryland, College Park",
      club_description:
        "Supports student involvement in MUN simulations and conferences with a focus on global diplomacy.",
      university_description:
        "Public university with a notable MUN team and emphasis on international relations.",
    },
    {
      name: "University of Pittsburgh Model United Nations",
      university: "University of Pittsburgh",
      club_description:
        "Encourages participation in MUN conferences and provides training in diplomatic skills and international relations.",
      university_description:
        "Public university with a strong MUN program and focus on global issues.",
    },
    {
      name: "University of Tennessee Model United Nations",
      university: "University of Tennessee",
      club_description:
        "Offers opportunities for students to engage in MUN simulations and develop skills in diplomacy.",
      university_description:
        "Public university with a growing MUN team and international outlook.",
    },
    {
      name: "University of Georgia Model United Nations",
      university: "University of Georgia",
      club_description:
        "Supports student engagement in MUN conferences and provides training in international diplomacy.",
      university_description:
        "Public university with a notable MUN program and global focus.",
    },
    {
      name: "University of Iowa Model United Nations",
      university: "University of Iowa",
      club_description:
        "Provides a platform for students to participate in MUN simulations and conferences, fostering diplomatic skills.",
      university_description:
        "Public university with a growing MUN program and focus on international relations.",
    },
    {
      name: "University of South Carolina Model United Nations",
      university: "University of South Carolina",
      club_description:
        "Encourages student involvement in MUN conferences and provides training in diplomatic skills.",
      university_description:
        "Public university with a notable MUN team and emphasis on global issues.",
    },
    {
      name: "Clemson University Model United Nations",
      university: "Clemson University",
      club_description:
        "Offers opportunities for students to engage in MUN simulations and conferences with a focus on diplomacy.",
      university_description:
        "Public university with a strong MUN program and international outlook.",
    },
    {
      name: "Rutgers Model United Nations",
      university: "Rutgers University",
      club_description:
        "Supports student participation in MUN conferences and provides training in international diplomacy and relations.",
      university_description:
        "Public university with a growing MUN team and global focus.",
    },
    {
      name: "Michigan State Model United Nations",
      university: "Michigan State University",
      club_description:
        "Provides a platform for students to engage in MUN simulations and develop diplomatic skills.",
      university_description:
        "Public university with a notable MUN program and emphasis on global issues.",
    },
    {
      name: "Washington University Model United Nations",
      university: "Washington University in St. Louis",
      club_description:
        "Encourages student involvement in MUN conferences and provides training in diplomacy and international relations.",
      university_description:
        "Private university with a strong MUN team and international focus.",
    },
    {
      name: "University of San Diego Model United Nations",
      university: "University of San Diego",
      club_description:
        "Supports student engagement in MUN simulations and conferences, fostering diplomatic skills.",
      university_description:
        "Private university with a notable MUN program and global outlook.",
    },
    {
      name: "Santa Clara University Model United Nations",
      university: "Santa Clara University",
      club_description:
        "Offers opportunities for students to participate in MUN conferences and develop skills in international diplomacy.",
      university_description:
        "Private university with a strong MUN team and emphasis on global issues.",
    },
    {
      name: "University of Denver Model United Nations",
      university: "University of Denver",
      club_description:
        "Provides a platform for student involvement in MUN simulations and conferences.",
      university_description:
        "Private university with a notable MUN program and focus on international relations.",
    },
    {
      name: "DePaul University Model United Nations",
      university: "DePaul University",
      club_description:
        "Encourages participation in MUN conferences and provides training in diplomatic skills and international policy.",
      university_description:
        "Private university with a strong MUN program and global focus.",
    },
    {
      name: "University of Miami Model United Nations",
      university: "University of Miami",
      club_description:
        "Supports student engagement in MUN conferences and simulations, fostering diplomatic skills.",
      university_description:
        "Private university with a growing MUN team and emphasis on international relations.",
    },
    {
      name: "University of Notre Dame Model United Nations",
      university: "University of Notre Dame",
      club_description:
        "Offers opportunities for students to engage in MUN simulations and conferences with a focus on diplomacy.",
      university_description:
        "Private university with a notable MUN program and global outlook.",
    },
    {
      name: "Loyola University Model United Nations",
      university: "Loyola University Chicago",
      club_description:
        "Provides a platform for students to participate in MUN conferences and develop diplomatic skills.",
      university_description:
        "Private university with a strong MUN team and emphasis on international relations.",
    },
    {
      name: "University of Tulsa Model United Nations",
      university: "University of Tulsa",
      club_description:
        "Encourages student involvement in MUN simulations and conferences, offering training in diplomacy.",
      university_description:
        "Private university with a notable MUN program and global focus.",
    },
    {
      name: "University of Kansas Model United Nations",
      university: "University of Kansas",
      club_description:
        "Supports student participation in MUN conferences and provides training in international diplomacy and relations.",
      university_description:
        "Public university with a growing MUN team and emphasis on global issues.",
    },
    {
      name: "University of Nebraska Model United Nations",
      university: "University of Nebraska-Lincoln",
      club_description:
        "Provides opportunities for students to engage in MUN simulations and develop diplomatic skills.",
      university_description:
        "Public university with a notable MUN program and international focus.",
    },
    {
      name: "University of Oregon Model United Nations",
      university: "University of Oregon",
      club_description:
        "Encourages participation in MUN conferences and provides training in international diplomacy.",
      university_description:
        "Public university with a growing MUN team and global outlook.",
    },
    {
      name: "University of Rhode Island Model United Nations",
      university: "University of Rhode Island",
      club_description:
        "Supports student engagement in MUN simulations and conferences, fostering diplomatic skills.",
      university_description:
        "Public university with a strong MUN program and emphasis on international relations.",
    },
    {
      name: "Syracuse University Model United Nations",
      university: "Syracuse University",
      club_description:
        "Offers opportunities for students to participate in MUN conferences and develop skills in diplomacy.",
      university_description:
        "Private university with a notable MUN program and global focus.",
    },
    {
      name: "American University Model United Nations",
      university: "American University",
      club_description:
        "Provides a platform for student involvement in MUN simulations and conferences with a focus on diplomacy.",
      university_description:
        "Private university in Washington, D.C. with a strong MUN team and international outlook.",
    },
    {
      name: "University of Dayton Model United Nations",
      university: "University of Dayton",
      club_description:
        "Encourages student participation in MUN conferences and provides training in diplomatic skills and international relations.",
      university_description:
        "Private university with a growing MUN team and global focus.",
    },
    {
      name: "Brandeis University Model United Nations",
      university: "Brandeis University",
      club_description:
        "Supports student engagement in MUN simulations and conferences, fostering diplomatic skills.",
      university_description:
        "Private university with a notable MUN program and emphasis on international relations.",
    },
    {
      name: "Johns Hopkins University Model United Nations",
      university: "Johns Hopkins University",
      club_description:
        "Offers opportunities for students to participate in MUN conferences and develop skills in international diplomacy.",
      university_description:
        "Private university in Baltimore known for its strong MUN program and global focus.",
    },
    {
      name: "University of St. Thomas Model United Nations",
      university: "University of St. Thomas",
      club_description:
        "Provides a platform for student involvement in MUN simulations and conferences.",
      university_description:
        "Private university with a growing MUN team and emphasis on global issues.",
    },
    {
      name: "Wake Forest University Model United Nations",
      university: "Wake Forest University",
      club_description:
        "Encourages participation in MUN conferences and offers training in diplomatic skills and international relations.",
      university_description:
        "Private university with a notable MUN program and global focus.",
    },
    {
      name: "Elon University Model United Nations",
      university: "Elon University",
      club_description:
        "Supports student engagement in MUN simulations and conferences, fostering diplomatic skills.",
      university_description:
        "Private university with a strong MUN team and emphasis on international relations.",
    },
    {
      name: "Fordham University Model United Nations",
      university: "Fordham University",
      club_description:
        "Offers opportunities for students to participate in MUN conferences and develop skills in diplomacy.",
      university_description:
        "Private university with a notable MUN program and global focus.",
    },
    {
      name: "Pepperdine University Model United Nations",
      university: "Pepperdine University",
      club_description:
        "Provides a platform for student involvement in MUN simulations and conferences with a focus on diplomacy.",
      university_description:
        "Private university with a strong MUN team and emphasis on international relations.",
    },
    {
      name: "Santa Clara University Model United Nations",
      university: "Santa Clara University",
      club_description:
        "Supports student engagement in MUN conferences and simulations, fostering diplomatic skills.",
      university_description:
        "Private university with a notable MUN program and global outlook.",
    },
    {
      name: "University of the Pacific Model United Nations",
      university: "University of the Pacific",
      club_description:
        "Encourages participation in MUN conferences and provides training in international diplomacy and relations.",
      university_description:
        "Private university with a growing MUN team and emphasis on global issues.",
    },
    {
      name: "Vanderbilt University Model United Nations",
      university: "Vanderbilt University",
      club_description:
        "Offers opportunities for students to engage in MUN simulations and conferences with a focus on diplomacy.",
      university_description:
        "Private university with a notable MUN program and international focus.",
    },
    {
      name: "University of Vermont Model United Nations",
      university: "University of Vermont",
      club_description:
        "Provides a platform for students to participate in MUN simulations and develop diplomatic skills.",
      university_description:
        "Public university with a growing MUN team and emphasis on global issues.",
    },
  ],
  quizAndTriviaClubs: [
    {
      name: "Harvard Quiz Bowl",
      university: "Harvard University",
      club_description:
        "Engages students in competitive quiz bowl tournaments and trivia competitions, focusing on diverse topics.",
      university_description:
        "Ivy League university known for its rigorous academic environment and competitive quiz bowl team.",
    },
    {
      name: "Stanford Quiz Club",
      university: "Stanford University",
      club_description:
        "Hosts trivia nights and participates in national quiz bowl competitions, fostering knowledge across various subjects.",
      university_description:
        "Private university in California with a strong emphasis on academic excellence and a vibrant quiz club.",
    },
    {
      name: "Yale Trivia Society",
      university: "Yale University",
      club_description:
        "Organizes trivia contests and quiz competitions, encouraging students to showcase their knowledge and teamwork skills.",
      university_description:
        "Ivy League university with a distinguished quiz society and a focus on intellectual engagement.",
    },
    {
      name: "University of Chicago Quiz Bowl",
      university: "University of Chicago",
      club_description:
        "Provides opportunities for students to participate in quiz bowl tournaments and trivia games with a focus on broad topics.",
      university_description:
        "Private university known for its challenging academic programs and competitive quiz bowl team.",
    },
    {
      name: "Columbia University Trivia Club",
      university: "Columbia University",
      club_description:
        "Offers trivia competitions and quiz events, fostering a community of trivia enthusiasts and knowledge seekers.",
      university_description:
        "Ivy League university with a strong trivia club and a commitment to academic excellence.",
    },
    {
      name: "MIT Quiz Team",
      university: "Massachusetts Institute of Technology",
      club_description:
        "Participates in national and regional quiz bowl tournaments, focusing on a wide range of academic and general knowledge topics.",
      university_description:
        "Ivy League university renowned for its technical expertise and competitive quiz team.",
    },
    {
      name: "University of California, Berkeley Quiz Bowl",
      university: "University of California, Berkeley",
      club_description:
        "Hosts trivia nights and competes in quiz bowl tournaments, encouraging student participation in academic and general knowledge events.",
      university_description:
        "Public university with a strong emphasis on academic achievement and an active quiz bowl team.",
    },
    {
      name: "University of California, Los Angeles Trivia Club",
      university: "University of California, Los Angeles",
      club_description:
        "Organizes trivia competitions and quiz events, providing opportunities for students to test their knowledge and engage in friendly competition.",
      university_description:
        "Public university in California known for its vibrant trivia community and competitive quiz team.",
    },
    {
      name: "Georgetown University Quiz Club",
      university: "Georgetown University",
      club_description:
        "Supports student involvement in quiz bowl tournaments and trivia nights, focusing on academic and general knowledge.",
      university_description:
        "Private university in Washington, D.C. with a notable quiz club and emphasis on intellectual engagement.",
    },
    {
      name: "University of Pennsylvania Quiz Bowl",
      university: "University of Pennsylvania",
      club_description:
        "Offers a platform for students to participate in quiz bowl competitions and trivia events, fostering a love for knowledge.",
      university_description:
        "Ivy League university with a prominent quiz bowl team and a focus on academic excellence.",
    },
    {
      name: "Duke University Trivia Society",
      university: "Duke University",
      club_description:
        "Organizes trivia contests and quiz bowl tournaments, encouraging student participation and teamwork.",
      university_description:
        "Private university with a strong trivia society and commitment to academic engagement.",
    },
    {
      name: "University of Virginia Quiz Bowl",
      university: "University of Virginia",
      club_description:
        "Hosts quiz bowl tournaments and trivia events, providing students with opportunities to showcase their knowledge.",
      university_description:
        "Public university with a notable quiz bowl team and focus on intellectual activities.",
    },
    {
      name: "University of Michigan Quiz Club",
      university: "University of Michigan",
      club_description:
        "Supports student participation in quiz bowl competitions and trivia nights, fostering a competitive and knowledge-driven environment.",
      university_description:
        "Public university with a strong emphasis on academic achievement and an active quiz club.",
    },
    {
      name: "New York University Trivia Team",
      university: "New York University",
      club_description:
        "Offers opportunities for students to engage in trivia competitions and quiz bowl tournaments, focusing on diverse subjects.",
      university_description:
        "Private university in New York City with a vibrant trivia community and competitive quiz team.",
    },
    {
      name: "University of Texas Quiz Bowl",
      university: "University of Texas at Austin",
      club_description:
        "Organizes trivia events and participates in quiz bowl competitions, providing students with opportunities to test their knowledge.",
      university_description:
        "Public university with a growing quiz bowl team and emphasis on academic engagement.",
    },
    {
      name: "University of North Carolina Quiz Club",
      university: "University of North Carolina at Chapel Hill",
      club_description:
        "Supports student involvement in quiz bowl tournaments and trivia nights, fostering a love for knowledge and competition.",
      university_description:
        "Public university with a notable quiz club and commitment to intellectual activities.",
    },
    {
      name: "University of Wisconsin Quiz Bowl",
      university: "University of Wisconsin-Madison",
      club_description:
        "Offers a platform for students to participate in quiz bowl competitions and trivia events, promoting academic excellence.",
      university_description:
        "Public university with a strong quiz bowl team and focus on intellectual engagement.",
    },
    {
      name: "University of Florida Trivia Club",
      university: "University of Florida",
      club_description:
        "Encourages student participation in trivia contests and quiz bowl tournaments, focusing on diverse knowledge areas.",
      university_description:
        "Public university with a growing trivia community and emphasis on academic achievement.",
    },
    {
      name: "University of Arizona Quiz Club",
      university: "University of Arizona",
      club_description:
        "Provides opportunities for students to engage in quiz bowl competitions and trivia nights, fostering intellectual curiosity.",
      university_description:
        "Public university with a notable quiz club and commitment to academic excellence.",
    },
    {
      name: "University of Illinois Quiz Bowl",
      university: "University of Illinois Urbana-Champaign",
      club_description:
        "Organizes trivia events and quiz bowl tournaments, offering a platform for students to test their knowledge.",
      university_description:
        "Public university with a strong emphasis on academic engagement and a competitive quiz bowl team.",
    },
    {
      name: "University of Colorado Quiz Club",
      university: "University of Colorado Boulder",
      club_description:
        "Supports student involvement in quiz bowl competitions and trivia nights, promoting a love for knowledge and competition.",
      university_description:
        "Public university with a notable quiz club and focus on intellectual activities.",
    },
    {
      name: "University of Maryland Quiz Bowl",
      university: "University of Maryland, College Park",
      club_description:
        "Offers opportunities for students to participate in trivia contests and quiz bowl tournaments, encouraging academic excellence.",
      university_description:
        "Public university with a strong quiz bowl team and emphasis on intellectual engagement.",
    },
    {
      name: "University of Pittsburgh Quiz Club",
      university: "University of Pittsburgh",
      club_description:
        "Encourages student participation in quiz bowl competitions and trivia nights, fostering a competitive and knowledge-driven environment.",
      university_description:
        "Public university with a growing quiz club and focus on academic achievement.",
    },
    {
      name: "University of Tennessee Trivia Society",
      university: "University of Tennessee",
      club_description:
        "Organizes trivia events and quiz bowl tournaments, providing students with opportunities to test their knowledge.",
      university_description:
        "Public university with a notable trivia society and emphasis on intellectual engagement.",
    },
    {
      name: "University of Georgia Quiz Bowl",
      university: "University of Georgia",
      club_description:
        "Supports student involvement in quiz bowl competitions and trivia nights, fostering a love for knowledge and competition.",
      university_description:
        "Public university with a strong quiz bowl team and commitment to academic excellence.",
    },
    {
      name: "University of Iowa Quiz Club",
      university: "University of Iowa",
      club_description:
        "Offers a platform for students to engage in trivia contests and quiz bowl tournaments, focusing on diverse knowledge areas.",
      university_description:
        "Public university with a notable quiz club and emphasis on intellectual activities.",
    },
    {
      name: "University of South Carolina Quiz Bowl",
      university: "University of South Carolina",
      club_description:
        "Encourages student participation in quiz bowl competitions and trivia nights, providing opportunities to showcase knowledge.",
      university_description:
        "Public university with a growing quiz bowl team and focus on academic achievement.",
    },
    {
      name: "Clemson University Quiz Club",
      university: "Clemson University",
      club_description:
        "Provides opportunities for students to engage in quiz bowl tournaments and trivia contests, promoting academic excellence.",
      university_description:
        "Public university with a strong trivia community and emphasis on intellectual engagement.",
    },
    {
      name: "Rutgers Quiz Bowl",
      university: "Rutgers University",
      club_description:
        "Supports student involvement in trivia competitions and quiz bowl tournaments, fostering a love for knowledge.",
      university_description:
        "Public university with a notable quiz bowl team and focus on academic achievement.",
    },
    {
      name: "Michigan State Quiz Club",
      university: "Michigan State University",
      club_description:
        "Offers opportunities for students to participate in quiz bowl competitions and trivia events, promoting intellectual curiosity.",
      university_description:
        "Public university with a growing quiz club and emphasis on academic excellence.",
    },
    {
      name: "Washington University Quiz Bowl",
      university: "Washington University in St. Louis",
      club_description:
        "Organizes trivia nights and quiz bowl tournaments, providing students with a platform to test their knowledge.",
      university_description:
        "Private university with a strong quiz bowl team and commitment to intellectual engagement.",
    },
    {
      name: "University of San Diego Trivia Club",
      university: "University of San Diego",
      club_description:
        "Encourages student participation in trivia competitions and quiz bowl events, fostering a competitive and knowledge-driven environment.",
      university_description:
        "Private university with a notable trivia club and emphasis on academic achievement.",
    },
    {
      name: "Santa Clara University Quiz Bowl",
      university: "Santa Clara University",
      club_description:
        "Provides opportunities for students to engage in quiz bowl tournaments and trivia contests, promoting intellectual curiosity.",
      university_description:
        "Private university with a strong quiz bowl team and focus on academic excellence.",
    },
    {
      name: "University of Denver Trivia Club",
      university: "University of Denver",
      club_description:
        "Supports student involvement in trivia competitions and quiz bowl tournaments, fostering a love for knowledge.",
      university_description:
        "Private university with a growing trivia community and emphasis on intellectual activities.",
    },
    {
      name: "American University Quiz Bowl",
      university: "American University",
      club_description:
        "Offers opportunities for students to participate in quiz bowl tournaments and trivia nights, focusing on diverse topics.",
      university_description:
        "Private university in Washington, D.C. with a notable quiz bowl team and commitment to academic engagement.",
    },
    {
      name: "DePaul University Quiz Club",
      university: "DePaul University",
      club_description:
        "Organizes trivia events and quiz bowl competitions, providing students with opportunities to test their knowledge.",
      university_description:
        "Private university with a strong quiz bowl team and emphasis on intellectual activities.",
    },
    {
      name: "University of Miami Quiz Bowl",
      university: "University of Miami",
      club_description:
        "Encourages student participation in quiz bowl tournaments and trivia contests, fostering a competitive and knowledge-driven environment.",
      university_description:
        "Private university with a growing quiz club and commitment to academic excellence.",
    },
    {
      name: "University of Notre Dame Trivia Society",
      university: "University of Notre Dame",
      club_description:
        "Supports student involvement in trivia competitions and quiz bowl tournaments, providing a platform to showcase knowledge.",
      university_description:
        "Private university with a notable trivia society and emphasis on intellectual engagement.",
    },
    {
      name: "Loyola University Chicago Quiz Bowl",
      university: "Loyola University Chicago",
      club_description:
        "Offers opportunities for students to participate in quiz bowl tournaments and trivia nights, focusing on diverse topics.",
      university_description:
        "Private university with a strong quiz bowl team and commitment to academic achievement.",
    },
    {
      name: "University of Tulsa Trivia Club",
      university: "University of Tulsa",
      club_description:
        "Encourages student participation in trivia events and quiz bowl competitions, fostering a love for knowledge.",
      university_description:
        "Private university with a notable trivia club and emphasis on intellectual activities.",
    },
    {
      name: "University of Kansas Quiz Bowl",
      university: "University of Kansas",
      club_description:
        "Provides a platform for students to engage in quiz bowl tournaments and trivia contests, promoting academic excellence.",
      university_description:
        "Public university with a strong quiz bowl team and focus on intellectual engagement.",
    },
    {
      name: "University of Nebraska Quiz Club",
      university: "University of Nebraska-Lincoln",
      club_description:
        "Supports student involvement in quiz bowl competitions and trivia nights, offering opportunities to test knowledge.",
      university_description:
        "Public university with a growing quiz club and emphasis on academic achievement.",
    },
    {
      name: "University of Oregon Quiz Bowl",
      university: "University of Oregon",
      club_description:
        "Offers opportunities for students to participate in trivia contests and quiz bowl tournaments, fostering intellectual curiosity.",
      university_description:
        "Public university with a notable quiz bowl team and commitment to academic excellence.",
    },
    {
      name: "University of Rhode Island Quiz Club",
      university: "University of Rhode Island",
      club_description:
        "Encourages student participation in quiz bowl competitions and trivia nights, providing opportunities to showcase knowledge.",
      university_description:
        "Public university with a strong quiz club and emphasis on intellectual engagement.",
    },
    {
      name: "Syracuse University Trivia Society",
      university: "Syracuse University",
      club_description:
        "Organizes trivia events and quiz bowl tournaments, fostering a competitive and knowledge-driven environment.",
      university_description:
        "Private university with a notable trivia society and commitment to academic achievement.",
    },
    {
      name: "American University Quiz Club",
      university: "American University",
      club_description:
        "Supports student involvement in trivia competitions and quiz bowl tournaments, providing a platform to test knowledge.",
      university_description:
        "Private university with a strong quiz bowl team and focus on intellectual engagement.",
    },
    {
      name: "University of Dayton Trivia Club",
      university: "University of Dayton",
      club_description:
        "Offers opportunities for students to participate in quiz bowl competitions and trivia nights, fostering a love for knowledge.",
      university_description:
        "Private university with a growing trivia club and emphasis on academic excellence.",
    },
    {
      name: "Brandeis University Quiz Bowl",
      university: "Brandeis University",
      club_description:
        "Encourages student participation in trivia events and quiz bowl tournaments, promoting intellectual curiosity.",
      university_description:
        "Private university with a strong quiz bowl team and commitment to academic achievement.",
    },
    {
      name: "Johns Hopkins University Trivia Club",
      university: "Johns Hopkins University",
      club_description:
        "Organizes trivia competitions and quiz bowl events, providing students with opportunities to test their knowledge.",
      university_description:
        "Private university with a notable trivia club and emphasis on intellectual engagement.",
    },
    {
      name: "University of St. Thomas Quiz Bowl",
      university: "University of St. Thomas",
      club_description:
        "Supports student involvement in trivia contests and quiz bowl tournaments, fostering a competitive and knowledge-driven environment.",
      university_description:
        "Private university with a growing quiz bowl team and focus on academic excellence.",
    },
    {
      name: "Wake Forest University Trivia Club",
      university: "Wake Forest University",
      club_description:
        "Offers opportunities for students to participate in quiz bowl tournaments and trivia nights, promoting intellectual curiosity.",
      university_description:
        "Private university with a strong trivia club and emphasis on academic achievement.",
    },
    {
      name: "Elon University Quiz Bowl",
      university: "Elon University",
      club_description:
        "Encourages student participation in trivia competitions and quiz bowl events, providing opportunities to showcase knowledge.",
      university_description:
        "Private university with a notable quiz bowl team and commitment to intellectual engagement.",
    },
    {
      name: "Fordham University Trivia Club",
      university: "Fordham University",
      club_description:
        "Supports student involvement in quiz bowl tournaments and trivia nights, fostering a love for knowledge.",
      university_description:
        "Private university with a growing trivia club and emphasis on academic excellence.",
    },
    {
      name: "Pepperdine University Quiz Bowl",
      university: "Pepperdine University",
      club_description:
        "Organizes trivia contests and quiz bowl tournaments, providing students with opportunities to test their knowledge.",
      university_description:
        "Private university with a strong quiz bowl team and commitment to intellectual engagement.",
    },
    {
      name: "Santa Clara University Trivia Club",
      university: "Santa Clara University",
      club_description:
        "Offers opportunities for students to participate in trivia competitions and quiz bowl events, promoting academic achievement.",
      university_description:
        "Private university with a notable trivia club and emphasis on intellectual activities.",
    },
    {
      name: "University of the Pacific Quiz Bowl",
      university: "University of the Pacific",
      club_description:
        "Encourages student participation in quiz bowl tournaments and trivia contests, fostering a competitive and knowledge-driven environment.",
      university_description:
        "Private university with a strong quiz bowl team and commitment to academic excellence.",
    },
    {
      name: "Vanderbilt University Trivia Club",
      university: "Vanderbilt University",
      club_description:
        "Supports student involvement in trivia competitions and quiz bowl events, providing a platform to test knowledge.",
      university_description:
        "Private university with a notable trivia club and emphasis on intellectual engagement.",
    },
    {
      name: "University of Vermont Quiz Bowl",
      university: "University of Vermont",
      club_description:
        "Organizes trivia contests and quiz bowl tournaments, offering opportunities for students to showcase their knowledge.",
      university_description:
        "Public university with a growing quiz bowl team and commitment to academic excellence.",
    },
  ],
  peerMentoringClubs: [
    {
      name: "Harvard Peer Mentoring Network",
      university: "Harvard University",
      club_description:
        "Provides support and guidance through peer mentoring relationships, focusing on academic and personal development.",
      university_description:
        "Ivy League university known for its commitment to student support and academic excellence.",
    },
    {
      name: "Stanford Peer Mentors",
      university: "Stanford University",
      club_description:
        "Connects students with peer mentors for academic support, career advice, and personal growth.",
      university_description:
        "Private university in California with a strong emphasis on student development and peer mentoring programs.",
    },
    {
      name: "Yale Peer Mentoring Program",
      university: "Yale University",
      club_description:
        "Offers peer mentoring opportunities to help students navigate their academic and personal challenges.",
      university_description:
        "Ivy League university dedicated to fostering student success and providing mentorship.",
    },
    {
      name: "University of Chicago Peer Mentoring",
      university: "University of Chicago",
      club_description:
        "Facilitates peer mentoring relationships to support academic achievement and personal well-being.",
      university_description:
        "Private university known for its rigorous academics and supportive mentoring programs.",
    },
    {
      name: "Columbia Peer Mentoring",
      university: "Columbia University",
      club_description:
        "Connects students with mentors for academic guidance and personal development throughout their college journey.",
      university_description:
        "Ivy League university with a focus on student success and mentoring opportunities.",
    },
    {
      name: "MIT Peer Mentorship Program",
      university: "Massachusetts Institute of Technology",
      club_description:
        "Provides peer mentorship to support students in their academic and personal growth.",
      university_description:
        "Ivy League university renowned for its technical expertise and commitment to student mentoring.",
    },
    {
      name: "University of California, Berkeley Peer Mentors",
      university: "University of California, Berkeley",
      club_description:
        "Offers peer mentoring for academic support, career guidance, and personal development.",
      university_description:
        "Public university with a strong emphasis on student mentorship and academic achievement.",
    },
    {
      name: "University of California, Los Angeles Peer Mentoring",
      university: "University of California, Los Angeles",
      club_description:
        "Connects students with peer mentors to enhance academic performance and personal growth.",
      university_description:
        "Public university known for its supportive mentoring programs and focus on student success.",
    },
    {
      name: "Georgetown Peer Mentoring Program",
      university: "Georgetown University",
      club_description:
        "Facilitates peer mentoring relationships to assist students with academic and personal challenges.",
      university_description:
        "Private university in Washington, D.C. with a strong commitment to student mentoring and support.",
    },
    {
      name: "University of Pennsylvania Peer Mentors",
      university: "University of Pennsylvania",
      club_description:
        "Provides peer mentoring for academic assistance and personal development throughout the college experience.",
      university_description:
        "Ivy League university with a focus on comprehensive student support and mentoring programs.",
    },
    {
      name: "Duke Peer Mentoring Network",
      university: "Duke University",
      club_description:
        "Offers peer mentoring to help students navigate their academic and personal lives effectively.",
      university_description:
        "Private university with a notable peer mentoring network and commitment to student success.",
    },
    {
      name: "University of Virginia Peer Mentoring",
      university: "University of Virginia",
      club_description:
        "Supports students through peer mentoring relationships aimed at academic and personal development.",
      university_description:
        "Public university with a strong emphasis on student mentoring and support systems.",
    },
    {
      name: "University of Michigan Peer Mentors",
      university: "University of Michigan",
      club_description:
        "Connects students with peer mentors to enhance their academic and personal experiences.",
      university_description:
        "Public university with a robust peer mentoring program focused on student success.",
    },
    {
      name: "New York University Peer Mentoring",
      university: "New York University",
      club_description:
        "Provides opportunities for peer mentoring to support students in their academic and personal growth.",
      university_description:
        "Private university in New York City with a strong commitment to student development and mentoring.",
    },
    {
      name: "University of Texas Peer Mentors",
      university: "University of Texas at Austin",
      club_description:
        "Offers peer mentoring for academic support and personal development throughout the university experience.",
      university_description:
        "Public university with a focus on comprehensive student support and mentoring programs.",
    },
    {
      name: "University of North Carolina Peer Mentoring",
      university: "University of North Carolina at Chapel Hill",
      club_description:
        "Facilitates peer mentoring relationships to assist students with their academic and personal challenges.",
      university_description:
        "Public university with a notable peer mentoring program and emphasis on student success.",
    },
    {
      name: "University of Wisconsin Peer Mentors",
      university: "University of Wisconsin-Madison",
      club_description:
        "Supports students through peer mentoring for academic achievement and personal growth.",
      university_description:
        "Public university with a strong peer mentoring network and focus on student development.",
    },
    {
      name: "University of Florida Peer Mentoring",
      university: "University of Florida",
      club_description:
        "Provides peer mentoring opportunities to help students with academic and personal challenges.",
      university_description:
        "Public university with a robust peer mentoring program and emphasis on student support.",
    },
    {
      name: "University of Arizona Peer Mentors",
      university: "University of Arizona",
      club_description:
        "Offers peer mentoring for academic support and personal development throughout the college experience.",
      university_description:
        "Public university with a strong commitment to student success and mentoring opportunities.",
    },
    {
      name: "University of Illinois Peer Mentoring",
      university: "University of Illinois Urbana-Champaign",
      club_description:
        "Connects students with peer mentors to enhance their academic performance and personal growth.",
      university_description:
        "Public university with a focus on comprehensive student support and mentoring programs.",
    },
    {
      name: "University of Colorado Peer Mentors",
      university: "University of Colorado Boulder",
      club_description:
        "Supports student success through peer mentoring relationships aimed at academic and personal development.",
      university_description:
        "Public university with a strong peer mentoring program and emphasis on student achievement.",
    },
    {
      name: "University of Maryland Peer Mentoring",
      university: "University of Maryland, College Park",
      club_description:
        "Facilitates peer mentoring to assist students with academic and personal challenges throughout their university journey.",
      university_description:
        "Public university with a notable peer mentoring program and focus on student support.",
    },
    {
      name: "University of Pittsburgh Peer Mentors",
      university: "University of Pittsburgh",
      club_description:
        "Offers peer mentoring opportunities for academic assistance and personal development.",
      university_description:
        "Public university with a strong emphasis on student mentoring and support systems.",
    },
    {
      name: "University of Tennessee Peer Mentoring",
      university: "University of Tennessee",
      club_description:
        "Provides peer mentoring to support students in their academic and personal growth.",
      university_description:
        "Public university with a growing peer mentoring program and focus on student success.",
    },
    {
      name: "University of Georgia Peer Mentors",
      university: "University of Georgia",
      club_description:
        "Connects students with peer mentors to enhance their academic and personal experiences.",
      university_description:
        "Public university with a notable peer mentoring network and commitment to student development.",
    },
    {
      name: "University of Iowa Peer Mentoring",
      university: "University of Iowa",
      club_description:
        "Supports student success through peer mentoring relationships for academic and personal development.",
      university_description:
        "Public university with a strong peer mentoring program and emphasis on student achievement.",
    },
    {
      name: "University of South Carolina Peer Mentors",
      university: "University of South Carolina",
      club_description:
        "Facilitates peer mentoring for academic support and personal growth throughout the university experience.",
      university_description:
        "Public university with a robust peer mentoring program and focus on student success.",
    },
    {
      name: "Clemson University Peer Mentoring",
      university: "Clemson University",
      club_description:
        "Offers peer mentoring opportunities to assist students with academic and personal challenges.",
      university_description:
        "Public university with a growing peer mentoring network and commitment to student development.",
    },
    {
      name: "Rutgers Peer Mentoring Program",
      university: "Rutgers University",
      club_description:
        "Supports students through peer mentoring relationships aimed at academic and personal growth.",
      university_description:
        "Public university with a notable peer mentoring program and focus on student success.",
    },
    {
      name: "Michigan State Peer Mentors",
      university: "Michigan State University",
      club_description:
        "Provides peer mentoring for academic support and personal development throughout the college experience.",
      university_description:
        "Public university with a strong peer mentoring program and emphasis on student achievement.",
    },
    {
      name: "Washington University Peer Mentoring",
      university: "Washington University in St. Louis",
      club_description:
        "Connects students with peer mentors to enhance their academic performance and personal growth.",
      university_description:
        "Private university with a robust peer mentoring network and commitment to student success.",
    },
    {
      name: "University of San Diego Peer Mentoring",
      university: "University of San Diego",
      club_description:
        "Facilitates peer mentoring to support students in their academic and personal development.",
      university_description:
        "Private university with a notable peer mentoring program and emphasis on student support.",
    },
    {
      name: "Santa Clara University Peer Mentors",
      university: "Santa Clara University",
      club_description:
        "Offers opportunities for peer mentoring to assist students with academic and personal challenges.",
      university_description:
        "Private university with a strong commitment to student success and mentoring programs.",
    },
    {
      name: "University of Denver Peer Mentoring",
      university: "University of Denver",
      club_description:
        "Supports student success through peer mentoring relationships for academic and personal growth.",
      university_description:
        "Private university with a growing peer mentoring network and focus on student achievement.",
    },
    {
      name: "American University Peer Mentors",
      university: "American University",
      club_description:
        "Provides peer mentoring for academic support and personal development throughout the university journey.",
      university_description:
        "Private university with a strong commitment to student development and mentoring programs.",
    },
    {
      name: "DePaul University Peer Mentoring",
      university: "DePaul University",
      club_description:
        "Facilitates peer mentoring relationships to assist students with academic and personal challenges.",
      university_description:
        "Private university with a notable peer mentoring program and focus on student success.",
    },
    {
      name: "University of Miami Peer Mentors",
      university: "University of Miami",
      club_description:
        "Offers peer mentoring opportunities for academic support and personal growth.",
      university_description:
        "Private university with a growing peer mentoring network and emphasis on student achievement.",
    },
    {
      name: "Loyola University Chicago Peer Mentoring",
      university: "Loyola University Chicago",
      club_description:
        "Supports students through peer mentoring relationships for academic and personal development.",
      university_description:
        "Private university with a strong peer mentoring program and commitment to student success.",
    },
    {
      name: "University of Notre Dame Peer Mentors",
      university: "University of Notre Dame",
      club_description:
        "Provides peer mentoring for academic support and personal growth throughout the college experience.",
      university_description:
        "Private university with a notable peer mentoring network and emphasis on student success.",
    },
    {
      name: "Wake Forest Peer Mentoring",
      university: "Wake Forest University",
      club_description:
        "Connects students with peer mentors to enhance their academic and personal experiences.",
      university_description:
        "Private university with a strong commitment to student development and mentoring programs.",
    },
    {
      name: "Elon University Peer Mentoring",
      university: "Elon University",
      club_description:
        "Offers peer mentoring opportunities to assist students with academic and personal challenges.",
      university_description:
        "Private university with a growing peer mentoring network and emphasis on student achievement.",
    },
    {
      name: "Fordham University Peer Mentoring",
      university: "Fordham University",
      club_description:
        "Facilitates peer mentoring relationships to support students with academic and personal development.",
      university_description:
        "Private university with a strong peer mentoring program and commitment to student success.",
    },
    {
      name: "Pepperdine University Peer Mentoring",
      university: "Pepperdine University",
      club_description:
        "Supports students through peer mentoring relationships for academic and personal growth.",
      university_description:
        "Private university with a notable peer mentoring program and focus on student achievement.",
    },
    {
      name: "Santa Clara University Peer Mentoring",
      university: "Santa Clara University",
      club_description:
        "Offers peer mentoring opportunities to assist students with academic and personal challenges.",
      university_description:
        "Private university with a strong commitment to student success and mentoring programs.",
    },
    {
      name: "University of the Pacific Peer Mentoring",
      university: "University of the Pacific",
      club_description:
        "Provides peer mentoring for academic support and personal development throughout the university experience.",
      university_description:
        "Private university with a growing peer mentoring network and emphasis on student achievement.",
    },
    {
      name: "Vanderbilt University Peer Mentoring",
      university: "Vanderbilt University",
      club_description:
        "Connects students with peer mentors to enhance their academic and personal growth.",
      university_description:
        "Private university with a strong commitment to student development and mentoring programs.",
    },
    {
      name: "University of Vermont Peer Mentors",
      university: "University of Vermont",
      club_description:
        "Facilitates peer mentoring relationships to support students with academic and personal challenges.",
      university_description:
        "Public university with a notable peer mentoring program and focus on student success.",
    },
  ],
  outdoorAndAdventureClubs: [
    {
      name: "Harvard Outdoor Adventure Club",
      university: "Harvard University",
      club_description:
        "Organizes outdoor excursions including hiking, camping, and climbing trips.",
      university_description:
        "Ivy League university known for its diverse range of student activities and outdoor adventures.",
    },
    {
      name: "Stanford Adventure Group",
      university: "Stanford University",
      club_description:
        "Offers outdoor adventure opportunities such as backpacking, rock climbing, and wilderness survival.",
      university_description:
        "Private university in California with a focus on outdoor recreation and adventure.",
    },
    {
      name: "Yale Outdoor Activities Club",
      university: "Yale University",
      club_description:
        "Facilitates outdoor activities like hiking, kayaking, and mountaineering.",
      university_description:
        "Ivy League institution known for its active outdoor and adventure programs.",
    },
    {
      name: "University of Chicago Outdoor Club",
      university: "University of Chicago",
      club_description:
        "Provides opportunities for outdoor adventures including camping, trekking, and biking.",
      university_description:
        "Private university known for its diverse extracurricular offerings, including outdoor activities.",
    },
    {
      name: "Columbia University Hiking Club",
      university: "Columbia University",
      club_description:
        "Organizes hiking trips and outdoor adventures in various locations.",
      university_description:
        "Ivy League university with a strong focus on outdoor exploration and student engagement.",
    },
    {
      name: "MIT Outdoor Adventure Society",
      university: "Massachusetts Institute of Technology",
      club_description:
        "Offers a range of outdoor activities including climbing, trekking, and camping.",
      university_description:
        "Renowned for its emphasis on adventure and exploration as part of student life.",
    },
    {
      name: "UC Berkeley Outdoor Club",
      university: "University of California, Berkeley",
      club_description:
        "Facilitates outdoor adventures such as hiking, biking, and camping trips.",
      university_description:
        "Public university with a strong emphasis on environmental and outdoor activities.",
    },
    {
      name: "UCLA Adventure Group",
      university: "University of California, Los Angeles",
      club_description:
        "Provides opportunities for outdoor activities including rock climbing, hiking, and camping.",
      university_description:
        "Public university with a commitment to outdoor recreation and adventure.",
    },
    {
      name: "Georgetown Outdoor Explorers",
      university: "Georgetown University",
      club_description:
        "Organizes trips for hiking, kayaking, and other outdoor adventures.",
      university_description:
        "Private university in Washington, D.C. known for its active student engagement in outdoor activities.",
    },
    {
      name: "University of Pennsylvania Outdoor Club",
      university: "University of Pennsylvania",
      club_description:
        "Offers a variety of outdoor adventures including camping, hiking, and climbing.",
      university_description:
        "Ivy League institution with a strong focus on outdoor activities and student engagement.",
    },
    {
      name: "Duke University Adventure Club",
      university: "Duke University",
      club_description:
        "Facilitates outdoor activities such as trekking, climbing, and camping.",
      university_description:
        "Private university with a commitment to outdoor recreation and student activities.",
    },
    {
      name: "University of Virginia Outdoor Club",
      university: "University of Virginia",
      club_description:
        "Organizes outdoor adventures including hiking, canoeing, and camping.",
      university_description:
        "Public university known for its focus on student engagement and outdoor activities.",
    },
    {
      name: "University of Michigan Outdoor Adventure Club",
      university: "University of Michigan",
      club_description:
        "Offers outdoor adventures such as backpacking, rock climbing, and hiking.",
      university_description:
        "Public university with a strong emphasis on outdoor exploration and student activities.",
    },
    {
      name: "New York University Outdoor Club",
      university: "New York University",
      club_description:
        "Facilitates outdoor activities including hiking, camping, and biking.",
      university_description:
        "Private university with a diverse range of student activities, including outdoor adventures.",
    },
    {
      name: "University of Texas Outdoor Adventures",
      university: "University of Texas at Austin",
      club_description:
        "Organizes outdoor adventures like hiking, rock climbing, and camping trips.",
      university_description:
        "Public university with a focus on student engagement and outdoor exploration.",
    },
    {
      name: "University of North Carolina Adventure Club",
      university: "University of North Carolina at Chapel Hill",
      club_description:
        "Provides opportunities for outdoor activities including hiking, kayaking, and climbing.",
      university_description:
        "Public university with a strong commitment to student involvement in outdoor adventures.",
    },
    {
      name: "University of Wisconsin Outdoor Club",
      university: "University of Wisconsin-Madison",
      club_description:
        "Offers a range of outdoor adventures such as backpacking, climbing, and camping.",
      university_description:
        "Public university known for its emphasis on student engagement in outdoor activities.",
    },
    {
      name: "University of Florida Adventure Club",
      university: "University of Florida",
      club_description:
        "Facilitates outdoor adventures including hiking, kayaking, and camping.",
      university_description:
        "Public university with a strong focus on outdoor activities and student engagement.",
    },
    {
      name: "University of Arizona Outdoor Explorers",
      university: "University of Arizona",
      club_description:
        "Provides opportunities for outdoor activities like hiking, biking, and rock climbing.",
      university_description:
        "Public university with a commitment to outdoor adventure and student development.",
    },
    {
      name: "University of Illinois Outdoor Club",
      university: "University of Illinois Urbana-Champaign",
      club_description:
        "Organizes outdoor adventures such as hiking, camping, and climbing.",
      university_description:
        "Public university with a focus on student engagement and outdoor exploration.",
    },
    {
      name: "University of Colorado Outdoor Club",
      university: "University of Colorado Boulder",
      club_description:
        "Offers outdoor adventures including backpacking, rock climbing, and hiking.",
      university_description:
        "Public university known for its strong emphasis on student involvement in outdoor activities.",
    },
    {
      name: "University of Maryland Outdoor Adventures",
      university: "University of Maryland, College Park",
      club_description:
        "Facilitates outdoor activities like hiking, camping, and climbing trips.",
      university_description:
        "Public university with a strong commitment to student engagement in outdoor adventures.",
    },
    {
      name: "University of Pittsburgh Adventure Club",
      university: "University of Pittsburgh",
      club_description:
        "Provides opportunities for outdoor adventures including hiking, climbing, and camping.",
      university_description:
        "Public university known for its focus on student activities and outdoor exploration.",
    },
    {
      name: "University of Tennessee Outdoor Club",
      university: "University of Tennessee",
      club_description:
        "Organizes outdoor adventures such as hiking, kayaking, and camping.",
      university_description:
        "Public university with a strong emphasis on student engagement in outdoor activities.",
    },
    {
      name: "University of Georgia Adventure Club",
      university: "University of Georgia",
      club_description:
        "Offers opportunities for outdoor adventures including hiking, rock climbing, and camping.",
      university_description:
        "Public university with a commitment to student involvement in outdoor activities.",
    },
    {
      name: "University of Iowa Outdoor Club",
      university: "University of Iowa",
      club_description:
        "Facilitates outdoor activities such as hiking, biking, and camping.",
      university_description:
        "Public university known for its focus on student engagement and outdoor exploration.",
    },
    {
      name: "University of South Carolina Adventure Club",
      university: "University of South Carolina",
      club_description:
        "Provides opportunities for outdoor activities including hiking, climbing, and camping.",
      university_description:
        "Public university with a strong commitment to student development and outdoor adventures.",
    },
    {
      name: "Clemson University Outdoor Club",
      university: "Clemson University",
      club_description:
        "Organizes outdoor adventures such as hiking, kayaking, and camping.",
      university_description:
        "Public university with a focus on student engagement in outdoor activities.",
    },
    {
      name: "Rutgers Outdoor Adventure Club",
      university: "Rutgers University",
      club_description:
        "Offers opportunities for outdoor adventures including rock climbing, hiking, and camping.",
      university_description:
        "Public university known for its strong emphasis on student activities and outdoor exploration.",
    },
    {
      name: "Michigan State Adventure Club",
      university: "Michigan State University",
      club_description:
        "Facilitates outdoor adventures like hiking, camping, and climbing.",
      university_description:
        "Public university with a strong commitment to student engagement in outdoor activities.",
    },
    {
      name: "Washington University Outdoor Club",
      university: "Washington University in St. Louis",
      club_description:
        "Provides opportunities for outdoor adventures such as hiking, biking, and climbing.",
      university_description:
        "Private university known for its focus on student development and outdoor exploration.",
    },
    {
      name: "University of San Diego Outdoor Adventures",
      university: "University of San Diego",
      club_description:
        "Organizes outdoor activities including hiking, camping, and rock climbing.",
      university_description:
        "Private university with a strong commitment to student involvement in outdoor activities.",
    },
    {
      name: "Santa Clara University Adventure Club",
      university: "Santa Clara University",
      club_description:
        "Offers opportunities for outdoor adventures such as hiking, kayaking, and camping.",
      university_description:
        "Private university known for its focus on student engagement in outdoor exploration.",
    },
    {
      name: "University of Denver Outdoor Club",
      university: "University of Denver",
      club_description:
        "Facilitates outdoor activities including hiking, biking, and climbing.",
      university_description:
        "Private university with a strong commitment to student development and outdoor adventures.",
    },
    {
      name: "American University Outdoor Club",
      university: "American University",
      club_description:
        "Provides opportunities for outdoor adventures like hiking, camping, and climbing.",
      university_description:
        "Private university known for its strong emphasis on student activities and outdoor exploration.",
    },
    {
      name: "DePaul University Adventure Club",
      university: "DePaul University",
      club_description:
        "Organizes outdoor activities including hiking, rock climbing, and camping.",
      university_description:
        "Private university with a focus on student engagement in outdoor adventures.",
    },
    {
      name: "University of Miami Outdoor Club",
      university: "University of Miami",
      club_description:
        "Offers opportunities for outdoor adventures such as hiking, biking, and camping.",
      university_description:
        "Private university with a strong commitment to student involvement in outdoor activities.",
    },
    {
      name: "Fordham University Outdoor Explorers",
      university: "Fordham University",
      club_description:
        "Facilitates outdoor activities including hiking, camping, and climbing trips.",
      university_description:
        "Private university with a focus on student engagement in outdoor exploration.",
    },
    {
      name: "Pepperdine University Outdoor Club",
      university: "Pepperdine University",
      club_description:
        "Provides opportunities for outdoor adventures like hiking, kayaking, and camping.",
      university_description:
        "Private university known for its strong commitment to student development and outdoor activities.",
    },
    {
      name: "University of the Pacific Outdoor Club",
      university: "University of the Pacific",
      club_description:
        "Organizes outdoor adventures including hiking, rock climbing, and camping.",
      university_description:
        "Private university with a focus on student engagement in outdoor exploration.",
    },
    {
      name: "Vanderbilt University Adventure Club",
      university: "Vanderbilt University",
      club_description:
        "Offers opportunities for outdoor adventures such as hiking, climbing, and camping.",
      university_description:
        "Private university with a strong commitment to student involvement in outdoor activities.",
    },
    {
      name: "University of Vermont Outdoor Club",
      university: "University of Vermont",
      club_description:
        "Facilitates outdoor activities including hiking, biking, and climbing.",
      university_description:
        "Public university known for its focus on student engagement in outdoor adventures.",
    },
    {
      name: "University of Massachusetts Adventure Club",
      university: "University of Massachusetts Amherst",
      club_description:
        "Provides opportunities for outdoor adventures like hiking, camping, and climbing.",
      university_description:
        "Public university with a strong emphasis on student activities and outdoor exploration.",
    },
    {
      name: "University of Rhode Island Outdoor Club",
      university: "University of Rhode Island",
      club_description:
        "Organizes outdoor activities including hiking, kayaking, and camping.",
      university_description:
        "Public university with a commitment to student involvement in outdoor adventures.",
    },
    {
      name: "University of New Hampshire Adventure Club",
      university: "University of New Hampshire",
      club_description:
        "Offers opportunities for outdoor adventures such as hiking, biking, and climbing.",
      university_description:
        "Public university with a strong focus on student engagement in outdoor activities.",
    },
    {
      name: "University of Maine Outdoor Club",
      university: "University of Maine",
      club_description:
        "Facilitates outdoor activities including hiking, camping, and climbing trips.",
      university_description:
        "Public university known for its commitment to student involvement in outdoor adventures.",
    },
    {
      name: "Syracuse University Adventure Club",
      university: "Syracuse University",
      club_description:
        "Provides opportunities for outdoor adventures like hiking, kayaking, and climbing.",
      university_description:
        "Private university with a strong focus on student engagement in outdoor activities.",
    },
    {
      name: "Boston College Outdoor Explorers",
      university: "Boston College",
      club_description:
        "Organizes outdoor activities including hiking, camping, and climbing.",
      university_description:
        "Private university known for its commitment to student development and outdoor adventures.",
    },
    {
      name: "Ohio State University Outdoor Club",
      university: "Ohio State University",
      club_description:
        "Offers opportunities for outdoor adventures such as hiking, climbing, and camping.",
      university_description:
        "Public university with a strong emphasis on student activities and outdoor exploration.",
    },
    {
      name: "Purdue University Adventure Club",
      university: "Purdue University",
      club_description:
        "Facilitates outdoor activities including hiking, biking, and climbing.",
      university_description:
        "Public university known for its focus on student engagement in outdoor adventures.",
    },
    {
      name: "University of Kentucky Outdoor Club",
      university: "University of Kentucky",
      club_description:
        "Provides opportunities for outdoor adventures like hiking, camping, and climbing.",
      university_description:
        "Public university with a strong commitment to student involvement in outdoor activities.",
    },
    {
      name: "Clemson University Outdoor Club",
      university: "Clemson University",
      club_description:
        "Organizes outdoor activities including hiking, kayaking, and camping.",
      university_description:
        "Public university with a focus on student engagement in outdoor adventures.",
    },
    {
      name: "University of Kansas Adventure Club",
      university: "University of Kansas",
      club_description:
        "Offers opportunities for outdoor adventures such as hiking, rock climbing, and camping.",
      university_description:
        "Public university with a strong emphasis on student activities and outdoor exploration.",
    },
    {
      name: "University of Nebraska Outdoor Club",
      university: "University of Nebraska-Lincoln",
      club_description:
        "Facilitates outdoor activities including hiking, camping, and climbing.",
      university_description:
        "Public university known for its commitment to student engagement in outdoor adventures.",
    },
    {
      name: "Iowa State University Adventure Club",
      university: "Iowa State University",
      club_description:
        "Provides opportunities for outdoor adventures like hiking, biking, and climbing.",
      university_description:
        "Public university with a strong focus on student involvement in outdoor activities.",
    },
    {
      name: "University of Oregon Outdoor Club",
      university: "University of Oregon",
      club_description:
        "Organizes outdoor activities including hiking, camping, and climbing.",
      university_description:
        "Public university known for its emphasis on student engagement in outdoor adventures.",
    },
  ],
  studentGovernmentAndLeadershipClubs: [
    {
      name: "Harvard College Student Government",
      university: "Harvard University",
      club_description:
        "Represents student interests and organizes campus-wide initiatives.",
      university_description:
        "Ivy League university with a strong focus on student leadership and governance.",
    },
    {
      name: "Stanford Associated Students",
      university: "Stanford University",
      club_description:
        "Engages in student advocacy and organizes leadership development programs.",
      university_description:
        "Private university known for its active student government and leadership opportunities.",
    },
    {
      name: "Yale College Council",
      university: "Yale University",
      club_description:
        "Provides a platform for student voices and leads campus initiatives.",
      university_description:
        "Ivy League institution with a robust student government and leadership development programs.",
    },
    {
      name: "University of Chicago Student Government",
      university: "University of Chicago",
      club_description:
        "Works on student advocacy and leadership initiatives across campus.",
      university_description:
        "Private university known for its active student leadership and governance.",
    },
    {
      name: "Columbia University Student Council",
      university: "Columbia University",
      club_description:
        "Represents student interests and coordinates leadership activities.",
      university_description:
        "Ivy League university with a focus on student leadership and campus involvement.",
    },
    {
      name: "MIT Student Government",
      university: "Massachusetts Institute of Technology",
      club_description:
        "Organizes student advocacy efforts and leadership development programs.",
      university_description:
        "Renowned for its emphasis on student governance and leadership activities.",
    },
    {
      name: "UC Berkeley ASUC",
      university: "University of California, Berkeley",
      club_description:
        "Engages in student advocacy and leadership initiatives.",
      university_description:
        "Public university with a strong focus on student government and leadership development.",
    },
    {
      name: "UCLA Associated Students",
      university: "University of California, Los Angeles",
      club_description: "Facilitates student advocacy and leadership programs.",
      university_description:
        "Public university known for its commitment to student leadership and governance.",
    },
    {
      name: "Georgetown University Student Government",
      university: "Georgetown University",
      club_description:
        "Represents student interests and leads campus-wide initiatives.",
      university_description:
        "Private university in Washington, D.C. with an active student government and leadership programs.",
    },
    {
      name: "University of Pennsylvania Student Government",
      university: "University of Pennsylvania",
      club_description:
        "Works on student representation and leadership development across campus.",
      university_description:
        "Ivy League institution with a focus on student leadership and governance.",
    },
    {
      name: "Duke University Student Government",
      university: "Duke University",
      club_description:
        "Organizes student advocacy efforts and leadership activities.",
      university_description:
        "Private university with a commitment to student governance and leadership development.",
    },
    {
      name: "University of Virginia Student Government",
      university: "University of Virginia",
      club_description:
        "Provides a platform for student representation and leadership initiatives.",
      university_description:
        "Public university known for its focus on student leadership and governance.",
    },
    {
      name: "University of Michigan Student Government",
      university: "University of Michigan",
      club_description: "Engages in student advocacy and leadership programs.",
      university_description:
        "Public university with a strong emphasis on student governance and leadership development.",
    },
    {
      name: "New York University Student Government",
      university: "New York University",
      club_description:
        "Facilitates student representation and organizes leadership activities.",
      university_description:
        "Private university with a focus on student leadership and governance.",
    },
    {
      name: "University of Texas Student Government",
      university: "University of Texas at Austin",
      club_description:
        "Represents student interests and leads campus initiatives.",
      university_description:
        "Public university with a strong commitment to student governance and leadership.",
    },
    {
      name: "University of North Carolina Student Government",
      university: "University of North Carolina at Chapel Hill",
      club_description: "Works on student advocacy and leadership development.",
      university_description:
        "Public university with a focus on student representation and governance.",
    },
    {
      name: "University of Wisconsin Student Government",
      university: "University of Wisconsin-Madison",
      club_description:
        "Organizes student representation and leadership initiatives.",
      university_description:
        "Public university with a strong emphasis on student leadership and governance.",
    },
    {
      name: "University of Florida Student Government",
      university: "University of Florida",
      club_description: "Facilitates student advocacy and leadership programs.",
      university_description:
        "Public university with a commitment to student governance and leadership activities.",
    },
    {
      name: "University of Arizona Student Government",
      university: "University of Arizona",
      club_description:
        "Provides a platform for student representation and leadership.",
      university_description:
        "Public university known for its focus on student governance and leadership development.",
    },
    {
      name: "University of Illinois Student Government",
      university: "University of Illinois Urbana-Champaign",
      club_description:
        "Engages in student advocacy and leadership activities.",
      university_description:
        "Public university with a strong emphasis on student representation and governance.",
    },
    {
      name: "University of Colorado Student Government",
      university: "University of Colorado Boulder",
      club_description:
        "Organizes student representation and leadership programs.",
      university_description:
        "Public university with a focus on student governance and leadership development.",
    },
    {
      name: "University of Maryland Student Government",
      university: "University of Maryland, College Park",
      club_description:
        "Facilitates student advocacy and leadership initiatives.",
      university_description:
        "Public university known for its commitment to student governance and leadership activities.",
    },
    {
      name: "University of Pittsburgh Student Government",
      university: "University of Pittsburgh",
      club_description:
        "Represents student interests and leads leadership development programs.",
      university_description:
        "Public university with a strong focus on student engagement and governance.",
    },
    {
      name: "University of Tennessee Student Government",
      university: "University of Tennessee",
      club_description:
        "Works on student representation and leadership initiatives.",
      university_description:
        "Public university known for its emphasis on student governance and leadership development.",
    },
    {
      name: "University of Georgia Student Government",
      university: "University of Georgia",
      club_description:
        "Provides a platform for student advocacy and leadership.",
      university_description:
        "Public university with a focus on student representation and governance.",
    },
    {
      name: "University of Iowa Student Government",
      university: "University of Iowa",
      club_description:
        "Organizes student representation and leadership activities.",
      university_description:
        "Public university with a commitment to student engagement in governance.",
    },
    {
      name: "University of South Carolina Student Government",
      university: "University of South Carolina",
      club_description:
        "Facilitates student advocacy and leadership development.",
      university_description:
        "Public university with a strong focus on student governance and representation.",
    },
    {
      name: "Clemson University Student Government",
      university: "Clemson University",
      club_description:
        "Represents student interests and leads leadership initiatives.",
      university_description:
        "Public university with a focus on student engagement and governance.",
    },
    {
      name: "Rutgers Student Government",
      university: "Rutgers University",
      club_description:
        "Engages in student advocacy and organizes leadership activities.",
      university_description:
        "Public university known for its emphasis on student representation and governance.",
    },
    {
      name: "Michigan State Student Government",
      university: "Michigan State University",
      club_description:
        "Provides opportunities for student representation and leadership development.",
      university_description:
        "Public university with a strong commitment to student governance and activities.",
    },
    {
      name: "Washington University Student Government",
      university: "Washington University in St. Louis",
      club_description:
        "Organizes student advocacy efforts and leadership programs.",
      university_description:
        "Private university known for its focus on student engagement and governance.",
    },
    {
      name: "University of San Diego Student Government",
      university: "University of San Diego",
      club_description:
        "Facilitates student representation and leadership development.",
      university_description:
        "Private university with a strong commitment to student governance and activities.",
    },
    {
      name: "Santa Clara University Student Government",
      university: "Santa Clara University",
      club_description:
        "Represents student interests and organizes leadership initiatives.",
      university_description:
        "Private university known for its emphasis on student leadership and governance.",
    },
    {
      name: "University of Denver Student Government",
      university: "University of Denver",
      club_description:
        "Provides opportunities for student advocacy and leadership development.",
      university_description:
        "Private university with a strong focus on student governance and representation.",
    },
    {
      name: "American University Student Government",
      university: "American University",
      club_description:
        "Engages in student representation and organizes leadership activities.",
      university_description:
        "Private university with a commitment to student governance and leadership.",
    },
    {
      name: "DePaul University Student Government",
      university: "DePaul University",
      club_description: "Facilitates student advocacy and leadership programs.",
      university_description:
        "Private university known for its focus on student engagement and governance.",
    },
    {
      name: "University of Miami Student Government",
      university: "University of Miami",
      club_description:
        "Represents student interests and leads leadership development efforts.",
      university_description:
        "Private university with a strong commitment to student governance and activities.",
    },
    {
      name: "Fordham University Student Government",
      university: "Fordham University",
      club_description:
        "Organizes student advocacy and leadership initiatives.",
      university_description:
        "Private university known for its focus on student representation and governance.",
    },
    {
      name: "Pepperdine University Student Government",
      university: "Pepperdine University",
      club_description:
        "Provides opportunities for student representation and leadership development.",
      university_description:
        "Private university with a commitment to student governance and engagement.",
    },
    {
      name: "University of the Pacific Student Government",
      university: "University of the Pacific",
      club_description:
        "Facilitates student advocacy and organizes leadership programs.",
      university_description:
        "Private university with a focus on student governance and leadership activities.",
    },
    {
      name: "Vanderbilt University Student Government",
      university: "Vanderbilt University",
      club_description:
        "Represents student interests and leads leadership development programs.",
      university_description:
        "Private university known for its emphasis on student engagement and governance.",
    },
    {
      name: "University of Vermont Student Government",
      university: "University of Vermont",
      club_description:
        "Engages in student representation and leadership initiatives.",
      university_description:
        "Public university with a strong focus on student governance and activities.",
    },
    {
      name: "University of Massachusetts Student Government",
      university: "University of Massachusetts Amherst",
      club_description:
        "Organizes student advocacy and leadership development programs.",
      university_description:
        "Public university with a commitment to student governance and representation.",
    },
    {
      name: "University of Rhode Island Student Government",
      university: "University of Rhode Island",
      club_description:
        "Facilitates student representation and leadership initiatives.",
      university_description:
        "Public university with a focus on student engagement and governance.",
    },
    {
      name: "University of New Hampshire Student Government",
      university: "University of New Hampshire",
      club_description:
        "Provides opportunities for student advocacy and leadership development.",
      university_description:
        "Public university known for its emphasis on student governance and activities.",
    },
    {
      name: "University of Maine Student Government",
      university: "University of Maine",
      club_description:
        "Represents student interests and leads leadership programs.",
      university_description:
        "Public university with a strong commitment to student governance and representation.",
    },
    {
      name: "Syracuse University Student Government",
      university: "Syracuse University",
      club_description:
        "Organizes student advocacy and leadership initiatives.",
      university_description:
        "Private university known for its focus on student representation and governance.",
    },
    {
      name: "Boston College Student Government",
      university: "Boston College",
      club_description:
        "Facilitates student representation and leadership activities.",
      university_description:
        "Private university with a strong emphasis on student governance and leadership.",
    },
    {
      name: "Ohio State University Student Government",
      university: "Ohio State University",
      club_description:
        "Provides opportunities for student advocacy and leadership development.",
      university_description:
        "Public university with a commitment to student governance and engagement.",
    },
    {
      name: "Purdue University Student Government",
      university: "Purdue University",
      club_description:
        "Represents student interests and organizes leadership initiatives.",
      university_description:
        "Public university known for its focus on student engagement and governance.",
    },
    {
      name: "University of Kentucky Student Government",
      university: "University of Kentucky",
      club_description: "Engages in student advocacy and leadership programs.",
      university_description:
        "Public university with a strong emphasis on student governance and activities.",
    },
    {
      name: "Clemson University Student Government",
      university: "Clemson University",
      club_description:
        "Facilitates student representation and leadership development.",
      university_description:
        "Public university with a commitment to student governance and engagement.",
    },
    {
      name: "University of Kansas Student Government",
      university: "University of Kansas",
      club_description:
        "Organizes student advocacy and leadership initiatives.",
      university_description:
        "Public university with a focus on student representation and governance.",
    },
    {
      name: "University of Nebraska Student Government",
      university: "University of Nebraska-Lincoln",
      club_description:
        "Represents student interests and leads leadership development programs.",
      university_description:
        "Public university known for its emphasis on student governance and engagement.",
    },
    {
      name: "Iowa State University Student Government",
      university: "Iowa State University",
      club_description:
        "Provides opportunities for student advocacy and leadership development.",
      university_description:
        "Public university with a strong focus on student representation and governance.",
    },
    {
      name: "University of Oregon Student Government",
      university: "University of Oregon",
      club_description:
        "Facilitates student representation and leadership initiatives.",
      university_description:
        "Public university with a commitment to student governance and activities.",
    },
  ],
  charityAndFundraisingClubs: [
    {
      name: "Harvard College Philanthropy",
      university: "Harvard University",
      club_description:
        "Organizes fundraising events and charitable activities to support various causes.",
      university_description:
        "Ivy League university with a strong focus on community service and philanthropy.",
    },
    {
      name: "Stanford Students for Charity",
      university: "Stanford University",
      club_description:
        "Facilitates fundraising efforts and volunteer opportunities for local and global causes.",
      university_description:
        "Private university known for its commitment to community service and philanthropy.",
    },
    {
      name: "Yale College Fundraisers",
      university: "Yale University",
      club_description:
        "Engages in fundraising campaigns and charity events to support different nonprofits.",
      university_description:
        "Ivy League institution with a focus on philanthropy and community involvement.",
    },
    {
      name: "University of Chicago Charity League",
      university: "University of Chicago",
      club_description:
        "Organizes charity drives and fundraising activities to benefit various organizations.",
      university_description:
        "Private university known for its emphasis on charitable work and community service.",
    },
    {
      name: "Columbia University Philanthropy Society",
      university: "Columbia University",
      club_description:
        "Coordinates fundraising efforts and charitable events for local and international causes.",
      university_description:
        "Ivy League university with a strong commitment to philanthropy and community support.",
    },
    {
      name: "MIT Charitable Initiatives",
      university: "Massachusetts Institute of Technology",
      club_description:
        "Facilitates fundraising and charity events to support global and local causes.",
      university_description:
        "Renowned for its focus on innovation and philanthropy.",
    },
    {
      name: "UC Berkeley Charity and Fundraising",
      university: "University of California, Berkeley",
      club_description:
        "Organizes charity events and fundraising campaigns to support various nonprofits.",
      university_description:
        "Public university with a strong commitment to community service and charitable work.",
    },
    {
      name: "UCLA Philanthropy Network",
      university: "University of California, Los Angeles",
      club_description:
        "Engages in fundraising activities and charitable events for different causes.",
      university_description:
        "Public university known for its emphasis on community involvement and philanthropy.",
    },
    {
      name: "Georgetown University Charity Group",
      university: "Georgetown University",
      club_description:
        "Coordinates fundraising efforts and charity events to support a range of causes.",
      university_description:
        "Private university in Washington, D.C. with a strong focus on philanthropy and community service.",
    },
    {
      name: "University of Pennsylvania Fundraisers",
      university: "University of Pennsylvania",
      club_description:
        "Organizes charity drives and fundraising campaigns to benefit various organizations.",
      university_description:
        "Ivy League institution with a focus on community involvement and charitable work.",
    },
    {
      name: "Duke University Charity Club",
      university: "Duke University",
      club_description:
        "Facilitates fundraising events and charitable activities to support different causes.",
      university_description:
        "Private university with a strong commitment to philanthropy and community service.",
    },
    {
      name: "University of Virginia Philanthropy",
      university: "University of Virginia",
      club_description:
        "Organizes charity events and fundraising campaigns for local and global causes.",
      university_description:
        "Public university known for its focus on community involvement and charitable work.",
    },
    {
      name: "University of Michigan Philanthropy Society",
      university: "University of Michigan",
      club_description:
        "Engages in fundraising efforts and charity drives to support various nonprofits.",
      university_description:
        "Public university with a strong commitment to philanthropy and community service.",
    },
    {
      name: "New York University Charity Initiative",
      university: "New York University",
      club_description:
        "Coordinates fundraising events and charitable activities for diverse causes.",
      university_description:
        "Private university with a focus on community engagement and philanthropy.",
    },
    {
      name: "University of Texas Charity Group",
      university: "University of Texas at Austin",
      club_description:
        "Organizes charity events and fundraising campaigns to benefit local and global causes.",
      university_description:
        "Public university with a strong commitment to philanthropy and community service.",
    },
    {
      name: "University of North Carolina Philanthropy",
      university: "University of North Carolina at Chapel Hill",
      club_description:
        "Facilitates fundraising efforts and charitable activities for various organizations.",
      university_description:
        "Public university with an emphasis on community involvement and charitable work.",
    },
    {
      name: "University of Wisconsin Fundraising",
      university: "University of Wisconsin-Madison",
      club_description:
        "Engages in charity events and fundraising campaigns to support different causes.",
      university_description:
        "Public university with a focus on philanthropy and community service.",
    },
    {
      name: "University of Florida Philanthropy",
      university: "University of Florida",
      club_description:
        "Organizes charity drives and fundraising initiatives to benefit various nonprofits.",
      university_description:
        "Public university known for its commitment to community engagement and philanthropy.",
    },
    {
      name: "University of Arizona Charity Club",
      university: "University of Arizona",
      club_description:
        "Coordinates fundraising efforts and charity events for local and global causes.",
      university_description:
        "Public university with a strong focus on philanthropy and community service.",
    },
    {
      name: "University of Illinois Fundraisers",
      university: "University of Illinois Urbana-Champaign",
      club_description:
        "Organizes charity events and fundraising campaigns to support different causes.",
      university_description:
        "Public university with a commitment to philanthropy and community involvement.",
    },
    {
      name: "University of Colorado Fundraising",
      university: "University of Colorado Boulder",
      club_description:
        "Facilitates charity drives and fundraising events for various organizations.",
      university_description:
        "Public university known for its focus on community service and philanthropic activities.",
    },
    {
      name: "University of Maryland Philanthropy",
      university: "University of Maryland, College Park",
      club_description:
        "Engages in fundraising efforts and charity events to support local and global causes.",
      university_description:
        "Public university with a strong emphasis on community involvement and philanthropy.",
    },
    {
      name: "University of Pittsburgh Charity Group",
      university: "University of Pittsburgh",
      club_description:
        "Organizes charity drives and fundraising initiatives to benefit various organizations.",
      university_description:
        "Public university with a focus on philanthropy and community service.",
    },
    {
      name: "University of Tennessee Fundraising",
      university: "University of Tennessee",
      club_description:
        "Facilitates charity events and fundraising campaigns for different causes.",
      university_description:
        "Public university with a strong commitment to philanthropy and community engagement.",
    },
    {
      name: "University of Georgia Philanthropy",
      university: "University of Georgia",
      club_description:
        "Coordinates fundraising efforts and charity events to support various nonprofits.",
      university_description:
        "Public university known for its emphasis on community service and philanthropy.",
    },
    {
      name: "University of Iowa Charity Club",
      university: "University of Iowa",
      club_description:
        "Organizes charity drives and fundraising initiatives for local and global causes.",
      university_description:
        "Public university with a focus on philanthropy and community engagement.",
    },
    {
      name: "University of South Carolina Philanthropy",
      university: "University of South Carolina",
      club_description:
        "Facilitates charity events and fundraising campaigns for different causes.",
      university_description:
        "Public university with a strong commitment to community service and philanthropy.",
    },
    {
      name: "Clemson University Charity Initiative",
      university: "Clemson University",
      club_description:
        "Represents student interests through charity events and fundraising efforts.",
      university_description:
        "Public university known for its focus on philanthropy and community involvement.",
    },
    {
      name: "Rutgers Charity Group",
      university: "Rutgers University",
      club_description:
        "Engages in fundraising and charity activities to support various causes.",
      university_description:
        "Public university with a commitment to philanthropy and community service.",
    },
    {
      name: "Michigan State Philanthropy",
      university: "Michigan State University",
      club_description:
        "Organizes charity drives and fundraising campaigns for diverse causes.",
      university_description:
        "Public university with a strong emphasis on philanthropy and community engagement.",
    },
    {
      name: "Washington University Fundraisers",
      university: "Washington University in St. Louis",
      club_description:
        "Facilitates fundraising efforts and charitable activities for local and global causes.",
      university_description:
        "Private university known for its commitment to philanthropy and community service.",
    },
    {
      name: "University of San Diego Philanthropy",
      university: "University of San Diego",
      club_description:
        "Represents student interests through charity events and fundraising initiatives.",
      university_description:
        "Private university with a focus on community service and philanthropy.",
    },
    {
      name: "Santa Clara University Charity Initiative",
      university: "Santa Clara University",
      club_description:
        "Coordinates charity drives and fundraising campaigns for various nonprofits.",
      university_description:
        "Private university known for its commitment to philanthropy and community involvement.",
    },
    {
      name: "University of Denver Charity Group",
      university: "University of Denver",
      club_description:
        "Engages in fundraising efforts and charitable activities to support different causes.",
      university_description:
        "Private university with a strong focus on philanthropy and community service.",
    },
    {
      name: "American University Charity Club",
      university: "American University",
      club_description:
        "Organizes charity events and fundraising initiatives to benefit various organizations.",
      university_description:
        "Private university with a commitment to philanthropy and community engagement.",
    },
    {
      name: "DePaul University Philanthropy",
      university: "DePaul University",
      club_description:
        "Facilitates charity drives and fundraising efforts for local and global causes.",
      university_description:
        "Private university known for its focus on community service and philanthropic activities.",
    },
    {
      name: "University of Miami Fundraisers",
      university: "University of Miami",
      club_description:
        "Represents student interests through fundraising and charity events.",
      university_description:
        "Private university with a strong emphasis on philanthropy and community involvement.",
    },
    {
      name: "Fordham University Charity Initiative",
      university: "Fordham University",
      club_description:
        "Organizes charity drives and fundraising campaigns for diverse causes.",
      university_description:
        "Private university with a commitment to philanthropy and community service.",
    },
    {
      name: "University of Notre Dame Philanthropy",
      university: "University of Notre Dame",
      club_description:
        "Engages in fundraising efforts and charitable activities to support various nonprofits.",
      university_description:
        "Private university known for its focus on community service and philanthropy.",
    },
    {
      name: "Vanderbilt University Charity Group",
      university: "Vanderbilt University",
      club_description:
        "Facilitates charity events and fundraising initiatives for different causes.",
      university_description:
        "Private university with a strong commitment to philanthropy and community service.",
    },
    {
      name: "Emory University Philanthropy",
      university: "Emory University",
      club_description:
        "Coordinates fundraising campaigns and charity events to support various causes.",
      university_description:
        "Private university with a focus on community service and charitable work.",
    },
    {
      name: "University of Richmond Charity Initiative",
      university: "University of Richmond",
      club_description:
        "Organizes charity drives and fundraising efforts to benefit diverse nonprofits.",
      university_description:
        "Private university known for its commitment to philanthropy and community involvement.",
    },
    {
      name: "Oberlin College Philanthropy",
      university: "Oberlin College",
      club_description:
        "Represents student interests through charitable activities and fundraising events.",
      university_description:
        "Private liberal arts college with a focus on philanthropy and community service.",
    },
    {
      name: "Swarthmore College Charity Group",
      university: "Swarthmore College",
      club_description:
        "Engages in charity drives and fundraising campaigns to support various causes.",
      university_description:
        "Private liberal arts college with a strong commitment to philanthropy and community service.",
    },
    {
      name: "Williams College Philanthropy",
      university: "Williams College",
      club_description:
        "Facilitates fundraising events and charitable activities for diverse organizations.",
      university_description:
        "Private liberal arts college known for its focus on community service and philanthropy.",
    },
    {
      name: "Amherst College Charity Initiative",
      university: "Amherst College",
      club_description:
        "Coordinates charity drives and fundraising campaigns to benefit various nonprofits.",
      university_description:
        "Private liberal arts college with a strong emphasis on philanthropy and community service.",
    },
    {
      name: "Wesleyan University Charity Club",
      university: "Wesleyan University",
      club_description:
        "Organizes charity events and fundraising efforts to support different causes.",
      university_description:
        "Private liberal arts college known for its commitment to community service and philanthropy.",
    },
    {
      name: "Reed College Philanthropy",
      university: "Reed College",
      club_description:
        "Engages in fundraising campaigns and charitable activities for various causes.",
      university_description:
        "Private liberal arts college with a strong focus on community service and philanthropy.",
    },
    {
      name: "Bennington College Charity Group",
      university: "Bennington College",
      club_description:
        "Facilitates charity drives and fundraising events to benefit diverse nonprofits.",
      university_description:
        "Private liberal arts college known for its commitment to philanthropy and community service.",
    },
  ],
  healthAndWellnessClubs: [
    {
      name: "Harvard Health and Wellness Club",
      university: "Harvard University",
      club_description:
        "Promotes physical and mental well-being through workshops and fitness activities.",
      university_description:
        "Ivy League university with a focus on holistic student health and wellness.",
    },
    {
      name: "Stanford Wellness Initiative",
      university: "Stanford University",
      club_description:
        "Offers wellness programs and mental health support to improve student well-being.",
      university_description:
        "Private university known for its comprehensive health and wellness resources.",
    },
    {
      name: "Yale Student Wellness Society",
      university: "Yale University",
      club_description:
        "Provides resources and events focused on maintaining mental and physical health.",
      university_description:
        "Ivy League institution with strong support systems for student health and wellness.",
    },
    {
      name: "University of Chicago Health Club",
      university: "University of Chicago",
      club_description:
        "Organizes fitness classes and mental health workshops to promote student wellness.",
      university_description:
        "Private university with a commitment to holistic student health.",
    },
    {
      name: "Columbia University Wellness Network",
      university: "Columbia University",
      club_description:
        "Facilitates wellness activities and provides mental health resources for students.",
      university_description:
        "Ivy League university dedicated to promoting student well-being and health.",
    },
    {
      name: "MIT Wellness Initiative",
      university: "Massachusetts Institute of Technology",
      club_description:
        "Promotes physical fitness and mental health through various wellness programs.",
      university_description:
        "Renowned for its focus on innovation and comprehensive student health resources.",
    },
    {
      name: "UC Berkeley Health and Wellness",
      university: "University of California, Berkeley",
      club_description:
        "Offers a range of wellness programs including fitness classes and mental health support.",
      university_description:
        "Public university with a focus on student health and well-being.",
    },
    {
      name: "UCLA Wellness Collective",
      university: "University of California, Los Angeles",
      club_description:
        "Coordinates wellness events and mental health resources to support student well-being.",
      university_description:
        "Public university known for its extensive health and wellness programs.",
    },
    {
      name: "Georgetown University Health Club",
      university: "Georgetown University",
      club_description:
        "Provides wellness programs and mental health support for a balanced student lifestyle.",
      university_description:
        "Private university with a strong emphasis on student health and wellness.",
    },
    {
      name: "University of Pennsylvania Wellness Society",
      university: "University of Pennsylvania",
      club_description:
        "Facilitates wellness activities and mental health resources to enhance student life.",
      university_description:
        "Ivy League institution with comprehensive support for student well-being.",
    },
    {
      name: "Duke University Health Initiative",
      university: "Duke University",
      club_description:
        "Promotes physical and mental health through wellness programs and support services.",
      university_description:
        "Private university dedicated to fostering student health and wellness.",
    },
    {
      name: "University of Virginia Wellness Group",
      university: "University of Virginia",
      club_description:
        "Offers fitness classes and mental health workshops to support student well-being.",
      university_description:
        "Public university known for its focus on holistic student health.",
    },
    {
      name: "University of Michigan Wellness Club",
      university: "University of Michigan",
      club_description:
        "Organizes wellness activities and provides mental health resources for students.",
      university_description:
        "Public university with a commitment to comprehensive health and wellness programs.",
    },
    {
      name: "New York University Wellness Initiative",
      university: "New York University",
      club_description:
        "Facilitates wellness events and mental health support to improve student quality of life.",
      university_description:
        "Private university with a focus on holistic student health and wellness.",
    },
    {
      name: "University of Texas Wellness Network",
      university: "University of Texas at Austin",
      club_description:
        "Provides fitness programs and mental health resources to support student wellness.",
      university_description:
        "Public university dedicated to enhancing student health and well-being.",
    },
    {
      name: "University of North Carolina Health Club",
      university: "University of North Carolina at Chapel Hill",
      club_description:
        "Organizes wellness programs and mental health initiatives for student support.",
      university_description:
        "Public university with a strong focus on student health and wellness.",
    },
    {
      name: "University of Wisconsin Wellness Society",
      university: "University of Wisconsin-Madison",
      club_description:
        "Offers wellness activities and mental health resources to promote student well-being.",
      university_description:
        "Public university known for its emphasis on holistic student health.",
    },
    {
      name: "University of Florida Wellness Group",
      university: "University of Florida",
      club_description:
        "Facilitates fitness classes and mental health workshops to support student wellness.",
      university_description:
        "Public university with a commitment to comprehensive health and wellness programs.",
    },
    {
      name: "University of Arizona Health Initiative",
      university: "University of Arizona",
      club_description:
        "Promotes physical and mental health through wellness programs and support services.",
      university_description:
        "Public university known for its focus on student health and well-being.",
    },
    {
      name: "University of Illinois Wellness Club",
      university: "University of Illinois Urbana-Champaign",
      club_description:
        "Offers wellness events and mental health resources to support student life.",
      university_description:
        "Public university with a strong commitment to student health and wellness.",
    },
    {
      name: "University of Colorado Wellness Network",
      university: "University of Colorado Boulder",
      club_description:
        "Coordinates wellness programs and mental health support for students.",
      university_description:
        "Public university with a focus on promoting student well-being.",
    },
    {
      name: "University of Maryland Health Club",
      university: "University of Maryland, College Park",
      club_description:
        "Organizes fitness and wellness activities to support student health.",
      university_description:
        "Public university with a strong emphasis on holistic student wellness.",
    },
    {
      name: "University of Pittsburgh Wellness Initiative",
      university: "University of Pittsburgh",
      club_description:
        "Facilitates wellness events and mental health resources for students.",
      university_description:
        "Public university dedicated to comprehensive health and wellness programs.",
    },
    {
      name: "University of Tennessee Wellness Group",
      university: "University of Tennessee",
      club_description:
        "Promotes physical and mental health through various wellness activities.",
      university_description:
        "Public university known for its focus on student health and well-being.",
    },
    {
      name: "University of Georgia Health Club",
      university: "University of Georgia",
      club_description:
        "Offers fitness programs and mental health support for students.",
      university_description:
        "Public university with a strong commitment to holistic student wellness.",
    },
    {
      name: "University of Iowa Wellness Initiative",
      university: "University of Iowa",
      club_description:
        "Facilitates wellness programs and mental health resources for a balanced student lifestyle.",
      university_description:
        "Public university with a focus on comprehensive student health and wellness.",
    },
    {
      name: "University of South Carolina Wellness Club",
      university: "University of South Carolina",
      club_description:
        "Organizes fitness and wellness events to support student well-being.",
      university_description:
        "Public university known for its commitment to student health and wellness.",
    },
    {
      name: "Clemson University Health Initiative",
      university: "Clemson University",
      club_description:
        "Provides wellness activities and mental health support for students.",
      university_description:
        "Public university dedicated to enhancing student well-being and health.",
    },
    {
      name: "Rutgers Wellness Network",
      university: "Rutgers University",
      club_description:
        "Offers wellness programs and mental health resources to promote student health.",
      university_description:
        "Public university with a strong emphasis on holistic student wellness.",
    },
    {
      name: "Michigan State Health Club",
      university: "Michigan State University",
      club_description:
        "Coordinates fitness classes and mental health workshops to support student wellness.",
      university_description:
        "Public university known for its commitment to student health and well-being.",
    },
    {
      name: "Washington University Wellness Society",
      university: "Washington University in St. Louis",
      club_description:
        "Facilitates wellness events and mental health support for students.",
      university_description:
        "Private university with a strong focus on comprehensive student health and wellness.",
    },
    {
      name: "University of San Diego Wellness Initiative",
      university: "University of San Diego",
      club_description:
        "Organizes fitness programs and mental health workshops to support student well-being.",
      university_description:
        "Private university known for its commitment to student health and wellness.",
    },
    {
      name: "Santa Clara University Health Club",
      university: "Santa Clara University",
      club_description:
        "Offers wellness activities and mental health resources for a balanced student lifestyle.",
      university_description:
        "Private university with a focus on holistic student health and wellness.",
    },
    {
      name: "University of Denver Wellness Initiative",
      university: "University of Denver",
      club_description:
        "Coordinates wellness events and mental health support for students.",
      university_description:
        "Private university known for its emphasis on student health and well-being.",
    },
    {
      name: "American University Wellness Club",
      university: "American University",
      club_description:
        "Promotes physical fitness and mental health through various wellness programs.",
      university_description:
        "Private university with a strong commitment to student health and wellness.",
    },
    {
      name: "DePaul University Health Initiative",
      university: "DePaul University",
      club_description:
        "Provides wellness programs and mental health resources to support student well-being.",
      university_description:
        "Private university known for its focus on holistic student health.",
    },
    {
      name: "University of Miami Wellness Society",
      university: "University of Miami",
      club_description:
        "Facilitates wellness activities and mental health support for students.",
      university_description:
        "Private university with a strong commitment to comprehensive student health and wellness.",
    },
    {
      name: "Fordham University Wellness Initiative",
      university: "Fordham University",
      club_description:
        "Organizes fitness classes and mental health workshops to support student well-being.",
      university_description:
        "Private university with a focus on student health and wellness.",
    },
    {
      name: "University of Notre Dame Health Club",
      university: "University of Notre Dame",
      club_description:
        "Offers wellness programs and mental health resources to promote student health.",
      university_description:
        "Private university known for its commitment to holistic student wellness.",
    },
    {
      name: "Vanderbilt University Wellness Group",
      university: "Vanderbilt University",
      club_description:
        "Coordinates fitness and wellness activities to support student well-being.",
      university_description:
        "Private university dedicated to enhancing student health and wellness.",
    },
    {
      name: "Emory University Health Initiative",
      university: "Emory University",
      club_description:
        "Facilitates wellness events and mental health support for students.",
      university_description:
        "Private university with a strong focus on holistic student health.",
    },
    {
      name: "University of Richmond Wellness Club",
      university: "University of Richmond",
      club_description:
        "Provides wellness programs and mental health resources to support student well-being.",
      university_description:
        "Private university known for its emphasis on student health and wellness.",
    },
    {
      name: "Oberlin College Wellness Initiative",
      university: "Oberlin College",
      club_description:
        "Organizes fitness and wellness activities to promote student health.",
      university_description:
        "Private liberal arts college with a strong commitment to student wellness.",
    },
    {
      name: "Swarthmore College Health Club",
      university: "Swarthmore College",
      club_description:
        "Offers wellness programs and mental health support for students.",
      university_description:
        "Private liberal arts college with a focus on holistic student health.",
    },
    {
      name: "Williams College Wellness Society",
      university: "Williams College",
      club_description:
        "Coordinates wellness activities and mental health resources for student well-being.",
      university_description:
        "Private liberal arts college dedicated to promoting student health.",
    },
    {
      name: "Amherst College Health Club",
      university: "Amherst College",
      club_description:
        "Facilitates wellness programs and mental health support for students.",
      university_description:
        "Private liberal arts college with a commitment to comprehensive student health.",
    },
    {
      name: "Wesleyan University Wellness Initiative",
      university: "Wesleyan University",
      club_description:
        "Promotes physical fitness and mental health through various wellness events.",
      university_description:
        "Private liberal arts college with a strong emphasis on student well-being.",
    },
    {
      name: "Reed College Health Group",
      university: "Reed College",
      club_description:
        "Offers wellness programs and mental health resources for students.",
      university_description:
        "Private liberal arts college known for its commitment to holistic student health.",
    },
    {
      name: "Bennington College Wellness Initiative",
      university: "Bennington College",
      club_description:
        "Facilitates fitness and wellness activities to support student well-being.",
      university_description:
        "Private liberal arts college with a focus on comprehensive student health.",
    },
  ],
  foodAndCookingClubs: [
    {
      name: "Harvard Culinary Club",
      university: "Harvard University",
      club_description:
        "Hosts cooking classes and food events to explore diverse cuisines.",
      university_description:
        "Ivy League university with a strong focus on culinary arts and food culture.",
    },
    {
      name: "Stanford Gourmet Society",
      university: "Stanford University",
      club_description:
        "Organizes gourmet cooking events and food tastings for students.",
      university_description:
        "Private university known for its innovative approach to food and cooking.",
    },
    {
      name: "Yale Foodie Club",
      university: "Yale University",
      club_description:
        "Facilitates cooking workshops and food appreciation events for students.",
      university_description:
        "Ivy League institution with a commitment to exploring global cuisines.",
    },
    {
      name: "University of Chicago Culinary Club",
      university: "University of Chicago",
      club_description:
        "Offers cooking classes and food-related activities to enhance culinary skills.",
      university_description:
        "Private university with a focus on food culture and culinary exploration.",
    },
    {
      name: "Columbia University Food Society",
      university: "Columbia University",
      club_description:
        "Coordinates food events and cooking workshops to engage students in culinary arts.",
      university_description:
        "Ivy League university known for its diverse food culture and culinary events.",
    },
    {
      name: "MIT Culinary Club",
      university: "Massachusetts Institute of Technology",
      club_description:
        "Organizes cooking classes and food events to promote culinary skills among students.",
      university_description:
        "Renowned for its focus on technology and innovation, including culinary arts.",
    },
    {
      name: "UC Berkeley Food Collective",
      university: "University of California, Berkeley",
      club_description:
        "Facilitates cooking workshops and food events to celebrate diverse cuisines.",
      university_description:
        "Public university with a strong emphasis on food culture and culinary education.",
    },
    {
      name: "UCLA Cooking Club",
      university: "University of California, Los Angeles",
      club_description:
        "Hosts cooking classes and food-related events to engage students in culinary activities.",
      university_description:
        "Public university known for its vibrant food culture and culinary programs.",
    },
    {
      name: "Georgetown University Culinary Society",
      university: "Georgetown University",
      club_description:
        "Offers food events and cooking classes to explore different culinary traditions.",
      university_description:
        "Private university with a focus on diverse culinary experiences.",
    },
    {
      name: "University of Pennsylvania Food Club",
      university: "University of Pennsylvania",
      club_description:
        "Coordinates cooking workshops and food events for students interested in culinary arts.",
      university_description:
        "Ivy League institution with a commitment to food culture and culinary exploration.",
    },
    {
      name: "Duke University Culinary Initiative",
      university: "Duke University",
      club_description:
        "Organizes food events and cooking classes to enhance students' culinary skills.",
      university_description:
        "Private university known for its focus on diverse food experiences.",
    },
    {
      name: "University of Virginia Food Society",
      university: "University of Virginia",
      club_description:
        "Facilitates cooking classes and food events to celebrate culinary diversity.",
      university_description:
        "Public university with a strong emphasis on food culture and culinary arts.",
    },
    {
      name: "University of Michigan Culinary Club",
      university: "University of Michigan",
      club_description:
        "Hosts food events and cooking workshops to engage students in culinary activities.",
      university_description:
        "Public university with a focus on food culture and culinary skills.",
    },
    {
      name: "New York University Foodie Group",
      university: "New York University",
      club_description:
        "Offers cooking classes and food events to explore various cuisines and culinary techniques.",
      university_description:
        "Private university known for its vibrant food scene and culinary programs.",
    },
    {
      name: "University of Texas Cooking Club",
      university: "University of Texas at Austin",
      club_description:
        "Organizes food events and cooking workshops to celebrate diverse culinary traditions.",
      university_description:
        "Public university with a strong focus on food culture and culinary arts.",
    },
    {
      name: "University of North Carolina Culinary Club",
      university: "University of North Carolina at Chapel Hill",
      club_description:
        "Facilitates cooking classes and food events to enhance culinary skills among students.",
      university_description:
        "Public university known for its commitment to food culture and culinary exploration.",
    },
    {
      name: "University of Wisconsin Food Society",
      university: "University of Wisconsin-Madison",
      club_description:
        "Hosts food events and cooking workshops to engage students in diverse culinary practices.",
      university_description:
        "Public university with a focus on food culture and culinary education.",
    },
    {
      name: "University of Florida Culinary Initiative",
      university: "University of Florida",
      club_description:
        "Offers cooking classes and food events to explore various cuisines and culinary techniques.",
      university_description:
        "Public university with a strong emphasis on food culture and culinary arts.",
    },
    {
      name: "University of Arizona Food Club",
      university: "University of Arizona",
      club_description:
        "Organizes cooking workshops and food events to celebrate diverse culinary traditions.",
      university_description:
        "Public university known for its commitment to food culture and culinary skills.",
    },
    {
      name: "University of Illinois Culinary Society",
      university: "University of Illinois Urbana-Champaign",
      club_description:
        "Facilitates food events and cooking classes to enhance students' culinary skills.",
      university_description:
        "Public university with a focus on food culture and culinary education.",
    },
    {
      name: "University of Colorado Food Collective",
      university: "University of Colorado Boulder",
      club_description:
        "Hosts cooking classes and food-related events to engage students in diverse cuisines.",
      university_description:
        "Public university known for its vibrant food culture and culinary programs.",
    },
    {
      name: "University of Maryland Culinary Club",
      university: "University of Maryland, College Park",
      club_description:
        "Offers food events and cooking workshops to explore various culinary techniques.",
      university_description:
        "Public university with a strong focus on food culture and culinary skills.",
    },
    {
      name: "University of Pittsburgh Food Initiative",
      university: "University of Pittsburgh",
      club_description:
        "Organizes cooking classes and food events to celebrate diverse culinary traditions.",
      university_description:
        "Public university with a commitment to food culture and culinary arts.",
    },
    {
      name: "University of Tennessee Culinary Club",
      university: "University of Tennessee",
      club_description:
        "Facilitates food events and cooking workshops to enhance students' culinary skills.",
      university_description:
        "Public university with a strong emphasis on food culture and culinary education.",
    },
    {
      name: "University of Georgia Food Society",
      university: "University of Georgia",
      club_description:
        "Hosts cooking classes and food-related events to engage students in culinary practices.",
      university_description:
        "Public university known for its commitment to food culture and culinary arts.",
    },
    {
      name: "University of Iowa Culinary Club",
      university: "University of Iowa",
      club_description:
        "Offers food events and cooking workshops to explore diverse cuisines.",
      university_description:
        "Public university with a focus on food culture and culinary skills.",
    },
    {
      name: "University of South Carolina Culinary Initiative",
      university: "University of South Carolina",
      club_description:
        "Organizes cooking classes and food events to celebrate various culinary traditions.",
      university_description:
        "Public university with a strong commitment to food culture and culinary education.",
    },
    {
      name: "Clemson University Food Society",
      university: "Clemson University",
      club_description:
        "Facilitates food events and cooking workshops to enhance culinary skills.",
      university_description:
        "Public university known for its focus on food culture and culinary arts.",
    },
    {
      name: "Rutgers Culinary Club",
      university: "Rutgers University",
      club_description:
        "Offers cooking classes and food events to explore diverse cuisines and culinary techniques.",
      university_description:
        "Public university with a strong commitment to student culinary education.",
    },
    {
      name: "Michigan State Food Initiative",
      university: "Michigan State University",
      club_description:
        "Hosts food events and cooking workshops to celebrate culinary diversity.",
      university_description:
        "Public university known for its focus on food culture and culinary skills.",
    },
    {
      name: "Washington University Culinary Society",
      university: "Washington University in St. Louis",
      club_description:
        "Organizes cooking classes and food-related events to engage students in culinary practices.",
      university_description:
        "Private university with a strong emphasis on food culture and culinary education.",
    },
    {
      name: "University of San Diego Culinary Club",
      university: "University of San Diego",
      club_description:
        "Facilitates cooking workshops and food events to explore various cuisines.",
      university_description:
        "Private university known for its commitment to food culture and culinary skills.",
    },
    {
      name: "Santa Clara University Food Initiative",
      university: "Santa Clara University",
      club_description:
        "Hosts cooking classes and food events to enhance students' culinary skills.",
      university_description:
        "Private university with a focus on culinary arts and food culture.",
    },
    {
      name: "University of Denver Culinary Society",
      university: "University of Denver",
      club_description:
        "Offers food events and cooking workshops to celebrate diverse culinary traditions.",
      university_description:
        "Private university known for its strong focus on food culture and culinary arts.",
    },
    {
      name: "American University Culinary Club",
      university: "American University",
      club_description:
        "Facilitates cooking classes and food events to explore various cuisines and techniques.",
      university_description:
        "Private university with a commitment to culinary arts and food culture.",
    },
    {
      name: "DePaul University Food Society",
      university: "DePaul University",
      club_description:
        "Organizes food events and cooking workshops to enhance culinary skills among students.",
      university_description:
        "Private university known for its focus on diverse culinary experiences.",
    },
    {
      name: "University of Miami Culinary Initiative",
      university: "University of Miami",
      club_description:
        "Hosts cooking classes and food-related events to engage students in culinary practices.",
      university_description:
        "Private university with a strong emphasis on food culture and culinary arts.",
    },
    {
      name: "Fordham University Food Club",
      university: "Fordham University",
      club_description:
        "Facilitates food events and cooking workshops to celebrate diverse cuisines.",
      university_description:
        "Private university with a focus on culinary arts and food culture.",
    },
    {
      name: "Loyola University Chicago Culinary Club",
      university: "Loyola University Chicago",
      club_description:
        "Offers cooking classes and food-related events to explore various culinary traditions.",
      university_description:
        "Private university known for its commitment to food culture and culinary education.",
    },
    {
      name: "Seton Hall University Food Society",
      university: "Seton Hall University",
      club_description:
        "Organizes cooking workshops and food events to enhance culinary skills.",
      university_description:
        "Private university with a focus on diverse culinary experiences.",
    },
    {
      name: "Marquette University Culinary Club",
      university: "Marquette University",
      club_description:
        "Hosts food events and cooking classes to engage students in diverse cuisines.",
      university_description:
        "Private university known for its strong focus on food culture and culinary skills.",
    },
    {
      name: "Creighton University Food Initiative",
      university: "Creighton University",
      club_description:
        "Facilitates cooking workshops and food-related events to enhance students' culinary skills.",
      university_description:
        "Private university with a commitment to food culture and culinary arts.",
    },
    {
      name: "University of Notre Dame Culinary Society",
      university: "University of Notre Dame",
      club_description:
        "Offers cooking classes and food events to explore various cuisines.",
      university_description:
        "Private university with a focus on food culture and culinary education.",
    },
    {
      name: "Villanova University Food Club",
      university: "Villanova University",
      club_description:
        "Hosts food events and cooking workshops to celebrate diverse culinary traditions.",
      university_description:
        "Private university known for its commitment to culinary arts and food culture.",
    },
    {
      name: "University of Hartford Culinary Club",
      university: "University of Hartford",
      club_description:
        "Facilitates cooking classes and food events to explore various cuisines and techniques.",
      university_description:
        "Private university with a focus on food culture and culinary skills.",
    },
    {
      name: "Quinnipiac University Food Society",
      university: "Quinnipiac University",
      club_description:
        "Organizes cooking workshops and food events to enhance culinary skills among students.",
      university_description:
        "Private university with a strong emphasis on food culture and culinary education.",
    },
    {
      name: "Northeastern University Culinary Initiative",
      university: "Northeastern University",
      club_description:
        "Hosts food events and cooking classes to engage students in diverse cuisines.",
      university_description:
        "Private university known for its commitment to food culture and culinary arts.",
    },
    {
      name: "University of Cincinnati Food Club",
      university: "University of Cincinnati",
      club_description:
        "Facilitates cooking workshops and food-related events to explore various culinary traditions.",
      university_description:
        "Public university with a focus on food culture and culinary education.",
    },
    {
      name: "University of Louisville Culinary Society",
      university: "University of Louisville",
      club_description:
        "Offers cooking classes and food events to enhance students' culinary skills.",
      university_description:
        "Public university known for its strong focus on food culture and culinary arts.",
    },
    {
      name: "Baylor University Food Initiative",
      university: "Baylor University",
      club_description:
        "Organizes food events and cooking workshops to celebrate diverse culinary traditions.",
      university_description:
        "Private university with a commitment to food culture and culinary exploration.",
    },
    {
      name: "Oklahoma State Culinary Club",
      university: "Oklahoma State University",
      club_description:
        "Hosts cooking classes and food events to explore various cuisines and techniques.",
      university_description:
        "Public university with a strong focus on food culture and culinary education.",
    },
    {
      name: "Missouri University of Science and Technology Food Society",
      university: "Missouri University of Science and Technology",
      club_description:
        "Facilitates cooking workshops and food-related events to enhance culinary skills.",
      university_description:
        "Public university known for its emphasis on technology and culinary arts.",
    },
    {
      name: "West Virginia University Culinary Club",
      university: "West Virginia University",
      club_description:
        "Offers cooking classes and food events to explore diverse culinary traditions.",
      university_description:
        "Public university with a strong commitment to food culture and culinary skills.",
    },
    {
      name: "University of Alabama Food Society",
      university: "University of Alabama",
      club_description:
        "Organizes food events and cooking workshops to enhance students' culinary skills.",
      university_description:
        "Public university known for its commitment to diverse culinary experiences.",
    },
    {
      name: "University of Mississippi Culinary Initiative",
      university: "University of Mississippi",
      club_description:
        "Hosts cooking classes and food events to explore various cuisines.",
      university_description:
        "Public university with a focus on food culture and culinary education.",
    },
    {
      name: "University of Nebraska Food Club",
      university: "University of Nebraska",
      club_description:
        "Facilitates cooking workshops and food-related events to celebrate diverse culinary traditions.",
      university_description:
        "Public university with a strong emphasis on food culture and culinary skills.",
    },
    {
      name: "University of Kansas Culinary Society",
      university: "University of Kansas",
      club_description:
        "Offers cooking classes and food events to enhance students' culinary skills.",
      university_description:
        "Public university known for its focus on food culture and culinary arts.",
    },
    {
      name: "Iowa State University Food Initiative",
      university: "Iowa State University",
      club_description:
        "Organizes cooking workshops and food-related events to explore diverse cuisines.",
      university_description:
        "Public university with a commitment to food culture and culinary education.",
    },
  ],
  historicalAndArchaeologicalClubs: [
    {
      name: "Harvard Historical Society",
      university: "Harvard University",
      club_description:
        "Explores historical events and archaeological discoveries through lectures and field trips.",
      university_description:
        "Ivy League university with a rich history and strong focus on historical research.",
    },
    {
      name: "Stanford Archaeological Club",
      university: "Stanford University",
      club_description:
        "Engages in archaeological digs and historical studies to uncover ancient artifacts.",
      university_description:
        "Private university known for its commitment to historical and archaeological research.",
    },
    {
      name: "Yale Historical Society",
      university: "Yale University",
      club_description:
        "Organizes events and discussions on historical topics and archaeological findings.",
      university_description:
        "Ivy League institution with a deep focus on history and archaeology.",
    },
    {
      name: "University of Chicago History Club",
      university: "University of Chicago",
      club_description:
        "Hosts lectures and field trips to study historical events and archaeological sites.",
      university_description:
        "Private university renowned for its emphasis on historical and archaeological research.",
    },
    {
      name: "Columbia University Archaeological Society",
      university: "Columbia University",
      club_description:
        "Facilitates archaeological digs and historical research projects.",
      university_description:
        "Ivy League university with a strong focus on historical studies and archaeology.",
    },
    {
      name: "MIT Historical Club",
      university: "Massachusetts Institute of Technology",
      club_description:
        "Organizes historical discussions and archaeological research opportunities for students.",
      university_description:
        "Known for its technological focus, with a strong interest in historical research and archaeology.",
    },
    {
      name: "UC Berkeley Historical Society",
      university: "University of California, Berkeley",
      club_description:
        "Engages students in historical research and archaeological fieldwork.",
      university_description:
        "Public university known for its extensive historical and archaeological programs.",
    },
    {
      name: "UCLA Archaeological Club",
      university: "University of California, Los Angeles",
      club_description:
        "Offers opportunities for archaeological digs and historical research.",
      university_description:
        "Public university with a focus on historical studies and archaeological exploration.",
    },
    {
      name: "Georgetown University History Society",
      university: "Georgetown University",
      club_description:
        "Hosts events and research opportunities related to historical and archaeological studies.",
      university_description:
        "Private university with a strong commitment to historical and archaeological research.",
    },
    {
      name: "University of Pennsylvania Archaeological Society",
      university: "University of Pennsylvania",
      club_description:
        "Organizes field trips and research projects focused on historical and archaeological studies.",
      university_description:
        "Ivy League institution with a deep focus on historical research and archaeology.",
    },
    {
      name: "Duke University Historical Club",
      university: "Duke University",
      club_description:
        "Facilitates discussions and research on historical events and archaeological findings.",
      university_description:
        "Private university known for its strong emphasis on historical and archaeological studies.",
    },
    {
      name: "University of Virginia History Club",
      university: "University of Virginia",
      club_description:
        "Engages in historical research and archaeological exploration through various events.",
      university_description:
        "Public university with a commitment to history and archaeology.",
    },
    {
      name: "University of Michigan Archaeological Society",
      university: "University of Michigan",
      club_description:
        "Hosts archaeological digs and historical research projects for students.",
      university_description:
        "Public university known for its extensive historical and archaeological programs.",
    },
    {
      name: "New York University History Club",
      university: "New York University",
      club_description:
        "Organizes historical discussions and archaeological research opportunities.",
      university_description:
        "Private university with a strong focus on historical studies and archaeology.",
    },
    {
      name: "University of Texas Historical Society",
      university: "University of Texas at Austin",
      club_description:
        "Facilitates historical research and archaeological fieldwork for students.",
      university_description:
        "Public university with a deep interest in historical and archaeological studies.",
    },
    {
      name: "University of North Carolina History Club",
      university: "University of North Carolina at Chapel Hill",
      club_description:
        "Offers opportunities for historical and archaeological research through events and projects.",
      university_description:
        "Public university known for its commitment to history and archaeology.",
    },
    {
      name: "University of Wisconsin Historical Society",
      university: "University of Wisconsin-Madison",
      club_description:
        "Hosts research projects and field trips related to historical and archaeological studies.",
      university_description:
        "Public university with a focus on historical research and archaeological exploration.",
    },
    {
      name: "University of Florida History Club",
      university: "University of Florida",
      club_description:
        "Organizes events and research opportunities in history and archaeology.",
      university_description:
        "Public university with a strong emphasis on historical studies and archaeological research.",
    },
    {
      name: "University of Arizona Archaeological Club",
      university: "University of Arizona",
      club_description:
        "Facilitates archaeological digs and historical research projects for students.",
      university_description:
        "Public university known for its focus on historical and archaeological studies.",
    },
    {
      name: "University of Illinois History Society",
      university: "University of Illinois Urbana-Champaign",
      club_description:
        "Hosts lectures and research opportunities related to history and archaeology.",
      university_description:
        "Public university with a strong commitment to historical and archaeological research.",
    },
    {
      name: "University of Colorado Historical Club",
      university: "University of Colorado Boulder",
      club_description:
        "Organizes historical research projects and archaeological fieldwork for students.",
      university_description:
        "Public university known for its emphasis on history and archaeology.",
    },
    {
      name: "University of Maryland Archaeological Society",
      university: "University of Maryland, College Park",
      club_description:
        "Facilitates archaeological research and historical studies through various events.",
      university_description:
        "Public university with a focus on historical and archaeological research.",
    },
    {
      name: "University of Pittsburgh History Club",
      university: "University of Pittsburgh",
      club_description:
        "Engages students in historical research and archaeological exploration.",
      university_description:
        "Public university known for its commitment to history and archaeological studies.",
    },
    {
      name: "University of Tennessee Historical Society",
      university: "University of Tennessee",
      club_description:
        "Offers research opportunities and field trips related to historical and archaeological studies.",
      university_description:
        "Public university with a strong focus on historical and archaeological research.",
    },
    {
      name: "University of Georgia Archaeological Club",
      university: "University of Georgia",
      club_description:
        "Hosts archaeological digs and historical research events for students.",
      university_description:
        "Public university known for its emphasis on history and archaeology.",
    },
    {
      name: "University of Iowa History Club",
      university: "University of Iowa",
      club_description:
        "Facilitates historical research and archaeological fieldwork through various activities.",
      university_description:
        "Public university with a commitment to historical and archaeological studies.",
    },
    {
      name: "University of South Carolina Historical Society",
      university: "University of South Carolina",
      club_description:
        "Organizes research projects and field trips related to history and archaeology.",
      university_description:
        "Public university with a strong focus on historical and archaeological research.",
    },
    {
      name: "Clemson University Archaeological Club",
      university: "Clemson University",
      club_description:
        "Offers opportunities for archaeological digs and historical research.",
      university_description:
        "Public university known for its focus on history and archaeological studies.",
    },
    {
      name: "Rutgers Historical Society",
      university: "Rutgers University",
      club_description:
        "Hosts historical research events and archaeological field trips for students.",
      university_description:
        "Public university with a strong commitment to historical and archaeological studies.",
    },
    {
      name: "Michigan State History Club",
      university: "Michigan State University",
      club_description:
        "Facilitates historical research and archaeological exploration through various events.",
      university_description:
        "Public university with a focus on history and archaeology.",
    },
    {
      name: "Washington University Archaeological Society",
      university: "Washington University in St. Louis",
      club_description:
        "Organizes archaeological digs and historical research opportunities.",
      university_description:
        "Private university known for its commitment to historical and archaeological studies.",
    },
    {
      name: "University of San Diego Historical Club",
      university: "University of San Diego",
      club_description:
        "Offers opportunities for historical research and archaeological fieldwork.",
      university_description:
        "Private university with a strong focus on history and archaeology.",
    },
    {
      name: "Santa Clara University Archaeological Society",
      university: "Santa Clara University",
      club_description:
        "Facilitates archaeological research and historical studies through various events.",
      university_description:
        "Private university known for its commitment to historical and archaeological research.",
    },
    {
      name: "University of Denver History Club",
      university: "University of Denver",
      club_description:
        "Hosts historical research events and archaeological field trips for students.",
      university_description:
        "Private university with a focus on history and archaeology.",
    },
    {
      name: "American University Archaeological Society",
      university: "American University",
      club_description:
        "Offers opportunities for archaeological digs and historical research.",
      university_description:
        "Private university known for its commitment to historical and archaeological studies.",
    },
    {
      name: "DePaul University Historical Society",
      university: "DePaul University",
      club_description:
        "Organizes research projects and field trips related to history and archaeology.",
      university_description:
        "Private university with a strong focus on historical and archaeological research.",
    },
    {
      name: "University of Miami History Club",
      university: "University of Miami",
      club_description:
        "Facilitates historical research and archaeological exploration through various events.",
      university_description:
        "Private university with a commitment to history and archaeology.",
    },
    {
      name: "Fordham University Archaeological Society",
      university: "Fordham University",
      club_description:
        "Hosts archaeological digs and historical research opportunities for students.",
      university_description:
        "Private university known for its focus on historical and archaeological studies.",
    },
    {
      name: "Loyola University Chicago Historical Club",
      university: "Loyola University Chicago",
      club_description:
        "Organizes historical research projects and archaeological fieldwork.",
      university_description:
        "Private university with a strong emphasis on history and archaeology.",
    },
    {
      name: "Seton Hall University Archaeological Society",
      university: "Seton Hall University",
      club_description:
        "Facilitates archaeological research and historical studies through various activities.",
      university_description:
        "Private university with a focus on history and archaeology.",
    },
    {
      name: "Marquette University History Club",
      university: "Marquette University",
      club_description:
        "Offers opportunities for historical research and archaeological exploration.",
      university_description:
        "Private university known for its commitment to historical and archaeological research.",
    },
    {
      name: "Creighton University Historical Society",
      university: "Creighton University",
      club_description:
        "Hosts research projects and field trips related to history and archaeology.",
      university_description:
        "Private university with a strong focus on historical and archaeological studies.",
    },
    {
      name: "University of Notre Dame Archaeological Society",
      university: "University of Notre Dame",
      club_description:
        "Organizes archaeological digs and historical research events.",
      university_description:
        "Private university with a deep commitment to historical and archaeological studies.",
    },
    {
      name: "Villanova University History Club",
      university: "Villanova University",
      club_description:
        "Facilitates historical research and archaeological fieldwork through various events.",
      university_description:
        "Private university with a focus on history and archaeology.",
    },
    {
      name: "University of Hartford Historical Society",
      university: "University of Hartford",
      club_description:
        "Hosts historical research projects and archaeological digs.",
      university_description:
        "Private university known for its commitment to historical and archaeological research.",
    },
    {
      name: "Quinnipiac University Archaeological Club",
      university: "Quinnipiac University",
      club_description:
        "Offers opportunities for archaeological fieldwork and historical research.",
      university_description:
        "Private university with a strong emphasis on history and archaeology.",
    },
    {
      name: "Northeastern University History Club",
      university: "Northeastern University",
      club_description:
        "Organizes research projects and field trips related to historical and archaeological studies.",
      university_description:
        "Private university known for its focus on history and archaeology.",
    },
    {
      name: "University of Cincinnati Historical Society",
      university: "University of Cincinnati",
      club_description:
        "Facilitates historical research and archaeological exploration through various events.",
      university_description:
        "Public university with a strong commitment to historical and archaeological studies.",
    },
    {
      name: "University of Louisville History Club",
      university: "University of Louisville",
      club_description:
        "Hosts historical research projects and archaeological fieldwork.",
      university_description:
        "Public university known for its focus on history and archaeology.",
    },
    {
      name: "Baylor University Historical Society",
      university: "Baylor University",
      club_description:
        "Offers opportunities for historical research and archaeological exploration.",
      university_description:
        "Private university with a strong commitment to historical and archaeological studies.",
    },
    {
      name: "Oklahoma State Historical Club",
      university: "Oklahoma State University",
      club_description:
        "Facilitates historical research and archaeological fieldwork through various events.",
      university_description:
        "Public university with a focus on history and archaeology.",
    },
    {
      name: "Missouri University of Science and Technology Historical Society",
      university: "Missouri University of Science and Technology",
      club_description:
        "Organizes historical research projects and archaeological studies.",
      university_description:
        "Public university known for its emphasis on historical and archaeological research.",
    },
    {
      name: "West Virginia University History Club",
      university: "West Virginia University",
      club_description:
        "Hosts archaeological digs and historical research opportunities for students.",
      university_description:
        "Public university with a strong commitment to history and archaeology.",
    },
    {
      name: "University of Alabama Historical Society",
      university: "University of Alabama",
      club_description:
        "Offers opportunities for historical research and archaeological exploration.",
      university_description:
        "Public university known for its focus on history and archaeology.",
    },
    {
      name: "University of Mississippi History Club",
      university: "University of Mississippi",
      club_description:
        "Facilitates historical research and archaeological fieldwork through various events.",
      university_description:
        "Public university with a commitment to history and archaeology.",
    },
    {
      name: "University of Nebraska Historical Society",
      university: "University of Nebraska",
      club_description:
        "Organizes research projects and field trips related to historical and archaeological studies.",
      university_description:
        "Public university known for its strong focus on history and archaeology.",
    },
    {
      name: "University of Kansas History Club",
      university: "University of Kansas",
      club_description:
        "Hosts historical research events and archaeological digs for students.",
      university_description:
        "Public university with a focus on history and archaeology.",
    },
    {
      name: "Iowa State University Historical Society",
      university: "Iowa State University",
      club_description:
        "Offers opportunities for historical research and archaeological exploration.",
      university_description:
        "Public university with a strong commitment to history and archaeology.",
    },
  ],
  animalAndPetClubs: [
    {
      name: "UCLA Animal Welfare Club",
      university: "University of California, Los Angeles",
      club_description:
        "Focuses on promoting animal rights and welfare through volunteer work and educational events.",
      university_description:
        "Public university with strong environmental and animal welfare initiatives.",
    },
    {
      name: "University of Florida Pre-Vet Society",
      university: "University of Florida",
      club_description:
        "Offers resources and networking opportunities for students interested in veterinary medicine and animal care.",
      university_description:
        "Public university with a robust program in animal sciences and veterinary studies.",
    },
    {
      name: "Cornell University Pet Lovers Club",
      university: "Cornell University",
      club_description:
        "Provides students with opportunities to engage in pet care, fostering, and animal rescue.",
      university_description:
        "Private Ivy League university known for its veterinary and animal science programs.",
    },
    {
      name: "Texas A&M University Animal Rescue Team",
      university: "Texas A&M University",
      club_description:
        "Dedicated to rescuing animals in need and supporting local shelters.",
      university_description:
        "Public university with one of the top veterinary programs in the country.",
    },
    {
      name: "University of Wisconsin-Madison Humane Society",
      university: "University of Wisconsin-Madison",
      club_description:
        "Focuses on animal welfare, adoption drives, and volunteering at local shelters.",
      university_description:
        "Public university with a strong commitment to animal welfare and research in animal sciences.",
    },
    {
      name: "Ohio State University Companion Animal Club",
      university: "Ohio State University",
      club_description:
        "Promotes responsible pet ownership and hosts events related to animal health and care.",
      university_description:
        "Public university with a strong veterinary medicine and animal science department.",
    },
    {
      name: "University of Pennsylvania Animal Advocacy Society",
      university: "University of Pennsylvania",
      club_description:
        "Dedicated to advocating for animal rights and providing education on ethical treatment of animals.",
      university_description:
        "Private Ivy League university with a renowned veterinary school.",
    },
    {
      name: "University of Michigan Animal Lovers Club",
      university: "University of Michigan",
      club_description:
        "Engages students in activities that support local animal shelters and fosters pets.",
      university_description:
        "Public university with active student groups supporting animal welfare and rights.",
    },
    {
      name: "Duke University Pre-Veterinary Club",
      university: "Duke University",
      club_description:
        "Offers resources and experiences for students pursuing careers in veterinary medicine.",
      university_description:
        "Private university with a focus on health sciences, including animal care.",
    },
    {
      name: "Stanford University Animal Rights Club",
      university: "Stanford University",
      club_description:
        "Advocates for animal rights through educational events and activism.",
      university_description:
        "Private university known for its focus on sustainability and animal welfare.",
    },
    {
      name: "University of Georgia Pet Rescue Society",
      university: "University of Georgia",
      club_description:
        "Facilitates animal rescue operations and fosters connections with local shelters.",
      university_description:
        "Public university with a top-rated veterinary program.",
    },
    {
      name: "University of Colorado-Boulder Animal Welfare Coalition",
      university: "University of Colorado-Boulder",
      club_description:
        "Promotes animal welfare and ethical treatment through events and volunteer opportunities.",
      university_description:
        "Public university with a strong commitment to environmental and animal welfare causes.",
    },
    {
      name: "Harvard University Animal Protection Society",
      university: "Harvard University",
      club_description:
        "Focuses on the protection and ethical treatment of animals through education and activism.",
      university_description:
        "Private Ivy League university with various initiatives supporting animal rights.",
    },
    {
      name: "University of Illinois Urbana-Champaign Animal Lovers Club",
      university: "University of Illinois Urbana-Champaign",
      club_description:
        "Supports local shelters and organizes pet adoption events.",
      university_description:
        "Public university with a strong focus on animal welfare and veterinary medicine.",
    },
    {
      name: "UC Berkeley Animal Rights Collective",
      university: "University of California, Berkeley",
      club_description:
        "Dedicated to animal rights advocacy and raising awareness about cruelty-free living.",
      university_description:
        "Public university with a strong focus on environmental sustainability and animal welfare.",
    },
    {
      name: "University of Arizona Pre-Veterinary Club",
      university: "University of Arizona",
      club_description:
        "Provides support and networking opportunities for students interested in veterinary careers.",
      university_description:
        "Public university with robust animal science and veterinary studies programs.",
    },
    {
      name: "Michigan State University Animal Welfare Club",
      university: "Michigan State University",
      club_description:
        "Promotes animal welfare through volunteer work and education about responsible pet ownership.",
      university_description:
        "Public university with a top veterinary school and animal science program.",
    },
    {
      name: "University of Miami Animal Rescue Society",
      university: "University of Miami",
      club_description:
        "Focuses on rescuing and fostering animals, as well as advocating for animal rights.",
      university_description:
        "Private university with active student involvement in animal welfare initiatives.",
    },
    {
      name: "University of Maryland Pet Lovers Association",
      university: "University of Maryland",
      club_description:
        "Encourages pet adoption and responsible ownership while supporting local animal shelters.",
      university_description:
        "Public university with active student groups supporting animal welfare.",
    },
    {
      name: "University of Washington Humane Society",
      university: "University of Washington",
      club_description:
        "Works with local animal shelters to promote pet adoption and responsible pet care.",
      university_description:
        "Public university with strong initiatives for animal welfare and ethical treatment.",
    },
    {
      name: "Princeton University Animal Rights Club",
      university: "Princeton University",
      club_description:
        "Focuses on ethical treatment of animals and animal rights advocacy.",
      university_description:
        "Private Ivy League university known for its research in ethics and activism.",
    },
    {
      name: "Boston University Animal Welfare Society",
      university: "Boston University",
      club_description:
        "Supports local animal shelters and promotes responsible pet care.",
      university_description:
        "Private university with a focus on community involvement and animal welfare.",
    },
    {
      name: "University of Virginia Animal Rescue Group",
      university: "University of Virginia",
      club_description:
        "Organizes animal rescue missions and educational events on pet care.",
      university_description:
        "Public university with a strong commitment to social responsibility and animal welfare.",
    },
    {
      name: "Georgetown University Pre-Vet Club",
      university: "Georgetown University",
      club_description:
        "Provides pre-veterinary students with opportunities for networking and animal care experience.",
      university_description:
        "Private university with a strong focus on health sciences.",
    },
    {
      name: "Yale University Animal Rights Collective",
      university: "Yale University",
      club_description:
        "Advocates for the ethical treatment of animals and hosts educational events on animal rights.",
      university_description:
        "Private Ivy League university with a commitment to activism and ethical research.",
    },
    {
      name: "University of Texas at Austin Animal Welfare Club",
      university: "University of Texas at Austin",
      club_description: "Focuses on animal rights and supports local shelters.",
      university_description:
        "Public university with active student involvement in animal welfare and community outreach.",
    },
    {
      name: "University of Southern California Animal Rescue Society",
      university: "University of Southern California",
      club_description:
        "Supports local animal rescues through fundraising and volunteer efforts.",
      university_description:
        "Private university with a focus on community service and animal rights.",
    },
    {
      name: "Brown University Pet Advocacy Club",
      university: "Brown University",
      club_description:
        "Advocates for pet adoption and responsible ownership while supporting shelters.",
      university_description:
        "Private Ivy League university known for its commitment to social causes and activism.",
    },
    {
      name: "Northwestern University Animal Rights Society",
      university: "Northwestern University",
      club_description:
        "Advocates for animal rights through educational events and community outreach.",
      university_description:
        "Private university with a strong focus on social justice and animal welfare.",
    },
    {
      name: "University of Chicago Animal Care Club",
      university: "University of Chicago",
      club_description:
        "Promotes responsible pet care and supports animal welfare initiatives.",
      university_description:
        "Private university with a strong commitment to animal ethics and community service.",
    },
    {
      name: "Vanderbilt University Animal Welfare Coalition",
      university: "Vanderbilt University",
      club_description:
        "Supports animal shelters and advocates for ethical treatment of pets.",
      university_description:
        "Private university with active student involvement in animal welfare efforts.",
    },
    {
      name: "University of North Carolina at Chapel Hill Pet Rescue Club",
      university: "University of North Carolina at Chapel Hill",
      club_description:
        "Focuses on rescuing pets and supporting animal adoption drives.",
      university_description:
        "Public university known for its community service and animal rescue efforts.",
    },
    {
      name: "University of Notre Dame Pre-Vet Society",
      university: "University of Notre Dame",
      club_description:
        "Provides resources and experiences for students pursuing veterinary medicine.",
      university_description:
        "Private university with a focus on health and veterinary sciences.",
    },
    {
      name: "Penn State University Animal Welfare Club",
      university: "Penn State University",
      club_description:
        "Promotes animal welfare and educates students on responsible pet ownership.",
      university_description:
        "Public university with a strong program in veterinary science and animal welfare.",
    },
    {
      name: "Purdue University Animal Care Society",
      university: "Purdue University",
      club_description:
        "Supports local shelters and educates on responsible pet care.",
      university_description:
        "Public university with a top-ranked veterinary school and commitment to animal welfare.",
    },
    {
      name: "University of Kentucky Pet Rescue Group",
      university: "University of Kentucky",
      club_description: "Organizes pet rescue missions and animal care events.",
      university_description:
        "Public university with strong community involvement in animal welfare efforts.",
    },
    {
      name: "Columbia University Animal Advocacy Club",
      university: "Columbia University",
      club_description:
        "Advocates for animal rights and educates students on ethical treatment.",
      university_description:
        "Private Ivy League university known for its commitment to activism and ethics.",
    },
    {
      name: "University of Minnesota Animal Rescue Society",
      university: "University of Minnesota",
      club_description:
        "Focuses on rescuing animals and fostering pets while advocating for ethical treatment.",
      university_description:
        "Public university with a strong program in animal sciences and welfare.",
    },
    {
      name: "Emory University Pre-Veterinary Club",
      university: "Emory University",
      club_description:
        "Supports students interested in veterinary medicine and offers animal care experiences.",
      university_description:
        "Private university with a strong focus on health sciences and animal care.",
    },
    {
      name: "University of California, San Diego Animal Welfare Society",
      university: "University of California, San Diego",
      club_description:
        "Supports local shelters and promotes responsible pet ownership.",
      university_description:
        "Public university with a commitment to sustainability and animal rights.",
    },
    {
      name: "University of Oklahoma Animal Rights Collective",
      university: "University of Oklahoma",
      club_description:
        "Advocates for animal rights through education and activism.",
      university_description:
        "Public university with a focus on ethics and animal welfare initiatives.",
    },
    {
      name: "University of Pittsburgh Pet Rescue Association",
      university: "University of Pittsburgh",
      club_description:
        "Focuses on rescuing and fostering animals in need while supporting local shelters.",
      university_description:
        "Public university with a strong commitment to community service and animal rescue.",
    },
    {
      name: "University of South Carolina Animal Welfare Club",
      university: "University of South Carolina",
      club_description:
        "Promotes animal rights and supports local shelters through volunteer work.",
      university_description:
        "Public university with active involvement in animal rights and welfare.",
    },
    {
      name: "University of Tennessee Pre-Vet Society",
      university: "University of Tennessee",
      club_description:
        "Provides students with resources and experiences in veterinary medicine and animal care.",
      university_description:
        "Public university with a strong veterinary and animal science program.",
    },
    {
      name: "University of Alabama Animal Rescue Team",
      university: "University of Alabama",
      club_description:
        "Focuses on rescuing animals and supporting local shelters.",
      university_description:
        "Public university with a focus on community outreach and animal welfare.",
    },
    {
      name: "University of Mississippi Animal Rights Society",
      university: "University of Mississippi",
      club_description:
        "Advocates for animal rights and provides education on ethical treatment of animals.",
      university_description:
        "Public university with a focus on social responsibility and animal ethics.",
    },
  ],
  fashionAndDesignclubs: [
    {
      name: "FIT Fashion Design Club",
      university: "Fashion Institute of Technology",
      club_description:
        "Provides opportunities for students to design, create, and showcase their fashion pieces in shows and exhibitions.",
      university_description:
        "Specialized college focused on art, fashion, business, design, and technology.",
    },
    {
      name: "Parsons Design Collective",
      university: "Parsons School of Design",
      club_description:
        "Promotes collaboration among students from various design disciplines, offering workshops and design showcases.",
      university_description:
        "Private art and design school known for innovation and creativity in the design industry.",
    },
    {
      name: "RISD Apparel Design Club",
      university: "Rhode Island School of Design",
      club_description:
        "Explores fashion design through hands-on projects and offers mentorship from industry professionals.",
      university_description:
        "Private art and design college known for its strong focus on visual arts and design education.",
    },
    {
      name: "SCAD Fashion Club",
      university: "Savannah College of Art and Design",
      club_description:
        "Encourages students to engage in fashion design, garment construction, and fashion show production.",
      university_description:
        "Private university with a focus on creative careers in art, design, and fashion.",
    },
    {
      name: "UCLA Fashion and Student Trends",
      university: "University of California, Los Angeles",
      club_description:
        "Provides opportunities for students interested in fashion to explore industry trends and create their own designs.",
      university_description:
        "Public university with a diverse range of student organizations, including fashion and design.",
    },
    {
      name: "NYU Fashion Business Association",
      university: "New York University",
      club_description:
        "Focuses on the business side of fashion, connecting students with industry leaders and organizing fashion-related events.",
      university_description:
        "Private university known for its connections to the fashion industry in New York City.",
    },
    {
      name: "University of Michigan Fashion Media Collective",
      university: "University of Michigan",
      club_description:
        "Combines fashion design and media, allowing students to explore fashion photography, styling, and production.",
      university_description:
        "Public university with a strong emphasis on interdisciplinary student initiatives.",
    },
    {
      name: "Stanford University Design Collective",
      university: "Stanford University",
      club_description:
        "A creative hub for students to explore all facets of design, from fashion to product and graphic design.",
      university_description:
        "Private university known for innovation and entrepreneurship, with a strong design focus.",
    },
    {
      name: "Harvard College Fashion and Lifestyle Club",
      university: "Harvard University",
      club_description:
        "Explores fashion trends, styling, and lifestyle design, hosting runway shows and networking events.",
      university_description:
        "Private Ivy League university with a growing interest in creative arts and fashion.",
    },
    {
      name: "University of Texas at Austin Fashion Group",
      university: "University of Texas at Austin",
      club_description:
        "Engages students in fashion design and styling projects, as well as organizing fashion shows.",
      university_description:
        "Public university with a large, active student body and diverse fashion and design clubs.",
    },
    {
      name: "Cornell University Fashion Collective",
      university: "Cornell University",
      club_description:
        "Provides a platform for students to showcase their fashion designs and explore the intersection of fashion and sustainability.",
      university_description:
        "Private Ivy League university with a strong program in fiber science and apparel design.",
    },
    {
      name: "Northwestern University Fashion and Design Society",
      university: "Northwestern University",
      club_description:
        "Hosts fashion shows, styling workshops, and collaborative design projects for students interested in fashion.",
      university_description:
        "Private university with active student groups and a focus on interdisciplinary design.",
    },
    {
      name: "University of Southern California Fashion Industry Association",
      university: "University of Southern California",
      club_description:
        "Bridges the gap between fashion design and business, offering students networking and industry insights.",
      university_description:
        "Private university with a strong focus on student involvement in creative industries.",
    },
    {
      name: "Columbia University Fashion Society",
      university: "Columbia University",
      club_description:
        "Offers students the opportunity to design, style, and learn about the fashion industry through events and workshops.",
      university_description:
        "Private Ivy League university with a vibrant fashion and design scene.",
    },
    {
      name: "University of Pennsylvania Fashion and Design Club",
      university: "University of Pennsylvania",
      club_description:
        "Focuses on design innovation and fashion entrepreneurship, with regular industry guest speakers.",
      university_description:
        "Private Ivy League university with a strong emphasis on business and design.",
    },
    {
      name: "Duke University Fashion Forward",
      university: "Duke University",
      club_description:
        "Encourages students to engage in fashion styling, trend forecasting, and runway production.",
      university_description:
        "Private university with a growing interest in fashion and student-led design projects.",
    },
    {
      name: "Boston University Fashion and Retail Association",
      university: "Boston University",
      club_description:
        "Provides resources for students interested in both fashion design and the retail industry, offering events and internships.",
      university_description:
        "Private university with a strong focus on fashion as part of its business and creative industries.",
    },
    {
      name: "University of Miami Fashion Industry Organization",
      university: "University of Miami",
      club_description:
        "Focuses on connecting students with fashion professionals and organizing fashion-related events and shows.",
      university_description:
        "Private university with an active fashion scene and student engagement.",
    },
    {
      name: "Georgetown University Fashion Council",
      university: "Georgetown University",
      club_description:
        "Combines fashion and business, providing networking opportunities and fashion show experiences.",
      university_description:
        "Private university with a focus on student-led entrepreneurial initiatives, including fashion.",
    },
    {
      name: "University of Chicago Fashion and Design Club",
      university: "University of Chicago",
      club_description:
        "Encourages students to engage in creative fashion projects, including garment design and fashion marketing.",
      university_description:
        "Private university with active student participation in arts and creative industries.",
    },
    {
      name: "University of Virginia Fashion Design Association",
      university: "University of Virginia",
      club_description:
        "Provides students with opportunities to design, create, and showcase their fashion collections.",
      university_description:
        "Public university with a strong commitment to arts and design programs.",
    },
    {
      name: "University of North Carolina Fashion Board",
      university: "University of North Carolina",
      club_description:
        "Focuses on fashion design, modeling, and styling, with an annual fashion show and events.",
      university_description:
        "Public university with active student involvement in creative and fashion projects.",
    },
    {
      name: "University of Florida Trendsetters Fashion Club",
      university: "University of Florida",
      club_description:
        "A student-run organization that promotes fashion trends, styling, and design projects.",
      university_description:
        "Public university with a vibrant fashion community.",
    },
    {
      name: "Ohio State University Fashion Production Association",
      university: "Ohio State University",
      club_description:
        "Produces a large-scale annual fashion show, giving students experience in design, production, and modeling.",
      university_description:
        "Public university with a strong emphasis on fashion production and design.",
    },
    {
      name: "Michigan State University Fashion House",
      university: "Michigan State University",
      club_description:
        "A creative hub for students interested in fashion design, production, and styling.",
      university_description:
        "Public university with active student participation in fashion-related activities.",
    },
    {
      name: "University of Wisconsin-Madison Fashion and Retail Society",
      university: "University of Wisconsin-Madison",
      club_description:
        "Connects students with fashion industry professionals and organizes fashion shows and styling workshops.",
      university_description:
        "Public university with strong business and design connections.",
    },
    {
      name: "University of Arizona Fashion Club",
      university: "University of Arizona",
      club_description:
        "Provides a platform for students to engage in fashion design, modeling, and production.",
      university_description:
        "Public university with a vibrant creative arts and fashion scene.",
    },
    {
      name: "University of Illinois Fashion Network",
      university: "University of Illinois Urbana-Champaign",
      club_description:
        "Focuses on fashion design, styling, and industry connections, with an annual fashion show.",
      university_description:
        "Public university with a strong focus on interdisciplinary design initiatives.",
    },
    {
      name: "University of Washington Design Collective",
      university: "University of Washington",
      club_description:
        "Brings together students from various design disciplines, including fashion, to collaborate on creative projects.",
      university_description:
        "Public university with a strong emphasis on design and innovation.",
    },
    {
      name: "Penn State University Fashion Society",
      university: "Penn State University",
      club_description:
        "Encourages students to engage in fashion design and production, hosting annual fashion events.",
      university_description:
        "Public university with a strong emphasis on creative industries and design.",
    },
    {
      name: "University of Minnesota Fashion Collective",
      university: "University of Minnesota",
      club_description:
        "Focuses on fashion design and styling, with opportunities for students to create and showcase their work.",
      university_description:
        "Public university with a strong fashion and design community.",
    },
    {
      name: "University of Oregon Fashion Organization",
      university: "University of Oregon",
      club_description:
        "Promotes student involvement in fashion design, styling, and trend forecasting.",
      university_description:
        "Public university with active student participation in fashion and design.",
    },
    {
      name: "Temple University Fashion and Business Society",
      university: "Temple University",
      club_description:
        "Focuses on the intersection of fashion design and business, providing students with industry connections.",
      university_description:
        "Public university with a strong emphasis on business and design.",
    },
    {
      name: "University of Kentucky Fashion Design Association",
      university: "University of Kentucky",
      club_description:
        "Encourages students to explore fashion design and production through collaborative projects.",
      university_description:
        "Public university with a strong creative arts and fashion design focus.",
    },
    {
      name: "University of Iowa Fashion Club",
      university: "University of Iowa",
      club_description:
        "Provides a platform for students to design, produce, and showcase their fashion collections.",
      university_description:
        "Public university with a growing focus on student-led fashion initiatives.",
    },
    {
      name: "University of Colorado Fashion and Design Society",
      university: "University of Colorado Boulder",
      club_description:
        "Focuses on fashion design, production, and industry connections, with an emphasis on sustainable fashion.",
      university_description:
        "Public university with a strong focus on sustainability and design.",
    },
    {
      name: "University of Kansas Fashion Collective",
      university: "University of Kansas",
      club_description:
        "Provides a creative space for students to explore fashion design, styling, and modeling.",
      university_description:
        "Public university with active student participation in creative industries.",
    },
    {
      name: "University of Missouri Fashion Design Club",
      university: "University of Missouri",
      club_description:
        "Engages students in fashion design and production, hosting an annual fashion show.",
      university_description:
        "Public university with a focus on creative arts and design programs.",
    },
    {
      name: "University of Georgia Fashion and Retail Association",
      university: "University of Georgia",
      club_description:
        "Combines fashion design and business, providing students with industry insights and networking opportunities.",
      university_description:
        "Public university with a strong connection to fashion and retail industries.",
    },
    {
      name: "Auburn University Fashion Event Planning Society",
      university: "Auburn University",
      club_description:
        "Focuses on event planning within the fashion industry, giving students hands-on experience.",
      university_description:
        "Public university with a strong focus on fashion events and industry connections.",
    },
    {
      name: "University of Alabama Fashion Club",
      university: "University of Alabama",
      club_description:
        "Promotes fashion design, styling, and production through student-led initiatives and events.",
      university_description:
        "Public university with active student participation in fashion and creative industries.",
    },
    {
      name: "University of Nebraska Fashion Board",
      university: "University of Nebraska-Lincoln",
      club_description:
        "Focuses on fashion design, production, and trend forecasting, with a strong emphasis on sustainability.",
      university_description:
        "Public university with a growing focus on fashion and design.",
    },
    {
      name: "Indiana University Fashion Collective",
      university: "Indiana University Bloomington",
      club_description:
        "Offers students opportunities to engage in fashion design, styling, and production.",
      university_description:
        "Public university with a strong commitment to creative industries and fashion.",
    },
    {
      name: "University of Utah Fashion Club",
      university: "University of Utah",
      club_description:
        "Encourages students to explore fashion design, styling, and trend analysis through hands-on projects.",
      university_description:
        "Public university with an active fashion and design community.",
    },
    {
      name: "University of Oklahoma Fashion Design Society",
      university: "University of Oklahoma",
      club_description:
        "Provides opportunities for students to create, design, and showcase fashion collections.",
      university_description:
        "Public university with a focus on fashion and design industries.",
    },
    {
      name: "University of South Carolina Fashion Design Club",
      university: "University of South Carolina",
      club_description:
        "Focuses on fashion design, styling, and production, with an annual fashion show.",
      university_description:
        "Public university with active student participation in fashion and design.",
    },
    {
      name: "University of Tennessee Fashion Group",
      university: "University of Tennessee",
      club_description:
        "Encourages students to engage in fashion design and production, organizing fashion-related events.",
      university_description:
        "Public university with a strong emphasis on creative industries and fashion design.",
    },
    {
      name: "University of Louisville Fashion Collective",
      university: "University of Louisville",
      club_description:
        "Provides a platform for students to engage in fashion design, styling, and production.",
      university_description:
        "Public university with a growing focus on fashion and design initiatives.",
    },
    {
      name: "University of Houston Fashion Club",
      university: "University of Houston",
      club_description:
        "Focuses on fashion design, production, and industry connections, with a strong focus on sustainability.",
      university_description:
        "Public university with a strong emphasis on fashion and creative industries.",
    },
  ],
  publicSpeakingAndCommunicationClubs: [],
  socialJusticeAndAdvocacyClubs: [],
  astronomyClubs: [],
  meditationAndMindfulnessClubs: [],
  peerTutoringClubs: [],
  ethicsAndPhilosophyClubs: [],
  travelClubs: [],
  cosplayAndAnimeClubs: [],
  diyclubs: [],
  boardGameClubs: [],
  chessClubs: [],
  sustainabilityClubs: [],
  codingclubs: [],
  bookClubs: [],
  comedyClubs: [],
  fitnessClubs: [],
  gardeningClubs: [],
  vrClubs: [],
  podcastingclubs: [],
  calligraphyAndHandwritingClubs: [],
  puzzleAndEscapeRoomClubs: [],
  carClubs: [],
  recyclingClubs: [],
};

export const groupTypes = [];

export const groupExamples = [];

export const universityEnvironmentData = {
  bustlingCities: [
    {
      name: "New York University",
      description:
        "Located in the heart of New York City, known for its vibrant urban environment and cultural opportunities.",
    },
    {
      name: "University of Southern California",
      description:
        "Situated in Los Angeles, surrounded by a dynamic cityscape with access to entertainment and industry hubs.",
    },
    {
      name: "University of Chicago",
      description:
        "Located in the lively city of Chicago, offering a rich cultural scene and a bustling urban atmosphere.",
    },
    {
      name: "University of Pennsylvania",
      description:
        "Situated in Philadelphia, providing students with a vibrant city life and numerous historical sites.",
    },
    {
      name: "Boston University",
      description:
        "Located in Boston, known for its historic landmarks and active city environment.",
    },
    {
      name: "University of Toronto",
      description:
        "In the heart of Toronto, blending academic excellence with the energy of Canada's largest city.",
    },
    {
      name: "University of Sydney",
      description:
        "Located in Sydney, offering a blend of academic and cultural experiences in a bustling metropolitan setting.",
    },
    {
      name: "University of Melbourne",
      description:
        "Situated in Melbourne, providing a vibrant urban environment with a thriving cultural scene.",
    },
    {
      name: "University of Hong Kong",
      description:
        "In the vibrant city of Hong Kong, combining academic rigor with a bustling metropolitan life.",
    },
    {
      name: "National University of Singapore",
      description:
        "Located in Singapore, offering an energetic city environment with a focus on innovation and global connections.",
    },
    {
      name: "University of Tokyo",
      description:
        "Situated in Tokyo, blending traditional Japanese culture with the excitement of a major global city.",
    },
    {
      name: "University of São Paulo",
      description:
        "In São Paulo, Brazil's largest city, known for its diverse culture and bustling city life.",
    },
    {
      name: "University of Cape Town",
      description:
        "Located in Cape Town, offering a vibrant city experience with stunning natural surroundings.",
    },
    {
      name: "University of Buenos Aires",
      description:
        "In Buenos Aires, providing students with a lively urban environment and rich cultural experiences.",
    },
    {
      name: "University of Mumbai",
      description:
        "Situated in Mumbai, offering an energetic city atmosphere with a mix of historical and modern influences.",
    },
    {
      name: "University of Istanbul",
      description:
        "Located in Istanbul, where students experience a blend of historic charm and modern urban life.",
    },
    {
      name: "University of Seoul",
      description:
        "In Seoul, South Korea, providing a dynamic urban environment with a focus on innovation and culture.",
    },
    {
      name: "University of Vienna",
      description:
        "Located in Vienna, blending academic excellence with a rich historical and cultural city environment.",
    },
    {
      name: "University of Zurich",
      description:
        "In Zurich, Switzerland, offering a blend of academic rigor and a lively city atmosphere.",
    },
    {
      name: "University of Geneva",
      description:
        "Situated in Geneva, known for its international atmosphere and vibrant city life.",
    },
    {
      name: "University of Amsterdam",
      description:
        "Located in Amsterdam, offering a dynamic urban environment with a rich cultural heritage.",
    },
    {
      name: "University of Copenhagen",
      description:
        "In Copenhagen, providing a blend of academic excellence and a vibrant city environment.",
    },
    {
      name: "University of Oslo",
      description:
        "Located in Oslo, known for its vibrant city life and beautiful natural surroundings.",
    },
    {
      name: "University of Helsinki",
      description:
        "Situated in Helsinki, offering a blend of urban energy and a commitment to academic excellence.",
    },
    {
      name: "University of Lisbon",
      description:
        "In Lisbon, Portugal, providing a lively city environment with a rich cultural backdrop.",
    },
    {
      name: "University of Edinburgh",
      description:
        "Located in Edinburgh, offering a blend of historical charm and a vibrant urban atmosphere.",
    },
    {
      name: "University of Glasgow",
      description:
        "Situated in Glasgow, known for its lively city life and vibrant cultural scene.",
    },
    {
      name: "University of Dublin",
      description:
        "In Dublin, providing a blend of academic excellence and a lively urban environment.",
    },
    {
      name: "University of Warsaw",
      description:
        "Located in Warsaw, offering a dynamic city atmosphere with a focus on academic achievement.",
    },
    {
      name: "University of Prague",
      description:
        "Situated in Prague, known for its rich history and vibrant city life.",
    },
    {
      name: "University of Budapest",
      description:
        "In Budapest, providing a blend of academic rigor and a vibrant urban environment.",
    },
    {
      name: "University of Kraków",
      description:
        "Located in Kraków, offering a rich historical backdrop and a lively city atmosphere.",
    },
    {
      name: "University of Porto",
      description:
        "In Porto, Portugal, known for its vibrant cultural scene and energetic urban environment.",
    },
    {
      name: "University of Barcelona",
      description:
        "Located in Barcelona, blending academic excellence with a lively Mediterranean city environment.",
    },
    {
      name: "University of Milan",
      description:
        "In Milan, Italy, offering a vibrant urban setting with a focus on fashion, design, and business.",
    },
    {
      name: "University of Rome La Sapienza",
      description:
        "Located in Rome, providing a rich historical and cultural environment in a bustling city.",
    },
    {
      name: "University of Berlin",
      description:
        "In Berlin, Germany, known for its dynamic urban culture and rich history.",
    },
    {
      name: "University of Hamburg",
      description:
        "Located in Hamburg, blending academic rigor with a lively port city atmosphere.",
    },
    {
      name: "University of Munich",
      description:
        "Situated in Munich, offering a vibrant city life combined with academic excellence.",
    },
    {
      name: "University of Stuttgart",
      description:
        "In Stuttgart, Germany, providing a dynamic urban environment with a focus on engineering and technology.",
    },
    {
      name: "University of Düsseldorf",
      description:
        "Located in Düsseldorf, known for its vibrant cultural scene and academic institutions.",
    },
    {
      name: "University of Frankfurt",
      description:
        "Situated in Frankfurt, Germany, blending academic rigor with a bustling financial hub.",
    },
    {
      name: "University of Cologne",
      description:
        "In Cologne, offering a vibrant urban environment with a rich cultural backdrop.",
    },
    {
      name: "University of Essen",
      description:
        "Located in Essen, providing a dynamic city atmosphere with a strong academic presence.",
    },
    {
      name: "University of Mannheim",
      description:
        "In Mannheim, Germany, known for its vibrant city life and focus on business studies.",
    },
    {
      name: "University of Heidelberg",
      description:
        "Situated in Heidelberg, blending historical charm with a lively academic community.",
    },
    {
      name: "University of Lausanne",
      description:
        "Located in Lausanne, Switzerland, offering a vibrant city environment with a focus on international studies.",
    },
    {
      name: "University of Lucerne",
      description:
        "In Lucerne, Switzerland, blending academic excellence with a picturesque urban setting.",
    },
    {
      name: "University of Bern",
      description:
        "Situated in Bern, offering a dynamic city life with a strong academic focus.",
    },
    {
      name: "University of Basel",
      description:
        "In Basel, Switzerland, known for its vibrant city culture and strong academic programs.",
    },
    {
      name: "University of Geneva",
      description:
        "Located in Geneva, offering a blend of international atmosphere and academic rigor.",
    },
    {
      name: "University of Oslo",
      description:
        "In Oslo, blending vibrant city life with academic excellence.",
    },
    {
      name: "University of Stockholm",
      description:
        "Located in Stockholm, Sweden, providing a dynamic urban environment with a focus on innovation and research.",
    },
    {
      name: "University of Gothenburg",
      description:
        "In Gothenburg, Sweden, offering a vibrant city setting with strong academic programs.",
    },
    {
      name: "University of Uppsala",
      description:
        "Situated in Uppsala, Sweden, known for its rich academic history and vibrant city life.",
    },
    {
      name: "University of Helsinki",
      description:
        "In Helsinki, blending a dynamic urban environment with academic excellence.",
    },
    {
      name: "University of Tallinn",
      description:
        "Located in Tallinn, Estonia, providing a vibrant city atmosphere with a focus on technology and innovation.",
    },
    {
      name: "University of Vilnius",
      description:
        "In Vilnius, Lithuania, known for its vibrant city life and academic rigor.",
    },
    {
      name: "University of Riga",
      description:
        "Situated in Riga, Latvia, offering a dynamic urban environment with a focus on cultural studies.",
    },
    {
      name: "University of Warsaw",
      description:
        "In Warsaw, blending a vibrant city atmosphere with strong academic programs.",
    },
    {
      name: "University of Prague",
      description:
        "Located in Prague, offering a rich historical backdrop and dynamic city life.",
    },
    {
      name: "University of Budapest",
      description:
        "In Budapest, Hungary, known for its lively city culture and academic focus.",
    },
    {
      name: "University of Kraków",
      description:
        "Located in Kraków, blending a rich historical setting with vibrant urban life.",
    },
    {
      name: "University of Porto",
      description:
        "In Porto, Portugal, providing a lively city environment with a strong academic focus.",
    },
    {
      name: "University of Florence",
      description:
        "Situated in Florence, Italy, offering a blend of academic excellence and rich cultural heritage.",
    },
    {
      name: "University of Milan",
      description:
        "In Milan, blending a vibrant city atmosphere with a focus on design and business.",
    },
    {
      name: "University of Rome La Sapienza",
      description:
        "Located in Rome, offering a dynamic urban environment with a rich historical backdrop.",
    },
  ],
  suburbanAreas: [
    {
      name: "University of California, Berkeley",
      description:
        "Located in a suburban area with access to the vibrant city of San Francisco.",
    },
    {
      name: "University of Michigan",
      description:
        "Situated in Ann Arbor, known for its peaceful suburban setting and strong academic community.",
    },
    {
      name: "University of Virginia",
      description:
        "In Charlottesville, offering a tranquil suburban environment with a rich history.",
    },
    {
      name: "University of North Carolina at Chapel Hill",
      description:
        "Located in Chapel Hill, blending a serene suburban setting with a strong academic presence.",
    },
    {
      name: "University of Wisconsin-Madison",
      description:
        "Situated in Madison, offering a peaceful suburban environment with a strong focus on education.",
    },
    {
      name: "University of Illinois at Urbana-Champaign",
      description:
        "In Urbana-Champaign, providing a calm suburban setting with a vibrant academic community.",
    },
    {
      name: "University of Minnesota",
      description:
        "Located in Minneapolis-St. Paul, combining a peaceful suburban atmosphere with a dynamic educational environment.",
    },
    {
      name: "University of Indiana",
      description:
        "In Bloomington, offering a serene suburban setting with a strong academic reputation.",
    },
    {
      name: "University of Iowa",
      description:
        "Situated in Iowa City, known for its tranquil suburban environment and academic excellence.",
    },
    {
      name: "University of Kentucky",
      description:
        "Located in Lexington, providing a peaceful suburban setting with a focus on education.",
    },
    {
      name: "University of Oklahoma",
      description:
        "In Norman, offering a calm suburban environment with a strong academic community.",
    },
    {
      name: "University of Arizona",
      description:
        "Located in Tucson, blending a tranquil suburban setting with a strong focus on education.",
    },
    {
      name: "University of Kansas",
      description:
        "Situated in Lawrence, known for its peaceful suburban environment and strong academic presence.",
    },
    {
      name: "University of Colorado Boulder",
      description:
        "In Boulder, offering a serene suburban setting with a focus on academic achievement.",
    },
    {
      name: "University of Oregon",
      description:
        "Located in Eugene, providing a peaceful suburban environment with a vibrant academic community.",
    },
    {
      name: "University of South Carolina",
      description:
        "Situated in Columbia, known for its calm suburban setting and strong academic programs.",
    },
    {
      name: "University of Tennessee",
      description:
        "In Knoxville, offering a tranquil suburban environment with a focus on education.",
    },
    {
      name: "University of Alabama",
      description:
        "Located in Tuscaloosa, providing a serene suburban setting with a strong academic community.",
    },
    {
      name: "University of Mississippi",
      description:
        "In Oxford, offering a peaceful suburban environment with a focus on education.",
    },
    {
      name: "University of Arkansas",
      description:
        "Situated in Fayetteville, known for its calm suburban setting and academic excellence.",
    },
    {
      name: "University of Missouri",
      description:
        "Located in Columbia, blending a tranquil suburban environment with a vibrant educational community.",
    },
    {
      name: "University of Nebraska-Lincoln",
      description:
        "In Lincoln, offering a peaceful suburban setting with a focus on academic achievement.",
    },
    {
      name: "University of South Dakota",
      description:
        "Located in Vermillion, providing a serene suburban environment with a strong academic presence.",
    },
    {
      name: "University of North Dakota",
      description:
        "Situated in Grand Forks, known for its calm suburban setting and academic excellence.",
    },
    {
      name: "University of Montana",
      description:
        "In Missoula, offering a tranquil suburban environment with a focus on education.",
    },
    {
      name: "University of Idaho",
      description:
        "Located in Moscow, blending a serene suburban setting with a strong academic community.",
    },
    {
      name: "University of Wyoming",
      description:
        "In Laramie, providing a peaceful suburban environment with a focus on academic achievement.",
    },
    {
      name: "University of Maine",
      description:
        "Situated in Orono, known for its calm suburban setting and vibrant educational community.",
    },
    {
      name: "University of New Hampshire",
      description:
        "Located in Durham, offering a tranquil suburban environment with a strong academic focus.",
    },
    {
      name: "University of Vermont",
      description:
        "In Burlington, providing a serene suburban setting with a vibrant academic community.",
    },
    {
      name: "Boston College",
      description:
        "Located in Chestnut Hill, Massachusetts, offering a blend of suburban tranquility and academic excellence.",
    },
    {
      name: "Wake Forest University",
      description:
        "In Winston-Salem, North Carolina, providing a peaceful suburban setting with a strong focus on education.",
    },
    {
      name: "Duke University",
      description:
        "Located in Durham, North Carolina, known for its serene suburban environment and strong academic reputation.",
    },
    {
      name: "Emory University",
      description:
        "In Atlanta, Georgia, offering a blend of suburban tranquility with access to a major city.",
    },
    {
      name: "Rice University",
      description:
        "Located in Houston, Texas, blending a calm suburban setting with a dynamic academic environment.",
    },
    {
      name: "Brigham Young University",
      description:
        "In Provo, Utah, providing a serene suburban atmosphere with a strong academic focus.",
    },
    {
      name: "Vanderbilt University",
      description:
        "Located in Nashville, Tennessee, offering a peaceful suburban setting with a vibrant academic community.",
    },
    {
      name: "Southern Methodist University",
      description:
        "In Dallas, Texas, providing a blend of suburban tranquility with access to a major city.",
    },
    {
      name: "University of Denver",
      description:
        "Located in Denver, Colorado, offering a suburban setting with a strong focus on education.",
    },
    {
      name: "Oklahoma State University",
      description:
        "In Stillwater, Oklahoma, providing a tranquil suburban environment with a focus on academic excellence.",
    },
    {
      name: "University of Tulsa",
      description:
        "Located in Tulsa, Oklahoma, blending a serene suburban setting with a strong academic presence.",
    },
    {
      name: "Creighton University",
      description:
        "In Omaha, Nebraska, offering a peaceful suburban environment with a focus on education.",
    },
    {
      name: "Loyola University Chicago",
      description:
        "Located in Chicago, Illinois, offering a suburban setting with access to a major city.",
    },
    {
      name: "Fairfield University",
      description:
        "In Fairfield, Connecticut, providing a serene suburban atmosphere with a strong academic community.",
    },
    {
      name: "Marquette University",
      description:
        "Located in Milwaukee, Wisconsin, offering a peaceful suburban setting with a vibrant academic environment.",
    },
    {
      name: "Loyola Marymount University",
      description:
        "In Los Angeles, California, providing a suburban atmosphere with access to a major city.",
    },
    {
      name: "Gonzaga University",
      description:
        "Located in Spokane, Washington, offering a tranquil suburban setting with a strong academic presence.",
    },
    {
      name: "Haverford College",
      description:
        "Located in Haverford, Pennsylvania, providing a serene suburban environment with a strong academic focus.",
    },
    {
      name: "Swarthmore College",
      description:
        "In Swarthmore, Pennsylvania, blending a peaceful suburban setting with a vibrant academic atmosphere.",
    },
    {
      name: "Bates College",
      description:
        "Situated in Lewiston, Maine, offering a tranquil suburban environment with a strong focus on education.",
    },
    {
      name: "Bowdoin College",
      description:
        "In Brunswick, Maine, providing a serene suburban setting with a strong academic community.",
    },
    {
      name: "Skidmore College",
      description:
        "Located in Saratoga Springs, New York, surrounded by the beauty of the rural countryside.",
    },
    {
      name: "Saint Lawrence University",
      description:
        "Situated in Canton, New York, offering a peaceful rural setting with a strong academic focus.",
    },
    {
      name: "Colorado College",
      description:
        "In Colorado Springs, Colorado, blending a serene rural environment with a vibrant educational community.",
    },
    {
      name: "Earlham College",
      description:
        "Located in Richmond, Indiana, providing a tranquil rural setting with a focus on academic excellence.",
    },
    {
      name: "Knox College",
      description:
        "Situated in Galesburg, Illinois, offering a peaceful rural environment with a strong academic presence.",
    },
    {
      name: "Gustavus Adolphus College",
      description:
        "In Saint Peter, Minnesota, surrounded by a serene rural setting with a focus on education.",
    },
    {
      name: "Carleton College",
      description:
        "Located in Northfield, Minnesota, blending a tranquil rural environment with a vibrant academic community.",
    },
  ],
  ruralSettings: [
    {
      name: "University of Vermont",
      description:
        "Located in Burlington, surrounded by the scenic beauty of Vermont's rural landscapes.",
    },
    {
      name: "Oberlin College",
      description:
        "Situated in Oberlin, Ohio, offering a serene rural setting with a focus on academic and artistic excellence.",
    },
    {
      name: "Williams College",
      description:
        "In Williamstown, Massachusetts, surrounded by the picturesque beauty of rural New England.",
    },
    {
      name: "Amherst College",
      description:
        "Located in Amherst, Massachusetts, providing a peaceful rural environment with a strong academic community.",
    },
    {
      name: "Middlebury College",
      description:
        "Situated in Middlebury, Vermont, offering a tranquil rural setting with a focus on academic achievement.",
    },
    {
      name: "Haverford College",
      description:
        "In Haverford, Pennsylvania, surrounded by a serene rural environment and a strong academic community.",
    },
    {
      name: "Swarthmore College",
      description:
        "Located in Swarthmore, Pennsylvania, blending a peaceful rural setting with a vibrant academic atmosphere.",
    },
    {
      name: "Bates College",
      description:
        "Situated in Lewiston, Maine, offering a tranquil rural environment with a strong focus on education.",
    },
    {
      name: "Bowdoin College",
      description:
        "In Brunswick, Maine, providing a serene rural setting with a strong academic community.",
    },
    {
      name: "Skidmore College",
      description:
        "Located in Saratoga Springs, New York, surrounded by the beauty of the rural countryside.",
    },
    {
      name: "Saint Lawrence University",
      description:
        "Situated in Canton, New York, offering a peaceful rural setting with a strong academic focus.",
    },
    {
      name: "Colorado College",
      description:
        "In Colorado Springs, Colorado, blending a serene rural environment with a vibrant educational community.",
    },
    {
      name: "Earlham College",
      description:
        "Located in Richmond, Indiana, providing a tranquil rural setting with a focus on academic excellence.",
    },
    {
      name: "Knox College",
      description:
        "Situated in Galesburg, Illinois, offering a peaceful rural environment with a strong academic presence.",
    },
    {
      name: "Gustavus Adolphus College",
      description:
        "In Saint Peter, Minnesota, surrounded by a serene rural setting with a focus on education.",
    },
    {
      name: "Carleton College",
      description:
        "Located in Northfield, Minnesota, blending a tranquil rural environment with a vibrant academic community.",
    },
    {
      name: "Wabash College",
      description:
        "Situated in Crawfordsville, Indiana, offering a calm rural setting with a focus on academic achievement.",
    },
    {
      name: "The College of Wooster",
      description:
        "In Wooster, Ohio, providing a serene rural environment with a strong academic presence.",
    },
    {
      name: "Hillsdale College",
      description:
        "Located in Hillsdale, Michigan, surrounded by a tranquil rural setting and a focus on education.",
    },
    {
      name: "Sewanee: The University of the South",
      description:
        "Situated in Sewanee, Tennessee, offering a peaceful rural environment with a strong academic community.",
    },
    {
      name: "Transylvania University",
      description:
        "In Lexington, Kentucky, blending a serene rural setting with a focus on academic excellence.",
    },
    {
      name: "Rhodes College",
      description:
        "Located in Memphis, Tennessee, providing a tranquil suburban setting with a strong academic community.",
    },
    {
      name: "Wofford College",
      description:
        "Situated in Spartanburg, South Carolina, offering a serene rural environment with a vibrant educational atmosphere.",
    },
    {
      name: "Berea College",
      description:
        "In Berea, Kentucky, surrounded by the beauty of rural landscapes with a focus on academic achievement.",
    },
    {
      name: "Millsaps College",
      description:
        "Located in Jackson, Mississippi, offering a peaceful rural setting with a strong academic presence.",
    },
    {
      name: "Juniata College",
      description:
        "Situated in Huntingdon, Pennsylvania, providing a serene rural environment with a focus on education.",
    },
    {
      name: "Drew University",
      description:
        "In Madison, New Jersey, blending a tranquil rural setting with a strong academic community.",
    },
    {
      name: "Wheaton College",
      description:
        "Located in Wheaton, Illinois, offering a peaceful rural environment with a focus on academic excellence.",
    },
    {
      name: "Hendrix College",
      description:
        "Situated in Conway, Arkansas, providing a serene rural setting with a vibrant academic community.",
    },
    {
      name: "Lynchburg College",
      description:
        "In Lynchburg, Virginia, blending a tranquil rural environment with a strong focus on education.",
    },
  ],
};

export const generic_subjects = [
  {
    name: "Science",
    className: "bg-[#003dcc]/75 row-span-1 col-span-2 max-[850px]:col-span-1",
  },
  {
    name: "English",
    className: "bg-[#08155e] row-span-1 col-span-1 max-[850px]:row-span-2",
  },
  {
    name: "Mathematics",
    className:
      "bg-[#003dcc] row-span-2 col-span-2 max-[850px]:row-span-2 max-[850px]:col-span-1",
  },
  {
    name: "Technology",
    className: "bg-[#00309f] row-span-2 col-span-1 max-[850px]:row-span-2",
  },
  {
    name: "History",
    className: "bg-[#02ad83] row-span-1 col-span-1 max-[850px]:row-span-2",
  },
  {
    name: "Geography",
    className:
      "bg-[#02ad83]/70 row-span-1 col-span-2 max-[850px]:row-span-2 max-[850px]:col-span-1",
  },
  { name: "Art", className: "bg-[#08155e] row-span-2 col-span-1" },
  {
    name: "Music",
    className: "bg-[#00309f]/80 row-span-1 col-span-1 max-[850px]:row-span-2",
  },
  {
    name: "Physical Education",
    className: "bg-[#003dcc]/75 row-span-1 col-span-1 max-[850px]:row-span-2",
  },
  {
    name: "Languages",
    className: "bg-[#003dcc] row-span-1 col-span-2 max-[850px]:col-span-1",
  },
];

export const navItems = [
  { href: "", label: "About Us", icon: MdPeople, size: 23, text: "About Us" },
  {
    href: "/pages/contact",
    label: "Contact",
    icon: MdConnectWithoutContact,
    size: 23,
    text: "Contact",
  },
  {
    href: "/pages/programs",
    label: "Programs",
    icon: SiActivitypub,
    size: 23,
    text: "Programs",
  },
  {
    href: "/pages/donate",
    label: "Donate",
    icon: BiDonateHeart,
    size: 23,
    text: "Donate",
  },
];

export const math_subjects = [
  {
    id: "arithmetic",
    subject: "Arithmetic",
    level: "Lower Secondary",
    difficulty: 25,
  },
  {
    id: "algebra",
    subject: "Algebra",
    level: "Lower Secondary",
    difficulty: 35,
  },
  {
    id: "geometry",
    subject: "Geometry",
    level: "Lower Secondary",
    difficulty: 40,
  },
  {
    id: "trigonometry",
    subject: "Trigonometry",
    level: "Lower Secondary",
    difficulty: 45,
  },
  {
    id: "precalculus",
    subject: "Precalculus",
    level: "Lower Secondary",
    difficulty: 50,
  },
  {
    id: "calculus",
    subject: "Calculus",
    level: "Upper Secondary",
    difficulty: 55,
  },
  {
    id: "statistics",
    subject: "Statistics",
    level: "Upper Secondary",
    difficulty: 55,
  },
  {
    id: "probability",
    subject: "Probability",
    level: "Upper Secondary",
    difficulty: 60,
  },
  {
    id: "discrete_mathematics",
    subject: "Discrete Mathematics",
    level: "Upper Secondary",
    difficulty: 65,
  },
  {
    id: "linear_algebra",
    subject: "Linear Algebra",
    level: "Upper Secondary",
    difficulty: 70,
  },
  {
    id: "multivariable_calculus",
    subject: "Multivariable Calculus",
    level: "Upper Secondary",
    difficulty: 75,
  },
  {
    id: "differential_equations",
    subject: "Differential Equations",
    level: "Upper Secondary",
    difficulty: 80,
  },
  { id: "topology", subject: "Topology", level: "University", difficulty: 85 },
  {
    id: "real_analysis",
    subject: "Real Analysis",
    level: "University",
    difficulty: 85,
  },
  {
    id: "complex_analysis",
    subject: "Complex Analysis",
    level: "University",
    difficulty: 85,
  },
  {
    id: "numerical_analysis",
    subject: "Numerical Analysis",
    level: "University",
    difficulty: 80,
  },
  {
    id: "mathematical_logic",
    subject: "Mathematical Logic",
    level: "University",
    difficulty: 90,
  },
  {
    id: "set_theory",
    subject: "Set Theory",
    level: "University",
    difficulty: 90,
  },
  {
    id: "combinatorics",
    subject: "Combinatorics",
    level: "University",
    difficulty: 85,
  },
  {
    id: "functional_analysis",
    subject: "Functional Analysis",
    level: "University",
    difficulty: 95,
  },
  {
    id: "game_theory",
    subject: "Game Theory",
    level: "University",
    difficulty: 90,
  },
  {
    id: "dynamical_systems",
    subject: "Dynamical Systems",
    level: "University",
    difficulty: 95,
  },
  {
    id: "measure_theory",
    subject: "Measure Theory",
    level: "University",
    difficulty: 95,
  },
  {
    id: "algebraic_geometry",
    subject: "Algebraic Geometry",
    level: "University",
    difficulty: 95,
  },
  {
    id: "operator_theory",
    subject: "Operator Theory",
    level: "University",
    difficulty: 95,
  },
  {
    id: "homotopy_theory",
    subject: "Homotopy Theory",
    level: "University",
    difficulty: 95,
  },
  {
    id: "category_theory",
    subject: "Category Theory",
    level: "University",
    difficulty: 95,
  },
  {
    id: "knot_theory",
    subject: "Knot Theory",
    level: "University",
    difficulty: 90,
  },
  {
    id: "cryptography",
    subject: "Cryptography",
    level: "University",
    difficulty: 90,
  },
  {
    id: "mathematical_physics",
    subject: "Mathematical Physics",
    level: "University",
    difficulty: 90,
  },
  {
    id: "financial_mathematics",
    subject: "Financial Mathematics",
    level: "University",
    difficulty: 85,
  },
  {
    id: "graph_theory",
    subject: "Graph Theory",
    level: "University",
    difficulty: 85,
  },
  {
    id: "algebraic_number_theory",
    subject: "Algebraic Number Theory",
    level: "University",
    difficulty: 95,
  },
  {
    id: "spectral_theory",
    subject: "Spectral Theory",
    level: "University",
    difficulty: 95,
  },
  { id: "wavelets", subject: "Wavelets", level: "University", difficulty: 90 },
  {
    id: "topological_groups",
    subject: "Topological Groups",
    level: "University",
    difficulty: 95,
  },
  {
    id: "noncommutative_geometry",
    subject: "Noncommutative Geometry",
    level: "University",
    difficulty: 95,
  },
  {
    id: "analytic_number_theory",
    subject: "Analytic Number Theory",
    level: "University",
    difficulty: 95,
  },
  {
    id: "elliptic_curves",
    subject: "Elliptic Curves",
    level: "University",
    difficulty: 95,
  },
  {
    id: "modular_forms",
    subject: "Modular Forms",
    level: "University",
    difficulty: 95,
  },
  {
    id: "representation_theory",
    subject: "Representation Theory",
    level: "University",
    difficulty: 95,
  },
  {
    id: "differential_topology",
    subject: "Differential Topology",
    level: "University",
    difficulty: 95,
  },
  {
    id: "geometric_topology",
    subject: "Geometric Topology",
    level: "University",
    difficulty: 95,
  },
  {
    id: "topological_k_theory",
    subject: "Topological K-theory",
    level: "University",
    difficulty: 95,
  },
  {
    id: "cohomology_theory",
    subject: "Cohomology Theory",
    level: "University",
    difficulty: 95,
  },
  {
    id: "algebraic_k_theory",
    subject: "Algebraic K-theory",
    level: "University",
    difficulty: 95,
  },
  {
    id: "motivic_homotopy_theory",
    subject: "Motivic Homotopy Theory",
    level: "University",
    difficulty: 95,
  },
  {
    id: "derived_algebraic_geometry",
    subject: "Derived Algebraic Geometry",
    level: "University",
    difficulty: 95,
  },
  {
    id: "higher_category_theory",
    subject: "Higher Category Theory",
    level: "University",
    difficulty: 95,
  },
  {
    id: "homological_algebra",
    subject: "Homological Algebra",
    level: "University",
    difficulty: 95,
  },
  {
    id: "commutative_algebra",
    subject: "Commutative Algebra",
    level: "University",
    difficulty: 95,
  },
  {
    id: "noncommutative_algebra",
    subject: "Noncommutative Algebra",
    level: "University",
    difficulty: 95,
  },
  {
    id: "category_theory_and_logic",
    subject: "Category Theory and Logic",
    level: "University",
    difficulty: 95,
  },
  {
    id: "topos_theory",
    subject: "Topos Theory",
    level: "University",
    difficulty: 95,
  },
  {
    id: "sheaf_theory",
    subject: "Sheaf Theory",
    level: "University",
    difficulty: 95,
  },
  {
    id: "etale_cohomology",
    subject: "Etale Cohomology",
    level: "University",
    difficulty: 95,
  },
  {
    id: "algebraic_stacks",
    subject: "Algebraic Stacks",
    level: "University",
    difficulty: 95,
  },
  {
    id: "derived_functors",
    subject: "Derived Functors",
    level: "University",
    difficulty: 95,
  },
  {
    id: "spectral_sequences",
    subject: "Spectral Sequences",
    level: "University",
    difficulty: 95,
  },
  {
    id: "homotopy_type_theory",
    subject: "Homotopy Type Theory",
    level: "Postgraduate",
    difficulty: 98,
  },
  {
    id: "higher_homotopy_theory",
    subject: "Higher Homotopy Theory",
    level: "Postgraduate",
    difficulty: 98,
  },
  {
    id: "motivic_homotopy_theory",
    subject: "Motivic Homotopy Theory",
    level: "Postgraduate",
    difficulty: 98,
  },
  {
    id: "derived_algebraic_geometry",
    subject: "Derived Algebraic Geometry",
    level: "Postgraduate",
    difficulty: 98,
  },
  {
    id: "higher_category_theory",
    subject: "Higher Category Theory",
    level: "Postgraduate",
    difficulty: 98,
  },
  {
    id: "homological_algebra",
    subject: "Homological Algebra",
    level: "Postgraduate",
    difficulty: 98,
  },
  {
    id: "commutative_algebra",
    subject: "Commutative Algebra",
    level: "Postgraduate",
    difficulty: 98,
  },
  {
    id: "noncommutative_algebra",
    subject: "Noncommutative Algebra",
    level: "Postgraduate",
    difficulty: 98,
  },
  {
    id: "category_theory_and_logic",
    subject: "Category Theory and Logic",
    level: "Postgraduate",
    difficulty: 98,
  },
  {
    id: "topos_theory",
    subject: "Topos Theory",
    level: "Postgraduate",
    difficulty: 98,
  },
  {
    id: "sheaf_theory",
    subject: "Sheaf Theory",
    level: "Postgraduate",
    difficulty: 98,
  },
  {
    id: "etale_cohomology",
    subject: "Etale Cohomology",
    level: "Postgraduate",
    difficulty: 98,
  },
  {
    id: "algebraic_stacks",
    subject: "Algebraic Stacks",
    level: "Postgraduate",
    difficulty: 98,
  },
  {
    id: "derived_functors",
    subject: "Derived Functors",
    level: "Postgraduate",
    difficulty: 98,
  },
  {
    id: "spectral_sequences",
    subject: "Spectral Sequences",
    level: "Postgraduate",
    difficulty: 98,
  },
];

export const art_subjects = [
  {
    id: "drawing",
    subject: "Drawing",
    level: "Lower Secondary",
    difficulty: 30,
  },
  {
    id: "painting",
    subject: "Painting",
    level: "Lower Secondary",
    difficulty: 40,
  },
  {
    id: "sculpture",
    subject: "Sculpture",
    level: "Lower Secondary",
    difficulty: 45,
  },
  {
    id: "printmaking",
    subject: "Printmaking",
    level: "Upper Secondary",
    difficulty: 50,
  },
  {
    id: "ceramics",
    subject: "Ceramics",
    level: "Upper Secondary",
    difficulty: 55,
  },
  {
    id: "digital_art",
    subject: "Digital Art",
    level: "Upper Secondary",
    difficulty: 60,
  },
  {
    id: "art_history",
    subject: "Art History",
    level: "University",
    difficulty: 70,
  },
  {
    id: "modern_art",
    subject: "Modern Art",
    level: "University",
    difficulty: 65,
  },
  {
    id: "contemporary_art",
    subject: "Contemporary Art",
    level: "University",
    difficulty: 70,
  },
  {
    id: "graphic_design",
    subject: "Graphic Design",
    level: "University",
    difficulty: 65,
  },
  {
    id: "art_theory",
    subject: "Art Theory",
    level: "University",
    difficulty: 75,
  },
  {
    id: "color_theory",
    subject: "Color Theory",
    level: "University",
    difficulty: 60,
  },
  {
    id: "visual_arts",
    subject: "Visual Arts",
    level: "University",
    difficulty: 70,
  },
  { id: "fine_art", subject: "Fine Art", level: "University", difficulty: 75 },
  {
    id: "conceptual_art",
    subject: "Conceptual Art",
    level: "University/Postgraduate",
    difficulty: 80,
  },
  {
    id: "performance_art",
    subject: "Performance Art",
    level: "University/Postgraduate",
    difficulty: 75,
  },
  {
    id: "installation_art",
    subject: "Installation Art",
    level: "University/Postgraduate",
    difficulty: 80,
  },
  {
    id: "abstract_art",
    subject: "Abstract Art",
    level: "University/Postgraduate",
    difficulty: 70,
  },
  {
    id: "art_conservation",
    subject: "Art Conservation",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "museum_studies",
    subject: "Museum Studies",
    level: "Postgraduate",
    difficulty: 80,
  },
  {
    id: "art_education",
    subject: "Art Education",
    level: "Postgraduate",
    difficulty: 70,
  },
  {
    id: "arts_management",
    subject: "Arts Management",
    level: "Postgraduate",
    difficulty: 75,
  },
  {
    id: "cultural_studies",
    subject: "Cultural Studies",
    level: "Postgraduate",
    difficulty: 80,
  },
  {
    id: "media_arts",
    subject: "Media Arts",
    level: "Postgraduate",
    difficulty: 75,
  },
  {
    id: "illustration",
    subject: "Illustration",
    level: "University/Postgraduate",
    difficulty: 70,
  },
  {
    id: "textile_design",
    subject: "Textile Design",
    level: "University/Postgraduate",
    difficulty: 65,
  },
  {
    id: "fashion_design",
    subject: "Fashion Design",
    level: "University/Postgraduate",
    difficulty: 75,
  },
  {
    id: "architectural_design",
    subject: "Architectural Design",
    level: "Postgraduate",
    difficulty: 80,
  },
  {
    id: "visual_communication",
    subject: "Visual Communication",
    level: "University/Postgraduate",
    difficulty: 70,
  },
  {
    id: "digital_media",
    subject: "Digital Media",
    level: "University/Postgraduate",
    difficulty: 75,
  },
  {
    id: "interactive_design",
    subject: "Interactive Design",
    level: "Postgraduate",
    difficulty: 80,
  },
  {
    id: "art_and_technology",
    subject: "Art and Technology",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "art_therapy",
    subject: "Art Therapy",
    level: "Postgraduate",
    difficulty: 70,
  },
  {
    id: "environmental_art",
    subject: "Environmental Art",
    level: "Postgraduate",
    difficulty: 80,
  },
  {
    id: "art_philosophy",
    subject: "Art Philosophy",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "experimental_art",
    subject: "Experimental Art",
    level: "Postgraduate",
    difficulty: 90,
  },
];

export const science_subjects = [
  {
    id: "general_science",
    subject: "General Science",
    level: "Lower Secondary",
    difficulty: 30,
  },
  {
    id: "biology",
    subject: "Biology",
    level: "Lower Secondary",
    difficulty: 40,
  },
  {
    id: "chemistry",
    subject: "Chemistry",
    level: "Lower Secondary",
    difficulty: 45,
  },
  {
    id: "physics",
    subject: "Physics",
    level: "Lower Secondary",
    difficulty: 50,
  },
  {
    id: "earth_science",
    subject: "Earth Science",
    level: "Lower Secondary",
    difficulty: 40,
  },
  {
    id: "environmental_science",
    subject: "Environmental Science",
    level: "Upper Secondary",
    difficulty: 55,
  },
  {
    id: "astronomy",
    subject: "Astronomy",
    level: "Upper Secondary",
    difficulty: 60,
  },
  {
    id: "genetics",
    subject: "Genetics",
    level: "Upper Secondary",
    difficulty: 65,
  },
  {
    id: "organic_chemistry",
    subject: "Organic Chemistry",
    level: "Upper Secondary",
    difficulty: 70,
  },
  {
    id: "inorganic_chemistry",
    subject: "Inorganic Chemistry",
    level: "Upper Secondary",
    difficulty: 70,
  },
  {
    id: "quantum_physics",
    subject: "Quantum Physics",
    level: "University",
    difficulty: 85,
  },
  {
    id: "biochemistry",
    subject: "Biochemistry",
    level: "University",
    difficulty: 80,
  },
  {
    id: "molecular_biology",
    subject: "Molecular Biology",
    level: "University",
    difficulty: 75,
  },
  {
    id: "thermodynamics",
    subject: "Thermodynamics",
    level: "University",
    difficulty: 80,
  },
  {
    id: "nuclear_physics",
    subject: "Nuclear Physics",
    level: "University",
    difficulty: 85,
  },
  {
    id: "astrophysics",
    subject: "Astrophysics",
    level: "University",
    difficulty: 90,
  },
  { id: "ecology", subject: "Ecology", level: "University", difficulty: 70 },
  {
    id: "neuroscience",
    subject: "Neuroscience",
    level: "University",
    difficulty: 85,
  },
  {
    id: "marine_biology",
    subject: "Marine Biology",
    level: "University",
    difficulty: 75,
  },
  { id: "geology", subject: "Geology", level: "University", difficulty: 70 },
  {
    id: "climatology",
    subject: "Climatology",
    level: "University",
    difficulty: 75,
  },
  {
    id: "evolutionary_biology",
    subject: "Evolutionary Biology",
    level: "University",
    difficulty: 80,
  },
  {
    id: "organic_geochemistry",
    subject: "Organic Geochemistry",
    level: "University",
    difficulty: 80,
  },
  {
    id: "biophysics",
    subject: "Biophysics",
    level: "University",
    difficulty: 85,
  },
  {
    id: "materials_science",
    subject: "Materials Science",
    level: "University",
    difficulty: 80,
  },
  {
    id: "fluid_dynamics",
    subject: "Fluid Dynamics",
    level: "University",
    difficulty: 85,
  },
  {
    id: "astrobiology",
    subject: "Astrobiology",
    level: "Postgraduate",
    difficulty: 90,
  },
  {
    id: "pharmacology",
    subject: "Pharmacology",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "genomics",
    subject: "Genomics",
    level: "Postgraduate",
    difficulty: 90,
  },
  {
    id: "biomedical_engineering",
    subject: "Biomedical Engineering",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "neurobiology",
    subject: "Neurobiology",
    level: "Postgraduate",
    difficulty: 90,
  },
  {
    id: "theoretical_physics",
    subject: "Theoretical Physics",
    level: "Postgraduate",
    difficulty: 95,
  },
  {
    id: "chemical_engineering",
    subject: "Chemical Engineering",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "environmental_engineering",
    subject: "Environmental Engineering",
    level: "Postgraduate",
    difficulty: 80,
  },
  {
    id: "bioinformatics",
    subject: "Bioinformatics",
    level: "Postgraduate",
    difficulty: 90,
  },
  {
    id: "computational_biology",
    subject: "Computational Biology",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "space_science",
    subject: "Space Science",
    level: "Postgraduate",
    difficulty: 90,
  },
  {
    id: "systems_biology",
    subject: "Systems Biology",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "scientific_computing",
    subject: "Scientific Computing",
    level: "Postgraduate",
    difficulty: 80,
  },
  {
    id: "environmental_chemistry",
    subject: "Environmental Chemistry",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "climate_science",
    subject: "Climate Science",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "geophysics",
    subject: "Geophysics",
    level: "Postgraduate",
    difficulty: 90,
  },
];

export const english_subjects = [
  {
    id: "general_english",
    subject: "General English",
    level: "Lower Secondary",
    difficulty: 30,
  },
  {
    id: "english_literature",
    subject: "English Literature",
    level: "Lower Secondary",
    difficulty: 35,
  },
  {
    id: "creative_writing",
    subject: "Creative Writing",
    level: "Lower Secondary",
    difficulty: 40,
  },
  {
    id: "english_composition",
    subject: "English Composition",
    level: "Lower Secondary",
    difficulty: 35,
  },
  {
    id: "grammar",
    subject: "Grammar",
    level: "Lower Secondary",
    difficulty: 30,
  },
  {
    id: "reading_comprehension",
    subject: "Reading Comprehension",
    level: "Lower Secondary",
    difficulty: 30,
  },
  {
    id: "public_speaking",
    subject: "Public Speaking",
    level: "Upper Secondary",
    difficulty: 40,
  },
  {
    id: "advanced_english",
    subject: "Advanced English",
    level: "Upper Secondary",
    difficulty: 45,
  },
  {
    id: "creative_nonfiction",
    subject: "Creative Nonfiction",
    level: "Upper Secondary",
    difficulty: 50,
  },
  {
    id: "modern_literature",
    subject: "Modern Literature",
    level: "Upper Secondary",
    difficulty: 50,
  },
  {
    id: "literary_analysis",
    subject: "Literary Analysis",
    level: "Upper Secondary",
    difficulty: 55,
  },
  {
    id: "rhetoric",
    subject: "Rhetoric",
    level: "Upper Secondary",
    difficulty: 50,
  },
  {
    id: "american_literature",
    subject: "American Literature",
    level: "University",
    difficulty: 60,
  },
  {
    id: "british_literature",
    subject: "British Literature",
    level: "University",
    difficulty: 60,
  },
  {
    id: "postcolonial_literature",
    subject: "Postcolonial Literature",
    level: "University",
    difficulty: 65,
  },
  {
    id: "gender_studies",
    subject: "Gender Studies",
    level: "University",
    difficulty: 65,
  },
  {
    id: "comparative_literature",
    subject: "Comparative Literature",
    level: "University",
    difficulty: 70,
  },
  {
    id: "historical_linguistics",
    subject: "Historical Linguistics",
    level: "University",
    difficulty: 70,
  },
  {
    id: "literary_theory",
    subject: "Literary Theory",
    level: "University",
    difficulty: 75,
  },
  {
    id: "sociolinguistics",
    subject: "Sociolinguistics",
    level: "University",
    difficulty: 70,
  },
  {
    id: "translation_studies",
    subject: "Translation Studies",
    level: "University",
    difficulty: 70,
  },
  {
    id: "creative_writing_advanced",
    subject: "Advanced Creative Writing",
    level: "University",
    difficulty: 75,
  },
  {
    id: "narrative_theory",
    subject: "Narrative Theory",
    level: "University",
    difficulty: 75,
  },
  {
    id: "applied_linguistics",
    subject: "Applied Linguistics",
    level: "University",
    difficulty: 70,
  },
  {
    id: "literary_history",
    subject: "Literary History",
    level: "University",
    difficulty: 70,
  },
  {
    id: "discourse_analysis",
    subject: "Discourse Analysis",
    level: "University",
    difficulty: 75,
  },
  {
    id: "stylistics",
    subject: "Stylistics",
    level: "University",
    difficulty: 70,
  },
  {
    id: "genre_studies",
    subject: "Genre Studies",
    level: "University",
    difficulty: 75,
  },
  {
    id: "literary_criticism",
    subject: "Literary Criticism",
    level: "University",
    difficulty: 75,
  },
  {
    id: "linguistic_theory",
    subject: "Linguistic Theory",
    level: "University",
    difficulty: 75,
  },
  {
    id: "corpus_linguistics",
    subject: "Corpus Linguistics",
    level: "University",
    difficulty: 70,
  },
  {
    id: "rhetorical_criticism",
    subject: "Rhetorical Criticism",
    level: "University",
    difficulty: 75,
  },
  {
    id: "ethnography_of_communication",
    subject: "Ethnography of Communication",
    level: "University",
    difficulty: 70,
  },
  {
    id: "eighteenth_century_literature",
    subject: "Eighteenth-Century Literature",
    level: "Postgraduate",
    difficulty: 80,
  },
  {
    id: "nineteenth_century_literature",
    subject: "Nineteenth-Century Literature",
    level: "Postgraduate",
    difficulty: 80,
  },
  {
    id: "twentieth_century_literature",
    subject: "Twentieth-Century Literature",
    level: "Postgraduate",
    difficulty: 80,
  },
  {
    id: "feminist_literary_criticism",
    subject: "Feminist Literary Criticism",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "literary_modernism",
    subject: "Literary Modernism",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "postmodern_literature",
    subject: "Postmodern Literature",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "cultural_studies",
    subject: "Cultural Studies",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "theory_of_reception",
    subject: "Theory of Reception",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "media_studies",
    subject: "Media Studies",
    level: "Postgraduate",
    difficulty: 80,
  },
  {
    id: "literature_and_philosophy",
    subject: "Literature and Philosophy",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "comparative_rhetoric",
    subject: "Comparative Rhetoric",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "digital_humanities",
    subject: "Digital Humanities",
    level: "Postgraduate",
    difficulty: 85,
  },
];

export const history_subjects = [
  {
    id: "ancient_history",
    subject: "Ancient History",
    level: "Lower Secondary",
    difficulty: 35,
  },
  {
    id: "medieval_history",
    subject: "Medieval History",
    level: "Lower Secondary",
    difficulty: 40,
  },
  {
    id: "modern_history",
    subject: "Modern History",
    level: "Lower Secondary",
    difficulty: 40,
  },
  {
    id: "world_history",
    subject: "World History",
    level: "Lower Secondary",
    difficulty: 35,
  },
  {
    id: "us_history",
    subject: "U.S. History",
    level: "Lower Secondary",
    difficulty: 35,
  },
  {
    id: "european_history",
    subject: "European History",
    level: "Lower Secondary",
    difficulty: 35,
  },
  {
    id: "american_revolution",
    subject: "American Revolution",
    level: "Upper Secondary",
    difficulty: 45,
  },
  {
    id: "british_history",
    subject: "British History",
    level: "Upper Secondary",
    difficulty: 45,
  },
  {
    id: "russian_history",
    subject: "Russian History",
    level: "Upper Secondary",
    difficulty: 50,
  },
  {
    id: "asian_history",
    subject: "Asian History",
    level: "Upper Secondary",
    difficulty: 50,
  },
  {
    id: "colonial_history",
    subject: "Colonial History",
    level: "Upper Secondary",
    difficulty: 50,
  },
  {
    id: "history_of_science",
    subject: "History of Science",
    level: "Upper Secondary",
    difficulty: 55,
  },
  {
    id: "history_of_art",
    subject: "History of Art",
    level: "University",
    difficulty: 60,
  },
  {
    id: "economic_history",
    subject: "Economic History",
    level: "University",
    difficulty: 60,
  },
  {
    id: "political_history",
    subject: "Political History",
    level: "University",
    difficulty: 65,
  },
  {
    id: "social_history",
    subject: "Social History",
    level: "University",
    difficulty: 65,
  },
  {
    id: "military_history",
    subject: "Military History",
    level: "University",
    difficulty: 60,
  },
  {
    id: "historiography",
    subject: "Historiography",
    level: "University",
    difficulty: 70,
  },
  {
    id: "ancient_egyptian_history",
    subject: "Ancient Egyptian History",
    level: "University",
    difficulty: 65,
  },
  {
    id: "byzantine_history",
    subject: "Byzantine History",
    level: "University",
    difficulty: 70,
  },
  {
    id: "medieval_european_history",
    subject: "Medieval European History",
    level: "University",
    difficulty: 70,
  },
  {
    id: "renaissance_history",
    subject: "Renaissance History",
    level: "University",
    difficulty: 70,
  },
  {
    id: "industrial_revolution",
    subject: "Industrial Revolution",
    level: "University",
    difficulty: 65,
  },
  {
    id: "cold_war_history",
    subject: "Cold War History",
    level: "University",
    difficulty: 70,
  },
  {
    id: "history_of_technology",
    subject: "History of Technology",
    level: "University",
    difficulty: 70,
  },
  {
    id: "history_of_the_middle_east",
    subject: "History of the Middle East",
    level: "University",
    difficulty: 70,
  },
  {
    id: "latin_american_history",
    subject: "Latin American History",
    level: "University",
    difficulty: 70,
  },
  {
    id: "history_of_ancient_greece",
    subject: "History of Ancient Greece",
    level: "University",
    difficulty: 70,
  },
  {
    id: "history_of_rome",
    subject: "History of Rome",
    level: "University",
    difficulty: 70,
  },
  {
    id: "history_of_africa",
    subject: "History of Africa",
    level: "University",
    difficulty: 70,
  },
  {
    id: "history_of_india",
    subject: "History of India",
    level: "University",
    difficulty: 70,
  },
  {
    id: "modern_european_history",
    subject: "Modern European History",
    level: "University",
    difficulty: 75,
  },
  {
    id: "cultural_history",
    subject: "Cultural History",
    level: "Postgraduate",
    difficulty: 80,
  },
  {
    id: "global_history",
    subject: "Global History",
    level: "Postgraduate",
    difficulty: 80,
  },
  {
    id: "history_of_empires",
    subject: "History of Empires",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "historical_theory",
    subject: "Historical Theory",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "comparative_history",
    subject: "Comparative History",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "postcolonial_history",
    subject: "Postcolonial History",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "history_of_revolutions",
    subject: "History of Revolutions",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "history_of_nations",
    subject: "History of Nations",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "history_of_globalization",
    subject: "History of Globalization",
    level: "Postgraduate",
    difficulty: 85,
  },
];
export const geography_subjects = [
  {
    id: "physical_geography",
    subject: "Physical Geography",
    level: "Lower Secondary",
    difficulty: 35,
  },
  {
    id: "human_geography",
    subject: "Human Geography",
    level: "Lower Secondary",
    difficulty: 35,
  },
  {
    id: "environmental_geography",
    subject: "Environmental Geography",
    level: "Lower Secondary",
    difficulty: 40,
  },
  {
    id: "geographical_information_systems",
    subject: "Geographical Information Systems (GIS)",
    level: "Upper Secondary",
    difficulty: 45,
  },
  {
    id: "climate_change",
    subject: "Climate Change",
    level: "Upper Secondary",
    difficulty: 45,
  },
  {
    id: "geomorphology",
    subject: "Geomorphology",
    level: "Upper Secondary",
    difficulty: 50,
  },
  {
    id: "biogeography",
    subject: "Biogeography",
    level: "Upper Secondary",
    difficulty: 50,
  },
  {
    id: "urban_geography",
    subject: "Urban Geography",
    level: "University",
    difficulty: 55,
  },
  {
    id: "regional_geography",
    subject: "Regional Geography",
    level: "University",
    difficulty: 55,
  },
  {
    id: "economic_geography",
    subject: "Economic Geography",
    level: "University",
    difficulty: 60,
  },
  {
    id: "cultural_geography",
    subject: "Cultural Geography",
    level: "University",
    difficulty: 60,
  },
  {
    id: "hydrology",
    subject: "Hydrology",
    level: "University",
    difficulty: 65,
  },
  {
    id: "soils_geography",
    subject: "Soils Geography",
    level: "University",
    difficulty: 65,
  },
  {
    id: "cartography",
    subject: "Cartography",
    level: "University",
    difficulty: 60,
  },
  {
    id: "hazard_geography",
    subject: "Hazard Geography",
    level: "University",
    difficulty: 65,
  },
  {
    id: "glaciology",
    subject: "Glaciology",
    level: "University",
    difficulty: 70,
  },
  {
    id: "climatology",
    subject: "Climatology",
    level: "University",
    difficulty: 70,
  },
  {
    id: "sustainable_development",
    subject: "Sustainable Development",
    level: "University",
    difficulty: 65,
  },
  {
    id: "remote_sensing",
    subject: "Remote Sensing",
    level: "University",
    difficulty: 70,
  },
  {
    id: "geopolitics",
    subject: "Geopolitics",
    level: "Postgraduate",
    difficulty: 75,
  },
  {
    id: "advanced_cartography",
    subject: "Advanced Cartography",
    level: "Postgraduate",
    difficulty: 80,
  },
  {
    id: "advanced_geographical_information_systems",
    subject: "Advanced Geographical Information Systems (GIS)",
    level: "Postgraduate",
    difficulty: 80,
  },
  {
    id: "climate_systems",
    subject: "Climate Systems",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "global_urban_studies",
    subject: "Global Urban Studies",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "environmental_change",
    subject: "Environmental Change",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "global_resource_management",
    subject: "Global Resource Management",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "socio-environmental_issues",
    subject: "Socio-environmental Issues",
    level: "Postgraduate",
    difficulty: 85,
  },
  {
    id: "spatial_analysis",
    subject: "Spatial Analysis",
    level: "Postgraduate",
    difficulty: 85,
  },
];

export const physical_education_subjects = [
  {
    id: "fitness",
    subject: "Fitness",
    level: "Lower Secondary",
    difficulty: 30,
  },
  {
    id: "team_sports",
    subject: "Team Sports",
    level: "Lower Secondary",
    difficulty: 35,
  },
  {
    id: "individual_sports",
    subject: "Individual Sports",
    level: "Lower Secondary",
    difficulty: 35,
  },
  {
    id: "health_education",
    subject: "Health Education",
    level: "Lower Secondary",
    difficulty: 30,
  },
  {
    id: "athletics",
    subject: "Athletics",
    level: "Upper Secondary",
    difficulty: 40,
  },
  {
    id: "physical_fitness",
    subject: "Physical Fitness",
    level: "Upper Secondary",
    difficulty: 40,
  },
  {
    id: "sports_science",
    subject: "Sports Science",
    level: "Upper Secondary",
    difficulty: 45,
  },
  {
    id: "sports_medical",
    subject: "Sports Medicine",
    level: "Upper Secondary",
    difficulty: 45,
  },
  {
    id: "exercise_physiology",
    subject: "Exercise Physiology",
    level: "University",
    difficulty: 50,
  },
  {
    id: "biomechanics",
    subject: "Biomechanics",
    level: "University",
    difficulty: 50,
  },
  {
    id: "sports_nutrition",
    subject: "Sports Nutrition",
    level: "University",
    difficulty: 50,
  },
  {
    id: "motor_learning",
    subject: "Motor Learning",
    level: "University",
    difficulty: 55,
  },
  {
    id: "kinesiology",
    subject: "Kinesiology",
    level: "University",
    difficulty: 55,
  },
  {
    id: "sports_psychology",
    subject: "Sports Psychology",
    level: "University",
    difficulty: 55,
  },
  {
    id: "performance_analysis",
    subject: "Performance Analysis",
    level: "University",
    difficulty: 60,
  },
  {
    id: "sports_injury_rehabilitation",
    subject: "Sports Injury Rehabilitation",
    level: "University",
    difficulty: 60,
  },
  {
    id: "advanced_exercise_physiology",
    subject: "Advanced Exercise Physiology",
    level: "Postgraduate",
    difficulty: 70,
  },
  {
    id: "advanced_sports_science",
    subject: "Advanced Sports Science",
    level: "Postgraduate",
    difficulty: 70,
  },
  {
    id: "advanced_sports_psychology",
    subject: "Advanced Sports Psychology",
    level: "Postgraduate",
    difficulty: 70,
  },
  {
    id: "sports_management",
    subject: "Sports Management",
    level: "Postgraduate",
    difficulty: 65,
  },
  {
    id: "sports_performance",
    subject: "Sports Performance",
    level: "Postgraduate",
    difficulty: 75,
  },
  {
    id: "sports_technology",
    subject: "Sports Technology",
    level: "Postgraduate",
    difficulty: 75,
  },
  {
    id: "elite_athlete_training",
    subject: "Elite Athlete Training",
    level: "Postgraduate",
    difficulty: 80,
  },
  {
    id: "sports_research",
    subject: "Sports Research",
    level: "Postgraduate",
    difficulty: 80,
  },
];

export const music_subjects = [
  {
    id: "music_theory",
    subject: "Music Theory",
    level: "Lower Secondary",
    difficulty: 35,
  },
  {
    id: "basic_musicianship",
    subject: "Basic Musicianship",
    level: "Lower Secondary",
    difficulty: 30,
  },
  { id: "choir", subject: "Choir", level: "Lower Secondary", difficulty: 30 },
  { id: "band", subject: "Band", level: "Lower Secondary", difficulty: 30 },
  {
    id: "orchestra",
    subject: "Orchestra",
    level: "Lower Secondary",
    difficulty: 35,
  },
  {
    id: "music_appreciation",
    subject: "Music Appreciation",
    level: "Upper Secondary",
    difficulty: 35,
  },
  {
    id: "advanced_music_theory",
    subject: "Advanced Music Theory",
    level: "Upper Secondary",
    difficulty: 40,
  },
  {
    id: "music_history",
    subject: "Music History",
    level: "Upper Secondary",
    difficulty: 40,
  },
  {
    id: "instrumental_studies",
    subject: "Instrumental Studies",
    level: "Upper Secondary",
    difficulty: 40,
  },
  {
    id: "vocal_studies",
    subject: "Vocal Studies",
    level: "Upper Secondary",
    difficulty: 40,
  },
  {
    id: "composition",
    subject: "Composition",
    level: "University",
    difficulty: 50,
  },
  {
    id: "arranging",
    subject: "Arranging",
    level: "University",
    difficulty: 50,
  },
  {
    id: "music_technology",
    subject: "Music Technology",
    level: "University",
    difficulty: 50,
  },
  {
    id: "music_education",
    subject: "Music Education",
    level: "University",
    difficulty: 55,
  },
  {
    id: "ethnomusicology",
    subject: "Ethnomusicology",
    level: "University",
    difficulty: 55,
  },
  {
    id: "music_therapy",
    subject: "Music Therapy",
    level: "University",
    difficulty: 55,
  },
  {
    id: "advanced_music_history",
    subject: "Advanced Music History",
    level: "Postgraduate",
    difficulty: 60,
  },
  {
    id: "advanced_composition",
    subject: "Advanced Composition",
    level: "Postgraduate",
    difficulty: 65,
  },
  {
    id: "advanced_music_technology",
    subject: "Advanced Music Technology",
    level: "Postgraduate",
    difficulty: 65,
  },
  {
    id: "music_research",
    subject: "Music Research",
    level: "Postgraduate",
    difficulty: 70,
  },
  {
    id: "music_performance",
    subject: "Music Performance",
    level: "Postgraduate",
    difficulty: 70,
  },
  {
    id: "music_scholarship",
    subject: "Music Scholarship",
    level: "Postgraduate",
    difficulty: 75,
  },
];

export const language_subjects = [
  // Specific Languages
  { id: "english", subject: "English", level: "Secondary", difficulty: 30 },
  { id: "french", subject: "French", level: "Secondary", difficulty: 40 },
  { id: "spanish", subject: "Spanish", level: "Secondary", difficulty: 35 },
  { id: "german", subject: "German", level: "Secondary", difficulty: 45 },
  { id: "italian", subject: "Italian", level: "Secondary", difficulty: 30 },
  { id: "mandarin", subject: "Mandarin", level: "University", difficulty: 70 },
  { id: "japanese", subject: "Japanese", level: "University", difficulty: 60 },
  { id: "korean", subject: "Korean", level: "University", difficulty: 55 },
  {
    id: "portuguese",
    subject: "Portuguese",
    level: "Secondary",
    difficulty: 40,
  },
  { id: "arabic", subject: "Arabic", level: "University", difficulty: 75 },
  { id: "russian", subject: "Russian", level: "University", difficulty: 65 },
  { id: "hindi", subject: "Hindi", level: "University", difficulty: 50 },
  { id: "bengali", subject: "Bengali", level: "University", difficulty: 45 },
  { id: "swahili", subject: "Swahili", level: "University", difficulty: 40 },
  // Language Study Areas
  {
    id: "language_studies",
    subject: "Language Studies",
    level: "University",
    difficulty: 55,
  },
  {
    id: "advanced_language_studies",
    subject: "Advanced Language Studies",
    level: "University",
    difficulty: 70,
  },
  {
    id: "linguistics",
    subject: "Linguistics",
    level: "University",
    difficulty: 60,
  },
  {
    id: "comparative_literature",
    subject: "Comparative Literature",
    level: "University",
    difficulty: 65,
  },
  {
    id: "translation_studies",
    subject: "Translation Studies",
    level: "University",
    difficulty: 60,
  },
  {
    id: "applied_linguistics",
    subject: "Applied Linguistics",
    level: "University",
    difficulty: 55,
  },
  {
    id: "language_culture",
    subject: "Language and Culture",
    level: "University",
    difficulty: 50,
  },
  {
    id: "language_policy",
    subject: "Language Policy",
    level: "University",
    difficulty: 60,
  },
  {
    id: "advanced_translation",
    subject: "Advanced Translation",
    level: "University",
    difficulty: 65,
  },
  {
    id: "language_research",
    subject: "Language Research",
    level: "University",
    difficulty: 70,
  },
  {
    id: "language_acquisition",
    subject: "Language Acquisition",
    level: "University",
    difficulty: 60,
  },
  {
    id: "language_cognition",
    subject: "Language Cognition",
    level: "University",
    difficulty: 65,
  },
];

export const technology_subjects = [
  {
    id: "software_engineering",
    subject: "Software Engineering",
    level: "Undergraduate",
    difficulty: 80,
  },
  {
    id: "information_technology",
    subject: "Information Technology",
    level: "Undergraduate",
    difficulty: 70,
  },
  {
    id: "cybersecurity",
    subject: "Cybersecurity",
    level: "Undergraduate",
    difficulty: 85,
  },
  {
    id: "artificial_intelligence",
    subject: "Artificial Intelligence",
    level: "Undergraduate",
    difficulty: 90,
  },
  {
    id: "machine_learning",
    subject: "Machine Learning",
    level: "Undergraduate",
    difficulty: 85,
  },
  {
    id: "data_science",
    subject: "Data Science",
    level: "Undergraduate",
    difficulty: 80,
  },
  {
    id: "big_data",
    subject: "Big Data",
    level: "Undergraduate",
    difficulty: 75,
  },
  {
    id: "cloud_computing",
    subject: "Cloud Computing",
    level: "Undergraduate",
    difficulty: 70,
  },
  {
    id: "networking",
    subject: "Networking",
    level: "Undergraduate",
    difficulty: 65,
  },
  {
    id: "database_management",
    subject: "Database Management",
    level: "Undergraduate",
    difficulty: 70,
  },
  {
    id: "web_development",
    subject: "Web Development",
    level: "Undergraduate",
    difficulty: 60,
  },
  {
    id: "mobile_app_development",
    subject: "Mobile App Development",
    level: "Undergraduate",
    difficulty: 70,
  },
  {
    id: "game_development",
    subject: "Game Development",
    level: "Undergraduate",
    difficulty: 75,
  },
  {
    id: "human_computer_interaction",
    subject: "Human-Computer Interaction",
    level: "Undergraduate",
    difficulty: 65,
  },
  {
    id: "internet_of_things",
    subject: "Internet of Things",
    level: "Undergraduate",
    difficulty: 75,
  },
  {
    id: "virtual_reality",
    subject: "Virtual Reality",
    level: "Undergraduate",
    difficulty: 80,
  },
  {
    id: "augmented_reality",
    subject: "Augmented Reality",
    level: "Undergraduate",
    difficulty: 80,
  },
  {
    id: "robotics",
    subject: "Robotics",
    level: "Undergraduate",
    difficulty: 85,
  },
  {
    id: "software_testing",
    subject: "Software Testing",
    level: "Undergraduate",
    difficulty: 60,
  },
  {
    id: "embedded_systems",
    subject: "Embedded Systems",
    level: "Undergraduate",
    difficulty: 70,
  },
  {
    id: "operating_systems",
    subject: "Operating Systems",
    level: "Undergraduate",
    difficulty: 80,
  },
  {
    id: "computer_graphics",
    subject: "Computer Graphics",
    level: "Undergraduate",
    difficulty: 75,
  },
  {
    id: "algorithms",
    subject: "Algorithms",
    level: "Undergraduate",
    difficulty: 85,
  },
  {
    id: "data_structures",
    subject: "Data Structures",
    level: "Undergraduate",
    difficulty: 80,
  },
  {
    id: "computer_networks",
    subject: "Computer Networks",
    level: "Undergraduate",
    difficulty: 75,
  },
  {
    id: "cryptography",
    subject: "Cryptography",
    level: "Undergraduate",
    difficulty: 90,
  },
  {
    id: "digital_signal_processing",
    subject: "Digital Signal Processing",
    level: "Undergraduate",
    difficulty: 85,
  },
  {
    id: "computational_theory",
    subject: "Computational Theory",
    level: "Undergraduate",
    difficulty: 85,
  },
  {
    id: "distributed_systems",
    subject: "Distributed Systems",
    level: "Undergraduate",
    difficulty: 80,
  },
  {
    id: "software_architecture",
    subject: "Software Architecture",
    level: "Undergraduate",
    difficulty: 80,
  },
  {
    id: "hardware_design",
    subject: "Hardware Design",
    level: "Undergraduate",
    difficulty: 75,
  },
  {
    id: "internet_security",
    subject: "Internet Security",
    level: "Undergraduate",
    difficulty: 85,
  },
  {
    id: "data_analytics",
    subject: "Data Analytics",
    level: "Undergraduate",
    difficulty: 75,
  },
  {
    id: "web_security",
    subject: "Web Security",
    level: "Undergraduate",
    difficulty: 80,
  },
  {
    id: "business_intelligence",
    subject: "Business Intelligence",
    level: "Undergraduate",
    difficulty: 70,
  },
  {
    id: "quantum_computing",
    subject: "Quantum Computing",
    level: "Postgraduate",
    difficulty: 90,
  },
  {
    id: "computer_vision",
    subject: "Computer Vision",
    level: "Undergraduate",
    difficulty: 80,
  },
  {
    id: "natural_language_processing",
    subject: "Natural Language Processing",
    level: "Undergraduate",
    difficulty: 85,
  },
  {
    id: "cloud_architecture",
    subject: "Cloud Architecture",
    level: "Undergraduate",
    difficulty: 75,
  },
  {
    id: "blockchain_technology",
    subject: "Blockchain Technology",
    level: "Undergraduate",
    difficulty: 80,
  },
  {
    id: "digital_marketing",
    subject: "Digital Marketing",
    level: "Undergraduate",
    difficulty: 60,
  },
  {
    id: "software_project_management",
    subject: "Software Project Management",
    level: "Undergraduate",
    difficulty: 70,
  },
  {
    id: "user_experience_design",
    subject: "User Experience Design",
    level: "Undergraduate",
    difficulty: 65,
  },
  {
    id: "user_interface_design",
    subject: "User Interface Design",
    level: "Undergraduate",
    difficulty: 65,
  },
  {
    id: "ethical_hacking",
    subject: "Ethical Hacking",
    level: "Undergraduate",
    difficulty: 80,
  },
  {
    id: "systems_analysis",
    subject: "Systems Analysis",
    level: "Undergraduate",
    difficulty: 70,
  },
  {
    id: "information_systems",
    subject: "Information Systems",
    level: "Undergraduate",
    difficulty: 70,
  },
  {
    id: "technology_management",
    subject: "Technology Management",
    level: "Undergraduate",
    difficulty: 65,
  },
  {
    id: "it_infrastructure",
    subject: "IT Infrastructure",
    level: "Undergraduate",
    difficulty: 70,
  },
  {
    id: "digital_transformation",
    subject: "Digital Transformation",
    level: "Undergraduate",
    difficulty: 75,
  },
  {
    id: "software_development_lifecycle",
    subject: "Software Development Lifecycle",
    level: "Undergraduate",
    difficulty: 75,
  },
  {
    id: "data_engineering",
    subject: "Data Engineering",
    level: "Undergraduate",
    difficulty: 80,
  },
  {
    id: "technology_innovation",
    subject: "Technology Innovation",
    level: "Undergraduate",
    difficulty: 75,
  },
  {
    id: "augmented_intelligence",
    subject: "Augmented Intelligence",
    level: "Undergraduate",
    difficulty: 80,
  },
  {
    id: "human_ai_interaction",
    subject: "Human-AI Interaction",
    level: "Undergraduate",
    difficulty: 75,
  },
  {
    id: "ethical_ai",
    subject: "Ethical AI",
    level: "Undergraduate",
    difficulty: 70,
  },
  {
    id: "computing_infrastructure",
    subject: "Computing Infrastructure",
    level: "Undergraduate",
    difficulty: 70,
  },
  {
    id: "information_retrieval",
    subject: "Information Retrieval",
    level: "Undergraduate",
    difficulty: 75,
  },
  {
    id: "digital_forensics",
    subject: "Digital Forensics",
    level: "Undergraduate",
    difficulty: 80,
  },
  {
    id: "data_privacy",
    subject: "Data Privacy",
    level: "Undergraduate",
    difficulty: 75,
  },
  {
    id: "smart_technologies",
    subject: "Smart Technologies",
    level: "Undergraduate",
    difficulty: 70,
  },
  {
    id: "biomedical_engineering",
    subject: "Biomedical Engineering",
    level: "Undergraduate",
    difficulty: 80,
  },
  {
    id: "environmental_technology",
    subject: "Environmental Technology",
    level: "Undergraduate",
    difficulty: 70,
  },
  {
    id: "automotive_technology",
    subject: "Automotive Technology",
    level: "Undergraduate",
    difficulty: 75,
  },
  {
    id: "aerospace_technology",
    subject: "Aerospace Technology",
    level: "Undergraduate",
    difficulty: 75,
  },
  {
    id: "nano_technology",
    subject: "Nanotechnology",
    level: "Undergraduate",
    difficulty: 80,
  },
  {
    id: "materials_science",
    subject: "Materials Science",
    level: "Undergraduate",
    difficulty: 70,
  },
  {
    id: "user_research",
    subject: "User Research",
    level: "Undergraduate",
    difficulty: 60,
  },
  {
    id: "technology_policy",
    subject: "Technology Policy",
    level: "Undergraduate",
    difficulty: 65,
  },
  {
    id: "computational_linguistics",
    subject: "Computational Linguistics",
    level: "Undergraduate",
    difficulty: 75,
  },
  {
    id: "digital_media",
    subject: "Digital Media",
    level: "Undergraduate",
    difficulty: 60,
  },
  {
    id: "interactive_design",
    subject: "Interactive Design",
    level: "Undergraduate",
    difficulty: 70,
  },
  {
    id: "geographic_information_systems",
    subject: "Geographic Information Systems",
    level: "Undergraduate",
    difficulty: 70,
  },
  {
    id: "web_design",
    subject: "Web Design",
    level: "Undergraduate",
    difficulty: 60,
  },
  {
    id: "human_robot_interaction",
    subject: "Human-Robot Interaction",
    level: "Undergraduate",
    difficulty: 75,
  },
  {
    id: "virtual_environments",
    subject: "Virtual Environments",
    level: "Undergraduate",
    difficulty: 80,
  },
  {
    id: "computational_modeling",
    subject: "Computational Modeling",
    level: "Undergraduate",
    difficulty: 80,
  },
  {
    id: "data_visualization",
    subject: "Data Visualization",
    level: "Undergraduate",
    difficulty: 70,
  },
  {
    id: "it_service_management",
    subject: "IT Service Management",
    level: "Undergraduate",
    difficulty: 65,
  },
  {
    id: "design_patterns",
    subject: "Design Patterns",
    level: "Undergraduate",
    difficulty: 75,
  },
  {
    id: "information_assurance",
    subject: "Information Assurance",
    level: "Undergraduate",
    difficulty: 70,
  },
  {
    id: "software_configuration_management",
    subject: "Software Configuration Management",
    level: "Undergraduate",
    difficulty: 75,
  },
  {
    id: "business_process_automation",
    subject: "Business Process Automation",
    level: "Undergraduate",
    difficulty: 65,
  },
  {
    id: "human_factors_engineering",
    subject: "Human Factors Engineering",
    level: "Undergraduate",
    difficulty: 70,
  },
  {
    id: "technology_in_education",
    subject: "Technology in Education",
    level: "Undergraduate",
    difficulty: 60,
  },
  {
    id: "information_technology_in_healthcare",
    subject: "Information Technology in Healthcare",
    level: "Undergraduate",
    difficulty: 65,
  },
  {
    id: "information_technology_in_business",
    subject: "Information Technology in Business",
    level: "Undergraduate",
    difficulty: 65,
  },
  {
    id: "advanced_computer_architecture",
    subject: "Advanced Computer Architecture",
    level: "Postgraduate",
    difficulty: 85,
  },
];
