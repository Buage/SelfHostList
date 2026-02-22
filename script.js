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

let apps = [];

fetch('https://api.selfhostlist.org/getApps.php')
    .then(res => res.json())
    .then(data => {
        apps = data.apps || data;

        initApps();

    })
    .catch(err => {
        console.error("Failed to load apps:", err);
    });


function initApps() {

    const uniqueTags = [...new Set(apps.flatMap(app => app.tags || []))];

    uniqueTags.slice(0, 5).forEach(tag => createFilter(tag));
    uniqueTags.forEach(tag => createFilter(tag, true));

    const container = document.getElementById('appsContainer');
    container.innerHTML = "";

    apps.forEach(app => {
        const card = createAppCard(app);
        container.appendChild(card);
    });

}

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
    img.src = "https://api.selfhostlist.org/" + app.icon;
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

        fetch('https://fuck.buage.dev/lmode.php?lm=' + true);

        setCookie('light1', true)
    } else {
        document.body.classList.add('dark')
        document.body.classList.remove('light')

        fetch('https://fuck.buage.dev/lmode.php?lm=' + false);

        setCookie('light1', false)
    }
})

if (getCookie('light1') === 'true') {
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