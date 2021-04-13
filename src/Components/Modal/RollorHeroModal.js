function RollorHeroModal(props) {
  const clickHandler = () => {
    props.toggleState();
  };

  return (
    <div className="modalInner">
      <div className="modalImage">
        <iframe
          width="500"
          height="400"
          src="https://www.youtube.com/embed/5cvenr6cx8A"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="modalText">
        <h1>Roll or Hero</h1>
        <p>
          Roll or Hero is an app highlighting the NYC sandwich scene. The
          app utilizes the Google Maps Javascript and Google Places API. Redux
          is used for state management.  The backend API is built with Ruby on Rails.
        </p>
        <form action="https://jlorda.github.io/petto_frontend/">
          <input className="modalButton" type="submit" value="Visit the Site" />
        </form>
        <button className="modal-exit" onClick={clickHandler}>X</button>
      </div>
    </div>
  );
}

export default RollorHeroModal;
