// Profile.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineInbox } from 'react-icons/ai';
import { TbBook, TbBook2 } from 'react-icons/tb';
import { FiBox, FiStar } from 'react-icons/fi';
import Left from '../components/Left';
import Overview from '../components/Overview';
import RepositoriesTab from '../components/Repositories';
import { fetchUserData, fetchUserRepos } from '../components/githubApi';

function Profile() {
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const { searchInput } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserData(searchInput);
      setUserData(data);

      const repos = await fetchUserRepos(searchInput);
      setUserRepos(repos);
    };

    fetchData();
  }, [searchInput]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'repositories':
        return <RepositoriesTab userRepos={userRepos}/>;
      case 'projects':
        return <div>Projects Content</div>;
      case 'packages':
        return <div>Packages Content</div>;
      case 'stars':
        return <div>Stars Content</div>;
      default:
        return <Overview userData={userData} userRepos={userRepos} />;
    }
  };

  return (
    <div className="profile">
      <nav>
        <div className="profileIcon" onClick={() => setActiveTab('overview')}>
          <TbBook />
          <h2>Overview</h2>
        </div>
        <div className="profileIcon" onClick={() => setActiveTab('repositories')}>
          <TbBook2 />
          <h2>Repositories</h2>
        </div>
        <div className="profileIcon" >
          <AiOutlineInbox />
          <h2>Projects</h2>
        </div>
        <div className="profileIcon" >
          <FiBox />
          <h2>Packages</h2>
        </div>
        <div className="profileIcon">
          <FiStar />
          <h2>Stars</h2>
        </div>
      </nav>

      <div className="lineFour" />

      <div className="sectionCenter">
        <Left userData={userData} />
        {renderTabContent()}
      </div>
    </div>
  );
}

export default Profile;
