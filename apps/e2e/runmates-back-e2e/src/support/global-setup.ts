import { spawn } from 'child_process';
import http from 'http';

const backendUrl = "https://runmates-back-d11d62e14353.herokuapp.com/";
// Function to check if backend is ready
const checkBackend = () =>
  new Promise<boolean>((resolve) => {
    http.get(backendUrl, (res) => {
      resolve(res.statusCode === 200);
    }).on("error", () => resolve(false));
  });


const waitForBackend = async () => {
  console.log("⏳ Waiting for backend to start...");
  for (let i = 0; i < 10; i++) {
    if (await checkBackend()) return;
    await new Promise((r) => setTimeout(r, 2000));
  }
  throw new Error("❌ Backend did not start in time.");
};

/* eslint-disable */
var __TEARDOWN_MESSAGE__: string;

module.exports = async function () {
  // Start services that that the app needs to run (e.g. database, docker-compose, etc.).
  console.log('\nSetting up...\n');
  const backendProcess = spawn("yarn", ["start", "runmates-back"], { stdio: "inherit" });

  backendProcess.on("error", (err) => console.error("Failed to start backend:", err));  await waitForBackend();

  // Hint: Use `globalThis` to pass variables to global teardown.
  globalThis.__TEARDOWN_MESSAGE__ = '\nStopping runmates-back\n';
  globalThis.__BACKEND_PROCESS__ = backendProcess;
};
