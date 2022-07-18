

// const sumBtn = document.querySelector("#sum-btn");
// const titleBtn = document.querySelector("#title-btn");
// const title = document.querySelector("h1").innerText;

// sumBtn.addEventListener("click", (event) => {
//     let sum = 0;

//     for (let i = 0; i < 10000000000; i++) {
//         sum += i;
//     }

//     alert("Done!");
// });

// titleBtn.addEventListener("click", (event) => {
//     if (title === "Initial title")
//         document.querySelector("h1").innerHTML = "Title changed";
// });


/** With worker */
if (typeof(Worker) !== "undefined") {
    const worker = new Worker("worker.js");
    const sumBtn = document.querySelector("#sum-btn");
    const titleBtn = document.querySelector("#title-btn");
    const title = document.querySelector("h1").innerText;

    sumBtn.addEventListener("click", (event) => {
                
        worker.postMessage("Launch sum");
    });

    worker.onmessage = (message) => {
        console.log(message.data);
    }

    titleBtn.addEventListener("click", (event) => {
        if (title === "Initial title")
            document.querySelector("h1").innerHTML = "Title changed";
    });
} else {
    console.log("Nop! Web Worker not supported");
}

