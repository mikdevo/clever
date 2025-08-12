window.PROFILE_CONFIG = {
  site: {
    backgroundImage: "./assets/background.png",
    animatedBackground: {
      enabled: true,
      type: "blobs",
      blobs: 5,
      speed: 28
    },
    theme: {
      primary: "#6c5ce7",
      accent: "#00d1ff",
      text: "#f6f7fb",
      muted: "#cfd3e3",
    },
  },
  user: {
    displayName: "Wick",
    avatar: "./assets/avatar.png",
    banner: "./assets/banner.jpg",
    roles: [
      "Pro Gamer",
      "Competitive Player",
      "Esports",
    ],
  },
  roles: {
    "Pro Gamer": '<i class="fas fa-trophy"></i>',
    "Competitive Player": '<i class="fas fa-medal"></i>',
    Esports: '<i class="fas fa-gamepad"></i>',
  },
  dynamic: {
    discord: {
      enabled: true,
      userId: "1314717453368033281",
      sourcePriority: ["japi", "lanyard"],
      refreshMs: 10000,
      overrideDisplayName: true,
      imageSizes: { avatar: 512, banner: 2048 },
    },
  },
  socials: [
    { name: "Spotify", url: "https://open.spotify.com/user/Skyline", icon: "fab fa-spotify" },
    { name: "Instagram", url: "https://www.instagram.com/clever_iq22", icon: "fab fa-instagram" },
    { name: "Ubisoft", url: "https://connect.ubisoft.com/R34_LOVER", icon: "fas fa-gamepad" },
    { name: "Epic Games", url: "https://www.epicgames.com/id/1-Clever-1", icon: "fas fa-gamepad" },
  ],
};