import useSiteStore from "../store/site"
import { isEmpty } from "../utils";

function SuccessMessagePopup() {
  const { successes, removeSuccess, destroyAllSuccesses } = useSiteStore(state => state)


  return (
    <div>
      {!isEmpty(successes) && <div className="flex justify-end underline text-xs px-2 my-1 cursor-pointer" onClick={() => destroyAllSuccesses()}>Hepsini kapat</div>}
      <div className="max-h-48 overflow-auto">
        {successes && successes.map((item) => (
        <div className="bg-green-500 text-white p-2 m-2 border font-semibold text-xs flex justify-between" key={item.id}>
          <span>{item.message}</span>
          <span onClick={() => removeSuccess(item)} className="cursor-pointer">X</span>
        </div>))}
      </div>
    </div>
  );
}

export default SuccessMessagePopup;
