import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

// import ListGroup from 'react-bootstrap/ListGroup';
let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        };
    }

    getBooks = async () => {
        //console.log(SERVER);
        try {
            let results = await axios.get(`${SERVER}/books`);
            console.log('do we have books', results);
            this.setState({
                books: results.data,
            });
        } catch (error) {
            console.log('we have an error: ', error.response.data);
        }
    };

    componentDidMount() {
        this.getBooks();
    }

    render() {
 
        console.log(this.state.books);

        let books = this.state.books.map((book) => (


        
      <Carousel.Item key={book._id}>
        <img
          className="d-block w-100"
          src={require('../img/books-5937823_640.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
     



            // <p key={book._id}>
            //     {book.title} is about {book.description}
            // </p>
        ));
        return (
            <>
           
                <main>{
                this.state.books.length > 0 && 
                <>
                <Carousel fade>
                {books}
                </Carousel>
                </>
                }   
                </main>

            </>
        );
    }


}




export default BestBooks;
