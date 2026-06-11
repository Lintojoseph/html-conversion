document.addEventListener('DOMContentLoaded', () => {
  // 1. VIEW SWITCHER TOGGLE (Dashboard stats vs table only)
  const viewToggle = document.getElementById('dashboard-view-toggle');
  const complianceSection = document.getElementById('compliance-section');

  if (viewToggle && complianceSection) {
    viewToggle.addEventListener('change', (e) => {
      if (e.target.checked) {
        complianceSection.classList.remove('collapsed');
      } else {
        complianceSection.classList.add('collapsed');
      }
    });
  }

  // 2. BRANCH SELECTOR DROPDOWN
  const branchBtn = document.getElementById('branch-btn');
  const branchDropdown = document.getElementById('branch-dropdown');

  if (branchBtn && branchDropdown) {
    branchBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      branchDropdown.classList.toggle('open');
    });

    const options = branchDropdown.querySelectorAll('.branch-option');
    options.forEach(option => {
      option.addEventListener('click', (e) => {
        const textSpan = branchBtn.querySelector('span');
        if (textSpan) {
          textSpan.textContent = e.target.textContent;
        }
        branchDropdown.classList.remove('open');
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      branchDropdown.classList.remove('open');
    });
  }

  // 3. MOBILE MENU TOGGLE
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const sidebar = document.getElementById('sidebar');

  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('drawer-open');
    });

    // Close sidebar drawer when clicking on body/content area
    document.addEventListener('click', (e) => {
      if (sidebar.classList.contains('drawer-open') && !sidebar.contains(e.target) && e.target !== mobileToggle) {
        sidebar.classList.remove('drawer-open');
      }
    });
  }

  // 4. TIMELINE TIMELINE NAVIGATOR (Horizontal Scroll Pagination)
  const scrollContainer = document.querySelector('.table-scroll-container');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnPrevFooter = document.getElementById('btn-prev-footer');
  const btnNextFooter = document.getElementById('btn-next-footer');

  const scrollAmount = 294; // approx 7 columns (one week) * 42px width

  const scrollLeft = () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  if (scrollContainer) {
    if (btnPrev) btnPrev.addEventListener('click', scrollLeft);
    if (btnNext) btnNext.addEventListener('click', scrollRight);
    if (btnPrevFooter) btnPrevFooter.addEventListener('click', scrollLeft);
    if (btnNextFooter) btnNextFooter.addEventListener('click', scrollRight);
  }

  // 5. CELL INTERACTION (Simulate task edit/details)
  const indicators = document.querySelectorAll('.status-indicator');
  indicators.forEach(indicator => {
    indicator.addEventListener('click', (e) => {
      e.stopPropagation();
      const parentRow = e.target.closest('tr');
      const jobName = parentRow.querySelector('.job-link').textContent;
      const tooltipText = e.target.nextElementSibling ? e.target.nextElementSibling.textContent : 'No details';
      
      // Toast notification for user actions
      showToast(`${jobName} - ${tooltipText}`);
    });
  });

  // Simple Toast Helper
  const showToast = (message) => {
    let toast = document.querySelector('.dashboard-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'dashboard-toast';
      document.body.appendChild(toast);
      
      // Add Toast styling inline or using styles.css
      const toastStyle = document.createElement('style');
      toastStyle.textContent = `
        .dashboard-toast {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #1e293b;
          color: white;
          padding: 12px 20px;
          border-radius: 6px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          z-index: 1000;
          font-size: 13px;
          font-weight: 500;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
          pointer-events: none;
        }
        .dashboard-toast.show {
          opacity: 1;
          transform: translateY(0);
        }
      `;
      document.head.appendChild(toastStyle);
    }
    
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  };
});
