document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting JEICA Jewelry & Watches!');
  this.reset();
});
document.querySelector('.shop-now-btn').addEventListener('click', function() {
  var productSection=document.getElementById('#products');
  productSection.scrollIntoView({ behavior: 'smooth'});
});
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const content = document.querySelectorAll('.content');

document.getElementById('search-button').addEventListener('click', function() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const content = document.querySelectorAll('.content');
  const searchResults = document.getElementById('search-results');

  searchResults.innerHTML = '';

  content.forEach(function(item) {
    if (item.textContent.toLowerCase().includes(searchTerm)) {
      const clone = item.cloneNode(true);
      searchResults.appendChild(clone);
    }
  });

  if (searchResults.children.length === 0) {
    searchResults.textContent = 'No results found.';
  }
});
