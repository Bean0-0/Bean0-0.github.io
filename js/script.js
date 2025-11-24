const app = () => {
    initTheme();
}

const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'alpine';
    const savedColors = localStorage.getItem('themeColors');

    if (savedColors) {
        applyThemeColors(JSON.parse(savedColors));
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        setTheme(savedTheme);
    }
    
    // Initialize toggle button icon if it exists
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
        updateToggleIcon(savedTheme);
        
        toggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'alpine' : 'light';
            setTheme(newTheme);
        });
    }
}

const setTheme = (themeName) => {
    // Check if we have the themes object (loaded on style.html)
    if (window.themes && window.themes[themeName]) {
        const themeData = window.themes[themeName];
        applyThemeColors(themeData.colors);
        localStorage.setItem('themeColors', JSON.stringify(themeData.colors));
    } else {
        // If switching to a default/preset theme, clear custom colors
        if (themeName === 'default' || themeName === 'alpine' || themeName === 'light' || themeName === 'midnight' || themeName === 'forest' || themeName === 'opaline') {
             localStorage.removeItem('themeColors');
             document.documentElement.removeAttribute('style');
        }
    }

    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);
    updateToggleIcon(themeName);
}

const applyThemeColors = (colors) => {
    const root = document.documentElement;
    for (const [property, value] of Object.entries(colors)) {
        root.style.setProperty(property, value);
    }
}

const updateToggleIcon = (themeName) => {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (!toggleBtn) return;
    
    const icon = toggleBtn.querySelector('i');
    if (themeName === 'light') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

app();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
