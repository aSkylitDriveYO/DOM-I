const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let logo2 = document.getElementById('cta-img');
logo2.setAttribute('src', siteContent["cta"]["img-src"]);

let logo3 = document.getElementById("middle-img");
logo3.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const navigation = document.querySelector('nav');
const links = document.querySelectorAll('a');
const img = document.querySelectorAll('img');
const h1Tag = document.querySelector('h1');
const btn = document.querySelector('button');
const h4s = document.querySelectorAll('h4');
const paraGraphs = document.querySelectorAll('p');

const vals = Object.values(siteContent['nav']);
for (let i = 0; i < vals.length - 1; i++) {
  links[i].textContent = vals[i];
}

links.forEach( link => link.style.color = 'green');

//imgs[1].src = siteContent['cta']['img-src'];
//imgs[2].src = siteContent['main-content']['middle-img-src'];

h1Tag.innerHTML = 'DOM<br>Is<br>Awesome'
btn.textContent = siteContent['cta']['button'];

h4s[0].textContent = siteContent['main-content']['features-h4'];
paraGraphs[0].textContent = siteContent['main-content']['features-content'];

h4s[1].textContent = siteContent['main-content']['about-h4'];
paraGraphs[1].textContent = siteContent['main-content']['about-content'];

h4s[2].textContent = siteContent['main-content']['services-h4'];
paraGraphs[2].textContent = siteContent['main-content']['services-content'];

h4s[3].textContent = siteContent['main-content']['product-h4'];
paraGraphs[3].textContent = siteContent['main-content']['product-content'];

h4s[4].textContent = siteContent['main-content']['vision-h4'];
paraGraphs[4].textContent = siteContent['main-content']['vision-content'];

console.log("hello world");
console.log(links);

