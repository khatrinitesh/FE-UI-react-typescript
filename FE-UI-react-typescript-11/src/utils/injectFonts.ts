const injectFonts = () => {
  const fontBaseUrl = import.meta.env.VITE_ASSETS_FONT_URL;

  const style = document.createElement("style");
  style.type = "text/css";

  style.innerHTML = `
  @font-face {
      font-family: "poppinsL";
      src: url("${fontBaseUrl}/poppins-light.woff2") format("woff2"),
           url("${fontBaseUrl}/poppins-light.woff") format("woff"),
           url("${fontBaseUrl}/poppins-light.ttf") format("truetype"),
           url("${fontBaseUrl}/poppins-light.otf") format("opentype"),
           url("${fontBaseUrl}/poppins-light.svg") format("svg");
      font-weight: 300;
      font-style: normal;
    }
    @font-face {
      font-family: "poppinsR";
      src: url("${fontBaseUrl}/poppins-regular.woff2") format("woff2"),
           url("${fontBaseUrl}/poppins-regular.woff") format("woff"),
           url("${fontBaseUrl}/poppins-regular.ttf") format("truetype"),
           url("${fontBaseUrl}/poppins-regular.otf") format("opentype"),
           url("${fontBaseUrl}/poppins-regular.svg") format("svg");
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: "poppinsM";
      src: url("${fontBaseUrl}/poppins-medium.woff2") format("woff2"),
           url("${fontBaseUrl}/poppins-medium.woff") format("woff"),
           url("${fontBaseUrl}/poppins-medium.ttf") format("truetype");
           url("${fontBaseUrl}/poppins-medium.otf") format("opentype"),
           url("${fontBaseUrl}/poppins-medium.svg") format("svg");
      font-weight: 500;
      font-style: normal;
    }
       @font-face {
      font-family: "poppinsSB";
      src: url("${fontBaseUrl}/poppins-semibold.woff2") format("woff2"),
           url("${fontBaseUrl}/poppins-semibold.woff") format("woff"),
           url("${fontBaseUrl}/poppins-semibold.ttf") format("truetype"),
           url("${fontBaseUrl}/poppins-semibold.otf") format("opentype"),
           url("${fontBaseUrl}/poppins-semibold.svg") format("svg");
      font-weight: 600;
      font-style: normal;
    }

    @font-face {
      font-family: "poppinsB";
      src: url("${fontBaseUrl}/poppins-bold.woff2") format("woff2"),
           url("${fontBaseUrl}/poppins-bold.woff") format("woff"),
           url("${fontBaseUrl}/poppins-bold.ttf") format("truetype"),
           url("${fontBaseUrl}/poppins-bold.otf") format("opentype"),
           url("${fontBaseUrl}/poppins-bold.svg") format("svg");
      font-weight: 700;
      font-style: normal;
    }

    body {
      font-family: "poppinsR", sans-serif;
    }
  `;

  document.head.appendChild(style);
};

export default injectFonts;
