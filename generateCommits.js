const { execSync } = require("child_process");
const fs = require("fs");

// Number of commits to generate
const TOTAL_COMMITS = 365;

// Helper to generate random dates within the past year
function getRandomDate() {
  const start = new Date();
  start.setFullYear(start.getFullYear() - 1);
  const end = new Date();
  const randomTimestamp = start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTimestamp).toISOString();
}

// Main function to generate commits
for (let i = 1; i <= TOTAL_COMMITS; i++) {
  const date = getRandomDate();
  const fileName = `file_${i}.txt`;

  // Create or modify a file
  fs.writeFileSync(fileName, `Commit #${i} made on ${date}\n`, "utf8");

  // Stage the file
  execSync(`git add ${fileName}`);

  // Commit with a specific date
  execSync(`GIT_COMMITTER_DATE="${date}" git commit --date="${date}" -m "Random commit #${i}"`);

  console.log(`Commit #${i} created for date: ${date}`);
}
