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
