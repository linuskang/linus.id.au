const fs = require("fs");
 const path = require("path");
 
 const redirects = require("./redirects.json");
 
 for (const slug in redirects) {
   const url = redirects[slug];
   const dir = path.join(__dirname, slug);
   const html = `
     <!DOCTYPE html>
     <html>
       <head>
         <meta http-equiv="refresh" content="0; url=${url}">
         <link rel="canonical" href="${url}">
       </head>
     </html>`;
 
   fs.mkdirSync(dir, { recursive: true });
   fs.writeFileSync(path.join(dir, "index.html"), html.trim());
 }