import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Clock, 
  Plane, 
  Car, 
  Utensils, 
  Sparkles, 
  Info, 
  Check, 
  Star, 
  Shield, 
  Camera, 
  Mountain 
} from "lucide-react";
import BookingForm from "@/components/BookingForm";

// Helper type for destination structure
interface DestinationData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  altitude: string;
  bestSeason: string;
  activityLevel: string;
  image: string;
  whyVisit: { text: string; desc: string }[];
  attractions: {
    id: number;
    name: string;
    subtitle: string;
    desc: string;
    image: string;
    highlights: string[];
  }[];
  thingsToDo: string[];
  foods: { name: string; desc: string }[];
  luxuryExp: { title: string; desc: string; img: string }[];
  tips: string[];
  whyChoose: string[];
}

// Entire destination directory dataset
const destinationsData: Record<string, DestinationData> = {
  "agra": {
    id: "agra",
    title: "Agra Mughal Heritage",
    tagline: "Taj Mahal & Mughal Grandeur",
    description: "Agra is the epitome of India's Mughal architecture and historical royalty. Home to the legendary Taj Mahal, this historic city along the Yamuna River offers an enchanting journey into ancient royal history, local craftsmanship, and mouth-watering culinary traditions.",
    duration: "3 Days 2 Nights",
    altitude: "550 Feet",
    bestSeason: "October – March",
    activityLevel: "Easy",
    image: "/Image/Domestic%20Packages/Agra/agra%20photo.png",
    whyVisit: [
      { text: "The iconic Taj Mahal", desc: "Witness the spectacular marble monument of love, a UNESCO World Heritage site and one of the Seven Wonders of the World." },
      { text: "Mughal Palace Forts", desc: "Explore the giant red sandstone corridors and royal halls of Agra Fort." },
      { text: "Fatehpur Sikri ghost city", desc: "Visit Emperor Akbar's perfectly preserved capital city built in red sandstone." },
      { text: "Exquisite Pietra Dura art", desc: "Watch local artisans carry on the centuries-old art of marble inlay work." }
    ],
    attractions: [
      {
        id: 1,
        name: "The Taj Mahal",
        subtitle: "A Symbol of Eternal Love",
        desc: "Commissioned by Emperor Shah Jahan in 1632 in memory of his beloved wife Mumtaz Mahal, this ivory-white marble mausoleum is a masterpiece of symmetry and beauty. It looks particularly stunning at sunrise when the morning light tints the white marble in soft pink tones.",
        image: "/Image/Domestic%20Packages/Agra/agra%20photo.png",
        highlights: ["Symmetrical Mughal gardens", "Intricate marble carvings", "Yamuna river views", "Sunrise photography slots"]
      },
      {
        id: 2,
        name: "Agra Fort",
        subtitle: "The Imperial Walled City",
        desc: "This massive 16th-century fortress of red sandstone was the main residence of the emperors of the Mughal Dynasty until 1648. Within its walls lie beautiful marble palaces, ornate mosques, and rooms with distant views of the Taj Mahal.",
        image: "/Image/hero_taj_mahal.png",
        highlights: ["Jahangiri Mahal", "Diwan-i-Khas marble halls", "Sheesh Mahal mirror work", "Taj Mahal viewpoints"]
      }
    ],
    thingsToDo: [
      "Watch the Taj Mahal glow at sunrise",
      "Explore the secret passages of Agra Fort",
      "Visit the sunset viewpoint at Mehtab Bagh across the river",
      "Stroll the old city bazaars for marble souvenirs",
      "Take a heritage excursion to Fatehpur Sikri and Buland Darwaza",
      "Savour Agra's iconic sweet - the Petha"
    ],
    foods: [
      { name: "Petha", desc: "A soft, translucent candy made from ash gourd, available in flavours like saffron, coconut, and dry fruits." },
      { name: "Mughlai Biryani", desc: "Rich, fragrant rice layered with spiced vegetables, nuts, and traditional Mughal aromatics." },
      { name: "Bedai & Jalebi", desc: "Spiced, deep-fried wheat breads served with potato curry, followed by hot crispy jalebis." }
    ],
    luxuryExp: [
      { title: "Taj View Suite Stay", desc: "Book a premium suite with private balconies overlooking the Taj Mahal directly.", img: "/Image/hero_taj_mahal.png" },
      { title: "Private Historian Guide", desc: "Explore Agra's heritage with an expert archaeologist detailing architectural secrets.", img: "/Image/Domestic%20Packages/Agra/agra%20photo.png" }
    ],
    tips: [
      "Taj Mahal is closed on Fridays. Plan your dates accordingly.",
      "Hire only licensed guides at the ticket counters to avoid scams.",
      "Batteries, chargers, and tripods are not allowed inside the Taj Mahal complex.",
      "Visit Mehtab Bagh at sunset for a clean view without the crowds."
    ],
    whyChoose: [
      "VIP skip-the-line monument entries",
      "Premium heritage hotel bookings",
      "Certified local guides who speak your language",
      "Private transfers from Delhi via Yamuna Expressway"
    ]
  },
  "andaman": {
    id: "andaman",
    title: "Andaman Tropical Escapes",
    tagline: "Pristine Islands & Turquoise Coral Seas",
    description: "The Andaman Islands are an emerald archipelago in the Bay of Bengal, famous for pristine white sand beaches, clear turquoise waters, teeming coral reefs, and a rich colonial heritage. It is the ultimate retreat for beach lovers and water sports enthusiasts.",
    duration: "6 Days 5 Nights",
    altitude: "10 Feet",
    bestSeason: "October – May",
    activityLevel: "Easy",
    image: "/Image/Domestic%20Packages/Andaman/ChatGPT%20Image%20May%2027,%202026,%2003_29_50%20PM.png",
    whyVisit: [
      { text: "Radhanagar crescent beach", desc: "Consistently ranked among Asia's best beaches, offering powdery white sand and emerald waves." },
      { text: "Vibrant coral reef diving", desc: "Scuba dive or snorkel in warm waters teeming with sea turtles, stingrays, and tropical fish." },
      { text: "Colonial Cellular Jail", desc: "Reflect on history at the national memorial with its moving Sound & Light show." },
      { text: "Private cruise transfers", desc: "Sail between Port Blair, Havelock, and Neil Islands on luxury high-speed catamarans." }
    ],
    attractions: [
      {
        id: 1,
        name: "Havelock Island (Swaraj Dweep)",
        subtitle: "Asia's Finest Tropical Paradise",
        desc: "Famous for its dense forests, coconut palms, and spectacular white beaches. Radhanagar Beach is the crown jewel here, offering majestic sunset views. Havelock is also the main hub for scuba diving and marine activities in Andaman.",
        image: "/Image/Domestic%20Packages/Andaman/ChatGPT%20Image%20May%2027,%202026,%2003_29_50%20PM.png",
        highlights: ["Radhanagar Beach sunset", "Scuba diving at Elephant Beach", "Kayaking in mangrove creeks", "Private beach resorts"]
      },
      {
        id: 2,
        name: "Cellular Jail National Memorial",
        subtitle: "Whispers of the Freedom Struggle",
        desc: "Located in Port Blair, this historic colonial prison was used by the British to exile political prisoners. Today, the memorial pays tribute to India's freedom fighters and hosts a famous Light and Sound Show in the evening.",
        image: "/Image/Domestic%20Packages/Delhi/ChatGPT%20Image%20May%2027,%202026,%2008_31_25%20PM.png",
        highlights: ["Gallows room", "Netaji gallery", "Evening Sound & Light show", "Rooftop viewpoints"]
      }
    ],
    thingsToDo: [
      "Scuba dive at Havelock's rich coral reefs",
      "Take a sea walk on the ocean bed at Elephant Beach",
      "Watch the dramatic sunset at Radhanagar Beach",
      "Attend the Cellular Jail Sound & Light show",
      "Charter a private boat to Neil Island's natural rock bridge",
      "Kayaked through ancient mangrove forests at night to see bioluminescence"
    ],
    foods: [
      { name: "Fresh Seafood Platter", desc: "Freshly caught lobsters, tiger prawns, and red snapper cooked in local spices." },
      { name: "Coconut Water & Mocktails", desc: "Refreshing local tender coconuts served directly by the beach." },
      { name: "Andaman Fish Curry", desc: "Tangy fish curry seasoned with mustard seeds, curry leaves, and fresh coconut milk." }
    ],
    luxuryExp: [
      { title: "Beachfront Villa Stay", desc: "Private pool villas with direct beach access at premium Havelock resorts.", img: "/Image/Domestic%20Packages/Andaman/ChatGPT%20Image%20May%2027,%202026,%2003_29_50%20PM.png" },
      { title: "Private Yacht Cruise", desc: "Sunset yacht charters with gourmet catering around Havelock island.", img: "/Image/hero_goa_beach.png" }
    ],
    tips: [
      "Carry waterproof bags for your gadgets during boat transfers.",
      "Pre-book ferry tickets between islands (included fully in Intro Travels packages).",
      "Scuba diving is weather-dependent; plan activity days during mid-trip.",
      "BSNL and Airtel are the main network providers; data connectivity can be slow."
    ],
    whyChoose: [
      "Pre-confirmed premium catamaran tickets",
      "Handpicked beachfront luxury resorts",
      "Private air-conditioned transfers throughout the islands",
      "Vetted diving instructors and water sports partners"
    ]
  },
  "delhi": {
    id: "delhi",
    title: "Heritage Delhi Exploration",
    tagline: "The Capital's Historic Heart & Modern Pulse",
    description: "Delhi is a grand city of contrasts where Mughal heritage rubs shoulders with modern diplomatic corridors. From massive fortresses and colonial avenues to busy shopping bazaars and legendary street food lanes, Delhi offers a rich, multi-layered travel experience.",
    duration: "3 Days 2 Nights",
    altitude: "700 Feet",
    bestSeason: "October – March",
    activityLevel: "Easy",
    image: "/Image/Domestic%20Packages/Delhi/ChatGPT%20Image%20May%2027,%202026,%2008_31_25%20PM.png",
    whyVisit: [
      { text: "Mughal Red Fort", desc: "Visit the grand sandstone citadel that housed the Mughal Empire for over two centuries." },
      { text: "Ancient Qutub Minar", desc: "Marvel at the 73-metre tall minaret, a masterpiece of Indo-Islamic brick architecture." },
      { text: "Old Delhi Rickshaw Tour", desc: "Navigate the narrow lanes of Chandni Chowk to taste centuries-old street food." },
      { text: "Lutyens' Colonial Avenues", desc: "Drive past India Gate, Rashtrapati Bhavan, and the Parliament House." }
    ],
    attractions: [
      {
        id: 1,
        name: "Qutub Minar Complex",
        subtitle: "A Tower of Victory & History",
        desc: "Constructed in 1192 by Qutb-ud-din Aibak, this red sandstone minaret is decorated with delicate carvings and verses from the Quran. The surrounding complex contains the ancient iron pillar of Chandragupta II, which has stood rust-free for 1600 years.",
        image: "/Image/Domestic%20Packages/Delhi/ChatGPT%20Image%20May%2027,%202026,%2008_31_25%20PM.png",
        highlights: ["73m high brick minaret", "Rust-free ancient Iron Pillar", "Alai Darwaza architecture", "Beautiful ruins lawns"]
      },
      {
        id: 2,
        name: "Humayun's Tomb",
        subtitle: "The Precursor to the Taj Mahal",
        desc: "Commissioned by Humayun's first wife Empress Bega Begum in 1565, this spectacular garden tomb was the first grand scale garden tomb on the Indian subcontinent, inspiring the architecture of the Taj Mahal decades later.",
        image: "/Image/hero_taj_mahal.png",
        highlights: ["Charbagh symmetrical gardens", "Red sandstone & white marble dome", "Intricate jail screens", "Royal graves chambers"]
      }
    ],
    thingsToDo: [
      "Take a rickshaw ride through Old Delhi's spice bazaar",
      "Pay respects at India Gate war memorial",
      "Savour Butter Chicken at Pandara Road",
      "Stroll the beautiful Sunder Nursery gardens",
      "Shop for handicrafts at Dilli Haat",
      "Visit the peaceful Lotus Temple for silent meditation"
    ],
    foods: [
      { name: "Chole Bhature", desc: "Fluffy, deep-fried sourdough breads served with spicy chickpea curry and pickles." },
      { name: "Delhi Butter Chicken", desc: "Tandoori chicken pieces simmered in rich tomato, butter, and cream gravy." },
      { name: "Chandni Chowk Chaat", desc: "Crispy papdis, potatoes, sweet yogurt, and tangy tamarind-mint chutneys." }
    ],
    luxuryExp: [
      { title: "Imperial Hotel Stay", desc: "Experience old-world colonial luxury and museum-quality art at The Imperial Delhi.", img: "/Image/Domestic%20Packages/Delhi/ChatGPT%20Image%20May%2027,%202026,%2008_31_25%20PM.png" },
      { title: "Private Culinary Tour", desc: "Sample legendary street food and fine dining spots with a professional food critic guide.", img: "/Image/Domestic%20Packages/Agra/agra%20photo.png" }
    ],
    tips: [
      "Use the Delhi Metro to skip heavy road traffic during peak hours.",
      "Dress modestly when visiting active religious places like Jama Masjid or Bangla Sahib.",
      "Carry sunglasses and sunblock; exploring Delhi involves substantial walking.",
      "November to February offers the best winter weather for sightseeing."
    ],
    whyChoose: [
      "Licensed guides for historical accuracy",
      "Luxury sedan transfers with experienced city drivers",
      "VIP entries to busy monument complexes",
      "Tailor-made itineraries focusing on your specific interests"
    ]
  },
  "jaipur": {
    id: "jaipur",
    title: "Royal Jaipur Experience",
    tagline: "The Pink City & Rajput Splendour",
    description: "Jaipur, the capital of Rajasthan, is a vibrant city of palaces, hill forts, and colourful markets. Known as the 'Pink City' due to the terracotta colour of its historic buildings, it offers a majestic look into India's royal Rajput history.",
    duration: "4 Days 3 Nights",
    altitude: "1400 Feet",
    bestSeason: "October – March",
    activityLevel: "Easy",
    image: "/Image/Domestic%20Packages/Jaipur/ChatGPT%20Image%20May%2027,%202026,%2009_20_54%20PM.png",
    whyVisit: [
      { text: "Majestic Amer Fort", desc: "Tour the grand hilltop palace overlooking Maota Lake, famous for its glowing Sheesh Mahal." },
      { text: "Ornate Hawa Mahal", desc: "Photograph the iconic pink honeycomb facade with its 953 small windows." },
      { text: "Royal City Palace", desc: "Explore the active royal residency, displaying weapons, textiles, and courtyards." },
      { text: "Bazaar shopping tours", desc: "Shop for blue pottery, block-print fabrics, and silver jewellery." }
    ],
    attractions: [
      {
        id: 1,
        name: "Amer Fort (Amber Palace)",
        subtitle: "The Hilltop Royal Citadel",
        desc: "Constructed of red sandstone and marble, Amer Fort overlooks Maota Lake. Known for its artistic style and grand courtyards, the palace's highlight is the Sheesh Mahal (Mirror Palace), which lights up completely with a single candle.",
        image: "/Image/Domestic%20Packages/Jaipur/ChatGPT%20Image%20May%2027,%202026,%2009_20_54%20PM.png",
        highlights: ["Sheesh Mahal mirrors", "Diwan-i-Aam courtyard", "Eleph-ride / Jeep up fort", "Ganesh Pol gate carvings"]
      },
      {
        id: 2,
        name: "Hawa Mahal",
        subtitle: "Palace of the Winds",
        desc: "Built in 1799 by Maharaja Sawai Pratap Singh, this five-story exterior resembles a honeycomb. Designed for royal women to observe daily street life unseen, the structure lets cool air circulate through its lattice screens.",
        image: "/Image/custom_india_travel.png",
        highlights: ["953 Jharokha window panels", "Panoramic old city views", "Museum exhibits", "Iconic street-facing facade"]
      }
    ],
    thingsToDo: [
      "Ride a jeep to the entrance of Amer Fort",
      "Photograph Hawa Mahal from across the street at sunrise",
      "Tour the astronomical sundials at Jantar Mantar",
      "Stay in a converted royal Palace/Haveli hotel",
      "Sample traditional Rajasthani dinner at Chokhi Dhani",
      "Buy block-printed textiles and blue pottery"
    ],
    foods: [
      { name: "Dal Baati Churma", desc: "Hard wheat flour baatis baked on dung coals, crushed and soaked in pure ghee, served with lentil curry." },
      { name: "Laal Maas", desc: "A slow-cooked, fiery mutton curry flavoured with special Rajasthani Mathania red chillies." },
      { name: "Pyaaz Kachori", desc: "Flaky, deep-fried pastries filled with heavily spiced onion mixture, served with sweet tamarind sauce." }
    ],
    luxuryExp: [
      { title: "Palace Suite Heritage Stay", desc: "Sleep in authentic royal rooms at Rambagh Palace or Taj Jai Mahal Palace.", img: "/Image/custom_india_travel.png" },
      { title: "Private Block-Printing workshop", desc: "Learn traditional hand block-printing from national award-winning master craftsmen.", img: "/Image/Domestic%20Packages/Jaipur/ChatGPT%20Image%20May%2027,%202026,%2009_20_54%20PM.png" }
    ],
    tips: [
      "Buy the composite ticket to cover all major forts and monuments in Jaipur over two days.",
      "Hire local guides at Amer Fort to explain Rajput-Mughal architectural influences.",
      "Jaipur is hot in summer; visit between October and March for cool pleasant days.",
      "Explore Johari Bazaar on foot; vehicles are restricted in old city streets."
    ],
    whyChoose: [
      "Private Rajasthani Haveli boutique hotel bookings",
      "Comfortable air-conditioned SUV transfers with guide",
      "Tailor-made itineraries with private shopping assistants",
      "Special Royal welcome packages on arrival"
    ]
  },
  "kerala": {
    id: "kerala",
    title: "Kerala Backwater Serenity",
    tagline: "God's Own Country",
    description: "Kerala is a tropical paradise of palm-lined beaches, misty tea plantations, spice-scented hills, and the world-famous backwater houseboat cruises. It is the premier destination in South India for relaxation, nature, and wellness.",
    duration: "5 Days 4 Nights",
    altitude: "3000 Feet (Munnar)",
    bestSeason: "September – March",
    activityLevel: "Easy",
    image: "/Image/Domestic%20Packages/Kerala/ChatGPT%20Image%20May%2027,%202026,%2009_41_22%20PM.png",
    whyVisit: [
      { text: "Alleppey Houseboat Cruise", desc: "Sail past palm-fringed villages on a private luxury houseboat with on-board chef." },
      { text: "Munnar Tea Plantations", desc: "Stroll through rolling green hills covered in endless tea carpets." },
      { text: "Traditional Ayurveda", desc: "Indulge in rejuvenating spa massages using medicinal herbal oils." },
      { text: "Fort Kochi colonial charm", desc: "See Portuguese churches, Chinese fishing nets, and Kathakali dance shows." }
    ],
    attractions: [
      {
        id: 1,
        name: "Alleppey Backwaters (Alappuzha)",
        subtitle: "Venice of the East",
        desc: "A vast network of canals, rivers, and lagoons. Travel on a traditional Kettuvallam (houseboat) fitted with modern rooms. Wake up to views of local fishermen, paddy fields, and swaying coconut trees.",
        image: "/Image/Domestic%20Packages/Kerala/ChatGPT%20Image%20May%2027,%202026,%2009_41_22%20PM.png",
        highlights: ["Private luxury houseboats", "Scenic canal cruising", "Freshly cooked local meals", "Sunset views over lake lagoons"]
      },
      {
        id: 2,
        name: "Munnar Tea Hills",
        subtitle: "Misty Valleys & Spice Gardens",
        desc: "Located at 5,200 feet, Munnar is a serene hill station famous for its tea plantations. Visit the Tea Museum, trek through Eravikulam National Park to see the Nilgiri Tahr, and walk through fragrant spice gardens.",
        image: "/Image/tour_himachal.png",
        highlights: ["Endless tea carpets", "Misty valley view points", "Eravikulam National Park", "Spice garden tours"]
      }
    ],
    thingsToDo: [
      "Overnight stay on an Alleppey houseboat",
      "Walk through Munnar tea gardens at sunrise",
      "Receive an authentic Ayurvedic Abhyanga massage",
      "Watch a live Kathakali dance performance",
      "See Fort Kochi's iconic Chinese Fishing Nets",
      "Watch Kalarippayattu (martial art) demonstration"
    ],
    foods: [
      { name: "Karimeen Pollichathu", desc: "Pearl spot fish marinated in spicy paste, wrapped in banana leaf and grilled." },
      { name: "Kerala Sadya", desc: "A grand vegetarian feast of 24+ dishes served on a fresh banana leaf." },
      { name: "Appam & Stew", desc: "Soft, lacy fermented rice pancakes with a creamy, coconut-based vegetable/chicken stew." }
    ],
    luxuryExp: [
      { title: "Premium Houseboat Charter", desc: "Private multi-room houseboats with chef, lounge, and private upper-deck viewing.", img: "/Image/Domestic%20Packages/Kerala/ChatGPT%20Image%20May%2027,%202026,%2009_41_22%20PM.png" },
      { title: "Treehouse Resort Stay", desc: "Wake up amidst the rainforest canopy in a luxury treehouse in Athirappilly or Wayanad.", img: "/Image/tour_himachal.png" }
    ],
    tips: [
      "Houseboats check in around 12:00 PM and anchor by 5:30 PM (for government net protection).",
      "Pack light layers for Munnar hills, which get cool in the evenings.",
      "Only receive Ayurvedic treatments from government-certified wellness centers (all our partners are fully vetted).",
      "Monsoons (June to August) are beautiful for Ayurveda but restrict sightseeing."
    ],
    whyChoose: [
      "Guaranteed premium, verified houseboats",
      "Stays in luxury eco-resorts with hill views",
      "Experienced local drivers for winding mountain roads",
      "Authentic wellness and cultural activity arrangements"
    ]
  },
  "udaipur": {
    id: "udaipur",
    title: "Romantic Udaipur Getaway",
    tagline: "The Lake City & Venice of the East",
    description: "Udaipur is Rajasthan's most romantic city, famous for its magnificent palaces built around a series of blue lakes. Surrounded by the ancient Aravalli Hills, it offers a serene, luxurious escape of boat rides, lakefront dining, and heritage art.",
    duration: "4 Days 3 Nights",
    altitude: "1900 Feet",
    bestSeason: "October – March",
    activityLevel: "Easy",
    image: "/Image/Domestic%20Packages/Udaipur/ChatGPT%20Image%20May%2027,%202026,%2009_55_01%20PM.png",
    whyVisit: [
      { text: "Lake Pichola boat rides", desc: "Cruise past the glowing white facades of Taj Lake Palace and Jag Mandir." },
      { text: "Spectacular City Palace", desc: "Tour Rajasthan's largest royal palace complex with mirrored galleries and paintings." },
      { text: "Monsoon Palace sunsets", desc: "Drive up Sajjangarh Fort for sunset views over the lakes and hills." },
      { text: "Scenic lakefront dining", desc: "Dine on candlelit terraces overlooking illuminated palaces reflection in the lake." }
    ],
    attractions: [
      {
        id: 1,
        name: "Udaipur City Palace",
        subtitle: "A Grand Lakefront Masterpiece",
        desc: "Built over 400 years by the rulers of Mewar, this massive hilltop palace complex is a fusion of Rajasthani and Mughal architectural styles. Inside, discover ornate courtyards, colourful stained-glass windows, and galleries of miniature paintings.",
        image: "/Image/Domestic%20Packages/Udaipur/ChatGPT%20Image%20May%2027,%202026,%2009_55_01%20PM.png",
        highlights: ["Mor Chowk peacock mosaics", "Sheesh Mahal mirrors", "Zenana Mahal courtyards", "Lake Pichola balconies"]
      },
      {
        id: 2,
        name: "Lake Pichola & Jag Mandir",
        subtitle: "The Royal Floating Island",
        desc: "Created in 1362, this artificial lake is the center of Udaipur's beauty. Jag Mandir is a palace built on an island in the lake, featuring stone elephant sculptures and beautiful marble pavilions.",
        image: "/Image/custom_india_travel.png",
        highlights: ["Scenic boat cruise", "Taj Lake Palace close-up", "Jag Mandir island gardens", "Aravalli sunset reflections"]
      }
    ],
    thingsToDo: [
      "Take a private boat cruise on Lake Pichola at sunset",
      "Explore Mewar history in the City Palace museum",
      "Attend the Dharohar folk dance show at Bagore-ki-Haveli",
      "Dine at a rooftop restaurant in Ambrai Ghat",
      "See the royal vintage car collection of the Maharaja",
      "Buy local miniature paintings and Rajasthani puppets"
    ],
    foods: [
      { name: "Mewari Lal Maas", desc: "Udaipur's local variation of the spiced red mutton curry slow-cooked with garlic." },
      { name: "Ker Sangri", desc: "A tangy Rajasthani dish made of dried berries and wild beans cooked in oil." },
      { name: "Mirchi Bada", desc: "Jalapeno-like large green chillies stuffed with spiced potato mash, deep-fried in gram flour." }
    ],
    luxuryExp: [
      { title: "Lake Palace Heritage Stay", desc: "Spend a night at the iconic Taj Lake Palace floating in Lake Pichola.", img: "/Image/custom_india_travel.png" },
      { title: "Private Lakeside Dining", desc: "Curated dinner with a private butler on a floating deck at Lake Pichola.", img: "/Image/Domestic%20Packages/Udaipur/ChatGPT%20Image%20May%2027,%202026,%2009_55_01%20PM.png" }
    ],
    tips: [
      "Book your sunset boat cruise in advance as slots are limited (we handle this fully).",
      "Dine at Ambrai Ghat for the best night-view of the illuminated City Palace.",
      "Udaipur is relatively compact; walking around the old city alleys is highly recommended.",
      "The Sajjangarh Monsoon Palace requires a short uphill drive via forest vehicles."
    ],
    whyChoose: [
      "Lakeside hotel bookings with guaranteed views",
      "Curated tickets for the Bagore-ki-Haveli cultural show",
      "Private boat charters on Lake Pichola",
      "Airport transfers in premium vehicles"
    ]
  },
  "goa": {
    id: "goa",
    title: "Sunny Goa Beach Vacation",
    tagline: "Sunkissed Beaches & Portuguese Charm",
    description: "Goa is India's premier coastal escape, blending golden sand beaches, colonial Portuguese architecture, lush spice plantations, and vibrant beach shacks. Perfect for water sports enthusiasts, partygoers, and couples seeking a tropical holiday.",
    duration: "5 Days 4 Nights",
    altitude: "10 Feet",
    bestSeason: "November – April",
    activityLevel: "Easy",
    image: "/Image/tour_goa.png",
    whyVisit: [
      { text: "Warm sandy beaches", desc: "From busy Baga and Calangute in the north to quiet Palolem and Agonda in the south." },
      { text: "Portuguese colonial heritage", desc: "Tour the whitewashed churches and historical buildings of Old Goa and Panaji." },
      { text: "Water sports & activities", desc: "Enjoy jet-skiing, parasailing, banana boat rides, and scuba diving." },
      { text: "Spicy local cuisine", desc: "Taste fiery Vindaloo and fresh fish curry alongside local coconut drinks." }
    ],
    attractions: [
      {
        id: 1,
        name: "Old Goa Churches Complex",
        subtitle: "UNESCO World Heritage Site",
        desc: "Explore historical churches including the Basilica of Bom Jesus, which houses the relics of St. Francis Xavier, and the grand Se Cathedral, famous for its massive Golden Bell.",
        image: "/Image/tour_goa.png",
        highlights: ["Basilica of Bom Jesus relics", "Se Cathedral architecture", "Church of St. Cajetan", "Portuguese murals"]
      },
      {
        id: 2,
        name: "Dudhsagar Waterfalls",
        subtitle: "The Sea of Milk",
        desc: "A spectacular four-tiered waterfall on the Mandovi River, surrounded by the green forests of Bhagwan Mahavir Sanctuary. It resembles a cascading stream of milk flowing down the cliffside.",
        image: "/Image/every_step_road.png",
        highlights: ["Jeep safari trek", "Natural swimming pool", "Rainforest train bridge", "Bhagwan Mahavir sanctuary"]
      }
    ],
    thingsToDo: [
      "Spend a day relaxing in beach shacks at Baga Beach",
      "Take a sunset cruise along the Mandovi River",
      "Parasail and ride jet-skis at Calangute",
      "Stroll the colourful Latin Quarter of Fontainhas in Panaji",
      "Dine at a tropical spice plantation in Ponda",
      "Explore the quiet beaches of South Goa like Palolem"
    ],
    foods: [
      { name: "Goan Fish Curry Rice", desc: "Fresh fish cooked in a tangy coconut gravy seasoned with local spices and kokum." },
      { name: "Pork / Chicken Vindaloo", desc: "A highly spiced, vinegary Goan curry derived from the Portuguese Carne de Vinha d'Alhos." },
      { name: "Bebinca", desc: "A rich, multi-layered traditional Goan dessert made with coconut milk, sugar, and egg yolks." }
    ],
    luxuryExp: [
      { title: "Luxury Beach Resort Stay", desc: "Book private sea-view cottages at Taj Exotica or W Goa.", img: "/Image/tour_goa.png" },
      { title: "Mandovi Yacht Sunset Charter", desc: "Charter a private catamaran with champagne, sushi, and music.", img: "/Image/hero_goa_beach.png" }
    ],
    tips: [
      "Rent a scooter to explore Goan towns at your own pace.",
      "South Goa is best for quiet relaxation, while North Goa is the hub for nightlife and water sports.",
      "Wear light cotton clothing and comfortable sandals.",
      "Dudhsagar waterfalls jeep safaris can get muddy; wear good trekking shoes."
    ],
    whyChoose: [
      "Guaranteed stays at pre-vetted beachfront resorts",
      "Private yacht and spice plantation bookings included",
      "AC SUV vehicle support for day sightseeing excursions",
      "24/7 on-ground travel coordination assistance"
    ]
  },
  "himachal": {
    id: "himachal",
    title: "Himachal Valley Adventure",
    tagline: "Manali & Shimla Snowy Peaks",
    description: "Himachal Pradesh is a gorgeous mountain state in the Western Himalayas, famous for snowy mountain vistas, roaring rivers, pine forests, and cozy wood cabin resorts. It is the premier destination for mountain adventure, trekking, and cool summer escapes.",
    duration: "6 Days 5 Nights",
    altitude: "6700 Feet",
    bestSeason: "March – June & Nov – Feb (Snow)",
    activityLevel: "Moderate",
    image: "/Image/tour_himachal.png",
    whyVisit: [
      { text: "Rohtang & Solang valleys", desc: "Soar in paragliders, play in fresh snow, and enjoy skiing and zorbing." },
      { text: "Atal Tunnel & Lahaul Valley", desc: "Drive through the world's longest highway tunnel above 10,000 feet." },
      { text: "Colonial Shimla Mall Road", desc: "Stroll the car-free ridge, colonial architecture, and wooden markets." },
      { text: "Scenic mountain cabins", desc: "Relax in cottages with balconies opening up to snow-capped peaks and valleys." }
    ],
    attractions: [
      {
        id: 1,
        name: "Solang Valley & Rohtang Pass",
        subtitle: "The Snowy Adventure Playground",
        desc: "Solang Valley is the adventure capital for paragliding, zorbing, and ATV rides. Rohtang Pass (13,058 ft) is a high mountain pass offering snow-covered slopes and dramatic glaciers all year round.",
        image: "/Image/tour_himachal.png",
        highlights: ["Rohtang Pass high glaciers", "Solang paragliding flights", "Atal Tunnel drive", "Skiing and sledging slopes"]
      },
      {
        id: 2,
        name: "The Ridge & Mall Road (Shimla)",
        subtitle: "Colonial Era Himalayan Retreat",
        desc: "The heart of Shimla, this car-free pine-lined avenue features neo-Gothic colonial architecture, the historic Christ Church, local shops, and sweeping views of the surrounding green hills.",
        image: "/Image/every_step_road.png",
        highlights: ["Christ Church neo-Gothic", "Mall Road local wooden markets", "Jakhoo Hill Hanuman Temple", "Kalka-Shimla Toy Train"]
      }
    ],
    thingsToDo: [
      "Paraglide over pine forests in Solang Valley",
      "Drive through the engineering marvel of Atal Tunnel",
      "Trek to Jogini Waterfalls in Manali",
      "Ride the historic UNESCO Toy Train in Shimla",
      "Shop for warm woollen shawls at Mall Road",
      "Visit Hadimba Temple built in a cedar forest"
    ],
    foods: [
      { name: "Siddu", desc: "A traditional yeast-leavened wheat bread stuffed with poppy seeds, walnuts, and dal, served with pure ghee." },
      { name: "Himachali Madra", desc: "A rich, slow-cooked chickpea curry prepared in yogurt gravy with dry fruits and cardamom." },
      { name: "Pan-Fried Rainbow Trout", desc: "Fresh Himalayan mountain stream trout fried in local butter and herbs." }
    ],
    luxuryExp: [
      { title: "Snow-View Wooden Chalet", desc: "Stays in premium wood chalets with fireplaces and private glass balconies over Manali valley.", img: "/Image/tour_himachal.png" },
      { title: "Guided Heli-Skiing", desc: "Private helicopter transfers to virgin ski slopes in Lahaul Valley.", img: "/Image/every_step_flight.png" }
    ],
    tips: [
      "Rohtang Pass permits are limited and must be booked in advance (fully managed in our packages).",
      "Pack heavy winter woollens if visiting between December and February.",
      "Expect winding mountain roads; carry motion sickness medicine if sensitive.",
      "Check weather and road updates for Rohtang Pass during winter months."
    ],
    whyChoose: [
      "Pre-booked Rohtang permits & local guide assistance",
      "Luxury mountain resort stays with scenic balconies",
      "Experienced mountain drivers for high altitude safety",
      "Included paragliding vouchers & adventure gear support"
    ]
  },
  "kashmir": {
    id: "kashmir",
    title: "Kashmir Paradise Escape",
    tagline: "Heaven on Earth",
    description: "Kashmir is historically celebrated as 'Heaven on Earth' due to its spectacular valleys, sparkling lakes, houseboats, pine forests, and snow fields. It offers a majestic, serene vacation of shikara rides, alpine meadows, and warm hospitality.",
    duration: "5 Days 4 Nights",
    altitude: "5200 Feet (Srinagar)",
    bestSeason: "April – October & Dec – Feb",
    activityLevel: "Easy",
    image: "/Image/tour_kashmir.png",
    whyVisit: [
      { text: "Dal Lake Houseboats", desc: "Stay in intricately carved cedar-wood houseboats floating on calm waters." },
      { text: "Gulmarg Gondola Ride", desc: "Ascend Apharwat Peak on one of the world's highest cable cars for snow vistas." },
      { text: "Pahalgam Betaab Valley", desc: "Explore pine forests and gushing streams where famous movies were shot." },
      { text: "Mughal Garden lawns", desc: "Stroll the terraced gardens of Shalimar and Nishat Bagh built by emperors." }
    ],
    attractions: [
      {
        id: 1,
        name: "Dal Lake & Shikara Cruise",
        subtitle: "The Floating Heart of Srinagar",
        desc: "Dal Lake is famous for its floating markets, lotus gardens, and wooden houseboats. A ride on the traditional colourful Shikara boats offers a quiet look into lakeside life against the Zabarwan mountains.",
        image: "/Image/tour_kashmir.png",
        highlights: ["Floating vegetable bazaar", "Intricate Shikara boat rides", "Mughal garden backdrop", "Dal Lake sunset frames"]
      },
      {
        id: 2,
        name: "Gulmarg Meadow & Gondola",
        subtitle: "The Snowy Paradise",
        desc: "Gulmarg is a beautiful meadow of flowers in summer and a premier ski resort in winter. The Gulmarg Gondola takes you up to 13,780 feet on Apharwat Peak, offering panoramic snow views over the Himalayas.",
        image: "/Image/hero_kashmir.png",
        highlights: ["World-class Gondola lift", "Apharwat Peak high snow", "Gulmarg ski resort slopes", "Serene alpine pine forests"]
      }
    ],
    thingsToDo: [
      "Sleep in a luxury cedar-wood houseboat",
      "Ride a Shikara boat on Dal Lake at sunset",
      "Take the two-stage Gondola ride in Gulmarg",
      "Ride a pony through Pahalgam's pine valleys",
      "Visit the saffron gardens of Pampore",
      "Stroll the terraced lawns of Nishat and Shalimar gardens"
    ],
    foods: [
      { name: "Kahwa", desc: "A soothing green tea brewed with saffron, cinnamon, green cardamom, and crushed almonds." },
      { name: "Rogan Josh", desc: "A signature dish of Kashmiri Wazwan - tender lamb cooked in a rich red gravy of Kashmiri chillies." },
      { name: "Gustaba", desc: "Minced mutton balls cooked slowly in a rich, velvety spiced yogurt gravy." }
    ],
    luxuryExp: [
      { title: "Premium Houseboat VIP Stay", desc: "Full cedar-wood houseboats with ornate carpets, fireplaces, and private chefs.", img: "/Image/tour_kashmir.png" },
      { title: "Gulmarg Luxury Ski Resort", desc: "Stay at The Khyber Himalayan Resort & Spa with heated indoor pools overlooking snow fields.", img: "/Image/hero_kashmir.png" }
    ],
    tips: [
      "Gulmarg Gondola tickets sell out weeks in advance; let us pre-book them for you.",
      "Expect pony owners and local hawkers to pitch services; be polite but firm.",
      "Srinagar can be warm in summer, but Gulmarg and Pahalgam always require light jackets.",
      "Carry woollens, gloves, and boots (rentals available in Gulmarg if needed)."
    ],
    whyChoose: [
      "Guaranteed premium houseboats on quiet sectors of Dal Lake",
      "Pre-booked Gondola tickets to skip long queues",
      "Safe, private SUV transfers with local guides",
      "Vetted, reliable partners for local sightseeing"
    ]
  },
  "leh-ladakh": {
    id: "leh-ladakh",
    title: "Leh Ladakh Highlands",
    tagline: "Land of High Passes & Cold Deserts",
    description: "Leh Ladakh is a majestic high-altitude cold desert surrounded by the Karakoram and Great Himalaya ranges. Celebrated for motorable passes, colour-changing lakes, sand dunes, and ancient Tibetan monasteries, it offers a legendary travel experience.",
    duration: "7 Days 6 Nights",
    altitude: "11,500 Feet",
    bestSeason: "May – September",
    activityLevel: "Moderate",
    image: "/Image/leh-ladakh/image099.jpg",
    whyVisit: [
      { text: "Stunning Himalayan landscapes", desc: "Untouched valleys, deep gorges, and the towering cold desert mountains of the Trans-Himalayan range." },
      { text: "Famous high-altitude lakes", desc: "Pangong Tso and Tso Moriri, shimmering in brilliant shades of turquoise and deep blue." },
      { text: "Adventure bike & road trips", desc: "Conquer the legendary highway routes from Manali or Srinagar on a guided motorcycle expedition." },
      { text: "Ancient Buddhist monasteries", desc: "Spiritual sanctuaries like Thiksey and Hemis perched dramatically on rugged hilltops." },
      { text: "Snow-covered mountain passes", desc: "Cross Khardung La and Chang La, some of the highest motorable passes in the world." },
      { text: "Camping under starry skies", desc: "Sleep under a clear, unpolluted canopy of stars with premium glamping amenities." },
      { text: "Peaceful spiritual atmosphere", desc: "Immerse yourself in Tibetan culture, spinning prayer wheels, and serene chants." },
      { text: "Perfect destination for photography", desc: "Capture contrasting landscapes of sand dunes, blue lakes, snow peaks, and heritage architecture." }
    ],
    attractions: [
      {
        id: 1,
        name: "Leh Town & Historic Palace",
        subtitle: "The Gateway & Heart of Ladakh",
        desc: "Located at 11,500 feet, Leh is the historic capital of Ladakh. Explore the iconic nine-story Leh Palace built by King Sengge Namgyal in the 17th century, climb the white-domed Shanti Stupa for panoramic sunset views, and shop for local souvenirs and apricot products in the vibrant Leh Main Bazaar.",
        image: "/Image/leh-ladakh/image011.jpg",
        highlights: ["Leh Palace Heritage", "Shanti Stupa sunset", "Vibrant Main Bazaar", "Sankar Monastery"]
      },
      {
        id: 2,
        name: "Pangong Lake (Pangong Tso)",
        subtitle: "The Shimmering Turquoise Wonder",
        desc: "Situated at an altitude of 14,270 feet, this 134-km long lake spans across India and Tibet. Famous for its colour-changing waters that shift from turquoise to deep indigo throughout the day, Pangong is surrounded by barren peaks and offers unforgettable lakeside camping experiences.",
        image: "/Image/leh-ladakh/image015.jpg",
        highlights: ["Brilliant colour shifts", "High-altitude lakeside camping", "Panoramic mountain frames", "Sunset photography spots"]
      },
      {
        id: 3,
        name: "Nubra Valley",
        subtitle: "Cold Desert Sand Dunes & Double-Humped Camels",
        desc: "Reached via the Khardung La Pass, Nubra Valley features a unique sand dune landscape surrounded by snow-capped mountains. Ride the rare double-humped Bactrian camels at Hunder sand dunes, visit the giant Maitreya Buddha statue in Diskit, and stay in luxurious orchards along the Shyok River.",
        image: "/Image/leh-ladakh/image029.jpg",
        highlights: ["Hunder Sand Dunes", "Bactrian camel rides", "Maitreya Buddha Diskit", "Scenic riverside camps"]
      },
      {
        id: 4,
        name: "Khardung La Pass",
        subtitle: "Stand at the Top of the World",
        desc: "At 17,582 feet, Khardung La is historically celebrated as the gateway to the Nubra and Shyok valleys. An absolute milestone for bikers and road-trippers, it offers breathtaking views of the Karakoram range and glacial vistas all year round.",
        image: "/Image/leh-ladakh/image049.jpg",
        highlights: ["Bikers' ultimate milestone", "High-altitude snow views", "Glacial viewpoints", "Karakoram range vistas"]
      },
      {
        id: 5,
        name: "Magnetic Hill & Confluence",
        subtitle: "Gravity-Defying Phenomenon & Sangam",
        desc: "Experience the optical illusion of Magnetic Hill, where vehicles seem to pull uphill against gravity. Nearby, witness the spectacular confluence (Sangam) of the emerald Indus River and the muddy Zanskar River, a perfect spot for rafting and landscape views.",
        image: "/Image/leh-ladakh/image059.jpg",
        highlights: ["Magnetic illusion zone", "Sangam River Confluence", "Indus & Zanskar rafting", "National Highway scenery"]
      },
      {
        id: 6,
        name: "Thiksey Monastery",
        subtitle: "The Mini Potala Palace of Ladakh",
        desc: "One of the largest and most picturesque Tibetan Buddhist monasteries in Ladakh, Thiksey is a twelve-story complex built on a hilltop. It houses a magnificent 49-foot high statue of Maitreya Buddha and offers a serene, spiritual atmosphere with sweeping views of the Indus Valley.",
        image: "/Image/leh-ladakh/image067.jpg",
        highlights: ["Twelve-story hilltop design", "49-foot Maitreya Buddha", "Morning prayer chants", "Panoramic Indus Valley views"]
      }
    ],
    thingsToDo: [
      "Ride classic motorcycles through high Himalayan passes",
      "Camp in premium dome tents near Pangong Lake",
      "Explore ancient monasteries and spin Buddhist prayer wheels",
      "Enjoy white-water river rafting on the Zanskar River",
      "Experience thrilling ATV rides on Nubra Valley sand dunes",
      "Trek through rugged trails in Hemis National Park",
      "Stargaze under unpolluted, pitch-black night skies",
      "Capture scenic landscape photography at golden hour"
    ],
    foods: [
      { name: "Thukpa", desc: "A heartwarming noodle soup with mixed vegetables or meat, perfect for cold mountain evenings." },
      { name: "Momos", desc: "Steamed dumplings filled with local vegetables, cheese, or meat, served with spicy chilli paste." },
      { name: "Skyu", desc: "A traditional Ladakhi pasta-like dish cooked slowly with root vegetables, wheat dough, and local spices." },
      { name: "Butter Tea (Gur Gur Chai)", desc: "Salted tea made with yak butter, traditionally consumed to keep warm and prevent chapped lips." },
      { name: "Tibetan Bread", desc: "Fluffy, deep-fried bread served fresh with apricot jam or butter for breakfast." },
      { name: "Yak Cheese Dishes", desc: "Unique cheese made from local Drimo (female yak) milk, used in local pasta, soups, and momos." }
    ],
    luxuryExp: [
      { title: "Luxury Mountain Glamping", desc: "Premium all-weather tents with heating, en-suite bathrooms, and gourmet dining at Pangong and Nubra.", img: "/Image/leh-ladakh/image099.jpg" },
      { title: "Private Bike Expeditions", desc: "Customized motorcycle tours with backup vehicle, mechanic, medical support, and premium bikes.", img: "/Image/leh-ladakh/image093.jpg" },
      { title: "Helicopter Sightseeing", desc: "Soar above the glaciers and high-altitude lakes on a private aerial tour of the Karakoram range.", img: "/Image/leh-ladakh/image095.jpg" },
      { title: "Wellness & Meditation Retreats", desc: "Connect with Buddhist teachers, practice yoga, and meditate in serene mountain monasteries.", img: "/Image/leh-ladakh/image101.jpg" }
    ],
    tips: [
      "Acclimatize properly: Spend the first 24-48 hours resting in Leh to prevent altitude sickness (AMS).",
      "Carry warm clothing even in summer: Temperatures drop quickly. Carry thermal innerwear, woollen sweaters, and windproof jackets.",
      "Stay hydrated: Drink plenty of water and avoid carbonated drinks or heavy activity on the first day.",
      "Carry cash: Internet and digital payment options can be unreliable in remote valleys like Nubra and Pangong.",
      "Inner Line Permits: Ensure you carry valid government ID proofs for obtaining Inner Line Permits (Intro Travels handles this fully).",
      "Eco Travel: Ladakh is ecologically sensitive. Avoid plastic bottles, respect local customs, and do not litter."
    ],
    whyChoose: [
      "100% Customized Leh Ladakh tour packages",
      "Secure backup vehicle & mechanic on all bike trips",
      "Pre-vetted premium camps & luxury stays",
      "24/7 on-ground emergency and altitude coordination",
      "Comfortable 4x4 vehicles & local guides",
      "Complete permit assistance & airport pickup"
    ]
  },
  "varanasi": {
    id: "varanasi",
    title: "Spiritual Varanasi Journey",
    tagline: "The World's Oldest Living City",
    description: "Varanasi (Kashi) is India's spiritual heartland, sitting on the sacred banks of the Ganges. As one of the world's oldest continually inhabited cities, it is a maze of ancient temples, busy river ghats, and deep spiritual rituals.",
    duration: "3 Days 2 Nights",
    altitude: "260 Feet",
    bestSeason: "October – March",
    activityLevel: "Easy",
    image: "/Image/tour_varanasi.png",
    whyVisit: [
      { text: "Spectacular Ganga Aarti", desc: "Witness the magnificent evening fire ritual on the banks of Dashashwamedh Ghat." },
      { text: "Sunrise River Cruise", desc: "Sail past bathing ghats, burning pyres, and morning prayers at dawn." },
      { text: "Kashi Vishwanath Golden Temple", desc: "Visit the sacred Shiva temple, decorated with 800 kg of pure gold dome." },
      { text: "Historic Sarnath Excursion", desc: "See where Lord Buddha preached his very first sermon after enlightenment." }
    ],
    attractions: [
      {
        id: 1,
        name: "Dashashwamedh Ghat & Aarti",
        subtitle: "The Fire Ritual of the Ganges",
        desc: "The primary and busiest ghat in Varanasi. Every evening at sunset, a spectacular Ganga Aarti is performed by young priests using brass lamps, incense, and chants, watched by thousands from boats on the river.",
        image: "/Image/tour_varanasi.png",
        highlights: ["Evening Ganga Aarti", "Dashashwamedh river steps", "Boat-based viewing", "Sanskrit chants & bells"]
      },
      {
        id: 2,
        name: "Kashi Vishwanath Temple",
        subtitle: "The Sacred Golden Temple",
        desc: "Dedicated to Lord Shiva, this historic temple has been rebuilt several times. The current structure was built by Maharani Ahilyabai Holkar in 1780 and features a beautiful dome gilded in gold by Maharaja Ranjit Singh.",
        image: "/Image/Domestic%20Packages/Delhi/ChatGPT%20Image%20May%2027,%202026,%2008_31_25%20PM.png",
        highlights: ["Golden spires dome", "VIP entry corridors", "Sacred Shiva Lingam", "Historic alley access"]
      }
    ],
    thingsToDo: [
      "Cruise the Ganges on a rowboat at sunrise",
      "Watch the Ganga Aarti fire ritual from a boat seat",
      "Stroll the narrow winding lanes (Galis) of the old city",
      "Take a historical tour of Sarnath Buddhist ruins",
      "Taste Banarasi lassi served in clay cups (kulhad)",
      "Shop for authentic hand-woven Banarasi Silk sarees"
    ],
    foods: [
      { name: "Banarasi Lassi", desc: "Thick, creamy yogurt lassi served in clay kulhads, topped with saffron, malai, and rabri." },
      { name: "Kachori Sabzi & Jalebi", desc: "Flaky kachoris stuffed with lentils, served with potato curry and hot sweet jalebis for breakfast." },
      { name: "Tamatar Chaat", desc: "A unique Varanasi street food made of mashed tomatoes, potatoes, spices, and lemon juice." }
    ],
    luxuryExp: [
      { title: "BrijRama Palace Stay", desc: "Reside in a 200-year-old stone palace on Darbhanga Ghat, offering luxury rooms and private boat access.", img: "/Image/tour_varanasi.png" },
      { title: "Private Ganga Cruise", desc: "Enjoy a private wooden motorboat cruise with traditional live Shehnai music during the evening Aarti.", img: "/Image/tour_varanasi.png" }
    ],
    tips: [
      "Wear slip-on sandals as you will need to remove shoes at numerous temples.",
      "Sunrise is the best time for peaceful boat cruises; book by 5:00 AM (we manage all boat schedules).",
      "Old Varanasi lanes are crowded and narrow; keep your personal belongings secure.",
      "Dress modestly when visiting temples and active ghats."
    ],
    whyChoose: [
      "VIP skip-the-line passes for Kashi Vishwanath temple",
      "Curated, reliable boatmen and musical river charters",
      "Stays in premium heritage hotels right by the ghats",
      "Airport pickups in clean private cars"
    ]
  }
};

