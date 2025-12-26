// ================= CONFIGURATION =================
const GITHUB_USER = "WolfT31";
const GITHUB_REPO = "accesspin";
const GITHUB_FILE = "pin.json";

const PIN_CIPHER = {
  '1': 'X', '2': 'P', '3': 'T', '4': 'M',
  '5': 'K', '6': 'R', '7': 'S', '8': 'L',
  '9': 'D', '0': 'Z'
};

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

// ================= GAME DATA =============
  const gamesData = [
  {
    id: 'cod-mw2',
    name: 'COD MW2',
    image: 'https://i.postimg.cc/RhJbSY2f/Picsart-25-12-17-23-43-31-792.jpg',
    category: 'android',
    size: '7.2 GB',
    description: 'Game hii ni kali sana na ina maudhui ya Kivita mwanzo mwisho hakuna kupoa na kila Misheni vinaibuka vikwazo vipya kiufupi hii game ni kali ! ',
    keyLink: '#',
    gameLink: 'https://romsfun.com/roms/playstation-3/call-of-duty-modern-warfare-2.html',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: 'https://github.com/RPCSX/rpcsx-ui-android/releases/tag/v20250425',
    graphicsLink: 'https://github.com/K11MCH1/AdrenoToolsDrivers/releases',
    firmwareLink: 'https://www.techspot.com/drivers/driver/file/information/17026/',
    videoLink: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
    version: 'null', //version: 'v1.8',
    ram: '4GB+',
    requirements: ['Android 9.0+', 'RAM 4GB+']
  },
  {
    id: 'pes-2026',
    name: 'PES 2026',
    image: 'https://i.postimg.cc/SxPNJz5b/efootball-5c-3840x2400.jpg',
    category: 'android',
    size: '3.1 GB',
    description: 'Ufikirie ukiwa kwenye uwanja wenye jukwaa linalovuma, unapiga pasi ya kusisimua na kufunga goli la kushangaza. Hapa ndio ulimwengu wako wa soka, wewe ndio nyota!',
    keyLink: '#',
    gameLink: 'https://www.mediafire.com/file/s57ae54sfhh7va7/BETEGAMING_EFOOTBALL_2026_PSP_ISO.rar/file',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    saveDataLink: 'https://www.mediafire.com/file/se6d8fcs5sp3jcg/EFOOTBALL_2026_PSP_TEXTURES_%252B_SAVEDATA_BETEGAMING.rar/file',
    firmwareLink: '#',
    videoLink: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
    version: 'null', //version: 'v3.0',
    ram: '3GB+',
    requirements: ['Android 9+', 'RAM 3GB+']
  },
  {
    id: 'blur',
    name: 'BLUR',
    image: 'https://i.postimg.cc/T1L2f22G/wp12417971-blur-racing-wallpapers.jpg',
    category: 'android',
    size: '1.8 GB',
    description: 'Hisia ya kukimbiza gari lako kwenye barabara zenye mvurugiko, na kila kona inakupa raha ya kutosha. Ufikirie kama kuwa ndani ya filamu ya harakati, lakini wewe ndio dereva!',
    keyLink: '#',
    gameLink: 'https://www.mediafire.com/file_premium/t6ozu1mjs75zkin/Blur_Win_R_EN.zip/file',
    yuzuLink: '#',
    gamehubLink: 'https://www.mediafire.com/file/yrfj0gv2n79szhn/GameHub_5.3.2_3bd6c76401a1a05e60854cc760be65b7.apk/file',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: 'https://t.me/wolftz',
    version: 'null', //version: 'v1.2',
    ram: '3GB+',
    requirements: ['Android 10+', 'RAM 4GB+']
  },
  {
    id: 'gta-v',
    name: 'GTA V',
    image: 'https://i.postimg.cc/3NCSymx3/wp6133812-gta-v-desktop-wallpapers.jpg',
    category: 'android',
    size: '4.2 GB',
    description: 'Tembea katika mji wa Los Santos, uliojaa mafanikio na hatari kwa kila kona. Hapa unaweza kuwa mtu wa kawaida au jina la kutisha - uhai wako, maamuzi yako.',
    keyLink: '',
    gameLink: 'https://your-driver-link.com',
    driverLink: '#',
    emulatorLink: 'https://your-driver-link.com',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.5',
    ram: '6GB+',
    requirements: ['Android 10+', 'RAM 6GB+']
  },
  {
    id: 'justcause-ii',
    name: 'JUST CAUSE II',
    image: 'https://i.postimg.cc/52BBBwd7/Picsart-25-12-22-02-48-58-236.jpg',
    category: 'android',
    size: '2.8 GB',
    description: 'Fikiri unaruka kutoka ndege bila parachuti, ukishika bunduki na kulipua kila kitu mbele yako. Bonge ya Game kuwahi kutokea pia ina graphics kali sana',
    keyLink: '#',
    gameLink: 'https://buzzheavier.com/wd40jnidba2j',
    yuzuLink: '#',
    gamehubLink: 'https://www.mediafire.com/file/yrfj0gv2n79szhn/GameHub_5.3.2_3bd6c76401a1a05e60854cc760be65b7.apk/file',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.3',
    ram: '4GB+',
    requirements: ['Android 8+', 'RAM 4GB+']
  },
  {
    id: 'cod-black-ops-6',
    name: 'COD BLACK OPS 6',
    image: 'https://i.postimg.cc/wjMKY06p/Picsart-25-12-17-18-31-31-375.jpg',
    category: 'android',
    size: '3.5 GB',
    description: 'Game hii ni kali sana na ina maudhui ya Kivita mwanzo mwisho hakuna kupoa na kila Misheni vinaibuka vikwazo vipya kiufupi hii game ni kali, Graphics ya Hii game ni 4K',
    keyLink: '#',
    gameLink: '#',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v2.1.0',
    ram: '4GB+',
    requirements: ['Android 8.0+', 'RAM 4GB+']
  },
  {
    id: 'amazing-spiderman',
    name: 'AMAZING SPIDERMAN',
    image: 'https://i.postimg.cc/dt37DBxd/Picsart-25-12-17-22-32-42-142.jpg',
    category: 'android',
    size: '2.9 GB',
    description: 'Tembea angani ukiwa kama Peter Parker halisi, ukihama kati ya majengo makubwa ya New York. Hapa ndio unapojisikia kama shujaa, huku ukipambana na Villains wanaosumbua mji',
    keyLink: 'https://prodkeys.net/cemu-keys/',
    gameLink: 'https://romspure.cc/roms/nintendo-wii-u/the-amazing-spider-man-6/',
    yuzuLink: '#',
    cemuLink: 'https://cemu.en.uptodown.com/android',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.7',
    ram: '4GB+',
    requirements: ['Android 10+', 'RAM 4GB+']
  },
  {
    id: 'bright-memory',
    name: 'BRIGHT MEMORY',
    image: 'https://i.postimg.cc/VNjBKFwf/Picsart-25-12-19-13-54-04-278.jpg',
    category: 'android',
    size: '3.2 GB',
    description: 'Game hii ni kali sana na ina maudhui ya Kivita mwanzo mwisho hakuna kupoa na kila Misheni vinaibuka vikwazo vipya kiufupi hii game ni kali,Graphics ya Hii game ni 4K',
    keyLink: '#',
    gameLink: 'https://5play.org/en/20091-bright-memory-infinite.html',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.4',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+']
  },
  {
    id: 'gta-vice-city',
    name: 'GTA VICE CITY',
    image: 'https://i.postimg.cc/wvTz09ZW/Picsart-25-12-17-23-11-59-195.jpg',
    category: 'pc',
    size: '2.1 GB',
    description: 'Rudi kwenye enzi za miaka ya 80, ulimwengu wa muziki mzuri na gari zenye rangi kali.Game hii ni Kali na inacheza kwenye Simu yako',
    keyLink: 'https://t.me/wolftz',
    gameLink: 'https://www.mediafire.com/file/qxsb5l2tb7ivb0s/GTA-Vice-City-Definitiveeee-60-FPS-v1.90.0-mod-apkvision.apk/file?fbclid=I',
    videoLink: '#',
    version: 'null', //version: 'v1.0',
    ram: '3GB+',
    requirements: ['Windows 7+', 'RAM 3GB+']
  },
  {
    id: 'far-cry3',
    name: 'FAR CRY 3',
    image: 'https://i.postimg.cc/QCfkrdn8/IMG-20251217-214840-174.jpg',
    category: 'android',
    size: '3.4 GB',
    description: 'Jiokoe kutoka kwenye kisiwa cha wahalifu,kutana na bandits wa misituni na utapambana nao wote Utawakalisha.Hapa ndio unapojifunza kuishi kwa nguvu zako zote ili kusurvive Vikwazo.',
    keyLink: '#',
    gameLink: 'https://buzzheavier.com/hnam4zxjo3k5',
    yuzuLink: '#',
    gamehubLink: 'https://www.mediafire.com/file_premium/zhlgv398z1ksy24/GameHub-Lite-v5.1.3.apk/file',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.6',
    ram: '4GB+',
    requirements: ['Android 10', 'RAM 6GB+']
  },
  {
    id: 'euro-truck',
    name: 'EURO TRUCK',
    image: 'https://i.postimg.cc/j24jC8Vq/Picsart-25-12-17-22-55-11-735.jpg',
    category: 'pc',
    size: '4.5 GB',
    description: 'Panda kwenye lori yako na usafiri hadi nchi za Ulaya, ukifurahia mandhari ya kupendeza. Hii si kazi tu, ni safari ya kutuliza roho! pia game ina Quality ya hali ya Juu',
    keyLink: '#',
    gameLink: 'https://www.mediafire.com/file/l4dhn8d1a4gug1g/ETS2_1.36.2.2_%252B_70_DLC_%2528_Road_To_Black_Sea_DLC%2529_BY_SA.zip/file',
    yuzuLink: '#',
    gamehubLink: 'https://www.mediafire.com/file/yrfj0gv2n79szhn/GameHub_5.3.2_3bd6c76401a1a05e60854cc760be65b7.apk/file',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v2.3',
    ram: '4GB+',
    requirements: ['Android 8+', 'RAM 4GB+']
  },
  {
    id: 'tomb-raider',
    name: 'TOMB RAIDER',
    image: 'https://i.postimg.cc/7LL4xs6Z/IMG-20251217-214416-779.jpg',
    category: 'android',
    size: '2.9 GB',
    description: 'Penya ndani ya mapango ya kale yaliyofichwa ukiwa kama Lara Croft, ukikutana na mafumbo na hatari. Hapa ndio unapothamini uhodari na ustadi wako!',
    keyLink: '#',
    gameLink: 'https://www.mediafire.com/file/yrfj0gv2n79szhn/GameHub_5.3.2_3bd6c76401a1a05e60854cc760be65b7.apk/file',
    yuzuLink: '#',
    gamehubLink: 'https://www.mediafire.com/file/yrfj0gv2n79szhn/GameHub_5.3.2_3bd6c76401a1a05e60854cc760be65b7.apk/file',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v2.0',
    ram: '6GB+',
    requirements: ['Android 10+', 'RAM 6GB+']
  },
  {
    id: 'gta-iv',
    name: 'GTA IV',
    image: 'https://i.postimg.cc/T2jgGMZx/9d4f73088ab678a17bda42671b2568e6.jpg',
    category: 'pc',
    size: '8.5 GB',
    description: 'Kutana na maisha ya mtaa katika jiji la Liberty City, ambapo kila siku ni safari mpya ya kujitafutia riziki. Hapa ndipo unapojua thamani ya urafiki na uhalifu.',
    keyLink: '#',
    gameLink: 'https://www.mediafire.com/file/ma4lkoin9e0ip7j/GTA%2BIV%2BRIP%2BBy%2BOptiJuegos.7z/file?fbclid=IwdGRjcAOefupjbGNrA55-4GV4dG4DYWVtAjExAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHtMheUm2PI10nvNEYeBrpzUGaLFQlaU7k88s_QjOtEhj3cqxDPErnH_9lYHY_aem_vlx8H1UhqSweYs8F-Unjcw',
    yuzuLink: '#',
    gamehubLink: '#',
    winlatorLink: 'https://github.com/StevenMXZ/Winlator-Ludashi/releases?fbclid=IwdGRjcAOefzhjbGNrA55_L2V4dG4DYWVtAjExAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHmbsnHy6QYIWzud3TZ1pJFAGIeffnUeFnkBoKrpKtr5x-6DcLFaz77SU6GEl_aem_C0A9FRfUgp7mbtXwVP6Y0g',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    saveDataLink: 'https://www.mediafire.com/file/9dz5zi47jj54ze6/GTA+4+SAVE+DATA.zip/file?fbclid=IwdGRjcAOefyZjbGNrA55_IGV4dG4DYWVtAjExAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHkiJactNnQxd5ylHicmjXeeuBnc948u28itF7In3tQRC1Y4z1GVI_loetpdF_aem_n4TOvouVMuEMiKkRNfD2Eg',
    videoLink: '#',
    version: 'null', //version: 'v1.2',
    ram: '4GB+',
    requirements: ['Windows 10+', 'RAM 6GB+']
  },
  {
    id: 'cod-mw3',
    name: 'COD MW3',
    image: 'https://i.postimg.cc/1tjpz3Q5/wp13629624-call-of-duty-modern-warfare-3-season-2-wallpapers.png',
    category: 'android',
    size: '3.8 GB',
    description: 'Game hii ni kali sana na ina maudhui ya Kivita mwanzo mwisho hakuna kupoa na kila Misheni vinaibuka vikwazo vipya kiufupi hii game ni kali, Graphics ya Hii game ni 4K',
    keyLink: '#',
    gameLink: 'https://www.mediafire.com/file_premium/ah9krdvotrs1ecg/Call_of_Duty_-_Modern_Warfare_3_%2528Europe%252C_Australia%2529.rvz/file',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.9',
    ram: '6GB+',
    requirements: ['Android 10+', 'RAM 6GB+']
  },
  {
    id: 'last-of-us-ii',
    name: 'LAST OF US II',
    image: 'https://i.postimg.cc/zvXkygsm/the-last-of-us-2-3840x2160-17336.jpg',
    category: 'cloud',
    size: '60 GB',
    description: 'Kutana na Joel akipambana na Majeshi na Serikali kumlinda mtoto wake ambaye Damu yake ni Kinga ya Pandemic disease ambayo imekuwa ikimaliza watu siku hadi siku',
    keyLink: '#',
    gameLink: '#',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.0',
    ram: '16GB+',
    requirements: ['Android 10+', 'RAM 4GB+']
  },
  {
    id: 'gta-san-andreas',
    name: 'GTA SAN ANDREAS',
    image: 'https://i.postimg.cc/MTTDLQWZ/Picsart-25-12-17-17-44-40-709.jpg',
    category: 'android',
    size: '3.7 GB',
    description: 'kitana na CJ, katika ulimwengu wa mitaa na Gang za wahuni. Hapa ndipo unapojifunza sheria za mtaa na kujenga jina lako.',
    keyLink: '#',
    gameLink: 'https://gta-san-andreas.latestmodapks.com/',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.0',
    ram: '2GB+',
    requirements: ['Windows 7+', 'RAM 2GB+']
  },
  {
    id: 'winds-meet',
    name: 'WINDS MEET',
    image: 'https://i.postimg.cc/ZR9LmhtM/Picsart-25-12-19-13-14-32-260.jpg',
    category: 'android',
    size: 'Cloud',
    description: 'Kutana na dada anaitwa Cintra  ambae anapewa Mission kutokomeza Uhalifu na Uovu katika Temple za Wajapani ambapo Panga na Bunduki zinalia mwanzo mwisho hakuna kupoa na kila Misheni vinaibuka vikwazo vipya kiufupi hii game ni kali, Graphics ya Hii game ni 4K',
    keyLink: '#',
    gameLink: 'https://www.mediafire.com/file_premium/sm562lgp19jfzpc/base%25282%2529.7z/file',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'Cloud',
    ram: 'Any',
    requirements: ['Android 9+', 'RAM 4GB+']
  },
  {
    id: 'last-of-us',
    name: 'LAST OF US',
    image: 'https://i.postimg.cc/jdvS6JGK/IMG-20251217-213632-071.jpg',
    category: 'cloud',
    size: 'cloud',
    description: 'Shinda katika ulimwengu uliovamiwa na maambukizi, ukijenga mahusiano na kupigania maisha yako. Hapa kila uamuzi una uzito wa maisha yako.',
    keyLink: '#',
    gameLink: '#',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'Cloud',
    ram: 'Any',
    requirements: ['Android 10+', 'RAM 6GB+']
  },
  {
    id: 'god-of-war',
    name: 'GOD OF WAR',
    image: 'https://i.postimg.cc/QdNZhxdj/3389027.jpg',
    category: 'cloud',
    size: '3.5 GB',
    description: 'Pambana na miungu na viumbe vya kitambo, ukichukua nguvu kutoka kwa maadui wako. Hapa hata majitu huinama mbele yako!',
    keyLink: '#',
    gameLink: '#',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.8',
    ram: '6GB+',
    requirements: ['Android 10+', 'RAM 6GB+']
  },
  {
    id: 'god-of-war-ii',
    name: 'GOD OF WAR II',
    image: 'https://i.postimg.cc/zXt0HJkz/Picsart-25-12-17-01-24-30-348.jpg',
    category: 'android',
    size: '3.8 GB',
    description: 'Endelea safari yako ya kisasi, ukipambana na maadui wakubwa zaidi na kuvunja milango ya mbinguni. Hapa hata miungu huogopa nguvu zako.',
    keyLink: '#',
    gameLink: '#',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v2.1',
    ram: '6GB+',
    requirements: ['Android 10+', 'RAM 6GB+']
  },
  {
    id: 'gta-v-cloud',
    name: 'GTA V CLOUD',
    image: 'https://i.postimg.cc/LXvgnsMs/Picsart-25-12-17-02-13-37-058.jpg',
    category: 'cloud',
    size: 'Cloud',
    description: 'Jishinde katika mji mzima wa Los Santos bila kuhangaika na kushusha faili. Hapa furaha yako iko kwenye wingu, tayari kukubali!',
    keyLink: '#',
    gameLink: '#',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'Cloud',
    ram: 'Any',
    requirements: ['Android 10+', 'RAM 6GB+']
  },
  {
    id: 'watch-dogs',
    name: 'WATCH DOGS',
    image: 'https://i.postimg.cc/DypvmcFc/Picsart-25-12-19-19-28-15-267.jpg',
    category: 'android',
    size: '4.1 GB',
    description: 'Hii game ni kali sana na pia kama wewe unapenda Maudhui ya Tech hapa ndio kwenyewe mamen,hawa jamaa ni wanahack kila kitu kilichopo mbele yao',
    keyLink: 'https://prodkeys.net/cemu-keys/',
    gameLink: 'https://romspure.cc/roms/nintendo-wii-u/watch-dogs/',
    cemuLink: 'https://cemu.en.uptodown.com/android',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.5',
    ram: '6GB+',
    requirements: ['Android 10+', 'RAM 6GB+']
  },
  {
    id: 'red-dead-redemption',
    name: 'RED DEAD REDEMPTION',
    image: 'https://i.postimg.cc/4dFmfRwg/IMG-20251217-213320-872.jpg',
    category: 'android',
    size: '5.2 GB',
    description: 'Panda farasi wako na tembea katika nyanda za magharibi, ukikabiliana na wahalifu na wanyama pori. Hapa kila Mission kuna Vikwazo vipya pia Game hii ina Quality kali sana .',
    keyLink: '#',
    gameLink: 'https://www.mediafire.com/file/oyvqrgfikuirhb9/Red_Dead_Redemption_NETFLIX_v1.50.60293175_Unlocked_lore.apks/file',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.3',
    ram: '8GB+',
    requirements: ['Android 11+', 'RAM 8GB+']
  },
  {
    id: 'watch-dogs-ii',
    name: 'WATCH DOGS II',
    image: 'https://i.postimg.cc/C104GkVw/Picsart-25-12-17-21-31-05-747.jpg',
    category: 'android',
    size: '4.5 GB',
    description: 'Hii game ni kali sana na pia kama wewe unapenda Maudhui ya Tech hapa ndio kwenyewe mamen,hawa jamaa ni wanahack kila kitu kilichopo mbele yao',
    keyLink: '#',
    gameLink: '#',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v2.0',
    ram: '6GB+',
    requirements: ['Android 11+', 'RAM 6GB+']
  },
  {
    id: 'mortal-kombat',
    name: 'MORTAL KOMBAT',
    image: 'https://i.postimg.cc/Vs3HKstw/462514-3000x1688-desktop-hd-scorpion-mortal-kombat-wallpapers.jpg',
    category: 'android',
    size: '3.3 GB',
    description: 'Pigana hadi mwisho na kumaliza maadui wako kwa mikono mitupu, na kila mpinzani ana uwezo wake.Hapa hata kutoka damu ni sehemu ya mchezo!',
    keyLink: '#',
    gameLink: '#',
    yuzuLink: 'https://yuzuemulators.com/',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.7',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+']
  },
  {
    id: 'uncharted-4',
    name: 'UNCHARTED 4',
    image: 'https://i.postimg.cc/rFRn6vLj/40632.jpg',
    category: 'android',
    size: '4.8 GB',
    description: 'Fuata ramani ya siri na kufikia visiwa vilivyofichwa, ukishindana na maadui ambao wako na wengine wakitumia nguvu kubwa  kukuzuia Hapa lazima ujifunze kuwa Survival',
    keyLink: '#',
    gameLink: '#',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.4',
    ram: '6GB+',
    requirements: ['Android 10+', 'RAM 6GB+']
  },
  {
    id: 'warfame',
    name: 'WARFAME',
    image: 'https://i.postimg.cc/sDMhxJvp/Picsart-25-12-19-14-18-32-813.jpg',
    category: 'android',
    size: '4.0 GB',
    description: 'Hapa wewe ni Ninja ila Huna Nguvu za Kiwango cha Juu ila unakumbana na amaadui wenye Skills za hali ya juu na wanaubonda sana,kila hatua unazidi kuwa Bora kuliko wao.',
    keyLink: '#',
    gameLink: 'https://www.mediafire.com/file_premium/glnl33gsp2042gs/Warframe_Mobile_%25289_Dic%2529.apks/file',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v3.2',
    ram: '4GB+',
    requirements: ['Android 10+', 'RAM 4GB+']
  },
  {
    id: 'mortal-kombat-11',
    name: 'MORTAL KOMBAT 11',
    image: 'https://i.postimg.cc/L4PdSJSM/Picsart-25-12-19-14-27-06-674.jpg',
    category: 'android',
    size: '4.5 GB',
    description: 'Pigana hadi mwisho na kumaliza maadui wako kwa mikono mitupu, na kila mpinzani ana uwezo wake.Hapa hata kutoka damu ni sehemu ya mchezo!',
    keyLink: 'https://prodkeys.net/yuzu-prod-keys-n25/',
    gameLink: 'https://www.mediafire.com/file/mxri4xk4w8jg5ja/Mortal+Kombat+11+(USA,+Europe)+(En,Fr,De,Es,It,Pt).xci/file',
    yuzuLink: '#',
    gamehubLink: '#',
    driverLink: 'https://github.com/K11MCH1/AdrenoToolsDrivers/releases/',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: 'https://github.com/THZoria/NX_Firmware/releases',
    videoLink: '#',
    version: 'null', //version: 'v2.1',
    ram: '6GB+',
    requirements: ['Android 11+', 'RAM 6GB+']
  },
  {
    id: 'life-is-strange',
    name: 'LIFE IS STRANGE',
    image: 'https://i.postimg.cc/Fz9vBv65/Picsart-25-12-19-15-08-24-123.jpg',
    category: 'android',
    size: '2.5 GB',
    description: 'Game hii ni kali sana na ina story mode nzuri na ina Graphics kali sana, kila Mission vinaibuka vikwazo vipya kiufupi hii game ni kali',
    keyLink: '#',
    gameLink: 'https://apkaward.com/life-is-strange',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.0',
    ram: '3GB+',
    requirements: ['Android 8+', 'RAM 3GB+']
  },
  {
    id: 'bully',
    name: 'BULLY',
    image: 'https://i.postimg.cc/JnS6s5bc/Picsart-25-12-19-15-13-28-237.jpg',
    category: 'android',
    size: '2.2 GB',
    description: 'Hapa utaishi maisha ya Ubabe ya Shuleni huku ukikumbana na vikwazo vya wazazi na walimu kila mara, yani kiufupi unakuwa mbabe kwa wanafunzi na Walimu',
    keyLink: '#',
    gameLink: 'https://www.mediafire.com/file_premium/hphe263g9meclue/Bully-v1.4.299-60FPS-full-apkvision.apk/file',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.0',
    ram: '3GB+',
    requirements: ['Android 7+', 'RAM 3GB+']
  },
  {
    id: 'little-nightmare',
    name: 'LITTLE NIGHTMARE',
    image: 'https://i.postimg.cc/9Mf5dbwm/file-000000005b8071f896e71d3d0596605b.png',
    category: 'android',
    size: '2.8 GB',
    description: 'Kimbia kutoka kwenye ndoto za kutisha, ukijaribu kupata njia ya kutoka katika ulimwengu wa hofu. Hapa hata kivuli chako kinaweza kukudhuru.',
    keyLink: '#',
    gameLink: 'https://www.mediafire.com/file/25qac2mpnrzx23g/little-nightmaressss_144-.apk/file',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.3',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+']
  },
  {
    id: 'god-hand',
    name: 'GOD HAND',
    image: 'https://i.postimg.cc/ryCZVxDN/Picsart-25-12-19-15-28-02-938.jpg',
    category: 'android',
    size: '1.5 GB',
    description: 'Piga maadui wako kwa kasi ya umeme, ukijenga mchanganyiko wa vibao vya kuvunja mifupa. Hapa Siraha kubwa ni Skills za Kupigana ulizonazo na mkono wako! wenye Nguvu za Ajabu',
    keyLink: '#',
    gameLink: 'https://romsfun.com/roms/playstation-2/god-hand.html',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.0',
    ram: '2GB+',
    requirements: ['Android 7+', 'RAM 2GB+']
  },
  {
    id: 'downhill',
    name: 'DOWNHILL',
    image: 'https://i.postimg.cc/c13Cr7YD/Picsart-25-12-19-15-58-39-551.jpg',
    category: 'android',
    size: '1.2 GB',
    description: 'Panda baiskeli yako na kuteremka mlima kwa kasi ya Katarama & kimbunga, ukiepuka vikwazo vyote,atumia njia zote ili ushinde kila round ukishindana na wapinzani wenye uwezo mkubwa wa kukimbiza baiskeli kwa kasi ya sgr',
    keyLink: '#',
    gameLink: 'https://romsfun.com/roms/playstation-2/downhill-domination.html',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: 'https://aethersx2.net/download-aethersx2-for-android/',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.1',
    ram: '2GB+',
    requirements: ['Android 7+', 'RAM 2GB+']
  },
  {
    id: 'jade-empire',
    name: 'JADE EMPIRE',
    image: 'https://i.postimg.cc/yNSxc05M/Picsart-25-12-19-16-08-18-545.jpg',
    category: 'android',
    size: '2.0 GB',
    description: 'Jifunze sanaa za vita za kale, ukishindana na vikwazo kuweza kujenga hadithi yako ya kifalme.',
    keyLink: '#',
    gameLink: 'https://www.mediafire.com/file/nj0o0eksdrmtkkm/JadeEmpire_1.0.0_MOD_HF3_sign.apk/file?fbclid=IwdGRjcAORv81jbGNrA5G_x2V4dG4DYWVtAjExAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHtP9BX1dNeDXOoeC4lfk7ma3F2IGtH22g6VJLKQLHeEPreTTx-ppvrH6KAnA_aem_QQDnWHqVshfgId_Jpedhfw',
    yuzuLink: '#',
    obbLink: 'https://www.mediafire.com/file/nre0u47x83a8hfg/techj5gamesjeseobb.rar/file?fbclid=IwdGRjcAORv-9jbGNrA5G_6mV4dG4DYWVtAjExAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHiALuXTf12Agx9udtUdWcnPy5N7ofXFL0DBzhIQ1spbpY_IJSgn8Iwd5Rsjc_aem_HXhUkMzj0UE9Biegqr8ePw',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.0',
    ram: '3GB+',
    requirements: ['Android 8+', 'RAM 3GB+']
  },
  {
    id: 'pascal-wager',
    name: 'PASCAL WAGER',
    image: 'https://i.postimg.cc/tCkGv7Wn/Picsart-25-12-19-16-22-05-189.jpg',
    category: 'android',
    size: '3.5 GB',
    description: 'Pigana na viumbe vya giza katika ulimwengu uliojaa mafumbo, ukijaribu kupata ukweli wa mazingira yako. Hapa kila kivuli kina siri yake ya kutisha.',
    keyLink: '#',
    gameLink: 'https://5play.org/en/11915-pascals-wager.html',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.5',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+']
  },
  {
    id: 'pc-games',
    name: 'PC GAMES',
    image: '#',
    category: 'android',
    size: '3.5 GB',
    description: 'Jikumbatie ulimwengu wa michezo ya kompyuta bora, ambapo kila mchezo una hadithi yake ya kipekee. Hapa ndipo unapopata furaha isiyo na mwisho!',
    keyLink: '#',
    gameLink: 'https://5play.org/en/11915-pascals-wager.html',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.5',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+']
  },
  {
    id: 'bus-simulator',
    name: 'BUS SIMULATOR VIP',
    image: 'https://i.postimg.cc/CLFZRTrj/IMG-20251221-WA0044.jpg',
    category: 'android',
    size: '3.5 GB',
    description: 'Endesha basi yako Ukiwa kama Dereva wa Mabasi ya mkoa,game hii ni kali sana na ina Ramani ya Barabara za Tanzania huku ukipishana na mabasi ya kampuni za Tanzania, Shindana na Madereva wenzako kukimbizana njiani kufikisha abiria Terminal',
    keyLink: '#',
    gameLink: '',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.5',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+']
  },
  {
    id: 'jetli',
    name: 'JET LI:RISE TO HONOR',
    image: 'https://i.postimg.cc/hjXGLKWd/Picsart-25-12-22-01-03-42-857.jpg',
    category: 'android',
    size: '3.5 GB',
    description: 'Jikumbatie sanaa za kungfu na kupambana na wahalifu, ukijenga hadithi yako ya ushujaa. Hapa kila ngumi ni hatua kuelekea heshima.',
    keyLink: '#',
    gameLink: '',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.5',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+']
  },
  {
    id: 'san-andrea',
    name: 'gta san Andreas Cloudgame',
    image: 'https://i.postimg.cc/BQ4BCzbn/Picsart-25-12-22-01-26-10-099.jpg',
    category: 'android',
    size: '3.5 GB',
    description: 'Furahia ulimwengu wa mitaa wa San Andreas huku ukizungukwa na magenge ya Wahuni na kukabiriana nao, huku ukicheza mission mbalimbali na vikwazo vingi ukiwa kama CJ',
    keyLink: '#',
    gameLink: '',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.5',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+']
  },
  {
    id: 'fcgame',
    name: 'FC 26',
    image: 'https://i.postimg.cc/MK71MmYx/22537635.jpg',
    category: 'android',
    size: '3.5 GB',
    description: 'Game hii ni kali sana na ina graphics za kiwango cha juu, Cheza Mpira kwenye Peach za kali bila kiwa na data..kila kitu Offline!',
    keyLink: '#',
    gameLink: '',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.5',
    ram: '4GB+',
    requirements: ['Android 12+', 'RAM 8GB+']
  },
  {
    id: 'vicecity',
    name: 'Gta Vice City',
    image: 'https://i.postimg.cc/SQDJw1VN/Picsart-25-12-22-01-29-42-297.jpg',
    category: 'android',
    size: '3.5 GB',
    description: 'Rudi kwenye jiji la Vice City lenye rangi kali na muziki mzuri, ukijenga utawala wako wa kihalifu. Hapa kila usiku una mwamko mpya.',
    keyLink: '#',
    gameLink: '',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.5',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+']
  },
  {
    id: 'cyberpunk',
    name: 'CYBERPUNK',
    image: 'https://i.postimg.cc/0ymmRdzq/wp6736126-cyberpunk-4k-wallpapers.jpg',
    category: 'cloud',
    size: '3.5 GB',
    description: 'Zama katika jiji la baadaye lenye teknolojia ya hali ya juu, ukichagua njia yako ya kijeshi au mwonekano. Hapa kila chaguo linaweza kubadilisha hatima yako.',
    keyLink: '#',
    gameLink: '',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.5',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+']
  },
  {
    id: 'darksouls',
    name: 'DARK SOULS',
    image: 'https://i.postimg.cc/5N4ktyBc/Dark-Souls-Game-Warrior-4k-Wallpaper-In-High-Quality.jpg',
    category: 'android',
    size: '3.5 GB',
    description: 'Pambana na viumbe vya giza na kubeba mzigo wa hatima yako, ukijaribu kupata mwanga katika ulimwengu wa giza. Hapa kila kufa ni somo jipya.',
    keyLink: '#',
    gameLink: '',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.5',
    ram: '4GB+',
    requirements: ['Android 10+', 'RAM 4GB+']
  },
  {
    id: 'silent',
    name: 'SILENT HILL',
    image: 'https://i.postimg.cc/jj1LDDw1/Picsart-25-12-22-01-46-51-224.jpg',
    category: 'android',
    size: '3.5 GB',
    description: 'Penya ndani ya mji wa hofu na kutafuta ukweli wa siri zake, ukikabiliana na maovu yasiyoelezeka. Hapa hata ukimya unaweza kuwa wa kutisha.',
    keyLink: '#',
    gameLink: '',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.5',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+']
  },
  {
    id: 'fifa23',
    name: 'FIFA 23',
    image: 'https://i.postimg.cc/Bn6Qq3SV/Picsart-25-12-22-02-02-01-242.jpg',
    category: 'cloud',
    size: '3.5 GB',
    description: 'Cheza kwenye uwanja wa soka wa ulimwengu, ukifurahia michezo ya kisasa na timu bora.Game hii ni Offline fifa ya 2023',
    keyLink: '#',
    gameLink: '',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.5',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+']
  },
  {
    id: 'resident',
    name: 'RESIDENT EVIL II',
    image: 'https://i.postimg.cc/Bb4PpzTK/wp3815686-resident-evil-2-remake-wallpapers.jpg',
    category: 'android',
    size: '3.5 GB',
    description: 'Jiokoe kutoka kwenye jiji lililovamiwa na maambukizi, ukijaribu kupata njia ya kutoka na kuvunja siri za hatari. Graphics za hili game ni kali sana HD.',
    keyLink: '#',
    gameLink: '',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.5',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+']
  },
  {
    id: 'ninja',
    name: 'NINJA GAIDEN',
    image: 'https://i.postimg.cc/nLxxXtZ6/Picsart-25-12-22-02-20-19-675.jpg',
    category: 'android',
    size: '3.5 GB',
    description: 'Hapa wewe ni Ninja na unakumbana na amaadui wenye Skills za hali ya juu na wanaubonda sana,kila hatua unazidi kuwa Bora kuliko wao.',
    keyLink: '#',
    gameLink: '',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.5',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+']
  },
  {
    id: 'residenteviil',
    name: 'RESIDENT EVIL 4',
    image: 'https://i.postimg.cc/qB12Qk55/Picsart-25-12-22-02-30-43-106.jpg',
    category: 'android',
    size: '3.5 GB',
    description: 'Peleka misheni ya kuokoa katika kijiji cha hatari, ukikabiliana na viumbe vya kutisha na kuvunja mfumo wa uovu. Hapa kila risasi ina thamani yake.',
    keyLink: '#',
    gameLink: '',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.5',
    ram: '4GB+',
    requirements: ['Android 12+', 'RAM 6GB+']
  },
  {
    id: 'residentevil',
    name: 'RESIDENT EVIL 4',
    image: 'https://i.postimg.cc/mgmxg1Xw/wp12116675-resident-evil-4-remake-wallpapers.png',
    category: 'android',
    size: '3.5 GB',
    description: 'Endelea na misheni yako ya kuokoa katika ulimwengu uliojaa hatari, ukijaribu kupata dawa ya maambukizi. Hapa kila kona inaficha hatari mpya.',
    keyLink: '#',
    gameLink: '',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.5',
    ram: '4GB+',
    requirements: ['Android 10+', 'RAM 6GB+']
  },
  {
    id: 'sniperelite',
    name: 'SNIPER ELITE 4',
    image: 'https://i.postimg.cc/WzNCV2GC/Picsart-25-12-22-02-44-26-438.jpg',
    category: 'android',
    size: '3.5 GB',
    description: 'Hapa wewe ni Mwanajeshi kitengo cha Sniper unashoot maadui wako kwa umbali mrefu ukijaribu kukamilisha misheni yako ya kijeshi. maadui zako watakuita jina "ghost" sababu hujawahi kukosea ni mwendo wa za kichwa tu',
    keyLink: '#',
    gameLink: '',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.5',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+']
  },
  {
    id: 'jistcause4',
    name: 'JUSTCAUSE 4',
    image: 'https://i.postimg.cc/zfMT5pnm/Picsart-25-12-22-02-54-43-766.jpg',
    category: 'android',
    size: '3.5 GB',
    description: 'Hii game ina graphics kali sana pia imejaa mkono mwanzo mwisho hakuna kupoa..mzee wa kuruka juu ya helicopter bila parachute',
    keyLink: '#',
    gameLink: '',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.5',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+']
  },
  {
    id: 'sifu',
    name: 'SIFU',
    image: 'https://i.postimg.cc/66hTfYyQ/Picsart-25-12-22-02-59-36-521.jpg',
    category: 'android',
    size: '3.5 GB',
    description: 'Jifunze sanaa za kungfu na kupambana na maadui, ukijaribu kupata haki kwa mikono yako mwenyewe.',
    keyLink: '#',
    gameLink: '',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.5',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+']
  },
  {
    id: 'combatzone',
    name: 'COMBAT ZONE',
    image: 'https://i.postimg.cc/66hTfYyQ/Picsart-25-12-22-02-59-36-521.jpg',
    category: 'android',
    size: '3.5 GB',
    description: 'Hapa ukiwa mwanajeshi unapokea Mission ya kwenda kutumikia taifa lako ukiwa na wenzako mnakiwasha kuteketeza adui waliokuwa mbele yenu.',
    keyLink: '#',
    gameLink: '',
    yuzuLink: '#',
    gamehubLink: '#',
    edenLink: '#',
    citronLink: '#',
    emulatorLink: '',
    graphicsLink: '',
    firmwareLink: '#',
    videoLink: '#',
    version: 'null', //version: 'v1.5',
    ram: '4GB+',
    requirements: ['Android 9+', 'RAM 4GB+']
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
  
  // Update modal content
  document.getElementById('modalGameImage').src = game.image;
  document.getElementById('modalGameName').textContent = game.name;
  document.getElementById('modalGameDescription').textContent = game.description;
  document.getElementById('modalFileSize').textContent = game.size;
  document.getElementById('modalVersion').textContent = game.version;
  document.getElementById('modalRam').textContent = game.ram;
  document.getElementById('modalCategory').textContent = game.category.toUpperCase();
  
  // Clear and create buttons
  const buttonsContainer = document.getElementById('modalButtons');
  buttonsContainer.innerHTML = '';
  
  // VIDEO BUTTON (FIXED)
  if (game.videoLink && game.videoLink !== '#') {
    const videoBtn = document.createElement('button');
    videoBtn.className = 'download-btn btn-purple';
    videoBtn.innerHTML = '🎬 TAZAMA MAELEKEZO';
    videoBtn.onclick = () => {
      if (game.videoLink && game.videoLink !== '#') {
        window.open(game.videoLink, '_blank');
      } else {
        alert(`Hakuna video ya ${game.name} inapatikana.`);
      }
    };
    buttonsContainer.appendChild(videoBtn);
  }
  
  // DOWNLOAD APP BUTTON
  if (game.appLink && game.appLink !== '#') {
    const appBtn = document.createElement('button');
    appBtn.className = 'download-btn btn-blue';
    appBtn.innerHTML = '📱 DOWNLOAD APP';
    appBtn.onclick = () => window.open(game.appLink, '_blank');
    buttonsContainer.appendChild(appBtn);
  }
  
  // GAME DATA BUTTON
  if (game.gameLink && game.gameLink !== '#') {
    const gameBtn = document.createElement('button');
    gameBtn.className = 'download-btn btn-orange';
    gameBtn.innerHTML = '🎮 Download Game ';
    gameBtn.onclick = () => window.open(game.gameLink, '_blank');
    buttonsContainer.appendChild(gameBtn);
  }
  
  // Optional buttons (only show if they exist)
  const optionalButtons = [
    { key: 'driverLink', text: ' Driver', color: 'btn-green' },
    { key: 'saveDataLink', text: 'Save Data', color: 'btn-green' },
    { key: 'emulatorLink', text: 'Emulator', color: 'btn-gray' },
    { key: 'keyLink', text: 'KEY', color: 'btn-green' },
    { key: 'yuzuLink', text: 'Yuzu Emulator', color: 'btn-green' },
    { key: 'edenLink', text: 'Eden Emulator', color: 'btn-green' },
    { key: 'citronLink', text: 'Citron Emulator', color: 'btn-green' },
    { key: 'gamehubLink', text: 'GameHub Emulator', color: 'btn-green' },
    { key: 'saveDataLink', text: 'Save Data', color: 'btn-green' },
    { key: 'winlatorLink', text: 'WinLator Emulator', color: 'btn-green' },
    { key: 'cemuLink', text: 'Cemu Emulator', color: 'btn-green' },
    { key: 'obbLink', text: 'Download Obb', color: 'btn-green' },
    { key: 'firmwareLink', text: 'Firmware', color: 'btn-green' },
    { key: 'graphicsLink', text: 'Graphics', color: 'btn-blue' }
  ];
  
  optionalButtons.forEach(btn => {
    if (game[btn.key] && game[btn.key] !== '#') {
      const button = document.createElement('button');
      button.className = `download-btn ${btn.color}`;
      button.textContent = btn.text;
      button.onclick = () => window.open(game[btn.key], '_blank');
      buttonsContainer.appendChild(button);
    }
  });
  
  // Show modal
  document.getElementById('gameModal').classList.remove('hidden');
}

function closeGameModal() {
  document.getElementById('gameModal').classList.add('hidden');
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
    "Preparing Cybergames Interface...",
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
