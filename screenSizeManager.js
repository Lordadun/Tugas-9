// screenSizeManager.js

function getScreenSizeCategory() {
  const width = window.innerWidth;

  if (width < 576) return 'xs';
  if (width < 768) return 'sm';
  if (width < 992) return 'md';
  if (width < 1200) return 'lg';
  return 'xl';
}

function handleResize() {
  const size = getScreenSizeCategory();
  console.log(`Ukuran layar: ${size}`);

  // Contoh perubahan berdasarkan ukuran
  const body = document.body;
  switch (size) {
    case 'xs':
      body.style.fontSize = '14px';
      break;
    case 'sm':
      body.style.fontSize = '15px';
      break;
    case 'md':
      body.style.fontSize = '16px';
      break;
    case 'lg':
      body.style.fontSize = '17px';
      break;
    case 'xl':
      body.style.fontSize = '18px';
      break;
  }
}

window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);
