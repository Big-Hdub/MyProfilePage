import { cEl, getDate, timeTillBday, getAge, getWeeks } from "./helpers.js"

export default {
    header: cEl("header", [], ""),
    main: cEl("main", [["id", "mainBody"]], ""),
    hLeft: cEl("div", [["class", "headerDivs"], ["id", "headerLeft"]], ""),
    hMid: cEl("div", [["class", "headerDivs"], ["id", "headerMain"]], ""),
    hRight: cEl("div", [["class", "headerDivs"], ["id", "headerRight"]], ""),
    bio: cEl("p", [["id", "bio"]], `I am a ${getAge()} year old father of three with a wonderful wife named Sarah.  I have done construction my whole life, and as my body is failing I am seeking a new career that I can pursue.  I am currently ${getWeeks()} weeks into the App Academy program to become a software engineer.`),
    clock: cEl("p", [["id", "clock"]], ""),
    h1: cEl("h1", [], "Harry Wagner"),
    divMain: cEl("div", [["id", "divMain"]], ""),
    list1: cEl("ul", [["id", "listOne"], ["class", "listTitles"]], "Wife:"),
    list2: cEl("ul", [["id", "listTwo"], ["class", "listTitles"]], "Children:"),
    list3: cEl("ul", [["id", "listThree"], ["class", "listTitles"]], "Dogs:"),
    list4: cEl("ul", [["id", "listFour"], ["class", "listTitles"]], "Hobbies:"),
    time: setInterval(() => {
        const currentDate = new Date();
        const date = getDate(currentDate);
        const countdown = timeTillBday(currentDate);
        clock.innerHTML = date + "\n";
        clock.innerHTML += countdown;
    }, 1000),
    Sarah: cEl("li", [["id", "Sarah"], ["class", "imageBoxes"]], "Sarah"),
    Leilani: cEl("li", [["id", "Leilani"], ["class", "imageBoxes"]], "Leilani"),
    Harrison: cEl("li", [["id", "Harrison"], ["class", "imageBoxes"]], "Harrison"),
    Kumiko: cEl("li", [["id", "Kumiko"], ["class", "imageBoxes"]], "Kumiko"),
    Bruno: cEl("li", [["id", "Bruno"], ["class", "imageBoxes"]], "Bruno"),
    Gizmo: cEl("li", [["id", "Gizmo"], ["class", "imageBoxes"]], "Gizmo"),
    Coco: cEl("li", [["id", "Coco"], ["class", "imageBoxes"]], "Coco"),
    Volleyball: cEl("li", [["id", "Volleyball"], ["class", "imageBoxes"]], "Volleyball"),
    Programming: cEl("li", [["id", "Programming"], ["class", "imageBoxes"]], "Programming"),
    footer: cEl("footer", [["class", "footer"]], ""),
    footNav: cEl("nav", [["id", "footNav"]], ""),
    gitHub: cEl("a", [["class", "footLinks"], ["href", "https://github.com/Big-Hdub"]], "My GitHub"),
    email: cEl("a", [["class", "footLinks"], ["href", "mailto:hdub-bb@hotmail.com"]], "E-mail"),
    aatimes: cEl("a", [["class", "footLinks"], ["href", "https://hdubsaatimes.netlify.app"]], "My AA Times project"),
    linkedin: cEl("a", [["class", "footLinks"], ["href", "www.linkedin.com/in/harry-wagner-7784a0123"]], "My linkedIn"),
}
