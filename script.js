// Travel Recommendations Data with Multimedia Content
// Note: YouTube video IDs can be updated by finding the video on YouTube and using the ID from the URL
// Example: https://www.youtube.com/watch?v=VIDEO_ID_HERE
const recommendations = {
    beaches: [
        {
            name: "Maldives",
            description: "Experience pristine white sand beaches and crystal-clear turquoise waters in this tropical paradise. Perfect for relaxation and water activities.",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
            youtubeId: "3FM1waTeTDE",
            itinerary: {
                title: "7-Day Maldives Itinerary",
                days: [
                    "Day 1: Arrive in Male, transfer to your resort, relax on the beach",
                    "Day 2: Snorkeling adventure in the coral reefs",
                    "Day 3: Island hopping tour to local villages",
                    "Day 4: Water sports - jet skiing, parasailing",
                    "Day 5: Spa day and sunset cruise",
                    "Day 6: Dolphin watching and fishing trip",
                    "Day 7: Last day at the beach, departure"
                ]
            }
        },
        {
            name: "Bora Bora",
            description: "Discover the stunning overwater bungalows and vibrant coral reefs. A dream destination for honeymooners and luxury travelers.",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
            youtubeId: "gSudm8JWvlQ",
            itinerary: {
                title: "5-Day Bora Bora Itinerary",
                days: [
                    "Day 1: Arrival, check into overwater bungalow, welcome dinner",
                    "Day 2: Lagoon tour and shark feeding experience",
                    "Day 3: Mount Otemanu hiking and cultural tour",
                    "Day 4: Private beach picnic and water activities",
                    "Day 5: Relaxation day, spa, departure"
                ]
            }
        }
    ],
    temples: [
        {
            name: "Angkor Wat, Cambodia",
            description: "Explore the magnificent ancient temple complex, a UNESCO World Heritage site showcasing Khmer architecture and spiritual significance.",
            image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
            youtubeId: "Qh8fZUnpKyg",
            itinerary: {
                title: "3-Day Angkor Wat Itinerary",
                days: [
                    "Day 1: Arrive in Siem Reap, visit Angkor Wat at sunrise, explore Angkor Thom",
                    "Day 2: Visit Ta Prohm (Tomb Raider temple), Bayon Temple, Banteay Srei",
                    "Day 3: Floating village tour, local market, cultural show, departure"
                ]
            }
        },
        {
            name: "Taj Mahal, India",
            description: "Marvel at this iconic marble mausoleum, a symbol of eternal love and one of the Seven Wonders of the World.",
            image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
            youtubeId: "6rTpDK1ea0s",
            itinerary: {
                title: "4-Day Agra & Taj Mahal Itinerary",
                days: [
                    "Day 1: Arrive in Agra, visit Taj Mahal at sunset",
                    "Day 2: Sunrise at Taj Mahal, Agra Fort, Itmad-ud-Daulah's Tomb",
                    "Day 3: Fatehpur Sikri day trip, local cuisine tour",
                    "Day 4: Shopping for marble crafts, departure"
                ]
            }
        }
    ],
    countries: [
        {
            name: "Japan",
            description: "Experience the perfect blend of ancient traditions and modern innovation. From cherry blossoms to cutting-edge technology, Japan offers unique cultural experiences.",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
            youtubeId: "lw6XdJELTgk",
            itinerary: {
                title: "10-Day Japan Itinerary",
                days: [
                    "Day 1-2: Tokyo - Shibuya, Harajuku, Meiji Shrine",
                    "Day 3: Tokyo - Tsukiji Market, Imperial Palace, Asakusa",
                    "Day 4: Day trip to Mount Fuji and Hakone",
                    "Day 5-6: Kyoto - Fushimi Inari, Arashiyama Bamboo Grove, Kiyomizu Temple",
                    "Day 7: Nara day trip - Todai-ji Temple, Nara Park",
                    "Day 8: Osaka - Dotonbori, Osaka Castle",
                    "Day 9: Hiroshima - Peace Memorial Park, Miyajima Island",
                    "Day 10: Return to Tokyo, departure"
                ]
            }
        },
        {
            name: "Italy",
            description: "Indulge in rich history, world-class cuisine, and breathtaking landscapes. From the Colosseum to the Amalfi Coast, Italy captivates every traveler.",
            image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&h=600&fit=crop",
            youtubeId: "Lwbw4epDCVQ",
            itinerary: {
                title: "12-Day Italy Itinerary",
                days: [
                    "Day 1-3: Rome - Colosseum, Vatican, Trevi Fountain, Spanish Steps",
                    "Day 4-5: Florence - Uffizi Gallery, Duomo, Ponte Vecchio",
                    "Day 6: Day trip to Tuscany wine region",
                    "Day 7-8: Venice - St. Mark's Square, Grand Canal, Murano Island",
                    "Day 9-10: Amalfi Coast - Positano, Capri Island",
                    "Day 11: Pompeii ruins tour",
                    "Day 12: Return to Rome, departure"
                ]
            }
        }
    ]
};

