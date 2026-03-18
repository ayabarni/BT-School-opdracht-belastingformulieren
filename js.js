function setupReveal(radioName, targetId) {
    const radios = document.querySelectorAll(`input[name="${radioName}"]`);
    const block = document.getElementById(targetId);

    if (!block || radios.length === 0) return;
    // اذا مافي بلوك ومافي راديو وقف تنفيذ، ليه؟ حتى ما يطلع ايرور 

    // فتحنا فانكشن لانو كل مرة المستخدم يغير الاختبار بدنا نعيد التحقق
    function update() {
        const checked = document.querySelector(`input[name="${radioName}"]:checked`);
        // هات الراديو ال حاليا تم اختيارو

        const show = checked && checked.value.toLowerCase() === "ja";
        // يعني اذا في شي مختار وقيمته ja ف شو ترو غير هيك فالس

        block.classList.toggle("hidden", !show);
        //   إذا condition = true → ضيف class إذا false → شيل class
        const fields = block.querySelectorAll("input, select, textarea, button");
        fields.forEach(field => {
            field.disabled = !show;
        }

        )
    }
    radios.forEach(radio => {
        radio.addEventListener("change", update);

    });

    update();
}
setupReveal("getrouwd", "huwelijkBlock");
setupReveal("voorwaarden", "voorwaardenVervolg");
setupReveal("voorwaarden", "voorwaardenBlock");
setupReveal("kinderen", "kinderenBlock");
setupReveal("kind_eerder_overleden", "overledenKindBlock");
setupReveal("testament", "testamentBlock");


// Vul 1 van de 3 in (2a)
// const inputs = document.querySelectorAll(", #beconnummer_adviseur, #protocolnummer_notaris");
const bsn = document.getElementById("bsn_rsin_gemachtigde");
const beco = document.getElementById("beconnummer_adviseur");
const protocol = document.getElementById("protocolnummer_notaris");

if (bsn && beco && protocol) {
    function updateInputs() {
        if (bsn.value !== "") {
            beco.disabled = true;
            protocol.disabled = true;
        }
        else if (beco.value !== "") {
            bsn.disabled = true;
            protocol.disabled = true;
        }
        else if (protocol.value !== "") {
            bsn.disabled = true;
            beco.disabled = true;
        }
        else {
            bsn.disabled = false;
            beco.disabled = false;
            protocol.disabled = false;
        }
    }
    bsn.addEventListener("input", updateInputs);
    beco.addEventListener("input", updateInputs);
    protocol.addEventListener("input", updateInputs);
    updateInputs();
}

// errors messages
const form = document.querySelector("form");
const voorletter = document.querySelector("#voorletter");
const achternaam = document.querySelector("#achternaam");
const overlijdensdatum = document.querySelector("#overlijdensdatum");
const bsnNummer = document.querySelector("#bsnNummer");


const voorletterError = document.querySelector("#voorletter-error");
const achternaamError = document.querySelector("#achternaam-error");
const datumError = document.querySelector("#datum-error");
const bsnError = document.querySelector("#bsn-error");
const gemachtigdeError = document.getElementById("gemachtigde-error");
// voorletters
voorletter.addEventListener("blur", function () {
    if (voorletter.value.trim() === "") {
        voorletterError.textContent = "Vul uw voorletter(s) in.";
        voorletter.classList.add("input-error");
        voorletter.classList.remove("input-valid");
    } else {
        voorletterError.textContent = "";
        voorletter.classList.remove("input-error");
        voorletter.classList.add("input-valid");

    }
});
// achternaam
achternaam.addEventListener("blur", function () {
    if (achternaam.value.trim() === "") {
        achternaamError.textContent = "Vul uw achternaam in.";
        achternaam.classList.add("input-error");
        achternaam.classList.remove("input-valid");

    } else {
        achternaamError.textContent = "";
        achternaam.classList.remove("input-error");
        achternaam.classList.add("input-valid");
    }
});
// overlijdensdatum
overlijdensdatum.addEventListener("blur", function () {
    if (overlijdensdatum.value.trim() === "") {
        datumError.textContent = "Vul een overlijdensdatum in.";
        overlijdensdatum.classList.add("input-error");
        overlijdensdatum.classList.remove("input-valid");

    } else {
        datumError.textContent = "";
        overlijdensdatum.classList.remove("input-error");
        overlijdensdatum.classList.add("input-valid");
    }
});
// bsn
bsnNummer.addEventListener("blur", function () {
    if (bsnNummer.value.trim() === "") {
        bsnError.textContent = "Vul een BSN in."
        bsnNummer.classList.add("input-error");
        bsnNummer.classList.remove("input-valid");

    } else if (!/^[0-9]{9}$/.test(bsnNummer.value.trim())) {
        bsnError.textContent = "* Vul een geldig  BSN in van 9 cijfers.";
        bsnNummer.classList.add("input-error");
        bsnNummer.classList.remove("input-valid");

    } else {
        bsnError.textContent = "";
        bsnNummer.classList.remove("input-error");
        bsnNummer.classList.add("input-valid");
    }
});


// form.addEventListener("submit", function (event) {
//     if (
//         voorletter.value.trim() === "" ||
//         achternaam.value.trim() === "" ||
//         overlijdensdatum.value === ""||
//         bsnNummer.value.trim() === ""

//     ) {
//         event.preventDefault();
//     }
// });






form.addEventListener("submit", function (event) {
    let valid = true;


    // voorletters
    if (voorletter.value.trim() === "") {
        voorletterError.textContent = "Vul uw voorletter(s) in.";
        voorletter.classList.add("input-error");
        voorletter.classList.remove("input-valid");

        valid = false;
    }
    // achternaam
    if (achternaam.value.trim() === "") {
        achternaamError.textContent = "Vul uw achternaam in.";
        achternaam.classList.add("input-error");
        achternaam.classList.remove("input-valid");
        valid = false;

    }
    // overlijdensdatum
    if (overlijdensdatum.value.trim() === "") {
        datumError.textContent = "Vul een overlijdensdatum in.";
        overlijdensdatum.classList.add("input-error");
        overlijdensdatum.classList.remove("input-valid");
        valid = false;
    }

    // bsn
    if (bsnNummer.value.trim() === "") {
        bsnError.textContent = "Vul een BSN in."
        bsnNummer.classList.add("input-error");
        valid = false;
    } else if (!/^[0-9]{9}$/.test(bsnNummer.value.trim())) {
        bsnError.textContent = "* Vul een geldig  BSN in van 9 cijfers.";
        bsnNummer.classList.add("input-error");
        valid = false;
    }
    // 1 van de 3
    if (bsn.value.trim() === "" && beco.value.trim() === "" && protocol.value.trim() === "") {
        gemachtigdeError.textContent = "Vul minimaal 1 van deze velden in.";
        bsn.classList.add("input-error");
        beco.classList.add("input-error");
        protocol.classList.add("input-error");
        valid = false;
    }
    if (!valid) {
        event.preventDefault();
    }
});







