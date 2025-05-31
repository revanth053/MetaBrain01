// Chart.js data structures
window.chartData = {
    riskTimeline: {
        labels: ['Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024'],
        datasets: [{
            label: 'Risk Score',
            data: [65, 60, 58, 55, 56, 54],
            borderColor: '#dc2626',
            tension: 0.1,
            fill: false
        }]
    },

    riskDistribution: {
        labels: ['Low', 'Medium', 'High', 'Critical'],
        datasets: [{
            label: 'Number of Assets',
            data: [46, 34, 36, 22],
            backgroundColor: ['#22C55E', '#FACC15', '#F97316', '#DC2626'],
        }]
    },

    supplyMetrics: {
        labels: ['Supplier Reliability', 'Logistics Efficiency', 'Geopolitical Stability', 'Regulatory Compliance'],
        datasets: [{
            label: 'Score',
            data: [85, 70, 55, 90],
            backgroundColor: '#2800f0',
        }]
    },

    redundancyMetrics: {
        labels: ['Supply Redundancy', 'Political Risk', 'Currency Risk'],
        datasets: [{
            label: 'Score',
            data: [75, 60, 50],
            backgroundColor: '#0ea5e9',
        }]
    },

    decisionMatrix: {
        labels: ['High Impact / High Probability', 'High Impact / Low Probability', 'Low Impact / High Probability', 'Low Impact / Low Probability'],
        datasets: [{
            label: 'Number of Risks',
            data: [15, 10, 25, 50],
            backgroundColor: ['#dc2626', '#fbbf24', '#0ea5e9', '#039a08'],
        }]
    },

    riskQuality: {
        labels: ['China', 'Vietnam', 'Mexico', 'India', 'Thailand', 'Poland'],
        datasets: [{
            label: 'Risk Score',
            data: [56.43, 30.67, 35.17, 38.8, 32.65, 33.75],
            backgroundColor: 'rgba(220, 38, 38, 0.2)',
            borderColor: '#dc2626',
            pointBackgroundColor: '#dc2626',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#dc2626'
        }, {
            label: 'Quality Score',
            data: [58, 74.75, 68.55, 76.9, 72, 70.7],
            backgroundColor: 'rgba(3, 154, 8, 0.2)',
            borderColor: '#039a08',
            pointBackgroundColor: '#039a08',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#039a08'
        }]
    },

    landingCost: {
        labels: ['China', 'Vietnam', 'Mexico', 'India', 'Thailand', 'Poland'],
        datasets: [{
            label: 'Landing Cost',
            data: [64.1, 56.85, 55.8, 56.57, 56.43, 59.7],
            backgroundColor: '#2800f0',
        }]
    },

    benefitScore: {
        labels: ['Vietnam', 'Mexico', 'India', 'Thailand', 'Poland'],
        datasets: [{
            label: 'Benefit vs China',
            data: [7.25, 8.3, 7.53, 7.67, 4.4],
            backgroundColor: ['#039a08', '#fbbf24', '#2800f0', '#0ea5e9', '#dc2626'],
        }]
    },

    riskFactorComparison: {
        labels: ['Tariff Volatility', 'Concentration Risk', 'Political Risk', 'Non-Tariff Barriers', 'Currency Risk', 'Lead Time'],
        datasets: [{
            label: 'China',
            data: [20, 15, 20, 10, 15, 20],
            borderColor: '#dc2626',
            backgroundColor: 'rgba(220, 38, 38, 0.2)',
            fill: true,
        }, {
            label: 'Vietnam',
            data: [13.33, 3, 6, 3.33, 8.33, 11.11],
            borderColor: '#039a08',
            backgroundColor: 'rgba(3, 154, 8, 0.2)',
            fill: true,
        }]
    },

    qualitativeMetrics: {
        labels: ['Competitiveness', 'Logistics Performance', 'Labor Cost', 'ESG Score', 'FTA Status', 'Strategic Fit'],
        datasets: [{
            label: 'Score',
            data: [75, 72, 65, 72, 100, 85],
            backgroundColor: ['#2800f0', '#0ea5e9', '#fbbf24', '#039a08', '#dc2626', '#f97316'],
        }]
    }
}; 