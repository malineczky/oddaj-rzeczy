import image1 from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";
import people from "../assets/People.jpg";

function HomeAboutUs() {
  return (
    <section className="about" id="about">
      <div className="about__box">
        <h2>O nas</h2>
        <img src={image1} alt="dekoracja" className="decoration__line" />
        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <img src={signature} alt="podpis" className="about__box--signature" />
      </div>
      <div className="about__box about__box--picture">
        <img src={people} alt="ludzie" />
      </div>
    </section>
  );
}
export default HomeAboutUs;
