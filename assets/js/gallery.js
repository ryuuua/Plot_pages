// Gallery configuration
const PLOTS_PER_PAGE = 12;

// Define your plots here
const PLOTS = [
  // AG News - 2D PCA Embeddings
  { type: "svg", file: "plots/2d/ag_news_01_pca_embeddings_2d.svg", title: "AG News - 2D PCA Embeddings #01" },
  { type: "svg", file: "plots/2d/ag_news_02_pca_embeddings_2d.svg", title: "AG News - 2D PCA Embeddings #02" },
  { type: "svg", file: "plots/2d/ag_news_03_pca_embeddings_2d.svg", title: "AG News - 2D PCA Embeddings #03" },
  { type: "svg", file: "plots/2d/ag_news_04_pca_embeddings_2d.svg", title: "AG News - 2D PCA Embeddings #04" },
  { type: "svg", file: "plots/2d/ag_news_05_pca_embeddings_2d.svg", title: "AG News - 2D PCA Embeddings #05" },
  { type: "svg", file: "plots/2d/ag_news_06_pca_embeddings_2d.svg", title: "AG News - 2D PCA Embeddings #06" },
  { type: "svg", file: "plots/2d/ag_news_07_pca_embeddings_2d.svg", title: "AG News - 2D PCA Embeddings #07" },
  { type: "svg", file: "plots/2d/ag_news_08_pca_embeddings_2d.svg", title: "AG News - 2D PCA Embeddings #08" },
  
  // AG News - 3D PCA Embeddings
  { type: "svg", file: "plots/3d/ag_news_01_pca_embeddings_3d.svg", title: "AG News - 3D PCA Embeddings #01" },
  { type: "svg", file: "plots/3d/ag_news_02_pca_embeddings_3d.svg", title: "AG News - 3D PCA Embeddings #02" },
  { type: "svg", file: "plots/3d/ag_news_03_pca_embeddings_3d.svg", title: "AG News - 3D PCA Embeddings #03" },
  { type: "svg", file: "plots/3d/ag_news_04_pca_embeddings_3d.svg", title: "AG News - 3D PCA Embeddings #04" },
  { type: "svg", file: "plots/3d/ag_news_05_pca_embeddings_3d.svg", title: "AG News - 3D PCA Embeddings #05" },
  { type: "svg", file: "plots/3d/ag_news_06_pca_embeddings_3d.svg", title: "AG News - 3D PCA Embeddings #06" },
  { type: "svg", file: "plots/3d/ag_news_07_pca_embeddings_3d.svg", title: "AG News - 3D PCA Embeddings #07" },
  { type: "svg", file: "plots/3d/ag_news_08_pca_embeddings_3d.svg", title: "AG News - 3D PCA Embeddings #08" },
  
  // DAIR-AI - 2D PCA Embeddings
  { type: "svg", file: "plots/2d/dair-ai_01_pca_embeddings_2d.svg", title: "DAIR-AI - 2D PCA Embeddings #01" },
  { type: "svg", file: "plots/2d/dair-ai_02_pca_embeddings_2d.svg", title: "DAIR-AI - 2D PCA Embeddings #02" },
  { type: "svg", file: "plots/2d/dair-ai_03_pca_embeddings_2d.svg", title: "DAIR-AI - 2D PCA Embeddings #03" },
  { type: "svg", file: "plots/2d/dair-ai_04_pca_embeddings_2d.svg", title: "DAIR-AI - 2D PCA Embeddings #04" },
  { type: "svg", file: "plots/2d/dair-ai_05_pca_embeddings_2d.svg", title: "DAIR-AI - 2D PCA Embeddings #05" },
  { type: "svg", file: "plots/2d/dair-ai_06_pca_embeddings_2d.svg", title: "DAIR-AI - 2D PCA Embeddings #06" },
  { type: "svg", file: "plots/2d/dair-ai_07_pca_embeddings_2d.svg", title: "DAIR-AI - 2D PCA Embeddings #07" },
  { type: "svg", file: "plots/2d/dair-ai_08_pca_embeddings_2d.svg", title: "DAIR-AI - 2D PCA Embeddings #08" },
  
  // DAIR-AI - 3D PCA Embeddings
  { type: "svg", file: "plots/3d/dair-ai_01_pca_embeddings_3d.svg", title: "DAIR-AI - 3D PCA Embeddings #01" },
  { type: "svg", file: "plots/3d/dair-ai_02_pca_embeddings_3d.svg", title: "DAIR-AI - 3D PCA Embeddings #02" },
  { type: "svg", file: "plots/3d/dair-ai_03_pca_embeddings_3d.svg", title: "DAIR-AI - 3D PCA Embeddings #03" },
  { type: "svg", file: "plots/3d/dair-ai_04_pca_embeddings_3d.svg", title: "DAIR-AI - 3D PCA Embeddings #04" },
  { type: "svg", file: "plots/3d/dair-ai_05_pca_embeddings_3d.svg", title: "DAIR-AI - 3D PCA Embeddings #05" },
  { type: "svg", file: "plots/3d/dair-ai_06_pca_embeddings_3d.svg", title: "DAIR-AI - 3D PCA Embeddings #06" },
  { type: "svg", file: "plots/3d/dair-ai_07_pca_embeddings_3d.svg", title: "DAIR-AI - 3D PCA Embeddings #07" },
  { type: "svg", file: "plots/3d/dair-ai_08_pca_embeddings_3d.svg", title: "DAIR-AI - 3D PCA Embeddings #08" },
  
  // Go Emotions - 2D PCA Embeddings
  { type: "svg", file: "plots/2d/go_emotions_01_pca_embeddings_2d.svg", title: "Go Emotions - 2D PCA Embeddings #01" },
  { type: "svg", file: "plots/2d/go_emotions_02_pca_embeddings_2d.svg", title: "Go Emotions - 2D PCA Embeddings #02" },
  { type: "svg", file: "plots/2d/go_emotions_03_pca_embeddings_2d.svg", title: "Go Emotions - 2D PCA Embeddings #03" },
  { type: "svg", file: "plots/2d/go_emotions_04_pca_embeddings_2d.svg", title: "Go Emotions - 2D PCA Embeddings #04" },
  { type: "svg", file: "plots/2d/go_emotions_05_pca_embeddings_2d.svg", title: "Go Emotions - 2D PCA Embeddings #05" },
  { type: "svg", file: "plots/2d/go_emotions_06_pca_embeddings_2d.svg", title: "Go Emotions - 2D PCA Embeddings #06" },
  { type: "svg", file: "plots/2d/go_emotions_07_pca_embeddings_2d.svg", title: "Go Emotions - 2D PCA Embeddings #07" },
  { type: "svg", file: "plots/2d/go_emotions_08_pca_embeddings_2d.svg", title: "Go Emotions - 2D PCA Embeddings #08" },
  
  // Go Emotions - 3D PCA Embeddings
  { type: "svg", file: "plots/3d/go_emotions_01_pca_embeddings_3d.svg", title: "Go Emotions - 3D PCA Embeddings #01" },
  { type: "svg", file: "plots/3d/go_emotions_02_pca_embeddings_3d.svg", title: "Go Emotions - 3D PCA Embeddings #02" },
  { type: "svg", file: "plots/3d/go_emotions_03_pca_embeddings_3d.svg", title: "Go Emotions - 3D PCA Embeddings #03" },
  { type: "svg", file: "plots/3d/go_emotions_04_pca_embeddings_3d.svg", title: "Go Emotions - 3D PCA Embeddings #04" },
  { type: "svg", file: "plots/3d/go_emotions_05_pca_embeddings_3d.svg", title: "Go Emotions - 3D PCA Embeddings #05" },
  { type: "svg", file: "plots/3d/go_emotions_06_pca_embeddings_3d.svg", title: "Go Emotions - 3D PCA Embeddings #06" },
  { type: "svg", file: "plots/3d/go_emotions_07_pca_embeddings_3d.svg", title: "Go Emotions - 3D PCA Embeddings #07" },
  { type: "svg", file: "plots/3d/go_emotions_08_pca_embeddings_3d.svg", title: "Go Emotions - 3D PCA Embeddings #08" },
  
  // Go Emotions (6 Labels) - 2D PCA Embeddings
  { type: "svg", file: "plots/2d/go_emotions_6labels_01_pca_embeddings_2d.svg", title: "Go Emotions (6 Labels) - 2D PCA Embeddings #01" },
  { type: "svg", file: "plots/2d/go_emotions_6labels_02_pca_embeddings_2d.svg", title: "Go Emotions (6 Labels) - 2D PCA Embeddings #02" },
  { type: "svg", file: "plots/2d/go_emotions_6labels_03_pca_embeddings_2d.svg", title: "Go Emotions (6 Labels) - 2D PCA Embeddings #03" },
  { type: "svg", file: "plots/2d/go_emotions_6labels_04_pca_embeddings_2d.svg", title: "Go Emotions (6 Labels) - 2D PCA Embeddings #04" },
  { type: "svg", file: "plots/2d/go_emotions_6labels_05_pca_embeddings_2d.svg", title: "Go Emotions (6 Labels) - 2D PCA Embeddings #05" },
  { type: "svg", file: "plots/2d/go_emotions_6labels_06_pca_embeddings_2d.svg", title: "Go Emotions (6 Labels) - 2D PCA Embeddings #06" },
  { type: "svg", file: "plots/2d/go_emotions_6labels_07_pca_embeddings_2d.svg", title: "Go Emotions (6 Labels) - 2D PCA Embeddings #07" },
  { type: "svg", file: "plots/2d/go_emotions_6labels_08_pca_embeddings_2d.svg", title: "Go Emotions (6 Labels) - 2D PCA Embeddings #08" },
  
  // Go Emotions (6 Labels) - 3D PCA Embeddings
  { type: "svg", file: "plots/3d/go_emotions_6labels_01_pca_embeddings_3d.svg", title: "Go Emotions (6 Labels) - 3D PCA Embeddings #01" },
  { type: "svg", file: "plots/3d/go_emotions_6labels_02_pca_embeddings_3d.svg", title: "Go Emotions (6 Labels) - 3D PCA Embeddings #02" },
  { type: "svg", file: "plots/3d/go_emotions_6labels_03_pca_embeddings_3d.svg", title: "Go Emotions (6 Labels) - 3D PCA Embeddings #03" },
  { type: "svg", file: "plots/3d/go_emotions_6labels_04_pca_embeddings_3d.svg", title: "Go Emotions (6 Labels) - 3D PCA Embeddings #04" },
  { type: "svg", file: "plots/3d/go_emotions_6labels_05_pca_embeddings_3d.svg", title: "Go Emotions (6 Labels) - 3D PCA Embeddings #05" },
  { type: "svg", file: "plots/3d/go_emotions_6labels_06_pca_embeddings_3d.svg", title: "Go Emotions (6 Labels) - 3D PCA Embeddings #06" },
  { type: "svg", file: "plots/3d/go_emotions_6labels_07_pca_embeddings_3d.svg", title: "Go Emotions (6 Labels) - 3D PCA Embeddings #07" },
  { type: "svg", file: "plots/3d/go_emotions_6labels_08_pca_embeddings_3d.svg", title: "Go Emotions (6 Labels) - 3D PCA Embeddings #08" },
  
  // Go Emotions (Single Label) - 2D PCA Embeddings
  { type: "svg", file: "plots/2d/go_emotions_single_label_01_pca_embeddings_2d.svg", title: "Go Emotions (Single Label) - 2D PCA Embeddings #01" },
  { type: "svg", file: "plots/2d/go_emotions_single_label_02_pca_embeddings_2d.svg", title: "Go Emotions (Single Label) - 2D PCA Embeddings #02" },
  { type: "svg", file: "plots/2d/go_emotions_single_label_03_pca_embeddings_2d.svg", title: "Go Emotions (Single Label) - 2D PCA Embeddings #03" },
  { type: "svg", file: "plots/2d/go_emotions_single_label_04_pca_embeddings_2d.svg", title: "Go Emotions (Single Label) - 2D PCA Embeddings #04" },
  { type: "svg", file: "plots/2d/go_emotions_single_label_05_pca_embeddings_2d.svg", title: "Go Emotions (Single Label) - 2D PCA Embeddings #05" },
  { type: "svg", file: "plots/2d/go_emotions_single_label_06_pca_embeddings_2d.svg", title: "Go Emotions (Single Label) - 2D PCA Embeddings #06" },
  { type: "svg", file: "plots/2d/go_emotions_single_label_07_pca_embeddings_2d.svg", title: "Go Emotions (Single Label) - 2D PCA Embeddings #07" },
  { type: "svg", file: "plots/2d/go_emotions_single_label_08_pca_embeddings_2d.svg", title: "Go Emotions (Single Label) - 2D PCA Embeddings #08" },
  
  // Go Emotions (Single Label) - 3D PCA Embeddings
  { type: "svg", file: "plots/3d/go_emotions_single_label_01_pca_embeddings_3d.svg", title: "Go Emotions (Single Label) - 3D PCA Embeddings #01" },
  { type: "svg", file: "plots/3d/go_emotions_single_label_02_pca_embeddings_3d.svg", title: "Go Emotions (Single Label) - 3D PCA Embeddings #02" },
  { type: "svg", file: "plots/3d/go_emotions_single_label_03_pca_embeddings_3d.svg", title: "Go Emotions (Single Label) - 3D PCA Embeddings #03" },
  { type: "svg", file: "plots/3d/go_emotions_single_label_04_pca_embeddings_3d.svg", title: "Go Emotions (Single Label) - 3D PCA Embeddings #04" },
  { type: "svg", file: "plots/3d/go_emotions_single_label_05_pca_embeddings_3d.svg", title: "Go Emotions (Single Label) - 3D PCA Embeddings #05" },
  { type: "svg", file: "plots/3d/go_emotions_single_label_06_pca_embeddings_3d.svg", title: "Go Emotions (Single Label) - 3D PCA Embeddings #06" },
  { type: "svg", file: "plots/3d/go_emotions_single_label_07_pca_embeddings_3d.svg", title: "Go Emotions (Single Label) - 3D PCA Embeddings #07" },
  { type: "svg", file: "plots/3d/go_emotions_single_label_08_pca_embeddings_3d.svg", title: "Go Emotions (Single Label) - 3D PCA Embeddings #08" },
  
  // Twenty Newsgroups - 2D PCA Embeddings
  { type: "svg", file: "plots/2d/twenty_newsgroups_01_pca_embeddings_2d.svg", title: "Twenty Newsgroups - 2D PCA Embeddings #01" },
  { type: "svg", file: "plots/2d/twenty_newsgroups_02_pca_embeddings_2d.svg", title: "Twenty Newsgroups - 2D PCA Embeddings #02" },
  { type: "svg", file: "plots/2d/twenty_newsgroups_03_pca_embeddings_2d.svg", title: "Twenty Newsgroups - 2D PCA Embeddings #03" },
  { type: "svg", file: "plots/2d/twenty_newsgroups_04_pca_embeddings_2d.svg", title: "Twenty Newsgroups - 2D PCA Embeddings #04" },
  { type: "svg", file: "plots/2d/twenty_newsgroups_05_pca_embeddings_2d.svg", title: "Twenty Newsgroups - 2D PCA Embeddings #05" },
  { type: "svg", file: "plots/2d/twenty_newsgroups_06_pca_embeddings_2d.svg", title: "Twenty Newsgroups - 2D PCA Embeddings #06" },
  { type: "svg", file: "plots/2d/twenty_newsgroups_07_pca_embeddings_2d.svg", title: "Twenty Newsgroups - 2D PCA Embeddings #07" },
  { type: "svg", file: "plots/2d/twenty_newsgroups_08_pca_embeddings_2d.svg", title: "Twenty Newsgroups - 2D PCA Embeddings #08" },
  
  // Twenty Newsgroups - 3D PCA Embeddings
  { type: "svg", file: "plots/3d/twenty_newsgroups_01_pca_embeddings_3d.svg", title: "Twenty Newsgroups - 3D PCA Embeddings #01" },
  { type: "svg", file: "plots/3d/twenty_newsgroups_02_pca_embeddings_3d.svg", title: "Twenty Newsgroups - 3D PCA Embeddings #02" },
  { type: "svg", file: "plots/3d/twenty_newsgroups_03_pca_embeddings_3d.svg", title: "Twenty Newsgroups - 3D PCA Embeddings #03" },
  { type: "svg", file: "plots/3d/twenty_newsgroups_04_pca_embeddings_3d.svg", title: "Twenty Newsgroups - 3D PCA Embeddings #04" },
  { type: "svg", file: "plots/3d/twenty_newsgroups_05_pca_embeddings_3d.svg", title: "Twenty Newsgroups - 3D PCA Embeddings #05" },
  { type: "svg", file: "plots/3d/twenty_newsgroups_06_pca_embeddings_3d.svg", title: "Twenty Newsgroups - 3D PCA Embeddings #06" },
  { type: "svg", file: "plots/3d/twenty_newsgroups_07_pca_embeddings_3d.svg", title: "Twenty Newsgroups - 3D PCA Embeddings #07" },
  { type: "svg", file: "plots/3d/twenty_newsgroups_08_pca_embeddings_3d.svg", title: "Twenty Newsgroups - 3D PCA Embeddings #08" }
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

