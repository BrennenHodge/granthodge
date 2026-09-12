export const site = {
  name: "Grant Hodge",
  firstName: "Grant",
  handle: "Firecraft10",
  domain: "granthodge.com",
  youtubeUrl: "https://www.youtube.com/@Firecraft10",
  youtubeChannelId: "UC_fsAkM4SCNpvnA6gdMENIQ",
  subscribers: "65",
  tagline: "Baseball. Fortnite. Pokémon. YouTube.",
  epicName: "",
} as const;

export type Video = {
  id: string;
  title: string;
  views: string;
  posted: string;
};

export const videos: Video[] = [
  {
    id: "dPAKXr8dv5o",
    title: "Luke this is the end for your blooket account",
    views: "18 views",
    posted: "6 days ago",
  },
  {
    id: "aUqmp_5oXiY",
    title: "Pokémon opening — good pack",
    views: "4 views",
    posted: "3 weeks ago",
  },
  {
    id: "ua0-7g1iG4Y",
    title: "Fortnite clip insane",
    views: "11 views",
    posted: "2 months ago",
  },
  {
    id: "jh28R7hiurs",
    title: "Crazy Fortnite reload win, pt. 3",
    views: "10 views",
    posted: "3 months ago",
  },
  {
    id: "qJVIRk1Mu5I",
    title: "Fortnite Battle Royale builds, pt. 1",
    views: "15 views",
    posted: "7 months ago",
  },
  {
    id: "u3cQXTs-MA8",
    title: "Who's that Pokémon",
    views: "14 views",
    posted: "1 year ago",
  },
];

export type Interest = {
  id: string;
  name: string;
  blurb: string;
  image: string;
  alt: string;
};

export const interests: Interest[] = [
  {
    id: "fortnite",
    name: "Fortnite",
    blurb: "Reload wins, builds, and clips for the Firecraft10 channel.",
    image: "/images/fortnite.jpg",
    alt: "Fortnite Tilted Towers clock tower",
  },
  {
    id: "rocket-league",
    name: "Rocket League",
    blurb: "Cars with rockets. Soccer with chaos. He lives for kickoff.",
    image: "/images/rocket-league.jpg",
    alt: "Rocket League orange car chasing the ball",
  },
  {
    id: "pokemon",
    name: "Pokémon",
    blurb: "Pikachu, Charizard, pack openings, and a binder that keeps growing.",
    image: "/images/pokemon.jpg",
    alt: "Real Pikachu and Charizard Pokémon trading cards",
  },
  {
    id: "baseball",
    name: "Baseball",
    blurb: "Dirt on the jersey. Night games under the lights.",
    image: "/images/baseball.jpg",
    alt: "Night baseball diamond under the lights",
  },
];

export type VbucksPack = {
  amount: number;
  label: string;
  note: string;
};

export const vbucksPacks: VbucksPack[] = [
  { amount: 1000, label: "1,000", note: "A shop drop" },
  { amount: 2800, label: "2,800", note: "A new skin" },
  { amount: 5000, label: "5,000", note: "A serious stack" },
  { amount: 13500, label: "13,500", note: "The big one" },
];
