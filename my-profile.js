import data from "./helpers/data.js";

document.addEventListener("DOMContentLoaded", (event) => {
    document.body.append(data.header, data.main, data.footer);
    data.header.append(data.hLeft, data.hMid, data.hRight);
    data.hLeft.append(data.bio);
    data.hRight.append(data.clock);
    data.time;
    data.hMid.append(data.h1);
    data.main.append(data.divMain);
    data.divMain.append(data.list1, data.list2, data.list3, data.list4);
    data.list1.append(data.Sarah);
    data.list2.append(data.Leilani, data.Harrison, data.Kumiko);
    data.list3.append(data.Bruno, data.Gizmo, data.Coco);
    data.list4.append(data.Volleyball, data.Programming);
    data.footer.append(data.footNav);
    data.footNav.append(data.email, data.gitHub, data.linkedin, data.aatimes, data.dynamicMath, data.tictactoe);
    document.body.append(data.Sarah2, data.Leilani2, data.Harrison2, data.Kumiko2, data.Bruno2, data.Gizmo2, data.Coco2, data.Volleyball2, data.Programming2);
    data.Sarah2.append(data.SarahDivs[0], data.SarahDivs[1]);
    data.Leilani2.append(data.LeilaniDivs[0], data.LeilaniDivs[1]);
    data.Harrison2.append(data.HarrisonDivs[0], data.HarrisonDivs[1]);
    data.Kumiko2.append(data.KumikoDivs[0], data.KumikoDivs[1]);
    data.Bruno2.append(data.BrunoDivs[0], data.BrunoDivs[1]);
    data.Gizmo2.append(data.GizmoDivs[0], data.GizmoDivs[1]);
    data.Coco2.append(data.CocoDivs[0], data.CocoDivs[1]);
    data.Volleyball2.append(data.VolleyballDivs[0], data.VolleyballDivs[1]);
    data.Programming2.append(data.ProgrammingDivs[0], data.ProgrammingDivs[1]);
    Array.from(document.getElementsByClassName('imageBoxes'))
        .forEach(el => {
            el.addEventListener('click', e => {
                e.stopPropagation()
                const current = e.target.id;
                const el = document.getElementById(`${current}Hide`);
                el.removeAttribute("id");
                el.addEventListener('click', e => {
                    e.stopPropagation()
                    el.setAttribute("id", `${current}Hide`);
                })
            });
        });
});
