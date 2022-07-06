import "../styles/about.css";
import fotoTatiana from "../assets/foto-tati-pb.jpg"

function About() {

  return (
    <main className="about">
        <section id="bio">
        <img id="foto-tati" src={fotoTatiana} alt="Tatiana" />
          <div id="description">
            <strong>Tatiana Gomes Gonçalves</strong>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
          </div>
        </section>
    </main>
  );
}

export default About;
