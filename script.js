// TROQUE PELO SEU NÚMERO, com DDI + DDD, somente algarismos. Ex.: 5519999999999
const WHATSAPP_NUMBER = "5519981213385";
const STORE_NAME = "AP Reserve";

const products = [
  {id:1,name:"Imaginaire",inspired:"Imagination — Louis Vuitton",category:"masculino",price:65,image:"https://fimgs.net/mdimg/perfume/375x500.67370.jpg",official:"https://br.louisvuitton.com/por-br/produtos/imagination-nvprod2970067v/LP0219",notes:["Bergamota","Chá preto","Ambrox","Gengibre"],short:"Cítrico, elegante e contemporâneo.",description:"Uma fragrância luminosa e sofisticada, com cítricos refinados, especiarias frescas e um elegante acorde de chá preto sobre fundo ambarado."},
  {id:2,name:"Ventos",inspired:"Aventus — Creed",category:"masculino",price:65,image:"https://fimgs.net/mdimg/perfume/375x500.9828.jpg",official:"https://creedboutique.com/products/aventus",notes:["Abacaxi","Bergamota","Bétula","Almíscar"],short:"Frutado, amadeirado e confiante.",description:"Marcante e versátil, combina uma abertura frutada vibrante com madeiras elegantes e um fundo levemente esfumaçado."},
  {id:3,name:"Selvaggio",inspired:"Sauvage Elixir — Dior",category:"masculino",price:65,image:"https://fimgs.net/mdimg/perfume/375x500.68415.jpg",official:"https://www.dior.com/pt_br/beauty/products/sauvage-elixir-Y0996460.html",notes:["Toranja","Lavanda","Especiarias","Madeiras"],short:"Intenso, especiado e poderoso.",description:"Uma composição de presença forte, com frescor especiado, lavanda aromática e madeiras profundas. Ideal para noites e ocasiões especiais."},
  {id:4,name:"África",inspired:"Hacivat — Nishane",category:"compartilhavel",price:65,image:"https://fimgs.net/mdimg/perfume/375x500.44174.jpg",official:"https://nishane.com/product/hacivat/",notes:["Abacaxi","Toranja","Cedro","Musgo"],short:"Verde, frutado e sofisticado.",description:"Abre com frutas cítricas e abacaxi, evoluindo para um coração amadeirado e um fundo verde de musgo com assinatura elegante."},
  {id:5,name:"Reflexus 45",inspired:"Reflection 45 — Amouage",category:"masculino",price:65,image:"https://fimgs.net/mdimg/perfume/375x500.68281.jpg",official:"https://amouage.com/products/reflection-45-man",notes:["Lavanda","Néroli","Íris","Sândalo"],short:"Cremoso, refinado e luxuoso.",description:"Uma fragrância polida e envolvente, com flores brancas, especiarias suaves e madeiras cremosas de grande elegância."},
  {id:6,name:"Fahren",inspired:"Fahrenheit — Dior",category:"masculino",price:65,image:"https://fimgs.net/mdimg/perfume/375x500.228.jpg",official:"https://www.dior.com/pt_br/beauty/products/fahrenheit-Y0064001.html",notes:["Violeta","Couro","Madeiras","Noz-moscada"],short:"Icônico, couro e violeta.",description:"Uma assinatura inconfundível que mistura frescor de folhas de violeta, nuances minerais, couro e madeiras aquecidas."},
  {id:7,name:"Pure Erba",inspired:"Erba Pura — Xerjoff",category:"compartilhavel",price:65,image:"https://fimgs.net/mdimg/perfume/375x500.55157.jpg",official:"https://www.xerjoff.com/products/erba-pura-eau-de-parfum",notes:["Laranja","Frutas mediterrâneas","Baunilha","Almíscar"],short:"Frutado, doce e expansivo.",description:"Um perfume vibrante e envolvente, com cesta de frutas mediterrâneas, cítricos luminosos, almíscar macio e baunilha sensual."},
  {id:8,name:"Incêndio",inspired:"God of Fire — Stéphane Humbert Lucas",category:"compartilhavel",price:65,image:"https://fimgs.net/mdimg/perfume/375x500.72309.jpg",official:"https://www.stephanehumbertlucas.com/en/parfums/god-of-fire",notes:["Manga","Gengibre","Limão","Madeiras"],short:"Tropical, vibrante e sedutor.",description:"Manga suculenta e cítricos ganham contraste com gengibre e um fundo elegante de madeiras, criando uma fragrância moderna e radiante."},
  {id:9,name:"Deluna Xclusif",inspired:"Delina Exclusif — Parfums de Marly",category:"feminino",price:65,image:"https://fimgs.net/mdimg/perfume/375x500.50370.jpg",official:"https://parfums-de-marly.com/products/delina-exclusif",notes:["Lichia","Rosa","Incenso","Baunilha"],short:"Rosa cremosa, doce e opulenta.",description:"Uma rosa luxuosa envolvida por frutas, baunilha, incenso e madeiras macias. Feminina, intensa e sofisticada."},
  {id:10,name:"Midnight Treasure",inspired:"La Nuit Trésor — Lancôme",category:"feminino",price:65,image:"https://fimgs.net/mdimg/perfume/375x500.29157.jpg",official:"https://www.lancome.com.br/la-nuit-tresor",notes:["Pera","Rosa negra","Pralinê","Baunilha"],short:"Doce, noturno e envolvente.",description:"Frutas maduras, rosa escura, pralinê e baunilha criam uma fragrância gourmand intensa, perfeita para momentos especiais."},
  {id:11,name:"Mia Via",inspired:"My Way — Giorgio Armani",category:"feminino",price:65,image:"https://fimgs.net/mdimg/perfume/375x500.62036.jpg",official:"https://www.giorgioarmanibeauty-usa.com/fragrances/womens-perfume/my-way/",notes:["Flor de laranjeira","Tuberosa","Jasmim","Baunilha"],short:"Floral branco, luminoso e moderno.",description:"Uma composição floral radiante, com flores brancas cremosas e uma base confortável de baunilha e madeiras claras."},
  {id:12,name:"Carminea",inspired:"Carmina — Creed",category:"feminino",price:65,image:"https://fimgs.net/mdimg/perfume/375x500.82954.jpg",official:"https://creedboutique.com/products/carmina",notes:["Cereja negra","Rosa","Violeta","Âmbar"],short:"Floral frutado, sensual e elegante.",description:"Cereja escura e pimenta rosa abrem caminho para rosa e violeta, sobre uma base ambarada, macia e sofisticada."},
  {id:13,name:"Rosa & Oud",inspired:"Oud & rosas orientais",category:"feminino",price:65,image:"https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=700&q=85",official:"#",notes:["Rosa","Oud","Âmbar","Especiarias"],short:"Floral oriental, quente e marcante.",description:"Uma combinação rica de rosa aveludada, madeiras escuras, oud e âmbar. Elegante, intensa e de personalidade."},
  {id:14,name:"Bombella",inspired:"La Vie Est Belle — Lancôme",category:"feminino",price:65,image:"https://fimgs.net/mdimg/perfume/375x500.14982.jpg",official:"https://www.lancome.com.br/la-vie-est-belle",notes:["Íris","Pralinê","Baunilha","Patchouli"],short:"Doce, alegre e confortável.",description:"Íris elegante, frutas e um acorde gourmand de pralinê e baunilha formam uma fragrância acolhedora e muito feminina."},
  {id:15,name:"Señorita",inspired:"Good Girl — Carolina Herrera",category:"feminino",price:65,image:"https://fimgs.net/mdimg/perfume/375x500.39681.jpg",official:"https://www.carolinaherrera.com/us/en/p-fragrance/good-girl-eau-de-parfum",notes:["Amêndoa","Jasmim","Cacau","Fava tonka"],short:"Sensual, doce e sofisticado.",description:"Contrasta flores brancas luminosas com amêndoa, cacau e fava tonka, criando uma fragrância sedutora e marcante."},
  {id:16,name:"Verde Irlandês",inspired:"Green Irish Tweed — Creed",category:"masculino",price:65,image:"https://fimgs.net/mdimg/perfume/375x500.474.jpg",official:"https://creedboutique.com/products/green-irish-tweed",notes:["Verbena","Violeta","Sândalo","Âmbar cinzento"],short:"Verde, fresco e clássico.",description:"Fresco como um campo depois da chuva, combina folhas verdes, violeta, ervas e madeiras suaves em uma assinatura elegante."}
];

