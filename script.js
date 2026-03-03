// --- Phone Login Users ---
// --- Phone Login Users ---
const users = [{ phone: "6309808435" }];

// --- Full Kerala District → Mandal → Village Data ---
const data = {
  /* KEEP YOUR FULL DATA OBJECT HERE EXACTLY AS YOU SENT */

  "Thiruvananthapuram": {
    "Thiruvananthapuram": ["Pettah", "Pangode", "Kudappanakunnu", "Vellanad", "Pallichal"],
    "Neyyattinkara": ["Balaramapuram", "Vizhinjam", "Vellarada", "Aryanad"],
    "Nedumangad": ["Vithura", "Aruvikkara", "Kulathummal", "Perumkadavila"],
    "Kattakada": ["Vembayam", "Anad", "Pozhiyoor"],
    "Varkala": ["Edava", "Chemmaruthi", "Cherunniyoor"]
  },
  "Kollam": {
    "Kollam": ["Thevally", "Chavara", "Sakthikulangara", "Mayyanad"],
    "Kottarakkara": ["Ezhukone", "Odanavattom", "Kunnathur"],
    "Punalur": ["Thenmala", "Anchal", "Aryankavu"],
    "Karunagappally": ["Oachira", "Clappana", "Thevalakkara"],
    "Pathanapuram": ["Achenkovil", "Kulakkada", "Kottiyam"]
  },
  "Pathanamthitta": {
    "Adoor": ["Omalloor", "Kadampanad", "Enadimangalam"],
    "Ranni": ["Chittar", "Seethathode", "Achenkovil"],
    "Kozhencherry": ["Mallappally", "Thumpamon", "Kulanada"],
    "Mallappally": ["Kottangal", "Pariyaram", "Perumpetty"],
    "Thiruvalla": ["Kaviyoor", "Niranam", "Pulikeezhu"]
  },
  "Alappuzha": {
    "Ambalappuzha": ["Punnapra", "Champakulam", "Kainakary"],
    "Cherthala": ["Thanneermukkam", "Vayalar", "Kanichukulangara"],
    "Mavelikkara": ["Chengannur", "Pandanad", "Thiruvanvandoor"],
    "Chengannur": ["Puliyoor", "Muttar", "Kurattissery"],
    "Kuttanad": ["Neelamperoor", "Veliyanad", "Kainady"]
  },
  "Kottayam": {
    "Vaikom": ["Kumarakom", "Thalayazham", "Vechoor"],
    "Changanassery": ["Nedumkunnam", "Kangazha", "Paippad"],
    "Kanjirappally": ["Manimala", "Koottickal", "Erumeli"],
    "Meenachil": ["Pala", "Bharananganam", "Kaduthuruthy"],
    "Kottayam": ["Perumbaikad", "Aimanam", "Athirampuzha"]
  },
  "Idukki": {
    "Thodupuzha": ["Vannappuram", "Udumbannoor", "Karimannoor"],
    "Udumbanchola": ["Vandanmedu", "Pooppara", "Chinnar"],
    "Devikulam": ["Munnar", "Pallivasal", "Letchmi Estate"],
    "Peerumedu": ["Kumily", "Vandiperiyar", "Chakkupallam"],
    "Idukki": ["Cheruthoni", "Painavu", "Thopramkudy"]
  },
  "Ernakulam": {
    "Aluva": ["Desom", "Paravur", "Edathala", "Perumbavoor"],
    "Kochi": ["Edappally", "Kumbalangi", "Eloor", "Chellanam"],
    "Kanayannur": ["Thrippunithura", "Maradu", "Kureekkad"],
    "Kunnathunad": ["Kalamassery", "Thrikkakara", "Vazhakkala"],
    "Muvattupuzha": ["Kolenchery", "Vazhakulam", "Arakuzha"]
  },
  "Thrissur": {
    "Chavakkad": ["Guruvayur", "Chavakkad Beach", "Kadappuram"],
    "Kodungallur": ["Methala", "Edavilangu", "Eriyad"],
    "Talappilly": ["Wadakkancherry", "Puthur", "Vadanappally"],
    "Thrissur": ["Poonkunnam", "Viyyur", "Kuriachira"],
    "Mukundapuram": ["Irinjalakuda", "Kallettumkara", "Vallachira"]
  },
  "Palakkad": {
    "Ottapalam": ["Lakkidi", "Thirumittacode", "Pattambi"],
    "Mannarkkad": ["Agali", "Karakurissi", "Tannikkodu"],
    "Alathur": ["Koduvayur", "Kozhinjampara", "Eruthempathy"],
    "Chittur": ["Nelliyampathy", "Kollengode", "Nemara"],
    "Palakkad": ["Pudussery", "Muthuthala", "Pirayiri"]
  },
  "Malappuram": {
    "Tirur": ["Thavanur", "Vettom", "Ponmundam"],
    "Ponnani": ["Veliyankode", "Edappal", "Nannambra"],
    "Nilambur": ["Vazhikkadavu", "Chungathara", "Karuvarakundu"],
    "Ernad": ["Manjeri", "Pandikkad", "Angadippuram"],
    "Perinthalmanna": ["Areekode", "Keezhattur", "Melattur"]
  },
  "Kozhikode": {
    "Kozhikode": ["Beypore", "Elathur", "Feroke", "Kunnamangalam"],
    "Koyilandy": ["Vadakara", "Thikkodi", "Azhinjilam"],
    "Vatakara": ["Cheruvannur", "Nadapuram", "Moodadi"],
    "Thamarassery": ["Kodencheri", "Thuneri", "Ulliyeri"],
    "Quilandy": ["Kayanna", "Koothali", "Poovattu"]
  },
  "Wayanad": {
    "Mananthavady": ["Panamaram", "Thariyode", "Pulpally"],
    "Sulthan Bathery": ["Ambalavayal", "Noolpuzha", "Kidanganad"],
    "Vythiri": ["Lakkidi", "Meppadi", "Chundale"],
    "Kalpetta": ["Thavinjal", "Poothadi", "Thondernad"],
    "Meppadi": ["Kottathara", "Vellamunda", "Padinharathara"]
  },
  "Kannur": {
    "Taliparamba": ["Chengalayi", "Keezhallur", "Koodali"],
    "Thalassery": ["Dharmadom", "Muzhappilangad", "Eranholi"],
    "Payyanur": ["Ezhome", "Perumba", "Ramanthali"],
    "Iritty": ["Ayyankunnu", "Payam", "Keezhur"],
    "Kannur": ["Muzhappilangad", "Edakkad", "Elayavoor"]
  },
  "Kasaragod": {
    "Kasaragod": ["Bekal", "Udma", "Kottikkulam"],
    "Manjeshwaram": ["Uppala", "Kumbadaje", "Mogral"],
    "Vellarikundu": ["Bandadka", "Kuttikol", "Pady"],
    "Kanhangad": ["Nileshwar", "Cheruvathur", "Periya"],
    "Hosdurg": ["Pallikkara", "Kayyur", "Kunjathur"]
  }
};



