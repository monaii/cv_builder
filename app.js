const defaultData = {
    name: "Mona Pouresmaeil",
    tagline: "MSc Computer Engineering — AI & Data Analytics · Politecnico di Torino · Graduating July 2026 · Available Now",
    medal: "🥈 SemEval 2026 Task 1 — Ranked 2nd Globally · Paper Accepted",
    location: "📍 Turin, Italy — open to remote worldwide",
    phone: "+39 351 353 2803",
    email: "mona.pouresmaeil.it@gmail.com",
    links: [
        { name: "Portfolio", url: "https://monaii.github.io/My_Portfolio/" },
        { name: "GitHub", url: "https://github.com/monaii" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/mona-pouresmaeil-8b04a82b4" },
        { name: "Kaggle", url: "https://www.kaggle.com/monapouresmaeil" }
    ],
    summary: "**AI Engineer** with hands-on experience building **LLM‑based pipelines**, **RAG systems**, and **Agentic AI** applications from scratch.\n**Completed Master’s thesis and AI Engineering internship** at **Brain Technologies**, designing a full **document validation framework** — custom chunking, hybrid retrieval, and compliance verification in pure Python.\nCo‑author of an **accepted SemEval 2026 paper** on humor generation via RAG and DPO alignment, ranked **2nd globally**.\n**MSc Computer Engineering at Politecnico di Torino expected to be completed in July 2026**; **available immediately** for junior AI/ML/LLM roles.\nOpen to remote work worldwide or on‑site in Turin and North Italy.",
    experience: [
        {
            title: "AI Engineer Intern",
            date: "Jan 2026 – May 2026",
            org: "Brain Technologies · Turin, Italy · On-site",
            bullets: "Worked on an industry thesis project focused on automated validation of technical and compliance documents.\nContributed production-oriented software with attention to reliability, traceability, and practical implementation under real business constraints."
        },
        {
            title: "Full-Stack Developer",
            date: "Mar 2020 – Aug 2020",
            org: "Rastava Academy · Remote",
            url: "https://rastava.academy/",
            bullets: "Built and maintained full-stack web features using Python-Django, working across frontend views, backend logic, and database interactions.\nDeveloped and integrated RESTful APIs to connect the frontend with the backend and support smooth data flow across the application.\nWorked in an Agile, Scrum environment, contributing to sprint planning, task breakdown, iterative delivery, and team coordination.\nCollaborated with developers and stakeholders in English to refine requirements, debug features, and deliver changes aligned with sprint goals.\nSupported UI updates with HTML, CSS, and JavaScript, and handled backend validation, server-side logic, and database queries when needed."
        }
            ],
    projects: [
        {
            name: "🥈 SemEval 2026 Task 1 — 2nd Place Globally",
            url: "https://github.com/Sinaeskandari/semeval2026-task1-mwahaha",
            tag: "NLP Competition · Paper Accepted",
            bullets: "**Paper accepted** for publication in SemEval 2026 proceedings: _\"Enhancing Humor Generation through RAG and Synthetic DPO Alignment.\"_\nArchitected a **multi-model tournament** (Llama 3, Qwen, Gemma) with **LLM-as-a-Judge** Round Robin evaluation to select the best humor outputs.\nBuilt a **RAG pipeline** for deep semantic headline context; refined final submission with **LoRA fine-tuning** and **DPO alignment** to match human preference benchmarks.",
            tech: "Python · RAG · LoRA · DPO · Llama 3 · Qwen · Gemma · LLM-as-a-Judge · Hugging Face · Unsloth"
        },
        {
            name: "Automated Document Validation Framework — MSc Thesis",
            url: "",
            tag: "Brain Technologies · 2026",
            bullets: "Designed the architecture for automated document validation with custom chunking and PDF parsing.\nBuilt **hybrid retrieval** using **Qdrant** and keyword search fused with **RRF**.\nIntegrated **Qwen 2.5**, confidence scoring, **Ragas** evaluation, and **LlamaIndex** orchestration.",
            tech: "Python · LlamaIndex · Qdrant · RRF · Ragas · Docling · Qwen 2.5"
        },
        {
            name: "RAG Document Validation Framework — Personal Project",
            url: "https://github.com/monaii/Rag-document-validator",
            tag: "Personal · 2025",
            bullets: "Built an end-to-end **LangGraph pipeline** (retrieve → generate → verify) for automated document Q&A, with 3-tier answer confidence scoring (supported / partially supported / unsupported) and requirement validation against compliance criteria (ISO 27001).\nSupports multi-format ingestion (PDF, DOCX, PPTX) with **pluggable vector stores** (ChromaDB, FAISS, Pinecone) and local LLM inference via **Ollama + Llama 3**.\nServed as the technical foundation and proof-of-concept for the production-grade compliance system later developed at Brain Technologies.",
            tech: "Python · LangChain · LangGraph · Ollama · Llama 3 · ChromaDB · FAISS · Pinecone"
        }
    ],
    skills: "Generative AI & LLMs: RAG (hybrid retrieval, custom chunking, confidence scoring), Agentic AI, Multi-Agent Orchestration, LoRA Fine-tuning, DPO Alignment, Prompt Engineering, Hallucination Mitigation, LLM Evaluation\nModels & AI Frameworks: Llama 3, Qwen, Gemma, GPT, Gemini · LangChain, LangGraph, crewAI, Hugging Face, Unsloth, Ragas, ChromaDB, FAISS, Qdrant, Ollama\nML & Data Science: PyTorch, TensorFlow, scikit-learn, XGBoost, Pandas, NumPy, spaCy, NLTK · Feature Engineering, NLP, Computer Vision\nInfrastructure & DevOps: Docker, AWS, vLLM · Git/GitHub, LLMOps\nSoftware Engineering: Python (primary), SQL, Bash, REST APIs, Flask, Streamlit, FastAPI",
    education: [
        {
            title: "MSc Computer Engineering — AI & Data Analytics",
            date: "Sep 2023 – Jul 2026",
            org: "Politecnico di Torino · Turin, Italy",
            bullets: "Thesis: _Automated Document Validation Framework using RAG and LLMs_ — developed in partnership with Brain Technologies"
        },
        {
            title: "BSc Computer Science & Software Engineering",
            date: "Feb 2018 – Sep 2022",
            org: "Shariaty University · Tehran, Iran",
            bullets: "Coursework in algorithms, data structures, software engineering, databases, and operating systems"
        }
    ],
    certifications: [
        { text: "RAG for Professionals with LangGraph, Python and OpenAI — Udemy (Dec 2025)", url: "https://www.udemy.com/certificate/UC-b9fe4c49-5e6f-45a2-ac35-5f4f3751d9f5/" },
        { text: "AI Agents Intensive Course — Google (2025)", url: "https://www.kaggle.com/certification/badges/monapouresmaeil/105" },
        { text: "Introduction to TensorFlow for AI, ML & Deep Learning — DeepLearning.AI (Nov 2025)", url: "https://www.coursera.org/account/accomplishments/verify/DRXAIXF9J6DU" },
        { text: "GenAI Intensive Program — Kaggle (2025)", url: "https://www.kaggle.com/certification/badges/monapouresmaeil/96" }
    ],
    languages: [
        { name: "English", level: "C1 — Fluent" },
        { name: "Italian", level: "B1 — Actively improving" },
        { name: "Persian", level: "Native" }
    ]
};

class CVBuilder {
    constructor() {
        this.form = document.getElementById('cv-form');
        this.preview = document.getElementById('cv-preview');
        this.data = this.loadData();
        this.zoom = 100;

        this.init();
        this.bindEvents();
        this.render();
    }

    loadData() {
        const saved = localStorage.getItem('cv_data');
        return saved ? JSON.parse(saved) : defaultData;
    }

    saveData() {
        localStorage.setItem('cv_data', JSON.stringify(this.data));
    }

    init() {
        // Fill basic fields
        this.form.querySelector('[name="name"]').value = this.data.name;
        this.form.querySelector('[name="tagline"]').value = this.data.tagline;
        this.form.querySelector('[name="medal"]').value = this.data.medal;
        this.form.querySelector('[name="location"]').value = this.data.location;
        this.form.querySelector('[name="phone"]').value = this.data.phone;
        this.form.querySelector('[name="email"]').value = this.data.email;
        this.form.querySelector('[name="summary"]').value = this.data.summary;
        
        // Links
        this.form.querySelector('[name="links"]').value = this.data.links.map(l => `${l.name}|${l.url}`).join('\n');
        
        // Skills
        this.form.querySelector('[name="skills"]').value = this.data.skills;

        // Certs & Langs
        this.form.querySelector('[name="certifications"]').value = this.data.certifications.map(c => `${c.text}|${c.url}`).join('\n');
        this.form.querySelector('[name="languages"]').value = this.data.languages.map(l => `${l.name}|${l.level}`).join('\n');

        // Dynamic items
        this.renderDynamicItems('experience', this.data.experience);
        this.renderDynamicItems('projects', this.data.projects);
        this.renderDynamicItems('education', this.data.education);
    }

    renderDynamicItems(section, items) {
        const container = document.querySelector(`#${section}-section .items-container`);
        container.innerHTML = '';
        items.forEach(item => this.addItem(section, item));
    }

    addItem(section, item = {}) {
        const template = document.getElementById(`${section}-template`);
        const container = document.querySelector(`#${section}-section .items-container`);
        
        if (!template || !container) return;

        const clone = template.content.cloneNode(true);
        
        // Fill fields
        for (const [key, value] of Object.entries(item)) {
            const field = clone.querySelector(`[name="${key}"]`);
            if (field) field.value = value;
        }

        container.appendChild(clone);
    }

    bindEvents() {
        this.form.addEventListener('input', () => {
            this.updateData();
            this.render();
            this.saveData();
        });

        document.querySelectorAll('.add-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.addItem(e.target.dataset.section);
                this.updateData();
                this.render();
            });
        });

        this.form.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-item')) {
                e.target.closest('.dynamic-item').remove();
                this.updateData();
                this.render();
            }
        });

        document.getElementById('print-btn').addEventListener('click', () => window.print());
        document.getElementById('reset-btn').addEventListener('click', () => {
            if (confirm('Reset to default data? All changes will be lost.')) {
                this.data = JSON.parse(JSON.stringify(defaultData));
                this.init();
                this.render();
                this.saveData();
            }
        });

        // Zoom
        document.getElementById('zoom-in').addEventListener('click', () => this.updateZoom(10));
        document.getElementById('zoom-out').addEventListener('click', () => this.updateZoom(-10));
    }

    updateZoom(delta) {
        this.zoom = Math.min(Math.max(50, this.zoom + delta), 150);
        document.getElementById('cv-preview').style.transform = `scale(${this.zoom / 100})`;
        document.getElementById('zoom-level').textContent = `${this.zoom}%`;
    }

    updateData() {
        const formData = new FormData(this.form);
        
        this.data.name = formData.get('name');
        this.data.tagline = formData.get('tagline');
        this.data.medal = formData.get('medal');
        this.data.location = formData.get('location');
        this.data.phone = formData.get('phone');
        this.data.email = formData.get('email');
        this.data.summary = formData.get('summary');

        // Parse lists
        this.data.links = formData.get('links').split('\n').filter(l => l.includes('|')).map(l => {
            const [name, url] = l.split('|');
            return { name: name.trim(), url: url.trim() };
        });

        this.data.certifications = formData.get('certifications').split('\n').filter(l => l.includes('|')).map(l => {
            const [text, url] = l.split('|');
            return { text: text.trim(), url: url.trim() };
        });

        this.data.languages = formData.get('languages').split('\n').filter(l => l.includes('|')).map(l => {
            const [name, level] = l.split('|');
            return { name: name.trim(), level: level.trim() };
        });

        // Skills
        this.data.skills = formData.get('skills');

        // Dynamic items
        this.data.experience = this.getDynamicItems('experience');
        this.data.projects = this.getDynamicItems('projects');
        this.data.education = this.getDynamicItems('education');
    }

    getDynamicItems(section) {
        const items = [];
        const containers = document.querySelectorAll(`#${section}-section .dynamic-item`);
        containers.forEach(container => {
            const item = {};
            container.querySelectorAll('input, textarea').forEach(input => {
                item[input.name] = input.value;
            });
            items.push(item);
        });
        return items;
    }

    markdown(text) {
        if (!text) return '';
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/_(.*?)_/g, '<em>$1</em>')
            .replace(/\n/g, '<br>')
            .replace(/ · /g, '<span class="bullet-sep"> · </span>');
    }

    render() {
        let html = `
            <header class="cv-header" style="margin-top: 0 !important;">
                <div class="cv-header-left">
                    <div class="cv-name">${this.data.name}</div>
                    <div class="cv-tagline">${this.data.tagline}</div>
                    ${this.data.medal ? `<div class="cv-medal">${this.data.medal}</div>` : ''}
                </div>
                <div class="cv-header-right">
                    <div>${this.data.location}</div>
                    <div>${this.data.phone}</div>
                    <div><a href="mailto:${this.data.email}">${this.data.email}</a></div>
                    <div>
                        ${this.data.links.map((l, i) => `<a href="${l.url}" target="_blank" rel="noopener noreferrer">${l.name}</a>${i < this.data.links.length - 1 ? ' · ' : ''}`).join('')}
                    </div>
                </div>
            </header>

            <div class="cv-section">
                <div class="cv-section-title">About</div>
                <p class="cv-summary">${this.markdown(this.data.summary)}</p>
            </div>

            <div class="cv-section">
                <div class="cv-section-title">Experience</div>
                ${this.data.experience.map(exp => `
                    <div class="cv-entry">
                        <div class="cv-entry-header">
                            <span class="cv-entry-title">${exp.title}</span>
                            <span class="cv-entry-date">${exp.date}</span>
                        </div>
                        <div class="cv-entry-org">${exp.org}</div>
                        <ul class="cv-bullets">
                            ${exp.bullets.split('\n').filter(b => b.trim()).map(b => `<li>${this.markdown(b)}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>

            <div class="cv-section">
                <div class="cv-section-title">Projects</div>
                ${this.data.projects.map(proj => `
                    <div class="cv-entry">
                        <div class="cv-project-header">
                            ${proj.url ? `<a class="cv-entry-title" href="${proj.url}" target="_blank" rel="noopener noreferrer">${proj.name}</a>` : `<span class="cv-entry-title">${proj.name}</span>`}
                            <span class="cv-project-tag">${proj.tag}</span>
                        </div>
                        <ul class="cv-bullets">
                            ${proj.bullets.split('\n').filter(b => b.trim()).map(b => `<li>${this.markdown(b)}</li>`).join('')}
                        </ul>
                        <div class="cv-tech-line">${proj.tech}</div>
                    </div>
                `).join('')}
            </div>

            <div class="cv-section">
                <div class="cv-section-title">Skills</div>
                <div class="cv-skill-block">${this.markdown(this.data.skills)}</div>
            </div>

            <div class="cv-section">
                <div class="cv-section-title">Education</div>
                ${this.data.education.map(edu => `
                    <div class="cv-entry">
                        <div class="cv-entry-header">
                            <span class="cv-entry-title">${edu.title}</span>
                            <span class="cv-entry-date">${edu.date}</span>
                        </div>
                        <div class="cv-entry-org">${edu.org}</div>
                        <ul class="cv-bullets">
                            ${edu.bullets.split('\n').filter(b => b.trim()).map(b => `<li>${this.markdown(b)}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>

            <div class="cv-section">
                <div class="cv-section-title">Certifications</div>
                ${this.data.certifications.map(cert => `
                    <div class="cv-cert-item"><a href="${cert.url}" target="_blank" rel="noopener noreferrer">${cert.text}</a></div>
                `).join('')}
            </div>

            <div class="cv-section">
                <div class="cv-section-title">Languages</div>
                <div class="cv-lang-row">
                    ${this.data.languages.map(lang => `
                        <div class="cv-lang"><strong>${lang.name}</strong><span>${lang.level}</span></div>
                    `).join('')}
                </div>
            </div>
        `;

        this.preview.innerHTML = html;
        // Wait for fonts/layout to settle
        setTimeout(() => {
            this.autoFit();
            this.applySmartBreaks();
        }, 0);
    }

    autoFit() {
        const root = document.querySelector(':root');
        
        // Use exact mm to px conversion used by browsers for A4 (96 DPI)
        // 210mm = 793.7px, 297mm = 1122.5px
        const pageHeightPx = 1122.5; 
        const targetHeight = pageHeightPx * 2;

        // Reset to initial values
        let fontSize = 13;
        let lineHeight = 1.6;
        let sectionMargin = 24;
        let entryMargin = 18;
        let pagePaddingTop = 52;
        let pagePaddingBottom = 52;

        const applyParams = () => {
            root.style.setProperty('--cv-base-font', `${fontSize}px`);
            root.style.setProperty('--cv-line-height', lineHeight);
            root.style.setProperty('--cv-section-margin', `${sectionMargin}px`);
            root.style.setProperty('--cv-entry-margin', `${entryMargin}px`);
            root.style.setProperty('--cv-page-padding', `${pagePaddingTop}px 60px ${pagePaddingBottom}px`);
        };

        // PHASE 1: Shrink if over 2 pages
        let iterations = 0;
        while (iterations < 30) {
            applyParams();
            this.applySmartBreaks(pageHeightPx);
            
            if (this.preview.scrollHeight <= targetHeight) break;

            fontSize -= 0.1;
            lineHeight -= 0.005;
            sectionMargin -= 0.5;
            entryMargin -= 0.5;
            pagePaddingTop -= 1;
            pagePaddingBottom -= 1;
            iterations++;
        }

        // PHASE 2: Grow if too much white space on page 2
        iterations = 0;
        while (iterations < 30) {
            applyParams();
            this.applySmartBreaks(pageHeightPx);

            const currentHeight = this.preview.scrollHeight;
            const whiteSpaceOnPage2 = targetHeight - currentHeight;

            // More aggressive growth if content is on page 2 but there's a lot of empty space
            if (currentHeight > pageHeightPx && whiteSpaceOnPage2 > 50 && currentHeight < targetHeight) {
                fontSize += 0.1;
                lineHeight += 0.005;
                sectionMargin += 0.5;
                entryMargin += 0.5;
                
                applyParams();
                this.applySmartBreaks(pageHeightPx);

                if (this.preview.scrollHeight > targetHeight) {
                    fontSize -= 0.1;
                    lineHeight -= 0.005;
                    sectionMargin -= 0.5;
                    entryMargin -= 0.5;
                    applyParams();
                    this.applySmartBreaks(pageHeightPx);
                    break;
                }
            } else {
                break;
            }
            iterations++;
        }

        // Update page count indicator
        const totalHeight = this.preview.scrollHeight;
        const pages = Math.ceil(totalHeight / pageHeightPx);
        document.getElementById('page-count').textContent = `Pages: ${pages}/2`;
        
        if (pages >= 2) {
            this.preview.classList.add('two-pages');
        } else {
            this.preview.classList.remove('two-pages');
        }

        if (pages > 2) {
            document.getElementById('page-count').style.color = '#ff4d4f';
            document.getElementById('page-count').style.background = 'rgba(255, 255, 255, 0.9)';
            document.getElementById('page-count').style.padding = '2px 8px';
            document.getElementById('page-count').style.borderRadius = '4px';
        } else {
            document.getElementById('page-count').style.color = 'white';
            document.getElementById('page-count').style.background = 'none';
        }
    }

    applySmartBreaks(pageHeightPx) {
        if (!pageHeightPx) {
            pageHeightPx = 1122.5;
        }
        
        // Reset any previous pushes
        const entries = this.preview.querySelectorAll('.cv-entry, .cv-section, .cv-skill-row');
        entries.forEach(el => el.style.marginTop = '');

        const previewRect = this.preview.getBoundingClientRect();

        entries.forEach(el => {
            const rect = el.getBoundingClientRect();
            const relativeTop = rect.top - previewRect.top;
            const relativeBottom = rect.bottom - previewRect.top;

            // 1. Handle elements crossing the line
            if (relativeTop < pageHeightPx && relativeBottom > pageHeightPx) {
                const pushAmount = pageHeightPx - relativeTop;
                el.style.marginTop = `${pushAmount + 2}px`;
            }

            // 2. Special case: If it's a section and the title is too close to the bottom
            if (el.classList.contains('cv-section')) {
                const title = el.querySelector('.cv-section-title');
                if (title) {
                    const titleRect = title.getBoundingClientRect();
                    const titleBottom = titleRect.bottom - previewRect.top;
                    
                    if (titleBottom < pageHeightPx && (pageHeightPx - titleBottom) < 60) {
                        const pushAmount = pageHeightPx - relativeTop;
                        el.style.marginTop = `${pushAmount + 2}px`;
                    }
                }
            }
        });
    }
}

new CVBuilder();
