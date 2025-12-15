# Statistical Analysis Dashboard - DataVista

A comprehensive statistical analysis platform implementing Principal Component Analysis (PCA), Multiple Correspondence Analysis (ACM), Kohonen Self-Organizing Maps, and statistical descriptive analysis with professional PDF reporting capabilities.

## 📊 Features

### 1. Statistical Descriptive Analysis
- Manual data entry or file import (CSV, Excel, TXT)
- Comprehensive statistical calculations:
  - Mean, Median, Mode
  - Variance and Standard Deviation
  - Range and Quartiles
  - Frequency distributions
- Interactive data tables with real-time calculations
- Chart visualizations using Recharts

### 2. Principal Component Analysis (PCA)
- Matrix data input with customizable dimensions
- Complete PCA workflow:
  - Data centering and standardization
  - Covariance and correlation matrix computation
  - Eigenvalue/eigenvector calculation using power iteration method
  - Inertia analysis with cumulative percentages
  - Data projection onto principal components
- 2D scatter plots of factor planes
- Scree plots for eigenvalue visualization

### 3. Kohonen Self-Organizing Maps (SOM)
- Customizable map dimensions (neurons grid)
- Complete training algorithm implementation:
  - Weight matrix initialization
  - Best Matching Unit (BMU) identification
  - Neighborhood function with Gaussian decay
  - Learning rate and radius decay over epochs
- Data classification with trained maps
- 2D visualization of neuron grid with training/test data overlay

### 4. Multiple Correspondence Analysis (ACM)
- Discrete/binary data analysis
- Factor visualization for individuals and variables
- Eigenvalue decomposition and inertia analysis
- 2D scatter plots for factor plane visualization

### 5. Professional Reporting
- Multi-format export capabilities:
  - PDF reports with electronic signatures
  - CSV data export
  - Excel spreadsheets with results
- Automated report generation after analysis
- Professional formatting with charts and data tables

## 🛠️ Technical Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: Radix UI primitives with custom styling
- **Data Visualization**: Recharts for statistical graphs
- **File Handling**: xlsx library for Excel support, jsPDF for PDF generation
- **State Management**: React hooks and context API
- **Styling**: Tailwind CSS with custom themes

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
User Interface
Clean, professional dashboard design
Dark/light theme support
Responsive layout for different screen sizes
Tab-based navigation between analysis sections
Intuitive data input and parameter controls

👥 Author
Benaboud Roqia
Student in Master's program in Artificial Intelligence and Data Science
Passionate about machine learning and advanced data analysis
Focused on developing intelligent systems

📄 License
This project is developed for educational purposes as part of a Master's program in Artificial Intelligence and Data Science.

🤝 Contributing
This project is primarily maintained for academic purposes. However, suggestions and improvements are welcome through GitHub issues.

📞 Contact
For inquiries about this project, please contact Benaboud Roqia through GitHub.
plaintext



<img width="3455" height="1802" alt="image" src="https://github.com/user-attachments/assets/402b6d19-adbe-4b0a-9b78-74d747a5ddaf" />
<img width="3452" height="1797" alt="image" src="https://github.com/user-attachments/assets/67d6f9c7-3e6e-4908-938d-5f6b9607a94d" />
<img width="3455" height="1795" alt="image" src="https://github.com/user-attachments/assets/8ad9f810-2285-4481-8773-c9d19bd9e50d" />
<img width="3455" height="1800" alt="image" src="https://github.com/user-attachments/assets/747552e1-0d90-4cb5-97c5-9eaa2af28ee8" />



This README provides a comprehensive overview of your Statistical Analysis Dashboard project, highlighting all the key features and technical aspects while maintaining a professional presentation suitable for GitHub. The document includes:

1. A clear project description with feature highlights
2. Detailed breakdown of each analysis method (Statistics, PCA, Kohonen, ACM)
3. Technical stack information
4. Clear installation and usage instructions
5. Project structure overview
6. Information about the author and licensing

### Installation

1. Clone the repository:
```bash
git clone https://github.com/benaboud-roqia/Statistical-Analysis-Dashboard.git
cd Statistical-Analysis-Dashboard
npm install
npm run dev
The application will be available at http://localhost:3000
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── ACMSection.tsx   # Multiple Correspondence Analysis
│   ├── ChartVisualization.tsx
│   ├── DataExport.tsx   # Export functionality
│   ├── KohonenSection.tsx
│   ├── PCASection.tsx
│   ├── StatisticalChatbot.tsx
│   ├── StatisticalResults.tsx
│   ├── StatisticsSection.tsx
│   └── ThemeToggle.tsx
├── utils/
│   └── excelParser.ts   # Excel file parsing utilities
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles





The README follows best practices for GitHub documentation with appropriate markdown formatting, emojis for visual appeal, and clear section organization.
