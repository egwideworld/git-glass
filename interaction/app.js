class GitWikiApp {
    constructor() {
        this.commands = gitCommands;
        this.categories = ['Todos', ...new Set(gitCommands.map(cmd => cmd.category))];
        this.activeCategory = 'Todos';
        this.currentPage = 1;
        this.itemsPerPage = 6;
        this.searchTerm = '';
        
        this.init();
    }

    init() {
        this.cacheElements();
        this.renderCategories();
        this.renderCommands();
        this.updatePagination();
        this.attachEventListeners();
    }

    cacheElements() {
        this.elements = {
            searchInput: document.getElementById('searchInput'),
            categoriesContainer: document.getElementById('categories'),
            commandsGrid: document.getElementById('commandsGrid'),
            noResults: document.getElementById('noResults'),
            paginationInfo: document.getElementById('paginationInfo'),
            prevBtn: document.getElementById('prevBtn'),
            nextBtn: document.getElementById('nextBtn')
        };
    }

    getFilteredCommands() {
        return this.commands.filter(cmd => {
            const matchesCategory = this.activeCategory === 'Todos' || cmd.category === this.activeCategory;
            const matchesSearch = this.searchTerm === '' || 
                cmd.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                cmd.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                cmd.code.toLowerCase().includes(this.searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }

    getPaginatedCommands() {
        const filtered = this.getFilteredCommands();
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return filtered.slice(startIndex, endIndex);
    }

    getTotalPages() {
        const filtered = this.getFilteredCommands();
        return Math.ceil(filtered.length / this.itemsPerPage);
    }

    renderCategories() {
        this.elements.categoriesContainer.innerHTML = this.categories.map(category => `
            <button class="category-btn ${category === this.activeCategory ? 'active' : ''}" 
                    data-category="${category}">
                ${category}
            </button>
        `).join('');
    }

    renderCommands() {
        const commands = this.getPaginatedCommands();
        
        if (commands.length === 0) {
            this.elements.commandsGrid.innerHTML = '';
            this.elements.noResults.classList.remove('hidden');
            return;
        }

        this.elements.noResults.classList.add('hidden');
        this.elements.commandsGrid.innerHTML = commands.map((cmd, index) => `
            <div class="command-card" style="animation-delay: ${index * 0.05}s">
                <h3 class="command-title">${cmd.title}</h3>
                <div class="command-code">
                    ${this.escapeHtml(cmd.code)}
                    <button class="copy-btn" data-code="${this.escapeHtml(cmd.code)}">Copiar</button>
                </div>
                <p class="command-description">${cmd.description}</p>
                <span class="command-category">${cmd.category}</span>
            </div>
        `).join('');

        this.attachCopyListeners();
    }

    updatePagination() {
        const totalPages = this.getTotalPages();
        const filteredCount = this.getFilteredCommands().length;

        this.elements.paginationInfo.textContent = 
            `Página ${this.currentPage} de ${totalPages} (${filteredCount} comandos)`;
        
        this.elements.prevBtn.disabled = this.currentPage === 1;
        this.elements.nextBtn.disabled = this.currentPage === totalPages || totalPages === 0;
    }

    changePage(direction) {
        const totalPages = this.getTotalPages();
        
        if (direction === 'prev' && this.currentPage > 1) {
            this.currentPage--;
        } else if (direction === 'next' && this.currentPage < totalPages) {
            this.currentPage++;
        }

        this.renderCommands();
        this.updatePagination();
        this.scrollToTop();
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    changeCategory(category) {
        this.activeCategory = category;
        this.currentPage = 1;
        this.renderCategories();
        this.renderCommands();
        this.updatePagination();
    }

    handleSearch(value) {
        this.searchTerm = value;
        this.currentPage = 1;
        this.renderCommands();
        this.updatePagination();
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    attachEventListeners() {
        this.elements.searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        this.elements.categoriesContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('category-btn')) {
                this.changeCategory(e.target.dataset.category);
            }
        });

        this.elements.prevBtn.addEventListener('click', () => {
            this.changePage('prev');
        });

        this.elements.nextBtn.addEventListener('click', () => {
            this.changePage('next');
        });
    }

    attachCopyListeners() {
        const copyButtons = document.querySelectorAll('.copy-btn');
        copyButtons.forEach(btn => {
            btn.addEventListener('click', async () => {
                const code = btn.dataset.code;
                try {
                    await navigator.clipboard.writeText(code);
                    btn.textContent = '✓ Copiado!';
                    btn.classList.add('copied');
                    setTimeout(() => {
                        btn.textContent = 'Copiar';
                        btn.classList.remove('copied');
                    }, 2000);
                } catch (err) {
                    console.error('Erro ao copiar:', err);
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new GitWikiApp();
});