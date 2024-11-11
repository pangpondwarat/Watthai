// ควบคุมจำนวนคอลัมภ์ที่แสดงผลได้
function setColumns(columns) {
    const templeContainer = document.getElementById("temple");
    templeContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  }
  
  // ควบคุม Auto Play
  let autoplay = false;
  let intervalId;
  
  function toggleAutoplay() {
    autoplay = !autoplay;
    const items = document.querySelectorAll(".wat");
  
    if (autoplay) {
      let currentIndex = 0;
      intervalId = setInterval(() => {
        items.forEach((item, index) => {
          item.style.display = index === currentIndex ? "block" : "none";
        });
        currentIndex = (currentIndex + 1) % items.length;
      }, 2000);
    } else {
      clearInterval(intervalId);
      items.forEach(item => item.style.display = "block");
    }
  }
  
