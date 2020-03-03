import { Form, Input, Button } from 'semantic-ui-react'
import React, { PureComponent } from 'react'
import { CardList, PriceInput } from '../../components'
import { cardService } from '../../_services/card.service';
import './style.css'

class FlatListScreen extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            cards: [],
            filteredCards: [],
            filter: {
                district: null,
                gender: null,
                maxFlatmates: null,
                maxPrice: null,
                petAllowed: false,
                smokingAllowed: false
            }
        }

        this.resetFilters = this.resetFilters.bind(this)
        this.updateCards = this.updateCards.bind(this)
        this.updateDistrict = this.updateDistrict.bind(this)
        this.updateGender = this.updateGender.bind(this)
        this.updateMaxFlatmates = this.updateMaxFlatmates.bind(this)
        this.updateMaxPrice = this.updateMaxPrice.bind(this)
        this.updatePetAllowed = this.updatePetAllowed.bind(this)
        this.updateSmokingAllowed = this.updateSmokingAllowed.bind(this)
    }

    async componentDidMount() {
        const data = await cardService.getAll();
        console.log('data in flat list: ', data);
        this.setState({
            cards: data,
            filteredCards: data,
        })
    }

    updateCards() {
        this.setState({
            filteredCards: [
                ...this.state.cards
                .filter(x => (
                    !this.state.filter.district || 
                    x.district === this.state.filter.district
                ))
                .filter(x => (
                    !this.state.filter.gender || 
                    (x.prefFlatmatesMale && this.state.filter.gender === "male") ||
                    (x.prefFlatmatesFemale && this.state.filter.gender === "female") ||
                    (x.prefFlatmatesCouple && this.state.filter.gender === "couple")
                ))
                .filter(x => (
                    !this.state.filter.maxFlatmates || 
                    x.flatmatesMale + x.flatmatesFemale <= this.state.filter.maxFlatmates
                ))
                .filter(x => (
                    !this.state.filter.maxPrice || 
                    x.price.value <= this.state.filter.maxPrice
                ))
                .filter(x => (
                    !this.state.filter.petAllowed || 
                    x.petAllowed === this.state.filter.petAllowed
                ))
                .filter(x => (
                    !this.state.filter.smokingAllowed || 
                    x.smokingAllowed === this.state.filter.smokingAllowed
                ))
            ]
        })
    }

    updateDistrict(e) {
        this.setState({
            filter: {
                ...this.state.filter,
                district: e.currentTarget.value
            }
        }, this.updateCards)
    }
    updateGender(e) {
        this.setState({
            filter: {
                ...this.state.filter,
                gender: e.currentTarget.value
            }
        }, this.updateCards)
    }

    updateMaxFlatmates(e) {
        this.setState({
            filter: {
                ...this.state.filter,
                maxFlatmates: parseInt(e.currentTarget.value) || 0
            }
        }, this.updateCards)
    }

    updateMaxPrice(e) {
        this.setState({
            filter: {
                ...this.state.filter,
                maxPrice: parseInt(e.currentTarget.value) || 0
            }
        }, this.updateCards)
    }

    updatePetAllowed() {
        this.setState({
            filter: {
                ...this.state.filter,
                petAllowed: !this.state.filter.petAllowed
            }
        }, this.updateCards)
    }

    updateSmokingAllowed() {
        this.setState({
            filter: {
                ...this.state.filter,
                smokingAllowed: !this.state.filter.smokingAllowed
            }
        }, this.updateCards)
    }

    resetFilters() {
        this.setState({
            filter: {
                district: null,
                gender: null,
                maxFlatmates: null,
                maxPrice: null,
                petAllowed: false,
                smokingAllowed: false
            }
        })
    }


    render() {
        return (
            <>
                <h1>Find a Room</h1>
                <h3>Only City District filter working</h3>
                <Form>
                    <Form.Group inline>
                        <Form.Field label='City District'
                            control='select'
                            onChange={this.updateDistrict}
                        >
                            <option value=''></option>
                            <option value='Staré Mesto'>Staré Mesto</option>
                            <option value='Ružinov'>Ružinov</option>
                            <option value='Vrakuňa'>Vrakuňa</option>
                            <option value='Podunajské Biskupice'>Podunajské Biskupice</option>
                            <option value='Nové Mesto'>Nové Mesto</option>
                            <option value='Rača'>Rača</option>
                            <option value='Vajnory'>Vajnory</option>
                            <option value='Karlova Ves'>Karlova Ves</option>
                            <option value='Dúbravka'>Dúbravka</option>
                            <option value='Lamač'>Lamač</option>
                            <option value='Devínska Nová Ves'>Devínska Nová Ves</option>
                        </Form.Field>
                        <Form.Field inline>
                            <label>Max num of flatmates</label>
                            <Input onChange={this.updateMaxFlatmates} placeholder='3' value={this.state.filter.maxFlatmates}/>
                        </Form.Field>
                        <Form.Field label='Your gender'
                            control='select'
                            onChange={this.updateGender}
                        >
                            <option value=''></option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='couple'>Couple</option>
                        </Form.Field>
                        <Form.Field inline>
                            <label>Max price</label>
                            <Input onChange={this.updateMaxPrice} placeholder='350 EUR' value={this.state.filter.maxPrice}/>
                        </Form.Field>
                        <Form.Field
                            label='Pet Allowed'
                            control='input'
                            type='checkbox'
                            checked={this.state.filter.petAllowed}
                            onChange={this.updatePetAllowed}
                        />
                        <Form.Field
                            label='Smoking Allowed'
                            control='input'
                            type='checkbox'
                            checked={this.state.filter.smokingAllowed}
                            onChange={this.updateSmokingAllowed}
                        />
                        <Button
                            onClick={this.resetFilters}
                        >Reset filters
								 </Button>
                    </Form.Group>
                </Form>
                <CardList cards={this.state.filteredCards} />
            </>
        )
    }
}
export default FlatListScreen
export const FLAT_LIST = "/flatList"