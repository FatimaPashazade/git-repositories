import React, { useState } from 'react';

/**
 * Component: RepositoriesTab
 * Description: Renders a tab displaying user repositories with search and filter options.
 * @param {array} userRepos - Array of user repositories.
 * @returns {JSX.Element} - JSX for the repositories tab.
 */
function RepositoriesTab({ userRepos }) {
  // State for search term and selected language filter
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('ALL');

  // Extract unique languages from user repositories
  const languages = ['ALL', ...new Set(userRepos.map(repo => repo.language).filter(Boolean))];

  // Filter non-forked repositories based on search term and selected language
  const nonForkedRepos = userRepos
    ? userRepos.filter(
        repo =>
          !repo.fork &&
          (repo.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
          (selectedLanguage === 'ALL' || repo.language === selectedLanguage)
      )
    : [];

  return (
    <div className="repositories-tab">
      {/* Title and search/filter options */}
      <div className="repositories-title">
        <h2>Your Repositories</h2>
        {/* Search input */}
        <input
          type="text"
          placeholder="Search repositories"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        {/* Language filter dropdown */}
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="custom-dropdown"
        >
          {languages.map((lang, i) => (
            <option key={i} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      {/* Display filtered repositories */}
      <div className="repositories-container">
        {nonForkedRepos.map((repo, i) => (
          <div className="repository-box" key={i}>
            <div className="repository-top">
              <h3>
                {/* Make the repository name clickable */}
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </h3>
              <p className="repository-description">{repo.description}</p>
            </div>
            <div className="repository-bottom">
              <div className="repository-language">
                <span>{repo.language}</span>
              </div>
              {/* Additional repository details can be added here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RepositoriesTab;
