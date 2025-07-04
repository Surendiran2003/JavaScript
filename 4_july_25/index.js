let count = 0;
let counts = document.getElementById("count");
function increment() {
    count += 1;
    counts.innerText = count;
    console.log(counts.innerText);
}

let pre= document.getElementById("preCount")
function save() {
    let prev = pre.textContent  + count+ " - "
    pre.textContent = prev
    console.log(pre.textContent)
}
