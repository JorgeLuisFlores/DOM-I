const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo

//NavBar
const navItems = document.querySelectorAll("a");

for (i = 0; i < navItems.length; i++) {
  navItems[i].append(siteContent["nav"][`nav-item-${i + 1}`]);
}

//

let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// CTA Section
let ctaButton = document.querySelector("button");
ctaButton.append(siteContent["cta"]["button"]);

//

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

//

let ctaHeader = document.querySelector("h1");
ctaHeader.append("Dom is awesome");
ctaHeader.style.width = "150px";
ctaHeader.style.flexWrap = "wrap";
ctaHeader.style.marginRight = "60px";

// Body

let topFeatureHeader = document.querySelector(".top-content .text-content h4");
topFeatureHeader.append(siteContent["main-content"]["features-h4"]);

let featureBody = document.querySelector(".top-content .text-content p");
featureBody.append(siteContent["main-content"]["features-content"]);

//

let topAboutHeader = document.querySelector(
  ".top-content .text-content:nth-child(2) h4"
);
topAboutHeader.append(siteContent["main-content"]["about-h4"]);

let aboutBody = document.querySelector(
  ".top-content .text-content:nth-child(2) p"
);
aboutBody.append(siteContent["main-content"]["about-content"]);

//

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//

let btmServicesHeader = document.querySelector(
  ".bottom-content .text-content h4"
);
btmServicesHeader.append(siteContent["main-content"]["services-h4"]);

let servicesBody = document.querySelector(".bottom-content .text-content p");
servicesBody.append(siteContent["main-content"]["services-content"]);

//

let btmProductHeader = document.querySelector(
  ".bottom-content .text-content:nth-child(2) h4"
);
btmProductHeader.append(siteContent["main-content"]["product-h4"]);

let productBody = document.querySelector(
  ".bottom-content .text-content:nth-child(2) p"
);
productBody.append(siteContent["main-content"]["product-content"]);

//

let btmVisionHeader = document.querySelector(
  ".bottom-content .text-content:nth-child(3) h4"
);
btmVisionHeader.append(siteContent["main-content"]["vision-h4"]);

let visionBody = document.querySelector(
  ".bottom-content .text-content:nth-child(3) p"
);
visionBody.append(siteContent["main-content"]["vision-content"]);

// Contact

let contactHeader = document.querySelector(".contact h4");
contactHeader.append(siteContent["contact"]["contact-h4"]);

let breakLine = document.createElement("br");
let breakLine2 = document.createElement("br");
let contactContent = document.querySelector(".contact p");

contactContent.append(siteContent["contact"]["address"]);
contactContent.append(breakLine);

contactContent.append(siteContent["contact"]["phone"]);
contactContent.append(breakLine2);

contactContent.append(siteContent["contact"]["email"]);

// Footer

let footerContent = document.querySelector("footer p");
footerContent.append(siteContent["footer"]["copyright"]);
