import React from 'react';
import "./Person.css"
import { Card, Container, Carousel } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import 'react-vertical-timeline-component/style.min.css';
import data from "../assets/list.json";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const Person = () => {
  const { t } = useTranslation();
  const { id } = useParams()
  document.title = t(`${id}.name`)
  return (
    <div className="container mx-auto font-mono">
      <Container className="d-flex justify-content-center mt-5">
        <Card border="secondary" style={{ width: "50%" }}>
          <Card.Img src={require(`../assets/images/${id}/avatar.jpg`)} />
          <Card.Body>
            <Card.Title className="text-center">{t(`${id}.name`)}</Card.Title>
            <Card.Subtitle className="text-muted mb-3 text-center">{data[id]["yearsOfLife"]}</Card.Subtitle>
            <Card.Text>{t(`${id}.description`)} </Card.Text>
          </Card.Body>
        </Card>
      </Container >
      <Timeline lineColor={'#dddddd'}>
        {
          data[id]["timelineYears"].map((years, index) =>
            <TimelineItem key={index} dateText={years} dateInnerStyle={{ background: '#488ffa' }} bodyContainerStyle={{ background: '#1dc3f5', borderRadius: '5px', padding: '10px' }}>
              <p>{t(`${id}.timeText${index}`)}</p>
            </TimelineItem>
          )
        }
      </Timeline>
      <Carousel className="carousel">
        {
          data[id]["photos"].map((text, index) =>
            <Carousel.Item key={index} className="text-center">
              <img className="d-block image" src={require(`../assets/images/${id}/${index + 1}.jpg`)} />
              <Carousel.Caption>{t(`${id}.imgText${index}`)}</Carousel.Caption>
            </Carousel.Item>
          )
        }
      </Carousel>
      <iframe className="w-100 mb-5" style={{ height: "600px" }}
        src={`https://www.youtube.com/embed/${data[id]["youtube"]}`}  
        allowFullScreen
      />
      <YMaps key={t("locale")} query={{
        lang: t("locale"),
        load: 'Map,Placemark'
      }}>
        <Map className="me-auto ms-auto w-100 mb-5" style={{ height: "600px" }}
          defaultState={{
            center: data[id]["coords"],
            zoom: 18
          }}>
          <Placemark defaultGeometry={data[id]["coords"]} />
        </Map>
      </YMaps>

    </div>
  )
}

export default Person;