
import FooterHome from "../../components/footer/FooterHome";
import Navigation from "../../components/navigation/Navigation";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <div className="header-container">
        <Navigation />
        <Header />
        <FooterHome/>
      </div>
    </>
  );
};

export default Home;
