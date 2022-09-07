import { useEffect, useState } from "react";
import SongList from "../components/SongList";

const ChartBox = function () {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = function () {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
      .then((res) => res.json())
      .then((songs)=>setSongs(songs.feed.entry));

  };

  return (
    <article>
      <SongList songs={songs}/>
    </article>
  );
};

export default ChartBox;
