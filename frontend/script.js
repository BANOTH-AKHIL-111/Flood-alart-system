// --- Phone Login Users ---
const users = [{ phone: "6309808435" }]; // Add more numbers as needed
// --- Full Kerala District → Mandal → Village Data ---
const data = {
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

  document.getElementById("breadcrumbDistrict").textContent = district;
  document.getElementById("breadcrumbMandal").textContent = "-";
  document.getElementById("breadcrumbVillage").textContent = "-";
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

  document.getElementById("breadcrumbMandal").textContent = mandal;
  document.getElementById("breadcrumbVillage").textContent = "-";
}

function updateBreadcrumbs() {
  const village = document.getElementById("villageSelect").value;
  document.getElementById("breadcrumbVillage").textContent = village;

  if (village && !simInterval) {
    startSimulation();
    const toggleBtn = document.getElementById("simulatorToggleBtn");
    if (toggleBtn) toggleBtn.textContent = "Stop Simulator";
  }
}

// --- Simulator Logic ---
function startSimulation() {
  const slider = document.getElementById("waterSlider");
  simInterval = setInterval(() => {
    const value = Math.floor(Math.random() * 501);
    slider.value = value;
    updateWaterLevel(value);
  }, 3000);
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
  const level = parseInt(value);
  document.getElementById("waterValue").textContent = level;
  fill.style.width = `${(level / 500) * 100}%`;

  const statusIndicator = document.getElementById("statusIndicator");
  const alertLog = document.getElementById("alertLog");
  const alertSound = document.getElementById("alertSound");
  const dangerSound = document.getElementById("dangerSound");

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

  statusIndicator.textContent = `Status: ${status}`;
  statusIndicator.style.backgroundColor = bg;
  statusIndicator.style.color = color;

  const timestamp = new Date().toLocaleTimeString();
  const log = document.createElement("div");
  log.textContent = `[${timestamp}] ${status} at ${level} cm`;
  alertLog.prepend(log);
}

// --- Real SMS Alert Placeholder (Replace with Twilio or Fast2SMS API) ---
function sendSMSAlert(message, level) {
  const selectedPhone = users[0].phone; // Get logged-in phone or loop if multi-user
  console.log(`📩 Sending SMS to ${selectedPhone}: ${message} | Water level: ${level}cm`);

  // Real API example (pseudo):
  // fetch('https://sms-api.com/send', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     to: selectedPhone,
  //     message: `${message} - Water level at ${level} cm`
  //   })
  // });
}

// --- Map Modal Zoom ---
function openMapZoom() {
  const modal = document.getElementById("mapModal");
  const img = document.getElementById("mapZoomed");
  img.src = "https://upload.wikimedia.org/wikipedia/commons/8/88/Kerala_District_map.svg";
  modal.style.display = "block";
}

function closeMapZoom() {
  document.getElementById("mapModal").style.display = "none";
}

