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
      name: "University of 
