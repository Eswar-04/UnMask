
export interface SubBrand {
  id: number;
  name: string;
  logo?: string;
  description: string;
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
        description: "Video sharing platform" 
      },
      { 
        id: 102, 
        name: "Gmail", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png",
        description: "Email service" 
      },
      { 
        id: 103, 
        name: "Android", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/1745px-Android_robot.svg.png",
        description: "Mobile operating system" 
      },
      { 
        id: 104, 
        name: "Chrome", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png",
        description: "Web browser" 
      },
      { 
        id: 105, 
        name: "Google Maps", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1428px-Google_Maps_icon_%282020%29.svg.png",
        description: "Mapping service" 
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
        description: "Photo and video sharing social network" 
      },
      { 
        id: 202, 
        name: "WhatsApp", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png",
        description: "Messaging app" 
      },
      { 
        id: 203, 
        name: "Oculus", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Oculus_VR.svg/1200px-Oculus_VR.svg.png",
        description: "Virtual reality technology" 
      },
      { 
        id: 204, 
        name: "Messenger", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png",
        description: "Messaging platform" 
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
        description: "Cloud computing platform" 
      },
      { 
        id: 302, 
        name: "Prime Video", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Amazon_Prime_Video_logo.svg/2560px-Amazon_Prime_Video_logo.svg.png",
        description: "Streaming service" 
      },
      { 
        id: 303, 
        name: "Twitch", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Twitch_logo.svg/2560px-Twitch_logo.svg.png",
        description: "Live streaming platform" 
      },
      { 
        id: 304, 
        name: "Whole Foods", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Whole_Foods_Market_201x_logo.svg/2560px-Whole_Foods_Market_201x_logo.svg.png",
        description: "Organic grocery chain" 
      },
      { 
        id: 305, 
        name: "Audible", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Audible_logo.svg/2560px-Audible_logo.svg.png",
        description: "Audiobook service" 
      }
    ]
  },
  {
    id: 4,
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    category: ["Most Viewed", "Recently Acquired"],
    rating: 4.3,
    subBrands: [
      { 
        id: 401, 
        name: "Xbox", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1024px-Xbox_one_logo.svg.png",
        description: "Gaming console" 
      },
      { 
        id: 402, 
        name: "LinkedIn", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png",
        description: "Professional networking platform" 
      },
      { 
        id: 403, 
        name: "GitHub", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png",
        description: "Code hosting platform" 
      },
      { 
        id: 404, 
        name: "Skype", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Skype_logo_%282019%E2%80%93present%29.svg/2560px-Skype_logo_%282019%E2%80%93present%29.svg.png",
        description: "Telecommunications application" 
      },
      { 
        id: 405, 
        name: "Microsoft Office", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/2560px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png",
        description: "Productivity software suite" 
      }
    ]
  },
  {
    id: 5,
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
    category: ["Trending", "Most Viewed"],
    rating: 4.8,
    subBrands: [
      { 
        id: 501, 
        name: "iPhone", 
        logo: "https://www.apple.com/v/iphone/home/bk/images/meta/iphone__ky2k6x5u6vue_og.png",
        description: "Smartphone" 
      },
      { 
        id: 502, 
        name: "iPad", 
        logo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-model-select-gallery-1-202210?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1664411207213",
        description: "Tablet computer" 
      },
      { 
        id: 503, 
        name: "Mac", 
        logo: "https://www.apple.com/v/mac/home/bs/images/meta/mac__biv21zoiiqq6_og.png",
        description: "Computer line" 
      },
      { 
        id: 504, 
        name: "Apple Watch", 
        logo: "https://www.apple.com/v/watch/bb/images/overview/series-7/tile_watch_compare__beulir24in2q_large.jpg",
        description: "Smartwatch" 
      },
      { 
        id: 505, 
        name: "AirPods", 
        logo: "https://www.apple.com/v/airpods/q/images/overview/airpods_pro__e9pvc4j1gt2q_large.jpg",
        description: "Wireless earbuds" 
      }
    ]
  },
  {
    id: 6,
    name: "Tencent",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Tencent_Logo.svg/1280px-Tencent_Logo.svg.png",
    category: ["Suspicious", "Recently Acquired"],
    rating: 3.9,
    subBrands: [
      { 
        id: 601, 
        name: "WeChat", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/WeChat_logo.svg/1200px-WeChat_logo.svg.png",
        description: "Messaging, social media, and mobile payment app" 
      },
      { 
        id: 602, 
        name: "Riot Games", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Riot_Games_logo.svg/1200px-Riot_Games_logo.svg.png",
        description: "Video game developer" 
      },
      { 
        id: 603, 
        name: "Epic Games", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/1200px-Epic_Games_logo.svg.png",
        description: "Video game developer" 
      },
      { 
        id: 604, 
        name: "QQ", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Tencent_QQ.svg/1200px-Tencent_QQ.svg.png",
        description: "Instant messaging software" 
      }
    ]
  },
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
        description: "Entertainment company" 
      },
      { 
        id: 702, 
        name: "Pixar", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Pixar_logo.svg/1280px-Pixar_logo.svg.png",
        description: "Animation studio" 
      },
      { 
        id: 703, 
        name: "Star Wars", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png",
        description: "Media franchise" 
      },
      { 
        id: 704, 
        name: "ESPN", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/2560px-ESPN_wordmark.svg.png",
        description: "Sports network" 
      },
      { 
        id: 705, 
        name: "National Geographic", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/National-Geographic-Logo.svg/2560px-National-Geographic-Logo.svg.png",
        description: "Media brand" 
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
        description: "Chocolate bar" 
      },
      { 
        id: 802, 
        name: "Nescafe", 
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Nescafe_logo_2014.svg/1200px-Nescafe_logo_2014.svg.png",
        description: "Coffee brand" 
      },
      { 
        id: 803, 
        name: "Perrier", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Perrier_logo.svg/2560px-Perrier_logo.svg.png",
        description: "Bottled water brand" 
      },
      { 
        id: 804, 
        name: "Purina", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Purina.svg/1200px-Purina.svg.png",
        description: "Pet food brand" 
      },
      { 
        id: 805, 
        name: "Häagen-Dazs", 
        logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/Haagen-Dazs_logo.svg",
        description: "Ice cream brand" 
      }
    ]
  }
];
