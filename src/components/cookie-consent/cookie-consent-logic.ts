import { isBrowser, isServer } from "@builder.io/qwik/build";

declare const window: any;

const cookieConsentVersion = 0;

export function CCM_getCookie(nameInput: string) {
  const name = nameInput + "=";

  if (isBrowser) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(";");
    for (let i = 0; i < cookies.length; ++i) {
      let c = cookies[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
  }
  return "";
}

function getCookieConsent(forceShow: boolean) {
  const consent = CCM_getCookie("ccm_accepted_v" + cookieConsentVersion);
  if (consent !== "yes" || forceShow) {
    // if the consent form hasn't been shown to the user, show it
  } else {
    const isTracking = CCM_getCookie("ccm_trackAnalytics");
    // renew the cookies so frequent users don't get the popup all the time
    CCM_setCookies(isTracking === "yes");
    if (isTracking === "yes") {
      enableTracking();
    }
  }
}

function CCM_setCookies(isTracking: boolean) {
  if (isServer) return;

  const expires = new Date();
  expires.setMonth(expires.getMonth() + 1);

  if (isTracking) {
    document.cookie =
      "ccm_trackAnalytics=yes; path=/; expires=" +
      expires.toUTCString() +
      "; Secure";
  } else {
    document.cookie =
      "ccm_trackAnalytics=no; path=/; expires=" +
      expires.toUTCString() +
      "; Secure";
  }
  // save that the popup has been seen and accepted
  document.cookie =
    "ccm_accepted_v" +
    cookieConsentVersion +
    "=yes; path=/; expires=" +
    expires.toUTCString() +
    "; Secure";

  window.dataLayer = window.dataLayer || [];
  // export function gtag() { dataLayer.push(arguments); }
}

export function enableTracking() {
  const gtag: Gtag.Gtag = function () {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    }
  };

  gtag("js", new Date());
  gtag("config", "G-M1S4NQB70S", { anonymize_ip: true });

  gtag("consent", "update", {
    analytics_storage: "granted",
  });
}

export async function cookieConsentGranted(): Promise<void> {
  CCM_setCookies(true);
  enableTracking();
}

export async function cookieConsentRejected(): Promise<void> {
  CCM_setCookies(false);
}

export function showCookiebanner(): boolean {
  return (
    CCM_getCookie("ccm_trackAnalytics")?.length === 0 ||
    CCM_getCookie("ccm_trackAnalytics") === "no"
  );
}

getCookieConsent(false);
