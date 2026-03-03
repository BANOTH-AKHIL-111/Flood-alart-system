# 🌊 FloodGuard Kerala  
Smart Flood Monitoring & Alert Simulation System  
FloodGuard Kerala is a responsive web-based flood monitoring and alert simulation application designed to model real-time water level changes across Kerala’s districts. The system supports multi-level location selection (District → Mandal → Village) and dynamically generates risk alerts with visual indicators, audio notifications, and interactive GIS mapping.  

---

### 🚀 Features  

**📍 3-Level Location Selection** * District → Mandal → Village hierarchy across 14 Kerala districts.  

**🌊 Real-Time Water Level Simulation** * Dynamic water level generation with automated risk classification:  
* Safe  
* Warning  
* Danger  

**🔔 Automated Alert System** * Dynamic alert log  
* Visual risk indicators  
* Audio warning notifications  
* Emergency evacuation alerts  

**🗺 Interactive GIS Map** * Zoomable Kerala state map (Leaflet.js)  
* District auto-focus  
* Marker updates based on selection  

**🏠 Safe Shelter Recommendations** * Displays nearby safe locations for evacuation support.  

**📱 Responsive Design** * Optimized for desktop, tablet, and mobile devices.  

**🔐 Phone-Based Login Simulation** * Simple authentication layer for controlled access.  

---

### 🛠 Tech Stack  

* **Frontend:** HTML5, CSS3 (Grid + Responsive Design)  
* **Logic:** JavaScript (Vanilla JS)  
* **Mapping:** Leaflet.js + OpenStreetMap  
* **Deployment:** Vercel  
* **Version Control:** Git & GitHub  

---

### ⚙️ How It Works  
1. **User Login:** User logs in with a registered phone number.  
2. **Location Selection:** Selects a District → Mandal → Village.  
3. **Simulation Engine:** Simulation engine generates dynamic water levels.  
4. **Risk Classification:** Risk classification is automatically applied:  
   * **Below 150 cm** → Safe  
   * **150–399 cm** → Warning  
   * **400+ cm** → Danger  
5. **System Triggers:** * Visual indicator update  
   * Audio alert  
   * Log entry  
   * (Optional) SMS placeholder integration
  
### 🔮 Future Improvements  
* **Real-time weather API integration** * **SMS integration** (Twilio / Fast2SMS)  
* **Heatmap-based flood visualization** * **Admin dashboard** for district control  
* **Backend integration** (Node.js + MongoDB)  
* **Historical data analytics** ---

### 🌍 Live Demo  
**Deployed on:** Vercel  
🔗 **[https://flood-alart-system.vercel.app/]** ```

