const cityDirectory = {
  "united kingdom": ["London", "Edinburgh", "Manchester", "Bath", "Liverpool", "York"],
  spain: ["Barcelona", "Madrid", "Seville", "Valencia", "Granada", "Bilbao"],
  japan: ["Tokyo", "Kyoto", "Osaka", "Hiroshima", "Nara", "Sapporo"],
  italy: ["Rome", "Florence", "Venice", "Milan", "Naples", "Bologna"],
  france: ["Paris", "Lyon", "Nice", "Marseille", "Bordeaux", "Strasbourg"],
  germany: ["Berlin", "Munich", "Hamburg", "Cologne", "Dresden", "Heidelberg"],
  portugal: ["Lisbon", "Porto", "Sintra", "Faro", "Braga", "Coimbra"],
  greece: ["Athens", "Thessaloniki", "Santorini", "Chania", "Corfu", "Nafplio"],
  netherlands: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Delft", "Maastricht"],
  switzerland: ["Zurich", "Lucerne", "Interlaken", "Geneva", "Bern", "Zermatt"],
  ireland: ["Dublin", "Galway", "Cork", "Killarney", "Kilkenny", "Belfast"],
  iceland: ["Reykjavík", "Vík", "Akureyri", "Húsavík", "Selfoss", "Ísafjörður"],
  norway: ["Oslo", "Bergen", "Tromsø", "Stavanger", "Trondheim", "Ålesund"],
  sweden: ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Kiruna", "Visby"],
  finland: ["Helsinki", "Turku", "Tampere", "Rovaniemi", "Porvoo", "Oulu"],
  "united states": ["New York", "San Francisco", "Chicago", "New Orleans", "Seattle", "Los Angeles"],
  canada: ["Toronto", "Vancouver", "Montréal", "Québec City", "Calgary", "Victoria"],
  mexico: ["Mexico City", "Oaxaca", "Mérida", "Guadalajara", "Cancún", "Puebla"],
  brazil: ["Rio de Janeiro", "São Paulo", "Salvador", "Paraty", "Recife", "Florianópolis"],
  argentina: ["Buenos Aires", "Mendoza", "Bariloche", "Salta", "Córdoba", "El Calafate"],
  china: ["Beijing", "Shanghai", "Chengdu", "Xi'an", "Hangzhou", "Guilin"],
  "south korea": ["Seoul", "Busan", "Jeju", "Gyeongju", "Incheon", "Jeonju"],
  india: ["Delhi", "Mumbai", "Jaipur", "Varanasi", "Kochi", "Udaipur"],
  thailand: ["Bangkok", "Chiang Mai", "Phuket", "Ayutthaya", "Krabi", "Pai"],
  vietnam: ["Hanoi", "Ho Chi Minh City", "Hội An", "Huế", "Đà Nẵng", "Ninh Bình"],
  slovenia: ["Ljubljana", "Lake Bled", "Piran", "Maribor", "Kranjska Gora", "Lake Bohinj"],
  indonesia: ["Jakarta", "Ubud", "Yogyakarta", "Bandung", "Seminyak", "Komodo"],
  singapore: ["Marina Bay", "Chinatown", "Kampong Glam", "Little India", "Tiong Bahru", "Sentosa"],
  australia: ["Sydney", "Melbourne", "Brisbane", "Perth", "Hobart", "Cairns"],
  "new zealand": ["Auckland", "Wellington", "Queenstown", "Christchurch", "Rotorua", "Dunedin"],
  egypt: ["Cairo", "Luxor", "Alexandria", "Aswan", "Giza", "Dahab"],
  morocco: ["Marrakesh", "Fes", "Chefchaouen", "Essaouira", "Rabat", "Tangier"],
  kenya: ["Nairobi", "Mombasa", "Lamu", "Nakuru", "Kisumu", "Diani Beach"],
  turkey: ["Istanbul", "Cappadocia", "Izmir", "Antalya", "Ankara", "Bodrum"]
};

const aliases = {
  uk: "united kingdom", "great britain": "united kingdom", britain: "united kingdom", england: "united kingdom",
  usa: "united states", us: "united states", america: "united states", "u.s.a.": "united states",
  korea: "south korea", "republic of korea": "south korea"
};

