import { cEl, getDate, timeTillBday, getAge } from "./helpers/helpers.js"

document.addEventListener("DOMContentLoaded", (event) => {

    document.body.append(cEl("header", [], ""), cEl("main", [["id", "mainBody"]], ""));
    const header = document.querySelector("header");
    const age = getAge();
    const hLeft = cEl("div", [["class", "headerDivs"], ["id", "headerLeft"]], "");
    const hMid = cEl("div", [["class", "headerDivs"], ["id", "headerMain"]], "");
    const hRight = cEl("div", [["class", "headerDivs"], ["id", "headerRight"]], "");
    header.append(hLeft, hMid, hRight);
    const bio = cEl("p", [["id", "bio"]], `I am a ${age} year old father of three with a wonderful wife named Sarah.  I have done construction my whole life, and as my body is failing I am seeking a new career that I can pursue.  I am currently 17 weeks into the App Academy program to become a software engineer.`)
    hLeft.append(bio)
    const clock = cEl("p", [["id", "clock"]], "")
    hRight.append(clock);
    const headerMain = document.querySelector("#headerMain");
    headerMain.append(cEl("h1", [], "Harry Wagner"));
    const main = document.querySelector("#mainBody");
    main.append(cEl("div", [["id", "divMain"]], ""));
    const divMain = document.querySelector("#divMain");
    const list1 = cEl("ul", [["id", "listOne"], ["class", "listTitles"]], "Wife:");
    const list2 = cEl("ul", [["id", "listTwo"], ["class", "listTitles"]], "Children:");
    const list3 = cEl("ul", [["id", "listThree"], ["class", "listTitles"]], "Dogs:");
    const list4 = cEl("ul", [["id", "listFour"], ["class", "listTitles"]], "Hobbies:");
    divMain.append(list1, list2, list3, list4);
    const lists = document.querySelectorAll(".listTitles");
    lists[0].append(cEl("li", [["id", "Sarah"], ["class", "imageBoxes"]], "Sarah"));
    const Leilani = cEl("li", [["id", "Leilani"], ["class", "imageBoxes"]], "Leilani");
    const Harrison = cEl("li", [["id", "Harrison"], ["class", "imageBoxes"]], "Harrison");
    const Kumiko = cEl("li", [["id", "Kumiko"], ["class", "imageBoxes"]], "Kumiko");
    lists[1].append(Leilani, Harrison, Kumiko);
    const Bruno = cEl("li", [["id", "Bruno"], ["class", "imageBoxes"]], "Bruno");
    const Gizmo = cEl("li", [["id", "Gizmo"], ["class", "imageBoxes"]], "Gizmo");
    const Coco = cEl("li", [["id", "Coco"], ["class", "imageBoxes"]], "Coco");
    lists[2].append(Bruno, Gizmo, Coco);
    const Volleyball = cEl("li", [["id", "Volleyball"], ["class", "imageBoxes"]], "Volleyball");
    const Programming = cEl("li", [["id", "Programming"], ["class", "imageBoxes"]], "Programming");
    lists[3].append(Volleyball, Programming);
    const time = () => {
        const currentDate = new Date();
        const date = getDate(currentDate);
        const countdown = timeTillBday(currentDate);
        clock.innerHTML = date + "\n";
        clock.innerHTML += countdown;
    };
    setInterval(time, 1000);
    time();
});
