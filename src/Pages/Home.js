import React from 'react';
import { Alert, Button, Card, Container, ListGroup } from "react-bootstrap";
import marat from "../assets/images/dev_marat.jpg"
import Developer from "../Components/Developer";
import { useTranslation } from 'react-i18next';
import data from "../assets/list.json";
import "./Home.css"
import { Link } from "react-router-dom"

const Home = () => {
    const { t } = useTranslation();
    const id = Object.keys(data)[(new Date().getDate()) % 6];
    document.title = t("home.belArch")
    return (
        <div>
            <Alert className="mt-3 mx-1" variant="info">
                <h2 className="text-center">{t("home.welcome")}</h2>
                <p className="text-center">{t("home.description")}</p>
            </Alert>

            <Container className="d-flex justify-content-center mt-5">
                <Card border="secondary" className = "doer">
                    <Card.Header className="text-center" style={{ fontSize: "30px" }}>{t("home.doerOfDay")}</Card.Header>
                    <Card.Img src={require(`../assets/images/${id}/avatar.jpg`)} />
                    <Card.Body>
                        <Card.Title>{t(`${id}.name`)}</Card.Title>
                        <Card.Subtitle className="text-muted mb-3">{data[id]["yearsOfLife"]}</Card.Subtitle>
                        <Card.Text>
                            {t(`${id}.description`)}
                        </Card.Text>
                        <Button variant="info" as={Link} to={`/person/${id}`}>{t("home.goToArticle")}</Button>
                    </Card.Body>
                </Card>
            </Container>
            <h2 className="text-center mt-5 mb-3">{t("home.ourTeam")}</h2>
            <div className="d-flex justify-content-center mb-2">
                <ListGroup horizontal="xxl">
                    <ListGroup.Item variant="info">
                        <Developer src={marat} name={t("home.marat")}
                            link="https://github.com/ChuritMaklan"
                            mail="cuklinmarat@gmail.com" />
                    </ListGroup.Item>
                    <ListGroup.Item variant="info">
                        <Developer src={marat} name={t("home.lesha")}
                            link="https://github.com/AlexeyRyabov04"
                            mail="ryabovalexey04@gmail.com" />
                    </ListGroup.Item>
                    <ListGroup.Item variant="info">
                        <Developer src={marat} name={t("home.dima")}
                            link="https://github.com/dkrumkachev"
                            mail="dkrumkachev@gmail.com" />
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )
}

export default Home;