/**
 * Document Portal Application Logic
 * Office of Research and Development, KARE
 */

// Fixed required categories (no "All" option)
const CATEGORIES = [
  "For Scholars",
  "For Supervisors",
  "For SRC Chairman"
];

// Distinct Color Themes for each category
const CATEGORY_THEMES = {
  "For Scholars": {
    name: "For Scholars",
    // Selected: Solid Rich Blue
    active: "bg-blue-600 hover:bg-blue-700 text-white shadow-md ring-3 ring-blue-500/30 border-2 border-blue-600",
    // Unselected: Distinct Light Blue Box with strong border
    inactive: "bg-blue-50 hover:bg-blue-100 text-blue-900 border-2 border-blue-200 hover:border-blue-300",
    badgeActive: "bg-white/25 text-white",
    badgeInactive: "bg-blue-200 text-blue-900",
    tag: "bg-blue-50 text-blue-800 border border-blue-200"
  },
  "For Supervisors": {
    name: "For Supervisors",
    // Selected: Solid Forest Emerald Green
    active: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md ring-3 ring-emerald-500/30 border-2 border-emerald-600",
    // Unselected: Distinct Light Emerald Box with strong border
    inactive: "bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border-2 border-emerald-200 hover:border-emerald-300",
    badgeActive: "bg-white/25 text-white",
    badgeInactive: "bg-emerald-200 text-emerald-900",
    tag: "bg-emerald-50 text-emerald-800 border border-emerald-200"
  },
  "For SRC Chairman": {
    name: "For SRC Chairman",
    // Selected: Solid Royal Purple
    active: "bg-purple-600 hover:bg-purple-700 text-white shadow-md ring-3 ring-purple-500/30 border-2 border-purple-600",
    // Unselected: Distinct Light Purple Box with strong border
    inactive: "bg-purple-50 hover:bg-purple-100 text-purple-900 border-2 border-purple-200 hover:border-purple-300",
    badgeActive: "bg-white/25 text-white",
    badgeInactive: "bg-purple-200 text-purple-900",
    tag: "bg-purple-50 text-purple-800 border border-purple-200"
  }
};

let state = {
  searchQuery: '',
  activeCategory: 'For Scholars', // Default to first category
  sortBy: 'name-asc',
  viewMode: 'grid', // 'grid' | 'list'
};

// DOM Elements
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search-btn');
const sortSelect = document.getElementById('sort-select');
const categoryChipsContainer = document.getElementById('category-chips');
const documentsGrid = document.getElementById('documents-grid');
const documentsTableWrapper = document.getElementById('documents-table-wrapper');
const documentsTableBody = document.getElementById('documents-table-body');
const emptyState = document.getElementById('empty-state');
const emptyStateTitle = document.getElementById('empty-state-title');
const emptyStateDesc = document.getElementById('empty-state-desc');
const resultsCountText = document.getElementById('results-count-text');
const btnResetFilters = document.getElementById('btn-reset-filters');
const btnViewGrid = document.getElementById('btn-view-grid');
const btnViewList = document.getElementById('btn-view-list');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const currentYearSpan = document.getElementById('current-year');

// Set current year
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

// Initialize Application
function init() {
  renderCategoryChips();
  setupEventListeners();
  renderDocuments();
}

// Generate the 3 Category Filter Buttons (No "All" option, Larger Font, Distinct Colors)
function renderCategoryChips() {
  categoryChipsContainer.innerHTML = '';

  CATEGORIES.forEach(cat => {
    const isSelected = state.activeCategory === cat;
    const theme = CATEGORY_THEMES[cat] || CATEGORY_THEMES["For Scholars"];
    
    // Count documents for this category
    const docCount = documentsData.filter(d => 
      (d.category || '').trim().toLowerCase() === cat.trim().toLowerCase()
    ).length;

    const btn = document.createElement('button');
    btn.type = 'button';
    // Font size increased by 2 levels: from text-xs (12px) to text-base (16px) font-bold
    btn.className = `inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-xl text-base font-bold transition-all whitespace-nowrap cursor-pointer ${
      isSelected ? theme.active : theme.inactive
    }`;

    btn.innerHTML = `
      <span>${cat}</span>
      <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-black ${
        isSelected ? theme.badgeActive : theme.badgeInactive
      }">${docCount}</span>
    `;

    btn.addEventListener('click', () => {
      state.activeCategory = cat;
      renderCategoryChips();
      renderDocuments();
    });

    categoryChipsContainer.appendChild(btn);
  });
}

