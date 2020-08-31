
// constants
const NUMBER_OF_SURAHS = 114;
const ANSWER_OPTIONS = 4;
const START_OF_AYAT = 0;
const GIMME_THE_WHOLE_ARRAY = 114;

const app = document.getElementById("app");

// session management
const progress = document.getElementById("session-questions");
var session_counter = 0;
progress.setAttribute("value", session_counter)

// window.SpeechRecognition = webkitSpeechRecognition || window.SpeechRecognition;
// const synth = window.speechSynthesis;
// recognition = new SpeechRecognition();
// recognition.lang = 'ar-SA';
// recognition.interimResult = true;

// speakButton.onclick = () => {
//     // sound.play();
//     dictate();
// }

// const dictate = () => {
//     recognition.start();
//     recognition.onresult = (event) => {
//         const speechToText = Array.from(event.results)
//         .map(result => result[0])
//         .map(result => result.transcript)
//         .join(' ')
//         console.log(speechToText)
//         p.innerText = speechToText;

//         speak();
//     }
// }

// const speak = () => {
//     const utterThis = new SpeechSynthesisUtterance("شكرا هذا جميل");
//     utterThis.lang = 'ar-SA';
//     synth.speak(utterThis);
// }

////////////////////////
// NAVIGATION FUNCTIONS
////////////////////////

const removeContainer = (containerName) => {
    document.getElementById(containerName).remove();
}

const removeContainerClass = (containerClass) => {
    document.getElementsByClassName(containerClass)[0].remove();
}

const attachHomeElements = () => {
    let homeBtnsDiv = document.createElement('div');
    let tagline = document.createElement('h3');
    let bySurah = document.createElement('button');
    let oneLetter = document.createElement('button');
    let oneKalimah = document.createElement('button');
    let about = document.createElement('button');
    let bySurahCode = document.createElement('code');
    let oneLetterCode = document.createElement('code');
    let oneKalimahCode = document.createElement('code');
    let aboutCode = document.createElement('code');

    setAttributes(homeBtnsDiv, {
        id: "home-buttons-container",
    });
    setAttributes(bySurah, {
        class: "home-elements",
    });
    setAttributes(oneLetter, {
        class: "home-elements",
    });
    setAttributes(oneKalimah, {
        class: "home-elements",
    });
    setAttributes(about, {
        class: "home-elements",
    });

    tagline.innerText = "How well is your Quran memorization?";
    bySurahCode.innerText = "Choose By Surah";
    oneLetterCode.innerText = "Random One Letter";
    oneKalimahCode.innerText = "Random One Kalimah";
    aboutCode.innerText = "About";

    bySurah.onclick = () => bysurah();
    oneLetter.onclick = () => oneletter();
    oneKalimah.onclick = () => onekalimah();
    about.onclick = () => about();

    bySurah.appendChild(bySurahCode);
    oneLetter.appendChild(oneLetterCode);
    oneKalimah.appendChild(oneKalimahCode);
    about.appendChild(aboutCode);

    appendChildren(homeBtnsDiv, {
        tl: tagline,
        bs: bySurah,
        ol: oneLetter,
        ok: oneKalimah,
        ab: about,
    });

    app.appendChild(homeBtnsDiv);
}

const attachNotFoundElements = () => {
    let notFoundDiv = document.createElement('div');
    let prompt = document.createElement('h1');
    let ayat = document.createElement('h1');
    let check = document.createElement('p');

    setAttributes(notFoundDiv, {
        class: "container",
    });
    setAttributes(ayat, {
        id: "ayat"
    });
    setAttributes(check, {
        id: "check"
    });

    prompt.innerText = "Are you lost?";
    ayat.innerText = "\"... so ask the people of the message if you do not know.\" [21:7]";
    check.innerText = "Click the 'Masyi' logo to go back to the Home screen.";

    appendChildren(notFoundDiv, {
        pt: prompt,
        at: ayat,
        ct: check,
    })

    app.appendChild(notFoundDiv)
}

const attachAboutElements = () => {
    const aboutDiv = document.createElement('div');
    const projTitle = document.createElement('h3');
    const projDeets = document.createElement('p');
    const supportTitle = document.createElement('h3');
    const supportDeets = document.createElement('p');
    const contriTitle = document.createElement('h3');
    const contriAppre = document.createElement('p');
    const contriDeets = document.createElement('p');
    const twitterLink = document.createElement('button');
    const twitterIcon = document.createElement('i');
    const facebookLink = document.createElement('button');
    const facebookIcon = document.createElement('i');
    const githubLink = document.createElement('button');
    const githubIcon = document.createElement('i');

    setAttributes(aboutDiv, {
        class: "container",
    })
    setAttributes(twitterLink, {
        type: "button",
        class: "socmed",
    });
    setAttributes(twitterIcon, {
        class: "fab fa-twitter",
    });
    setAttributes(facebookLink, {
        type: "button",
        class: "socmed",
    });
    setAttributes(facebookIcon, {
        class: "fab fa-facebook",
    });
    setAttributes(githubLink, {
        type: "button",
        class: "socmed",
    });
    setAttributes(githubIcon, {
        class: "fab fa-github",
    });

    projTitle.innerText = "About Masyi";
    projDeets.innerText = "This app was created to help you test yourself on your Quran memorization."
    supportTitle.innerText = "Contact Details";
    supportDeets.innerText = "If you have any feedback or questions, feel free to reach out. Links below :)";
    // twitterLink.innerText = "Twitter";
    twitterLink.appendChild(twitterIcon);
    twitterLink.onclick = () => window.location.href = "https://www.twitter.com/irfan__zainudin";
    // facebookLink.innerText = "Facebook";
    facebookLink.appendChild(facebookIcon);
    facebookLink.onclick = () => window.location.href = "https://www.facebook.com/irfanozainudin/";
    // githubLink.innerText = "Github";
    githubLink.appendChild(githubIcon);
    githubLink.onclick = () => window.location.href = "https://github.com/irfanzainudin/masyi";
    contriTitle.innerText = "Want to contribute code?";
    contriAppre.innerText = "Thank you for considering contributing to Masyi.";
    contriDeets.innerText = "Head over to the Github repo to see what you can do to contribute!"

    appendChildren(aboutDiv, {
        pt: projTitle,
        pd: projDeets,
        st: supportTitle,
        sd: supportDeets,
        ct: contriTitle,
        ca: contriAppre,
        cd: contriDeets,
        tl: twitterLink,
        fl: facebookLink,
        gl: githubLink,
    });

    app.appendChild(aboutDiv);
}

