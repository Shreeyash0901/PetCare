import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from '../../img/petBoarding.JPG';
import img2 from '../../img/petFeeding.JPG';
import img3 from '../../img/petGrooming.JPG';
import img4 from '../../img/petTraining.JPG';
import img5 from '../../img/petExercise.JPG';
import img6 from '../../img/petTreatment.JPG';
import '../OurServices/OurServices.css';
function GridExample() {
  const CardData = [
    {
      title: 'Pet Boarding',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: img1,
    },
    {
      title: 'Pet Feeding',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: img2,
    },
    {
      title: 'Pet Grooming',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: img3,
    },
    {
      title: 'Pet Training',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: img4,
    },
    {
      title: 'Pet Exercise',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: img5,
    },
    {
      title: 'Pet Treatment',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: img6,
    },
  ];

  return (
    <Row xs={1} md={3} className="g-4">
      {CardData.map((data, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={data.img} className='fw-bolder' />
            <Card.Body>
              <Card.Title><h1>{data.title}</h1></Card.Title>
              <Card.Text className='justify-center' >{data.description}</Card.Text>
              <h4 style={{color:'rgb(250, 58, 0)'}}>READ MORE</h4>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;
