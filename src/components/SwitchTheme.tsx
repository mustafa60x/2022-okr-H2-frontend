import classNames from "classnames";
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
      <button className={classNames({
        "mt-10 mb-5 p-3 font-semibold text-white w-full block": true,
        "bg-blue-400": theme === 'light',
        "bg-black": theme === 'dark',
      })} onClick={switchTheme}>
        Tema Değiştir ({theme})
      </button>
    </div>
  );
}

export default SwitchTheme;
