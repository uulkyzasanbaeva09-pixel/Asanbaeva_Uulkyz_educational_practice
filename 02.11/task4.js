let link = document.querySelector("a");

console.log(link.getAttribute("href"));

link.setAttribute("href", "https://example.com");

console.log(link.hasAttribute("href"));

link.removeAttribute("target");