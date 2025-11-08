const apps = [
    {
   name: "Fireshare",
        url: "https://github.com/ShaneIsrael/fireshare",
        icon: "/files/icons/Fireshare-Small.png",
        description: "Host your clips or your friends' clips on your server using Fireshare for free! Simple and free.",
        tags: ["media", "storage"]
    },

    {
        name: "Nextcloud",
        url: "https://nextcloud.com/",
        icon: "/files/icons/Nextcloud-Small.png",
        description: "Self‑hosted file sync & share platform – keep your data under your control.",
        tags: ["productivity", "storage"]
    },

    {
        name: "Jellyfin",
        url: "https://jellyfin.org/",
        icon: "/files/icons/Jellyfin-Small.png",
        description: "Free media server – stream movies, series, music, and photos to any device.",
        tags: ["media", "streaming"]
    },

    {
        name: "Home Assistant",
        url: "https://home-assistant.io/",
        icon: "/files/icons/HomeAssistant-Small.png",
        description: "Control your full house using Home Assistant, merge all your apps into one place, customizable and easy to use.",
        tags: ["smart life", "home automation"]
    },

    {
        name: "Gitlab",
        url: "https://about.gitlab.com/",
        icon: "/files/icons/Gitlab-Small.png",
        description: "Host your code on your own server using Gitlab. Open source, free and self hosted alternative to Github.",
        tags: ["development", "code"]
    },

    {
        name: "Pi-Hole",
        url: "https://about.gitlab.com/",
        icon: "/files/icons/Pi-Hole-Small.png",
        description: "Block all ads and trackers with a single Raspbery Pi using Pi-Hole. Say goodbye to annoying ads on mobile and pc!",
        tags: ["DNS", "Ad blocking"]
    },

    {
        name: "Uptime-Kuma",
        url: "https://uptime.kuma.pet/",
        icon: "/files/icons/UptimeKuma-Small.png",
        description: "Monitor all your services and get alerts when one goes down, receive webhooks alerts on Discord.",
        tags: ["Monitoring", "Uptime"]
    },

    {
        name: "AdGuard Home",
        url: "https://adguard.com/en/adguard-home/overview.html",
        icon: "/files/icons/AdGuard-Small.png",
        description: "Block any ads just like PiHole. AdGuard home also blocks trackers too.",
        tags: ["Monitoring", "Uptime"]
    },

    {
        name: "OwnCloud",
        url: "https://owncloud.com/",
        icon: "/files/icons/OwnCloud-Small.png",
        description: "Store your files securely on your servers using OwnCloud.",
        tags: ["Monitoring", "Uptime"]
    },

    {
        name: "Plausible",
        url: "https://plausible.io/",
        icon: "/files/icons/Plausible-Small.png",
        description: "Track your website's analytics while respecting your user's privacy.",
        tags: ["analytics", "tracking"]
    },

    {
        name: "Invidious",
        url: "https://invidious.io/",
        icon: "/files/icons/Invidious-Small.png",
        description: "Watch some YouTube videos without getting tracked. Privacy first frontend for YouTube.",
        tags: ["entertainment", "videos"]
    },

    {
        name: "Gladys Assistant",
        url: "https://gladysassistant.com/",
        icon: "/files/icons/GladysAssistant-Small.png",
        description: "Privacy first home assistant open source alternative.",
        tags: ["smart life", "home automation"]
    },

    {
        name: "Neko",
        url: "https://neko.m1k1o.net/",
        icon: "/files/icons/Neko-Small.png",
        description: "Self hosted virtual browser that supports live chat, and multiple users at same time.",
        tags: ["web browser", "utility"]
    },

    {
        name: "MeTube",
        url: "https://github.com/alexta69/metube",
        icon: "/files/icons/MeTube-Small.png",
        description: "Download and archive any YouTube video on your own servers using MeTube.",
        tags: ["media", "streaming"]
    },

    {
        name: "Grafana",
        url: "https://grafana.com/",
        icon: "/files/icons/Grafana-Small.png",
        description: "Multi platform and open sourced analytics with charts, alerts, graphs and more!",
        tags: ["analytics", "graphs"]
    },

    {
        name: "Element",
        url: "https://element.io/",
        icon: "/files/icons/Element-Small.png",
        description: "Decentralized secure instant messaging app, allows file sharing, calls, video calls and more.",
        tags: ["chat", "social"]
    },

    {
        name: "Portainer",
        url: "https://portainer.io/",
        icon: "/files/icons/Portainer-Small.png",
        description: "Manage all your docker containers on a simple and easy to use dashboard.",
        tags: ["docker", "dashboard"]
    },

    {
        name: "Speedtest Tracker",
        url: "https://docs.speedtest-tracker.dev/",
        icon: "/files/icons/SpeedtestTracker-Small.png",
        description: "Monitor your server's internet speed with graphs, and get alerts when it's too slow.",
        tags: ["internet", "dashboard"]
    },

    {
        name: "Pinchflat",
        url: "https://github.com/kieraneglin/pinchflat",
        icon: "/files/icons/Pinchflat-Small.png",
        description: "Download YouTube videos automatically when they release, you subscribe to channels, archive videos and watch it!",
        tags: ["videos", "archiving"]
    },

    {
        name: "Stoat",
        url: "https://github.com/stoatchat/stoatchat",
        icon: "/files/icons/Stoat-Small.png",
        description: "Privacy first Discord like app, supporting calls, files, and bridges, i even use it.",
        tags: ["messaging", "community"]
    },

    {
        name: "Pairdrop",
        url: "https://pairdrop.net/",
        icon: "/files/icons/Pairdrop-Small.png",
        description: "Share files on your local network just like airdrop, you can also pair your devices if you're on a different network. Compatible with all devices.",
        tags: ["file sharing", "local network"]
    },

    {
        name: "VERT",
        url: "https://vert.sh/",
        icon: "/files/icons/VERT-Small.png",
        description: "Convert files locally in your browser, easily. Nothing to say esle.. (i think)",
        tags: ["converting", "utility"]
    },

    {
        name: "Mastodon",
        url: "https://github.com/mastodon/mastodon",
        icon: "/files/icons/Mastodon-Small.png",
        description: "Twitter like privacy first self hosted app. Host your own Mastodon instance for free.",
        tags: ["social", "communication"]
    },

    {
        name: "Puter",
        url: "https://github.com/heyputer/puter",
        icon: "/files/icons/Puter-Small.png",
        description: "A full OS in your browser. Feature-rich, extensible, and privacy first. You can use it to host your files, web apps, games and more!",
        tags: ["remote access", "os"]
    },

    {
        name: "Pterodactyl",
        url: "https://github.com/pterodactyl/panel",
        icon: "/files/icons/Pterodactyl-Small.png",
        description: "Free and open source gamer server management using PHP, React and Go, and secured! It host all your servers in dockers, with a cool UI.",
        tags: ["dashboard", "games"]
    },

    {
        name: "Ollama",
        url: "https://github.com/ollama/ollama",
        icon: "/files/icons/Ollama-Small.png",
        description: "Run AI locally on your computer or servers, just like ChatGPT. Your chats are kept locally.",
        tags: ["ai", "local llm"]
    },

    {
        name: "Open WebUI",
        url: "https://github.com/open-webui/open-webui",
        icon: "/files/icons/Open-WebUI-Small.png",
        description: "A cool Ollama front end, feature rich, and user friendly web app to chat with LLMs via Ollama.",
        tags: ["ai", "local chat"]
    },

    {
        name: "Glance",
        url: "https://github.com/glanceapp/glance",
        icon: "/files/icons/Glance-Small.png",
        description: "Lightweight and highly custonizable dashboard for all your feeds, with a beatiful web UI!",
        tags: ["dashboard", "feed"]
    },

    {
        name: "CasaOS",
        url: "https://github.com/IceWhaleTech/CasaOS",
        icon: "/files/icons/CasaOS-Small.png",
        description: "Personal cloud on your server, no code, simple and user friendly web UI, and a complete appstore!",
        tags: ["os", "dashboard"]
    },

    {
        name: "Mixpost",
        url: "https://github.com/inovector/mixpost",
        icon: "/files/icons/Mixpost-Small.png",
        description: "Robust social media management platform with many tools and features.",
        tags: ["automation", "social media tools"]
    },

    {
        name: "Immich",
        url: "https://github.com/immich-app/immich",
        icon: "/files/icons/Immich-Small.png",
        description: "Self hosted photos managements with a mobile, desktop, and web app. Very cool UI, and high performance.",
        tags: ["photo", "storage"]
    },

    {
        name: "ShareX",
        url: "https://github.com/immich-app/immich",
        icon: "/files/icons/ShareX-Small.png",
        description: "Easy to use and powerful screen recorder, and allows you to upload your files to any server you want.",
        tags: ["video", "storage"]
    },

    {
        name: "ArchiveBox",
        url: "https://github.com/ArchiveBox/ArchiveBox",
        icon: "/files/icons/ArchiveBox-Small.png",
        description: "Archive websites on your servers just like the wayback machine.",
        tags: ["internet", "archive"]
    },

    {
        name: "SearXNG",
        url: "https://github.com/searxng/searxng/",
        icon: "/files/icons/SearXNG-Small.png",
        description: "Self hosted and free to use metadata search engine that fetch results from lots of other services.",
        tags: ["internet", "search"]
    },

    {
        name: "Ente",
        url: "https://github.com/ente-io/ente",
        icon: "/files/icons/Ente-Small.png",
        description: "A secure place you can self host to upload all your photos and videos to your own servers, for free.",
        tags: ["photo", "storage"]
    },

    {
        name: "Kodi",
        url: "https://github.com/xbmc/xbmc",
        icon: "/files/icons/Kodi-Small.png",
        description: "A Jellyfin-Like media manager with a web UI.",
        tags: ["entertainment", "multimedia"]
    },

    {
        name: "Anubis",
        url: "https://github.com/TecharoHQ/anubis",
        icon: "/files/icons/Anubis-Small.png",
        description: "Web firewall powered by AI to prevent scrappers and bots from visiting your websites and it's ressources.",
        tags: ["tools", "internet"]
    },


    {
        name: "Peertube",
        url: "https://github.com/Chocobozzz/PeerTube",
        icon: "/files/icons/Peertube-Small.png",
        description: "A decentralized youtube-like video platform you can self host.",
        tags: ["video", "streaming"]
    },

    {
        name: "Luanti (Minetest)",
        url: "https://github.com/luanti-org/luanti",
        icon: "/files/icons/Luanti-Small.png",
        description: "Host a free minecraft like game server for you and your friends easily.",
        tags: ["games", "server"]
    },

    {
        name: "OpenMediaVault",
        url: "https://github.com/openmediavault/openmediavault",
        icon: "/files/icons/OpenMediaVault-Small.png",
        description: "NAS solution based on Debian, providing services like SSH, FTP, BitTorrent, and everything you need!",
        tags: ["nas", "os"]
    },

    {
        name: "Libreddit",
        url: "https://github.com/libreddit/libreddit",
        icon: "/files/icons/Libreddit-Small.png",
        description: "A privacy first reddit frontend made using Rust.",
        tags: ["social", "privacy"]
    },

    {
        name: "FileGator",
        url: "https://github.com/filegator/filegator",
        icon: "/files/icons/FileGator-Small.png",
        description: "Powerful multi user file manager with a singe page front end, respecting your privacy.",
        tags: ["file", "file management"]
    },
];