// A curated set of stable, public travel photographs. Every search uses these
// real image URLs, so country cards remain populated even when a live image
// search service is unavailable.
const photoPool = [
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1599982484208-3129f238b44e?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1539068352403-eaeca8e34b22?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1100&q=85",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1100&q=85"
];

const localNine = (country, cards) => cards.map(([city, caption], index) => ({
  city,
  caption,
  image: `assets/hd/${country}-${String(index + 1).padStart(2, "0")}.jpg`
}));

const countryStories = {
  "united kingdom": [
    { city: "London", caption: "The first glimpse of Big Ben.", image: "assets/hd/uk-london.jpg" },
    { city: "Afternoon Tea", caption: "A slow afternoon with tea and friends.", image: "assets/hd/uk-afternoon-tea.jpg" },
    { city: "Edinburgh", caption: "Streets built from old stone.", image: "assets/hd/uk-edinburgh.jpg" },
    { city: "The Great Outdoors", caption: "The country's breathtaking natural scenery.", image: "assets/hd/uk-outdoors.jpg" },
    { city: "Everyday Life", caption: "Rain, red buses and the daily rhythm.", image: "assets/hd/uk-everyday-life.jpg" },
    { city: "British Food", caption: "The first taste of fish and chips.", image: "assets/hd/uk-british-food.jpg" },
    { city: "Bath", caption: "A quiet surprise on a weekend trip.", image: "assets/hd/uk-bath.jpg" },
    { city: "Student Memories", caption: "Campus days, friendships and growing up.", image: "assets/hd/uk-student-memories.jpg" },
    { city: "Magical Nights", caption: "Warm memories from the festive season.", image: "assets/hd/uk-magical-nights.jpg" }
  ],
  india: localNine("india", [
    ["Mumbai", "Evenings by the sea."], ["Indian Food", "A taste of home."], ["Jaipur", "Colours of the Pink City."],
    ["Taj Mahal", "A timeless symbol of love."], ["Diwali", "Lights, love and togetherness."], ["Street Food", "The flavours we grew up with."],
    ["Varanasi", "Peaceful mornings by the Ganges."], ["Chai Time", "Conversations over a cup of chai."], ["Kerala", "Slow days, beautiful memories."]
  ]),
  spain: localNine("spain", [
    ["Barcelona", "Gaudí's city of art and colour."], ["Spanish Food", "A country of bold and sharing flavours."], ["Madrid", "A vibrant capital full of life."],
    ["Granada", "The Alhambra, where history meets beauty."], ["Flamenco", "Spain's passionate rhythm."], ["Seville", "A city of art, gardens and Andalusian charm."],
    ["Andalusia", "White villages and a relaxed pace of life."], ["Costa del Sol", "Sun, sea and endless summer vibes."], ["La Tomatina", "A fun and unforgettable Spanish festival."]
  ]),
  vietnam: localNine("vietnam", [
    ["Ha Long Bay", "A natural wonder of limestone islands."], ["Vietnamese Food", "Fresh, flavorful and full of local soul."], ["Hanoi", "A city of history, culture and everyday charm."],
    ["Hội An", "A lantern-lit town full of heritage."], ["Sapa", "Mountain views and rich ethnic culture."], ["Ho Chi Minh City", "A dynamic and modern Vietnam."],
    ["Mekong Delta", "Life along the rivers."], ["Da Nang", "Beaches, mountains and iconic views."], ["Vietnamese Coffee", "A simple joy in daily life."]
  ]),
  slovenia: localNine("slovenia", [
    ["Lake Bled", "A fairytale lake with an iconic island."], ["Slovenian Food", "Local flavours and sweet traditions."], ["Ljubljana", "A charming and lively capital."],
    ["Postojna Cave", "A magical underground world."], ["Triglav National Park", "Slovenia's alpine heart, perfect for nature lovers."], ["Lake Bohinj", "A peaceful and less-crowded alpine lake."],
    ["Piran", "A picturesque seaside town on the Adriatic."], ["Soča Valley", "Crystal-clear rivers and outdoor adventures."], ["Škocjan Caves", "A UNESCO wonder with a spectacular canyon."]
  ]),
  japan: localNine("japan", [
    ["Mount Fuji", "Japan's iconic and timeless symbol."], ["Japanese Food", "A world of fresh and delicate flavours."], ["Kyoto", "Ancient temples and timeless charm."],
    ["Tokyo", "A dynamic city where tradition meets future."], ["Fushimi Inari", "The famous corridor of a thousand torii."], ["Hokkaido", "Wide open nature and seasonal beauty."],
    ["Osaka", "A lively city of food, culture and energy."], ["Onsen", "A relaxing Japanese tradition."], ["Nara", "Where history and nature come together."]
  ]),
  italy: localNine("italy", [
    ["Rome", "A timeless city of history and culture."], ["Italian Food", "Simple ingredients, unforgettable flavours."], ["Venice", "A romantic city on the water."],
    ["Florence", "A Renaissance gem filled with art."], ["Amalfi Coast", "Dramatic cliffs, colourful towns and sea views."], ["Cinque Terre", "Five coastal villages full of charm."],
    ["Tuscany", "Vineyards, hills and the beauty of slow travel."], ["Lake Como", "Elegant lakeside views and peaceful moments."], ["Vatican City", "A spiritual and artistic treasure."]
  ]),
  brazil: localNine("brazil", [
    ["Rio de Janeiro", "Iconic views, beaches and vibrant life."], ["Brazilian Food", "Rich, diverse and full of flavour."], ["Salvador", "History, music and Afro-Brazilian culture."],
    ["Iguaçu Falls", "A breathtaking wonder of nature."], ["Carnival", "The world's most famous celebration."], ["The Amazon", "The world's largest rainforest and rich wildlife."],
    ["Lençóis Maranhenses", "A surreal landscape of dunes and lagoons."], ["Pantanal", "A paradise for wildlife lovers."], ["São Paulo", "Brazil's dynamic and cosmopolitan heart."]
  ])
};

