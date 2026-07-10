import { runtimeDiplomacy } from './runtimeDiplomacy.js';


const runtimeLog = document.getElementById("runtimeLog");


export function addRuntimeLog(message) {

    if (!runtimeLog) return;


    const timestamp =
        new Date().toLocaleTimeString();


    runtimeLog.textContent +=
        `\n[${timestamp}] ${message}`;

}





// 🧭 Phase Logging Utility

export function logPhase(phaseKey) {


    if (!runtimeDiplomacy || !runtimeDiplomacy[phaseKey]) {


        addRuntimeLog(
            `ERROR: Unknown phase ${phaseKey}`
        );


        return;

    }



    runtimeDiplomacy[phaseKey].log();



    addRuntimeLog(
        `Phase executed: ${phaseKey}`
    );


}





// 🌞 Theme Toggle Utility

export function initThemeToggle() {


    const toggleBtn =
        document.getElementById("themeToggle");


    const root =
        document.body;



    if (!toggleBtn || !root) {


        addRuntimeLog(
            "Theme controller unavailable"
        );


        return;

    }




    toggleBtn.addEventListener(
        "click",
        () => {


            const currentTheme =
                root.getAttribute("data-theme");



            const newTheme =
                currentTheme === "day"
                    ? "night"
                    : "day";



            root.setAttribute(
                "data-theme",
                newTheme
            );



            toggleBtn.textContent =
                newTheme === "day"
                    ? "🌞 Toggle Theme"
                    : "🌜 Toggle Theme";



            const themeDisplay =
                document.getElementById(
                    "currentTheme"
                );


            if(themeDisplay){

                themeDisplay.textContent =
                    `Theme: ${newTheme}`;

            }



            addRuntimeLog(
                `Theme changed: ${newTheme}`
            );


        }
    );

}
