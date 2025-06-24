import { useState } from 'react';
import './App.css';

function App() {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);

  const handleLike = () => setLikes(prev => prev + 1);
  const handleDislike = () => setDislikes(prev => prev + 1);

  return (
    <div className="container">
      <p className="message">
        Charles Francis Padua, BSIT 3 of CCDI Sorsogon for wins Gold Medal in IT Software Solutions
        for Business category of the recent Philippine National Skills Competition or World Skills
        Philippines held last August 21–25, 2024 at the World Trade Center.
      </p>
      <div className="buttons">
        <button className="like" onClick={handleLike}>Like ({likes})</button>
        <button className="dislike" onClick={handleDislike}>Dislike ({dislikes})</button>
      </div>
      <p className="total">Total Ratings: {likes + dislikes}</p>
    </div>
  );
}

export default App;