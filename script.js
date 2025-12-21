// ================= CONFIGURATION =================
const GITHUB_USER = "WolfT31";
const GITHUB_REPO = "accesspin";
const GITHUB_FILE = "pin.json";


// ================= PIN CIPHER OBFUSCATION =================
const PIN_CIPHER = {
  '1': 'X', '2': 'P', '3': 'T', '4': 'M',
  '5': 'K', '6': 'R', '7': 'S', '8': 'L',
  '9': 'D', '0': 'Z'
};

// Create reverse cipher for decoding
const REVERSE_CIPHER = (() => {
  const reverse = {};
  for (const [digit, char] of Object.entries(PIN_CIPHER)) {
    reverse[char] = digit;
  }
  return reverse;
})();

function encodePin(pin) {
  
  return pin.split('').map(digit => PIN_CIPHER[digit] || '?').join('');
}

function decodePin(encoded) {
  
  return encoded.split('').map(char => REVERSE_CIPHER[char] || '?').join('');
}

// ================= GAME DATA =================
const gamesData = [
  {
    id: 'cod-mw2',
    name: 'COD MW2',
    image: 'https://i.postimg.cc/RhJbSY2f/Picsart-25-12-17-23-43-31-792.jpg',
    category: 'android',
    size: '3.2 GB',
    description: 'Call of Duty Modern Warfare 2 - Graphics kali na gameplay smooth.',
    appLink: '#',
    gameLink: 'https://vimeo.com/1148366936?share=copy&fl=sv&fe=ci',
    videoLink: 'https://vimeo.com/1148366936?share=copy&fl=sv&fe=ci',
    version: 'v1.8',
    ram: '4GB+',
    requirements: ['Android 9.0+', 'RAM 4GB+', 'Storage 4GB+', 'Processor Octa-core 2.2GHz+']
  },
  {
    id: 'pes-2026',
    name: 'PES 2026',
    image: 'https://i.postimg.cc/SxPNJz5b/efootball-5c-3840x2400.jpg',
    category: 'android',
    size: '3.1 GB',
    description: 'PES 2026 - Football bora kwa simu, graphics za HD na timu zote.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v3.0',
    ram: '3GB+',
    requirements: ['Android 9+', 'RAM 3GB+', 'Storage 4GB+', 'Adreno 610+']
  },
  {
    id: 'blur',
    name: 'BLUR',
    image: 'https://i.postimg.cc/T1L2f22G/wp12417971-blur-racing-wallpapers.jpg',
    category: 'android',
    size: '1.8 GB',
    description: 'BLUR Racing - Speed na graphics nzuri, races 50+ na gari 40+.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.2',
    ram: '3GB+',
    requirements: ['Android 7+', 'RAM 3GB+', 'Storage 2GB+', 'Mali-G72+']
  },
  // Example game object with optional buttons:
{
  id: 'gta-v',
  name: 'GTA V',
  image: 'https://i.postimg.cc/3NCSymx3/wp6133812-gta-v-desktop-wallpapers.jpg',
  category: 'android',
  size: '4.2 GB',
  description: 'Grand Theft Auto V - Mji mzima wa Los Santos kwenye simu yako.',
  appLink: '',
  gameLink: 'https://your-driver-link.com', // Game Data button
  driverLink: '#', // Optional - add if game needs driver
  saveDataLink: 'https://your-driver-link.com', // Optional - add if game has save data
  emulatorLink: 'https://your-driver-link.com', // Optional - add if game needs emulator
  graphicsLink: '#', // Optional - add if game has graphics settings
  version: 'v1.5',
  ram: '6GB+',
  requirements: ['Android 10+', 'RAM 6GB+', 'Storage 5GB+', 'Snapdragon 845+']
},
  {
    id: 'justcause-ii',
    name: 'JUST CAUSE II',
    image: 'https://i.postimg.cc/T1j4q77G/Picsart-25-12-12-16-54-14-174.jpg',
    category: 'android',
    size: '2.8 GB',
    description: 'Just Cause 2 - Open world action game na explosions nyingi.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.3',
    ram: '4GB+',
    requirements: ['Android 8+', 'RAM 4GB+', 'Storage 3GB+', 'Snapdragon 710+']
  },
  {
    id: 'cod-black-ops-6',
    name: 'COD BLACK OPS 6',
    image: 'https://i.postimg.cc/wjMKY06p/Picsart-25-12-17-18-31-31-375.jpg',
    category: 'android',
    size: '3.5 GB',
    description: 'HII NI BLACK OPS 2 - Mchezo bora wa vita wa kisasa na graphics kali.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v2.1.0',
    ram: '4GB+',
    requirements: ['Android 8.0+', 'RAM 4GB+', 'Storage 4GB+', 'Processor Octa-core 2.0GHz+']
  },
  {
    id: 'amazing-spiderman',
    name: 'AMAZING SPIDERMAN',
    image: 'https://i.postimg.cc/dt37DBxd/Picsart-25-12-17-22-32-42-142.jpg',
    category: 'android',
    size: '2.9 GB',
    description: 'Spider-Man - Swing katika mji wa New York kama Spider-Man.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.7',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+', 'Storage 3GB+', 'Adreno 618+']
  },
  {
    id: 'bright-memory',
    name: 'BRIGHT MEMORY',
    image: 'https://i.postimg.cc/VNjBKFwf/Picsart-25-12-19-13-54-04-278.jpg',
    category: 'android',
    size: '3.2 GB',
    description: 'Bright Memory - FPS game yenye graphics kali za ray tracing.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.4',
    ram: '6GB+',
    requirements: ['Android 10+', 'RAM 6GB+', 'Storage 4GB+', 'Snapdragon 855+']
  },
  {
    id: 'gta-vice-city',
    name: 'GTA VICE CITY',
    image: 'https://i.postimg.cc/wvTz09ZW/Picsart-25-12-17-23-11-59-195.jpg',
    category: 'pc',
    size: '2.1 GB',
    description: 'GTA Vice City - Classic game ya PC yenye nostalgia.',
    appLink: 'https://t.me/wolftz',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.0',
    ram: '2GB+',
    requirements: ['Windows 7+', 'RAM 2GB+', 'GPU 1GB+', 'DirectX 9.0+']
  },
  {
    id: 'far-cry3',
    name: 'FAR CRY 3',
    image: 'https://i.postimg.cc/QCfkrdn8/IMG-20251217-214840-174.jpg',
    category: 'android',
    size: '3.4 GB',
    description: 'Far Cry 3 - Survival shooter kwenye kisiwa cha pirates.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.6',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+', 'Storage 4GB+', 'Snapdragon 730+']
  },
  {
    id: 'euro-truck',
    name: 'EURO TRUCK',
    image: 'https://i.postimg.cc/j24jC8Vq/Picsart-25-12-17-22-55-11-735.jpg',
    category: 'pc',
    size: '4.5 GB',
    description: 'Euro Truck Simulator - Drive truck barani Ulaya.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v2.3',
    ram: '4GB+',
    requirements: ['Windows 8+', 'RAM 4GB+', 'GPU 2GB+', 'DirectX 11+']
  },
  {
    id: 'tomb-raider',
    name: 'TOMB RAIDER',
    image: 'https://i.postimg.cc/7LL4xs6Z/IMG-20251217-214416-779.jpg',
    category: 'android',
    size: '2.9 GB',
    description: 'Tomb Raider - Adventure game kali na puzzles nyingi.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v2.0',
    ram: '4GB+',
    requirements: ['Android 8+', 'RAM 4GB+', 'Storage 3GB+', 'Snapdragon 730+']
  },
  {
    id: 'gta-iv',
    name: 'GTA IV',
    image: 'https://i.postimg.cc/T2jgGMZx/9d4f73088ab678a17bda42671b2568e6.jpg',
    category: 'pc',
    size: '8.5 GB',
    description: 'Grand Theft Auto IV - Liberty City katika graphics za kisasa.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.2',
    ram: '4GB+',
    requirements: ['Windows 10+', 'RAM 4GB+', 'GPU 2GB+', 'DirectX 10+']
  },
  {
    id: 'cod-mw3',
    name: 'COD MW3',
    image: 'https://i.postimg.cc/1tjpz3Q5/wp13629624-call-of-duty-modern-warfare-3-season-2-wallpapers.png',
    category: 'android',
    size: '3.8 GB',
    description: 'Call of Duty Modern Warfare 3 - War game yenye graphics za hali ya juu.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.9',
    ram: '6GB+',
    requirements: ['Android 10+', 'RAM 6GB+', 'Storage 4GB+', 'Snapdragon 860+']
  },
  {
    id: 'last-of-us-ii',
    name: 'LAST OF US II',
    image: 'https://i.postimg.cc/zvXkygsm/the-last-of-us-2-3840x2160-17336.jpg',
    category: 'pc',
    size: '60 GB',
    description: 'The Last of Us Part II - Story game bora yenye emotional gameplay.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.0',
    ram: '16GB+',
    requirements: ['Windows 10+', 'RAM 16GB+', 'GPU 8GB+', 'DirectX 12+']
  },
  {
    id: 'gta-san-andreas',
    name: 'GTA SAN ANDREAS',
    image: 'https://i.postimg.cc/MTTDLQWZ/Picsart-25-12-17-17-44-40-709.jpg',
    category: 'pc',
    size: '3.7 GB',
    description: 'GTA San Andreas - Classic open world game.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.0',
    ram: '2GB+',
    requirements: ['Windows 7+', 'RAM 2GB+', 'GPU 512MB+', 'DirectX 9.0+']
  },
  {
    id: 'winds-meet',
    name: 'WINDS MEET',
    image: 'https://i.postimg.cc/ZR9LmhtM/Picsart-25-12-19-13-14-32-260.jpg',
    category: 'cloud',
    size: 'Cloud',
    description: 'Winds Meet - Cloud game ya adventure na exploration.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'Cloud',
    ram: 'Any',
    requirements: ['Internet 10MB+', 'Any device', 'Browser latest']
  },
  {
    id: 'last-of-us',
    name: 'LAST OF US',
    image: 'https://i.postimg.cc/jdvS6JGK/IMG-20251217-213632-071.jpg',
    category: 'cloud',
    size: 'Cloud',
    description: 'The Last of Us - Cloud version ya game maarufu.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'Cloud',
    ram: 'Any',
    requirements: ['Internet 15MB+', 'Any device', 'Browser latest']
  },
  {
    id: 'god-of-war',
    name: 'GOD OF WAR',
    image: 'https://i.postimg.cc/QdNZhxdj/3389027.jpg',
    category: 'android',
    size: '3.5 GB',
    description: 'God of War - Action game bora na graphics za PS4.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.8',
    ram: '6GB+',
    requirements: ['Android 10+', 'RAM 6GB+', 'Storage 4GB+', 'Snapdragon 855+']
  },
  {
    id: 'god-of-war-ii',
    name: 'GOD OF WAR II',
    image: 'https://i.postimg.cc/zXt0HJkz/Picsart-25-12-17-01-24-30-348.jpg',
    category: 'android',
    size: '3.8 GB',
    description: 'God of War II - Continuation ya story ya Kratos.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v2.1',
    ram: '6GB+',
    requirements: ['Android 10+', 'RAM 6GB+', 'Storage 5GB+', 'Snapdragon 865+']
  },
  {
    id: 'gta-v-cloud',
    name: 'GTA V CLOUD',
    image: 'https://i.postimg.cc/LXvgnsMs/Picsart-25-12-17-02-13-37-058.jpg',
    category: 'cloud',
    size: 'Cloud',
    description: 'GTA V Cloud version - Play GTA V online without download.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'Cloud',
    ram: 'Any',
    requirements: ['Internet 20MB+', 'Any device', 'Browser latest']
  },
  {
    id: 'watch-dogs',
    name: 'WATCH DOGS',
    image: 'https://i.postimg.cc/DypvmcFc/Picsart-25-12-19-19-28-15-267.jpg',
    category: 'android',
    size: '4.1 GB',
    description: 'Watch Dogs - Hack the city of Chicago.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.5',
    ram: '6GB+',
    requirements: ['Android 10+', 'RAM 6GB+', 'Storage 5GB+', 'Snapdragon 845+']
  },
  {
    id: 'red-dead-redemption',
    name: 'RED DEAD REDEMPTION',
    image: 'https://i.postimg.cc/4dFmfRwg/IMG-20251217-213320-872.jpg',
    category: 'android',
    size: '5.2 GB',
    description: 'Red Dead Redemption - Western open world game.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.3',
    ram: '8GB+',
    requirements: ['Android 11+', 'RAM 8GB+', 'Storage 6GB+', 'Snapdragon 888+']
  },
  {
    id: 'watch-dogs-ii',
    name: 'WATCH DOGS II',
    image: 'https://i.postimg.cc/C104GkVw/Picsart-25-12-17-21-31-05-747.jpg',
    category: 'android',
    size: '4.5 GB',
    description: 'Watch Dogs 2 - Hack katika mji wa San Francisco.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v2.0',
    ram: '6GB+',
    requirements: ['Android 11+', 'RAM 6GB+', 'Storage 5GB+', 'Snapdragon 865+']
  },
  {
    id: 'mortal-kombat',
    name: 'MORTAL KOMBAT',
    image: 'https://i.postimg.cc/Vs3HKstw/462514-3000x1688-desktop-hd-scorpion-mortal-kombat-wallpaper.jpg',
    category: 'android',
    size: '3.3 GB',
    description: 'Mortal Kombat - Fighting game yenye fatalities kali.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.7',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+', 'Storage 4GB+', 'Snapdragon 730+']
  },
  {
    id: 'uncharted-4',
    name: 'UNCHARTED 4',
    image: 'https://i.postimg.cc/rFRn6vLj/40632.jpg',
    category: 'android',
    size: '4.8 GB',
    description: 'Uncharted 4 - Adventure game ya treasure hunting.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.4',
    ram: '6GB+',
    requirements: ['Android 10+', 'RAM 6GB+', 'Storage 5GB+', 'Snapdragon 855+']
  },
  {
    id: 'warfame',
    name: 'WARFAME',
    image: 'https://i.postimg.cc/sDMhxJvp/Picsart-25-12-19-14-18-32-813.jpg',
    category: 'android',
    size: '4.0 GB',
    description: 'Warframe - Sci-fi action game ya space ninjas.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v3.2',
    ram: '4GB+',
    requirements: ['Android 10+', 'RAM 4GB+', 'Storage 5GB+', 'Snapdragon 835+']
  },
  {
    id: 'mortal-kombat-11',
    name: 'MORTAL KOMBAT 11',
    image: 'https://i.postimg.cc/L4PdSJSM/Picsart-25-12-19-14-27-06-674.jpg',
    category: 'android',
    size: '4.5 GB',
    description: 'Mortal Kombat 11 - Latest fighting game yenye graphics bora.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v2.1',
    ram: '6GB+',
    requirements: ['Android 11+', 'RAM 6GB+', 'Storage 5GB+', 'Snapdragon 865+']
  },
  {
    id: 'life-is-strange',
    name: 'LIFE IS STRANGE',
    image: 'https://i.postimg.cc/Fz9vBv65/Picsart-25-12-19-15-08-24-123.jpg',
    category: 'android',
    size: '2.5 GB',
    description: 'Life is Strange - Story-based adventure game.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.0',
    ram: '3GB+',
    requirements: ['Android 8+', 'RAM 3GB+', 'Storage 3GB+', 'Snapdragon 660+']
  },
  {
    id: 'bully',
    name: 'BULLY',
    image: 'https://i.postimg.cc/JnS6s5bc/Picsart-25-12-19-15-13-28-237.jpg',
    category: 'android',
    size: '2.2 GB',
    description: 'Bully - School life adventure game.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.0',
    ram: '3GB+',
    requirements: ['Android 7+', 'RAM 3GB+', 'Storage 3GB+', 'Snapdragon 625+']
  },
  {
    id: 'little-nightmare',
    name: 'LITTLE NIGHTMARE',
    image: 'https://i.postimg.cc/9Mf5dbwm/file-000000005b8071f896e71d3d0596605b.png',
    category: 'android',
    size: '2.8 GB',
    description: 'Little Nightmare - Horror puzzle platformer.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.3',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+', 'Storage 3GB+', 'Snapdragon 710+']
  },
  {
    id: 'god-hand',
    name: 'GOD HAND',
    image: 'https://i.postimg.cc/ryCZVxDN/Picsart-25-12-19-15-28-02-938.jpg',
    category: 'android',
    size: '1.5 GB',
    description: 'God Hand - Beat em up game ya classic.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.0',
    ram: '2GB+',
    requirements: ['Android 6+', 'RAM 2GB+', 'Storage 2GB+', 'Snapdragon 430+']
  },
  {
    id: 'downhill',
    name: 'DOWNHILL',
    image: 'https://i.postimg.cc/c13Cr7YD/Picsart-25-12-19-15-58-39-551.jpg',
    category: 'android',
    size: '1.2 GB',
    description: 'Downhill - Bicycle racing game.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.1',
    ram: '2GB+',
    requirements: ['Android 7+', 'RAM 2GB+', 'Storage 2GB+', 'Mali-G71+']
  },
  {
    id: 'jade-empire',
    name: 'JADE EMPIRE',
    image: 'https://i.postimg.cc/yNSxc05M/Picsart-25-12-19-16-08-18-545.jpg',
    category: 'android',
    size: '2.0 GB',
    description: 'Jade Empire - Martial arts RPG game.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.0',
    ram: '3GB+',
    requirements: ['Android 8+', 'RAM 3GB+', 'Storage 2GB+', 'Snapdragon 660+']
  },
  {
    id: 'pascal-wager',
    name: 'PASCAL WAGER',
    image: 'https://i.postimg.cc/tCkGv7Wn/Picsart-25-12-19-16-22-05-189.jpg',
    category: 'android',
    size: '3.5 GB',
    description: 'Pascal\'s Wager - Souls-like action RPG.',
    appLink: '#',
    gameLink: '#',
    videoLink: '#',
    version: 'v1.5',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+', 'Storage 4GB+', 'Snapdragon 845+']
  }
];

