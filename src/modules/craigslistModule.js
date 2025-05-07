class Node {
    constructor(url, metadata = {}) {
        this.url = url;
        this.metadata = metadata;
        this.next = null;
    }
}

class CraigslistModule {
    constructor() {
        this.head = null;
    }

    addURL(url, metadata = {}) {
        const newNode = new Node(url, metadata);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    removeURL(url) {
        if (!this.head) return false;

        if (this.head.url === url) {
            this.head = this.head.next;
            return true;
        }

        let current = this.head;
        while (current.next && current.next.url !== url) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            return true;
        }

        return false;
    }

    listURLs() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push({
                url: current.url,
                metadata: current.metadata
            });
            current = current.next;
        }
        return result;
    }
}

module.exports = { CraigslistModule };