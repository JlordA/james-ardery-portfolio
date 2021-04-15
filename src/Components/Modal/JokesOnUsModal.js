function JokesOnUsModal(props) {
  const clickHandler = () => {
    props.toggleState();
  };

  return (
    <div className="modalInner">
      <div className="modalImage">
        <iframe
          width="500"
          height="400"
          src="https://www.youtube.com/embed/vBt_O-vvY1o"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="modalText">
        <h1>Jokes On Us</h1>
        <p>
          Jokes On Us is a social app for comedians to network and book gigs.
          The app is built entirely in Ruby on Rails and utilizes the MVC
          pattern for application architechture. The views are built using HTML
          and ERB with CSS for styling.
        </p>
        {/* <form action="https://rollorhero.netlify.app/">
          <input className="modalButton" type="submit" value="Visit the Site" />
        </form> */}
        <button className="modal-exit" onClick={clickHandler}>X</button>
      </div>
    </div>
  );
}

export default JokesOnUsModal;
