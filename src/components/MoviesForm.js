import React from 'react';

function MoviesForm() {
  return <div>
      <main className="py-60 lg:py-0 md:py-0">
        <section className="absolute w-full h-full mt-10">
         
          <div className="container mx-auto px-1 lg:px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-1/2 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-4">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        REGISTER NEW MOVIE OR SERIES
                      </h6>
                    </div>  
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form>
                    <div className="lg:flex md:flex gap-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2" >
                          Title
                        </label>
                        <input
                          type="text" className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Title" />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2">
                          isSeries?
                        </label>
                        <select type="text" className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Movie Name" >
                        <option value="false" selected="selected">false</option>
                        <option value="true">true</option>
                        </select>
                      </div>
                      </div>
                      <div className="lg:flex md:flex gap-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" >
                          Year
                        </label>
                        <input type="number" className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Year" />
                      </div>

                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                          Genre
                        </label>
                        <input type="text" className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Genre" />
                      </div>
                      </div>
                      <div className="lg:flex md:flex gap-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2" >
                          Trailer
                        </label>
                        <input type="text" className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Trailer" />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2">
                          Video
                        </label>
                        <input type="text" className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Video" />
                      </div>
                      </div>
                      <div className="lg:flex md:flex gap-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" >
                          Image
                        </label>
                        <input type="text" className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Image" />
                      </div>

                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                          Image Title
                        </label>
                        <input type="text" className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Image Title" />
                      </div>
                      </div>
                      <div className="lg:flex md:flex gap-4">
                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" >
                          Limit
                        </label>
                        <input type="text" className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Limit" />
                      </div>

                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                          Description
                        </label>
                        <textarea type="text" className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none  w-full" rows="4" cols="50"  >
                        </textarea>
                      </div>
                      </div>
                   

                      <div className="text-center mt-6">
                        <button type="button" className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        
        </section>
      </main>
  </div>;
}

export default MoviesForm;
