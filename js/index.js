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

// nav bar

const navs = document.getElementsByTagName('a');
console.log(navs);
navs[0].textContent = siteContent.nav["nav-item-1"];
navs[1].textContent = siteContent.nav["nav-item-2"];
navs[2].textContent = siteContent.nav["nav-item-3"];
navs[3].textContent = siteContent.nav["nav-item-4"];
navs[4].textContent = siteContent.nav["nav-item-5"];
navs[5].textContent = siteContent.nav["nav-item-6"];



Array.from(navs).forEach( e =>{
  e.style.color = 'green';
})

// first section CTA

const superTxt = document.querySelector('h1');
console.log(superTxt);
superTxt.textContent = siteContent.cta.h1;
superTxt.style.wordSpacing = '100vw';
const titleImg = document.querySelector('#cta-img');
console.log(titleImg);
titleImg.setAttribute('src', siteContent.cta["img-src"]);
const btn = document.querySelector('.cta button');
console.log(btn);
btn.textContent = siteContent.cta.button;

// second section Main Content

const mainTxt = document.querySelectorAll('.text-content h4, .text-content p');
console.log(mainTxt)
const mainValues = 
[siteContent["main-content"]["features-h4"], siteContent["main-content"]["features-content"]
, siteContent["main-content"]["about-h4"], siteContent["main-content"]["about-content"]
, siteContent["main-content"]["services-h4"], siteContent["main-content"]["services-content"]
, siteContent["main-content"]["product-h4"], siteContent["main-content"]["product-content"]
, siteContent["main-content"]["vision-h4"], siteContent["main-content"]["vision-content"]];
console.log(mainValues);
for (let i = 0; i < mainTxt.length; i++){
  mainTxt[i].textContent = mainValues[i];
}
const mainImg = document.querySelector('#middle-img');
console.log(mainImg);
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Third Section Contact
const contH4 = document.querySelector('.contact h4');
console.log(contH4);
contH4.textContent = siteContent.contact["contact-h4"];
const contP = document.querySelectorAll(".contact p");
console.log(contP);
const contVals = [siteContent.contact.address, siteContent.contact.phone, siteContent.contact.email];
console.log(contVals);
for (let i = 0; i < contP.length; i++){
  contP[i].textContent = contVals[i];
}
const address = document.querySelector('.contact p');
console.log(address);
address.style.width = '20%';

// footer

const copyrite = document.querySelector('footer p');
console.log(copyrite);
copyrite.textContent = siteContent.footer.copyright;