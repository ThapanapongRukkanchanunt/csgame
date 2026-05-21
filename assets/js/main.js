document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !expanded);
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }

    // Event Search and Filter
    const eventSearch = document.getElementById('eventSearch');
    const filterChips = document.querySelectorAll('.filter-chip');
    const eventItems = document.querySelectorAll('.event-item');
    const upcomingList = document.getElementById('upcomingList');
    const pastList = document.getElementById('pastList');

    if (eventSearch || filterChips.length > 0) {
        let activeTag = 'all';
        let searchQuery = '';

        const filterEvents = () => {
            let upcomingCount = 0;
            let pastCount = 0;

            eventItems.forEach(item => {
                const title = item.getAttribute('data-title') || '';
                const subtitle = item.getAttribute('data-subtitle') || '';
                const speakers = item.getAttribute('data-speakers') || '';
                const tags = item.getAttribute('data-tags') || '';

                const matchesTag = activeTag === 'all' || tags.includes(activeTag);
                const matchesSearch = title.includes(searchQuery) || 
                                      subtitle.includes(searchQuery) || 
                                      speakers.includes(searchQuery) ||
                                      tags.includes(searchQuery);

                if (matchesTag && matchesSearch) {
                    item.style.display = 'block';
                    item.classList.add('fade-in');
                    if (item.classList.contains('upcoming')) upcomingCount++;
                    if (item.classList.contains('past')) pastCount++;
                } else {
                    item.style.display = 'none';
                    item.classList.remove('fade-in');
                }
            });

            // Toggle "No events found" placeholders
            const upcomingPlaceholder = upcomingList ? upcomingList.querySelector('.no-events-placeholder') : null;
            const pastPlaceholder = pastList ? pastList.querySelector('.no-events-placeholder') : null;

            if (upcomingPlaceholder) {
                upcomingPlaceholder.style.display = upcomingCount === 0 ? 'block' : 'none';
            }
            if (pastPlaceholder) {
                pastPlaceholder.style.display = pastCount === 0 ? 'block' : 'none';
            }
        };

        if (eventSearch) {
            eventSearch.addEventListener('input', (e) => {
                searchQuery = e.target.value.toLowerCase().trim();
                filterEvents();
            });
        }

        filterChips.forEach(chip => {
            chip.addEventListener('click', () => {
                filterChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                activeTag = chip.getAttribute('data-tag');
                filterEvents();
            });
        });
    }
});
