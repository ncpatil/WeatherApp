🌤️ Weather App
A simple and responsive weather application built using **JavaScript**, **HTML**, and **CSS**, powered by the **WeatherAPI**. Users can search for any city and instantly get real-time weather conditions, temperature, location details, and weather icons.

---

🚀 Features
- **City Search** – Search weather by location name  
- **Real-Time Temperature** (°C)  
- **Current Date & Local Time**  
- **Weather Condition & Icon Display**  
- **Fully Responsive UI**  
- **Error Handling** for invalid cities  
- **Fast & Lightweight** app with no page reloads  

---

🧰 Tech Stack
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **WeatherAPI (REST API)**

---

📂 Project Structure
  /Weather-App/
    |index.html
    |style.css
    |script.js
    |assets/

---

⚙️ Setup Instructions

**Clone the repository**
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app

- Add WeatherAPI Key

Replace your API key inside script.js: const response = await fetch(
  `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${target}&aqi=no`
);

- Run locally

Just open index.html in any browser.

---

🧩 How It Works

- Fetches data using fetch() from WeatherAPI
- Parses JSON responses
- Updates UI dynamically with DOM manipulation
- Displays weather icon, condition, and time

---

🚀 Future Enhancements

- 5-day forecast
- Search history
- Dark/Light theme
