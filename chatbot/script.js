const userMessage = [
    ["hi", "hey", "hello"],
    ["sure", "yes", "no"],
    ["are you genious", "are you nerd", "are you intelligent"],
    ["i hate you", "i dont like you"],
    ["how are you", "how is life", "how are things", "how are you doing"],
    ["how is corona", "how is covid 19", "how is covid19 situation"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you", "who is your creator"],

    [
        "your name please",
        "your name",
        "may i know your name",
        "what is your name",
        "what call yourself"
    ],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "ok", "okay", "nice", "welcome"],
    ["thanks", "thank you"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["corona", "covid19", "coronavirus"],
    ["you are funny"],
    ["i dont know"],
    ["boring"],
    ["im tired"],
    ["i am depressed now", "im depressed"],
    ["i want to suicide"],
    ["i need someone to talk about it"],
    ["give me some tips to avoid suicide", "tell me what to do in this situation"],
    ["im very poor in studies","i failed in semester exams","i got low marks in exams"],
    ["my grades is gardually decreasing","im not good at studies","i dont like studies at all","i dont like to study"],
    ["im passionate about sports"],
    ["i have financial problems","i have financial issues","i have money issues"],
    ["i don't have money to pay my fees","i don't have money to spend"],
    ["i have relationship issues","i have relationship problems"],
    ["i had a fight with my girlfriend","i had a fight with my bestfriend","i broke up with my girlfriend","i had a fight with my family"],
    ["i got bully in my college","i got bully in my hostel","im mentally harassed by my seniors","i am mentally harassed by my seniors","im facing ragging in my college","i am facing ragging in my college","i am facing ragging","Seniors of my college are raggging me","i am being ragged by seniors of my college"],
    ["down"]

];
const botReply = [
    ["Hello!😊, How may i help you..?", "Hi!😊, How may i help you..?", "Hey!😊, How may i help you..?", "Hi there!😊, How may i help you..?"],
    ["Okay"],
    ["Yes I am! "],
    ["I'm sorry about that. But I like you dude."],
    [
        "Fine... how are you?",
        "Pretty well, how are you?",
        "Fantastic, how are you?"
    ],
    ["Getting better. There?", "Somewhat okay!", "Yeah fine. Better stay home!"],

    [
        "Nothing much",
        "About to go to sleep",
        "Can you guess?",
        "I don't know actually"
    ],
    ["I am always young."],
    ["I am just a bot", "I am a bot. What are you?"],
    ["MD FIROZE KHAN"],
    ["I am nameless", "I don't have a name"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
    ["What about?"],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["You're welcome"],
    ["Briyani", "Burger", "Sushi", "Pizza"],
    ["Dude!"],
    ["Yes?"],
    ["Please stay home"],
    ["Glad to hear it"],
    ["Say something interesting"],
    ["Sorry for that. Let's chat!"],
    ["Take some rest, Dude!"],
    ["Ok, take a deep breath and tell me what happened..?"],
    ["Can u tell me what are the reasons behind these thoughts..?"],
    ["Call the helpline number +91 9152987821"],
    ["Ok there u go...  <br></br> 1.Reach out to a trusted friend or family member and talk about your feelings. <br></br> 2.Seek professional help from a counselor, therapist, or mental health professional. <br></br> 3.Practice self-care regularly, including activities you enjoy and relaxation techniques."],
    ["But suicide is not the solution for this! Tell me more about it..."],
    ["Ok, got it! then what you are passionate for? Tell me in breif...",""],
    ["very niceeee! There are lots of oppurtunities as a sports person"],
    ["Ok, tell me in breif so that i can help you!"],
    ["U can apply for scholarships, also u can talk to Dean/Principal of your college"],
    ["Ok, tell me in breif so that i can help you!"],
    ["Here's few words to decribe the importance of relationships... <br></br> 1. Emotional Support: Relationships provide emotional support during difficult times, reducing stress and promoting well-being. <br></br> 2.Social Connection: They offer a sense of belonging and connection to others, enhancing our overall happiness and satisfaction. <br></br> 3. Personal Growth: Relationships foster personal growth by providing opportunities for learning, self-reflection, and understanding. <br></br> 4. Support Network: Relationships create a support network of friends, family, and loved ones who can offer advice, assistance, and encouragement when needed. <br></br> 5. Collaboration: Relationships facilitate collaboration and teamwork, enabling us to achieve common goals and solve problems together."],
    ["That's so wrong! U can complain the Anti-Ragging department of your college. It's a criminal offense, U should raise your vioce agaunst it.."],
    ["gyugyuguyguy"]
];

const alternative = [
    "I didn't get it...",
    "Okay! Go on...",
    "Dude...",
    "Ask something else...",
    "Hey, I'm listening..."
];

const synth = window.speechSynthesis;

function voiceControl(string) {
    let u = new SpeechSynthesisUtterance(string);
    u.text = string;
    u.lang = "en-aus";
    u.volume = 1;
    u.rate = 1;
    u.pitch = 1;
    synth.speak(u);
}

function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
}
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            let input = inputField.value.trim();
            input != "" && output(input);
            inputField.value = "";
        }
    });
});

function output(input) {
    let product;

    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

    text = text
        .replace(/[\W_]/g, " ")
        .replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "")
        .trim();

    let comparedText = compare(userMessage, botReply, text);

    product = comparedText
        ? comparedText
        : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
}

function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
        for (let y = 0; y < replyArray.length; y++) {
            if (triggerArray[x][y] == string) {
                items = replyArray[x];
                item = items[Math.floor(Math.random() * items.length)];
            }
        }
    }
    //containMessageCheck(string);
    if (item) return item;
    else return containMessageCheck(string);
}

function containMessageCheck(string) {
    let expectedReply = [
        [
            "Good Bye, dude",
            "Bye, See you!",
            "Dude, Bye. Take care of your health in this situation."
        ],
        ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
        ["Have a pleasant evening!", "Good evening too", "Evening!"],
        ["Good morning, Have a great day!", "Morning, dude!"],
        ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]

    ];
    let expectedMessage = [
        ["bye", "tc", "take care"],
        ["night", "good night"],
        ["evening", "good evening"],
        ["morning", "good morning"],
        ["noon"]
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
        if (expectedMessage[x].includes(string)) {
            items = expectedReply[x];
            item = items[Math.floor(Math.random() * items.length)];
        }
    }
    return item;
}
function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);

    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    voiceControl(product);
}