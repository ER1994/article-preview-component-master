const  toggleBtn = document.getElementById('toggle-btn');
const  closeBtn = document.getElementById('close-btn');
const  shareSection = document.getElementById('share-section');

function toggleButtons() {
    shareSection.classList.toggle('share-section__hidden');
    shareSection.classList.toggle('share-section__active');
    console.log(shareSection.classList);
}

toggleBtn.onclick = toggleButtons;
closeBtn.onclick = toggleButtons;