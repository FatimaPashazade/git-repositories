export const fetchUserData = (searchInputt = 'fatimapashazade') => {
  return fetch(`https://api.github.com/users/${searchInputt}`)
    .then(response => {
      if (!response.ok) {
        return
      }
      return response.json();
    });
};

export const fetchUserRepos = (searchInputt = 'fatimapashazade') => {
  return fetch(`https://api.github.com/users/${searchInputt}/repos`)
    .then(response => {
      if (!response.ok) {
        return
      }
      return response.json();
    });
};
