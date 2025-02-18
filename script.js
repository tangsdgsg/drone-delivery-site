const researchBackground = document.getElementById('researchBackground');
const backgroundText = document.getElementById('backgroundText');
const researchSignificance = document.getElementById('researchSignificance');
const significanceText = document.getElementById('significanceText');
const keyTechnology = document.getElementById('keyTechnology');
const technologyText = document.getElementById('technologyText');

researchBackground.addEventListener('click', function () {
  backgroundText.style.display = backgroundText.style.display === 'none'? 'block' : 'none';
});

researchSignificance.addEventListener('click', function () {
  significanceText.style.display = significanceText.style.display === 'none'? 'block' : 'none';
});

keyTechnology.addEventListener('click', function () {
  technologyText.style.display = technologyText.style.display === 'none'? 'block' : 'none';
});