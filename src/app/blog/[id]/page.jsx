import Link from 'next/link';

async function getDetails(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 15,
      },
    }
  );

  return await res.json();
}
const BlogDetail = async ({ params }) => {
  const detail = await getDetails(params.id);

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <Link href="/" className="self-center">
        Go Back
      </Link>
      {!detail.title ? (
        <div className="text-center my-5 font-bold">
          <h2>Sorry... Could not get the results for this blog</h2>
        </div>
      ) : (
        <div className="p-8 flex md:items-center md:justify-center flex-wrap md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-gray-700">
              BLOG {params.id}
            </span>
            <span className="mt-1 text-gray-500 text-sm">
              12 Jun 2019
            </span>
          </div>
          <div className="md:flex-grow max-w-4xl">
            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
              {detail.title}
            </h2>
            <p className="leading-relaxed ">{detail.body}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