const countryEssentials = {
  japan: { dish: "Sushi", streetFood: "Takoyaki", scenery: "Mount Fuji", landmark: "Fushimi Inari Shrine" },
  italy: { dish: "Pizza Napoletana", streetFood: "Gelato", scenery: "Amalfi Coast", landmark: "The Colosseum" },
  france: { dish: "Croissants", streetFood: "Crêpes", scenery: "The French Riviera", landmark: "The Eiffel Tower" },
  germany: { dish: "Bratwurst", streetFood: "Pretzels", scenery: "The Black Forest", landmark: "Neuschwanstein Castle" },
  portugal: { dish: "Pastéis de Nata", streetFood: "Bifana", scenery: "The Algarve", landmark: "Belém Tower" },
  greece: { dish: "Greek Salad", streetFood: "Gyros", scenery: "Santorini", landmark: "The Acropolis" },
  netherlands: { dish: "Stroopwafels", streetFood: "Bitterballen", scenery: "Tulip Fields", landmark: "Windmills of Kinderdijk" },
  switzerland: { dish: "Cheese Fondue", streetFood: "Rösti", scenery: "The Swiss Alps", landmark: "The Matterhorn" },
  ireland: { dish: "Irish Stew", streetFood: "Boxty", scenery: "Cliffs of Moher", landmark: "Trinity College Library" },
  iceland: { dish: "Skyr", streetFood: "Icelandic Hot Dog", scenery: "Blue Lagoon", landmark: "Hallgrímskirkja" },
  norway: { dish: "Norwegian Salmon", streetFood: "Pølse", scenery: "Norwegian Fjords", landmark: "Trolltunga" },
  sweden: { dish: "Swedish Meatballs", streetFood: "Cinnamon Bun", scenery: "Swedish Archipelago", landmark: "Vasa Museum" },
  finland: { dish: "Karelian Pies", streetFood: "Korvapuusti", scenery: "Finnish Lapland", landmark: "Helsinki Cathedral" },
  "united states": { dish: "American Barbecue", streetFood: "New York Hot Dog", scenery: "Grand Canyon", landmark: "Statue of Liberty" },
  canada: { dish: "Poutine", streetFood: "BeaverTails", scenery: "Banff National Park", landmark: "Niagara Falls" },
  mexico: { dish: "Tacos al Pastor", streetFood: "Elote", scenery: "Copper Canyon", landmark: "Chichén Itzá" },
  brazil: { dish: "Feijoada", streetFood: "Coxinha", scenery: "Iguaçu Falls", landmark: "Christ the Redeemer" },
  argentina: { dish: "Argentine Asado", streetFood: "Empanadas", scenery: "Patagonia", landmark: "Perito Moreno Glacier" },
  china: { dish: "Peking Duck", streetFood: "Jianbing", scenery: "Zhangjiajie", landmark: "The Great Wall" },
  "south korea": { dish: "Bibimbap", streetFood: "Tteokbokki", scenery: "Jeju Island", landmark: "Gyeongbokgung Palace" },
  india: { dish: "Masala Dosa", streetFood: "Chaat", scenery: "The Himalayas", landmark: "The Taj Mahal" },
  thailand: { dish: "Pad Thai", streetFood: "Mango Sticky Rice", scenery: "Phi Phi Islands", landmark: "Wat Arun" },
  vietnam: { dish: "Phở", streetFood: "Bánh mì", scenery: "Hạ Long Bay", landmark: "Golden Bridge" },
  indonesia: { dish: "Nasi Goreng", streetFood: "Satay", scenery: "Komodo National Park", landmark: "Borobudur" },
  singapore: { dish: "Hainanese Chicken Rice", streetFood: "Chilli Crab", scenery: "Gardens by the Bay", landmark: "Marina Bay Sands" },
  australia: { dish: "Meat Pie", streetFood: "Sausage Sizzle", scenery: "Great Barrier Reef", landmark: "Sydney Opera House" },
  "new zealand": { dish: "Hāngī", streetFood: "Whitebait Fritters", scenery: "Milford Sound", landmark: "Hobbiton" },
  egypt: { dish: "Koshari", streetFood: "Ful Medames", scenery: "The Nile", landmark: "The Pyramids of Giza" },
  morocco: { dish: "Tagine", streetFood: "Msemen", scenery: "Sahara Desert", landmark: "Hassan II Mosque" },
  kenya: { dish: "Nyama Choma", streetFood: "Samosas", scenery: "Maasai Mara", landmark: "Mount Kenya" },
  turkey: { dish: "Turkish Kebab", streetFood: "Simit", scenery: "Cappadocia", landmark: "Hagia Sophia" },
  slovenia: { dish: "Potica", streetFood: "Kranjska Sausage", scenery: "Lake Bled", landmark: "Predjama Castle" }
};

