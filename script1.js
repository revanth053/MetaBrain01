// Main script for dashboard functionality
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Initialize sidebar
    initializeSidebar();

    // Initialize summary cards
    initializeSummaryCards();

    // Add event listeners
    addEventListeners();

    // Initialize dashboard charts
    window.dashboardCharts = new DashboardCharts();

    // Add event listeners for navigation
    document.addEventListener('DOMContentLoaded', function() {
        // Saved Reports navigation
        const savedReportsNav = document.getElementById('savedReportsNav');
        if (savedReportsNav) {
            savedReportsNav.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Hide any existing sections
                document.querySelector('.container')?.style.display = 'none';
                document.getElementById('projectSection')?.remove();
                document.getElementById('actionTwinSection')?.remove();
                
                // Show the main dashboard content
                const mainContent = document.querySelector('.main-content');
                mainContent.style.display = 'block';
                
                // Initialize charts if they exist
                if (window.DashboardGraphs && window.DashboardGraphs.initializeCharts) {
                    window.DashboardGraphs.initializeCharts();
                }
                
                // Update active state in navigation
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('active');
                });
                savedReportsNav.classList.add('active');
            });
        }
    });
});

// Initialize sidebar
function initializeSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    const navItems = [
        { icon: 'home', label: 'Dashboard', active: true },
        { icon: 'bar-chart-2', label: 'Analytics' },
        { icon: 'settings', label: 'Settings' },
        { icon: 'help-circle', label: 'Help' }
    ];

    const sidebarHTML = `
        <div class="p-4">
            <div class="flex items-center gap-2 mb-6">
                <svg class="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span class="text-lg font-semibold">Metabrain</span>
            </div>
            <nav class="space-y-1">
                ${navItems.map(item => `
                    <a href="#" class="flex items-center gap-2 px-2 py-1.5 rounded-lg ${item.active ? 'bg-orange-50 text-orange-500' : 'text-gray-600 hover:bg-gray-50'}">
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            ${getIconPath(item.icon)}
                        </svg>
                        <span class="text-sm font-medium">${item.label}</span>
                    </a>
                `).join('')}
            </nav>
        </div>
    `;

    sidebar.innerHTML = sidebarHTML;
}

// Get icon path for Lucide icons
function getIconPath(icon) {
    const icons = {
        home: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
        'bar-chart-2': 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
        settings: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
        'help-circle': 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    };
    return `<path d="${icons[icon]}"/>`;
}

// Initialize summary cards
function initializeSummaryCards() {
    const summaryCards = document.querySelectorAll('.summary-card');
    if (!summaryCards.length) return;

    summaryCards.forEach(card => {
        const gauge = card.querySelector('.gauge');
        if (!gauge) return;

        const score = parseFloat(gauge.dataset.score) || 0;
        const color = gauge.dataset.color || 'var(--color-orange-500)';
        const label = gauge.dataset.label || 'Score';

        // Create gauge chart
        const gaugeChart = new Recharts.PieChart({
            width: 120,
            height: 120,
            margin: { top: 0, right: 0, bottom: 0, left: 0 }
        });

        const gaugeData = [
            { value: score, fill: color },
            { value: 100 - score, fill: 'var(--color-gray-100)' }
        ];

        gaugeChart.render(
            <Recharts.Pie
                data={gaugeData}
                cx={60}
                cy={60}
                innerRadius={45}
                outerRadius={55}
                startAngle={90}
                endAngle={-270}
                paddingAngle={0}
                dataKey="value"
            >
                <Recharts.Cell fill={color} />
                <Recharts.Cell fill="var(--color-gray-100)" />
            </Recharts.Pie>
        );

        // Add score text
        const scoreText = document.createElement('div');
        scoreText.className = 'absolute inset-0 flex items-center justify-center';
        scoreText.innerHTML = `
            <div class="text-center">
                <div class="text-2xl font-bold" style="color: ${color}">${score}%</div>
                <div class="text-xs text-gray-500">${label}</div>
            </div>
        `;
        gauge.appendChild(scoreText);
    });
}

// Add event listeners
function addEventListeners() {
    // Download button
    const downloadBtn = document.querySelector('.btn-green');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            // Implement download functionality
            console.log('Downloading report...');
        });
    }

    // New assessment button
    const newAssessmentBtn = document.querySelector('.btn-orange');
    if (newAssessmentBtn) {
        newAssessmentBtn.addEventListener('click', () => {
            // Implement new assessment functionality
            console.log('Starting new assessment...');
        });
    }

    // Table row hover effects
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.backgroundColor = 'var(--color-gray-50)';
        });
        row.addEventListener('mouseleave', () => {
            row.style.backgroundColor = '';
        });
    });

    // Chart tooltip interactions
    const chartContainers = document.querySelectorAll('.chart-container');
    chartContainers.forEach(container => {
        container.addEventListener('mouseenter', () => {
            container.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        });
        container.addEventListener('mouseleave', () => {
            container.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
        });
    });
}

// Utility functions
function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

function formatPercentage(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value / 100);
}

// Export utility functions
window.dashboardUtils = {
    formatCurrency,
    formatPercentage
}; 