function Overview({userData, userRepos }) {

  const nonForkedRepos = userRepos ? userRepos.filter(repo => !repo.fork) : [];
  const firstFourRepos = nonForkedRepos.slice(0, 6);

  return (
    <div className="overview">
      {userData && (
        <div className="overviewDescription">
          <p>{userData.bio}</p>
        </div>
      )}

      <div className="repositories">
        <div className="repositoriesTitle">
          <h2>Popular Repositories</h2>
        </div>

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
