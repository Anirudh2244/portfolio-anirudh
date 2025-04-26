export default function toggleTheme() {
    const currentTheme = localStorage.theme;

    if (currentTheme === "dark") {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
    }
}
