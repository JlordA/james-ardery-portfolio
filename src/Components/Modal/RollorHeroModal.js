function RollorHeroModal() {
  return (
    <div className="modalInner">
      <div className="modalImage">
        <iframe width="500" height="400" src="https://www.youtube.com/embed/5cvenr6cx8A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {/* <iframe
          src="https://www.youtube.com/embed?v=5cvenr6cx8A"
          title="rollorhero-vid"
          width="420"
          height="420"
        ></iframe> */}
      </div>
      <div className="modalText">
        <h1>Roll or Hero</h1>
        <p>
          Roll or Hero is an app paying homage to the NYC sandwich scene. The
          app utilizes the Google Maps Javascript and Google Places API. Redux
          is used for state management.
        </p>
        <form action="https://rollorhero.netlify.app/">
          <input className="modalButton" type="submit" value="Visit the Site"/>
        </form>
      </div>
    </div>
  );
}

export default RollorHeroModal;
