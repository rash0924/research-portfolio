// =============================================
// DOCUMENTS DATA
// =============================================
// HOW TO ADD FILES:
// 1. Create matching subfolders inside public/reports/ (e.g., public/reports/proposal/)
// 2. Place your PDF/PPTX files inside those subfolders
// 3. Update the "files" array below with the correct filename and link
// =============================================

export const documentCategories = [
  {
    id: "proposal",
    label: "Project Proposal",
    icon: "📋",
    color: "#10b981",
    files: [
      { name: "TEAVISION360 - Project Proposal - Tea Leaf Grading", type: "PDF", link: "/reports/proposal/report_grading.pdf" },
      { name: "TEAVISION360 - Project Proposal - Disease Identification", type: "PDF", link: "/reports/proposal/report_disease.pdf" },
      { name: "TEAVISION360 - Project Proposal - Data Driven Fertilization", type: "PDF", link: "/reports/proposal/report_fertilization.pdf" },
      { name: "TEAVISION360 - Project Proposal - Market Data Analysis", type: "PDF", link: "/reports/proposal/report_market.pdf" },
      { name: "Project Proposal Presentation", type: "PPTX", link: "/reports/presentation1/proposal_presentation.pptx" },
    ]
  },
  {
    id: "presentation1",
    label: "Progress Presentation 1",
    icon: "📊",
    color: "#84cc16",
    files: [
      { name: "Progress Presentation 01", type: "PPTX", link: "/reports/presentation1/progress_presentation_1.pptx" }

    ]
  },
  {
    id: "presentation2",
    label: "Progress Presentation 2",
    icon: "📊",
    color: "#14b8a6",
    files: [
      { name: "Progress Presentation 02", type: "PPTX", link: "/reports/presentation1/progress_presentation_2.pptx" }

    ]
  },
  {
    id: "research-paper",
    label: "Research Paper",
    icon: "📄",
    color: "#6366f1",
    files: [
      { name: "TEAVISION360 - Research Paper", type: "PDF", link: "/reports/research-paper/research_paper.pdf" }
    ]
  },
  {
    id: "final",
    label: "Final Report & Presentation",
    icon: "🏆",
    color: "#f59e0b",
    files: [
      { name: "Final Project Report", type: "PDF", link: "/reports/TEAVISION360_Final_Report.pdf" }

    ]
  },
  {
    id: "checklist",
    label: "CheckList Documents",
    icon: "✅",
    color: "#ec4899",
    files: [
      { name: "Project Checklist", type: "PDF", link: "/reports/checklist/project_checklist.pdf" }
    ]
  },
  {
    id: "website",
    label: "Website",
    icon: "🌐",
    color: "#06b6d4",
    files: [
      { name: "Website Documentation", type: "PDF", link: "/reports/website/website_documentation.pdf" }
    ]
  },
  {
    id: "logbook",
    label: "Log Book",
    icon: "📓",
    color: "#8b5cf6",
    files: [
      { name: "Project Log Book", type: "PDF", link: "/reports/logbook/log_book.pdf" }
    ]
  },
  {
    id: "registration",
    label: "Project Registration",
    icon: "📝",
    color: "#f97316",
    files: [
      { name: "Project Registration Documents", type: "PDF", link: "/reports/registration/project_registration.pdf" }
    ]
  }
];
