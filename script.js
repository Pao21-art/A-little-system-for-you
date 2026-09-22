const lines = [
    {
        element: document.getElementById("line1"),
        text: ">> INICIANDO SISTEMA..."
    },

    {
        element: document.getElementById("line2"),
        text: ">> USUARIO DETECTADO: ERITCK"
    },

    {
        element: document.getElementById("line3"),
        text: ">> ANALIZANDO ESTADO ACTUAL..."
    },

    {
        element: document.getElementById("line4"),
        text: ">> ⚠️ MAL DÍA DETECTADO"
    }
];


const button =
    document.getElementById("startButton");

const terminal =
    document.getElementById("terminal");

const diagnostic =
    document.getElementById("diagnostic");

const diagnosticMessage =
    document.getElementById("diagnosticMessage");

const readyScreen =
    document.getElementById("readyScreen");

const enterButton =
    document.getElementById("enterButton");

const menuScreen =
    document.getElementById("menuScreen");

const menuButtons =
    document.querySelectorAll(".menu-button");

const backButtons =
    document.querySelectorAll(".back-button");


/* =========================
   MEMORY DATABASE
========================= */

const memoryItems =
    document.querySelectorAll(".memory-item");

const memoryView =
    document.getElementById("memoryView");

const memoryNumber =
    document.getElementById("memoryNumber");

const memoryTitle =
    document.getElementById("memoryTitle");

const memoryText =
    document.getElementById("memoryText");

const memoryImage =
    document.getElementById("memoryImage");

const backToMemories =
    document.getElementById("backToMemories");


const memories = {

    ride: {
        number: "001",

        title: "FIRST VISIT",

        image: "assets/memories/ride.jpeg",

        text: `Ese día me llevaste a conocer la finca.

Compramos una papita y un Hit, y terminamos sentados hablando.

Me gustó ese día,

porque me gustó compartirlo contigo.`
    },


    gym: {
        number: "002",

        title: "GYM NIGHTS",

        image: "assets/memories/gym.jpeg",

        text: `Ese día estábamos entrenando como de costumbre.

Llegamos a la parte de abdomen y fue la primera vez que intenté hacer la ruedita.

Y bueno...

digamos que la técnica no era precisamente perfecta.

Pero ahí estaba yo, intentando hacerla bien a como diera lugar.

No pasó nada extraordinario, fue simplemente otra noche de gym.`
    },


    photo: {
        number: "003",

        title: "MOVIE NIGHT",

        image: "assets/memories/movie.jpeg",

        text: `Ese día fuimos al cine porque yo quería ver el estreno de El Diablo Viste a la Moda 2.

El pequeño detalle era que tú ni siquiera habías visto la primera película.

Y aun así, fuimos.`
    },


    little: {
        number: "004",

        title: "THE LETTER",

        image: "assets/memories/letter.jpeg",

        text: `Ese día terminé mis prácticas,

y como no estaba teniendo precisamente el mejor día, fuimos al mirador para despejarme un poco.

Estuvimos ahí, hablando y pasando el rato.

Y luego me diste una carta,

no sé si tú alcanzaste a dimensionar lo bonito que fue ese detalle para mí, pero todavía lo recuerdo.`
    }

};


/* =========================
   FINAL SCREENS
========================= */

const finalButton =
    document.getElementById("finalButton");

const finalSection =
    document.getElementById("finalSection");

const completeButton =
    document.getElementById("completeButton");

const completeScreen =
    document.getElementById("completeScreen");


/* =========================
   OCULTAR BOTÓN AL INICIO
========================= */

button.style.display = "none";


/* =========================
   EFECTO DE ESCRITURA
========================= */

function typeText(element, text, speed = 45) {

    return new Promise((resolve) => {

        let index = 0;

        const interval = setInterval(() => {

            element.textContent += text[index];

            index++;

            if (index >= text.length) {

                clearInterval(interval);

                resolve();

            }

        }, speed);

    });

}


/* =========================
   INICIO DEL SISTEMA
========================= */

async function startSystem() {

    for (const line of lines) {

        await typeText(
            line.element,
            line.text
        );

        await new Promise(resolve =>
            setTimeout(resolve, 500)
        );

    }

    button.style.display = "inline-block";
}


startSystem();


/* =========================
   INICIAR PROTOCOLO
========================= */

button.addEventListener("click", () => {

    terminal.style.opacity = "0";

    terminal.style.transform =
        "translateY(-15px)";


    setTimeout(() => {

        terminal.style.display = "none";

        diagnostic.classList.add("active");


        setTimeout(() => {

            document.querySelector(
                ".frustration"
            ).style.width = "80%";

        }, 500);


        setTimeout(() => {

            document.querySelector(
                ".tired"
            ).style.width = "90%";

        }, 3500);


        setTimeout(() => {

            document.querySelector(
                ".chaos"
            ).style.width = "100%";

        }, 6500);


        setTimeout(() => {

            diagnosticMessage.textContent =
                "Diagnóstico completado. Hoy no salió como querías, pero un día malo sigue siendo solamente un día.";

            diagnosticMessage.classList.add("show");

        }, 8500);


        setTimeout(() => {

            diagnostic.classList.remove("active");

            diagnostic.style.display = "none";

            readyScreen.classList.add("active");

        }, 14000);

    }, 800);

});


