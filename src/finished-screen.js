
import cat from './images/cat.jpg';
import gollum from './images/gollum.jpg';
import gorilla from './images/gorilla.jpg';
import hairRollers from './images/hair-rollers.jpg';
import messi from './images/messi.jpg';
import monaLisa from './images/mona-lisa.jpg';
import playboy from './images/playboy.jpg';
import toilet from './images/toilet.jpg';

const photos = [
  cat,
  gollum,
  gorilla,
  hairRollers,
  messi,
  monaLisa,
  playboy,
  toilet
]

export default function FinishedScreen() {
  return (
    <div>
      {photos.map((photo, i) => (
        <div>
          <img width="100%" src={photo} alt={`jarek ${i}`} />
        </div>
      ))}
    </div>
  )
}