import 'bulma/css/bulma.css';
import './App.css';
import Animal from './Animal';
import Snake from './images/snake.jpg'
import Bear from './images/bear.jpg'
import Lion from './images/lion.jpg'
import Bird from './images/bird.jpg'

function App() {
  return (
    <div className="App">
      <section className="hero is-warning">
        <div className="hero-body">
          <p className="title">ANIMALS</p>
        </div>
      </section>
      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column'>
              <Animal
                image={Lion}
                title="Lion"
                description="Lions are top predators in their environment, whether that's grasslands, desert or open woodland. 
                 It means they play a crucial role in keeping a healthy balance of numbers among other animals,
                 especially herbivores like zebra and wildebeest – which in turn influences the condition of grasslands and forests."
              />
            </div>
            <div className='column'>
              <Animal
                image={Bear}
                title="Bear"
                description="Adult bears present an imposing physical presence. All species have broad heads, extended jaws, massive frames, 
                heavy paws, powerful claws, and shaggy coats. The polar bear is white; most other types are black, brown, 
                or cinnamon in color. Bears vary in size according to their species."
              />
            </div>
            <div className='column'>
              <Animal
                image={Snake}
                title="Snake"
                description="Some are active at night, others during the day. Snakes are predators and eat a wide variety of animals,
                including rodents, insects, birds' eggs and young birds. Snakes are cold-blooded 
                and must move to a suitable surrounding environment to regulate their body temperature."
              />
            </div>
            <div className='column'>
              <Animal
                image={Bird}
                title="Bird"
                description="Throughout the world, birds are essential seed dispersers for plants that provide us with food, 
                medicine, timber, and recreation. Among their qualifications: They travel long distances. 
                They assist germination when they eat fruit by removing the pulp and scratching the seed coat."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