const about = () => {
    const url = document.URL;
    if (url === "https://irfanzainudin.github.io/masyi/") {
        removeContainer("home-buttons-container");
        attachAboutElements();
    } else if (url === "http://127.0.0.1:5500/") {
        removeContainer("home-buttons-container");
        attachAboutElements();
    } else {
        removeContainer("home-buttons-container");
        attachNotFoundElements();
    }
}

const listOfSurah = () => {
    const surahList = document.createElement('div');
    setAttributes(surahList, {
        id: "surah-list"
    })
    app.appendChild(surahList)

    let i = 1;
    SurahName(GIMME_THE_WHOLE_ARRAY).map(surah => {
        let btn = document.createElement('button');
        setAttributes(btn, {
            type: "button",
            class: "surahs",
            id: i.toString()
        });
        let sName = document.createElement('code');
        sName.innerText = i + ". " + surah;
        btn.appendChild(sName);
        btn.onclick = () => attachBySurahElements(btn.id)

        surahList.appendChild(btn);
        i++;
    })
}

const attachBySurahElements = (surahNumber) => {
    // removing list of surahs
    document.getElementById("surah-list").remove();

    let bySurahDiv = document.createElement('div');
    let ayat = document.createElement('h1');
    let bdi = document.createElement('bdi');
    let check = document.createElement('h1');
    let answerBtns = document.createElement('div');

    setAttributes(bySurahDiv, {
        class: "container",
    })
    setAttributes(bdi, {
        id: "ayat",
    });
    setAttributes(check, {
        id: "check",
    });
    setAttributes(answerBtns, {
        class: "answer-btns",
        id: "answer-btns",
    });

    bdi.innerText = "Fetching ayat...";
    check.innerText = "❓";

    ayat.appendChild(bdi);

    appendChildren(bySurahDiv, {
        ayatEl: ayat,
        checkEl: check,
        answersEl: answerBtns
    });

    app.appendChild(bySurahDiv);

    // main loop
    bySurahLoop(surahNumber);
}

const bysurah = () => {
    const url = document.URL;
    if (url === "https://irfanzainudin.github.io/masyi/") {
        removeContainer("home-buttons-container");
        listOfSurah();
    } else if (url === "http://127.0.0.1:5500/") {
        removeContainer("home-buttons-container");
        listOfSurah();
    } else {
        removeContainer("home-buttons-container");
        attachNotFoundElements();
    }
}

const attachOneLetterElements = () => {
    let oneLetterDiv = document.createElement('div');
    let ayat = document.createElement('h1');
    let bdi = document.createElement('bdi');
    let check = document.createElement('h1');
    let answerBtns = document.createElement('div');

    setAttributes(oneLetterDiv, {
        class: "container"
    });
    setAttributes(bdi, {
        id: "ayat"
    });
    setAttributes(check, {
        id: "check"
    });
    setAttributes(answerBtns, {
        class: "answer-btns",
        id: "answer-btns",
    });

    bdi.innerText = "Fetching ayat...";
    check.innerText = "❓";

    ayat.appendChild(bdi);

    appendChildren(oneLetterDiv, {
        ayatEl: ayat,
        checkEl: check,
        answersEl: answerBtns
    });

    app.appendChild(oneLetterDiv);

    // main loop
    oneLetterLoop();
}

const oneletter = () => {
    const url = document.URL;
    if (url === "https://irfanzainudin.github.io/masyi/") {
        removeContainer("home-buttons-container");
        attachOneLetterElements();
    } else if (url === "http://127.0.0.1:5500/") {
        removeContainer("home-buttons-container");
        attachOneLetterElements();
    } else {
        removeContainer("home-buttons-container");
        attachNotFoundElements();
    }
}

const attachOneKalimahElements = () => {
    let oneKalimahDiv = document.createElement('div');
    let ayat = document.createElement('h1');
    let bdi = document.createElement('bdi');
    let check = document.createElement('h1');
    let answerBtns = document.createElement('div');

    setAttributes(oneKalimahDiv, {
        class: "container",
    })
    setAttributes(bdi, {
        id: "ayat"
    });
    setAttributes(check, {
        id: "check"
    });
    setAttributes(answerBtns, {
        class: "answer-btns",
        id: "answer-btns",
    });

    bdi.innerText = "Fetching ayat...";
    check.innerText = "❓"

    ayat.appendChild(bdi);

    appendChildren(oneKalimahDiv, {
        ayatEl: ayat,
        checkEl: check,
        answersEl: answerBtns
    });

    app.appendChild(oneKalimahDiv);

    // main loop
    oneKalimahLoop();
}

const onekalimah = () => {
    const url = document.URL;
    if (url === "https://irfanzainudin.github.io/masyi/") {
        removeContainer("home-buttons-container");
        attachOneKalimahElements();
    } else if (url === "http://127.0.0.1:5500/") {
        removeContainer("home-buttons-container");
        attachOneKalimahElements();
    } else {
        removeContainer("home-buttons-container");
        attachNotFoundElements();
    }
}

//////////////////
// GAME FUNCTIONS
//////////////////

