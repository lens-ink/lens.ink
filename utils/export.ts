import { isProduction } from "./constant";
import { chromium } from "@playwright/test";

export interface ExportProfileProps {
  width?: number;
  height?: number;
  timeout?: number;
  handle: string;
}

export async function exportProfile({
  width = 2560,
  height = 1440,
  timeout = 30000,
  handle,
}: ExportProfileProps) {
  console.log("started");
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: {
      width,
      height,
    },
    deviceScaleFactor: 1.5,
  });
  const page = await context.newPage();
  const url = isProduction
    ? `https://${handle}.lens.ink`
    : `http://${handle}.localhost:3000`;
  await page.goto(url, {
    waitUntil: "networkidle",
    timeout,
  });
  console.log("loaded");
  await page.waitForLoadState("networkidle");
  console.log("loaded");

  await page.emulateMedia({
    colorScheme: "light",
    media: "screen",
  });
  console.log("page loaded");
  const frames = page.frames();
  await Promise.all(frames.map((frame) => frame.waitForLoadState()));

  const profileCard = page.locator(".profile-card");
  const buffer = await profileCard.screenshot();
  await browser.close();
  return buffer;
}
