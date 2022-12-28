import useSiteStore from "../store/site"
import { isEmpty } from "../utils/İndex";

function ErrorMessagePopup() {
  const { errors, removeError, destroyAllErrors } = useSiteStore(state => state)


  return (
    <div>
      {!isEmpty(errors) && <div className="flex justify-end underline text-xs px-2 my-1 cursor-pointer" onClick={() => destroyAllErrors()}>Hepsini kapat</div>}
      <div className="max-h-48 overflow-auto">
        {errors && errors.map((item) => (
        <div className="bg-red-500 text-white p-2 m-2 border font-semibold text-xs flex justify-between" key={item.id}>
          <span>{item.message}</span>
          <span onClick={() => removeError(item)} className="cursor-pointer">X</span>
        </div>))}
      </div>
    </div>
  );
}

export default ErrorMessagePopup;