const normalized = value => value.trim().toLowerCase().replace(/\s+/g, " ");
const escapeHTML = value => String(value).replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));
const grid = document.querySelector("#cardGrid");
const input = document.querySelector("#countryInput");
const title = document.querySelector("#countryTitle");
const local = document.querySelector("#countryLocal");
const description = document.querySelector("#countryDescription");
const count = document.querySelector("#resultCount");

function makeCards(country, cities, key) {
  if (countryStories[key]) {
    return countryStories[key].map((card, index) => ({
      ...card,
      tag: `${String(index + 1).padStart(2, "0")} / FEATURE`,
      image: card.image || photoPool[(country.length + card.city.length + index * 3) % photoPool.length]
    }));
  }
  const places = cities || ["Capital city", "Historic quarter", "City streets", "Local neighbourhood", "A second city"];
  const [firstCity, secondCity, thirdCity, fourthCity, fifthCity] = places;
  const essentials = countryEssentials[key] || {
    dish: `${country} cuisine`,
    streetFood: `${country} street food`,
    scenery: `Landscapes of ${country}`,
    landmark: `Landmarks of ${country}`
  };
  const cards = [
    ["01 / CITY", firstCity, "A first look at the city", `${firstCity} ${country} city travel photograph`],
    ["02 / FOOD", essentials.dish, "A local dish to look for", `${essentials.dish} ${country} food photograph`],
    ["03 / CITY", secondCity, "A different side of the country", `${secondCity} ${country} city travel photograph`],
    ["04 / SCENERY", essentials.scenery, "A view beyond the city", `${essentials.scenery} ${country} travel photograph`],
    ["05 / CITY", thirdCity, "For a slower afternoon", `${thirdCity} ${country} city travel photograph`],
    ["06 / FOOD", essentials.streetFood, "A local favourite, made fresh", `${essentials.streetFood} ${country} food photograph`],
    ["07 / CITY", fourthCity, "Another place to explore", `${fourthCity} ${country} city travel photograph`],
    ["08 / LANDMARK", essentials.landmark, "The places people remember", `${essentials.landmark} ${country} travel photograph`],
    ["09 / CITY", fifthCity, "One more city for the list", `${fifthCity} ${country} city travel photograph`]
  ];
  return cards.map(([tag, city, caption, query], index) => ({
    tag,
    city,
    caption,
    query,
    image: photoPool[(country.length + city.length + index * 3) % photoPool.length]
  }));
}

