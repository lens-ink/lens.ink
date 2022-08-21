import { isProduction } from "./constant";
import * as playwright from "playwright-aws-lambda";
import { chromium } from "@playwright/test";
import { loadFont } from "playwright-aws-lambda";

export interface ExportProfileProps {
  width?: number;
  height?: number;
  timeout?: number;
  handle: string;
  theme: 'light' | 'dark'
}

export async function exportProfile({
  width = 2560,
  height = 1440,
  timeout = 30000,
  theme,
  handle,
}: ExportProfileProps) {
  console.log("started");
  const browser = isProduction
    ? await playwright.launchChromium()
    : await chromium.launch();
  if (isProduction)
    await loadFont(
      "https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf"
    );
  const context = await browser.newContext({
    viewport: {
      width,
      height,
    },
    deviceScaleFactor: 1.5,
    colorScheme: theme
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
