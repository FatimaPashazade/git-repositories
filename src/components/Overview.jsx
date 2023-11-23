import React from 'react';

/**
 * Component: Overview
 * Description: Renders an overview section displaying user data and popular repositories.
 * @param {object} userData - User data object containing information like bio.
 * @param {array} userRepos - Array of user repositories.
 * @returns {JSX.Element} - JSX for the overview section.
 */
function Overview({ userData, userRepos }) {
  // Filtering non-forked repositories
  const nonForkedRepos = userRepos ? userRepos.filter(repo => !repo.fork) : [];
  const firstFourRepos = nonForkedRepos.slice(0, 6); // Get the first four repositories

  return (
    <div className="overview">
      {/* Display user's bio if available */}
      {userData && (
        <div className="overviewDescription">
          <p>{userData.bio}</p>
        </div>
      )}

      {/* Display popular repositories */}
      <div className="repositories">
        <div className="repositoriesTitle">
          <h2>Popular Repositories</h2>
        </div>

        {/* Display repository cards */}
        <div className="repositoriesContainer">
          {firstFourRepos.map((repo, i) => (
            <div className="repositoriesBox" key={i}>
              <div className="repositoriesTop">
                <h3>
                  {/* Make the repository name clickable */}
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </a>
                </h3>
                <p>{repo.visibility}</p>
              </div>
              <div className="repositoriesBottom">
                <p>{repo.language}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overview;
