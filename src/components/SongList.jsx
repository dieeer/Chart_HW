import Song from "./Song"


const SongList = ({songs})=>{
    const SongItems = songs.map((song,index)=>{
        return <Song song={song} key={index}/>
    })


return (
    <div>
        <ol>
            {SongItems}
        </ol>
    </div>
)

}

export default SongList