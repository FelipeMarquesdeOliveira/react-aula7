import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image1 from '../../assets/rio-img.jpg';
import Image2 from '../../assets/deserto-img.jpg';
import Image3 from '../../assets/van-img.jpg'
import './sobre.css'; 

const Sobre = () => {
    return (
        <>
            <section className='container'>
                <div className="row justify-content-center">
                    <div className="col-md-4"> {/* Coluna responsiva para os cards */}
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={Image1} />
                            <Card.Body>
                                <Card.Title>Pacote 1</Card.Title>
                                <Card.Text>
                                    Pacote com promoção relâmpago, incluindo duas diárias e um evento musical no local.
                                </Card.Text>
                                <Button variant="primary">Saiba mais</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={Image2} />
                            <Card.Body>
                                <Card.Title>Pacote 2</Card.Title>
                                <Card.Text>
                                    Pacote com desconto especial, incluindo três diárias e um passeio turístico exclusivo.
                                </Card.Text>
                                <Button variant="primary">Saiba mais</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={Image3} />
                            <Card.Body>
                                <Card.Title>Pacote 3</Card.Title>
                                <Card.Text>
                                    Pacote para um fim de semana relaxante, com acesso a todas as áreas de lazer.
                                </Card.Text>
                                <Button variant="primary">Saiba mais</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Sobre;
