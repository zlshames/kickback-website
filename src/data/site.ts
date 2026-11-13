// Everything a non-developer is likely to change lives here:
// the product name, prices, download links and the FAQ.

export const site = {
  name: 'Kickback', // short name; the full product name is "Kickback for Mac"
  companion: 'Kickback Companion', // the phone app
  tagline: 'Your Mac, made for the couch.',
  description:
    'Kickback turns any Mac into a living-room TV box: a launcher of beautiful tiles for your apps and streaming sites, driven from your phone. No server, no account, end-to-end encrypted.',
  version: '0.1.0',
  minMacOS: 'macOS 14 Sonoma',

  // Downloads and store pages. Leave one as null until it exists: its buttons show grayed out,
  // labeled "Coming soon", instead of linking nowhere.
  links: {
    macDownload: null as string | null, // e.g. https://getkickback.app/downloads/Kickback-0.1.0.dmg
    iosRemote: null as string | null,
    androidRemote: null as string | null,
  },

  // Source code, and where to ask for help or report a problem. There's no support email.
  github: {
    mac: 'https://github.com/zlshames/kickback-for-mac',
    companion: 'https://github.com/zlshames/kickback-companion',
    issues: 'https://github.com/zlshames/kickback-for-mac/issues',
  },

  // The phone app, for the guest invite links (https://getkickback.app/join#…, see /join). These are
  // also written into public/.well-known/apple-app-site-association and assetlinks.json, which
  // have to be edited by hand to match: they're plain files, not built from here.
  remoteApp: {
    iosAppID: 'WPV275H8W7.app.getkickback.kickbackCompanion', // team ID . bundle ID (remote/ios/Runner.xcodeproj)
    androidPackage: 'app.getkickback.kickback_companion', // remote/android/app/build.gradle.kts
    // PLACEHOLDER. The SHA-256 fingerprint of the Play release signing certificate (Play Console →
    // App integrity), which doesn't exist until the store build does. Until then App Links don't
    // verify on Android, and an invite opens this page; its Open in Kickback Companion button still works.
    androidCertSHA256: 'REPLACE_WITH_RELEASE_SIGNING_CERT_SHA256',
  },
};

// Nothing in the app enforces these yet; keep them in step with the license server.
export const pricing = {
  currency: '$',
  trialDays: 3,
  plans: [
    {
      id: 'remote',
      name: 'Companion',
      price: 0,
      cadence: 'Forever',
      blurb: 'The phone app for iPhone and Android. Pair it with as many Macs as you like.',
      cta: { label: 'Get Kickback Companion', href: '/download#remote' },
      featured: false,
      features: [
        'Swipe pad, D-pad and trackpad',
        'Live keyboard and dictation',
        'Now Playing, scenes and controls',
        'App switcher with browser tabs',
        'Share links straight to the TV',
        'Lock-screen media controls',
      ],
    },
    {
      id: 'direct',
      name: 'Kickback',
      price: 5,
      cadence: 'One-time purchase',
      blurb: 'The complete Mac app. Every feature, no subscription.',
      cta: { label: 'Download free trial', href: '/download' },
      featured: true,
      badge: 'Everything included',
      features: [
        'The full tvOS-style launcher',
        'Now Playing with artwork and seeking',
        'Brightness, Night Shift and Dark Mode',
        'Browser tab reuse and tab switching',
        'Ask, Smart Clipboard and Organize Tiles',
        'Scenes, sleep timer and window tools',
        'Use on every Mac you own',
      ],
    },
  ],
};


