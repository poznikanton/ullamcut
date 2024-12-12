var unpkg$1 = "build/vega-themes.min.js";

// Example usage: loading the script dynamically
function loadScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;

        script.onload = () => resolve(script);
        script.onerror = (error) => reject(new Error(`Failed to load ${url}: ${error.message}`));

        document.head.appendChild(script);
    });
}

// Usage of the variable
loadScript(unpkg$1)
    .then((script) => {
        console.log(`Script ${script.src} has been loaded successfully.`);
        // Now you can use functions or features from the loaded script
    })
    .catch((error) => {
        console.error('Script loading error:', error);
    });
