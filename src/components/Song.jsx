const Song = ({ song, index }) => {
  return <li> 
  <h3>{song['im:name'].label}</h3>
  <p>{song['im:artist'].label}</p>
  </li>;
};

export default Song;