export type Faq = { q: string; a: string };
export const faqs: { group: string; items: Faq[] }[] = [
  {
    group: 'The basics',
    items: [
      {
        q: 'What is Kickback, exactly?',
        a: 'Two apps that work together. On your Mac, Kickback is a full-screen launcher of large, focusable tiles for your apps, websites and Shortcuts, in the spirit of a set-top box home screen. On your phone, the free remote app drives it: swipe pad, trackpad, keyboard, media keys and more.',
      },
      {
        q: 'Which Macs does it run on?',
        a: 'Any Mac running macOS 14 Sonoma or later. The Apple Intelligence features (Ask, scene drafts, Organize Tiles and Smart Clipboard) need macOS 26 or later on an Apple-silicon Mac with Apple Intelligence turned on. Everything else works on Sonoma.',
      },
      {
        q: 'Do I need an Apple TV or any extra hardware?',
        a: 'No. A Mac connected to a TV or display (HDMI, a dock, or just a laptop on the coffee table) and a phone are all you need. A Mac mini behind the TV is the classic setup.',
      },
      {
        q: 'Which phones work as a remote?',
        a: 'iPhone and Android. Both get the same remote: the Mac does the heavy lifting, so features like Ask run on the Mac and work from either platform.',
      },
      {
        q: 'Can I use it without a phone?',
        a: 'Yes. The launcher works with the Mac keyboard (arrows, Return, Esc), a mouse, and PlayStation, Xbox or MFi game controllers.',
      },
    ],
  },
  {
    group: 'Setup and connection',
    items: [
      {
        q: 'How do the phone and Mac connect?',
        a: 'Directly, over your Wi-Fi network (Bonjour discovery and a WebSocket) or over Bluetooth LE. There is no relay server in between and nothing to sign in to.',
      },
      {
        q: 'How does pairing work?',
        a: 'The first time a phone connects, your Mac shows a 6-digit code. Type it on the phone and the two devices exchange keys. After that the phone reconnects on its own, and you can remove any paired remote from Settings on the Mac.',
      },
      {
        q: 'Which permissions does the Mac app ask for?',
        a: 'Bluetooth and Local Network so remotes can find it, and Accessibility so the trackpad, keyboard and media keys from your phone can be delivered to other apps. Some optional features ask once for their own permission, such as controlling a browser to reuse its tabs.',
      },
      {
        q: 'Can it wake my Mac?',
        a: 'Yes. A paired Mac that is asleep shows a Wake button on the remote (Wake on LAN), and the remote connects as soon as the Mac is up. It needs "Wake for network access" turned on. On iPhone this depends on an Apple entitlement that is still pending, so today Wake works from Android.',
      },
      {
        q: 'What is Dedicated TV Mode?',
        a: 'A setting for Macs that live behind a TV. Kickback launches at login, stays full screen, makes the apps it opens full screen too, and keeps the display awake.',
      },
    ],
  },
  {
    group: 'Features',
    items: [
      {
        q: 'Which streaming services work?',
        a: 'Anything that runs on your Mac: native apps become app tiles, and any website becomes a link tile with automatic artwork. The remote has tailored controls for YouTube, Netflix, Prime Video, Disney+, Hulu, Twitch, Plex, the TV app, IINA, VLC and QuickTime: Select plays and pauses, left and right seek, with shortcuts for full screen and captions.',
      },
      {
        q: 'What are Scenes?',
        a: 'One tap that runs a series of steps. Movie Night, for example, turns on Do Not Disturb, dims the screen, sets the volume and goes full screen. Scenes can set any control, switch audio output, open a tile, start the sleep timer, move a window or run a Shortcut. They live on the Mac, so every remote sees the same set.',
      },
      {
        q: 'What does Ask do?',
        a: 'Say or type what you want, like "put on Netflix and dim the screen" or "sleep in 30 minutes". Kickback turns the request into its own real actions and checks every name against what is actually on your Mac, so it cannot invent anything. Bigger or harder-to-undo requests show a Run button first.',
      },
      {
        q: 'Can it run my Shortcuts?',
        a: 'Yes. Any shortcut can be a tile or a step in a scene. It runs in the background on the Mac, and both the Mac and the phone that launched it get a toast when it finishes or fails. That puts HomeKit scenes, scripts and app actions one tile away.',
      },
      {
        q: 'Does it control the Mac outside the launcher?',
        a: 'Yes. The trackpad and keyboard work in any app, the remote adapts to whatever is in front, and the Controls tab covers volume, brightness, audio output, Do Not Disturb, Dark Mode, Night Shift, Keep Awake, a sleep timer and window snapping.',
      },
    ],
  },
  {
    group: 'Privacy and security',
    items: [
      {
        q: 'Is my data sent anywhere?',
        a: 'No. Kickback has no server and no account system. Your tiles, scenes and paired remotes are stored on your Mac. The only network requests the Mac makes on its own are to fetch artwork and icons for the sites you add as tiles, and, while Show What’s New is on, public show listings from TVmaze and Apple’s music and movie charts. Those lists are the same for everyone in your region: Kickback never sends what you watch or which apps you have.',
      },
      {
        q: 'How do I send a diagnostics report?',
        a: `On the Mac, open Settings → About → Copy Diagnostics Report, look it over, and choose Copy. On the phone, choose ⋯ → Copy Diagnostics, or Copy Diagnostics on the Connect screen when it won't connect. A connected phone's report includes the Mac's. Then open an issue in Kickback's GitHub repository and paste it in. Issues are public, so look the report over first. It holds versions, settings, permissions and the current session's log, with no names, titles, links or addresses. Kickback only copies it: it never sends it anywhere.`,
      },
      {
        q: 'How is the connection secured?',
        a: 'After pairing, every message between phone and Mac is end-to-end encrypted with keys only those two devices hold (X25519 key agreement, ChaCha20-Poly1305 encryption). The 6-digit code is mixed into the first handshake so someone else on your network cannot pair silently.',
      },
      {
        q: 'Where does the AI run?',
        a: 'On your Mac, using Apple Intelligence. Requests are not sent to us or to a third-party AI service. If Apple Intelligence is unavailable or turned off, those features simply hide and everything else keeps working.',
      },
    ],
  },
  {
    group: 'Buying',
    items: [
      {
        q: 'Is it a subscription?',
        a: 'No. Kickback for Mac is a one-time purchase and the phone remote is free.',
      },
      {
        q: 'Can I try before I buy?',
        a: `Yes. The download includes a ${pricing.trialDays}-day free trial with every feature unlocked.`,
      },
      {
        q: 'Can I get a refund?',
        a: 'Yes. Ask within 14 days of buying and you get the full amount back, no questions asked. Reply to your receipt email to ask. The Terms of Sale have the details.',
      },
    ],
  },
];
