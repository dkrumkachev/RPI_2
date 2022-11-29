import React, {Component} from 'react';
import {Alert, Button, Card, Container, Figure} from "react-bootstrap";
import foxy from "../assets/images/10.png"
import marat from "../assets/images/dev_marat.jpg"

class Home extends Component {
    render() {
        return (
            <>
                <Alert className="mt-3" variant="info">
                    <h2 className="text-center">Добро пожаловать на портал об архитекторах Беларуси!</h2>
                    Вставить текст <br/>
                    D'accord, il existait
                    D'autres façons de se quitter
                    Quelques éclats de verre
                    Auraient peut-être pu nous aider
                    Dans ce silence amer,
                    J'ai décidé de pardonner
                    Les erreurs qu'on peut faire
                    à trop s'aimer

                    D'accord la petite fille en moi
                    Souvent te réclamait
                    Presque comme une mère,
                    Tu me bordais, me protégeais
                    Je t'ai volé ce sang
                    Qu'on aurait pas dû partager
                    A bout de mots, de rêves je vais crier

                    Je t'aime, je t'aime
                    Comme un fou comme un soldat
                    Comme une star du cinéma
                    Je t'aime, je t'aime
                    Comme un loup, comme un roi
                    Comme un homme que je ne suis pas
                    Tu vois, je t'aime comme ça

                    D'accord je t'ai confié
                    Tous mes sourires, tous mes secrets
                    Même ceux, dont seul un frère
                    Est le gardien inavoué
                    Dans cette maison de pierre,
                    Satan nous regardait danser
                    J'ai tant voulu la guerre de corps
                    Qui se faisaient la paix
                </Alert>
                <Container className="d-flex justify-content-center mt-5">
                    <Card border="secondary" style={{width: "500px"}}>
                        <Card.Header className="text-center" style={{fontSize: "30px"}}>Деятель дня</Card.Header>
                        <Card.Img src={foxy}/>
                        <Card.Body>
                            <Card.Title>Фамилия, имя деятеля дня</Card.Title>
                            <Card.Text>
                                Краткая информация <br/>
                                Краткая информация <br/>
                                Краткая информация <br/>
                                Краткая информация <br/>
                                Краткая информация <br/>
                                Краткая информация <br/>
                            </Card.Text>
                            <Button variant="info">Перейти к статье</Button>
                        </Card.Body>
                    </Card>
                </Container>
                <h2 className="text-center mt-5 mb-3">НАША ДРУЖНАЯ КОМАНДА</h2>
                <Container className="d-flex justify-content-between text-center">
                    <Figure>
                        <Figure.Image src={marat} width={200}></Figure.Image>
                        <Figure.Caption>
                            <div>Главный разработчик</div>
                            <a href="https://github.com/dkrumkachev">
                                муж ЕБЁТ меня<br/> по 4 часа в сутки !<br/>Нужно всего лишь...
                            </a>
                        </Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image src={marat} width={200}></Figure.Image>
                        <Figure.Caption>
                            <div>Алексей</div>
                            <a href="https://github.com/dkrumkachev">вставить текст</a>
                        </Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image src={marat} width={200}></Figure.Image>
                        <Figure.Caption>
                            <div>Дмитрий</div>
                            <a href="https://github.com/dkrumkachev">вставить текст</a>
                        </Figure.Caption>
                    </Figure>
                </Container>

            </>
        );
    }
}

export default Home;