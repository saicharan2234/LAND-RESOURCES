function toggleDetails(detailId) {
    var details = document.getElementById(detailId);
    if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
  
  
    // Image zoom effect
    const images = document.querySelectorAll('img');
  
    images.forEach(img => {
      img.addEventListener('click', () => {
        const zoomedImage = document.createElement('div');
        zoomedImage.classList.add('zoomed-image');
        zoomedImage.innerHTML = `<img src="${img.src}" alt="${img.alt}" />`;
        document.body.appendChild(zoomedImage);
  
        zoomedImage.addEventListener('click', () => {
          zoomedImage.remove();
        });
      });
    });
  
  });
  
  