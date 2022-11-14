function gettime() {
    let now = new Date();
    let hours = now.getHours()
    let minutes = now.getMinutes()
    return `${hours}:${minutes}`
}
class Message {
    constructor(author, time, text) {
    this.author = author;
    this.time =time;
    this.text = text;
    }
    toString() {
    return this.time + " " + this.author + ": " + this.text;
    }
    }
class Messenger {
    constructor() {
        this.history = []
        }
    send(author, text){
        this.history.push(new Message(author,gettime(),text))
    }
    show_history() {
        this.history.forEach((item) => {
        console.log(item.toString())
        })
        }
}
let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()