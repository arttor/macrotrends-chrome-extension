function discard() {
    sendMessage({ type: "discard" }, response => {})
}

function spb() {
    sendMessage({ type: "spb" }, response => {})
}

function custom() {
    var customTickers = document.getElementById('customTickers')
    if (IsJsonArr(customTickers.value)) {
        customTickers.classList.remove("textarea-invalid-class")
        chrome.storage.sync.set({ customTickers: customTickers.value });
        sendMessage({ filter: customTickers.value, type: "custom" }, response => {})
    } else {
        customTickers.classList.add("textarea-invalid-class")
        customTickers.focus()
    }
}

function sendMessage(msg, onResponse) {
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, msg, {}, onResponse);
    });
}

document.getElementById('discardBtn').addEventListener('click',
    discard);
document.getElementById('spbTickersBtn').addEventListener('click',
    spb);
document.getElementById('customTickersSetBtn').addEventListener('click',
    custom);

document.addEventListener("DOMContentLoaded", function(event) {
    chrome.storage.sync.get(['customTickers'], function(data) {
        if (data.customTickers) {
            document.getElementById('customTickers').value = data.customTickers;
        }
    });
});

function IsJsonArr(str) {
    try {
        var json = JSON.parse(str);
        return Array.isArray(json);
    } catch (e) {
        return false;
    }
}