// Function to create recommendation card
function createRecommendationCard(item) {
    const card = document.createElement('div');
    card.className = 'recommendation-card';
    
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="recommendation-card-content">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        </div>
    `;
    
    return card;
}

// Function to create multimedia content (YouTube + Itinerary)
function createMultimediaContent(items, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    items.forEach(item => {
        const multimediaCard = document.createElement('div');
        multimediaCard.className = 'multimedia-card';
        
        // YouTube Video Section
        const videoSection = document.createElement('div');
        videoSection.className = 'video-section';
        videoSection.innerHTML = `
            <h4>${item.name} - Travel Guide</h4>
            <div class="video-wrapper">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/${item.youtubeId}" 
                    title="${item.name} Travel Video"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        `;
        
        // Itinerary Section
        const itinerarySection = document.createElement('div');
        itinerarySection.className = 'itinerary-section';
        itinerarySection.innerHTML = `
            <h4>${item.itinerary.title}</h4>
            <ul class="itinerary-list">
                ${item.itinerary.days.map(day => `<li>${day}</li>`).join('')}
            </ul>
        `;
        
        multimediaCard.appendChild(videoSection);
        multimediaCard.appendChild(itinerarySection);
        container.appendChild(multimediaCard);
    });
}

// Function to load beach recommendations
function loadBeachRecommendations() {
    const beachGrid = document.getElementById('beach-grid');
    if (beachGrid) {
        beachGrid.innerHTML = ''; // Clear existing content
        recommendations.beaches.forEach(beach => {
            const card = createRecommendationCard(beach);
            beachGrid.appendChild(card);
        });
    }
    // Load multimedia content
    createMultimediaContent(recommendations.beaches, 'beach-multimedia');
}

// Function to load temple recommendations
function loadTempleRecommendations() {
    const templeGrid = document.getElementById('temple-grid');
    if (templeGrid) {
        templeGrid.innerHTML = ''; // Clear existing content
        recommendations.temples.forEach(temple => {
            const card = createRecommendationCard(temple);
            templeGrid.appendChild(card);
        });
    }
    // Load multimedia content
    createMultimediaContent(recommendations.temples, 'temple-multimedia');
}

// Function to load country recommendations
function loadCountryRecommendations() {
    const countryGrid = document.getElementById('country-grid');
    if (countryGrid) {
        countryGrid.innerHTML = ''; // Clear existing content
        recommendations.countries.forEach(country => {
            const card = createRecommendationCard(country);
            countryGrid.appendChild(card);
        });
    }
    // Load multimedia content
    createMultimediaContent(recommendations.countries, 'country-multimedia');
}

// Function to get personalized suggestions based on preference
function getPersonalizedSuggestions(preference) {
    const resultsContainer = document.getElementById('personalized-results');
    if (!resultsContainer) return;
    
    resultsContainer.innerHTML = '';
    
    let suggestions = [];
    let title = '';
    
    switch(preference) {
        case 'beach':
            suggestions = recommendations.beaches;
            title = 'Beach & Relaxation Recommendations';
            break;
        case 'temple':
            suggestions = recommendations.temples;
            title = 'Temple & Culture Recommendations';
            break;
        case 'country':
            suggestions = recommendations.countries;
            title = 'Country Exploration Recommendations';
            break;
        case 'all':
            suggestions = [...recommendations.beaches, ...recommendations.temples, ...recommendations.countries];
            title = 'All Travel Recommendations';
            break;
        default:
            return;
    }
    
    if (suggestions.length === 0) return;
    
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    titleElement.className = 'personalized-title';
    resultsContainer.appendChild(titleElement);
    
    const grid = document.createElement('div');
    grid.className = 'recommendation-grid';
    
    suggestions.forEach(item => {
        const card = createRecommendationCard(item);
        grid.appendChild(card);
    });
    
    resultsContainer.appendChild(grid);
    
    // Smooth scroll to results
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate and handle contact form
function handleContactForm() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form elements
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            const messageError = document.getElementById('message-error');
            
            // Reset previous errors
            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';
            successMessage.style.display = 'none';
            
            let isValid = true;
            
            // Validate name
            if (!nameInput.value.trim()) {
                nameError.textContent = 'Name is required';
                isValid = false;
            }
            
            // Validate email
            if (!emailInput.value.trim()) {
                emailError.textContent = 'Email is required';
                isValid = false;
            } else if (!validateEmail(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address';
                isValid = false;
            }
            
            // Validate message
            if (!messageInput.value.trim()) {
                messageError.textContent = 'Message is required';
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                successMessage.style.display = 'block';
                form.reset();
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load recommendations on home page
    loadBeachRecommendations();
    loadTempleRecommendations();
    loadCountryRecommendations();
    
    // Initialize contact form validation
    handleContactForm();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize personalized suggestions
    const suggestionsBtn = document.getElementById('get-suggestions');
    const preferenceSelect = document.getElementById('travel-preference');
    
    if (suggestionsBtn && preferenceSelect) {
        suggestionsBtn.addEventListener('click', function() {
            const preference = preferenceSelect.value;
            if (preference) {
                getPersonalizedSuggestions(preference);
            } else {
                alert('Please select a travel preference first!');
            }
        });
    }
});