// ================= GLOBAL VARIABLES =================
let validPins = [];
let pinsLoaded = false;
let slideInterval;
let currentSlide = 1;
let totalSlides = 0;
let particles = [];
let shockwave = false;
let canvas, ctx, logo;

// ================= PIN PROTECTION SYSTEM =================
async function loadPinsFromGitHub() {
  try {
    console.log("🔐 Loading obfuscated PINs from GitHub...");
    const url = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${GITHUB_FILE}`;
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3.raw',
        'User-Agent': 'WolfGamingHub'
      }
      // REMOVED: 'Authorization': `Bearer ${GITHUB_TOKEN}`,
    });
    
    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
    
    const data = await response.json();
    
    // Now we're storing OBFUSCATED pins like ["XKXR"]
    if (Array.isArray(data.pins)) {
      validPins = data.pins;
      pinsLoaded = true;
      console.log("✅ Obfuscated PINs loaded:", validPins);
    } else {
      throw new Error("Invalid PINs format");
    }
  } catch (error) {
    console.error("❌ Failed to load PINs:", error);
    showError("System error. Please contact support @WolfGamingHub");
    pinsLoaded = false;
  }
}

function showPinModal() {
  document.getElementById('pinInput').value = '';
  document.getElementById('pinError').textContent = '';
  document.getElementById('pinModal').classList.remove('hidden');
  
  setTimeout(() => document.getElementById('pinInput').focus(), 100);
  
  if (pinsLoaded) {
    const rememberedPIN = localStorage.getItem('gameLibPinRemembered');
    if (rememberedPIN) {
      const encodedRemembered = encodePin(rememberedPIN);
      if (validPins.includes(encodedRemembered)) {
        enterLibraryDirectly();
        return;
      }
    }
  }
}

function checkPin(pin) {
  if (!pinsLoaded) {
    showError("System initializing... Please wait");
    return false;
  }
  
  if (pin.length !== 4) {
    showError("PIN must be 4 digits");
    return false;
  }
  
  // Encode the entered PIN and compare with stored encoded PINs
  const encodedEntered = encodePin(pin);
  return validPins.includes(encodedEntered);
}

function showError(message) {
  const pinError = document.getElementById('pinError');
  if (pinError) {
    pinError.textContent = message;
    pinError.style.color = '#ff4757';
  }
}

// ================= GAME LIBRARY SYSTEM =================
function renderGames() {
  const gamesContainer = document.querySelector('.games');
  if (!gamesContainer) return;
  
  gamesContainer.innerHTML = '';
  
  gamesData.forEach(game => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-category', game.category);
    card.setAttribute('data-game-id', game.id);
    
    card.innerHTML = `
      <img src="${game.image}" alt="${game.name}">
      <h3>${game.name}</h3>
    `;
    
    card.addEventListener('click', () => openGameModal(game.id));
    gamesContainer.appendChild(card);
  });
}

function searchGames() {
  const input = document.getElementById("search").value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  
  cards.forEach(card => {
    if (card.innerText.toLowerCase().includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function filterGames(category) {
  document.querySelectorAll(".card").forEach(card => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function enterLibraryDirectly() {
  document.querySelector(".header").style.display = "none";
  
  const originalSlider = document.querySelector('.slider');
  const library = document.getElementById('library');
  
  if (originalSlider && library) {
    const sliderClone = originalSlider.cloneNode(true);
    sliderClone.id = 'slider-clone';
    
    const existingClone = document.getElementById('slider-clone');
    if (existingClone) existingClone.remove();
    
    document.body.insertBefore(sliderClone, library);
    originalSlider.style.display = 'none';
  }
  
  library.classList.remove("hidden");
  document.getElementById('logoutBtn').classList.remove('hidden');
  renderGames();
  
  setTimeout(() => {
    if (typeof initSlider === 'function') {
      setTimeout(() => initSlider(), 50);
    }
  }, 100);
}

function logout() {
  localStorage.removeItem('gameLibPinRemembered');
  
  const clonedSlider = document.getElementById('slider-clone');
  if (clonedSlider) clonedSlider.remove();
  
  const originalSlider = document.querySelector('.slider');
  if (originalSlider) {
    originalSlider.style.display = 'block';
    originalSlider.classList.remove('initialized');
  }
  
  document.querySelector(".header").style.display = "block";
  document.getElementById('library').classList.add("hidden");
  document.getElementById('logoutBtn').classList.add('hidden');
  
  setTimeout(() => {
    if (typeof initSlider === 'function') {
      if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
      }
      initSlider();
    }
  }, 100);
}

// ================= GAME DETAILS MODAL =================
function openGameModal(gameId) {
  const game = gamesData.find(g => g.id === gameId);
  if (!game) return;
  
  // Set game data
  document.getElementById('modalGameImage').src = game.image;
  document.getElementById('modalGameName').textContent = game.name;
  document.getElementById('modalGameDescription').textContent = game.description;
  document.getElementById('modalFileSize').textContent = game.size;
  document.getElementById('modalVersion').textContent = game.version;
  document.getElementById('modalRam').textContent = game.ram;
  document.getElementById('modalCategory').textContent = game.category.toUpperCase();
  
  // Store game data for video button
  document.getElementById('modalButtons').dataset.gameId = gameId;
  
  const buttonsContainer = document.getElementById('modalButtons');
  buttonsContainer.innerHTML = '';
  
  // Add video button with game parameter
  if (game.videoLink && game.videoLink !== '#') {
    addButton('TAZAMA MAELEKEZO', 'btn-purple', () => openVideo(game));
  } else {
    // If no video link, show a disabled button or don't show it
    addButton('TAZAMA MAELEKEZO', 'btn-gray', () => {
      alert('Hakuna video ya maelekezo inapatikana kwa sasa.');
    });
  }
  
  // Add other buttons
  if (game.appLink && game.appLink !== '#') {
    addButton('Download Game', 'btn-blue', () => window.open(game.appLink, '_blank'));
  }
  
  if (game.gameLink && game.gameLink !== '#') {
    addButton('Game Data', 'btn-orange', () => window.open(game.gameLink, '_blank'));
  }
  
  if (game.driverLink && game.driverLink !== '#') {
    addButton('Driver', 'btn-green', () => window.open(game.driverLink, '_blank'));
  }
  
  if (game.saveDataLink && game.saveDataLink !== '#') {
    addButton('Save Data', 'btn-green', () => window.open(game.saveDataLink, '_blank'));
  }
  
  if (game.emulatorLink && game.emulatorLink !== '#') {
    addButton('Emulator', 'btn-gray', () => window.open(game.emulatorLink, '_blank'));
  }
  
  if (game.graphicsLink && game.graphicsLink !== '#') {
    addButton('Graphics', 'btn-blue', () => window.open(game.graphicsLink, '_blank'));
  }
  
  document.getElementById('gameModal').classList.remove('hidden');
}

function openVideo(game) {
  if (game.videoLink && game.videoLink !== '#') {
    // Open the actual video link in new tab
    window.open(game.videoLink, '_blank');
  } else {
    alert(`Hakuna video ya maelekezo ya ${game.name} inapatikana kwa sasa.`);
  }
}
// ================= SLIDER SYSTEM =================
function initSlider() {
  const slider = document.querySelector('.slider:not([style*="display: none"]):not(.initialized)');
  if (!slider) return;
  
  slider.classList.add('initialized');
  const slidesContainer = slider.querySelector(".slides");
  if (!slidesContainer) return;
  
  const slides = slidesContainer.querySelectorAll("img");
  totalSlides = slides.length;

  if (slideInterval) {
    clearInterval(slideInterval);
    slideInterval = null;
  }

  const hasClones = slidesContainer.children.length > totalSlides;
  if (!hasClones && slides.length > 0) {
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    
    firstClone.classList.add('slide-clone');
    lastClone.classList.add('slide-clone');
    
    slidesContainer.appendChild(firstClone);
    slidesContainer.insertBefore(lastClone, slides[0]);
    
    currentSlide = 1;
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");

  function moveToSlide(index) {
    if (!slidesContainer) return;
    slidesContainer.style.transition = "transform 0.5s ease-in-out";
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;
  }

  slideInterval = setInterval(() => moveToSlide(currentSlide + 1), 4000);

  slidesContainer.addEventListener("transitionend", function handleTransition() {
    if (currentSlide === 0) {
      slidesContainer.style.transition = "none";
      currentSlide = totalSlides;
      slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    if (currentSlide === totalSlides + 1) {
      slidesContainer.style.transition = "none";
      currentSlide = 1;
      slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  });

  function resetInterval() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(() => moveToSlide(currentSlide + 1), 4000);
  }

  if (nextBtn) {
    const newNextBtn = nextBtn.cloneNode(true);
    nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
    newNextBtn.addEventListener("click", () => {
      moveToSlide(currentSlide + 1);
      resetInterval();
    });
  }

  if (prevBtn) {
    const newPrevBtn = prevBtn.cloneNode(true);
    prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
    newPrevBtn.addEventListener("click", () => {
      moveToSlide(currentSlide - 1);
      resetInterval();
    });
  }
}

// ================= PARTICLES SYSTEM =================
function initParticles() {
  canvas = document.getElementById("particles");
  if (!canvas) return;
  
  ctx = canvas.getContext("2d");
  logo = document.getElementById("logo");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  particles = [];
  const count = Math.floor((canvas.width * canvas.height) / 14000);
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    const count = Math.floor((canvas.width * canvas.height) / 14000);
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  });

  animate();
}

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = Math.random() * 0.4 - 0.2;
    this.speedY = Math.random() * 0.4 - 0.2;
  }

  update(logoPos) {
    this.x += this.speedX;
    this.y += this.speedY;

    const dx = this.x - logoPos.x;
    const dy = this.y - logoPos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    let force = shockwave ? 6 : 1.2;

    if (distance < 150) {
      this.x += (dx / distance) * force;
      this.y += (dy / distance) * force;
    }

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw(logoPos) {
    const dx = this.x - logoPos.x;
    const dy = this.y - logoPos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const opacity = distance < 150 ? 1 : 0.6;

    ctx.fillStyle = `rgba(0,242,255,${opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function getLogoPosition() {
  if (!logo) return { x: 0, y: 0 };
  const rect = logo.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  };
}

function animate() {
  if (!ctx || !canvas) return;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const logoPos = getLogoPosition();

  particles.forEach(p => {
    p.update(logoPos);
    p.draw(logoPos);
  });

  requestAnimationFrame(animate);
}

// ================= LOGO EFFECTS =================
function triggerLogo() {
  const logo = document.getElementById('logo');
  if (!logo) return;
  
  logo.classList.add("active");
  shockwave = true;

  const shockwaveEl = document.createElement('div');
  shockwaveEl.style.cssText = `
    position: fixed;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,242,255,0.5) 0%, transparent 70%);
    pointer-events: none;
    z-index: 9999;
    animation: expand 0.8s ease-out forwards;
  `;
  
  const style = document.createElement('style');
  style.textContent = `@keyframes expand {0% {transform:scale(0);opacity:1}100%{transform:scale(10);opacity:0}}`;
  document.head.appendChild(style);
  
  const rect = logo.getBoundingClientRect();
  shockwaveEl.style.left = (rect.left + rect.width/2 - 50) + 'px';
  shockwaveEl.style.top = (rect.top + rect.height/2 - 50) + 'px';
  
  document.body.appendChild(shockwaveEl);
  setTimeout(() => {
    shockwaveEl.remove();
    style.remove();
  }, 800);
  
  setTimeout(() => {
    logo.classList.remove("active");
    shockwave = false;
  }, 500);
}

// ================= MAIN INITIALIZATION =================
document.addEventListener('DOMContentLoaded', function() {
  console.log("🚀 Wolf Gaming Hub - Loading...");
  
  document.getElementById('gameModal').addEventListener('click', function(e) {
    if (e.target === this) closeGameModal();
  });
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeGameModal();
  });
  
  if (typeof initSlider === 'function') initSlider();
  
  // Load PINs WITHOUT token
  loadPinsFromGitHub();
  
  const accessBtn = document.getElementById('accessBtn');
  const pinInput = document.getElementById('pinInput');
  
  accessBtn.addEventListener('click', function() {
    const enteredPIN = pinInput.value.trim();
    
    if (checkPin(enteredPIN)) {
      const rememberCheckbox = document.getElementById('rememberPin');
      if (rememberCheckbox && rememberCheckbox.checked) {
        localStorage.setItem('gameLibPinRemembered', enteredPIN);
      }
      
      document.getElementById('pinModal').classList.add('hidden');
      enterLibraryDirectly();
    } else {
      pinInput.value = '';
      pinInput.focus();
    }
  });
  
  pinInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') accessBtn.click();
  });
  
  pinInput.addEventListener('input', function(e) {
    this.value = this.value.replace(/\D/g, '');
    if (this.value.length === 4) setTimeout(() => accessBtn.click(), 100);
  });
  
  if (typeof initParticles === 'function') initParticles();
  
  const logo = document.getElementById('logo');
  if (logo) logo.addEventListener('click', triggerLogo);
});

