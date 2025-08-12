"use client";
import { useEffect } from "react";
import posthog from "posthog-js";

export function PostHogInit() {
  useEffect(() => {
    posthog.init('phx_5dJFrBdgyLUbZ3H9YDpJyqBCe1Xo5TwOsztyTIdzRil6HXD', {
  api_host: 'https://app.posthog.com',
  session_recording: { maskAllInputs: false, }, // Enables session recording with default settings
});
  posthog.startSessionRecording();

  }, []);

  return null;
}