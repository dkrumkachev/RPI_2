import React, {Component} from 'react';
import {Button, Card, Container} from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <Container>
                <Card border="info" style={{width: "18rem"}}>
                    <Card.Img variant="top" src="a"/>
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
                        <Button variant="secondary">Узнать больше</Button>
                    </Card.Body>
                </Card>
            </Container>

        );
    }
}

export default Home;