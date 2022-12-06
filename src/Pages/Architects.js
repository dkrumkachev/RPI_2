import React, { useState } from 'react';
import { Form, InputGroup, ListGroup } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom"
import data from "../assets/list.json"

const Architects = () => {
  const [value, setValue] = useState('');
  const { t } = useTranslation();
  let translated = []
  let keys = []
  Object.keys(data).map(name => {
    translated.push(`${t(`${name}.name`)}`);
    keys.push(`${name}`)
  }
  )
  const filtered = translated.filter(name => {
    return translated[translated.indexOf(name)].toLowerCase().includes(value.toLowerCase())
  })
  return (
    <div className="container mx-auto font-mono">
      <div className="flex justify-center flex-col align-middle">
        <Form className="d-flex mt-5">
          <InputGroup >
            <Form.Control
              type="search"
              className="search-field"
              onChange={(event) => setValue(event.target.value)} />
          </InputGroup>
        </Form>

        <ListGroup className="mt-1" >
          {filtered.map(elem =>
            <ListGroup.Item key={translated.indexOf(elem)} action variant="info" as={Link} to={`/person/${keys[translated.indexOf(elem)]}`} >
              <div >{t(`${elem}`)}</div>
            </ListGroup.Item>

          )
          }
        </ListGroup>
      </div>
    </div>
  );
}


export default Architects;