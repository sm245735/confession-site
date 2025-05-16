// 登入相關程式
function doLogin() {
	const pass = document.getElementById("password").value;
	const validPass = "1131229"; // 改成你的密碼
	if (pass === validPass) {
		// 隱藏登入、顯示主畫面
		document.getElementById("login-screen").style.display = "none";
		document.getElementById("main-screen").style.display = "block";
		// 2. 等一下再重算地圖大小
		setTimeout(() => {
			map.invalidateSize(true);
		}, 200);
	} else {
		document.getElementById("err").style.display = "block";
	}
}
// 支援按 Enter 鍵登入
document.getElementById("password").addEventListener("keydown", e => {
	if (e.key === "Enter") doLogin();
});