// Generate static routes for all 11 destinations at compile time
export async function generateStaticParams() {
  return Object.keys(destinationsData).map((id) => ({
    id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

const DestinationDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const destination = destinationsData[id];

  if (!destination) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-[#FAF7F2] pb-16 overflow-x-hidden">
      
      {/* ─── HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative w-full bg-primary text-white overflow-hidden rounded-b-[3.5rem] shadow-xl">
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={destination.image}
            alt={`Discover ${destination.title} with Intro Travels India`}
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent" />
        </div>

        {/* Decorative Orbs */}
        <div className="orange-orb w-[480px] h-[480px] -top-20 right-0 opacity-50" />
        <div className="teal-orb w-[350px] h-[350px] bottom-0 left-1/4 opacity-40" />

        <div className="relative z-10 px-6 md:px-12 lg:px-24 py-24 md:py-36">
          <div className="max-w-[760px] flex flex-col gap-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-400 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm w-fit border border-white/10">
              ✦ Featured Destination · India
            </span>
            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7.5xl tracking-tight leading-tight text-white">
              Discover{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                {destination.title}
              </span>
            </h1>
            <p className="text-xs uppercase font-extrabold tracking-widest text-orange-400 -mt-3">{destination.tagline}</p>
            <p className="text-white/75 text-base md:text-xl leading-relaxed max-w-[620px]">
              {destination.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="#inquiry-form"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-bold text-sm hover:shadow-orange-400/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Inquire About Packages →
              </a>
              <a
                href="#attractions"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 backdrop-blur-sm text-white rounded-full font-bold text-sm hover:bg-white/20 transition-all duration-300"
              >
                Explore Attractions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUICK TOUR SPECS ─────────────────────────────────────── */}
      <section className="w-full px-6 md:px-12 lg:px-24 -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 bg-white border border-black/[0.04] shadow-xl rounded-[2.5rem] p-6 md:p-10 text-center">
          {[
            { label: "Recommended duration", val: destination.duration },
            { label: "Best season to travel", val: destination.bestSeason },
            { label: "Average altitude", val: destination.altitude },
            { label: "Activity level", val: destination.activityLevel }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1 border-r last:border-r-0 border-black/[0.06] px-4">
              <span className="text-xs text-primary/45 font-bold uppercase tracking-wider">{item.label}</span>
              <span className="font-display font-extrabold text-xl md:text-2xl bg-gradient-to-r from-orange-500 to-teal-600 bg-clip-text text-transparent mt-1">
                {item.val}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── DESTINATION OVERVIEW ─────────────────────────────────── */}
      <section className="relative w-full px-6 md:px-12 lg:px-24 py-20 overflow-hidden">
        <div className="orange-orb w-[300px] h-[300px] -left-20 top-20 opacity-40" />
        <div className="teal-orb w-[250px] h-[250px] -right-10 bottom-10 opacity-30" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest font-extrabold text-orange-500">
              ✦ Destination Guide
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-primary leading-tight">
              An Unforgettable Experience In{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                {destination.title}
              </span>
            </h2>
            <div className="flex flex-col gap-5 text-primary/70 text-base md:text-lg leading-relaxed">
              <p>
                At <strong className="text-primary font-bold">Intro Travels India</strong>, we provide personalized 
                travel setups for {destination.title} with licensed drivers, premium accommodations, and bespoke itineraries 
                tailored around your dates and budget.
              </p>
              <p>
                From private sightseeing tours to culinary guides and local market walks, discover this beautiful 
                region with India's most trusted travel planners.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="relative h-[380px] md:h-[450px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src={destination.image}
                alt={`Detailed view of ${destination.title}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-[1.5rem] p-5 shadow-lg max-w-[160px]">
              <span className="font-display font-extrabold text-3xl block leading-none">100%</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider opacity-90 mt-1 block">Customized Itineraries</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY VISIT GRID ───────────────────────────────────────── */}
      <section className="relative w-full py-20 overflow-hidden section-warm">
        <div className="orange-orb w-[400px] h-[400px] -right-20 top-0 opacity-40" />
        
        <div className="relative z-10 px-6 md:px-12 lg:px-24">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest font-extrabold text-orange-500 mb-2 block">
              ✦ Highlights
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-primary">
              Why Visit{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                {destination.title}?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destination.whyVisit.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white/80 backdrop-blur-sm border border-orange-100 rounded-[2rem] p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all duration-300 premium-card"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                  <Check size={18} />
                </div>
                <h3 className="font-display font-bold text-lg text-primary">{item.text}</h3>
                <p className="text-primary/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TOP ATTRACTIONS ──────────────────────────────────────── */}
      <section id="attractions" className="relative w-full px-6 md:px-12 lg:px-24 py-24 overflow-hidden">
        <div className="teal-orb w-[400px] h-[400px] -left-20 top-1/3 opacity-40" />
        <div className="orange-orb w-[300px] h-[300px] -right-20 bottom-1/4 opacity-35" />

        <div className="relative z-10">
          <div className="text-center mb-16 max-w-[620px] mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-orange-500 mb-2 block">
              ✦ Places to Explore
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-primary leading-tight">
              Top Tourist Attractions in{" "}
              <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                {destination.title}
              </span>
            </h2>
            <p className="text-primary/55 text-base md:text-lg mt-3 leading-relaxed">
              Experience the absolute best landmarks during your customized tour.
            </p>
          </div>

          {/* Attractions Alternating Layout */}
          <div className="flex flex-col gap-20">
            {destination.attractions.map((att, idx) => (
              <div 
                key={att.id} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Image panel */}
                <div className={`lg:col-span-6 relative ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative h-[320px] md:h-[400px] rounded-[2.5rem] overflow-hidden shadow-xl border border-black/[0.03]">
                    <Image
                      src={att.image}
                      alt={att.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className={`lg:col-span-6 flex flex-col gap-5 text-left ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex flex-col gap-1">
                    <span className="font-display font-extrabold text-2xl text-orange-100 leading-none">0{att.id}</span>
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-primary tracking-tight mt-1">{att.name}</h3>
                    <p className="text-xs uppercase font-extrabold tracking-wider text-orange-500">{att.subtitle}</p>
                  </div>
                  
                  <p className="text-primary/65 text-base leading-relaxed">{att.desc}</p>
                  
                  <div className="border-t border-black/[0.04] pt-4 mt-1">
                    <p className="text-xs uppercase font-extrabold text-primary/45 tracking-wider mb-3">Key Highlights</p>
                    <div className="grid grid-cols-2 gap-3">
                      {att.highlights.map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-primary/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BEST THINGS TO DO ────────────────────────────────────── */}
      <section className="relative w-full py-20 overflow-hidden section-cool">
        <div className="teal-orb w-[300px] h-[300px] -right-10 top-0 opacity-40" />

        <div className="relative z-10 px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6 text-left">
              <span className="text-xs uppercase tracking-widest font-extrabold text-orange-500">
                ✦ Activities
              </span>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-primary leading-tight">
                Best Things to Do in{" "}
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  {destination.title}
                </span>
              </h2>
              <p className="text-primary/60 text-base leading-relaxed">
                Make your trip active and memorable with our curated local experiences.
              </p>
            </div>
            
            <div className="lg:col-span-7 bg-white/70 backdrop-blur-sm border border-orange-50 rounded-[2.5rem] p-8 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {destination.thingsToDo.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} />
                    </span>
                    <span className="text-sm text-primary/75 font-semibold leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOODS & LUXURY EXPERIENCES ──────────────────────────── */}
      <section className="relative w-full px-6 md:px-12 lg:px-24 py-20 overflow-hidden section-warm">
        <div className="orange-orb w-[400px] h-[400px] -right-20 top-1/2 opacity-40" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Foods Section */}
          <div className="flex flex-col gap-6 text-left">
            <div>
              <span className="text-xs uppercase tracking-widest font-extrabold text-orange-500 mb-2 block">
                ✦ Gastronomy
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-3">
                Famous Foods to Try 🍲
              </h2>
              <p className="text-primary/60 text-sm leading-relaxed">
                Enjoy authentic regional flavours and local specialties.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {destination.foods.map((food, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-orange-100 shadow-sm flex flex-col gap-1">
                  <h4 className="font-bold text-primary text-base">{food.name}</h4>
                  <p className="text-xs text-primary/60 leading-relaxed mt-1">{food.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Luxury Experiences */}
          <div className="flex flex-col gap-6 text-left">
            <div>
              <span className="text-xs uppercase tracking-widest font-extrabold text-orange-500 mb-2 block">
                ✦ High End Travel
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-3">
                Luxury Upgrades ✨
              </h2>
              <p className="text-primary/60 text-sm leading-relaxed">
                Add premium hospitality touches to your custom vacation.
              </p>
            </div>

            <div className="space-y-4">
              {destination.luxuryExp.map((exp, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-black/[0.01] shadow-sm flex flex-col sm:flex-row gap-4 items-center">
                  <div className="relative w-28 h-20 rounded-xl overflow-hidden shrink-0">
                    <Image src={exp.img} alt={exp.title} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">{exp.title}</h4>
                    <p className="text-xs text-primary/60 mt-1 leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIPS & TRUST FACTORS ─────────────────────────────────── */}
      <section className="relative w-full px-6 md:px-12 lg:px-24 py-24 overflow-hidden">
        <div className="teal-orb w-[300px] h-[300px] -left-20 bottom-10 opacity-30" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Travel Tips Checklist */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] border border-black/[0.02] p-8 md:p-12 shadow-sm text-left">
            <span className="text-xs uppercase tracking-widest font-extrabold text-orange-500 mb-2 block">
              ✦ Essential Guidelines
            </span>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-primary mb-6">Local Travel Tips</h3>
            <div className="space-y-4">
              {destination.tips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-primary/70">
                  <Info size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Intro Travels India */}
          <div className="lg:col-span-5 bg-primary text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden flex flex-col justify-between text-left">
            <div className="orange-orb w-[220px] h-[220px] -top-10 -right-10 opacity-30" />
            <div className="relative z-10">
              <span className="text-xs uppercase tracking-widest font-extrabold text-orange-400 mb-2 block">
                ✦ Trust & Safety
              </span>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-6">Why Choose Us?</h3>
              <div className="space-y-4 text-white/80 text-sm">
                {destination.whyChoose.length > 0 ? (
                  destination.whyChoose.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-white/10 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))
                ) : (
                  [
                    "100% Customized Tour Packages",
                    "Stays in premium, handpicked hotels",
                    "24/7 on-ground coordinate assistance",
                    "Comfortable vehicles with expert local drivers"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-white/10 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="relative z-10 border-t border-white/10 pt-6 mt-8 flex flex-col gap-2">
              <span className="text-xs text-white/50 uppercase tracking-widest">Talk to our experts</span>
              <a href="tel:+919870526003" className="text-lg font-bold text-orange-400 hover:underline">+91 98705 26003</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INQUIRY FORM ─────────────────────────────────────────── */}
      <section id="inquiry-form" className="relative w-full">
        <BookingForm activePackage={id} />
      </section>
    </main>
  );
};

export default DestinationDetailPage;
