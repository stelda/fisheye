export async function getPhotographers() {
    // get photographers data from json file
    const response = await fetch("../../data/photographers.json");
    // convert json data to js object
    const data = await response.json();
    // get photographers array from data object
    const { photographers } = data;
    // return photographers array
    return (
        {
            photographers: [...photographers]
        }
    )
}

export async function getMedia() {
    // get media data from json file
    const response = await fetch("../../data/photographers.json");
    // convert json data to js object
    const data = await response.json();
    // get media array from data object
    const { media } = data;
    // return media array
    return (
        {
            media: [...media]
        }
    )
}