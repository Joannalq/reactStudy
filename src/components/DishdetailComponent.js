import React, {Component} from 'react'
import {Card, CardImg, CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'

class DishDetail extends Component {
    //constructor
    constructor(props){
        super(props);

        this.state = {   
        };
    }

    renderDish(dish){
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
        
    }

    renderComments(comments){
        if(comments!=null){
            return comments.map(function(myobj){
                return (     
                    <ul className="list-unstyled">
                        <li>{myobj.comment}</li>
                        <li>--{myobj.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(myobj.date)))}</li>
                    </ul>
                );
            })
        }else{
            return(
                <div></div>
            )
        }
    } 

    render(){
        const dishDetail = this.props.dish;
        if(dishDetail!=null){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">{this.renderDish(dishDetail)}</div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {this.renderComments(dishDetail.comments)}
                        </div>
                    </div>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }         
    }
}

export default DishDetail;