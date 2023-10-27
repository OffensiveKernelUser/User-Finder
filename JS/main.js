const SearchButton = document.querySelector('.search-button');
const SearchInput = document.querySelector('.search-input');

function handleSearch() {
    const searchTerm = SearchInput.value;
    
    if (searchTerm === '') {
        return;
    }

    //Code to search for the term
}

SearchButton.addEventListener('click', handleSearch);

SearchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});