import { useSite } from "../context";

function SwitchTheme() {
  const { theme, dispatch } = useSite();

  const switchTheme = () => {
    dispatch({
      type: 'TOGGLE_THEME',
    })
  }

  return (
    <div>
      Mevcut tema = {theme} <br />
      <button className="bg-gray-300 p-3 font-semibold text-green-900" onClick={switchTheme}>
        Tema Değiştir
      </button>
    </div>
  );
}

export default SwitchTheme;