let cart = JSON.parse(localStorage.getItem("apReserveCart") || "[]");
let currentFilter = "todos";
let currentProduct = null;

const $ = s => document.querySelector(s);
const grid = $("#productGrid");
const money = v => v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const categoryLabel = c => c === "compartilhavel" ? "Compartilhável" : c[0].toUpperCase()+c.slice(1);

function renderProducts(){
  const term = $("#searchInput").value.trim().toLowerCase();
  const visible = products.filter(p => (currentFilter === "todos" || p.category === currentFilter) && `${p.name} ${p.inspired} ${p.notes.join(" ")}`.toLowerCase().includes(term));
  grid.innerHTML = visible.map(p => `
    <article class="product-card">
      <button class="product-image" onclick="openProduct(${p.id})" aria-label="Ver detalhes de ${p.name}">
        <img src="${p.image}" alt="Frasco original ${p.inspired}, exibido como referência" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80'">
        <span class="product-badge">${categoryLabel(p.category)}</span>
      </button>
      <div class="product-info">
        <span class="product-reference">Inspirado em ${p.inspired}</span>
        <h3>${p.name}</h3><p>${p.short}</p>
        <div class="product-bottom">
          <div class="price"><small>50 ml</small><strong>${money(p.price)}</strong></div>
          <div class="card-actions"><button class="details-button" onclick="openProduct(${p.id})">Detalhes</button><button class="buy-button" onclick="addToCart(${p.id})">Comprar</button></div>
        </div>
      </div>
    </article>`).join("");
  $("#emptyState").style.display = visible.length ? "none" : "block";
}

