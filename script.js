function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

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
        url: "https://pi-hole.net/",
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
        tags: ["DNS", "Ad blocking"]
    },

    {
        name: "OwnCloud",
        url: "https://owncloud.com/",
        icon: "/files/icons/OwnCloud-Small.png",
        description: "Store your files securely on your servers using OwnCloud.",
        tags: ["storage", "cloud"]
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
        url: "https://github.com/ShareX/ShareX",
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

    {
        name: "Loomio",
        url: "https://github.com/loomio/loomio",
        icon: "/files/icons/Loomio-Small.png",
        description: "Loomio is a decision making app for everyone to participate in chosing anything, easily and free.",
        tags: ["communication", "social"]
    },

    {
        name: "Peergos",
        url: "https://github.com/Peergos/Peergos",
        icon: "/files/icons/Peergos-Small.png",
        description: "Use Peergos for a secure and private place to store share and view all your documents, photos, and everything you want. It also have a calendar, news feed and more!",
        tags: ["file sharing", "synchronization"]
    },

    {
        name: "Homarr",
        url: "https://github.com/homarr-labs/homarr",
        icon: "/files/icons/Homarr-Small.png",
        description: "Modern dashboard for all your self hosted servies, highly customizable, easy to use, lighweight, real time updates and more! Everything you need is there.",
        tags: ["dashboard", "monitoring"]
    },

    {
        name: "RetroShare",
        url: "https://github.com/RetroShare/RetroShare",
        icon: "/files/icons/RetroShare-Small.png",
        description: "Secure and decentralized chat platform, allowing forums, file transfer, messaging and more.",
        tags: ["communication", "social"]
    },

    {
        name: "StatPing.ng",
        url: "https://github.com/statping-ng/statping-ng",
        icon: "/files/icons/StatPing-Small.png",
        description: "Monitor websites status easily, and get notified when one is down, it's kinda like uptime kuma.",
        tags: ["monitoring", "uptime"]
    },

    {
        name: "Accent",
        url: "https://github.com/mirego/accent",
        icon: "/files/icons/Accent-Small.png",
        description: "Make translation easier for your websites in your team, with am UI, and a complete logs history.",
        tags: ["tools", "localization"]
    },

    {
        name: "DashLit",
        url: "https://dashlit.cwec.dev/",
        icon: "/files/icons/Dashlit-Small.png",
        description: "A self hosted start / home page for your servers, with a beatiful UI and a dark mode option.",
        tags: ["dashboard"]
    },

    {
        name: "Cr*nMaster",
        url: "https://github.com/fccview/cronmaster",
        icon: "/files/icons/CronMaster-Small.png",
        description: "A simple front end to create, manager, and delete cron jobs, with a modern UI.",
        tags: ["task scheduling", "automation"]
    },

    {
        name: "Lufin",
        url: "https://github.com/VityaSchel/lufin",
        icon: "/files/icons/Lufin-Small.png",
        description: "Lufin is a simple file sharing app, with previews for images, audio, video, text files, zip archives, PDF, and XLSX files.",
        tags: ["file sharing", "storage"]
    },

    {
        name: "Ghostboard",
        url: "https://github.com/jon6fingrs/ghostboard",
        icon: "/files/icons/Ghostboard-Small.png",
        description: "Real time text sharing with anyone, between any devices. No encryption tho, but it can help sometimes!",
        tags: ["text", "synchronization"]
    },

    {
        name: "Portracker",
        url: "https://github.com/mostafa-wahied/portracker",
        icon: "/files/icons/Portracker-Small.png",
        description: "Real time port monitory and discovery tool for your local network, with a very cool UI!",
        tags: ["management", "server"]
    },

    {
        name: "DumbWhoIs",
        url: "https://github.com/DumbWareio/DumbWhoIs",
        icon: "/files/icons/DumbWhoIs-Small.png",
        description: "A simple WHOIS showing all public informations about a domain. Funny name imo btw",
        tags: ["DNS", "networking"]
    },

    {
        name: "DumbAssets",
        url: "https://github.com/DumbWareio/DumbAssets",
        icon: "/files/icons/DumbAssets-Small.png",
        description: "Simple way to monitor your physical assets with a cool web UI, locked with a pin code.",
        tags: ["monitoring", "tracking"]
    },


    {
        name: "DumbDo",
        url: "https://github.com/DumbWareio/DumbDo",
        icon: "/files/icons/DumbDo-Small.png",
        description: "A simple to use to-do list. No headache, it's super simple to setup.",
        tags: ["to-do list", "tasks"]
    },

    {
        name: "DumbBudget",
        url: "https://github.com/DumbWareio/DumbBudget",
        icon: "/files/icons/DumbBudget-Small.png",
        description: "Manage your budget easily using DumbBudget, with a PIN protection, track your income and expenses with a clean UI.",
        tags: ["money", "tracking"]
    },

    {
        name: "DumbPad",
        url: "https://github.com/DumbWareio/DumbPad",
        icon: "/files/icons/DumbPad-Small.png",
        description: "Online and simple notepad with an auto saving feature, no auth (you can enable it tho).",
        tags: ["to-do list", "text", "notes taking"]
    },

    {
        name: "DumbDrop",
        url: "https://github.com/DumbWareio/DumbDrop",
        icon: "/files/icons/DumbDrop-Small.png",
        description: "Simple file uploader to view files in a folder without opening it or anything.",
        tags: ["file"]
    },

    {
        name: "LocalSend",
        url: "https://github.com/localsend/localsend",
        icon: "/files/icons/LocalSend-Small.png",
        description: "Open source alternative to Pairdrop and Airdrop. Like Pairdrop, it works on anything and you can transfer any files!",
        tags: ["file", "file sharing"]
    },

    {
        name: "YOURLS",
        url: "https://yourls.org/docs",
        icon: "/files/icons/Yourls-Small.png",
        description: "Simple and efficient URL shortener made using PHP and MySql.",
        tags: ["URL Shortener"]
    },

    {
        name: "ClamAV",
        url: "https://github.com/Cisco-Talos/clamav",
        icon: "/files/icons/ClamAV-Small.png",
        description: "Powerful self hosted and completly free antivirus for your servers for avoiding malicious files.",
        tags: ["security", "antivirus"]
    },

    {
        name: "Friendica",
        url: "https://github.com/friendica/friendica",
        icon: "/files/icons/Friendica-Small.png",
        description: "Free and open source social network just like Mastodon for your community or your friends.",
        tags: ["social", "communication"]
    },

    {
        name: "AppFlowy",
        url: "https://github.com/appflowy-io/appflowy",
        icon: "/files/icons/AppFlowy-Small.png",
        description: "A feature rich and modern alternative to Notion, with project monitoring, AI and templates.",
        tags: ["to-do list", "tasks"]
    },

    {
        name: "ByteStash",
        url: "https://github.com/jordan-dalby/ByteStash",
        icon: "/files/icons/ByteStash-Small.png",
        description: "A pastebin alternative to store all your code snippets, organise it and manage it, simply with a login screen.",
        tags: ["text", "pastebin"]
    },

    {
        name: "Gatus",
        url: "https://github.com/TwiN/gatus",
        icon: "/files/icons/Gatus-Small.png",
        description: "An uptime kuma alternative to monitor websites and get alerts when one goes down or have a problem.",
        tags: ["Uptime", "Monitoring"]
    },

    {
        name: "Penpot",
        url: "https://github.com/penpot/penpot",
        icon: "/files/icons/Penpot-Small.png",
        description: "Open source design tool for your team, to create cool designs and prototypes, ready to use!",
        tags: ["UI", "Design"]
    },

    {
        name: "Linwood Butterfly",
        url: "https://butterfly.linwood.dev/",
        icon: "/files/icons/LinwoodButterfly-Small.png",
        description: "Write your notes in your way by hand, with this minimalistic notes taking app. Customizable and on an infinite canvas!",
        tags: ["tasks", "infinite canvas", "drawing"]
    },

    {
        name: "Trilium Notes",
        url: "https://triliumnotes.org/",
        icon: "/files/icons/TrilliumNotes-Small.png",
        description: "Free solution for note taking and organizing your personnal knowledge base, you can even sync all your notes when you need!",
        tags: ["text", "notes taking"]
    },

    {
        name: "Notorious",
        url: "https://github.com/danobot/notorious",
        icon: "/files/icons/Notorious-Small.png",
        description: "Offline notes taking, simple and easy to use.",
        tags: ["text", "notes taking"]
    },

    {
        name: "Spacedrive",
        url: "https://www.spacedrive.com/",
        icon: "/files/icons/Spacedrive-Small.png",
        description: "Centralized file storage for all your devices, easy to use and designed for creators!",
        tags: ["file", "file management"]
    },

    {
        name: "FileFlows",
        url: "https://fileflows.com/",
        icon: "/files/icons/FileFlows-Small.png",
        description: "Design and schedule automated files processing easily. Self hosted, and perfect for home labs, and cloud depoyments.",
        tags: ["file", "file processing"]
    },

    {
        name: "PrivateBin",
        url: "https://github.com/PrivateBin/PrivateBin/",
        icon: "/files/icons/PrivateBin-Small.png",
        description: "A pastebin self hosted app with a strong in browser encryption and decryption, using 256bit AES, minimalistic and powerful.",
        tags: ["text", "pastebin"]
    },

    {
        name: "cState",
        url: "https://github.com/cstate/cstate",
        icon: "/files/icons/cState-Small.png",
        description: "Status page, with a finished design, lightweight, make with HTML CSS. Highly custonizable, and an admin panel.",
        tags: ["uptime", "monitoring"]
    },

    {
        name: "Kutt",
        url: "https://github.com/thedevs-network/kutt",
        icon: "/files/icons/Kutt-Small.png",
        description: "Modern and simple URL shortener with a custom domain supports, simple and efficient.",
        tags: ["URL Shortener"]
    },
];

