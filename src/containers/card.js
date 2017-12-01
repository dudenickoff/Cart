import React from 'react'

export default class Products extends React.Component {
	constructor(props){
		super(props);
			this.state = {
					cardNumber: '',
					expirationDate: '',
					cvv: '123',
					saveCard: false,
					email: 'a@a.com'
			}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.submitCard = this.submitCard.bind(this);
	}
	cc_format(value) {
  		var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  		var matches = v.match(/\d{4,16}/g);
  		var match = matches && matches[0] || ''
  		var parts = []
  			for (let i=0, len=match.length; i<len; i+=4) {
    			parts.push(match.substring(i, i+4))
  			}
  			if (parts.length) {
    			return parts.join(' ')
  			} else {
    			return value
  			  }
	}
    handleInputChange(event) {
    const target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    	if(target.name == 'cardNumber'){
    		value = this.cc_format(value);
    	}
    	this.setState({
      		[name]: value
    	});
  	}
  	submitCard(){
  		console.log("before clean", this.state);
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
    			<input 
    				type='text' 
    				placeholder='Credit card number' 
    				name='cardNumber' 
    				value={this.state.cardNumber} 
    				onChange={this.handleInputChange} 
    				maxLength={19} 
    			/>
    			<input 
    				type='date' 
    				placeholder='Expiration date'
    				name='expirationDate'
    				value={this.state.expirationDate} 
    				onChange={this.handleInputChange}
    			/>
    			<input 
    				type='text'
    				name='cvv' 
    				placeholder='CVV' 
    				value={this.state.cvv}
    				onChange={this.handleInputChange} 
    				maxLength={3} 
    			/>
    			<label htmlFor='saveCard'>Save Card?
    			<input 
    				type='checkbox'
    				name='saveCard'
    				id='saveCard'
    				checked={this.state.saveCard}
    				onChange={this.handleInputChange} 
    			></input>
    			<input
    				type='email' 
    				name='email'
    				className='email'
    				placeholder='Please type your email'
    				value={this.state.email}
    				onChange={this.handleInputChange} 
    			/></label>
    			<button onClick={this.submitCard}>Submit</button>
    		</div>
    	)
	}
}