# 🎓 BEU Shop — Green Campus Marketplace

An eco-friendly peer-to-peer campus marketplace designed exclusively for students across all **38 Bihar Engineering University (BEU)** constituent and affiliated engineering colleges.

BEU Shop connects outgoing seniors with incoming juniors to trade, sell, or donate engineering essentials (drafters, lab aprons, reference books, calculators, bicycles, and coolers) directly inside their respective campus and hostel premises.

---

## ✨ Features

- **38 Campus Filtering:** Filter listings by individual BEU colleges (e.g., BCE Bhagalpur, MIT Muzaffarpur, GEC Vaishali) to enable direct hand-to-hand transactions without shipping hassles.
- **Giveaway & Resale Tags:** Distinct badges for `🟢 FREE / Giveaway` items and affordable pre-loved tools.
- **Zero In-App Middlemen:** Integrated direct WhatsApp chat linking buyers directly with hostel room numbers/sellers.
- **Modern Responsive UI:** Built with clean typography, soft card elevations, and a mobile-first responsive layout powered by Tailwind CSS and Lucide Icons.
- **Serverless Architecture:** Real-time data storage powered by Firebase Cloud Firestore with zero maintenance servers.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, Modern JavaScript (ES Modules)
- **Styling:** Tailwind CSS (CDN), Google Fonts (Plus Jakarta Sans)
- **Icons:** Lucide Icons
- **Backend / Database:** Firebase Cloud Firestore (NoSQL)
- **Deployment:** GitHub Pages

---

## 📁 Project Structure

```text
beu-shop/
├── index.html              # Homepage with dynamic feed & college filter
├── post-item.html          # Form to list items for sell or free donation
├── manifest.json           # Web app manifest for PWA installation
├── README.md               # Project documentation
└── assets/
    ├── css/
    │   └── style.css       # Custom styles and overrides
    ├── js/
    │   ├── colleges.js     # Master array of 38 BEU Engineering Colleges
    │   ├── firebase-config.js # Firebase modular SDK initialization
    │   ├── app.js          # Feed loading & college filter logic
    │   └── post.js         # Item validation & Firestore insertion
    └── icons/              # App launcher icons and logos
