export default function toggleTheme() {

    const htmlClasses = document.documentElement.classList;
    const isDarkTheme = htmlClasses.contains("dark");

    
    if (isDarkTheme) {
        document.documentElement.classList.remove("dark");

    } else {
        document.documentElement.classList.add("dark");

    }
}
