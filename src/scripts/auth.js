import { Router } from './router.js';

// Auto-initialize Router
window.router = new Router();

// Check for existing path
const initialPath = window.location.pathname.substring(1);
// Router constructor already handles initial render based on path
// So we don't strictly need to call navigateTo unless we want to force a default if path is empty
if (!initialPath) {
    window.router.navigateTo('dashboard');
}

// Update UI to show main view immediately
const loginView = document.getElementById('login-view');
const mainView = document.getElementById('main-view');

if (loginView) loginView.remove(); // Remove login view entirely
if (mainView) mainView.hidden = false;

// Set default user name
const userDisplay = document.getElementById('user-display');
if (userDisplay) userDisplay.textContent = 'TestUser님';

// Dummy logout just reloads or does nothing
window.logout = function () {
    alert('Logout disabled for this testbed.');
};
