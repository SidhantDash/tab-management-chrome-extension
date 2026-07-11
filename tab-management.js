const tabs = await chrome.tabs.query({});

// console.log(tabs.length);

for (const tab of tabs) {
    console.log("ID: " + tab.id + ", Title: " + tab.title + ", URL: " + tab.url);
}

const ytSortButton = document.getElementById("yt-sort-button");
ytSortButton.addEventListener("click", async () => {

    for (let i = tabs.length - 1; i >= 0; i--) {
        let ytCounter = 0;
        if (tabs[i].url === "https://www.youtube.com/") {
            console.log("Bare YT Link Detected")
            await chrome.tabs.remove(tabs[i].id);
        }
        else if (tabs[i].url.includes('www.youtube.com/')) {
            ytCounter += 1;
            console.log(tabs[i].title);
            await chrome.tabs.move(tabs[i].id, { index: 0 });
        }
        console.log("Total YT tabs: " + ytCounter);
    }
});