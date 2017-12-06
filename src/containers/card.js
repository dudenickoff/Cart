import React from 'react'

export default class Products extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        saveCard: false,
        email: ''
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.submitCard = this.submitCard.bind(this);
    }
    cardNumberFromatter(value) {
      var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      var matches = v.match(/\d{0,16}/g);
      var match = matches && matches[0] || ''
      var parts = []
      for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4))
      }
      if (parts.length) {
        return parts.join(' ')
      } else {
        return v
      }
    }
    cvvNumberFormatter(value){
      // console.log(value.replace(/[^0-9]/gi, ''))
      return value.replace(/[^0-9]/gi, '');
    }
    expirationDateFormatter(value){
      var v = value.match(/^[0-9]{0,2}\/{0,1}[0-9]{0,2}$/, '');
      if(v === null) return ''
      return v
    }
    handleInputChange(event) {
      const target = event.target;
      let value = target.type === 'checkbox' ? target.checked : target.value;
      if (target.name == 'cardNumber') {
        value = this.cardNumberFromatter(value);
      };
      if (target.name == 'cvv'){
        value = this.cvvNumberFormatter(value);
      }
      if (target.name == 'expirationDate'){

        value = this.expirationDateFormatter(value);
      }
      this.setState({
        [target.name]: value
      });
    }
    submitCard(e) {
      console.log(e);
      e.preventDefault();
      this.setState({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        saveCard: false,
        email: ''
      })
    }
	render() {
    	return (
    		<div className='card col--xl-12'>
    			<form action="" autoComplete="off">
          <input 
    				type='text' 
    				placeholder='Credit card number' 
    				name='cardNumber' 
    				value={this.state.cardNumber} 
    				onChange={this.handleInputChange} 
    				maxLength={19} 
    			/>
    			<input 
    				type='text' 
    				placeholder='Expiration date'
    				name='expirationDate'
            maxLength='5'
    				value={this.state.expirationDate} 
    				onChange={this.handleInputChange}
    			/>
    			<input 
    				type='text'
    				name='cvv'
            className='cvv'
    				placeholder='CVV' 
    				value={this.state.cvv}
    				onChange={this.handleInputChange} 
    				maxLength={3} 
    			/>
          <input 
            type='checkbox'
            name='saveCard'
            id='saveCard'
            checked={this.state.saveCard}
            onChange={this.handleInputChange} 
          /><label htmlFor='saveCard'>Save Card?</label>
    			<input
    				type='email' 
    				name='email'
    				className='email'
            autoComplete='off'
    				placeholder='Please type your email'
    				value={this.state.email}
    				onChange={this.handleInputChange} 
    			/>
    			<input onClick={e => this.submitCard(e)} value="Submit" type="submit" />
          </form>
    		</div>
    	)
	}
}
