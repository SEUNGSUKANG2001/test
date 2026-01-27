import { pages } from './pages.js';

export class Router {
    constructor() {
        this.appContainer = document.getElementById('app-content');
        this.breadcrumbContainer = document.getElementById('breadcrumb-container');
        this.currentPageId = null;

        // Handle browser back/forward
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.pageId) {
                this.render(e.state.pageId);
            } else {
                // Determine page from path on popstate if state is missing
                const path = window.location.pathname.substring(1);
                this.render(path || 'dashboard');
            }
        });

        // Handle initial load
        const initialPath = window.location.pathname.substring(1);
        this.render(initialPath || 'dashboard');
    }

    navigateTo(pageId) {
        if (!pages[pageId]) {
            console.error(`Page not found: ${pageId}`);
            return;
        }

        // Push state for history
        history.pushState({ pageId }, '', `/${pageId}`);
        this.render(pageId);
    }

    render(pageId) {
        // Handle lifecycle: onLeave for previous page
        if (this.currentPageId && pages[this.currentPageId] && pages[this.currentPageId].onLeave) {
            pages[this.currentPageId].onLeave();
        }

        const page = pages[pageId];
        this.currentPageId = pageId;

        // 1. Render Breadcrumbs (if enabled)
        this.renderBreadcrumbs(page);

        // 2. Render Content
        // We use a simple innerHTML replacement for this dummy app.
        // In a real app, we might use more complex DOM manipulation or a framework.
        if (page) {
            this.appContainer.innerHTML = `
                <div class="page-container fade-in">
                    ${page.content}
                </div>
            `;
        } else {
            // Fallback if page is not found (e.g. invalid URL)
            this.appContainer.innerHTML = `
                <div class="page-container fade-in">
                    <h2>Page Not Found</h2>
                    <p>The requested page could not be found.</p>
                </div>
            `;
            return;
        }


        // Update active state in sidebar (if exists)
        this.updateSidebarActiveState(pageId);

        // Handle lifecycle: onEnter for new page
        if (page.onEnter) {
            page.onEnter();
        }
    }

    renderBreadcrumbs(page) {
        if (!page.showLocation) {
            this.breadcrumbContainer.innerHTML = '';
            this.breadcrumbContainer.style.display = 'none';
            return;
        }

        this.breadcrumbContainer.style.display = 'block';
        const chain = this.getPageChain(page);

        // Generate breadcrumb HTML
        const breadcrumbHtml = `
            <nav aria-label="Breadcrumb">
                <ol class="breadcrumb">
                    ${chain.map((p, index) => {
            const isLast = index === chain.length - 1;
            if (isLast) {
                return `<li aria-current="page">${p.title}</li>`;
            }
            // Use path in href, prevent default behavior in onclick
            return `<li><a href="/${p.id}" onclick="event.preventDefault(); window.router.navigateTo('${p.id}');">${p.title}</a></li>`;
        }).join('')}
                </ol>
            </nav>
        `;

        this.breadcrumbContainer.innerHTML = breadcrumbHtml;
    }

    getPageChain(page) {
        const chain = [page];
        let current = page;

        // Traverse up the parent tree
        while (current.parent && pages[current.parent]) {
            current = pages[current.parent];
            chain.unshift(current); // Add to beginning
        }

        // If not already at dashboard/root, we ideally want to show Home/Dashboard first?
        // Let's assume 'dashboard' is root if the chain doesn't start with it, 
        // unless the page is intentionally isolated.
        if (chain[0].id !== 'dashboard') {
            chain.unshift(pages['dashboard']);
        }

        // Remove duplicates if any
        return [...new Set(chain)];
    }

    updateSidebarActiveState(pageId) {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');

            // Check if this link corresponds to current page or one of its parents
            const targetId = link.getAttribute('data-page');
            if (targetId === pageId || (pages[pageId] && pages[pageId].parent === targetId)) {
                link.classList.add('active');
                if (targetId === pageId) {
                    link.setAttribute('aria-current', 'page');
                }
            }
        });
    }
}