const existingFilters = [];
const appliedFilters = {};
let reduceMovement = false;

function createAppCard(app) {
    const card = document.createElement("a");
    card.className = "app-template card";
    card.href = app.url
    card.target = "_blank"

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

function sortResults() {
    const container = document.querySelector('.apps-container');
    container.innerHTML = "";

    const anyFilterActive = Object.values(appliedFilters).some(value => value === true);

    apps.forEach(app => {
        const hasActiveFilter = app.tags.some(tag => appliedFilters[tag]);

        if (!anyFilterActive || hasActiveFilter) {
            const card = createAppCard(app);
            container.appendChild(card);
        }
    });
}

function sortSearch(text) {
    const container = document.querySelector('.apps-container');
    container.innerHTML = "";

    const search = text.trim().toLowerCase();

    apps.forEach(app => {
        const hasMatch =
            !search || 
            app.name.toLowerCase().includes(search) ||
            app.description?.toLowerCase().includes(search) ||
            app.tags?.some(tag => tag.toLowerCase().includes(search));

        if (hasMatch) {
            const card = createAppCard(app);
            container.appendChild(card);
        }
    });
}

function createFilter(name, full = false) {
    const id = full ? `full-${name}` : name;
    if (existingFilters.includes(id)) return;
    existingFilters.push(id);

    const div = document.createElement("div");
    div.className = "filter card";
    div.dataset.id = name;

    const p = document.createElement("p");
    p.className = "filter-text";
    p.textContent = name;

    div.appendChild(p);

    div.addEventListener('click', function() {
        appliedFilters[name] = !appliedFilters[name];

        document.querySelectorAll(`.filter[data-id="${name}"]`).forEach(el => {
            el.classList.toggle('enabled', appliedFilters[name]);
        });

        sortResults();
    });

    if (full) {
        div.classList.add('full');
        document.querySelector(".filters-container").appendChild(div);
    } else {
        document.querySelector(".filters").appendChild(div);
    }
}

const uniqueTags = [...new Set(apps.flatMap(app => app.tags))];
uniqueTags.slice(0, 5).forEach(tag => createFilter(tag));
uniqueTags.forEach(tag => createFilter(tag, true));

apps.forEach(app => {
    const card = createAppCard(app)
    document.getElementById('appsContainer').appendChild(card)
})

document.getElementById('moreFiltersBtn').addEventListener('click', function() {
    document.querySelector('.more-filters').style.display = 'flex'
    document.querySelector('.overlay').style.display = 'block'
});

document.getElementById('filtersApplyBtn').addEventListener('click', function() {
    document.querySelector('.more-filters').style.display = 'none'
    document.querySelector('.overlay').style.display = 'none'
})

document.getElementById('searchInput').addEventListener('input', function() {
    sortSearch(document.getElementById('searchInput').value)
});

document.getElementById('expandBtn').addEventListener('click', function() {
    document.body.classList.toggle('expanded')
});

document.querySelectorAll('.app-template').forEach(card => {
    card.addEventListener('mouseenter', function() {
        if (reduceMovement === true) return;

        rotate = Math.floor(Math.random() * (5 - (-5) + 1)) + (-5)
        card.style.transform = "rotate(" + rotate + "deg) scale(1.03)"

        document.querySelectorAll('.app-template').forEach(other => {
            if (other!== card) {
                //other.style.filter = "brightness(0.85) blur(1.5px)" // i wanted to do smth here but im not sure..
            }
        });
    })
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = "rotate(0deg)"
    })
})

