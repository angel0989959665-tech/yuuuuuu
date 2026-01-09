document.addEventListener("DOMContentLoaded", () => {

    // ===== 搜尋功能 =====
    const searchIcon = document.getElementById("searchIcon");
    const searchInput = document.getElementById("searchInput");

    if (searchIcon && searchInput) {

        // 點擊放大鏡：顯示 / 隱藏搜尋欄
        searchIcon.addEventListener("click", () => {
            const currentDisplay = window.getComputedStyle(searchInput).display;
            if (currentDisplay === "none") {
                searchInput.style.display = "block";
                searchInput.focus();
            } else {
                searchInput.style.display = "none";
            }
        });

        // Enter 鍵搜尋
        searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const keyword = searchInput.value.trim();
                if (keyword !== "") {
                    window.location.href =
                        `goods.html?search=${encodeURIComponent(keyword)}`;
                }
            }
        });
    }

});
