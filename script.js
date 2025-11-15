// Beneath the Surface - Main Script
// D3.js Visualizations for Shark Conservation

// Global Configuration
const config = {
    colors: {
        deepOcean: '#0A2463',
        oceanBlue: '#1E3A8A',
        mediumBlue: '#3B82F6',
        lightBlue: '#60A5FA',
        coralRed: '#FB6F92',
        sunsetOrange: '#FF6B35',
        lightGray: '#E5E7EB',
        darkGray: '#374151'
    },
    // Color scales for visualizations
    mortalityColorScale: ['#DBEAFE', '#60A5FA', '#3B82F6', '#1E3A8A', '#FB6F92', '#FF6B35'],
    regionColors: ['#3B82F6', '#60A5FA', '#93C5FD', '#DBEAFE', '#FCD34D', '#FB6F92']
};

// Utility Functions

// Create a tooltip element
function createTooltip() {
    return d3.select('body')
        .append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0);
}

// Format large numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Show tooltip with content
function showTooltip(tooltip, content, event) {
    tooltip.transition()
        .duration(200)
        .style('opacity', 1);
    tooltip.html(content)
        .style('left', (event.pageX + 10) + 'px')
        .style('top', (event.pageY - 28) + 'px');
}

// Hide tooltip
function hideTooltip(tooltip) {
    tooltip.transition()
        .duration(500)
        .style('opacity', 0);
}

// VISUALIZATION 1: Choropleth Map
// Regional Shark Mortality Distribution

class ChoroplethMap {
    constructor(containerId) {
        this.containerId = containerId;
        this.container = d3.select(`#${containerId}`);
        this.margin = { top: 20, right: 20, bottom: 40, left: 20 };
        this.tooltip = createTooltip();
        
        // Get container dimensions
        const containerNode = this.container.node();
        this.width = containerNode.clientWidth - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
        
        this.init();
    }
    
    init() {
        // Clear any existing content
        this.container.html('');
        
        // Create SVG
        this.svg = this.container.append('svg')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', `translate(${this.margin.left},${this.margin.top})`);
        
        // Create color scale for mortality rates
        this.colorScale = d3.scaleThreshold()
            .domain([1000, 5000, 10000, 50000, 100000])
            .range(config.mortalityColorScale);
        
        // Set up projection for world map
        this.projection = d3.geoMercator()
            .scale(130)
            .translate([this.width / 2, this.height / 1.5]);
        
        this.pathGenerator = d3.geoPath().projection(this.projection);
        
        // Add loading message
        this.svg.append('text')
            .attr('x', this.width / 2)
            .attr('y', this.height / 2)
            .attr('text-anchor', 'middle')
            .attr('class', 'loading-text')
            .style('font-size', '1.2rem')
            .style('fill', config.colors.darkGray)
            .text('Map will appear here once data is loaded');
    }
    
    async loadData(geoJsonUrl, mortalityData) {
        try {
            // Load and process map data here
            
        } catch (error) {
            console.error('Error loading map data:', error);
        }
    }
    
    render(geoData) {
        this.svg.select('.loading-text').remove();
        
        // Draw countries/regions here
        
        this.addLegend();
    }
    
    // Add color legend to the map
    addLegend() {
        const legendData = [
            { label: '< 1K', color: config.mortalityColorScale[0] },
            { label: '1K - 5K', color: config.mortalityColorScale[1] },
            { label: '5K - 10K', color: config.mortalityColorScale[2] },
            { label: '10K - 50K', color: config.mortalityColorScale[3] },
            { label: '50K - 100K', color: config.mortalityColorScale[4] },
            { label: '> 100K', color: config.mortalityColorScale[5] }
        ];
        
        const legend = this.svg.append('g')
            .attr('class', 'legend')
            .attr('transform', `translate(20, ${this.height - 150})`);
        
        legend.append('text')
            .attr('x', 0)
            .attr('y', -10)
            .style('font-weight', 'bold')
            .style('font-size', '0.9rem')
            .text('Estimated Mortality');
        
        const legendItems = legend.selectAll('.legend-item')
            .data(legendData)
            .enter()
            .append('g')
            .attr('class', 'legend-item')
            .attr('transform', (d, i) => `translate(0, ${i * 25})`);
        
        legendItems.append('rect')
            .attr('width', 20)
            .attr('height', 20)
            .attr('fill', d => d.color)
            .attr('stroke', '#fff')
            .attr('stroke-width', 1);
        
        legendItems.append('text')
            .attr('x', 28)
            .attr('y', 15)
            .style('font-size', '0.85rem')
            .text(d => d.label);
    }
    
    // Handle mouse over event for countries
    handleMouseOver(event, d) {
        // Display tooltip with country data
        const content = `
            <strong>${d.properties.name}</strong><br/>
            Mortality: [Data needed]<br/>
            Year: 2019
        `;
        showTooltip(this.tooltip, content, event);
    }
    
    // Handle mouse out event for countries
    handleMouseOut(event, d) {
        hideTooltip(this.tooltip);
    }
    
    updateYear(year) {
        // Update map visualization for selected year
    }
}

// Initialize Visualizations

document.addEventListener('DOMContentLoaded', function() {
    console.log('Beneath the Surface: Initializing visualizations...');
    
    // Initialize Choropleth Map
    const choroplethMap = new ChoroplethMap('choropleth-map');
    
    // Load map data here
    
    console.log('Visualization initialized. Load your data to see the chart!');
});
