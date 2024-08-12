
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/VinegarAndSoda70/portfolioJavascript/main/data/profile.json';
    const fetching = await fetch(url);
    return await fetching.json()
}

