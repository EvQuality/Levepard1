import Navbar from "../components/Navbar";

const Blogs = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen px-9 md:px-32 py-24">
        <h1 className="text-4xl md:text-6xl font-light mb-12">
          Blogs
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="border-b pb-6">
            <h2 className="text-2xl mb-2">How branding builds trust</h2>
            <p className="opacity-70">
              Thoughts on positioning, identity, and perception.
            </p>
          </div>

          <div className="border-b pb-6">
            <h2 className="text-2xl mb-2">Motion in modern brands</h2>
            <p className="opacity-70">
              Why motion design matters more than ever.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;