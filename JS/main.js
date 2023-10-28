const SearchButton = document.querySelector('.search-button');
const SearchInput = document.querySelector('.search-input');
const SearchBar = document.querySelector('.search-container');
const UserInfos = document.querySelector('.user-infos-container');
const GitHubAvatar = document.querySelector('.github-avatar');
const GitHubName = document.querySelector('.github-name');
const GitHubBio = document.querySelector('.github-bio');
const GitHubEmail = document.querySelector('.github-email');
const GitHubLocation = document.querySelector('.github-location');
const GitHubCompany = document.querySelector('.github-company');
const GitHubCreationDate = document.querySelector('.github-creation-date');
const GitHubFollowers = document.querySelector('.github-followers');
const GitHubFollowing = document.querySelector('.github-following');

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
    SearchBar.style.top = '12.5%';

    let GitHubData = fetchGitHubUserData(Username)
    GitHubAvatar.style.backgroundImage = `url(https://avatars.githubusercontent.com/${Username})`;
    GitHubName.innerHTML = GitHubData.data.name;
    console.log(GitHubData.data.name);
    console.log(GitHubData);
}

SearchButton.addEventListener('click', handleSearch);

SearchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});