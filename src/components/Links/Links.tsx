export function Links() {
  return (
    <div className="flex items-center flex-wrap max-w-3xl mt-12  ">
      {/* <div className={styles.grid}> */}

      <a
        href="https://nextjs.org/docs"
        className="m-4 p-6  text-left text-gray-600 no-underline border border-solid border-gray-300 rounded-3xl transition md:w-5/12 hover:text-blue-600 focus:text-blue-600 hover:border-blue-500 focus:border-blue-500 w-full"
      >
        <h2 className="mb-4 text-2xl">Documentation &rarr;</h2>
        <p className="m-0 text-xl ">111</p>
      </a>

      <a
        href="https://nextjs.org/learn"
        className="m-4 p-6  text-left text-gray-600 no-underline border border-solid border-gray-300 rounded-3xl transition md:w-5/12 hover:text-blue-600 focus:text-blue-600 hover:border-blue-500 focus:border-blue-500 w-full"
      >
        <h2 className="mb-4 text-2xl">Learn &rarr;</h2>
        <p className="m-0 text-xl ">222</p>
      </a>

      <a
        href="https://github.com/vercel/next.js/tree/master/examples"
        className="m-4 p-6  text-left text-gray-600 no-underline border border-solid border-gray-300 rounded-3xl transition md:w-5/12 hover:text-blue-600 focus:text-blue-600 hover:border-blue-500 focus:border-blue-500 w-full"
      >
        <h2 className="mb-4 text-2xl">Examples &rarr;</h2>
        <p className="m-0 text-xl ">3333</p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className="m-4 p-6  text-left text-gray-600 no-underline border border-solid border-gray-300 rounded-3xl transition md:w-5/12 hover:text-blue-600 focus:text-blue-600 hover:border-blue-500 focus:border-blue-500 w-full"
      >
        <h2 className="mb-4 text-2xl">Deploy &rarr;</h2>
        <p className="m-0 text-xl ">44444</p>
      </a>
    </div>
  );
}
