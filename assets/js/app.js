// assets/js/app.js
import { db, collection, getDocs, query, where, orderBy } from "./firebase-config.js";

const productGrid = document.getElementById("productGrid");
const collegeFilter = document.getElementById("collegeFilter");
const itemCount = document.getElementById("itemCount");

// Product list load karne ka function
async function loadItems(selectedCollege = "ALL") {
  if (!productGrid) return;
  
  productGrid.innerHTML = `
    <div class="col-span-full py-12 text-center text-slate-400">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-emerald-500 border-t-transparent mb-2"></div>
      <p class="text-sm">Campus items load ho rahe hain...</p>
    </div>
  `;

  try {
    let q;
    const productsRef = collection(db, "products");

    if (selectedCollege === "ALL") {
      q = query(productsRef, orderBy("createdAt", "desc"));
    } else {
      q = query(productsRef, where("college", "==", selectedCollege));
    }

    const snapshot = await getDocs(q);
    productGrid.innerHTML = "";

    if (snapshot.empty) {
      productGrid.innerHTML = `
        <div class="col-span-full py-12 text-center bg-white rounded-2xl border border-slate-200 p-8">
          <p class="text-slate-500 text-sm">Is college/campus mein abhi koi item listed nahi hai.</p>
          <a href="post-item.html" class="inline-block mt-3 text-xs font-semibold text-emerald-600 hover:underline">
            + Sabse pehle aap post karein!
          </a>
        </div>
      `;
      if (itemCount) itemCount.textContent = "0 Items";
      return;
    }

    if (itemCount) itemCount.textContent = `${snapshot.size} Items Found`;

    snapshot.forEach((docSnap) => {
      const item = docSnap.data();
      const isFree = item.isFree || item.price === 0;
      
      const card = document.createElement("div");
      card.className = "bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between";
      
      card.innerHTML = `
        <div>
          <div class="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100 mb-3">
            <img src="${item.imageUrl || 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=500&q=80'}" 
                 alt="${item.title}" 
                 class="w-full h-full object-cover">
            <span class="absolute top-2 left-2 ${isFree ? 'bg-emerald-600' : 'bg-slate-900'} text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow">
              ${isFree ? 'FREE / Giveaway' : '₹' + item.price}
            </span>
            <span class="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-sm">
              ${item.condition || 'Used'}
            </span>
          </div>

          <h3 class="font-bold text-slate-900 text-base line-clamp-1">${item.title}</h3>
          
          <p class="text-xs text-slate-500 flex items-center gap-1 mt-1">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-slate-400"></i>
            <span class="line-clamp-1">${item.college}</span>
          </p>

          <p class="text-xs text-slate-600 mt-2 line-clamp-2">${item.description || 'Hostel campus handover available.'}</p>
        </div>

        <div class="pt-4 border-t border-slate-100 mt-3 flex items-center justify-between">
          <div>
            <span class="block text-[10px] text-slate-400">Seller</span>
            <span class="text-xs font-semibold text-slate-800">${item.sellerName || 'Senior'}</span>
          </div>
          
          <a href="https://wa.me/91${item.sellerWhatsApp}?text=Hi%20${encodeURIComponent(item.sellerName || '')},%20maine%20BEU%20Shop%20par%20aapka%20item%20'${encodeURIComponent(item.title)}'%20dekha.%20Kya%20yeh%20available%20hai?" 
             target="_blank" 
             class="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-3 py-2 rounded-xl transition">
            <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
            WhatsApp Seller
          </a>
        </div>
      `;

      productGrid.appendChild(card);
    });

    if (window.lucide) {
      lucide.createIcons();
    }

  } catch (error) {
    console.error("Error loading products: ", error);
    productGrid.innerHTML = `
      <div class="col-span-full py-8 text-center text-red-500 text-sm">
        Items load karne mein dikkat aayi. Kripya thodi der baad koshish karein.
      </div>
    `;
  }
}

// College filter change event
if (collegeFilter) {
  collegeFilter.addEventListener("change", (e) => {
    loadItems(e.target.value);
  });
}

// Initial load
loadItems();