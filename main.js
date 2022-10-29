window.onload = function() {
    let c = document.getElementById("cent");
    let m = document.getElementById("metros");
    c.oninput = function() {
        m.value = (c.value / 100);
    };
    m.oninput = function() {
        c.value = (m.value * 100);
    }
};