// Setup Event Listeners
function setupEventListeners() {
  // Search input
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    clearSearchBtn.classList.toggle('hidden', state.searchQuery === '');
    renderDocuments();
  });

  // Clear search button
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    clearSearchBtn.classList.add('hidden');
    searchInput.focus();
    renderDocuments();
  });

  // Sort dropdown
  sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderDocuments();
  });

  // Reset filters button
  if (btnResetFilters) {
    btnResetFilters.addEventListener('click', () => {
      state.searchQuery = '';
      searchInput.value = '';
      clearSearchBtn.classList.add('hidden');
      renderDocuments();
    });
  }

  // View toggles
  btnViewGrid.addEventListener('click', () => setViewMode('grid'));
  btnViewList.addEventListener('click', () => setViewMode('list'));
}

function setViewMode(mode) {
  state.viewMode = mode;
  if (mode === 'grid') {
    btnViewGrid.className = 'p-1.5 rounded-lg text-brand-600 bg-white shadow-xs transition';
    btnViewList.className = 'p-1.5 rounded-lg text-slate-500 hover:text-slate-800 transition';
    documentsGrid.classList.remove('hidden');
    documentsTableWrapper.classList.add('hidden');
  } else {
    btnViewList.className = 'p-1.5 rounded-lg text-brand-600 bg-white shadow-xs transition';
    btnViewGrid.className = 'p-1.5 rounded-lg text-slate-500 hover:text-slate-800 transition';
    documentsGrid.classList.add('hidden');
    documentsTableWrapper.classList.remove('hidden');
  }
}

// Natural Alphanumeric Sort Function (correctly sorts 1, 2, 3 ... 9, 10, 11, 12, etc.)
function naturalSortCompare(a, b) {
  const strA = String(a || '').trim();
  const strB = String(b || '').trim();

  // Extract leading digits (e.g., "1.", "10.", "2. Course")
  const aMatch = strA.match(/^(\d+)/);
  const bMatch = strB.match(/^(\d+)/);

  if (aMatch && bMatch) {
    const numA = parseInt(aMatch[1], 10);
    const numB = parseInt(bMatch[1], 10);
    if (numA !== numB) {
      return numA - numB;
    }
  } else if (aMatch && !bMatch) {
    return -1;
  } else if (!aMatch && bMatch) {
    return 1;
  }

  return strA.localeCompare(strB, undefined, { numeric: true, sensitivity: 'base' });
}

// Filter and Sort Documents (Strictly filtered by selected Category)
function getFilteredDocuments() {
  return documentsData.filter(doc => {
    // Exact category match (case-insensitive)
    const matchCat = (doc.category || '').trim().toLowerCase() === state.activeCategory.trim().toLowerCase();

    // Search query match within the selected category
    const matchQuery = !state.searchQuery || 
      doc.title.toLowerCase().includes(state.searchQuery) ||
      (doc.description && doc.description.toLowerCase().includes(state.searchQuery)) ||
      doc.filename.toLowerCase().includes(state.searchQuery);

    return matchCat && matchQuery;
  }).sort((a, b) => {
    if (state.sortBy === 'name-asc') {
      return naturalSortCompare(a.title, b.title);
    } else if (state.sortBy === 'name-desc') {
      return naturalSortCompare(b.title, a.title);
    }
    return 0;
  });
}

// Show Toast Notification
let toastTimer = null;
function showToast(msg) {
  toastMessage.textContent = msg;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 2500);
}

