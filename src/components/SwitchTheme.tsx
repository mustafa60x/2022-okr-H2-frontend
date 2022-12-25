import { useSite } from "../context";

function SwitchTheme() {
  const { theme, setTheme } = useSite();

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    localStorage.setItem("theme", newTheme)

    setTheme(newTheme)
  }

  return (
    <div>
      Mevcut tema = {theme} <br />
      <button className="bg-gray-300 p-3 font-semibold text-green-900" onClick={() => changeTheme()}>
        Tema Değiştir
      </button>
    </div>
  );
}

export default SwitchTheme;
