
// array contains all products

const allItems = [
  {
    id: 1,
    imagepath: "imgs/categories/laptop/1.png",
    name: "Lenovo V14",
    price: 6299,
    description:
      "Lenovo Lenovo V14 Laptop - Ryzen 3 - 4GB RAM - 1 TB HDD - 14 Inch FHD - AMD RADEON Graphics - Dos - Iron Grey",
    category: "laptop",
  },
  {
    id: 2,
    imagepath: "imgs/categories/laptop/2.png",
    name: "G15 5511",
    price: 23499,
    description:
      "DELL G15 5511 Gaming Laptop - Intel Core I7-11800H - 16GB RAM - 512GB SSD - NVIDIA GeForce RTX 3050 4GB -15.6 Inch FHD 120Hz Display - Ubuntu - DARK SHADOW GREY",
    category: "laptop",
  },
  {
    id: 3,
    imagepath: "imgs/categories/laptop/3.png",
    name: "G 33500",
    price: 15199,
    description:
      "DELL G3 15-3500 Gaming Laptop - Intel Core I5-10300H - 8GB RAM - 256GB SSD + 1TB HDD - 15.6-inch Full HD - 4GB GPU - Ubuntu - Black",
    category: "laptop",
  },
  {
    id: 4,
    imagepath: "imgs/categories/laptop/4.png",
    name: "VOSTRO 3510",
    price: 16999,
    description:
      "DELL Vostro 3510 - Intel Core I7 - 16GB RAM - 1TB HDD - 512GB SSD - 15.6-inch FHD - 2GB GPU - Windows 11 Pro - Carbon Black",
    category: "laptop",
  },
  {
    id: 5,
    imagepath: "imgs/categories/laptop/5.png",
    name: "Pavilion 15",
    price: 16950,
    description:
      "HP Pavilion 15-dk2085ne Gaming Laptop - Intel Corei5-11300H - 8GB RAM - 1TB HDD + 256GB SSD - 15.6-inch FHD - NVIDIA GeForce GTX 1650 4GB GPU - DOS - Black - English/Arabic Keyboard",
    category: "laptop",
  },
  {
    id: 6,
    imagepath: "imgs/categories/laptop/6.png",
    name: "VOSTRO3510",
    price: 15499,
    description:
      "DELL Vostro 3510 - Intel Core I7 - 16GB RAM - 1TB HDD - 256GB SSD - 15.6-inch FHD - 2GB GPU - DOS - Carbon Black",
    category: "laptop",
  },
  {
    id: 7,
    imagepath: "imgs/categories/laptop/7.png",
    name: "Inspiron-3511",
    price: 10999,
    description:
      "THDELL Inspiron 3511 Laptop - Intel Core I3-1115G4 - 8GB RAM - 1TB HDD - 128GB SSD - 15.6-inch - Intel HD GPU - Windows 10 - Black",
    category: "laptop",
  },
  {
    id: 8,
    imagepath: "imgs/categories/laptop/8.png",
    name: "1165G7",
    price: 37999,
    description:
      "DELL Latitude 7420 Notebook - Intel Core I71165G7 - 16GB RAM - 512GB SSD -14” Display Full HD - Ubuntu Linux 20.04 - Black",
    category: "laptop",
  },
  {
    id: 9,
    imagepath: "imgs/categories/mobiles/1.png",
    name: "N6",
    price: 1099,
    description: "iQ&T N6 - 6.1-inch 16GB/2GB Mobile Phone - Gold",
    category: "mobile",
  },
  {
    id: 10,
    imagepath: "imgs/categories/mobiles/2.png",
    name: "Redmi Note 10S",
    price: 5799,
    description:
      "XIAOMI Redmi Note 10S - 6.43-inch 128GB/6GB Dual Sim 4G Mobile Phone - Pebble White",
    category: "mobile",
  },
  {
    id: 11,
    imagepath: "imgs/categories/mobiles/3.png",
    name: "C1",
    price: 1440,
    description:
      "Nokia C1 - 5.45-inch 16GB/1GB Dual SIM Mobile Phone - Charcoal",
    category: "mobile",
  },
  {
    id: 12,
    imagepath: "imgs/categories/mobiles/4.png",
    name: "Note-11",
    price: 4299,
    description:
      "Infinix Note 11 – 6.7-inch 128GB/6GB Dual SIM 4G Mobile Phone – Graphite Black",
    category: "mobile",
  },
  {
    id: 13,
    imagepath: "imgs/categories/mobiles/5.png",
    name: "CPH2325",
    price: 6190,
    description:
      "OPPO A55 - 6.51-inch 128GB/4GB Dual SIM 4G Mobile Phone - Rainbow Blue",
    category: "mobile",
  },
  {
    id: 14,
    imagepath: "imgs/categories/mobiles/6.png",
    name: "G20",
    price: 3175,
    description:
      "Nokia G20 - 6.52-inch 128GB/4GB Dual Sim Mobile Phone - Dark Blue",
    category: "mobile",
  },
  {
    id: 15,
    imagepath: "imgs/categories/mobiles/7.png",
    name: "Galaxy S21+",
    price: 19499,
    description:
      "Samsung Galaxy S21+ - 6.7-inch 256GB/8GB Dual SIM 5G Mobile Phone - Phantom Violet",
    category: "mobile",
  },
  {
    id: 16,
    imagepath: "imgs/categories/mobiles/8.png",
    name: "Galaxy S21+",
    price: 19499,
    description:
      "Samsung Galaxy S21+ - 6.7-inch 256GB/8GB Dual SIM 5G Mobile Phone - Phantom Silver",
    category: "mobile",
  },
  {
    id: 17,
    imagepath: "imgs/categories/clothes/1.png",
    name: "Ho Holland",
    price: 199,
    description: "Ho Holland Men's Polo Shirt - Multi Color",
    category: "clothes",
  },
  {
    id: 18,
    imagepath: "imgs/categories/clothes/2.png",
    name: "Izor Slip ",
    price: 129,
    description:
      "Brand: American Eagle | Similar products from American Eagle|On Solid Cotton Cargo Shorts - Heather Charcoal",
    category: "clothes",
  },
  {
    id: 19,
    imagepath: "imgs/categories/clothes/3.png",
    name: "Sleeve Shirt",
    price: 249,
    description:
      "Defacto Man Woven Modern Fit Buttondown Polo Neck Long Sleeve Shirt - Black",
    category: "clothes",
  },
  {
    id: 20,
    imagepath: "imgs/categories/clothes/4.png",
    name: "Straight Jean",
    price: 660,
    description: "Brand: American Eagle | Similar products from American Eagle",
    category: "clothes",
  },
  {
    id: 21,
    imagepath: "imgs/categories/clothes/5.png",
    name: "Cargo Shorts",
    price: 350,
    description:
      "Brand: American Eagle | Similar products from American Eagle|On Solid Cotton Cargo Shorts - Heat",
    category: "clothes",
  },
  {
    id: 22,
    imagepath: "imgs/categories/clothes/6.png",
    name: "polo T-shirt",
    price: 330,
    description: "American Eagle Pique Polo Shirt",
    category: "clothes",
  },
  {
    id: 23,
    imagepath: "imgs/categories/clothes/7.png",
    name: "Sleeves Shirt",
    price: 213,
    description: "Andora Down Buttoned Plain Simon Long Sleeves Shirt",
    category: "clothes",
  },
  {
    id: 24,
    imagepath: "imgs/categories/clothes/8.png",
    name: "Cotton Shirt",
    price: 173,
    description:
      "Fashion Men's Baggy Cotton Linen Solid Short Sleeve Button Shirt",
    category: "clothes",
  },
];
//function that take item category to display
function display(itemsTodisplay) {
  items = allItems.filter((item) => {
    return item.category === itemsTodisplay || itemsTodisplay === "all";
  });
  let str = "";
  for (let key in items) {
    let item = items[key];
    str += ` 
      <div class="col-lg-4 col-xl-3 col-md-6  col-sm-12 my-2">
        <div class="card p-3 pb-0" >
          <a class="img-footer" data-bs-toggle="modal" data-bs-target="#exampleModal${item.id}">
            <img src="${item.imagepath}" id="cardImg" class="card-img-top"  alt="product image">
          </a>

          <div class="card-body d-flex  flex-column  mt-3 justify-content-between align-items-center p-0">
            <h5 class="card-title text-center  text-capitalize text-dark d-flex align-items-center h-25">${item.name}</h5>
            <button class="cart-btn p-2 rounded btn${item.id}" onclick="addToCart(${item.id})" >Add to Cart <i class="fa-solid fa-cart-plus h5 ms-1"></i></button>
          </div> 

          <div class="card_footer mb-3 d-flex justify-content-between">
            <span class="pt-2 text-decoration-underline text-muted p-2">
              $${item.price} 
            </span>
            <span class="text-muted p-2 ">
              ${item.category}
            </span>
          </div>
                
        </div>

        <div class="modal fade" id="exampleModal${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${item.category}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body d-flex" id="modal">
                <img src="${item.imagepath}" alt="product image">
                <div class="modal-desc w-50 border p-4">
                  <h3 class= "main-color border-bottom text-capitalize">${item.name}</h3>
                  <div class="mt-5 pb-3 d-flex flex-column h-50 justify-content-between">
                    <p>${item.description}</p>
                    <div class = "d-flex justify-content-between align-items-center">
                      <span class="pt-2 text-decoration-underline text-muted  p-2">
                        $${item.price} 
                      </span>
                      <button class="cart-btn rounded-3 btn${item.id}" onclick="addToCart(${item.id})" >Add to Cart <i class="fa-solid fa-cart-plus h5 ms-1"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  let productsSection = document.getElementById("row");
  productsSection.innerHTML = str;
  cartItems = [];
}
let cartItems = [];
function addToCart(itemId) {
  const itemAdded = allItems.find((item) => {
    return (item.id = itemId);
  });
  // select add to cart btn
  let cartBtns = document.getElementsByClassName(`btn${itemAdded.id}`);
  // mark as selected
  console.log(cartBtns);
  for(let i=0;i<cartBtns.length;i++){
    cartBtns[i].innerHTML = 'selected   <i class="fa-solid fa-check"></i>';
    cartBtns[i].setAttribute("onclick", `removeFromCart(${itemAdded.id})`);
  }

 cartItems.push(itemAdded);
 document.getElementById("cart").innerHTML = `${cartItems.length}`;
}

function removeFromCart(itemId){
  let cartBtns = document.getElementsByClassName(`btn${itemId}`);
  for(let i=0;i<cartBtns.length;i++){
    cartBtns[i].innerHTML ='Add to Cart <i class="fa-solid fa-cart-plus h5 ms-1"></i>';
    cartBtns[i].setAttribute("onclick", `addToCart(${itemId})`);
  }
  const itemRemovedIndex = cartItems.find((item) => {
    return item.id === itemId;
  });
 cartItems.splice(itemRemovedIndex, 1);
  document.getElementById("cart").innerHTML = `${cartItems.length}`;
}

// slider
// selectors
const prevBtn = document.getElementById("slider-rigth");
const nextBtn = document.getElementById("slider-left");
const homeSection = document.getElementById("home");
//backgroung images

let backgroundImg = [
  "../imgs/bg-img/1.webp",
  "../imgs/bg-img/5.jpg",
  "../imgs/bg-img/6.jpg",
  "../imgs/bg-img/8.jpg"
];
currentHomeImg = 0;
function prvBtnAction() {
  currentHomeImg--;
  if (currentHomeImg === -1) currentHomeImg = backgroundImg.length - 1;
  homeSection.style.backgroundImage = `url(${backgroundImg[currentHomeImg]})`;
}
function nextBtnAction() {
  currentHomeImg++;
  if (currentHomeImg === backgroundImg.length) currentHomeImg = 0;
  homeSection.style.backgroundImage = `url(${backgroundImg[currentHomeImg]})`;
}
prevBtn.addEventListener("click", prvBtnAction);
nextBtn.addEventListener("click", nextBtnAction);

// setInterval(nextBtnAction,5000);

//handle up button
function upBtn() {
  window.scrollBy(0, -window.scrollY);
}

display("all");