/* =========================
   ENTER → MENÚ PRINCIPAL
========================= */

enterButton.addEventListener("click", () => {

    readyScreen.style.opacity = "0";

    readyScreen.style.transform =
        "translateY(-15px)";


    setTimeout(() => {

        readyScreen.classList.remove("active");

        readyScreen.style.opacity = "";

        readyScreen.style.transform = "";

        menuScreen.classList.add("active");

    }, 800);

});


/* =========================
   MENÚ → SECCIONES
========================= */

menuButtons.forEach(button => {

    button.addEventListener("click", () => {

        const section =
            button.dataset.section;


        menuScreen.style.opacity = "0";

        menuScreen.style.transform =
            "translateY(-15px)";


        setTimeout(() => {

            menuScreen.classList.remove("active");

            menuScreen.style.opacity = "";

            menuScreen.style.transform = "";


            const targetSection =
                document.getElementById(
                    section + "Section"
                );


            if (targetSection) {

                targetSection.style.display = "flex";

                targetSection.classList.add("active");

            }

        }, 800);

    });

});


/* =========================
   MEMORIES → MEMORY INDIVIDUAL
========================= */

memoryItems.forEach(item => {

    item.addEventListener("click", () => {

        const memoryId =
            item.dataset.memory;


        const memory =
            memories[memoryId];


        if (!memory) {
            return;
        }


        memoryNumber.textContent =
            memory.number;


        memoryTitle.textContent =
            memory.title;


        memoryImage.src =
            memory.image;


        memoryImage.alt =
            memory.title;


        memoryText.textContent =
            memory.text;


        const memoriesSection =
            document.getElementById(
                "memoriesSection"
            );


        memoriesSection.style.opacity = "0";

        memoriesSection.style.transform =
            "translateY(-15px)";


        setTimeout(() => {

            memoriesSection.classList.remove("active");

            memoriesSection.style.display = "none";

            memoriesSection.style.opacity = "";

            memoriesSection.style.transform = "";


            memoryView.style.display = "flex";

            memoryView.classList.add("active");

        }, 800);

    });

});


/* =========================
   MEMORY INDIVIDUAL → MEMORIES
========================= */

backToMemories.addEventListener("click", () => {

    memoryView.style.opacity = "0";

    memoryView.style.transform =
        "translateY(-15px)";


    setTimeout(() => {

        memoryView.classList.remove("active");

        memoryView.style.display = "none";

        memoryView.style.opacity = "";

        memoryView.style.transform = "";


        const memoriesSection =
            document.getElementById(
                "memoriesSection"
            );


        memoriesSection.style.display = "flex";

        memoriesSection.classList.add("active");

    }, 800);

});


/* =========================
   SECCIONES → MENÚ
========================= */

backButtons.forEach(button => {

    if (
        button.id === "backToMemories" ||
        button.id === "finalButton"
    ) {
        return;
    }


    button.addEventListener("click", () => {

        const currentSection =
            button.closest(".content-section");


        currentSection.style.opacity = "0";

        currentSection.style.transform =
            "translateY(-15px)";


        setTimeout(() => {

            currentSection.classList.remove("active");

            currentSection.style.display = "none";

            currentSection.style.opacity = "";

            currentSection.style.transform = "";


            menuScreen.style.display = "flex";

            menuScreen.classList.add("active");

        }, 800);

    });

});


/* =========================
   A MESSAGE → FINAL FILE
========================= */

if (finalButton) {

    finalButton.addEventListener("click", () => {

        const messageSection =
            document.getElementById("messageSection");


        messageSection.style.opacity = "0";

        messageSection.style.transform =
            "translateY(-15px)";


        setTimeout(() => {

            messageSection.classList.remove("active");

            messageSection.style.display = "none";

            messageSection.style.opacity = "";

            messageSection.style.transform = "";


            finalSection.style.display = "flex";

            finalSection.classList.add("active");

        }, 800);

    });

}


/* =========================
   FINAL FILE → SYSTEM COMPLETE
========================= */

if (completeButton) {

    completeButton.addEventListener("click", () => {

        finalSection.style.opacity = "0";

        finalSection.style.transform =
            "translateY(-15px)";


        setTimeout(() => {

            finalSection.classList.remove("active");

            finalSection.style.display = "none";

            finalSection.style.opacity = "";

            finalSection.style.transform = "";


            completeScreen.style.display = "flex";

            completeScreen.classList.add("active");

        }, 800);

    });

}