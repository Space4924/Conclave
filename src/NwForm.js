import {useRef} from 'react';
export default function NwForm() {

    const handleSubmit = async(e) => {
      e.preventDefault()
      let selected = [...recipeRef.current.options]
                  .filter(option => option.selected)
                  .map(option => option.value)
      console.log(new Date(), ' recipeType: ', selected)
      console.log(new Date(), 'with ref: ', [...recipeRef.current.options]);
      [...recipeRef.current.options].map(option => console.log(option,'; ',option.selected))
      console.log([...recipeRef.current.options].filter(option => option.selected))
      console.log([...recipeRef.current.options].filter(option=>option.selected).map(option => option.value))
    }
    const recipeRef = useRef()
  
    return (
      <div className="App">
        <h1>Hello CodeSandbox example for select Multiple by Julio Spinelli</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name of the Recipe</label>
                <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required ></input>
            </div>
            <div className="mb-6">
              <label htmlFor="recipeType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Recipe Type</label>
              {/* <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e)=>{setRecipeType(e.target.value)}} value={recipeType}></input> */}
              <select name="recipeType" id="recipeType" ref={recipeRef} multiple={true} size={3}> {/* Step 2 - Add the reference to `select` element */}
                <option value="unselected">unselected</option>
                <option value="Grill">Grill</option>
                <option value="Steak">Steak</option>
                <option value="Pizza">Pizza</option>
              </select>
          </div>
          <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
              <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" ></input>
              </div>
              <div className="ml-3 text-sm">
              <label htmlFor="remember" className="font-medium text-gray-900 dark:text-gray-300">Recipe uploaded?</label>
              </div>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
      </form>
    </div>
  )}