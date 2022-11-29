import React, {Component} from 'react';
import {Alert, Button, Card, Container, ListGroup} from "react-bootstrap";
import foxy from "../assets/images/10.png"
import marat from "../assets/images/dev_marat.jpg"
import Developer from "../Components/Developer";

class Home extends Component {
    popup() {
        alert("трахтенберг хахахахаха как смешно")
    }
    render() {
        return (
            <>
                <Alert className="mt-3 mx-1" variant="info">
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
                            <Card.Title>Наум Ефимович Трахтенберг</Card.Title>
                            <Card.Subtitle className="text-muted mb-3">1910 - 1977</Card.Subtitle>
                            <Card.Text>
                                Разрабатывая вместе с белорусскими архитекторами генеральные планы городов республики,
                                проекты планировки и застройки областных центров, Трахтенберг стал одним из
                                ведущих градостроителей 1930-х гг. В конце 1944 г. он стал главным архитектором генплана
                                восстановления и развития Минска.
                            </Card.Text>
                            <Button variant="info" onClick={this.popup}>Перейти к статье</Button>
                        </Card.Body>
                    </Card>
                </Container>
                <h2 className="text-center mt-5 mb-3">НАША ДРУЖНАЯ КОМАНДА</h2>
                <div className="d-flex justify-content-center mb-2">
                    <ListGroup horizontal="xxl">
                        <ListGroup.Item variant="info">
                            <Developer src={marat} name="Марат Чуклин"
                                       link="https://github.com/ChuritMaklan"
                                       mail="cuklinmarat@gmail.com"/>
                        </ListGroup.Item>
                        <ListGroup.Item variant="info">
                            <Developer src={marat} name="Алексей Рябов"
                                       link="https://github.com/AlexeyRyabov04"
                                       mail="ryabovalexey04@gmail.com"/>
                        </ListGroup.Item>
                        <ListGroup.Item variant="info">
                            <Developer src={marat} name="Дмитрий Крумкачёв"
                                       link="https://github.com/dkrumkachev"
                                       mail="dkrumkachev@gmail.com"/>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </>
        );
    }
}

export default Home;