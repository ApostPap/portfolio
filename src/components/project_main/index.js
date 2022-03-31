import React, {Component} from 'react';
import '../project_main/style.css';
import {
  Col,
  Card,
  Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faLink, faInfo} from '@fortawesome/free-solid-svg-icons';
import info from '../../const/project_info.json';
import Lightbox from 'react-image-lightbox';

console.log(info.data);

export default class PM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      image:'',
    };
  }

  render() {
    const { photoIndex, isOpen, image } = this.state;
    
    return (
      
      <Row xl={12} className="main_row">


      {info.data.map(item => ( 
        <Col xl={6}  key={item.id} className="card_col">
        <Card className="card_main">
          <blockquote className="blockquote mb-0 card-body">
            <h2>
            {item.name}
            </h2>
            <h5 className='blockquote_desc'><FontAwesomeIcon className="icon_info" size="xs" icon={faInfo}/> {item.description}</h5>
            <footer className="blockquote-footer">
             built using <strong title="Source Title">{item.tools}</strong>
            </footer>
          </blockquote>
          <Card.Body>
          {
            item.link !== false  &&
              <Card.Link href={item.link} target="_blank"><FontAwesomeIcon className="icon" size="lg" icon={faLink}/></Card.Link>
          }
          <FontAwesomeIcon onClick={() => this.setState({ isOpen: true, image:item.image })} className="icon_images" size="lg" icon={faImages} /> &nbsp;&nbsp;

        </Card.Body>
        
        </Card>
        {isOpen && (
                <Lightbox
                  mainSrc={image[photoIndex]}
                  nextSrc={image[(photoIndex + 1) % image.length]}
                  prevSrc={image[(photoIndex + image.length - 1) % image.length]}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + image.length - 1) % image.length,
                    })
                  }
                  onMoveNextRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + 1) % image.length,
                    })
                  }
                />
              )}
        </Col>
      ))}
    </Row>
    );
  }
}
