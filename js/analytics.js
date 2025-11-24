// Google Analytics Setup

const GA_MEASUREMENT_ID = 'G-QYKNMJT7ML';

// Load the Google Analytics script
const script = document.createElement('script');
script.async = true;
script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
document.head.appendChild(script);
// Initialize Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', GA_MEASUREMENT_ID);

console.log('Google Analytics initialized with ID:', GA_MEASUREMENT_ID);
