import React, { useState } from 'react';



function RepositoriesTab({ userRepos }) {
  // Filter out forked repositories
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('ALL');

  // const nonForkedRepos = userRepos ? userRepos.filter(repo => !repo.fork) : [];

  const languages = ['ALL', ...new Set(userRepos.map(repo => repo.language).filter(Boolean))];


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
      <div className="repositories-title">
        <h2>Your Repositories</h2>
        <input
          type="text"
          placeholder="Search repositories"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
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
        {/* <div className="repository-stats">
          <span>{repo.stargazers_count} Stars</span>
          <span>{repo.forks_count} Forks</span>
        </div> */}
      </div>
    </div>
  ))}
</div>


    </div>
  );
}

export default RepositoriesTab;
