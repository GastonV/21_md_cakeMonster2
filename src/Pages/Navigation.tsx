import Button from '../components/Button/Button';
import topics from '../data/topics';

export const Navigation = () => (

  <div>
    {topics.map((topic) => (
      <Button
        buttonName={`${topic}`}
        clickHandler={() => alert(`${topic}`)}
      />
    ))}

  </div>
);

export default Navigation;
