import './Preloader.css';

function Preloader() {
  return (
    <section className="loader__box">
      <div className="loader">
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__ball"></div>
      </div>
    </section>
  );
}

export default Preloader;
