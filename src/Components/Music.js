import "../css/music.css"


function Music() {
  return (
    <div className="music-div">
      <div className="music-text">
        <h1>Hello Music!</h1>
        <p style={{ color: "grey" }}>
          James Ardery (b. 1984) is a composer and sometimes-visual artist whose
          work focuses on behavioral repetition and its trappings and freedoms.
          Percussion, feedback, electronic synthesis, tape loops, and guitar are
          typical in his compositions. From 2010 to 2016 Ardery worked primarily
          writing and recording music in the band{" "}
          <a href="http://www.lushes.us/" target="_blank" rel="noopener noreferrer">Lushes</a>. With this project he
          toured both the U.S. and Europe many times and produced two full
          length releases on the Los Angles based label Felte Records. All music
          since 20016 has been slowly release under the name Cowboy Turns.
        </p>
        <p style={{ color: "grey" }}>
          In addition to Lushes he worked as a curator for music venues in
          Manhattan as well as the fertile Brooklyn DIY scene. In 2010 Ardery
          co-founded the semi-annual music festival{" "}
          <a href="https://en.wikipedia.org/wiki/Cropped_Out" target="_blank" rel="noopener noreferrer">Cropped Out</a>{" "}
          with childhood friend and artist Ryan Davis in his hometown of
          Louisville Kentucky. Cropped Out has hosted notable artists such as
          Sun Ra Arkestra, Susan Alcorn, Lil B, Circuit Des Yeux, Jandek,
          Anthony Braxton, Jana Rush, and $hit and $hine. In 2019 the Festival
          celebrated its 8th birthday.
        </p>
        <p style={{ color: "grey" }}>
          Over the summer of 2017 Ardery was an artist in residence with the
          Rare Air neon gallery located on Governors Island NYC. During the
          residency Ardery produced the album "The Magic Roundabout" (Cowboy
          Turns) as well as the visual art piece "Now Lie in It" for the
          residency group show. He is self-taught and has no educational
          background in any of these mediums. Buyer (nothing for sale) beware.
        </p>
      </div>
      <div className="iframe-div">
        <iframe
          width="300"
          height="475"
          className="music-iframe"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          title="LUSHES"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/23341535&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <iframe
          width="300"
          height="475"
          className="music-iframe"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          title="Tolken"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1241750056&color=%23849484&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <iframe
          width="300"
          height="475"
          className="music-iframe"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          title="RoundAbout"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1241762632&color=%239ba670&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </div>
    </div>
  );
}

export default Music;
