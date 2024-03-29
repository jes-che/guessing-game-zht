let maximum = parseInt(prompt("請輸入猜數字範圍的最大值："));
while (!maximum) {
    maximum = parseInt(prompt("請輸入有效的數字："));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("從 0 至剛輸入的數值之間，猜一個數字！或是輸入「q」結束遊戲：");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === "q" || guess === null) break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("數字太大了！再猜猜看：");
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("數字太小了！再猜猜看：");
        attempts++;
    } else {
        guess = prompt("無效的答案！請輸入一個數字或是「q」結束遊戲：");
    }
}

if (guess === "q" || guess === null) {
    document.getElementById("message").innerHTML = "掰掰囉！";
    document.getElementById("restart").addEventListener("click", function() {
        window.location.reload();
        return false;
    });
} else {
    document.getElementById("message").innerHTML = "哎呦，不錯哦！";
    document.getElementById("attempt").innerHTML = `您猜了 ${attempts} 次`;
    document.getElementById("restart").addEventListener("click", function() {
        window.location.reload();
        return false;
    });
}