let simInterval = null;
let currentLevel = 0;

// --- Phone Number Login Logic ---
function login() {
  const phone = document.getElementById("phone").value.trim();
  const error = document.getElementById("loginError");

  const user = users.find(u => u.phone === phone);

  if (user) {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
    initializeDistricts();
  } else {
    error.textContent = "Invalid phone number";
  }
}

// --- Location Data Logic ---
function initializeDistricts() {
  const districtSelect = document.getElementById("districtSelect");
  districtSelect.innerHTML = '<option value="">Select District</option>';

  for (let district in data) {
    districtSelect.innerHTML += `<option value="${district}">${district}</option>`;
  }
}

function populateMandals() {
  const district = document.getElementById("districtSelect").value;
  const mandalSelect = document.getElementById("mandalSelect");

  mandalSelect.innerHTML = '<option value="">Select Mandal</option>';
  document.getElementById("villageSelect").innerHTML = '<option value="">Select Village</option>';

  if (district && data[district]) {
    for (let mandal in data[district]) {
      mandalSelect.innerHTML += `<option value="${mandal}">${mandal}</option>`;
    }
  }

  document.getElementById("breadcrumbDistrict").textContent = district || "-";
  document.getElementById("breadcrumbMandal").textContent = "-";
  document.getElementById("breadcrumbVillage").textContent = "-";
  if (districtCoordinates[district] && map) {
  const coords = districtCoordinates[district];

  map.setView(coords, 10);

  if (marker) {
    map.removeLayer(marker);
  }

  marker = L.marker(coords).addTo(map)
    .bindPopup(`${district} - Flood Monitoring Active`)
    .openPopup();
}
}

function populateVillages() {
  const district = document.getElementById("districtSelect").value;
  const mandal = document.getElementById("mandalSelect").value;
  const villageSelect = document.getElementById("villageSelect");

  villageSelect.innerHTML = '<option value="">Select Village</option>';

  if (district && mandal && data[district][mandal]) {
    for (let village of data[district][mandal]) {
      villageSelect.innerHTML += `<option value="${village}">${village}</option>`;
    }
  }

  document.getElementById("breadcrumbMandal").textContent = mandal || "-";
  document.getElementById("breadcrumbVillage").textContent = "-";
}

function updateBreadcrumbs() {
  const village = document.getElementById("villageSelect").value;
  document.getElementById("breadcrumbVillage").textContent = village || "-";

  if (village && !simInterval) {
    startSimulation();
    const toggleBtn = document.getElementById("simulatorToggleBtn");
    if (toggleBtn) toggleBtn.textContent = "Stop Simulator";
  }
}

