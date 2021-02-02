import React, { useEffect } from 'react';
import Api from '../../Api';

//components
import UserInterest from '../user-interest/UserInterest';

//pictures
import avatar from '../../assets/avatar.jpg';
import twitch from '../../assets/twitch.png'
import steam from '../../assets/steam.png'
import upcoming from '../../assets/upcoming.png'
import library from '../../assets/library.png'
import ellie from '../../assets/the_last_of_us_II.jpg'
import breakpoint from '../../assets/breakpoint.png'
import kratos from '../../assets/god_of_war.png'

//styles imports
import './index.css';


const Index = () => {

    const [isFind, setIsFind] = React.useState(false)
    const [interest, setInterest] = React.useState([]);


    useEffect(() => {
        getInterest();
    }, [])


    const getInterest = async () => {

        Api.get('/get-interest').then((resp) => {
            setInterest(resp.data);
            console.log(interest)
        }).catch(error => console.error(error))

    }

    const getUserInterest = () => {
        
    }

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
                        <div className='links'>
                            <div className='link'>
                                <img src={twitch}></img>
                                <h2>Time line</h2>
                            </div>
                            <div className='link'>
                                <img src={steam}></img>
                                <h2>Jogos</h2>
                            </div>
                            <div className='link'>
                                <img src={upcoming}></img>
                                <h2>Novos</h2>
                            </div>
                            <div className='link'>
                                <img src={library}></img>
                                <h2>Biblioteca</h2>
                            </div>
                        </div>
                    </div>
                    <div className='games'>

                        <>
                            <div id="search-bar">
                                <h1>Procurar gamers</h1>
                                <select className="select">
                                    <option selected disabled>Selecione um jogo para encontrar amigos</option>
                                    {
                                        interest.map(option => (
                                            <option key={option.id}>
                                                {option.interest}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </>

                        {

                            isFind ?
                                <UserInterest />
                                :
                                <div className='cards'>
                                    <h4>Jogados Recentemente</h4>
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
                                    <div className='card'>
                                        <img src={breakpoint}></img>
                                        <div className='card-info'>
                                            <h2>Ghost Recon - Breakpoint</h2>
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
                                    <div className='card'>
                                        <img src={breakpoint}></img>
                                        <div className='card-info'>
                                            <h2>Ghost Recon - Breakpoint</h2>
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
                                    <div className='card'>
                                        <img src={breakpoint}></img>
                                        <div className='card-info'>
                                            <h2>Ghost Recon - Breakpoint</h2>
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
        </>

    );
}

export default Index;