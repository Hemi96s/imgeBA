const slider = document.querySelector('.slider');
const sliderLine = document.querySelector('.sliderLine');
const sliderButton = document.querySelector('.sliderButton');
const imgRight = document.querySelector('.img.right');

slider.addEventListener('input', function () {
  const value = parseFloat(slider.value);
  const max = parseFloat(slider.max) || 100;
  const percent = (value / max) * 100;

  imgRight.style.width = (100 - percent) + '%';

  // 改為設定 left，寬度固定
  sliderLine.style.left = percent + '%';
  sliderButton.style.left = percent + '%';
});