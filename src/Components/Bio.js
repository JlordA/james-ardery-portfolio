function Bio() {
  return (
    <div className="bio-component">
      <div>
        <img className="bio-img" src="image/portrait.jpg" alt="portrait" />
      </div>
      <div className="bio-text">
        <h1>Hello Me!</h1>
        <p style={{color: 'grey'}}>
          My name is James Ardery and I am a budding software
          engineer with a background in music and event production. I was born
          in 1984 and am originally from Louisville Kentucky. I have spent the
          last 13 years living in Brooklyn NYC. The majority of my time in NYC
          was been spent booking music venues and mixing concerts as a live
          sound engineer. I also spent many years on the road as a touring
          musician and lead singer/guitarist of a rock band.
        </p>
        <p style={{color: 'grey'}}>
          Most recently I completed a software engineering bootcamp at Flatiron
          School that focused on the stacks React, Javascript, and Ruby on
          Rails. The apps built during my time at Flatrion listed in the tech
          section. Previous art and music projects can be found in the music
          section. If you like anything you see here or just want to chat
          contact me!
        </p>
      </div>
    </div>
  );
}

export default Bio;
