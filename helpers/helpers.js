export const cEl = (tag, att, text) => {
    const el = document.createElement(tag);
    if (att.length) {
        att.forEach(a => {
            el.setAttribute(a[0], a[1]);
        });
    };
    if (text) el.textContent = text;
    return el;
};

const suffix = {
    1: "st",
    2: "nd",
    3: "rd",
    4: "th",
    5: "th",
    6: "th",
    7: "th",
    8: "th",
    9: "th",
    10: "th",
    11: "th",
    12: "th",
    13: "th",
    14: "th",
    15: "th",
    16: "th",
    17: "th",
    18: "th",
    19: "th",
    20: "th",
    21: "st",
    22: "nd",
    23: "rd",
    24: "th",
    25: "th",
    26: "th",
    27: "th",
    28: "th",
    29: "th",
    30: "th",
    31: "st"
}

const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
}

export const getDate = (date) => {
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let month = date.getMonth();
    month = months[month]
    let year = date.getFullYear();
    let day = date.getDate();
    day = `${day}${suffix[day]}`;
    if (hours > 12) hours = hours - 12;
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;
    return `It is ${month} ${day}, ${year} the current time is: <span id="hour">${hours}</span>:<span id="minute">${minutes}</span>:<span id="second">${seconds}</span>`
}

export const timeTillBday = (date) => {
    const year = date.getFullYear();
    const birthMonth = 5;
    const birthDay = 26;
    const partyTime = new Date(year, birthMonth, birthDay);
    if (date.getTime() > partyTime.getTime()) partyTime.setFullYear(year + 1);
    const dif = partyTime.getTime() - date.getTime();
    const difInDays = Math.ceil(dif / (1000 * 60 * 60 * 24));
    if (difInDays === 0) return "It is my birthday today."
    if (difInDays === 1) return `There are <span id="days">${difInDays}</span> day until my birthday on June 26th.`
    return `There are <span id="days">${difInDays}</span> days until my birthday on June 26th.`
}

export const getAge = () => {
    const date = new Date();
    const birth = new Date(1981, 5, 26);
    const dif = date - birth;
    const years = Math.floor(dif / (1000 * 60 * 60 * 24 * 365));
    return years;
}
