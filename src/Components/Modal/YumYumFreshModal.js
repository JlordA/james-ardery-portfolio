import "../../css/modal.css";

function YumYumModal(props) {
  const clickHandler = () => {
    props.toggleState();
  };

  return (
    <div className="modalInner">
      <div className="modalImage">
        <iframe
          width="500"
          height="400"
          src="https://www.youtube.com/embed/6ZvU7gvhLv4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="modalText">
        <h1>Yum Yum Fresh</h1>
        <p>
          Yum Yum Fresh is a consumer app designed to show users local seasonal
          produce based on the state they are located in and the current month.
          The app is built with a React frontend using hooks for state
          management. Bootstrap and vanilla css are used for styling. The
          backend API is built in Ruby on Rails. The backend features custom
          serializers and a PostgresQL database.
        </p>
        <form
          action="https://yumyumfresh.com/"
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

export default YumYumModal;
