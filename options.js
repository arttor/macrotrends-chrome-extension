function discard() {
    sendMessage({ type: "discard" }, response => {})
}

function spb() {
    sendMessage({ type: "spb" }, response => {})
}

function custom() {
    var customTickers = document.getElementById('customTickers')
    var tikersInput = customTickers.value.trim().replaceAll(/[^a-zA-Z,]/g, "").toUpperCase();
    customTickers.value = tikersInput
    var customTickersVal = tikersInput.split(',')
    if (true) {
        customTickers.classList.remove("textarea-invalid-class")
        chrome.storage.sync.set({ customTickers: customTickersVal });
        sendMessage({ filter: JSON.stringify(customTickersVal), type: "custom" }, response => {})
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


document.getElementById('customTickers').onkeyup = function(evt) {
    evt = evt || window.event;

    if (evt.keyCode == 13) {
        custom();
        e.preventDefault();
    }
};


document.getElementById('discardBtn').addEventListener('click',
    discard);
document.getElementById('spbTickersBtn').addEventListener('click',
    spb);
document.getElementById('customTickersSetBtn').addEventListener('click',
    custom);

document.addEventListener("DOMContentLoaded", function(event) {
    chrome.storage.sync.get(['customTickers'], function(data) {
        if (data.customTickers) {
            document.getElementById('customTickers').value = data.customTickers.join();
        }
    });
});