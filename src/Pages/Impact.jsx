import Slide from "@/components/impact/Slide";

function Impact() {
  return (
    <div className="min-h-screen w-full flex justify-center my-5 py-5">
      <div className="w-11/12 md:w-4/5 lg:w-3/5 py-5">
        <div className="w-full flex flex-col gap-7 items-center justify-center">
          <h1 className="font-bold text-5xl">Our Planet Matters</h1>
          <p className="font-medium text-lg">
            We aim to create a more sustainable and better shared future. To
            make a difference in people's lives, communities and our planet by
            doing business the right way. By becoming better ourselves, we can
            help build a stronger, more sustainable future for us all.
          </p>
          <p className="font-medium text-lg">
            We’re taking a holistic approach to sustainability focused on
            social, environmental and economic stewardship. Only through a
            comprehensive approach can we make transformational and enduring
            change. Our sustainability strategy guides how we support and engage
            the remarkable people behind our brands, from farmers and employees
            to the communities we call home, and delivers on our commitments to
            safeguard the health of the environment.
          </p>
          <img
            src="/impact/impact.png"
            alt="featured post"
            className=" rounded-3xl"
          />
        </div>
        <Slide />
      </div>
    </div>
  );
}

export default Impact;
