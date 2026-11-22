/* ============ بيانات المنيو ============ */
const MENU = {
  burger: [
    { id:'b1', name:'كلاسيك برجر', desc:'لحم مشوي، شيدر، خس، بصل، طماطم، خيار مخلل', image:'b1.jpg', sizes:[{label:'SINGLE',price:100},{label:'DOUBLE',price:140}] },
    { id:'b2', name:'تشيكن برجر', desc:'لحم مشوي، شيدر، خس، بصل، طماطم، خيار مخلل، وصوص بيج تيستي وشيدر', image:'b2.jpg', sizes:[{label:'SINGLE',price:120},{label:'DOUBLE',price:160}] },
    { id:'b3', name:'باربيكيو برجر', desc:'لحم مشوي، بيف مدخن، خس، بصل، خيار مخلل، طماطم، وصوص باربيكيو', image:'b3.jpg', sizes:[{label:'SINGLE',price:110},{label:'DOUBLE',price:150}] },
    { id:'b4', name:'كلاسيك تشيكن', desc:'دجاج مقرمش، خبزة شيدر، خيار، خس', price:100, image:'b4.jpg' },
    { id:'b5', name:'تشيكن كرانشي', desc:'دجاج مقرمش، صوص سويت شيلي، مايونيز هايبيتو، زاكي مدخن', price:110, image:'b5.jpg' },
    { id:'b6', name:'باربيكيو تشيكن', desc:'دجاج مقرمش، صوص باربيكيو، بيف أسود مدخن، خس', price:140, image:'b6.jpg' }
  ],
  pasta: [
    { id:'p1', name:'مكرونة وايت صوص', price:80, image:'p1.jpg' },
    { id:'p2', name:'مكرونة وايت صوص بالفراخ', price:90, image:'p2.jpg' },
    { id:'p3', name:'مكرونة وايت صوص بالفراخ + ميكس تشيز', price:100, image:'p3.jpg' }
  ],
  sides: [
    { id:'s1', name:'باكيت بطاطس صغير', price:20, image:'s1.jpg' },
    { id:'s2', name:'باكيت بطاطس كبير', price:30, image:'s2.jpg' },
    { id:'s3', name:'صوص شيدر', price:25, image:'s3.jpg' },
    { id:'s4', name:'صوص باربيكيو', price:20, image:'s4.jpg' },
    { id:'s5', name:'صوص رانش', price:25, image:'s5.jpg' },
    { id:'s6', name:'صوص تكساس', price:25, image:'s6.jpg' }
  ],
  drinks: [
    { id:'d1', name:'كولا', price:20, image:'d1.jpg' },
    { id:'d2', name:'كولا دايت', price:20, image:'d2.jpg' },
    { id:'d3', name:'مياه صغيرة', price:10, image:'d3.jpg' }
  ],
  pizza: [
    { id:'pz1', name:'بيتزا مارجريتا', image:'pz1.jpg', sizes:[{label:'S',price:80},{label:'M',price:95},{label:'L',price:110}] },
    { id:'pz2', name:'بيتزا ميكس جبن', image:'pz2.jpg', sizes:[{label:'S',price:90},{label:'M',price:105},{label:'L',price:120}] },
    { id:'pz3', name:'بيتزا بانيه', image:'pz3.jpg', sizes:[{label:'S',price:95},{label:'M',price:110},{label:'L',price:125}] },
    { id:'pz4', name:'بيتزا سوسيس', image:'pz4.jpg', sizes:[{label:'S',price:95},{label:'M',price:110},{label:'L',price:125}] },
    { id:'pz5', name:'بيتزا سلامي', image:'pz5.jpg', sizes:[{label:'S',price:105},{label:'M',price:120},{label:'L',price:140}] },
    { id:'pz6', name:'بيتزا فاهيتا', image:'pz6.jpg', sizes:[{label:'S',price:110},{label:'M',price:125},{label:'L',price:145}] },
    { id:'pz7', name:'بيتزا شاورما فراخ', image:'pz7.jpg', sizes:[{label:'S',price:110},{label:'M',price:125},{label:'L',price:145}] },
    { id:'pz8', name:'بيتزا ستريبس', image:'pz8.jpg', sizes:[{label:'S',price:115},{label:'M',price:125},{label:'L',price:145}] },
    { id:'pz9', name:'بيتزا تونة', image:'pz9.jpg', sizes:[{label:'S',price:115},{label:'M',price:135},{label:'L',price:155}] },
    { id:'pz10', name:'بيتزا جمبري', image:'pz10.jpg', sizes:[{label:'S',price:180},{label:'M',price:225},{label:'L',price:250}] },
    { id:'pz11', name:'بيتزا تشيكن رانش', image:'pz11.jpg', sizes:[{label:'S',price:110},{label:'M',price:125},{label:'L',price:150}] },
    { id:'pz12', name:'بيتزا تشيكن باربيكيو', image:'pz12.jpg', sizes:[{label:'S',price:115},{label:'M',price:130},{label:'L',price:150}] },
    { id:'pz13', name:'بيتزا ميكس فراخ', image:'pz13.jpg', sizes:[{label:'S',price:130},{label:'M',price:145},{label:'L',price:160}] },
    { id:'pz14', name:'بيتزا رانشو', desc:'سوسيس + سوريس', image:'pz14.jpg', sizes:[{label:'S',price:140},{label:'M',price:155},{label:'L',price:175}] },
    { id:'pz15', name:'بيتزا دبل تشيكن', desc:'فاهيتا + سوريس', image:'pz15.jpg', sizes:[{label:'S',price:115},{label:'M',price:130},{label:'L',price:145}] },
    { id:'pz16', name:'بيتزا هوت ميكس', desc:'سوسيس + سلامي + ميكس جبن + فلفل حار', image:'pz16.jpg', sizes:[{label:'S',price:125},{label:'M',price:145},{label:'L',price:160}] }
  ],
  crepe: [
    { id:'c1', name:'كريب سوسيس', price:80, image:'c1.jpg' },
    { id:'c2', name:'كريب ميكس فراخ', price:115, image:'c2.jpg' },
    { id:'c3', name:'كريب ميكس لحوم', price:115, image:'c3.jpg' },
    { id:'c4', name:'كريب ميكس جبن', price:80, image:'c4.jpg' },
    { id:'c5', name:'كريب بسطرمة', price:110, image:'c5.jpg' },
    { id:'c6', name:'كريب سلامي', price:110, image:'c6.jpg' },
    { id:'c7', name:'كريب إكسترا', price:130, image:'c7.jpg' },
    { id:'c8', name:'كريب ستريبس', price:100, image:'c8.jpg' },
    { id:'c9', name:'كريب بانيه', price:85, image:'c9.jpg' },
    { id:'c10', name:'كريب زنجر', price:100, image:'c10.jpg' },
    { id:'c11', name:'كريب شاورما فراخ', price:100, image:'c11.jpg' },
    { id:'c12', name:'كريب فاهيتا فراخ', price:100, image:'c12.jpg' },
    { id:'c13', name:'كريب برجر', price:80, image:'c13.jpg' },
    { id:'c14', name:'كريب بطاطس', price:60, image:'c14.jpg' },
    { id:'c15', name:'كريب كرانش', price:150, image:'c15.jpg' },
    { id:'c16', name:'كريب الدجاج', price:80, image:'c16.jpg' }
  ],
  roll: [
    { id:'r1', name:'كريب رول سوسيس', price:90, image:'r1.jpg' },
    { id:'r2', name:'كريب رول ميكس فراخ', price:125, image:'r2.jpg' },
    { id:'r3', name:'كريب رول ميكس لحوم', price:125, image:'r3.jpg' },
    { id:'r4', name:'كريب رول ميكس جبن', price:85, image:'r4.jpg' },
    { id:'r5', name:'كريب رول بسطرمة', price:120, image:'r5.jpg' },
    { id:'r6', name:'كريب رول سلامي', price:120, image:'r6.jpg' },
    { id:'r7', name:'كريب رول ستريبس', price:110, image:'r7.jpg' }
  ]
};

