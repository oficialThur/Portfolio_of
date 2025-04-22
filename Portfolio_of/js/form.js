const FormContato = document.getElementById("form-contato");
const Loader = document.querySelector("IdLoding");

FormContato.addEventListener("submit", (e) => 
{

    e.preventDefault();
    Loader.classList.replace("hidden", "flex");
    const url = e.target.action;

    const formData = new FormData(FormContato);

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
    })
    .then(() => {
        Loader.classList.replace("flex", "hidden");
    })
    .catch((err) => console.log("err", err) )
})

