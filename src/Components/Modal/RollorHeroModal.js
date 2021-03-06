import "../../css/modal.css";

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
          src="https://www.youtube.com/embed/oiobWbaeCss"
          title="YouTube video player"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="modalText">
        <h1>Roll or Hero</h1>
        <p>
          Roll or Hero is an app highlighting the NYC sandwich scene. The app
          utilizes the Google Maps Javascript and Google Places API. Redux is
          used for state management. The backend API is built with Ruby on
          Rails.
        </p>
        <form
          action="https://rollorhero.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <input className="modalButton" type="submit" value="Visit the Site" />
        </form>
        <button className="modal-exit" onClick={clickHandler}>
          X
        </button>
      </div>
    </div>
  );
}

export default RollorHeroModal;
