document.addEventListener('DOMContentLoaded', () => {

    const toolsData = [
        {
            category: "🖼️ Image Tools",
            description: "Edit, convert, and optimize your images with ease.",
            tools: [
                { name: "Image Converter", desc: "Convert images to JPG, PNG, WEBP, etc.", icon: "fa-solid fa-sync" },
                { name: "Image Compressor", desc: "Reduce image file size without losing quality.", icon: "fa-solid fa-compress" },
                { name: "Resizer", desc: "Change the dimensions of your images.", icon: "fa-solid fa-crop-simple" },
                { name: "Cropper", desc: "Crop images to a specific area.", icon: "fa-solid fa-crop" },
                { name: "OCR", desc: "Extract text from images.", icon: "fa-solid fa-file-alt" },
                { name: "Rotator", desc: "Rotate images by 90, 180, or 270 degrees.", icon: "fa-solid fa-rotate" }
            ]
        },
        {
            category: "📄 Document Tools",
            description: "Powerful tools to manage your PDF and other documents.",
            tools: [
                { name: "PDF to Word", desc: "Convert PDF files to editable Word documents.", icon: "fa-solid fa-file-word" },
                { name: "PDF Compressor", desc: "Reduce the file size of your PDFs.", icon: "fa-solid fa-file-zipper" },
                { name: "Merger/Splitter", desc: "Combine multiple PDFs or split one into many.", icon: "fa-solid fa-object-ungroup" },
                { name: "Converter", desc: "Convert various document formats.", icon: "fa-solid fa-file-export" },
                { name: "Lock/Unlock PDF", desc: "Add or remove password protection.", icon: "fa-solid fa-lock" },
                { name: "eSign PDF", desc: "Sign your documents electronically.", icon: "fa-solid fa-signature" }
            ]
        },
        {
            category: "🧮 Calculator Tools",
            description: "A collection of calculators for various needs.",
            tools: [
                { name: "Scientific Calculator", desc: "For complex mathematical calculations.", icon: "fa-solid fa-calculator" },
                { name: "Age Calculator", desc: "Find your exact age.", icon: "fa-solid fa-birthday-cake" },
                { name: "BMI Calculator", desc: "Calculate your Body Mass Index.", icon: "fa-solid fa-weight-scale" },
                { name: "Loan EMI Calculator", desc: "Estimate your loan payments.", icon: "fa-solid fa-hand-holding-dollar" },
                { name: "GST Calculator", desc: "Calculate Goods and Services Tax.", icon: "fa-solid fa-percent" },
                { name: "Currency Converter", desc: "Convert between different currencies.", icon: "fa-solid fa-coins" }
            ]
        },
        {
            category: "🔤 Text Tools",
            description: "Manipulate and analyze your text effortlessly.",
            tools: [
                { name: "Case Converter", desc: "Change text to uppercase, lowercase, etc.", icon: "fa-solid fa-font" },
                { name: "Word Counter", desc: "Count words, characters, and lines.", icon: "fa-solid fa-file-word" },
                { name: "Remove Duplicates", desc: "Delete duplicate lines from text.", icon: "fa-solid fa-clone" },
                { name: "Sorter", desc: "Sort lines of text alphabetically.", icon: "fa-solid fa-sort-alpha-down" },
                { name: "Reverser", desc: "Reverse text, words, or lines.", icon: "fa-solid fa-retweet" },
                { name: "Encryptor/Decryptor", desc: "Securely encrypt and decrypt text.", icon: "fa-solid fa-key" }
            ]
        },
        {
            category: "🌐 Web/Developer Tools",
            description: "Essential tools for web developers and programmers.",
            tools: [
                { name: "HTML/CSS/JS Minifier", desc: "Reduce the file size of your code.", icon: "fa-solid fa-file-code" },
                { name: "JSON Formatter", desc: "Beautify and validate your JSON.", icon: "fa-solid fa-sitemap" },
                { name: "Base64 Encoder", desc: "Encode or decode Base64 strings.", icon: "fa-solid fa-shield-alt" },
                { name: "URL Encoder", desc: "Encode or decode URL components.", icon: "fa-solid fa-link" },
                { name: "Color Picker", desc: "Pick colors from a visual wheel.", icon: "fa-solid fa-eye-dropper" },
                { name: "Regex Tester", desc: "Test your regular expressions.", icon: "fa-solid fa-laptop-code" }
            ]
        },
        {
            category: "🎨 Color Tools",
            description: "Generate, convert, and test color palettes.",
            tools: [
                { name: "Picker from Image", desc: "Extract a color palette from an image.", icon: "fa-solid fa-image" },
                { name: "HEX to RGB", desc: "Convert HEX color codes to RGB and vice-versa.", icon: "fa-solid fa-exchange-alt" },
                { name: "Gradient Generator", desc: "Create beautiful CSS gradients.", icon: "fa-solid fa-paint-brush" },
                { name: "Contrast Checker", desc: "Check color contrast for accessibility.", icon: "fa-solid fa-adjust" },
                { name: "Palette Generator", desc: "Create harmonious color palettes.", icon: "fa-solid fa-palette" },
                { name: "Color Blindness Simulator", desc: "See how your colors look to others.", icon: "fa-solid fa-eye" }
            ]
        },
        {
            category: "🌍 SEO & Marketing Tools",
            description: "Optimize your content for search engines.",
            tools: [
                { name: "Keyword Density Checker", desc: "Analyze keyword frequency in your text.", icon: "fa-solid fa-search-dollar" },
                { name: "Meta Tag Analyzer", desc: "Check your website's meta tags.", icon: "fa-solid fa-tags" },
                { name: "Word Counter", desc: "Count words, characters, and sentences.", icon: "fa-solid fa-file-alt" }
            ]
        },
        {
            category: "🛠️ Utility Tools",
            description: "Handy utilities for everyday digital tasks.",
            tools: [
                { name: "QR & Barcode Generator", desc: "Create QR codes and barcodes.", icon: "fa-solid fa-qrcode" },
                { name: "UUID Generator", desc: "Generate universally unique identifiers.", icon: "fa-solid fa-fingerprint" },
                { name: "Unit Converter", desc: "Convert various units of measurement.", icon: "fa-solid fa-ruler-combined" },
                { name: "Time Zone Converter", desc: "Convert times between different time zones.", icon: "fa-solid fa-clock" },
                { name: "Password Generator", desc: "Create strong, random passwords.", icon: "fa-solid fa-key" }
            ]
        }
    ];

    const toolGridContainer = document.getElementById('tool-grid-container');
    const searchBar = document.getElementById('search-bar');
    const noResultsMessage = document.getElementById('no-results-message');

    // --- Helper function to create URL-friendly slugs ---
    const slugify = text => 
        text.toLowerCase()
            .replace(/\s+/g, '-')       // Replace spaces with -
            .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
            .replace(/\-\-+/g, '-')     // Replace multiple - with single -
            .replace(/^-+/, '')         // Trim - from start of text
            .replace(/-+$/, '');        // Trim - from end of text

    // --- 1. Pre-process data to add URL property ---
    toolsData.forEach(category => {
        category.tools.forEach(tool => {
            tool.url = `tool/${slugify(tool.name)}.html`;
        });
    });

    // --- 2. Generate Tool Cards ---
    function generateTools() {
        let content = '';
        toolsData.forEach(category => {
            content += `
                <div class="tool-category">
                    <h2>${category.category}</h2>
                    <p class="category-description">${category.description}</p>
                    <div class="tool-grid">
                        ${category.tools.map(tool => `
                            <div class="tool-card" data-name="${tool.name.toLowerCase()}" data-desc="${tool.desc.toLowerCase()}">
                                <div class="tool-card-icon"><i class="${tool.icon}"></i></div>
                                <h3>${tool.name}</h3>
                                <p>${tool.desc}</p>
                                <a href="${tool.url}" class="use-tool-btn">Use Tool</a>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        toolGridContainer.innerHTML = content;
    }

    // --- 3. Live Search/Filter ---
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        const toolCards = document.querySelectorAll('.tool-card');
        const categories = document.querySelectorAll('.tool-category');
        let visibleToolsCount = 0;

        toolCards.forEach(card => {
            const name = card.dataset.name;
            const desc = card.dataset.desc;
            const isVisible = name.includes(searchTerm) || desc.includes(searchTerm);
            card.style.display = isVisible ? 'block' : 'none';
            if(isVisible) visibleToolsCount++;
        });

        categories.forEach(category => {
            const visibleCards = category.querySelectorAll('.tool-card[style*="display: block"]');
            category.style.display = visibleCards.length > 0 ? 'block' : 'none';
        });

        noResultsMessage.classList.toggle('hidden', visibleToolsCount > 0);
    });
    
    // --- 4. Sticky Header ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            if(document.body.classList.contains('dark-mode')){
                header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.4)';
            }
        } else {
            header.style.boxShadow = '0 2px 10px var(--shadow-color)';
        }
    });

    // --- 5. Scroll Reveal Animations for Tool Cards ---
    function setupScrollAnimations() {
        const cards = document.querySelectorAll('.tool-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        cards.forEach(card => {
            observer.observe(card);
        });
    }
    
    // --- 6. Light/Dark Mode Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        if (isDarkMode) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
        // Manually trigger scroll handler to update header shadow color
        window.dispatchEvent(new Event('scroll'));
    });

    // --- Initial Execution ---
    generateTools();
    setupScrollAnimations();
});