const districtCoordinates = {
  "Thiruvananthapuram": [8.5241, 76.9366],
  "Kollam": [8.8932, 76.6141],
  "Pathanamthitta": [9.2648, 76.7870],
  "Alappuzha": [9.4981, 76.3388],
  "Kottayam": [9.5916, 76.5222],
  "Idukki": [9.8497, 76.9710],
  "Ernakulam": [9.9816, 76.2999],
  "Thrissur": [10.5276, 76.2144],
  "Palakkad": [10.7867, 76.6548],
  "Malappuram": [11.0510, 76.0711],
  "Kozhikode": [11.2588, 75.7804],
  "Wayanad": [11.6854, 76.1320],
  "Kannur": [11.8745, 75.3704],
  "Kasaragod": [12.4996, 74.9869]
};

// --- Simulator Logic ---
function startSimulation() {
  const slider = document.getElementById("waterSlider");

  simInterval = setInterval(() => {
    const change = Math.floor(Math.random() * 40) - 15;
    currentLevel = Math.max(0, Math.min(500, currentLevel + change));

    slider.value = currentLevel;
    updateWaterLevel(currentLevel);
  }, 2000);
}

function stopSimulation() {
  clearInterval(simInterval);
  simInterval = null;
}

function toggleSimulation(btn) {
  if (simInterval) {
    stopSimulation();
    btn.textContent = "Start Simulator";
  } else {
    startSimulation();
    btn.textContent = "Stop Simulator";
  }
}

// --- Water Level Monitor ---
function updateWaterLevel(value) {
  const fill = document.getElementById("gaugeFill");
  const statusIndicator = document.getElementById("statusIndicator");
  const alertLog = document.getElementById("alertLog");
  const alertSound = document.getElementById("alertSound");
  const dangerSound = document.getElementById("dangerSound");

  const level = parseInt(value);
  document.getElementById("waterValue").textContent = level;

  fill.style.width = `${(level / 500) * 100}%`;

  let status = "Safe";
  let bg = "#d4edda";
  let color = "#155724";

  if (level >= 400) {
    status = "DANGER! Immediate Evacuation!";
    bg = "#f8d7da";
    color = "#721c24";
    dangerSound.play();
    sendSMSAlert(status, level);
  } else if (level >= 150) {
    status = "WARNING! Rising Water Levels!";
    bg = "#fff3cd";
    color = "#856404";
    alertSound.play();
  }

  // Dynamic Gauge Color
  if (level >= 400) {
    fill.style.background = "linear-gradient(to right, #e74c3c, #c0392b)";
  } else if (level >= 150) {
    fill.style.background = "linear-gradient(to right, #f39c12, #e67e22)";
  } else {
    fill.style.background = "linear-gradient(to right, #27ae60, #2ecc71)";
  }

  statusIndicator.textContent = `Status: ${status}`;
  statusIndicator.style.backgroundColor = bg;
  statusIndicator.style.color = color;

  // Create Alert Log Entry
  const timestamp = new Date().toLocaleTimeString();
  const log = document.createElement("div");
  log.textContent = `[${timestamp}] ${status} at ${level} cm`;

  log.style.background = bg;
  log.style.color = color;

  alertLog.prepend(log);
}

// --- SMS Placeholder ---
function sendSMSAlert(message, level) {
  const selectedPhone = users[0].phone;
  console.log(`Sending SMS to ${selectedPhone}: ${message} | Water level: ${level}cm`);
}

// --- Map Modal Zoom ---
function openMapZoom() {
  const modal = document.getElementById("mapModal");
  const img = document.getElementById("mapZoomed");
  img.src = "https://www.bing.com/images/search?view=detailV2&ccid=EVxEu7N2&id=7DB52A22521C598BC23445867D7A2BB5291D0446&thid=OIP.EVxEu7N2SNtbkBcSw22V2wHaMW&mediaurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.115c44bbb37648db5b901712c36d95db%3Frik%3DRgQdKbUren2GRQ%26riu%3Dhttp%253a%252f%252fwww.mapsofworld.com%252findia%252fkerala%252fkerala.jpg%26ehk%3DbS5cGcbm1A18bVqOMc%252bdqeeVZW5tzKri7kMBCvLKQAU%253d%26risl%3D%26pid%3DImgRaw%26r%3D0&exph=1334&expw=800&q=kerala+map&form=IRPRST&ck=FD21E3DEB595EB94D926B5C2DA80FD64&selectedindex=3&itb=0&cw=1719&ch=786&ajaxhist=0&ajaxserp=0&vt=0&sim=11";
  modal.style.display = "block";
}

function closeMapZoom() {
  document.getElementById("mapModal").style.display = "none";
}

let map;
let marker;

// Initialize Map
function initMap() {
  map = L.map('map').setView([10.8505, 76.2711], 7);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
}

// Call map after login
function login() {
  const phone = document.getElementById("phone").value.trim();
  const error = document.getElementById("loginError");

  const user = users.find(u => u.phone === phone);

  if (user) {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
    initializeDistricts();
    initMap();   // 👈 ADD THIS LINE
  } else {
    error.textContent = "Invalid phone number";
  }
}
