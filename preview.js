const { exec } = require("child_process");

const port = process.env.PORT || 4173;

exec(`npx vite preview --host --port ${port}`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(stdout);
});