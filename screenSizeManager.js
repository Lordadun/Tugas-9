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
  console.log(`Ukuran layar saat ini: ${size}`);
}

window.addEventListener("load", handleResize);
window.addEventListener("resize", handleResize);
