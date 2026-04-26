export const reportsData = [
  {
    id: "RPT-2026-FINAL",
    title: "TEAVISION360 Final Project Report",
    date: "April 2026",
    status: "Published",
    type: "main",
    description: "The complete research documentation detailing the system architecture, AI methodologies, IoT integration, and final results for all four modules.",
    tags: ["Final Report", "AI", "IoT", "Computer Vision"],
    link: "/reports/TEAVISION360_Final_Report.pdf"
  }
];

export const individualReportsData = [
  {
    id: 1,
    name: "Weerawardane K.W.R.C",
    component: "AI & IoT Based Tea Leaf Grading",
    description: "Covers the design of the image-based automated grading pipeline, CNN model training using ResNet and MobileNet, and integration with IoT sensor data for context-aware classification.",
    tags: ["CNN", "ResNet", "MobileNet", "IoT", "Computer Vision"],
    color: "#84cc16",
    link: "/reports/report_grading.pdf"
  },
  {
    id: 2,
    name: "Malshan W.A.D.D.I",
    component: "Tea Leaf Disease & Nutrient Deficiency Detection",
    description: "Details the YOLOv10 deep learning architecture used to detect and localize tea leaf diseases and nutrient deficiencies from RGB images captured in field conditions.",
    tags: ["YOLOv10", "Deep Learning", "Mask R-CNN", "Disease Detection"],
    color: "#10b981",
    link: "/reports/report_disease.pdf"
  },
  {
    id: 3,
    name: "Udawela U.K.R.M.R.N",
    component: "Data-Driven Fertilization Using IoT & LSTM",
    description: "Presents the IoT sensor network design for real-time soil monitoring (NPK, pH, moisture, EC) and the LSTM neural network model for dynamic fertilizer recommendations.",
    tags: ["LSTM", "IoT Sensors", "NPK", "Smart Agriculture"],
    color: "#14b8a6",
    link: "/reports/report_fertilization.pdf"
  },
  {
    id: 4,
    name: "Jayasundara K.B.S.M",
    component: "AI-Based Tea Market Analysis & Price Forecasting",
    description: "Documents the Histogram-based Gradient Boosting model built from Colombo Tea Auction and FAOSTAT data, including the risk assessment engine and intelligent bidding strategy system.",
    tags: ["Gradient Boosting", "Price Forecasting", "Market Analysis", "Risk Assessment"],
    color: "#06b6d4",
    link: "/reports/report_market.pdf"
  }
];
