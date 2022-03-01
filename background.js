chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: debullshittify,
  });
});

function debullshittify() {
  const translationMap = [
    [
      /(airdrop|altcoin|bitcoin|blockchain|cookies|crypto|cryptocurrency|dapp|decentralized|decentralization|ethereum|marketing|mission-|nft|paradigm|wallet)/gi,
      'bullshit',
    ],
    [/\b(mining)\b/gi, 'bullshitting'],
    [
      /\b(proof-of-work|proof-of-stake|proof-of-authority)\b/gi,
      'proof-of-bullshit',
    ],
    [/\b(peer-to-peer|p2p)\b/gi, 'bullshit-to-bullshit'],
    [/\b(peer-to-peer|p2p)\b/gi, 'bullshit-to-bullshit'],
  ];

  let newHTML = document.body.innerHTML;
  translationMap.forEach(([regex, replacement]) => {
    newHTML = newHTML.replace(regex, replacement);
  });
  document.body.innerHTML = newHTML;
}
