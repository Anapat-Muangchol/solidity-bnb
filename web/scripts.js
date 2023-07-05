// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {
    // Check if Metamask is installed
    if (typeof window.ethereum !== "undefined") {
        const connectButton = document.getElementById("connectBtn");
  
        // Handle the connect button click
        connectButton.addEventListener("click", async function() {
            try {
                // Request account access
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  
                // Once the user approves the connection, the first account is available in the accounts array
                const account = accounts[0];
                alert(`Connected to Metamask! Your wallet address is ${account}`);
            } catch (error) {
                console.error(error);
                alert("An error occurred while connecting to Metamask.");
            }
        });
    } else if (window.web3) {
        // Legacy dapp browsers...
        // Use MetaMask/Mist's provider.
        const web3 = window.web3;
        console.log('Injected web3 detected.');
        return web3;
    } else {
        // Fallback to localhost; use dev console port by default...
        const provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545');
        const web3 = new Web3(provider);
        console.log('No web3 instance injected, using Local web3.');
        return web3;
    }
});