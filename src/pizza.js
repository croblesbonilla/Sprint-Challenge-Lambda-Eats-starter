import React, {useState} from 'react'
import {Card, CardImg, Form, FormGroup, Button, Input, Dropdown, DropdownToggle, DropdownMenu, Label} from 'reactstrap'

const PizzaOrder = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = () => setDropdownOpen((prevState) => !prevState)
    return(
        <>
        <Card color='info'>
            <h2 style={{color: 'white', margin: '0 auto'}}>
                Build Your Own Pizza!
            </h2>
            <CardImg src={require('./Pizza.jpg')}/>
        </Card>
        <Form style={{margin: '5%'}}>
        <FormGroup>
            <legend>Name</legend>
            <Input type='name' name='name'/>
        </FormGroup> 
        <FormGroup>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    Pizza Size
                </DropdownToggle>
                <DropdownMenu>
                    <div>Small</div>
                    <div>Medium</div>
                    <div>Large</div>
                    <div>XL</div>
                    <div>Heart Attack</div>
                </DropdownMenu>
            </Dropdown>
        </FormGroup> 
        <FormGroup tag='fieldset'>
            <legend>Meat Topings</legend>
            <FormGroup>
                <Label check>
                    <Input type='radio' name='topings' value='peperoni'/>
                    Peperoni
                </Label>
            </FormGroup>
            <FormGroup>
                <Label check>
                    <Input type='radio' name='topings' value='salami'/>
                    Salami
                </Label>
            </FormGroup>
            <FormGroup>
                <Label check>
                    <Input type='radio' name='topings' value='ham'/>
                    Ham
                </Label>
            </FormGroup>
            <FormGroup>
                <Label check>
                    <Input type='radio' name='topings' value='meatball'/>
                    Meatballs
                </Label>
            </FormGroup>

        </FormGroup> 


        <FormGroup tag='fieldset'>
            <legend>Vegi Topings</legend>
            <FormGroup>
                <Label check>
                    <Input type='radio' name='topings' value='mushrooms'/>
                    Mushrooms
                </Label>
            </FormGroup>
            <FormGroup>
                <Label check>
                    <Input type='radio' name='topings' value='bellpeper'/>
                    Bellpeper
                </Label>
            </FormGroup>
            <FormGroup>
                <Label check>
                    <Input type='radio' name='topings' value='pineapple'/>
                    Pineapple
                </Label>
            </FormGroup>
            <FormGroup>
                <Label check>
                    <Input type='radio' name='topings' value='onion'/>
                    Onion
                </Label>
            </FormGroup>

        </FormGroup> 
        <FormGroup>
            <legend>Special Instructions</legend>
            <Input type='textarea' name='special'/>
        </FormGroup>
        <Button>Submit</Button>
        </Form>
        </>
    )
};




export default PizzaOrder

