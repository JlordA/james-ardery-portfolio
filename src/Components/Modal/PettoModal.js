import "../../css/modal.css"

function PettoModal(props) {
  const clickHandler = () => {
      props.toggleState()
  };

  return (
    <div className="modalInner">
      <div className="modalImage">
        <iframe
          width="500"
          height="400"
          src="https://www.youtube.com/embed/fsSvlLzVKYU"
          title="YouTube video player"
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="modalText">
        <h1>Petto</h1>
        <p>
          Petto is an app paying homage to the era of Gigapets and Tamagochis.
          The app is built using vanilla Javascript and has a Ruby on Rails
          backend API.
        </p>
        <form action="https://jlorda.github.io/petto_frontend/" target="_blank" rel="noopener noreferrer">
          <input className="modalButton" type="submit" value="Visit the Site" />
        </form>
        <button className="modal-exit" onClick={clickHandler}>X</button>
      </div>
    </div>
  );
}

export default PettoModal;
