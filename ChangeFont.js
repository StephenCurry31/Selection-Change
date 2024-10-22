function importFont(font){
  const Poppins = document.createElement('style');
  style.innerHTML = `
  @import url('https://danielpang2020.github.io/FilesForCodes/PoppinsFont.css');
  `;
  if (font === 'Poppins') {
    document.head.appendChild(Poppins);
  } else {
    alert('Font not found');
  }
}
