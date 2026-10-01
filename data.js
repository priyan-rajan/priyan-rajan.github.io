/* 
  CENTRAL CONTENT SOURCE
  Edit this file to update Priyanka Rajan's personal website.
*/
const DATA = {
    name: "Priyanka Rajan",
    taglines: [
        "Cancer Biology",
        "Bioinformatics"
    ],
    focus: {
        title: "How can we catch the molecular signs of cancer early, and what can we do with that data?",
        description: "This includes identifying the patient population to be screened, developing robust computational pipelines to identify the root causes, and using that information to design personalized treatment with novel approaches or existing drugs."
    },
    projects: [
            {
                title: "Early disease detection",
                desc: "Tracing the cellular and tissue origins of plasma protein biomarkers for early cancer detection by applying machine-learning techniques to large single-cell RNA-seq and spatial omics datasets.",
                url: "https://github.com/priyan-rajan/biomarker-tracing"
            },
            {
                title: "Predictive biomarkers to cancer immunotherapy",
                desc: "Establishing a molecular and proteomic tumor immune-suppression signature that indicates responsiveness to immunotherapy and pre-metastatic tissue priming for metastatic tumor growth.",
                url: "https://github.com/priyan-rajan/Tumor_Immune_Signaling"
            },
            {
                title: "Rare disease variant discovery & drug repurposing",
                desc: "Identifying DNA mutations underlying Mosaic Variegated Aneuploidy syndrome, the consequential effects and proposing candidate medications from existing approved medications.",
                url: "https://github.com/priyan-rajan?tab=repositories"
            },
            {
                title: "Contraindications of common medicines",
                desc: "Developing an app that leverages established drug-drug interaction data to tell you if the medicines you are taking go well with each other or not.",
                url: "https://github.com/priyan-rajan/Medindicator"
            },
            {
                title: "Understanding frequency of cancer causing mutations in India",
                desc: "Uncovering BRCA mutation frequency in various sub-populations in India using the GenomeIndia dataset.",
                url: "https://github.com/priyan-rajan/BRCA-stats-in-GenomeIndia"
            }
    ],
    experience: [
        { org: "Independent Researcher", role: "Data workflows for early detection, immunotherapy and rare disease", period: "2025 — present" },
        { org: "Enhanced Pharmacodynamics, Buffalo", role: "Senior research aide || Drug PK/PD modeling", period: "2019" }
    ],
    education: [
        { org: "SUNY Buffalo — Roswell Park Cancer Center", role: "M.S. & Ph.D in Cancer Sciences || Breast cancer immunotherapy & targeted therapy, <br/> p53 response to chromatin damage", period: "2017 — 2025" },
        /*{ org: "University at Buffalo - Roswell Park Cancer Center", role: "Masters student || p53 & tumor chromatin damage", period: "2017 — 2019" },*/
        { org: "PSG College of Technology, Coimbatore", role: "B.Tech Biotechnology || Regulatory mechanisms of cell division", period: "2013 — 2017" }
    ],
    resources: [
        {
            label: "Research Publications",
            desc: "Selected publications at the intersection of Cancer Genetics, Cell Biology and Drug Development.",
            links: [
                { label: "Google Scholar", url: "https://scholar.google.com/citations?user=sYsJDakAAAAJ&hl=en" },
                { label: "Preprint", url: "https://www.biorxiv.org/content/10.1101/2025.05.08.652949v1.abstract" },
                { label: "NAR Paper", url: "https://academic.oup.com/nar/article/51/21/11836/7321997?guestAccessKey=" },
                { label: "CRM Paper", url: "https://www.cell.com/cell-reports-medicine/fulltext/S2666-3791(24)00057-0" }
            ]
        },
        {
            label: "Musings & Code",
            desc: "Selected writings on computational biology models and datasets.",
            links: [
                { label: "GitHub", url: "https://github.com/priyan-rajan?tab=repositories" },
                { label: "Blog", url: "https://substack.com/@centraldogmatix" }
            ]
        }
    ],
    socials: {
        substack: "https://centraldogmatix.substack.com",
        github: "https://github.com",
        LinkedIn: "https://linkedin.com/in/priyanka-rajan",
        email: "mailto:priyanka.rajan05@gmail.com",
        resume: "PRajan_resume.pdf",
        cv: "PRajan_CV.pdf",
        scholar: "https://scholar.google.com/citations?user=sYsJDakAAAAJ&hl=en",
    },
    photo: "avatar.jpg"
};
