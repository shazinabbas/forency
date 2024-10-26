// Function to load the sidebar dynamically
async function loadSidebar() {
    try {
        const response = await fetch('sidebar.html');
        const sidebarHTML = await response.text();
        document.body.insertAdjacentHTML('afterbegin', sidebarHTML); // Add sidebar to the top of the body
        setActiveLink(); // Call the function to set the active link after loading
    } catch (error) {
        console.error('Error loading sidebar:', error);
    }
}

// Function to set the active sidebar item
function setActiveLink() {
    const currentPage = window.location.pathname.split("/").pop();
    const navItems = {
        "dashboard.html": "nav-dashboard",
        "currencyExchange.html": "nav-currency-exchange",
        "p2p.html": "nav-p2p-exchange", 
        "triangle.html": "nav-triangle-exchange",
        "transaction-history.html": "nav-transaction-history",
        "settings.html": "nav-settings"

    };

    console.log("Current page:", currentPage); // Debugging line

    // Remove active class from all nav items
    for (const key in navItems) {
        const navItem = document.getElementById(navItems[key]);
        if (navItem) {
            navItem.classList.remove('active');
        }
    }

    // Add active class to the current nav item
    if (navItems[currentPage]) {
        const activeNavItem = document.getElementById(navItems[currentPage]);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
            console.log("Active nav item set to:", activeNavItem); // Debugging line
        }
    }
}

// Call the function to load the sidebar
window.onload = loadSidebar;
