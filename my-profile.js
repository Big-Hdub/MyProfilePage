import data from "./helpers/data.js";

document.addEventListener("DOMContentLoaded", (event) => {
    document.body.append(data.header, data.main, data.footer);
    data.header.append(data.hLeft, data.hMid, data.hRight);
    data.hLeft.append(data.bio);
    data.hRight.append(data.clock);
    data.time;
    data.hMid.append(data.h1);
    data.main.append(data.divMain);
    divMain.append(data.list1, data.list2, data.list3, data.list4);
    data.list1.append(data.Sarah);
    data.list2.append(data.Leilani, data.Harrison, data.Kumiko);
    data.list3.append(data.Bruno, data.Gizmo, data.Coco);
    data.list4.append(data.Volleyball, data.Programming);
    data.footer.append(data.footNav)
    data.footNav.append(data.email, data.gitHub, data.linkedin, data.aatimes);
});
