
document.addEventListener("DOMContentLoaded", () => {
    const openSidebar = document.getElementById("openSidebar");
    const closeSidebar = document.getElementById("closeSidebar");
    const sidebar = document.getElementById("sidebar");
  
    // Open Sidebar
    openSidebar.addEventListener("click", () => {
      sidebar.classList.remove("hidden");
      sidebar.classList.add("show");
    });
  
    // Close Sidebar
    closeSidebar.addEventListener("click", () => {
      sidebar.classList.remove("show");
      sidebar.classList.add("hidden");
    });
  });
  document.querySelectorAll('.single-hobby img').forEach((image) => {
    image.addEventListener('mouseover', (event) => {
        const singleDesc = event.target.closest('.single-hobby').querySelector('.single-desc');
        singleDesc.style.display = 'block';
    });

    image.addEventListener('mouseout', (event) => {
        const singleDesc = event.target.closest('.single-hobby').querySelector('.single-desc');
        singleDesc.style.display = 'none';
    });
});

  