import React from 'react';
// Components
import UserInterest from './components/user-interest/UserInterest'
import './App.css';

// Pictures
import avatar from './assets/avatar.jpg'
import twitch from './assets/twitch.png'
import steam from './assets/steam.png'
import upcoming from './assets/upcoming.png'
import library from './assets/library.png'
import controller from './assets/controller.png'
import ellie from './assets/the_last_of_us_II.jpg'
import breakpoint from './assets/breakpoint.png'
import kratos from './assets/god_of_war.png'


function App() {

  const [isFind, setIsFind] = React.useState(false)


  const findUserSameInterest = () => {
    setIsFind(true)
  }

  return (

    <>
      <main>
        <section className='glass'>
          <div className='dashboard'>
            <div className='user'>
              <img src={avatar}></img>
              <h3>Helena Martins</h3>
              <p>Membro Pro</p>
            </div>
            <div className='Links'>
              <div className='Link'>
                <img src={twitch}></img>
                <h2>Streams</h2>
              </div>
              <div className='Link'>
                <img src={steam}></img>
                <h2>Jogos</h2>
              </div>
              <div className='Link'>
                <img src={upcoming}></img>
                <h2>Novo</h2>
              </div>
              <div className='Link'>
                <img src={library}></img>
                <h2>Biblioteca</h2>
              </div>
            </div>
            <div className='pro'>
              <h2>Junte-se ao Pro para jogos grátis</h2>
              <img src={controller}></img>
            </div>
          </div>
          <div className='games'>
            <div className='status'>
              <h1>Ativar jogos</h1>
              <input type='text' onClick={() => findUserSameInterest()}></input>
            </div>
            {

              isFind ?
                <UserInterest />
                :
                <div className='cards'>
                  <div className='card'>
                    <img src={ellie}></img>
                    <div className='card-info'>
                      <h2>The Last of Us II &emsp;&emsp;&emsp;&ensp;</h2>
                      <p>Versão para PS4</p>
                      <div className='progresso'></div>
                    </div>
                    <h2 className='porcentagem'>64%</h2>
                  </div>
                  <div className='card'>
                    <img src={kratos}></img>
                    <div className='card-info'>
                      <h2>God of War&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</h2>
                      <p>Versão para PS4</p>
                      <div className='progresso'></div>
                    </div>
                    <h2 className='porcentagem'>64%</h2>
                  </div>
                  <div className='card'>
                    <img src={breakpoint}></img>
                    <div className='card-info'>
                      <h2>Ghost Recon - Breakpoint</h2>
                      <p>Versão para PS4</p>
                      <div className='progresso'></div>
                    </div>
                    <h2 className='porcentagem'>64%</h2>
                  </div>
                </div>
            }
          </div>
        </section>
      </main>
      <div className='circle1'></div>
      <div className='circle2'></div>
    </>




  );
}

export default App;
