// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize each chart
    initRiskTimeline();
    initRiskDistribution();
    initSupplyMetrics();
    initRedundancyMetrics();
    initDecisionMatrix();
    initRiskQuality();
    initLandingCost();
    initBenefitScore();
    initRiskFactorComparison();
    initQualitativeMetrics();
});

// Common chart options
const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { position: 'top' },
        title: {
            display: true,
            font: { size: 16, weight: 'bold' }
        }
    }
};

// Initialize Risk Timeline Chart
function initRiskTimeline() {
    new Chart(document.getElementById('risk-timeline'), {
        type: 'line',
        data: window.chartData.riskTimeline,
        options: {
            ...commonOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: { display: true, text: 'Risk Score' }
                }
            }
        }
    });
}

// Initialize Risk Distribution Chart
function initRiskDistribution() {
    new Chart(document.getElementById('risk-distribution'), {
        type: 'doughnut',
        data: window.chartData.riskDistribution,
        options: {
            ...commonOptions,
            cutout: '60%'
        }
    });
}

// Initialize Supply Metrics Chart
function initSupplyMetrics() {
    new Chart(document.getElementById('supply-metrics'), {
        type: 'bar',
        data: window.chartData.supplyMetrics,
        options: {
            ...commonOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: { display: true, text: 'Score' }
                }
            }
        }
    });
}

// Initialize Redundancy Metrics Chart
function initRedundancyMetrics() {
    new Chart(document.getElementById('redundancy-metrics'), {
        type: 'bar',
        data: window.chartData.redundancyMetrics,
        options: {
            ...commonOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: { display: true, text: 'Score' }
                }
            }
        }
    });
}

// Initialize Decision Matrix Chart
function initDecisionMatrix() {
    new Chart(document.getElementById('decision-matrix'), {
        type: 'bar',
        data: window.chartData.decisionMatrix,
        options: {
            ...commonOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Number of Risks' }
                }
            }
        }
    });
}

// Initialize Risk Quality Chart
function initRiskQuality() {
    new Chart(document.getElementById('risk-quality'), {
        type: 'radar',
        data: window.chartData.riskQuality,
        options: {
            ...commonOptions,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// Initialize Landing Cost Chart
function initLandingCost() {
    new Chart(document.getElementById('landing-cost'), {
        type: 'bar',
        data: window.chartData.landingCost,
        options: {
            ...commonOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Cost' }
                }
            }
        }
    });
}

// Initialize Benefit Score Chart
function initBenefitScore() {
    new Chart(document.getElementById('benefit-score'), {
        type: 'bar',
        data: window.chartData.benefitScore,
        options: {
            ...commonOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Benefit Score' }
                }
            }
        }
    });
}

// Initialize Risk Factor Comparison Chart
function initRiskFactorComparison() {
    new Chart(document.getElementById('risk-factor-comparison'), {
        type: 'radar',
        data: window.chartData.riskFactorComparison,
        options: {
            ...commonOptions,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// Initialize Qualitative Metrics Chart
function initQualitativeMetrics() {
    new Chart(document.getElementById('qualitative-metrics'), {
        type: 'bar',
        data: window.chartData.qualitativeMetrics,
        options: {
            ...commonOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: { display: true, text: 'Score' }
                }
            }
        }
    });
} 