async function findWikimediaPhoto(query) {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrnamespace: "6",
    gsrsearch: query,
    gsrlimit: "1",
    prop: "imageinfo",
    iiprop: "url",
    iiurlwidth: "1100",
    format: "json",
    origin: "*"
  });
  try {
    const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`);
    if (!response.ok) return null;
    const data = await response.json();
    const page = Object.values(data.query?.pages || {})[0];
    const image = page?.imageinfo?.[0];
    return image?.thumburl || image?.url || null;
  } catch {
    return null;
  }
}

async function populateAccuratePhotos() {
  const images = [...grid.querySelectorAll("img[data-image-query]")];
  await Promise.all(images.map(async image => {
    const correctPhoto = await findWikimediaPhoto(decodeURIComponent(image.dataset.imageQuery));
    if (correctPhoto && image.isConnected) image.src = correctPhoto;
  }));
}

function renderDestination(searchTerm) {
  const rawTerm = searchTerm.trim() || "Destination";
  const key = aliases[normalized(rawTerm)] || normalized(rawTerm);
  const cities = cityDirectory[key];
  const countryName = cities ? key.replace(/\b\w/g, letter => letter.toUpperCase()) : rawTerm;
  const cards = makeCards(countryName, cities, key);

  input.value = countryName;
  title.textContent = countryName;
  local.textContent = cities ? "CITY GUIDE" : "TRAVEL FILE";
  description.textContent = cities
    ? `Six key places to begin a solo journey through ${countryName}.`
    : `A visual starting point for ${countryName}: landmarks, food and moments worth asking about.`;
  count.textContent = "09 NOTES";
  grid.innerHTML = cards.map(card => `
    <article class="place-card">
      <img src="${card.image}" ${card.query ? `data-image-query="${encodeURIComponent(card.query)}"` : ""} alt="${escapeHTML(card.city)} in ${escapeHTML(countryName)}" loading="lazy" />
      <div class="card-copy">
        <h3><span class="card-number">${card.tag.split(" / ")[0]}</span> · ${escapeHTML(card.city)}</h3>
        <p>${escapeHTML(card.caption)}</p>
      </div>
    </article>`).join("");
  populateAccuratePhotos();
}

document.querySelector("#countryForm").addEventListener("submit", event => {
  event.preventDefault();
  renderDestination(input.value);
  document.querySelector("#results").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll("[data-country]").forEach(button => button.addEventListener("click", () => {
  renderDestination(button.dataset.country);
  document.querySelector("#results").scrollIntoView({ behavior: "smooth", block: "start" });
}));

const questions = [
  "If you could bring back one photograph, which moment from this trip would it hold?",
  "When you travelled alone, which meal has stayed with you?",
  "What did the journey teach you about yourself?",
  "What would you tell the next classmate travelling there?"
];
let questionIndex = 0;
document.querySelector("#nextQuestion").addEventListener("click", () => {
  questionIndex = (questionIndex + 1) % questions.length;
  document.querySelector(".interview-prompt p:not(.eyebrow)").textContent = questions[questionIndex];
  document.querySelector(".prompt-number").textContent = `Q.${String(questionIndex + 1).padStart(2, "0")}`;
});

const dialog = document.querySelector("#aboutDialog");
document.querySelector("#aboutButton").addEventListener("click", () => dialog.showModal());
document.querySelector("#closeDialog").addEventListener("click", () => dialog.close());
renderDestination("United Kingdom");
