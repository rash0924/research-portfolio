export const componentsData = {
  grading: {
    title: "Tea Leaf Grading",
    icon: "Leaf",
    color: "var(--accent-secondary)",
    intro: "The tea industry in Sri Lanka heavily relies on manual assessment by expert tea tasters. This visual inspection process is often inconsistent due to human fatigue, differing skill levels, and varied environmental conditions. Our automated grading system shifts this to an objective, AI-driven process.",
    gap: "Traditional grading systems fail to meet current market needs for standardized products. There is an urgent requirement for automated grading systems, yet a notable absence of solutions utilizing robust datasets specific to Sri Lankan tea grades.",
    methodology: "We installed cameras at factory grading stations under controlled lighting to capture high-quality images. We trained deep Convolutional Neural Networks (CNNs) based on transfer learning architectures like ResNet and MobileNet to classify Sri Lankan tea grades (BOPF, OP, Dust). We also fuse visual information with IoT environmental data (temperature and humidity) for context-aware grading.",
    results: "The CNN-based tea grading model achieved an overall accuracy of 92%, successfully outperforming traditional manual grading methods. The use of data augmentation and transfer learning significantly reduced misclassifications between visually similar grades. This leads to reduced human bias, faster processing times, and highly consistent results."
  },
  disease: {
    title: "Disease Identification",
    icon: "BugOff",
    color: "var(--accent-primary)",
    intro: "Plant disease diagnosis based on visual inspection in tea plantations is highly susceptible to errors, mainly because different diseases and nutrient deficiencies can exhibit very similar visual symptoms. This component offers early and precise identification of both biotic (fungal) and abiotic (nutrient) stresses.",
    gap: "Visual observation frequently leads to misdiagnosis, requiring significant time and effort. The research field lacks a comprehensive solution capable of resolving visually ambiguous situations to prevent the spread of diseases and crop losses.",
    methodology: "We curated a representative dataset of tea leaf images captured under various real-world field conditions (varying illumination, backgrounds, leaf orientations). We utilize CNNs and Siamese Networks to classify visually similar diseases. Furthermore, object detection architectures like YOLOv10 and Mask R-CNN are employed to localize infections and quantify severity.",
    results: "The system successfully identified common tea leaf diseases and nutrient deficiencies under varying environmental conditions. Integration of object detection (YOLO) greatly improved the ability to localize affected regions, providing actionable insights for farmers regarding infection severity."
  },
  iot: {
    title: "IoT Data-Driven Fertilization",
    icon: "Cpu",
    color: "#14b8a6",
    intro: "Traditional fixed-schedule fertilization leads to excessive chemical application, resulting in higher expenses and environmental damage. This hardware-software ecosystem dynamically analyzes soil parameters to prescribe exact, data-driven fertilization needs.",
    gap: "Farmers lack access to current soil information, causing over-fertilization and financial waste. The industry needs a shift from rigid schedules to a predictive approach utilizing continuous environmental monitoring.",
    methodology: "We designed an IoT sensor network that continuously monitors soil moisture, temperature, pH, electrical conductivity (EC), and NPK content. After extensive preprocessing (noise removal, normalization), the sequential data is fed into a Long Short-Term Memory (LSTM) deep neural network to generate dynamic fertilization recommendations.",
    results: "The predictive model demonstrated a very low Mean Squared Error (MSE), indicating high precision. It improved fertilizer recommendation accuracy by approximately 30% compared to traditional fixed schedules, resulting in reduced chemical usage, lower operational costs, and highly sustainable farming practices."
  },
  market: {
    title: "Tea Market Data Analysis",
    icon: "TrendingUp",
    color: "#06b6d4",
    intro: "Market decisions in the Sri Lankan tea industry often rely on historical trends and human intuition rather than predictive models. This analytical suite leverages sophisticated machine learning algorithms to forecast tea prices, manage risks, and offer intelligent bidding strategies.",
    gap: "Global tea trade is highly volatile due to climate and economic changes. Traditional forecasting methods (like ARIMA) fail to capture complex, non-linear market relationships, leaving growers and exporters without actionable predictive intelligence.",
    methodology: "We aggregate multivariate market data from the Colombo Tea Auction, FAOSTAT, and global weather reports. We perform systematic feature engineering (lagged variables, rolling averages) and use Histogram-based Gradient Boosting to handle non-linear market dependencies and predict future price points.",
    results: "The model achieved stable forecasting performance with a Mean Absolute Percentage Error (MAPE) of approximately 8–10%. It successfully captured seasonal trends, market fluctuations, and external factors, significantly outperforming traditional forecasting methods to offer reliable strategic insights."
  }
};
