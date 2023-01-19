import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <header className="bg-white p-4">
        <h1 className="text-2xl font-medium">My Projects</h1>
      </header>
      <main className="container mx-auto p-4 ">
        <section className="bg-white rounded-lg drop-shadow-md p-4">
          <img
            src="/assets/images/projects/frituurvleesje-kiezen.jpg"
            alt="Frituurvleesjekiezen mockup"
          />
          <h2 className="text-lg font-medium">Frituurvleesjekiezen.be</h2>
          <p>
            Frituurvleesjekiezen.be is the solution for Belgian who don't know
            which snacks to choose in a "frituur" (a place where they sell
            fries){" "}
          </p>
          <a href="https://frituurvleesjekiezen.be" className="text-blue-500">
            View project
          </a>
        </section>

        <section className="bg-white rounded-lg drop-shadow-md p-4">
          <img
            src="/assets/images/projects/frituurvleesje-kiezen.jpg"
            alt="Mealy mockup"
          />
          <h2 className="text-lg font-medium">Mealy</h2>
          <p>
            A mealplanner which helps you choose meals for the whole week in
            under 5 minutes.
          </p>
          <a href="https://mealy.be" className="text-blue-500">
            View project
          </a>
        </section>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Projects | Bryanhannes.com",
  meta: [
    {
      name: "description",
      content: "Projects of Bryan Hannes",
    },
  ],
};
