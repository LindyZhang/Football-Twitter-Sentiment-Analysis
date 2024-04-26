import { Rettiwt, Tweet, CursoredData } from 'rettiwt-api';
import { writeFileSync  } from 'fs';

// code to generate API keys:
// const rettiwt = new Rettiwt();
// rettiwt.auth.login('email', 'user', 'password').then( d => console.log(d));

// multiple API keys I created and cycled between to avoid submitting too many requests from any single account:
const rettiwt = new Rettiwt({ apiKey: "a2R0PXUzMjl4M01TQkc2QVdOUDRRS1c3dnkwZnBOTHM2amVmNzhwZHB3dlc7dHdpZD0idT0xNzc3MTI3Mzk4MTEyMTQ5NTA1IjtjdDA9MmVkYzY5YWYzZjQzMjU2NjM1ZDQzYTUzNzZhYzZkYjg7YXV0aF90b2tlbj1hZjI0NGQ5NjczMzk1MGMwMjcwN2RhYTNiYjIyYTZjZjQzYjQzMTg5Ow==" });
// const rettiwt = new Rettiwt({ apiKey: "a2R0PW9aVGJMeHVmaVV6Q1YzSHNlTm92NGJFWUxPcTVmOEptcDNDbzVzVG87dHdpZD0idT0xNzgxNDUzMTIwMjU5NzI3MzYxIjtjdDA9OWM5NjM4MThlYmI3Y2I0ZWFkNWU1N2Q4MmUxN2E3MjY7YXV0aF90b2tlbj04MThlZDk4ZWFmNDIxYzFhZmU1NjZkYmUzOWExNzhmNWZlNGVjMjcwOw==" });
// const rettiwt = new Rettiwt({ apiKey: "a2R0PUZBeHBHSEdUbkxHM1k2T1M4MDlvZjAxbUhFR0Y2YjExTzNLaUlPREM7dHdpZD0idT0xNzgxNDQ1NTY1NTIxMjU2NDQ4IjtjdDA9ZjBkNTJlMmE2NjIyODJkMzE0OTJkYWY4ZDJkZDdkODg7YXV0aF90b2tlbj04NmJiZTcxMTNkMzUwZjUzNWNlOTBmY2Q1NDM1MTgxNDAzMmNhMjAxOw==" });
// const rettiwt = new Rettiwt({ apiKey: "a2R0PUdBcmNEdGt6ellJb0VxVmphUVZPcUxEc3FwS2JFa1c3T0x3Z09UWTU7dHdpZD0idT0xNzgxNDUzMTIwMjU5NzI3MzYxIjtjdDA9NWEwODcyZWMxOWJmYmIxMDcxMDA5MGJmYjI3OWU3ZDU7YXV0aF90b2tlbj01OTZlM2FlYjY2ZTJhYjZiYTEwYjNiOTM1NzE2ZmY4ODc3MGIxNzA0Ow==" });
// const rettiwt = new Rettiwt({ apiKey: "" });

let tweets = new CursoredData<Tweet>;
//change the hashtag here to switch teams
let hashtag = 'AFCB'; 
let txtNum = 0;

//strip out emojis and newlines
function toFullText(t: Tweet){
    return t.fullText.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|\n)/g, ' ')
}

function writeFile(list: string[]){
    for (let str of list){
        writeFileSync("dataset/"+ hashtag + "/" + hashtag + "_"+ txtNum.toString() +".txt", str);
        txtNum++;
        if (txtNum >= 400) throw new Error()
    }
}

// can't use a for loop for the following code because each request returns a promise that has to be subscribed to seperately, so please excuse the horrible style
rettiwt.tweet.search({
    hashtags: [hashtag],
    language: 'en'
})
.then(data => {        
    tweets = data;

    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
})

.then(data => 
    rettiwt.tweet.search({
        hashtags: [hashtag],
        language: 'en'
    }, 20, tweets.next.value)
)
.then(data => {        
    tweets = data;
    writeFile(tweets.list.map(toFullText));
});