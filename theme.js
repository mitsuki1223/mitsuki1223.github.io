// Theme toggle functionality
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleIcon = themeToggle.querySelector('.theme-toggle-icon');
    
    // Check for saved theme preference, otherwise use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'bright';
        document.documentElement.setAttribute('data-theme', systemTheme);
        updateThemeIcon(systemTheme);
    }

    // Toggle theme function
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'bright' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

// Update theme icon
function updateThemeIcon(theme) {
    const themeToggleIcon = document.querySelector('.theme-toggle-icon');
    if (themeToggleIcon) {
        themeToggleIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', initTheme);
