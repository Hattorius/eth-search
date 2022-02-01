const startSearching = async() => {
    const addressCountHolder = document.querySelector("h3 span");
    const addressWithBalanceCountHolder = document.querySelector("h4 span");
}

const requestWallet = async() => {
    if (typeof window.ethereum === 'undefined') return;
    try {
        await ethereum.request({ method: 'eth_requestAccounts' });
    } catch (err) {
        if (err.code == 4001) {
            document.querySelector("#connect button").classList.remove('hidden');
        }
        return;
    }
    document.querySelector("#connect").classList.add('hidden');
    startSearching();
}

document.body.onload = requestWallet;
document.querySelector("#connect button").onclick = requestWallet;