document.getElementById('movementToggleInput').addEventListener('change', function() {
    reduceMovement = document.getElementById('movementToggleInput').checked
    setCookie('reduceMovement', reduceMovement)

    document.body.classList.toggle('rm')
})

document.getElementById('lightToggleInput').addEventListener('change', function() {
    if (document.getElementById('lightToggleInput').checked) {
        document.body.classList.remove('dark')
        document.body.classList.add('light')

        setCookie('light', true)
    } else {
        document.body.classList.add('dark')
        document.body.classList.remove('light')

        setCookie('light', false)
    }
})

document.getElementById('submit-app-btn1').addEventListener('click', function() {
    document.querySelector('.submit-app').style.display = 'flex'
    document.querySelector('.overlay').style.display = 'block'
});

document.getElementById('submit-app-btn').addEventListener('click', function() {
    document.getElementById('submit-app-btn').classList.add('submit-app-loading')
    document.getElementById('submit-app-btn').textContent = "Submitting..."
    document.getElementById('submit-app-btn').disabled = true

    fetch("https://api.selfhostlist.org/submitApp.php?app=" + encodeURIComponent(document.getElementById('missingAppSubmitName').value))
    .then(() => {
        document.querySelector('.submit-app').style.display = 'none';
        document.querySelector('.overlay').style.display = 'none';

        document.getElementById('submit-app-btn').classList.remove('submit-app-loading')
        document.getElementById('submit-app-btn').textContent = "Send"
        document.getElementById('submit-app-btn').disabled = false
    })
});

if (getCookie('light') === 'true') {
    document.body.classList.remove('dark')
    document.body.classList.add('light')

    document.getElementById('lightToggleInput').checked = true;
}

if (getCookie('reduceMovement') === 'true') {
    reduceMovement = true
    document.getElementById('movementToggleInput').checked = true;
}

fetch("https://fuck.buage.dev/stats.php")
.then(res => res.json())
.then(data => {
    document.querySelector('.header-views').textContent = data.totals.visits + ' views'
})

fetch('https://fuck.buage.dev/visit.php');