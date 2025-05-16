
export interface SubBrand {
  id: number;
  name: string;
  logo?: string;
  description: string;
  fullDescription?: string;
  features?: string[];
  category?: string;
  yearFounded?: string;
  website?: string;
}

export interface Brand {
  id: number;
  name: string;
  logo: string;
  category: string[];
  rating: number;
  subBrands: SubBrand[];
}

export const brandsData: Brand[] = [
  {
    id: 1,
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    category: ["Trending", "Most Viewed"],
    rating: 4.5,
    subBrands: [
      { 
        id: 101, 
        name: "YouTube", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png",
        description: "Video sharing platform",
        fullDescription: "YouTube is the world's largest video sharing platform, allowing users to upload, view, share, rate, and comment on videos. Founded in 2005, it was acquired by Google in 2006 for $1.65 billion. Today, YouTube has over 2 billion logged-in monthly users and billions of hours of video are watched daily.",
        features: [
          "Content creation and monetization",
          "Live streaming capabilities",
          "YouTube Premium subscription service",
          "YouTube Music integrated platform",
          "YouTube Kids for child-friendly content"
        ],
        category: "Entertainment & Media",
        yearFounded: "2005",
        website: "https://www.youtube.com"
      },
      { 
        id: 102, 
        name: "Gmail", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png",
        description: "Email service",
        fullDescription: "Gmail is a free email service developed by Google. It features a clean interface, powerful spam filtering, and integration with other Google services. Launched on April 1, 2004, Gmail now has over 1.5 billion active users worldwide, making it one of the most popular email services.",
        features: [
          "15GB free storage shared with Google Drive",
          "Advanced spam and malware protection",
          "Smart categorization of emails",
          "Integration with Google Meet and Chat",
          "Offline access capability"
        ],
        category: "Communication",
        yearFounded: "2004",
        website: "https://gmail.com"
      },
      { 
        id: 103, 
        name: "Android", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/1745px-Android_robot.svg.png",
        description: "Mobile operating system",
        fullDescription: "Android is a mobile operating system developed by Google, based on a modified version of the Linux kernel. It powers smartphones, tablets, smartwatches, TVs, and other devices. Android is the world's most widely used mobile OS, with over 2.5 billion active devices as of 2020.",
        features: [
          "Open source foundation with customizability",
          "Google Play Store with millions of apps",
          "Integration with Google services",
          "Regular security updates",
          "Support for multiple device manufacturers"
        ],
        category: "Operating System",
        yearFounded: "2008",
        website: "https://www.android.com"
      },
      { 
        id: 104, 
        name: "Chrome", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png",
        description: "Web browser",
        fullDescription: "Google Chrome is a cross-platform web browser developed by Google. Launched in 2008, it's now the world's most popular web browser with approximately 65% market share. Chrome is known for its speed, security, and integration with Google's ecosystem of products.",
        features: [
          "Fast page loading and JavaScript execution",
          "Syncing across devices with Google account",
          "Extensions and web app support",
          "Built-in developer tools",
          "Incognito mode for private browsing"
        ],
        category: "Web Browser",
        yearFounded: "2008",
        website: "https://www.google.com/chrome"
      },
      { 
        id: 105, 
        name: "Google Maps", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1428px-Google_Maps_icon_%282020%29.svg.png",
        description: "Mapping service",
        fullDescription: "Google Maps is a web mapping platform and consumer application offering satellite imagery, aerial photography, street maps, 360° interactive panoramic views, real-time traffic conditions, and route planning for traveling by foot, car, bike, air, and public transportation.",
        features: [
          "Real-time GPS navigation",
          "Street View and 3D view of locations",
          "Local business information and reviews",
          "Public transit schedules and routing",
          "Offline maps for areas without connectivity"
        ],
        category: "Navigation & Location Services",
        yearFounded: "2005",
        website: "https://maps.google.com"
      }
    ]
  },
  {
    id: 2,
    name: "Meta (Facebook)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png",
    category: ["Most Viewed", "Recently Acquired"],
    rating: 4.0,
    subBrands: [
      { 
        id: 201, 
        name: "Instagram", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
        description: "Photo and video sharing social network",
        fullDescription: "Instagram is a photo and video sharing social networking service owned by Meta Platforms. The app allows users to upload photos and videos, which can be edited with filters and organized with tags. Instagram was created by Kevin Systrom and Mike Krieger and launched in October 2010, and was acquired by Facebook in 2012 for approximately $1 billion.",
        features: [
          "Photo and video sharing with filters",
          "Stories with 24-hour visibility",
          "IGTV for longer-form video content",
          "Direct messaging capabilities",
          "Shopping features for businesses"
        ],
        category: "Social Media",
        yearFounded: "2010",
        website: "https://www.instagram.com"
      },
      { 
        id: 202, 
        name: "WhatsApp", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png",
        description: "Messaging app",
        fullDescription: "WhatsApp is a freeware, cross-platform messaging and Voice over IP service owned by Meta Platforms. It allows users to send text messages and voice messages, make voice and video calls, and share images, documents, user locations, and other media. WhatsApp was founded by Brian Acton and Jan Koum, former employees of Yahoo!, and was acquired by Facebook in February 2014 for approximately $19.3 billion.",
        features: [
          "End-to-end encryption for secure messaging",
          "Voice and video calling capabilities",
          "Group chats with up to 256 people",
          "Status updates that disappear after 24 hours",
          "Desktop and web applications"
        ],
        category: "Messaging & Communication",
        yearFounded: "2009",
        website: "https://www.whatsapp.com"
      },
      { 
        id: 203, 
        name: "Oculus", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Oculus_VR.svg/1200px-Oculus_VR.svg.png",
        description: "Virtual reality technology",
        fullDescription: "Oculus is a brand of Meta Platforms that produces virtual reality headsets, including the Oculus Rift and Oculus Quest series. Founded by Palmer Luckey, Brendan Iribe, Michael Antonov, and Nate Mitchell in 2012, Oculus was acquired by Facebook in 2014 for $2.3 billion. The company has since been rebranded as Reality Labs, although its products still carry the Oculus name.",
        features: [
          "Immersive virtual reality experiences",
          "Wireless and standalone headsets",
          "Wide library of VR games and applications",
          "Social VR spaces for connecting with others",
          "Hand tracking technology"
        ],
        category: "Virtual Reality Technology",
        yearFounded: "2012",
        website: "https://www.oculus.com"
      },
      { 
        id: 204, 
        name: "Messenger", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png",
        description: "Messaging platform",
        fullDescription: "Facebook Messenger is a messaging app and platform developed by Meta Platforms. Originally developed as Facebook Chat in 2008, Messenger was revamped in 2010 and released as a standalone app in 2011. The service allows users to send messages, exchange photos, videos, stickers, audio, and files, as well as react to other users' messages and interact with bots.",
        features: [
          "Instant messaging with text, voice, and video",
          "Group conversations and calls",
          "Integration with Facebook's ecosystem",
          "Business messaging capabilities",
          "Mini-games and interactive features"
        ],
        category: "Messaging & Communication",
        yearFounded: "2011",
        website: "https://www.messenger.com"
      }
    ]
  },
  {
    id: 3,
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    category: ["Trending", "Most Viewed"],
    rating: 4.2,
    subBrands: [
      { 
        id: 301, 
        name: "AWS", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png",
        description: "Cloud computing platform",
        fullDescription: "Amazon Web Services (AWS) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis. As of 2021, AWS is the leading cloud service provider globally with 32% market share, offering over 200 services from data centers globally.",
        features: [
          "Elastic Compute Cloud (EC2) for scalable computing",
          "Simple Storage Service (S3) for object storage",
          "Lambda serverless computing platform",
          "Database services including RDS and DynamoDB",
          "Machine learning and AI services"
        ],
        category: "Cloud Computing",
        yearFounded: "2006",
        website: "https://aws.amazon.com"
      },
      { 
        id: 302, 
        name: "Prime Video", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Amazon_Prime_Video_logo.svg/2560px-Amazon_Prime_Video_logo.svg.png",
        description: "Streaming service",
        fullDescription: "Amazon Prime Video is a subscription video on-demand over-the-top streaming and rental service that offers a variety of original content and licensed programming. It's included with an Amazon Prime membership or can be subscribed to as a standalone service. Prime Video features movies, TV shows, and original content like 'The Marvelous Mrs. Maisel' and 'The Boys.'",
        features: [
          "Thousands of movies and TV shows",
          "Award-winning Amazon Originals",
          "Download content for offline viewing",
          "4K Ultra HD, HDR, and Dolby Atmos support",
          "Prime Video Channels for additional subscriptions"
        ],
        category: "Entertainment & Streaming",
        yearFounded: "2006",
        website: "https://www.primevideo.com"
      },
      { 
        id: 303, 
        name: "Twitch", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Twitch_logo.svg/2560px-Twitch_logo.svg.png",
        description: "Live streaming platform",
        fullDescription: "Twitch is a video live streaming service that focuses on video game live streaming, including broadcasts of esports competitions, music broadcasts, creative content, and more recently, 'in real life' streams. Acquired by Amazon in 2014 for $970 million, Twitch has become the leading live streaming platform for gamers with over 140 million monthly active users.",
        features: [
          "Live streaming of games and other content",
          "Interactive chat with streamers and viewers",
          "Subscription and monetization options for creators",
          "Channel points and community rewards",
          "Integration with Amazon Prime through Twitch Prime"
        ],
        category: "Live Streaming & Entertainment",
        yearFounded: "2011",
        website: "https://www.twitch.tv"
      },
      { 
        id: 304, 
        name: "Whole Foods", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Whole_Foods_Market_201x_logo.svg/2560px-Whole_Foods_Market_201x_logo.svg.png",
        description: "Organic grocery chain",
        fullDescription: "Whole Foods Market is an American multinational supermarket chain headquartered in Austin, Texas, which exclusively sells products free from hydrogenated fats and artificial colors, flavors, and preservatives. Acquired by Amazon in 2017 for $13.7 billion, Whole Foods operates more than 500 stores in North America and the United Kingdom.",
        features: [
          "High-quality organic and natural products",
          "Local and seasonal produce emphasis",
          "Discounts for Amazon Prime members",
          "Prepared foods and specialty departments",
          "Commitment to sustainable practices"
        ],
        category: "Grocery & Retail",
        yearFounded: "1980",
        website: "https://www.wholefoodsmarket.com"
      },
      { 
        id: 305, 
        name: "Audible", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Audible_logo.svg/2560px-Audible_logo.svg.png",
        description: "Audiobook service",
        fullDescription: "Audible is an online audiobook and podcast service owned by Amazon. The service allows users to purchase and stream audiobooks and other forms of spoken audio content. Founded in 1995 and acquired by Amazon in 2008 for $300 million, Audible is the largest producer and retailer of audiobooks in the United States.",
        features: [
          "World's largest selection of audiobooks",
          "Original audio productions and podcasts",
          "Monthly subscription with credits for purchases",
          "Whispersync technology to switch between reading and listening",
          "Offline listening capabilities"
        ],
        category: "Audio Entertainment",
        yearFounded: "1995",
        website: "https://www.audible.com"
      }
    ]
  },
  // Continue with other brands with enhanced data (for brevity, not all brands included in this example)
  {
    id: 7,
    name: "Disney",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Disney_wordmark.svg/2560px-Disney_wordmark.svg.png",
    category: ["Recently Acquired", "Most Viewed"],
    rating: 4.6,
    subBrands: [
      { 
        id: 701, 
        name: "Marvel", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png",
        description: "Entertainment company",
        fullDescription: "Marvel Entertainment is an American entertainment company founded in 1998, and a subsidiary of The Walt Disney Company since 2009. Marvel is known for its Marvel Comics, Marvel Studios, and Marvel Television divisions. The Marvel Cinematic Universe has become the highest-grossing film franchise of all time, with films such as Avengers: Endgame breaking numerous box office records.",
        features: [
          "Marvel Cinematic Universe of interconnected films",
          "Comic book publishing with iconic characters",
          "Television productions across multiple networks",
          "Merchandise licensing for thousands of products",
          "Theme park attractions around the world"
        ],
        category: "Entertainment & Media",
        yearFounded: "1998",
        website: "https://www.marvel.com"
      },
      { 
        id: 702, 
        name: "Pixar", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Pixar_logo.svg/1280px-Pixar_logo.svg.png",
        description: "Animation studio",
        fullDescription: "Pixar Animation Studios is an American computer animation studio known for its critically and commercially successful animated feature films. Founded in 1986 and acquired by Disney in 2006 for $7.4 billion, Pixar has produced 25 feature films starting with Toy Story in 1995. The studio has won 23 Academy Awards and is renowned for its storytelling and technological innovation.",
        features: [
          "Pioneering computer animation techniques",
          "Storytelling focused on universal emotional themes",
          "Original IP development with successful franchises",
          "RenderMan software used throughout the film industry",
          "SparkShorts program for experimental content"
        ],
        category: "Animation & Film Production",
        yearFounded: "1986",
        website: "https://www.pixar.com"
      },
      { 
        id: 703, 
        name: "Star Wars", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png",
        description: "Media franchise",
        fullDescription: "Star Wars is an American epic space opera media franchise created by George Lucas. The franchise began with the 1977 film Star Wars and quickly became a worldwide pop culture phenomenon. Disney acquired Lucasfilm and the Star Wars franchise in 2012 for $4.05 billion. The franchise includes films, television series, video games, theme park attractions, and extensive merchandise.",
        features: [
          "Skywalker Saga of nine main films",
          "Expanded universe with spin-off films and series",
          "The Mandalorian and other Disney+ original content",
          "Immersive theme park experiences (Galaxy's Edge)",
          "Extensive line of toys and merchandise"
        ],
        category: "Entertainment & Media Franchise",
        yearFounded: "1977",
        website: "https://www.starwars.com"
      },
      { 
        id: 704, 
        name: "ESPN", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/2560px-ESPN_wordmark.svg.png",
        description: "Sports network",
        fullDescription: "ESPN (Entertainment and Sports Programming Network) is an American multinational basic cable sports channel. Launched in 1979 and majority-owned by Disney since 1996, ESPN broadcasts primarily from studio facilities in Bristol, Connecticut. It is the leading sports media brand, operating multiple TV channels, a magazine, website, and radio network.",
        features: [
          "Live coverage of major sports leagues and events",
          "Original programming including SportsCenter",
          "ESPN+ streaming service for additional content",
          "Fantasy sports platforms",
          "Industry-leading sports journalism and analysis"
        ],
        category: "Sports Media",
        yearFounded: "1979",
        website: "https://www.espn.com"
      },
      { 
        id: 705, 
        name: "National Geographic", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/National-Geographic-Logo.svg/2560px-National-Geographic-Logo.svg.png",
        description: "Media brand",
        fullDescription: "National Geographic is a brand that encompasses a television network, magazine, and other media properties focused on science, adventure, and exploration. Founded in 1888 and now majority-owned by Disney through the acquisition of 21st Century Fox in 2019, National Geographic reaches millions of people across various platforms worldwide.",
        features: [
          "Award-winning photography and visual storytelling",
          "Scientific exploration and expedition funding",
          "Documentary production and television programming",
          "Education initiatives and classroom resources",
          "Conservation and environmental advocacy"
        ],
        category: "Educational Media & Publishing",
        yearFounded: "1888",
        website: "https://www.nationalgeographic.com"
      }
    ]
  },
  {
    id: 8,
    name: "Nestle",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Nestl%C3%A9.svg/1200px-Nestl%C3%A9.svg.png",
    category: ["Suspicious", "Most Viewed"],
    rating: 3.2,
    subBrands: [
      { 
        id: 801, 
        name: "Kit Kat", 
        logo: "https://upload.wikimedia.org/wikipedia/en/5/5d/Kit_Kat_logo.svg",
        description: "Chocolate bar",
        fullDescription: "Kit Kat is a chocolate-covered wafer bar confection created by Rowntree's of York, United Kingdom, and is now produced globally by Nestlé. In the United States, Kit Kat is produced under license by The Hershey Company. The standard bars consist of two or four pieces composed of three layers of wafer, separated and covered by an outer layer of chocolate. Each finger can be snapped from the bar separately, reflecting the brand's iconic marketing slogan: 'Have a break, have a Kit Kat.'",
        features: [
          "Signature crispy wafer layers with chocolate coating",
          "Wide variety of limited edition and regional flavors",
          "Iconic 'break' design for sharing",
          "Popular in Japan with over 400 unique flavors released",
          "Available in different sizes from single fingers to large packs"
        ],
        category: "Confectionery",
        yearFounded: "1935",
        website: "https://www.kitkat.com"
      },
      { 
        id: 802, 
        name: "Nescafe", 
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Nescafe_logo_2014.svg/1200px-Nescafe_logo_2014.svg.png",
        description: "Coffee brand",
        fullDescription: "Nescafé is a brand of coffee made by Nestlé. It comes in many different forms including instant coffee, capsule systems like Nespresso, and ready-to-drink beverages. The name is a portmanteau of the words 'Nestlé' and 'café'. Launched in 1938, Nescafé is now one of the world's largest coffee brands, sold in over 180 countries.",
        features: [
          "Wide range of instant coffee products",
          "Proprietary coffee extraction technology",
          "Various blends and roast profiles",
          "Ready-to-drink coffee beverages",
          "Coffee machines including Dolce Gusto system"
        ],
        category: "Coffee & Beverages",
        yearFounded: "1938",
        website: "https://www.nescafe.com"
      },
      { 
        id: 803, 
        name: "Perrier", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Perrier_logo.svg/2560px-Perrier_logo.svg.png",
        description: "Bottled water brand",
        fullDescription: "Perrier is a French brand of natural bottled mineral water captured at the source in Vergèze, located in the Gard department. Perrier is best known for its naturally occurring carbonation, distinctive green bottle, and higher levels of carbonation compared to other sparkling waters. The brand was purchased by Nestlé in 1992 and remains one of the most recognized sparkling water brands worldwide.",
        features: [
          "Natural carbonation from the spring source",
          "Zero calories and no artificial sweeteners",
          "Iconic green bottle packaging",
          "Variety of flavored options",
          "Available in multiple sizes for different occasions"
        ],
        category: "Bottled Water",
        yearFounded: "1898",
        website: "https://www.perrier.com"
      },
      { 
        id: 804, 
        name: "Purina", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Purina.svg/1200px-Purina.svg.png",
        description: "Pet food brand",
        fullDescription: "Purina is a major American producer of pet food, treats, and cat litter. Purina was founded in 1894 in St. Louis, Missouri, and was acquired by Nestlé in 2001 for $10.3 billion, becoming the company's second-largest acquisition at that time. The brand includes product lines such as Purina ONE, Purina Pro Plan, Friskies, Fancy Feast, and many others for dogs and cats.",
        features: [
          "Research-based nutritional formulas for pets",
          "Specialized diets for different life stages",
          "Prescription diets for pets with health conditions",
          "Various treat options for training and rewards",
          "Commitment to sustainable sourcing practices"
        ],
        category: "Pet Care & Nutrition",
        yearFounded: "1894",
        website: "https://www.purina.com"
      },
      { 
        id: 805, 
        name: "Häagen-Dazs", 
        logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/Haagen-Dazs_logo.svg",
        description: "Ice cream brand",
        fullDescription: "Häagen-Dazs is an American ice cream brand owned by Nestlé in the United States, and General Mills in the rest of the world. The company was established in 1961 by Reuben and Rose Mattus in the Bronx, New York. Despite its Danish-sounding name, the company has no Danish connections. Häagen-Dazs is known for its premium ingredients and creamy texture, with simple recipes that focus on quality over additives and fillers.",
        features: [
          "Premium ingredients with no artificial colors or flavors",
          "Dense, creamy texture with less air than typical ice creams",
          "Wide range of classic and innovative flavors",
          "Shops and cafes in addition to packaged products",
          "Seasonal and limited edition offerings"
        ],
        category: "Ice Cream & Frozen Desserts",
        yearFounded: "1961",
        website: "https://www.haagendazs.com"
      }
    ]
  },
  // Continue with other brands if needed
];