const WHATSAPP_NUMBER = '201037151779';

/* ============ الحالة ============ */
let cart = JSON.parse(localStorage.getItem('crunch_cart') || '[]');
let currentProduct = null;

/* ============ عناصر DOM ============ */
const productsEl = document.getElementById('products');
const cartSidebar = document.getElementById('cartSidebar');
const overlay = document.getElementById('overlay');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const cartCountEl = document.getElementById('cartCount');
const optionsModal = document.getElementById('optionsModal');
const checkoutModal = document.getElementById('checkoutModal');
const tabsEl = document.getElementById('tabs');

/* ============ عرض المنتجات ============ */
function renderProducts(cat){
  productsEl.innerHTML = '';
  MENU[cat].forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    let priceHtml = '';
    if (p.sizes){
      priceHtml = `<div class="price-multi">${p.sizes.map(s=>`<span>${s.label}: ${s.price} ج.</span>`).join('')}</div>`;
    } else {
      priceHtml = `<div class="price">${p.price} <span class="currency">ج.</span></div>`;
    }

    card.innerHTML = `
      <div class="product-img-wrapper">
        <img src="${p.image}" alt="${p.name}" class="product-img" onerror="this.style.display='none'">
      </div>
      <div class="product-content">
        <h3>${p.name}</h3>
        <div class="product-bottom">
          ${priceHtml}
          <button class="add-btn" data-id="${p.id}" data-cat="${cat}">أضف</button>
        </div>
      </div>
    `;
    productsEl.appendChild(card);
  });

  document.querySelectorAll('.add-btn').forEach(btn=>{
    btn.addEventListener('click', ()=> openOptions(btn.dataset.id, btn.dataset.cat));
  });
}

