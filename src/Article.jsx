class Article {
    constructor(title, link, reputability, adjacent, id) {
        this.title = title;
        this.link = link;
        this.reputability = reputability;
        this.id = id
        this.adjacent = adjacent;
        this.visibility = false;
        this.handles = 0;
    }
    toString() {
        return "Title: " + this.title + " Link: " + this.link + " Reputability " + this.reputability
    }
}
export default Article