// main loop for by surah mode
const bySurahLoop = (surahNumber) => {
    const ayat = document.getElementById('ayat');
    const check = document.getElementById('check');
    const answerBtns = document.getElementById('answer-btns');

    ayat.innerText = "Fetching ayat...";
    check.innerText = "❓";
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }

    let surahNum = parseInt(surahNumber); // making sure we're passing an int
    let ayatText = getAyatBySurah(surahNum);
    ayatText.then(response => {
        const ayatArray = response.split(" ");
        const originalArray = response.split(" ");
        const len = ayatArray.length;
        let blank = Math.floor(Math.random() * len);
        ayatArray[blank] = "_____";

        ayat.innerText = ayatArray.join(' ')

        const correct = originalArray[blank];
        let answers = new Set([correct]);
        let ans_opts = (originalArray.length <= 3) ? (2) : ANSWER_OPTIONS;
        while (answers.size < ans_opts) {
            let rand = Math.floor(Math.random() * len);
            answers.add(originalArray[rand]);
        }

        let setArray = Array.from(answers);
        // using fisher-yates shuffle algo
        let i = setArray.length - 1;
        while (i >= 0) {
            let j = Math.floor(Math.random() * i);
            let temp = setArray[i];
            setArray[i] = setArray[j];
            setArray[j] = temp;
            i--;
        }

        answers = new Set(setArray);
        answers.forEach(answer => {
            let btn = document.createElement('button');
            setAttributes(btn, {
                type: "button",
                class: "answer",
            })
            btn.innerText = answer
            btn.onclick = () => checkBySurah(answer, correct, surahNumber)

            answerBtns.appendChild(btn)
        })
    })
    .catch(reason => {
        console.log(reason)
        ayat.innerText = "Something went wrong, please refresh the page";
        let btn = document.createElement('button');
        setAttributes(btn, {
            type: "button",
            class: "answer",
        })
        btn.innerText = "Refresh"
        btn.onclick = () => checkBySurah("refresh", "please", 1)
        answerBtns.appendChild(btn)
    })
}

// check answers for bySurahLoop
// jumps back to bySurahLoop
const checkBySurah = (answer, correct, surahNumber) => {
    const check = document.getElementById('check');

    if (answer === correct) {
        check.innerText = "✅";
        playSound("correct-sound");
        plusSC();
    } else if (answer == "refresh") {
        check.innerText = "🔄";
    } else {
        check.innerText = "❌";
        playSound("wrong-sound");
    }

    let surahNum = parseInt(surahNumber); // making sure we're passing an int
    if (session_counter < 10) {
        window.setTimeout(() => bySurahLoop(surahNum), 500);
    } else {
        removeContainerClass("container");
        winBySurah();
    }
}

// congrats players on winning
// either jumps back to home or play again
const winBySurah = () => {
    const winDiv = document.createElement('div');
    const congrats = document.createElement('h1');
    const goBackHome = document.createElement('button');
    const playAgain = document.createElement('button');

    setAttributes(winDiv, {
        class: "container",
    });

    congrats.innerText = "Congratulations!";
    goBackHome.innerText = "Home";
    playAgain.innerText = "Play Again";

    goBackHome.onclick = () => {
        resetSC();
        attachHomeElements();
        removeContainerClass("container");
    }
    playAgain.onclick = () => {
        resetSC();
        listOfSurah();
        removeContainerClass("container");
    }

    appendChildren(winDiv, {
        ct: congrats,
        gb: goBackHome,
        pa: playAgain,
    });

    app.appendChild(winDiv);
}

// main loop for one letter mode
const oneLetterLoop = () => {
    const ayat = document.getElementById('ayat');
    const check = document.getElementById('check');
    const answerBtns = document.getElementById('answer-btns');

    ayat.innerText = "Fetching ayat...";
    check.innerText = "❓";
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }

    let ayatText = getAyat();
    ayatText.then(response => {
        const len = response.length;
        let blank = Math.floor(Math.random() * len);
        const blankedAyat = response.replace(response[blank], '☐')

        ayat.innerText = blankedAyat

        const correct = isitVowel(response[blank]) ? ("---" + response[blank] + "-") : response[blank];
        let answers = new Set([correct]);
        while (answers.size < ANSWER_OPTIONS) {
            let rand = Math.floor(Math.random() * len);
            if (response[rand] != response[blank]) {
                answers.add(response[rand]);
            } else {
                rand = (rand == answers.size) ? (rand - 1) : (rand + 1);
                answers.add(response[rand]);
            }
        }

        // to distinguish the vowels (ie. fatha, kasra, damma etc.)
        answers.forEach(ans => {
            if (isitVowel(ans)) {
                let withDistinguisher = "---" + ans + "-";
                answers.add(withDistinguisher);
                answers.delete(ans);
            }
        });

        let setArray = Array.from(answers);
        // using fisher-yates shuffle algo
        let i = setArray.length - 1;
        while (i >= 0) {
            let j = Math.floor(Math.random() * i);
            let temp = setArray[i];
            setArray[i] = setArray[j];
            setArray[j] = temp;
            i--;
        }

        answers = new Set(setArray);
        answers.forEach(answer => {
            let btn = document.createElement('button');
            setAttributes(btn, {
                type: "button",
                class: "answer",
            })
            btn.innerText = answer
            btn.onclick = () => checkOneLetter(answer, correct)

            answerBtns.appendChild(btn)
        })
    })
    .catch(reason => {
        console.log(reason)
        ayat.innerText = "Something went wrong, please refresh the page";
        let btn = document.createElement('button');
        setAttributes(btn, {
            type: "button",
            class: "answer",
        })
        btn.innerText = "Refresh"
        btn.onclick = () => checkOneKalimah("refresh", "please")
        answerBtns.appendChild(btn)
    })
}

// check answers for oneLetterLoop
// jumps back to oneLetterLoop
const checkOneLetter = (answer, correct) => {
    const check = document.getElementById('check');

    if (answer === correct) {
        check.innerText = "✅";
        playSound("correct-sound");
        plusSC();
    } else if (answer == "refresh") {
        check.innerText = "🔄";
    } else {
        check.innerText = "❌";
        playSound("wrong-sound");
    }

    if (session_counter < 10) {
        window.setTimeout(oneLetterLoop, 500);
    } else {
        removeContainerClass("container");
        winOneLetter();
    }
}