function addToCart(id){
  const existing = cart.find(i=>i.id===id); existing ? existing.qty++ : cart.push({id,qty:1});
  saveCart(); showToast();
}
function changeQty(id,delta){const item=cart.find(i=>i.id===id);if(!item)return;item.qty+=delta;if(item.qty<=0)cart=cart.filter(i=>i.id!==id);saveCart()}
function removeItem(id){cart=cart.filter(i=>i.id!==id);saveCart()}
function saveCart(){localStorage.setItem("apReserveCart",JSON.stringify(cart));renderCart()}
function renderCart(){
  const count=cart.reduce((a,i)=>a+i.qty,0);$("#cartCount").textContent=count;
  $("#cartEmpty").style.display=cart.length?"none":"block";$("#cartItems").style.display=cart.length?"block":"none";
  $("#cartItems").innerHTML=cart.map(i=>{const p=products.find(x=>x.id===i.id);return `<div class="cart-item"><img src="${p.image}" alt=""><div><h4>${p.name}</h4><p>50 ml · ${money(p.price)}</p><div class="quantity"><button onclick="changeQty(${p.id},-1)">−</button><span>${i.qty}</span><button onclick="changeQty(${p.id},1)">+</button></div></div><button class="remove" onclick="removeItem(${p.id})">Remover</button></div>`}).join("");
  const total=cart.reduce((a,i)=>a+products.find(p=>p.id===i.id).price*i.qty,0);$("#cartTotal").textContent=money(total);
}
function openCart(){closeModal();$("#cartDrawer").classList.add("open");$("#overlay").classList.add("active");document.body.classList.add("locked")}
function closeCart(){$("#cartDrawer").classList.remove("open");$("#overlay").classList.remove("active");document.body.classList.remove("locked")}
function openProduct(id){
  currentProduct=products.find(p=>p.id===id);const p=currentProduct;
  $("#modalImage").src=p.image;$("#modalName").textContent=p.name;$("#modalInspired").textContent=p.inspired;$("#modalCategory").textContent=categoryLabel(p.category);$("#modalDescription").textContent=p.description;$("#modalNotes").innerHTML=p.notes.map(n=>`<span>${n}</span>`).join("");$("#modalPrice").textContent=money(p.price);$("#officialLink").href=p.official;
  $("#productModal").classList.add("open");$("#overlay").classList.add("active");document.body.classList.add("locked")
}
function closeModal(){$("#productModal").classList.remove("open");if(!$("#cartDrawer").classList.contains("open")){$("#overlay").classList.remove("active");document.body.classList.remove("locked")}}
function checkout(){
  if(!cart.length){alert("Seu carrinho está vazio.");return}
  if(WHATSAPP_NUMBER === "5519999999999") alert("Atenção: troque o número de WhatsApp no início do arquivo script.js antes de publicar o site.");
  const lines=cart.map(i=>{const p=products.find(x=>x.id===i.id);return `• ${i.qty}x ${p.name} — 50 ml (${money(p.price*i.qty)})\n  Inspiração: ${p.inspired}`});
  const total=cart.reduce((a,i)=>a+products.find(p=>p.id===i.id).price*i.qty,0);
  const msg=`Olá! Gostaria de fazer um pedido na ${STORE_NAME}:\n\n${lines.join("\n\n")}\n\n*Total: ${money(total)}*\n\nNome:\nForma de entrega/retirada:`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank");
}
function showToast(){$("#toast").classList.add("show");setTimeout(()=>$("#toast").classList.remove("show"),1800)}

document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");currentFilter=btn.dataset.filter;renderProducts()}));
$("#searchInput").addEventListener("input",renderProducts);$("#openCart").onclick=openCart;$("#heroCart").onclick=openCart;$("#closeCart").onclick=closeCart;$("#closeModal").onclick=closeModal;$("#overlay").onclick=()=>{closeCart();closeModal()};$("#checkoutButton").onclick=checkout;$("#modalBuy").onclick=()=>{if(currentProduct){addToCart(currentProduct.id);closeModal();openCart()}};$("#year").textContent=new Date().getFullYear();
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCart();closeModal()}});
renderProducts();renderCart();
