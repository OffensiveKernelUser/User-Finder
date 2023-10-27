const SearchButton = document.querySelector('.search-button');
const SearchInput = document.querySelector('.search-input');
const SearchBar = document.querySelector('.search-container');
const UserInfos = document.querySelector('.user-infos-container');

async function fetchGitHubUserData(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return data;
}

function handleSearch() {
    const Username = SearchInput.value;
    
    if (Username === '') {
        return;
    }

    UserInfos.style.display = 'flex';
    SearchBar.style.top = '12.5%'

    let GitHubData = fetchGitHubUserData(Username)
    console.log(GitHubData)
}

SearchButton.addEventListener('click', handleSearch);

SearchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});