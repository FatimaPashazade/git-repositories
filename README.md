# GitHub Repositories Viewer

This React-based project enables users to explore GitHub profiles and repositories seamlessly. Upon landing on the main page (localhost:3000), visitors are directed to the profile page (localhost:3000/profile), displaying default information from my GitHub account.

The interface features a search bar positioned at the top left corner, allowing users to enter a GitHub username. Upon submission, the page dynamically updates to showcase an overview of the entered user's profile.

Navigating to the "Repositories" tab reveals a list of repositories, providing the ability to filter repositories by their names and programming languages through a convenient dropdown menu.

## Getting Started

To get started with the project, you can clone this repository:

```bash
gh repo clone FatimaPashazade/git-repositories
```

## Installation
After cloning the repository, navigate to the project directory and install the dependencies using npm:

```bash
cd git-repositories
npm install
```

## Usage
To run the project, use the following command:

```bash
npm start
```
This will start the development server. Open your browser and navigate to http://localhost:3000 to view the application.

## Features
Search GitHub User: Enter the username of a GitHub user to view their repositories.
List Repositories: Display the repositories of the entered user.
Filtering: Filter repositories by name and programming language.

## Technologies Used
React
GitHub API
HTML/CSS
Javascript

## Acknowledgments
This project utilizes the GitHub API to fetch user repositories.

## Future Improvements
Pagination: Implement pagination for users with a large number of repositories.
Sorting: Allow users to sort repositories based on various parameters like stars, forks, or creation date.
User Authentication: Enable user authentication for more access to private repositories and enhanced features.
Responsive Design: Ensure the application is fully responsive for different screen sizes.
Unit Testing: Implement comprehensive unit tests for improved code reliability.