function createAppCard(app) {
    const card = document.createElement("div");
    card.className = "app-template card";
    card.onclick = () => window.open(app.url, "_blank");

    const metaTop = document.createElement("div");
    metaTop.className = "app-meta app-meta-top";

    const img = document.createElement("img");
    img.src = app.icon;
    img.alt = `${app.name} icon`;
    img.className = "app-template-icon";

    const nameP = document.createElement("p");
    nameP.textContent = app.name;

    metaTop.append(img, nameP);

    const metaBot = document.createElement("div");
    metaBot.className = "app-meta app-meta-bot";

    app.tags.forEach(tag => {
        const tagDiv = document.createElement("div");
        tagDiv.className = "app-tag card";

        const tagP = document.createElement("p");
        tagP.className = "tag-text";
        tagP.textContent = tag;

        tagDiv.appendChild(tagP);
        metaBot.appendChild(tagDiv);
    });

    const desc = document.createElement("p");
    desc.className = "app-sub";
    desc.textContent = app.description;

    card.append(metaTop, metaBot, desc);
    return card;
}

apps.forEach(app => {
    const card = createAppCard(app)
    document.getElementById('appsContainer').appendChild(card)
})

fetch("https://fuck.buage.dev/stats.php")
.then(res => res.json())
.then(data => {
    document.querySelector('.header-views').textContent = data.totals.visits + ' views'
})

fetch('https://fuck.buage.dev/visit.php');