// congrats players on winning
// either jumps back to home or play again
const winOneLetter = () => {
    const winDiv = document.createElement('div');
    const congrats = document.createElement('h1');
    const goBackHome = document.createElement('button');
    const playAgain = document.createElement('button');

    setAttributes(winDiv, {
        class: "container",
    });

    congrats.innerText = "Congratulations!";
    goBackHome.innerText = "Home";
    playAgain.innerText = "Play Again";

    goBackHome.onclick = () => {
        resetSC();
        attachHomeElements();
        removeContainerClass("container");
    }
    playAgain.onclick = () => {
        resetSC();
        attachOneLetterElements();
        removeContainerClass("container");
    }

    appendChildren(winDiv, {
        ct: congrats,
        gb: goBackHome,
        pa: playAgain,
    });

    app.appendChild(winDiv);
}

// main loop for one kalimah mode
const oneKalimahLoop = () => {
    const ayat = document.getElementById('ayat');
    const check = document.getElementById('check');
    const answerBtns = document.getElementById('answer-btns');

    ayat.innerText = "Fetching ayat...";
    check.innerText = "❓";
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }

    let ayatText = getAyat();
    ayatText.then(response => {
        const ayatArray = response.split(" ");
        const originalArray = response.split(" ");
        const len = ayatArray.length;
        let blank = Math.floor(Math.random() * len);
        ayatArray[blank] = "_____";

        ayat.innerText = ayatArray.join(' ')

        const correct = originalArray[blank];
        let answers = new Set([correct]);
        let ans_opts = (originalArray.length <= 3) ? (2) : ANSWER_OPTIONS;
        while (answers.size < ans_opts) {
            let rand = Math.floor(Math.random() * len);
            answers.add(originalArray[rand]);
        }

        let setArray = Array.from(answers);
        // using fisher-yates shuffle algo
        let i = setArray.length - 1;
        while (i >= 0) {
            let j = Math.floor(Math.random() * i);
            let temp = setArray[i];
            setArray[i] = setArray[j];
            setArray[j] = temp;
            i--;
        }

        answers = new Set(setArray);
        answers.forEach(answer => {
            let btn = document.createElement('button');
            setAttributes(btn, {
                type: "button",
                class: "answer",
            })
            btn.innerText = answer
            btn.onclick = () => checkOneKalimah(answer, correct)

            answerBtns.appendChild(btn)
        })
    })
    .catch(reason => {
        console.log(reason)
        ayat.innerText = "Something went wrong, please refresh the page";
        let btn = document.createElement('button');
        setAttributes(btn, {
            type: "button",
            class: "answer",
        })
        btn.innerText = "Refresh"
        btn.onclick = () => checkOneKalimah("refresh", "please")
        answerBtns.appendChild(btn)
    })
}

// check answers for oneKalimahLoop
// jumps back to oneKalimahLoop
const checkOneKalimah = (answer, correct) => {
    const check = document.getElementById('check');

    if (answer === correct) {
        check.innerText = "✅";
        playSound("correct-sound");
        plusSC();
    } else if (answer == "refresh") {
        check.innerText = "🔄";
    } else {
        check.innerText = "❌";
        playSound("wrong-sound");
    }

    if (session_counter < 10) {
        window.setTimeout(oneKalimahLoop, 500);
    } else {
        removeContainerClass("container");
        winOneKalimah();
    }
}

// congrats players on winning
// either jumps back to home or play again
const winOneKalimah = () => {
    const winDiv = document.createElement('div');
    const congrats = document.createElement('h1');
    const goBackHome = document.createElement('button');
    const playAgain = document.createElement('button');

    setAttributes(winDiv, {
        class: "container",
    });

    congrats.innerText = "Congratulations!";
    goBackHome.innerText = "Home";
    playAgain.innerText = "Play Again";

    goBackHome.onclick = () => {
        resetSC();
        attachHomeElements();
        removeContainerClass("container");
    }
    playAgain.onclick = () => {
        resetSC();
        attachOneKalimahElements();
        removeContainerClass("container");
    }

    appendChildren(winDiv, {
        ct: congrats,
        gb: goBackHome,
        pa: playAgain,
    });

    app.appendChild(winDiv);
}

/////////////////
// API FUNCTIONS
/////////////////

const getAyat = async () => {
    let random_surah = Math.floor(Math.random() * NUMBER_OF_SURAHS);
    let random_verse = Math.floor(Math.random() * RandomVerse(random_surah));

    // Math.random is 0-inclusive
    random_surah = (random_surah == 0) ? (random_surah + 1) : random_surah;
    random_verse = (random_verse == 0) ? (random_verse + 1) : random_verse;

    const apiUrl = "https://api.alquran.cloud/v1/ayah/" + random_surah + ":" + random_verse;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // console.log(data)
        if (data) {
            return data.data.text
        } else {
            console.log("something went wrong :(")
        }
    } catch (error) {
        console.log(error)
    }
}

const getAyatBySurah = async (surahNumber) => {
    let random_verse = Math.floor(Math.random() * RandomVerse(surahNumber));
    // Math.random is 0-inclusive
    random_verse = (random_verse == 0) ? (random_verse + 1) : random_verse;
    const apiUrl = "https://api.alquran.cloud/v1/ayah/" + surahNumber + ":" + random_verse;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // console.log(data)
        if (data) {
            return data.data.text
        } else {
            console.log("something went wrong :(")
        }
    } catch (error) {
        console.log(error)
    }
}

/////////////////
// AUX FUNCTIONS
/////////////////

// set multiple attributes on dom elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

// append multiple child to parent el
function appendChildren(el, children) {
    for (const key in children) {
        el.appendChild(children[key])
    }
}

