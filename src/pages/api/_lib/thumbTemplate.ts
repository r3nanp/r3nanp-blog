interface GetHtmlProps {
  title: string
  thumbnail_bg?: string
  thumbnail_logos?: string[]
}

export const getHtmlThumbnailTemplate = ({
  title,
  thumbnail_bg,
}: GetHtmlProps) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Thumbnail</title>
  
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">
  
    <style>
      body {
        margin: 0;
        font-family: Roboto, sans-serif;
        color: #FFF;
        background: ${thumbnail_bg};
        background-image:
          radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%), 
          radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%);
        background-size: 100px 100px;
        height: 100vh;
      }

      .plus {
        color: #BBB;
        font-family: Times New Roman, Verdana;
        font-size: 100px;
      }
  
      #wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      #logo-wrapper {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
    }
  
      img {
        height: 40px;
        margin-top: 80px;
      }
  
      h1 {
        font-size: 62px;
        line-height: 80px;
  
        max-width: 80%;
      }
    </style>
  </head>
  <body>
    <main id="wrapper">
      <h1>${title}</h1>
      <div id="logo-wrapper">
      </div>
    </main>
  </body>
  </html>`
}

// function getImage(src: string, width: string, height: string) {
//   return `<img
//       class="logo"
//       alt="Generated Image"
//       src="${sanitizeHtml(src)}"
//       width="${sanitizeHtml(width)}"
//       height="${sanitizeHtml(height)}"
//   />`
// }

// function getPlusSign(i: number) {
//   return i === 0 ? '' : '<div class="plus">+</div>'
// }
