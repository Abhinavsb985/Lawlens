const images = [
    'url("https://lawtrend.in/wp-content/uploads/2024/05/supreme-court.jpeg")',
    'url("https://png.pngtree.com/thumb_back/fh260/background/20230704/pngtree-stack-of-law-books-with-courtroom-scales-image_3721829.jpg")',
   
  ]; // Replace with your image paths
  
  let currentImageIndex = 0;
  
  function changeBackgroundImage() {
    document.body.style.backgroundImage = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
  
  // Change the background image every 3 seconds
  setInterval(changeBackgroundImage, 3000);
  
  // Initially set a background
  changeBackgroundImage();