/* ============ التبديل بين الأقسام ============ */
if (tabsEl) {
  tabsEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab')) {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      renderProducts(e.target.dataset.cat);
    }
  });
}

/* ============ فتح خيارات الصنف ============ */
function openOptions(id, cat){
  const product = MENU[cat].find(p=>p.id===id);
  if (!product) return;
  currentProduct = { ...product, category: cat };

  const titleEl = document.getElementById('optionsTitle');
  const bodyEl = document.getElementById('optionsBody');
  titleEl.textContent = product.name;
  
  let contentHtml = '';
  
  if (product.desc) {
    contentHtml += `
      <div class="modal-desc-box">
        <h4>المكونات:</h4>
        <p>${product.desc}</p>
      </div>
    `;
  }

  if (product.sizes){
    contentHtml += `<div class="option-group"><h4>اختر الحجم</h4>` +
      product.sizes.map((s,i)=>`<label><input type="radio" name="size" value="${i}" ${i===0?'checked':''}> ${s.label} — ${s.price} ج.</label>`).join('') + `</div>`;
  }
  
  bodyEl.innerHTML = contentHtml;

  const notesInput = document.getElementById('itemNotes');
  if (notesInput && notesInput.parentElement) {
    notesInput.parentElement.style.display = 'none'; 
  }

  optionsModal.classList.add('show');
}

document.getElementById('closeOptions').onclick = () => {
  optionsModal.classList.remove('show');
};

document.getElementById('addToCartBtn').onclick = () => {
  if (!currentProduct) return;
  
  let notes = '';
  const notesInput = document.getElementById('itemNotes');
  if (notesInput) {
    notes = notesInput.value.trim();
  }

  let sizeLabel = null, price = currentProduct.price;
  
  if (currentProduct.sizes){
    const checkedRadio = document.querySelector('input[name="size"]:checked');
    if (checkedRadio) {
      const idx = checkedRadio.value;
      const size = currentProduct.sizes[idx];
      sizeLabel = size.label;
      price = size.price;
    }
  }
  
  addToCart(currentProduct, sizeLabel, price, notes);
  optionsModal.classList.remove('show');
};

/* ============ السلة ============ */
function addToCart(product, sizeLabel, price, notes){
  const key = product.id + '|' + (sizeLabel||'') + '|' + (notes||'');
  const existing = cart.find(c=>c.key===key);
  if (existing){ existing.qty++; }
  else {
    cart.push({ key, id:product.id, name:product.name, sizeLabel, price, notes, qty:1 });
  }
  saveCart();
}

function saveCart(){
  localStorage.setItem('crunch_cart', JSON.stringify(cart));
  renderCart();
}