// given a string, check if it's a vowel
// vowel == fatha, damma, kasra, sukun etc.
function isitVowel(text) {
    let verdict = false;
    vowel = ['َ','ً','ِ','ٍ','ُ','ُ'];
    vowel.map(b => {
        if (text === b) {
            verdict = true
        }
    });
    return verdict;
}

// given id of audio HTML element, play the sound
function playSound(soundNode) {
    let sound = document.getElementById(soundNode);
    sound.play();
}

// increments the session counter
function plusSC () {
    session_counter++;
    progress.setAttribute("value", session_counter);
}

// reset the session counter
function resetSC () {
    session_counter = 0;
    progress.setAttribute("value", session_counter);
}

// given random surah (rs), return the number of verses for that surah
function RandomVerse(rs) {
    // surah ordering
    const AL_FATIHAH = 1
    const AL_BAQARAH = 2
    const ALI_IMRAN = 3
    const AN_NISA = 4
    const AL_MAIDAH = 5
    const AL_ANAAM = 6
    const AL_AARAF = 7
    const AL_ANFAL = 8
    const AT_TAWBAH = 9
    const YUNUS = 10
    const HUD = 11
    const YUSUF = 12
    const AR_RAAD = 13
    const IBRAHIM = 14
    const AL_HIJR = 15
    const AN_NAHL = 16
    const AL_ISRAA = 17
    const AL_KAHFI = 18
    const MARYAM = 19
    const TAA_HAA = 20
    const AL_ANBIYAA = 21
    const AL_HAJJ = 22
    const AL_MUKMINUN = 23
    const AN_NOOR = 24
    const AL_FURQAN = 25
    const ASH_SHUAARAA = 26
    const AN_NAML = 27
    const AL_QASAS = 28
    const AL_ANKABUT = 29
    const AR_RUM = 30
    const LUQMAN = 31
    const AS_SAJDA = 32
    const AL_AHZAAB = 33
    const SABA = 34
    const FAATIR = 35
    const YASEEN = 36
    const AS_SAAFFAAT = 37
    const SAAD = 38
    const AZ_ZUMAR = 39
    const GHAAFIR = 40
    const FUSSILAT = 41
    const ASH_SHURA = 42
    const AZ_ZUKHRUF = 43
    const AD_DUKHAAN = 44
    const AL_JAATHIYA = 45
    const AL_AHQAF = 46
    const MUHAMMAD = 47
    const AL_FATH = 48
    const AL_HUJURAAT = 49
    const QAAF = 50
    const ADH_DHAARIYAT = 51
    const AT_TUR = 52
    const AN_NAJM = 53
    const AL_QAMAR = 54
    const AR_RAHMAN = 55
    const AL_WAAQIAAH = 56
    const AL_HADID = 57
    const AL_MUJAADILA = 58
    const AL_HASHR = 59
    const AL_MUMTAHANA = 60
    const AS_SAFF = 61
    const AL_JUMUAA = 62
    const AL_MUNAAFIQUN = 63
    const AT_TAGHAABUN = 64
    const AT_TALAAQ = 65
    const AT_TAHRIM = 66
    const AL_MULK = 67
    const AL_QALAM = 68
    const AL_HAAQQAH = 69
    const AL_MAARIJ = 70
    const NUH = 71
    const AL_JIN = 72
    const AL_MUZZAMMIL = 73
    const AL_MUDDATHTHIR = 74
    const AL_QIYAAMA = 75
    const AL_INSAN = 76
    const AL_MURSALAAT = 77
    const AN_NABA = 78
    const AN_NAAZIAAT = 79
    const ABASA = 80
    const AT_TAKWIR = 81
    const AL_INFITAAR = 82
    const AL_MUTAFFIFIN = 83
    const AL_INSHIQAAQ = 84
    const AL_BURUJ = 85
    const AT_TAARIQ = 86
    const AL_ALAA = 87
    const AL_GHAASHIYA = 88
    const AL_FAJR = 89
    const AL_BALAD = 90
    const ASH_SHAMS = 91
    const AL_LAIL = 92
    const AD_DHUHAA = 93
    const ASH_SHARH = 94
    const AT_TIN = 95
    const AL_ALAQ = 96
    const AL_QADR = 97
    const AL_BAYYINAH = 98
    const AZ_ZALZALA = 99
    const AL_AADIYAAT = 100
    const AL_QAARIAAH = 101
    const AT_TAKAATHUR = 102
    const AL_ASR = 103
    const AL_HUMAZA = 104
    const AL_FIL = 105
    const QURAISH = 106
    const AL_MAAUN = 107
    const AL_KAWTHAR = 108
    const AL_KAAFIRUN = 109
    const AN_NASR = 110
    const AL_MASAD = 111
    const AL_IKHLAS = 112
    const AL_FALAQ = 113
    const AN_NAAS = 114

    // verses count
    const AL_FATIHAH_VERSES = 7
    const AL_BAQARAH_VERSES = 286
    const ALI_IMRAN_VERSES = 200
    const AN_NISA_VERSES = 176
    const AL_MAIDAH_VERSES = 120
    const AL_ANAAM_VERSES = 165
    const AL_AARAF_VERSES = 206
    const AL_ANFAL_VERSES = 75
    const AT_TAWBAH_VERSES = 129
    const YUNUS_VERSES = 109
    const HUD_VERSES = 123
    const YUSUF_VERSES = 111
    const AR_RAAD_VERSES = 43
    const IBRAHIM_VERSES = 52
    const AL_HIJR_VERSES = 99
    const AN_NAHL_VERSES = 128
    const AL_ISRAA_VERSES = 111
    const AL_KAHFI_VERSES = 110
    const MARYAM_VERSES = 98
    const TAA_HAA_VERSES = 135
    const AL_ANBIYAA_VERSES = 112
    const AL_HAJJ_VERSES = 78
    const AL_MUKMINUN_VERSES = 118
    const AN_NOOR_VERSES = 64
    const AL_FURQAN_VERSES = 77
    const ASH_SHUAARAA_VERSES = 227
    const AN_NAML_VERSES = 93
    const AL_QASAS_VERSES = 88
    const AL_ANKABUT_VERSES = 69
    const AR_RUM_VERSES = 60
    const LUQMAN_VERSES = 34
    const AS_SAJDA_VERSES = 30
    const AL_AHZAAB_VERSES = 73
    const SABA_VERSES = 54
    const FAATIR_VERSES = 45
    const YASEEN_VERSES = 83
    const AS_SAAFFAAT_VERSES = 182
    const SAAD_VERSES = 88
    const AZ_ZUMAR_VERSES = 75
    const GHAAFIR_VERSES = 85
    const FUSSILAT_VERSES = 54
    const ASH_SHURA_VERSES = 53
    const AZ_ZUKHRUF_VERSES = 89
    const AD_DUKHAAN_VERSES = 59
    const AL_JAATHIYA_VERSES = 37
    const AL_AHQAF_VERSES = 35
    const MUHAMMAD_VERSES = 38
    const AL_FATH_VERSES = 29
    const AL_HUJURAAT_VERSES = 18
    const QAAF_VERSES = 45
    const ADH_DHAARIYAT_VERSES = 60
    const AT_TUR_VERSES = 49
    const AN_NAJM_VERSES = 62
    const AL_QAMAR_VERSES = 55
    const AR_RAHMAN_VERSES = 78
    const AL_WAAQIAAH_VERSES = 96
    const AL_HADID_VERSES = 29
    const AL_MUJAADILA_VERSES = 22
    const AL_HASHR_VERSES = 24
    const AL_MUMTAHANA_VERSES = 13
    const AS_SAFF_VERSES = 14
    const AL_JUMUAA_VERSES = 11
    const AL_MUNAAFIQUN_VERSES = 11
    const AT_TAGHAABUN_VERSES = 18
    const AT_TALAAQ_VERSES = 12
    const AT_TAHRIM_VERSES = 12
    const AL_MULK_VERSES = 30
    const AL_QALAM_VERSES = 52
    const AL_HAAQQAH_VERSES = 52
    const AL_MAARIJ_VERSES = 44
    const NUH_VERSES = 28
    const AL_JIN_VERSES = 28
    const AL_MUZZAMMIL_VERSES = 20
    const AL_MUDDATHTHIR_VERSES = 56
    const AL_QIYAAMA_VERSES = 40
    const AL_INSAN_VERSES = 31
    const AL_MURSALAAT_VERSES = 50
    const AN_NABA_VERSES = 40
    const AN_NAAZIAAT_VERSES = 46
    const ABASA_VERSES = 42
    const AT_TAKWIR_VERSES = 29
    const AL_INFITAAR_VERSES = 19
    const AL_MUTAFFIFIN_VERSES = 36
    const AL_INSHIQAAQ_VERSES = 25
    const AL_BURUJ_VERSES = 22
    const AT_TAARIQ_VERSES = 17
    const AL_ALAA_VERSES = 19
    const AL_GHAASHIYA_VERSES = 26
    const AL_FAJR_VERSES = 30
    const AL_BALAD_VERSES = 20
    const ASH_SHAMS_VERSES = 15
    const AL_LAIL_VERSES = 21
    const AD_DHUHAA_VERSES = 11
    const ASH_SHARH_VERSES = 8
    const AT_TIN_VERSES = 8
    const AL_ALAQ_VERSES = 19
    const AL_QADR_VERSES = 5
    const AL_BAYYINAH_VERSES = 8
    const AZ_ZALZALA_VERSES = 8
    const AL_AADIYAAT_VERSES = 11
    const AL_QAARIAAH_VERSES = 11
    const AT_TAKAATHUR_VERSES = 8
    const AL_ASR_VERSES = 3
    const AL_HUMAZA_VERSES = 9
    const AL_FIL_VERSES = 5
    const QURAISH_VERSES = 4
    const AL_MAAUN_VERSES = 7
    const AL_KAWTHAR_VERSES = 3
    const AL_KAAFIRUN_VERSES = 6
    const AN_NASR_VERSES = 3
    const AL_MASAD_VERSES = 5
    const AL_IKHLAS_VERSES = 4
    const AL_FALAQ_VERSES = 5
    const AN_NAAS_VERSES = 6

    const surah = parseInt(rs)
    if (surah === AL_FATIHAH) {
        return AL_FATIHAH_VERSES;
    } else if (surah === AL_BAQARAH) {
        return AL_BAQARAH_VERSES;
    } else if (surah === ALI_IMRAN) {
        return ALI_IMRAN_VERSES;
    } else if (surah === AN_NISA) {
        return AN_NISA_VERSES;
    } else if (surah === AL_MAIDAH) {
        return AL_MAIDAH_VERSES;
    } else if (surah === AL_ANAAM) {
        return AL_ANAAM_VERSES;
    } else if (surah === AL_AARAF) {
        return AL_AARAF_VERSES;
    } else if (surah === AL_ANFAL) {
        return AL_ANFAL_VERSES;
    } else if (surah === AT_TAWBAH) {
        return AT_TAWBAH_VERSES;
    } else if (surah === YUNUS) {
        return YUNUS_VERSES;
    } else if (surah === HUD) {
        return HUD_VERSES;
    } else if (surah === YUSUF) {
        return YUSUF_VERSES;
    } else if (surah === AR_RAAD) {
        return AR_RAAD_VERSES;
    } else if (surah === IBRAHIM) {
        return IBRAHIM_VERSES;
    } else if (surah === AL_HIJR) {
        return AL_HIJR_VERSES;
    } else if (surah === AN_NAHL) {
        return AN_NAHL_VERSES;
    } else if (surah === AL_ISRAA) {
        return AL_ISRAA_VERSES;
    } else if (surah === AL_KAHFI) {
        return AL_KAHFI_VERSES;
    } else if (surah === MARYAM) {
        return MARYAM_VERSES;
    } else if (surah === TAA_HAA) {
        return TAA_HAA_VERSES;
    } else if (surah === AL_ANBIYAA) {
        return AL_ANBIYAA_VERSES;
    } else if (surah === AL_HAJJ) {
        return AL_HAJJ_VERSES;
    } else if (surah === AL_MUKMINUN) {
        return AL_MUKMINUN_VERSES;
    } else if (surah === AN_NOOR) {
        return AN_NOOR_VERSES;
    } else if (surah === AL_FURQAN) {
        return AL_FURQAN_VERSES;
    } else if (surah === ASH_SHUAARAA) {
        return ASH_SHUAARAA_VERSES;
    } else if (surah === AN_NAML) {
        return AN_NAML_VERSES;
    } else if (surah === AL_QASAS) {
        return AL_QASAS_VERSES;
    } else if (surah === AL_ANKABUT) {
        return AL_ANKABUT_VERSES;
    } else if (surah === AR_RUM) {
        return AR_RUM_VERSES;
    } else if (surah === LUQMAN) {
        return LUQMAN_VERSES;
    } else if (surah === AS_SAJDA) {
        return AS_SAJDA_VERSES;
    } else if (surah === AL_AHZAAB) {
        return AL_AHZAAB_VERSES;
    } else if (surah === SABA) {
        return SABA_VERSES;
    } else if (surah === FAATIR) {
        return FAATIR_VERSES;
    } else if (surah === YASEEN) {
        return YASEEN_VERSES;
    } else if (surah === AS_SAAFFAAT) {
        return AS_SAAFFAAT_VERSES;
    } else if (surah === SAAD) {
        return SAAD_VERSES;
    } else if (surah === AZ_ZUMAR) {
        return AZ_ZUMAR_VERSES;
    } else if (surah === GHAAFIR) {
        return GHAAFIR_VERSES;
    } else if (surah === FUSSILAT) {
        return FUSSILAT_VERSES;
    } else if (surah === ASH_SHURA) {
        return ASH_SHURA_VERSES;
    } else if (surah === AZ_ZUKHRUF) {
        return AZ_ZUKHRUF_VERSES;
    } else if (surah === AD_DUKHAAN) {
        return AD_DUKHAAN_VERSES;
    } else if (surah === AL_JAATHIYA) {
        return AL_JAATHIYA_VERSES;
    } else if (surah === AL_AHQAF) {
        return AL_AHQAF_VERSES;
    } else if (surah === MUHAMMAD) {
        return MUHAMMAD_VERSES;
    } else if (surah === AL_FATH) {
        return AL_FATH_VERSES;
    } else if (surah === AL_HUJURAAT) {
        return AL_HUJURAAT_VERSES;
    } else if (surah === QAAF) {
        return QAAF_VERSES;
    } else if (surah === ADH_DHAARIYAT) {
        return ADH_DHAARIYAT_VERSES;
    } else if (surah === AT_TUR) {
        return AT_TUR_VERSES;
    } else if (surah === AN_NAJM) {
        return AN_NAJM_VERSES;
    } else if (surah === AL_QAMAR) {
        return AL_QAMAR_VERSES;
    } else if (surah === AR_RAHMAN) {
        return AR_RAHMAN_VERSES;
    } else if (surah === AL_WAAQIAAH) {
        return AL_WAAQIAAH_VERSES;
    } else if (surah === AL_HADID) {
        return AL_HADID_VERSES;
    } else if (surah === AL_MUJAADILA) {
        return AL_MUJAADILA_VERSES;
    } else if (surah === AL_HASHR) {
        return AL_HASHR_VERSES;
    } else if (surah === AL_MUMTAHANA) {
        return AL_MUMTAHANA_VERSES;
    } else if (surah === AS_SAFF) {
        return AS_SAFF_VERSES;
    } else if (surah === AL_JUMUAA) {
        return AL_JUMUAA_VERSES;
    } else if (surah === AL_MUNAAFIQUN) {
        return AL_MUNAAFIQUN_VERSES;
    } else if (surah === AT_TAGHAABUN) {
        return AT_TAGHAABUN_VERSES;
    } else if (surah === AT_TALAAQ) {
        return AT_TALAAQ_VERSES;
    } else if (surah === AT_TAHRIM) {
        return AT_TAHRIM_VERSES;
    } else if (surah === AL_MULK) {
        return AL_MULK_VERSES;
    } else if (surah === AL_QALAM) {
        return AL_QALAM_VERSES;
    } else if (surah === AL_HAAQQAH) {
        return AL_HAAQQAH_VERSES;
    } else if (surah === AL_MAARIJ) {
        return AL_MAARIJ_VERSES;
    } else if (surah === NUH) {
        return NUH_VERSES;
    } else if (surah === AL_JIN) {
        return AL_JIN_VERSES;
    } else if (surah === AL_MUZZAMMIL) {
        return AL_MUZZAMMIL_VERSES;
    } else if (surah === AL_MUDDATHTHIR) {
        return AL_MUDDATHTHIR_VERSES;
    } else if (surah === AL_QIYAAMA) {
        return AL_QIYAAMA_VERSES;
    } else if (surah === AL_INSAN) {
        return AL_INSAN_VERSES;
    } else if (surah === AL_MURSALAAT) {
        return AL_MURSALAAT_VERSES;
    } else if (surah === AN_NABA) {
        return AN_NABA_VERSES;
    } else if (surah === AN_NAAZIAAT) {
        return AN_NAAZIAAT_VERSES;
    } else if (surah === ABASA) {
        return ABASA_VERSES;
    } else if (surah === AT_TAKWIR) {
        return AT_TAKWIR_VERSES;
    } else if (surah === AL_INFITAAR) {
        return AL_INFITAAR_VERSES;
    } else if (surah === AL_MUTAFFIFIN) {
        return AL_MUTAFFIFIN_VERSES;
    } else if (surah === AL_INSHIQAAQ) {
        return AL_INSHIQAAQ_VERSES;
    } else if (surah === AL_BURUJ) {
        return AL_BURUJ_VERSES;
    } else if (surah === AT_TAARIQ) {
        return AT_TAARIQ_VERSES;
    } else if (surah === AL_ALAA) {
        return AL_ALAA_VERSES;
    } else if (surah === AL_GHAASHIYA) {
        return AL_GHAASHIYA_VERSES;
    } else if (surah === AL_FAJR) {
        return AL_FAJR_VERSES;
    } else if (surah === AL_BALAD) {
        return AL_BALAD_VERSES;
    } else if (surah === ASH_SHAMS) {
        return ASH_SHAMS_VERSES;
    } else if (surah === AL_LAIL) {
        return AL_LAIL_VERSES;
    } else if (surah === AD_DHUHAA) {
        return AD_DHUHAA_VERSES;
    } else if (surah === ASH_SHARH) {
        return ASH_SHARH_VERSES;
    } else if (surah === AT_TIN) {
        return AT_TIN_VERSES;
    } else if (surah === AL_ALAQ) {
        return AL_ALAQ_VERSES;
    } else if (surah === AL_QADR) {
        return AL_QADR_VERSES;
    } else if (surah === AL_BAYYINAH) {
        return AL_BAYYINAH_VERSES;
    } else if (surah === AZ_ZALZALA) {
        return AZ_ZALZALA_VERSES;
    } else if (surah === AL_AADIYAAT) {
        return AL_AADIYAAT_VERSES;
    } else if (surah === AL_QAARIAAH) {
        return AL_QAARIAAH_VERSES;
    } else if (surah === AT_TAKAATHUR) {
        return AT_TAKAATHUR_VERSES;
    } else if (surah === AL_ASR) {
        return AL_ASR_VERSES;
    } else if (surah === AL_HUMAZA) {
        return AL_HUMAZA_VERSES;
    } else if (surah === AL_FIL) {
        return AL_FIL_VERSES;
    } else if (surah === QURAISH) {
        return QURAISH_VERSES;
    } else if (surah === AL_MAAUN) {
        return AL_MAAUN_VERSES;
    } else if (surah === AL_KAWTHAR) {
        return AL_KAWTHAR_VERSES;
    } else if (surah === AL_KAAFIRUN) {
        return AL_KAAFIRUN_VERSES;
    } else if (surah === AN_NASR) {
        return AN_NASR_VERSES;
    } else if (surah === AL_MASAD) {
        return AL_MASAD_VERSES;
    } else if (surah === AL_IKHLAS) {
        return AL_IKHLAS_VERSES;
    } else if (surah === AL_FALAQ) {
        return AL_FALAQ_VERSES;
    } else {
        return AN_NAAS_VERSES
    }
}

