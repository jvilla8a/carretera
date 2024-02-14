import SearchForm from "../../components/SearchForm";
import "./Home.scss";

const Home = () => {
  return (
    <main id="home">
      <section id="home-header">
        <div>
          <h1>Viaja con Carretera</h1>
          <p>
            Astroship is a starter template for startups, marketing websites
            &amp; landing pages.
            <wbr /> Built with Astro.build and TailwindCSS. You can quickly
            create any website with this starter.
          </p>
        </div>
        <div>
          <SearchForm />
        </div>
      </section>
    </main>
  );
};

export default Home;