function renderCart(){
  cartItemsEl.innerHTML = '';
  let total = 0, count = 0;
  cart.forEach((item, i)=>{
    total += item.price * item.qty;
    count += item.qty;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="info">
        <h4>${item.name}${item.sizeLabel?` (${item.sizeLabel})`:''}</h4>
        ${item.notes?`<small>📝 ${item.notes}</small>`:''}
        <small>${item.price} ج. × ${item.qty}</small>
      </div>
      <div class="qty">
        <button data-act="dec" data-i="${i}">−</button>
        <span>${item.qty}</span>
        <button data-act="inc" data-i="${i}">+</button>
      </div>
      <button class="remove" data-act="del" data-i="${i}">🗑</button>
    `;
    cartItemsEl.appendChild(div);
  });
  cartTotalEl.textContent = total;
  cartCountEl.textContent = count;
  if (cart.length === 0){
    cartItemsEl.innerHTML = '<p style="text-align:center;color:#999;padding:20px;">السلة فارغة</p>';
  }
  cartItemsEl.querySelectorAll('button').forEach(b=>{
    b.onclick = ()=>{
      const i = +b.dataset.i;
      const act = b.dataset.act;
      if (act==='inc') cart[i].qty++;
      if (act==='dec'){ cart[i].qty--; if (cart[i].qty<=0) cart.splice(i,1); }
      if (act==='del') cart.splice(i,1);
      saveCart();
    };
  });
}

/* ============ فتح/إغلاق السلة ============ */
function openCart(){ cartSidebar.classList.add('open'); overlay.classList.add('show'); }
function closeCart(){ cartSidebar.classList.remove('open'); overlay.classList.remove('show'); }
document.getElementById('cartBtn').onclick = openCart;
document.getElementById('closeCart').onclick = closeCart;
overlay.onclick = closeCart;

/* ============ فتح/إغلاق نافذة إتمام الطلب ============ */

const checkoutBtn = document.getElementById('checkoutBtn');
const closeCheckout = document.getElementById('closeCheckout');

if (checkoutBtn && checkoutModal) {
  checkoutBtn.addEventListener('click', () => {

    // التأكد إن السلة مش فاضية
    if (cart.length === 0) {
      alert('السلة فارغة! أضف منتجات أولاً.');
      return;
    }

    // إغلاق السلة وفتح نافذة البيانات
    closeCart();
    checkoutModal.classList.add('show');
  });
}

// إغلاق النافذة من زر X
if (closeCheckout && checkoutModal) {
  closeCheckout.addEventListener('click', () => {
    checkoutModal.classList.remove('show');
  });
}

// إغلاق النافذة عند الضغط خارج النموذج
if (checkoutModal) {
  checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) {
      checkoutModal.classList.remove('show');
    }
  });
}

/* ============ إرسال الطلب عبر واتساب ============ */
document.getElementById('checkoutForm').onsubmit = function(e) {
  e.preventDefault(); 

  // قراءة البيانات
  const form = e.target;
  const name = form.querySelector('input[name="name"]').value.trim();
  const phone = form.querySelector('input[name="phone"]').value.trim();
  const address = form.querySelector('input[name="address"]').value.trim();
  const area = form.querySelector('input[name="area"]').value.trim();
  const notesEl = form.querySelector('textarea[name="notes"]');
  const notes = notesEl ? notesEl.value.trim() : '';

  if (cart.length === 0) {
    alert('السلة فارغة! أضف منتجات أولاً.');
    return;
  }

  // تجهيز الرسالة
  let msg = `*طلب جديد من CRUNCH*\n\n`;
  msg += `👤 الاسم: ${name}\n`;
  msg += `📞 الهاتف: ${phone}\n`;
  msg += `📍 المنطقة: ${area}\n`;
  msg += `🏠 العنوان: ${address}\n`;
  
  msg += `\n*تفاصيل الطلب:*\n`;

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.qty;
    msg += `${index + 1}. ${item.name}`;
    if (item.sizeLabel) msg += ` (${item.sizeLabel})`;
    msg += ` - الكمية: ${item.qty} - السعر: ${item.price * item.qty} ج.م\n`;
    if (item.notes) msg += `   └ ملاحظة الصنف: ${item.notes}\n`;
  });

  msg += `\n*الإجمالي: ${total} ج.م*`;

  // ترميز الرسالة
  const encodedMsg = encodeURIComponent(msg);
  
  // استخدام رابط api الرسمي (أكثر استقراراً)
  const waLink = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMsg}`;

  // فتح اللينك في تاب جديد
  window.open(waLink, '_blank');
};
/* ============ التشغيل الأولي ============ */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('burger');
  renderCart();
});