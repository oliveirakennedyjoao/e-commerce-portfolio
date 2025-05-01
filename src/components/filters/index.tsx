export function Filters() {
  return (
    <div className="h-full bg-zinc-700 rounded-2xl p-4">
      <form className="flex flex-col gap-2">
        <fieldset className="py-2">
          <legend>Categories:</legend>

          <div>
            <input className="p2" type="checkbox" id="scales" name="scales" />
            <label htmlFor="scales">Scales</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label htmlFor="horns">Horns</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label htmlFor="horns">Horns</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label htmlFor="horns">Horns</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label htmlFor="horns">Horns</label>
          </div>
        </fieldset>
        <fieldset className="py-2">
          <legend>Choose your features:</legend>

          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label htmlFor="scales">Scales</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label htmlFor="horns">Horns</label>
          </div>
        </fieldset>
        <fieldset className="py-2">
          <legend>Choose your features:</legend>

          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label htmlFor="scales">Scales</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label htmlFor="horns">Horns</label>
          </div>
        </fieldset>
        <fieldset className="py-2">
          <legend>Price:</legend>

          <div className="flex flex-row justify-between flex-wrap">
            <input
              type="number"
              id="lower-price"
              name="scales"
              className="bg-gray-300 rounded-xl h-8 w-28 text-black text-sm px-2"
            />
            <input
              type="number"
              id="higher-price"
              name="horns"
              className="bg-gray-300 rounded-xl h-8 w-28 text-black text-sm px-2"
            />
          </div>
        </fieldset>
        <button
          type="submit"
          className="bg-amber-500 text-black hover:bg-amber-700 hover:cursor-pointer font-bold py-2 px-4 rounded-3xl text-sm"
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
}
