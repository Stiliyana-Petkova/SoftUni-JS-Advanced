class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if(this._likes.length == 0) {
            return `${this.title} has 0 likes`
        } else if(this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        };
    }

    like (username) {
        let person = this._likes.find(p => p == username);

        if(this._likes[person]) {
            throw new Error ("You can't like the same story twice!");
        };

        if(this.creator == username) {
            throw new Error ("You can't like your own story!")
        };
        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        let person = this._likes.find(p => p == username);
        if(this._likes[person]) {
            throw new Error ("You can't dislike this story!");
        };

        let index = this._likes.indexOf(person);
        this._likes.splice(index, 1);

        return `${username} disliked ${this.title}`
    };

    comment(username, content, id) {

        let coment = this._comments.find(c => c.id == id);
     
         if(!this._comments.find(c => c.id == id)) {
            let newObjComment = {
                id: this._comments.length + 1,
                username: username,
                content: content,
                replies: [],
            }
            this._comments.push(newObjComment);

            return `${username} commented on ${this.title}`
        } else {
            let r = {
                id: Number(`${coment.id}.${coment.replies.length + 1}`),
                username: username,
                content: content,
            }

            coment.replies.push(r);
            return `You replied successfully`;
        }
    }

    toString(sortingType) {

        let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`;

        if(sortingType == 'asc') {
            this._comments.sort((a,b) => a.id - b.id).forEach(c => {result += `\n-- ${c.id}. ${c.username}: ${c.content}`
                    c.replies.sort.forEach( r => {
                        result += `\n--- ${r.id}. ${r.username}: ${r.content}`
                    })
                    
        });
            return result;
            
        } else if(sortingType == 'desc') {
            this._comments.sort((a,b) => b.id - a.id).forEach(c => {result += `\n-- ${c.id}. ${c.username}: ${c.content}`
            c.replies.sort((a,b) => b - a).forEach( r => {
                result += `\n--- ${r.id}. ${r.username}: ${r.content}`
            })
        });
            return result;
        } else {
            this._comments.sort((a,b) => a.username.localeCompare(b.username)).forEach(c => {result += `\n-- ${c.id}. ${c.username}: ${c.content}`
            c.replies.sort().forEach( r => {
                result += `\n--- ${r.id}. ${r.username}: ${r.content}`
            })
        });
            return result;

        }
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "replies", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "replies@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));