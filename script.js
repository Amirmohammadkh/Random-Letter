function random_item(items) {
    return items[Math.floor(Math.random()*items.length)];
}

document.querySelector("#random-letter").onclick = () => {
    const letters = ["الف", "ب", "پ", "ت", "ث", "ج", "چ", "ح", "خ", "د", "ذ", "ر", "ز", "ژ", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ک", "گ", "ل", "م", "ن", "و", "ه", "ی"];
    document.querySelector('#letter').innerHTML = random_item(letters);
}