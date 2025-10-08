import React, { useState } from 'react'
import './HeroSection.css'

const HeroSection = () => {

        const [formData, SetFormData] = useState({fname:'',email: '', number: '', lname: '', title: '', company: '', country: '', selectedValue: '', selectedSupport: '' })
        const [loading, setLoading] = useState(false)
        // const [error, setError] = useState(null)


        const handleChange = (event) => {
            const {name, value} = event.target;

            SetFormData((prev) => ({...prev, [name]: value}));
            // maintaining the state of the form data
        }

        

        const handleSubmit = (e) => {
            e.preventDefault();
            setLoading(true);

            setTimeout(() => {
                
                setLoading(false)
                console.log('Form has been successfully submitted', {...formData})
                SetFormData(
                {fname:'',email: '', number: '', lname: '', title: '', company: '', country: '', selectedValue: '', selectedSupport: ''}
                )
            }, 3000);
            
            
        }

  return (
    <div className='herosection-container'>

        <div className='webflow-enterprise-container'>
            <h4 className='webflow-enterprise'>Webflow Enterprise</h4>
            <h1 className='enterprise-scale'>Enterprise scale, <br /> unmatched impact </h1>
            <p className='webflow-turn'>Turn your brand's creative vision into dynamic web experiences <br />
             that drive real results with an AI-native platform that scales <br />
              across your entire organization. </p>

              <div className='two-image-section'>
                    <div className='first-image'></div>
                    <div className='second-image'></div>
              </div>
        </div>


        <form className='contact-sales-container' onSubmit={handleSubmit}>
            <h3 className='contact-sales-h3'>Contact Sales </h3>

            <div className='contact-form'>

                <div className='business-email-container'>
                    <p className='business-email-container-p'>Business email*</p>
                    <input 
                    type="email" name='email' value={formData.email}
                    placeholder='Enter your email' 
                    className='contact-form-input'
                    onChange={handleChange}/>
                </div>

                <div className='company-size-container'>
                    <p className='company-size-container-p'>Company size*</p>
                    <select className='contact-form-select' 
                    name='selectedValue' value={formData.selectedValue}
                    onChange={handleChange}>
                        <option className='select-placeholder'> Select...</option>
                        <option>1-50 employees</option>
                        <option>51-200 employees</option>
                        <option>201-2,500 employees</option>
                        <option>2,501-10,000 employees</option>
                        <option>10,0001+ employees</option>
                    </select>
                </div>

                <div className='support-container'>
                    <p className='support-container-p'>How can we support you? *</p>
                    <select  className='contact-form-select'
                    name='selectedSupport' value={formData.selectedSupport}
                    onChange={handleChange} >
                        <option className='select-placeholder'> Select...</option>
                        <option>I want to evaluate Webflow for my organization</option>
                        <option>I want to evaluate optimize for my organization</option>
                        <option>I want to buy licenses or upgrade </option>
                        <option>I need assistance with an enterprise client project</option>
                        <option>I want to learn more about partnering with Webflow</option>
                        <option>I need support</option>
                    </select>
                </div>

                <div className='first-name-container'>
                    <p className='first-name-container-p'>First name*</p>
                    <input 
                    type="text" name='fname' value={formData.fname}
                    placeholder='Enter your first name' 
                    className='contact-form-input'
                    onChange={handleChange}/>
                </div>

                <div className='last-name-container'>
                    <p className='last-name-container-p'>Last name*</p>
                    <input 
                    type="text" name='lname' value={formData.lname}
                    placeholder='Enter your last name ' 
                    className='contact-form-input' 
                    onChange={handleChange}/>
                </div>

                <div className='company-container'>
                    <p className='company-container-p'>Company*</p>
                    <input 
                    type="text" name='company' value={formData.company}
                    placeholder='Where do you work?' 
                    className='contact-form-input'
                    onChange={handleChange}/>
                </div>

                <div className='title-container'>
                    <p className='title-container-p'>Title*</p>
                    <input 
                    type="text" name='title' value={formData.title}
                    placeholder='What is your job title? ' 
                    className='contact-form-input'
                    onChange={handleChange}/>
                </div>

                <div className='country-container'>
                    <p className='country-container-p'>Country*</p>
                    <input 
                    type="text" name='country' value={formData.country}
                    placeholder='Enter your country' 
                    className='contact-form-input'
                    onChange={handleChange}/>
                </div>

                <div className='phone-number-container'>
                    <p className='phone-number-container-p'>Phone number*</p>
                    <input 
                    type="number" name='number' value={formData.number}
                    placeholder='Enter your phone number' 
                    className='phone-number-contact-form-input'
                    onChange={handleChange}/>
                </div>
            </div>

            <button className='contact-form-button' type='submit' disabled = {loading} > {loading ? "Sending..." : "Talk to Us" } </button>
            <p className='contact-form-submit'>By submitting this form, you agree to Webflow's Terms of Service and Privacy Policy</p>
        </form>
        
    </div>
  )
}

export default HeroSection