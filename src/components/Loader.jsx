const Loader = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return arr.map((i) => (
    <div key={i} className="p-4 lg:w-1/3">
      <div className="h-full flex flex-col justify-center bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow animate-pulse md:p-6 dark:border-gray-400">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-12 mx-auto mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5 w-36 mx-auto"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5 w-[90%] mx-auto"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5 w-36 mx-auto"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
        <div className="flex justify-center items-center mt-14 space-x-3">
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 mx-auto w-32 mb-2"></div>
            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Loader;

{
  /* <div className="p-4 lg:w-1/3">
  <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
      Blog
    </h2>
    <div classnamename="h-full flex flex-col justify-between">
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        sunt aut facere repellat provident occaecati excepturi optio
        reprehenderit
      </h1>
      <p className="leading-relaxed mb-3">
        quia et suscipit suscipit recusandae consequuntur expedita et
        cum reprehenderit molestiae ut ut quas...
      </p>
      <a
        className="text-indigo-500 inline-flex justify-center items-center gap-2"
        href="/blog/1"
      >
        Learn More
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          ></path>
        </svg>
      </a>
    </div>
    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
      <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
        <svg
          className="w-4 h-4 mr-1"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
        1.2K
      </span>
      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
        <svg
          className="w-4 h-4 mr-1"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
        </svg>
        6
      </span>
    </div>
  </div> 
</div>;*/
}
