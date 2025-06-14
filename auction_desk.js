// This file specifically loads and displays the bought players from localStorage
// It does NOT contain the main auction logic (buying players, purse deduction etc.)

document.addEventListener('DOMContentLoaded', () => {
    const selectedPlayers = JSON.parse(localStorage.getItem('selectedPlayers')) || {};
    const currentPurse = parseFloat(localStorage.getItem('currentPurse')) || 0;
    const squadCount = parseInt(localStorage.getItem('squadCount')) || 0;
    const overseasCount = parseInt(localStorage.getItem('overseasCount')) || 0;

    // Update navbar displays
    document.getElementById('currentPurse').textContent = currentPurse.toFixed(2);
    document.getElementById('squadCount').textContent = squadCount;
    document.getElementById('overseasCount').textContent = overseasCount;

    // Render players in the auction desk
    renderBoughtPlayers(selectedPlayers);
});

function renderBoughtPlayers(selectedPlayers) {
    const auctionGroups = {
        'auction-batsman': document.getElementById('auction-batsman'),
        'auction-allrounder': document.getElementById('auction-allrounder'),
        'auction-wicketkeeper': document.getElementById('auction-wicketkeeper'),
        'auction-spinner': document.getElementById('auction-spinner'),
        'auction-pacer': document.getElementById('auction-pacer'),
    };

    // Clear existing groups before rendering
    for (const key in auctionGroups) {
        if (auctionGroups[key]) {
            auctionGroups[key].innerHTML = '';
        }
    }

    for (const playerId in selectedPlayers) {
        const player = selectedPlayers[playerId];
        const playerCard = createPlayerCard(player); // createPlayerCard is a helper function

        let targetGroup;
        switch (player.type) {
            case 'Batsman':
                targetGroup = auctionGroups['auction-batsman'];
                break;
            case 'All-Rounder':
                targetGroup = auctionGroups['auction-allrounder'];
                break;
            case 'Wicket-Keeper':
                targetGroup = auctionGroups['auction-wicketkeeper'];
                break;
            case 'Spinner':
                targetGroup = auctionGroups['auction-spinner'];
                break;
            case 'Pacer':
                targetGroup = auctionGroups['auction-pacer'];
                break;
            default:
                console.warn('Unknown player type:', player.type);
                continue;
        }

        if (targetGroup) {
            targetGroup.appendChild(playerCard);
        }
    }
}

// Reusing the player card creation logic from the main script
function createPlayerCard(player) {
    const playerCard = document.createElement('div');
    playerCard.classList.add('player-card');
    playerCard.dataset.id = player.id;
    // No click event needed here as players are already bought

    if (player.isOverseas) {
        playerCard.classList.add('overseas');
    }

    playerCard.innerHTML = `
        <img src="${player.image}" alt="${player.name}">
        <h4>${player.name}</h4>
        <p>${player.role}</p>
        <p class="price">₹${player.price.toFixed(2)} Cr</p>
    `;
    return playerCard;
}