// given surah number (sn), return name of surah
// given 114, return whole array
function SurahName(sn) {
    const surahArray = [
        "Al-Fatihah",
        "Al-Baqarah",
        "Ali-Imran",
        "An-Nisa'",
        "Al-Maidah",
        "Al-An'am",
        "Al-A'raf",
        "Al-Anfal",
        "At-Taubah",
        "Yunus",
        "Hud",
        "Yusuf",
        "Ar-Ra'd",
        "Ibrahim",
        "Al-Hijr",
        "An-Nahl",
        "Al-Isra",
        "Al-Kahfi",
        "Maryam",
        "Taha",
        "Al-Anbiyaa",
        "Al-Hajj",
        "Al-Mukminun",
        "An-Noor",
        "Al-Furqan",
        "Ash-Shu'araa",
        "An-Naml",
        "Al-Qasas",
        "Al-Ankaboot",
        "Ar-Room",
        "Luqman",
        "As-Sajda",
        "Al-Ahzab",
        "Saba",
        "Faatir",
        "Yaseen",
        "As-Saafaat",
        "Sod",
        "Az-Zumar",
        "Ghafir",
        "Fussilat",
        "Ash-Shura",
        "Az-Zukhruf",
        "Ad-Dukhan",
        "Al-Jathiya",
        "Al-Ahqaf",
        "Muhammad",
        "Al-Fath",
        "Al-Hujurat",
        "Qaf",
        "Adh-Dhariyat",
        "At-Tur",
        "An-Najm",
        "Al-Qamar",
        "Ar-Rahman",
        "Al-Waaqia",
        "Al-Hadid",
        "Al-Mujadila",
        "Al-Hashr",
        "Al-Mumtahana",
        "As-Saf",
        "Al-Jumu'a",
        "Al-Munafiqun",
        "At-Taghabun",
        "At-Talaq",
        "At-Tahrim",
        "Al-Mulk",
        "Al-Qalam",
        "Al-Haaqa",
        "Al-Ma'arij",
        "Nuh",
        "Al-Jin",
        "Al-Muzammil",
        "Al-Mudathir",
        "Al-Qiyama",
        "Al-Insan",
        "Al-Mursalat",
        "An-Naba",
        "An-Nazi'at",
        "Abasa",
        "At-Takwir",
        "Al-Infitar",
        "Al-Mutaffifin",
        "Al-Inshiqaq",
        "Al-Buruj",
        "At-Tariq",
        "Al-A'la",
        "Al-Ghashiya",
        "Al-Fajr",
        "Al-Balad",
        "Ash-Shams",
        "Al-Lail",
        "Ad-Dhuha",
        "Ash-Sharh",
        "At-Tin",
        "Al-Alaq",
        "Al-Qadr",
        "Al-Bayyina",
        "Az-Zalzala",
        "Al-'Adiyat",
        "Al-Qari'a",
        "At-Takathur",
        "Al-Asr",
        "Al-Humaza",
        "Al-Fil",
        "Quraish",
        "Al-Ma'un",
        "Al-Kauthar",
        "Al-Kafirun",
        "An-Nasr",
        "Al-Masad",
        "Al-Ikhlas",
        "Al-Falaq",
        "An-Nas"
    ]

    if (sn == GIMME_THE_WHOLE_ARRAY) {
        return surahArray;
    } else {
        return surahArray[sn];
    }
}