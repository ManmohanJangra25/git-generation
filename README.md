# Git Commit Automation

This project automates the creation of random Git commits for the past year to enhance your GitHub contribution graph. It uses a Node.js script to generate files, stage them, and commit with randomized timestamps.

## How It Works

The script (`generateCommits.js`) performs the following steps:

1. **Generate Random Dates:**  
   A random date within the past year is generated for each commit.

2. **Create or Modify Files:**  
   A new file is created (e.g., `file_1.txt`) with unique content for each commit.

3. **Stage and Commit Files:**  
   The script stages the file and creates a commit with a custom message and the generated random date.

4. **Push Changes to GitHub:**  
   After all commits are created, they are pushed to the GitHub repository, updating your contribution graph.

---

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your system.
- **Git**: Git must be installed and configured.
- **GitHub Repository**: Create a new private repository to store the commits.

---

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/commit-history-generator.git
   cd commit-history-generator
   ```

2. **Initialize the Project**
   ```bash
   npm init -y
   ```

3. **Create the Script**
   Save the following script as `generateCommits.js`:

   ```javascript
   const { execSync } = require("child_process");
   const fs = require("fs");

   const TOTAL_COMMITS = 365;

   function getRandomDate() {
       const start = new Date();
       start.setFullYear(start.getFullYear() - 1);
       const end = new Date();
       const randomTimestamp = start.getTime() + Math.random() * (end.getTime() - start.getTime());
       return new Date(randomTimestamp).toISOString();
   }

   for (let i = 1; i <= TOTAL_COMMITS; i++) {
       const date = getRandomDate();
       const fileName = `file_${i}.txt`;

       fs.writeFileSync(fileName, `Commit #${i} made on ${date}\n`, "utf8");

       execSync(`git add ${fileName}`);
       execSync(`GIT_COMMITTER_DATE=\"${date}\" git commit --date=\"${date}\" -m \"Random commit #${i}\"`);

       console.log(`Commit #${i} created for date: ${date}`);
   }
   ```

4. **Run the Script**
   Execute the script to generate commits:
   ```bash
   node generateCommits.js
   ```

5. **Push to GitHub**
   Push the commits to your repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/your-username/commit-history-generator.git
   git push -u origin main
   ```

---

## Customization

- **Number of Commits:**  
  Adjust the `TOTAL_COMMITS` variable in the script to control the number of commits.

- **Commit Density:**  
  Modify the logic to generate more commits on specific days for a denser contribution graph.

- **Commit Messages:**  
  Customize the commit messages in the script to suit your needs.

---

## Future Enhancements

- **Dynamic Commit Frequencies:**  
  Simulate busier days by generating multiple commits for certain dates.

- **GitHub Actions Integration:**  
  Automate the entire process using GitHub Actions for seamless CI/CD workflows.

- **Topic-Specific Content:**  
  Use the script to commit specific project-related content, such as Leetcode solutions or code snippets.

---

## Author

[Manmohan Jangra](https://github.com/ManmohanJangra25)