// Render Documents
function renderDocuments() {
  const filtered = getFilteredDocuments();
  resultsCountText.textContent = `Showing ${filtered.length} file${filtered.length === 1 ? '' : 's'} for ${state.activeCategory}`;

  if (filtered.length === 0) {
    documentsGrid.classList.add('hidden');
    documentsTableWrapper.classList.add('hidden');
    emptyState.classList.remove('hidden');

    if (state.searchQuery) {
      if (emptyStateTitle) emptyStateTitle.textContent = 'No matching documents';
      if (emptyStateDesc) emptyStateDesc.textContent = `No documents found matching "${state.searchQuery}" in ${state.activeCategory}.`;
    } else {
      if (emptyStateTitle) emptyStateTitle.textContent = `No documents under "${state.activeCategory}" yet`;
      if (emptyStateDesc) emptyStateDesc.textContent = `Documents registered under category "${state.activeCategory}" will appear here.`;
    }
    return;
  }

  emptyState.classList.add('hidden');
  if (state.viewMode === 'grid') {
    documentsGrid.classList.remove('hidden');
    documentsTableWrapper.classList.add('hidden');
  } else {
    documentsGrid.classList.add('hidden');
    documentsTableWrapper.classList.remove('hidden');
  }

  // Render Grid Cards
  documentsGrid.innerHTML = filtered.map(doc => {
    const filePath = `files/${encodeURIComponent(doc.filename)}`;
    const theme = CATEGORY_THEMES[doc.category] || CATEGORY_THEMES["For Scholars"];
    return `
      <div class="group bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-md hover:border-brand-200 transition-all flex flex-col justify-between">
        <div class="space-y-3">
          <!-- Top Category Tag -->
          <div class="flex items-center justify-between">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold ${theme.tag}">
              ${doc.category}
            </span>
            <span class="inline-flex items-center text-xs text-slate-400 font-mono">
              ${doc.version || 'DOCX'}
            </span>
          </div>

          <!-- Title & Icon -->
          <div class="flex items-start space-x-3.5">
            <div class="w-11 h-11 shrink-0 rounded-xl badge-word flex flex-col items-center justify-center text-white shadow-xs font-bold leading-none">
              <span class="text-sm">W</span>
              <span class="text-[9px] uppercase tracking-tighter opacity-80 font-normal">DOCX</span>
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="text-base font-bold text-slate-900 group-hover:text-brand-600 transition leading-snug truncate" title="${doc.title}">
                ${doc.title}
              </h3>
              <p class="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                ${doc.description || 'Official document format.'}
              </p>
            </div>
          </div>
        </div>

        <!-- 1-Click Direct Download Button -->
        <div class="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span class="text-xs text-slate-400 font-mono truncate max-w-[160px] sm:max-w-[200px]" title="${doc.filename}">
            ${doc.filename}
          </span>

          <a 
            href="${filePath}" 
            download="${doc.filename}"
            onclick="showToast('Downloading ${doc.filename.replace(/'/g, "\\'")}...')"
            class="inline-flex items-center space-x-1.5 px-4 py-2 bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-medium text-xs rounded-xl shadow-xs shadow-brand-600/20 transition-all cursor-pointer"
            title="Download ${doc.filename}"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            <span>Download</span>
          </a>
        </div>
      </div>
    `;
  }).join('');

  // Render Table Rows (List View)
  documentsTableBody.innerHTML = filtered.map(doc => {
    const filePath = `files/${encodeURIComponent(doc.filename)}`;
    const theme = CATEGORY_THEMES[doc.category] || CATEGORY_THEMES["For Scholars"];
    return `
      <tr class="hover:bg-slate-50/80 transition group">
        <td class="py-3.5 px-4 sm:px-6">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 shrink-0 rounded-lg badge-word flex items-center justify-center text-white font-bold text-xs">
              W
            </div>
            <div class="min-w-0">
              <div class="font-semibold text-slate-900 group-hover:text-brand-600 transition truncate max-w-xs sm:max-w-md">
                ${doc.title}
              </div>
              <div class="text-xs text-slate-400 truncate max-w-xs sm:max-w-md">
                ${doc.filename}
              </div>
            </div>
          </div>
        </td>
        <td class="py-3.5 px-4 hidden sm:table-cell text-xs">
          <span class="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-bold ${theme.tag}">
            ${doc.category}
          </span>
        </td>
        <td class="py-3.5 px-4 text-right">
          <a 
            href="${filePath}" 
            download="${doc.filename}"
            onclick="showToast('Downloading ${doc.filename.replace(/'/g, "\\'")}...')"
            class="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-brand-50 hover:bg-brand-600 text-brand-600 hover:text-white font-medium text-xs rounded-lg transition-colors cursor-pointer"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            <span>Download</span>
          </a>
        </td>
      </tr>
    `;
  }).join('');
}

// Start app on DOM load
document.addEventListener('DOMContentLoaded', init);
