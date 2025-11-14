// Gallery configuration
const PLOTS_PER_PAGE = 12;

// Define your plots here
const PLOTS = [
  { type: "svg",  file: "plots/experiment1.svg",   title: "Experiment 1" },
  { type: "svg",  file: "plots/experiment2.svg",   title: "Experiment 2" },
  { type: "html", file: "plots/trajectory_1.html", title: "Trajectory 1" },
  { type: "html", file: "plots/trajectory_2.html", title: "Trajectory 2" }
  // Add more plots here as needed
];

// Gallery state
let currentPage = 0;
const totalPages = Math.ceil(PLOTS.length / PLOTS_PER_PAGE);

// DOM elements
const galleryContainer = document.getElementById('gallery-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const paginationInfo = document.getElementById('pagination-info');

// Initialize gallery
function initGallery() {
  renderGallery();
  updatePaginationControls();
  attachEventListeners();
}

// Render gallery items for current page
function renderGallery() {
  const startIndex = currentPage * PLOTS_PER_PAGE;
  const endIndex = Math.min(startIndex + PLOTS_PER_PAGE, PLOTS.length);
  const plotsToShow = PLOTS.slice(startIndex, endIndex);

  galleryContainer.innerHTML = '';

  plotsToShow.forEach(plot => {
    const item = createGalleryItem(plot);
    galleryContainer.appendChild(item);
  });
}

// Create a single gallery item
function createGalleryItem(plot) {
  const item = document.createElement('div');
  item.className = 'gallery-item';

  const title = document.createElement('h3');
  title.className = 'gallery-item-title';
  title.textContent = plot.title;

  const content = document.createElement('div');
  content.className = 'gallery-item-content';

  if (plot.type === 'svg') {
    // For SVG files, embed directly
    const img = document.createElement('img');
    img.src = plot.file;
    img.alt = plot.title;
    img.style.width = '100%';
    img.style.height = 'auto';
    content.appendChild(img);
  } else if (plot.type === 'html') {
    // For HTML files (Plotly), use iframe
    const iframe = document.createElement('iframe');
    iframe.src = plot.file;
    iframe.title = plot.title;
    iframe.setAttribute('loading', 'lazy');
    content.appendChild(iframe);
  }

  const typeBadge = document.createElement('span');
  typeBadge.className = `gallery-item-type type-${plot.type}`;
  typeBadge.textContent = plot.type.toUpperCase();

  item.appendChild(title);
  item.appendChild(content);
  item.appendChild(typeBadge);

  return item;
}

// Update pagination controls
function updatePaginationControls() {
  const startIndex = currentPage * PLOTS_PER_PAGE + 1;
  const endIndex = Math.min((currentPage + 1) * PLOTS_PER_PAGE, PLOTS.length);
  
  paginationInfo.textContent = `${startIndex}-${endIndex} of ${PLOTS.length}`;
  
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage >= totalPages - 1;
}

// Attach event listeners
function attachEventListeners() {
  prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      renderGallery();
      updatePaginationControls();
      // Scroll to top of gallery
      galleryContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      renderGallery();
      updatePaginationControls();
      // Scroll to top of gallery
      galleryContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGallery);
} else {
  initGallery();
}

