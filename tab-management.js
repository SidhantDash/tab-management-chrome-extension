console.log("Hey");

const tabs = await chrome.tabs.query({});

console.log(tabs.length);

for (const tab of tabs) {
    console.log(tab.title);
}