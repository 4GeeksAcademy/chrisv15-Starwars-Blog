export async function loadCharacters() {
    try {
        const response = await fetch("https://www.swapi.tech/api/people/");
        if (!response.ok) {
            throw new Error("Failed to fetch characters");
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}