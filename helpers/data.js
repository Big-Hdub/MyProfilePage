import { cEl, getDate, timeTillBday, getAge, getWeeks, divCreator, yearsMarried } from "./helpers.js"

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
    Sarah2: cEl("div", [["id", "SarahHide"], ["class", "Sarah Sarah2 imageBoxes2"]], ""),
    Leilani2: cEl("div", [["id", "LeilaniHide"], ["class", "Leilani Leilani2 imageBoxes2"]], ""),
    Harrison2: cEl("div", [["id", "HarrisonHide"], ["class", "Harrison Harrison2 imageBoxes2"]], ""),
    Kumiko2: cEl("div", [["id", "KumikoHide"], ["class", "Kumiko Kumiko2 imageBoxes2"]], ""),
    Bruno2: cEl("div", [["id", "BrunoHide"], ["class", "Bruno Bruno2 imageBoxes2"]], ""),
    Gizmo2: cEl("div", [["id", "GizmoHide"], ["class", "Gizmo Gizmo2 imageBoxes2"]], ""),
    Coco2: cEl("div", [["id", "CocoHide"], ["class", "Coco Coco2 imageBoxes2"]], ""),
    Volleyball2: cEl("div", [["id", "VolleyballHide"], ["class", "Volleyball Volleyball2 imageBoxes2"]], ""),
    Programming2: cEl("div", [["id", "ProgrammingHide"], ["class", "Programming Programming2 imageBoxes2"]], ""),
    SarahDivs: divCreator("Sarah", [`Sarah and I have been married for ${yearsMarried()} years.  We met March 31st 2003, and were married in September.`, "Having a Kona mudslide in Hawaii."]),
    LeilaniDivs: divCreator("Leilani", ["Leilani graduated from high school while doing running start and completed a transfer degree at WVC while doing that.", "Going to homecoming."]),
    HarrisonDivs: divCreator("Harrison", ["Harrison is doing fire science at the technical skills center to become a fireman. He loves fishing and volleyball", "The catch of the Day.  Halibut for dinner!"]),
    KumikoDivs: divCreator("Kumiko", ["Kumiko is a joy to be around and loves animals and minecraft.", "The flower girl for her uncles wedding"]),
    BrunoDivs: divCreator("Bruno", ["Bruno is a Boston terrier that is getting quite old now, so he usually just sleeps around the house.", "splashing in the water at the Long Beach Washington."]),
    GizmoDivs: divCreator("Gizmo", ["Gizmo is a Shi Tzu mix that is Kumikos shadow and hardly ever leaves her side.", "Sandy beach dog"]),
    CocoDivs: divCreator("Coco", ["Coco is a Chocolate Lab.  We have had her for about 3 months now and she is very playful and fun to be around.", "The new puppy!"]),
    VolleyballDivs: divCreator("Volleyball", ["Harrison and I both love volleyball.  I have played my whole life and coached for about 6 years before 2020.", "Harrison's team after winning a volleyball Tournament."]),
    ProgrammingDivs: divCreator("Programming", ["I have dabbled in programming starting with QBasic on Dos throughout my life but never really learned.  Since starting at App Academy it has really ingnited a passion for it.", "The new passion"]),
    footer: cEl("footer", [["class", "footer"]], ""),
    footNav: cEl("nav", [["id", "footNav"]], ""),
    gitHub: cEl("a", [["class", "footLinks"], ["href", "https://github.com/Big-Hdub"]], "GitHub"),
    email: cEl("a", [["class", "footLinks"], ["href", "mailto:hdub-bb@hotmail.com"]], "E-mail"),
    aatimes: cEl("a", [["class", "footLinks"], ["href", "https://hdubsaatimes.netlify.app"]], "AA Times project"),
    linkedin: cEl("a", [["class", "footLinks"], ["href", "https://www.linkedin.com/in/harry-wagner-7784a0123"]], "LinkedIn"),

}