// ================= SHAKE ANIMATION =================
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
  }
`;
document.head.appendChild(style);

// ================= LOADING ANIMATION CONTROL =================
function initLoadingAnimation() {
  // Show loading screen immediately
  const loadingScreen = document.getElementById('loadingScreen');
  
  // Start loading your content
  simulateLoading();
}

function simulateLoading() {
  let progress = 0;
  const progressBar = document.querySelector('.progress-bar');
  const loadingText = document.querySelector('.loading-subtext');
  const loadingMessages = [
    "Loading Ultimate Gaming Experience...",
    "Initializing Game Library...",
    "Preparing Cyberpunk Interface...",
    "Almost Ready..."
  ];
  
  // Update progress every 300ms
  const interval = setInterval(() => {
    progress += Math.random() * 10 + 5; // Random progress between 5-15%
    
    if (progress > 100) {
      progress = 100;
      clearInterval(interval);
      
      // Change text when done
      if (loadingText) {
        loadingText.textContent = "Welcome to Wolf Gaming Hub!";
        loadingText.style.color = "#00f2ff";
      }
      
      // Hide loading screen after delay
      setTimeout(() => {
        hideLoadingScreen();
      }, 800);
    }
    
    // Update progress bar
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }
    
    // Change loading message at intervals
    if (loadingText && progress < 100) {
      if (progress > 25 && progress < 50) {
        loadingText.textContent = loadingMessages[1];
      } else if (progress > 50 && progress < 75) {
        loadingText.textContent = loadingMessages[2];
      } else if (progress > 75) {
        loadingText.textContent = loadingMessages[3];
      }
    }
  }, 300);
}

function hideLoadingScreen() {
  const loadingScreen = document.getElementById('loadingScreen');
  
  // Add fade-out animation
  loadingScreen.style.opacity = '0';
  loadingScreen.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    loadingScreen.style.display = 'none';
    
    // JUST SHOW HOME PAGE
    document.querySelector(".header").style.display = "block";
    
    // That's it! User will click button to see PIN modal
    
  }, 500);
}

// ================= UPDATE YOUR INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  // Start loading animation
  initLoadingAnimation();
  
  // Load PINs in background while animation plays
  loadPinsFromGitHub();
  
  // Initialize other components
  initSlider();
  initParticles();
  
  // Setup event listeners
  document.getElementById('accessBtn').addEventListener('click', handlePinSubmit);
  
  document.getElementById('pinInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handlePinSubmit();
    }
  });
  
  // Setup logo click effect
  const logo = document.getElementById('logo');
  if (logo) {
    logo.addEventListener('click', () => {
      logo.classList.add('active');
      setTimeout(() => logo.classList.remove('active'), 300);
    });
  }
});
