window.onload = function () {
    var x = document.querySelector("#date")
    var y = new Date()
    var d = y.getDate()
    var m = y.getMonth()
    var y = y.getFullYear()
    x.innerHTML = `Ngày ${d} Tháng ${m+1} Năm ${y}`
    document.querySelector(".a").style.display = "none"
    document.querySelector(".a").innerHTML = document.querySelector(".txta").innerHTML
}