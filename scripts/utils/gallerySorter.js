export default function gallerySorter(selectedPortfolio, sortCriteria) {
    switch (sortCriteria) {
        case "likes":
            selectedPortfolio.sort((a, b) => {
                if (a.likes < b.likes) {
                    return 1;
                }
                if (a.likes > b.likes) {
                    return -1;
                }
                return 0;
            });
            break;
        case "date":
            selectedPortfolio.sort((a, b) => {
                if (a.date < b.date) {
                    return 1;
                }
                if (a.date > b.date) {
                    return -1;
                }
                return 0;
            });
            break;
        case "title":
            selectedPortfolio.sort((a, b) => {
                if (a.title < b.title) {
                    return -1;
                }
                if (a.title > b.title) {
                    return 1;
                }
                return 0;
            });
            break;
    }
    return selectedPortfolio;
}


