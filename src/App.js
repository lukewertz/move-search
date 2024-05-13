import React, { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Menu, ClearRefinements, useClearRefinements } from 'react-instantsearch';

const searchClient = algoliasearch('2XPVD2ON18', 'ea8f2c801e574b782020cd710d2e0eca');

function Hit({ hit }) {

  var date = new Date(hit.release_date).getFullYear();
  var genre = (hit.genres).slice(0,3).map(t => <span key={t}>{t}</span>).reduce((prev, curr) => [prev, ', ', curr])

  return (
    <article className="max-w-3xl flex flex-row border border-gray-300 rounded-md mb-4">
      <div className="basis-1/3">
        <img className="" src={hit.poster_path} alt={hit.title} />
      </div>

      <div className="basis-2/3 p-4">
        <div className="font-bold text-xl mb-2">{hit.title}</div>
        <p className="text-gray-700 text-base">{hit.overview}</p>
        
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">
          Released: {date}
        </span>

        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">
          Genre: {genre}
        </span>
      </div>
    </article>
  );
}

function CustomClearRefinements(props) {
  const { canRefine, refine } = useClearRefinements(props);

  return (
    <button disabled={!canRefine} onClick={refine} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 mb-2 rounded">
      Clear filters
    </button>
  );
}

function App() {
  return (
    <div className="flex flex-row">
      <InstantSearch searchClient={searchClient} indexName="job_screening">

        <div className="basis-1/4 p-8">
          <h1 class="text-xl font-bold text-slate-800">Genre</h1>
          <hr />
          
          <Menu 
            classNames={{
              count: 'ml-2 before:content-["("] after:content-[")"]',
              selectedItem: 'font-bold text-slate-800'
            }}
            attribute="genres"
            sortBy={['count:desc', 'name:asc']}
          />

          <h1 class="text-xl font-bold text-slate-800 mt-4">Cast</h1>
          <hr />
          
          <Menu 
            classNames={{
              count: 'ml-2 before:content-["("] after:content-[")"]',
              selectedItem: 'font-bold text-slate-800'
            }}
            attribute="cast.name"
            sortBy={['count:desc', 'name:asc']}
          />

          <CustomClearRefinements />
        </div>

        <div className="basis-3/4 p-8">
          <SearchBox
            classNames={{
              root: 'p-3 shadow-sm',
              form: 'relative',
              input: 'block w-full pl-9 pr-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-1 border border-gray-300 rounded-md px-4 py-2 w-96 mr-4',
              submitIcon: 'absolute top-4 left-0 bottom-0 w-6',
            }}
          />

          <Hits hitComponent={Hit}
            classNames={{
              root: 'p-3'
            }}
          />
        </div>
      </InstantSearch>
    </div>
  );
}

export default App;
