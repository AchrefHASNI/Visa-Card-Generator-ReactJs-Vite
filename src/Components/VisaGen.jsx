import React, { useState } from 'react'
import './VisaGen.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';


import { Months ,Years ,currentDate, initRandom} from './Data';


function VisaGen() {
    
    const [bin,setBin]=useState('44945784587xxxxx')
    const [month,setMonth]=useState('00')
    const [year,setYear]=useState(initRandom)
    const [quantity,setQuantity]=useState(10)
    const [checkedCVV,setCheckedCVV]=useState(false)
    const [cvv,setCvv]=useState('')
    const [splitTab,setSplitTab]=useState('')

    
    function getCvvNumber() {
        
    
    const randomCVV =Math.floor(Math.random()*1000)
    var currentCVV =''
    if (checkedCVV && cvv !=='') {
        if (cvv.length>3) {
            currentCVV+=cvv.slice(0,3)
        }else if (cvv.length === 2) {
            currentCVV = currentCVV + '0'+cvv
        }else if (cvv.length === 1) {
            currentCVV = currentCVV + '00'+cvv
        }
        else{
            currentCVV+=cvv
        }
        
    }else{
        const rd =randomCVV+1000 
        currentCVV+= rd.toString().slice(1)
    }
    

    return  currentCVV
}

    const getYear = ()=>{
        const randYearInd =Math.floor(Math.random()*10)
        if (year==="Random") {
           return currentDate +randYearInd
        }else{
         return year
        }
    }   
    
    const getMonth =()=>{
        let randomNum = Math.floor(Math.random() * 12) + 1;
        if (month==='00') {
            const mon= +month + randomNum
            const mon1 = mon.toString()
            if (mon1.length===1) {
                return "0"+mon1
            } else {
                return mon1
            }
        } else {
            return month
        }
    }
    const generateBin =async(e)=>{
        e.preventDefault()
        
    
        const binTab = bin.split("")
        const binNum = binTab.filter((e)=> !isNaN(e)? e:null)
        const numBin = binNum.join("")
        
        const show=[]
         
                
            
            var lastBin = numBin
            var res =''
            for (let i = 0; i < quantity; i++) {
                if (16 - numBin.length >0) {
                    const lenAdd = 16-numBin.length
                    const randAdd = Math.floor(Math.random()*10**lenAdd)
                    const stringrand =randAdd.toString()
                    if (stringrand.length < lenAdd) {
                        const diff = lenAdd - stringrand.length
                        const nevRand=randAdd *10**diff
                        // console.log(randAdd);
                        // console.log(nevRand);
                        res =lastBin + nevRand
                    }else{
                    // console.log(randAdd);
                    res = lastBin +randAdd
                    }
                    }else{
                    return res = lastBin
                }
                
                const finalResult = res+'|'+getMonth()+'|'+getYear() +'|'+getCvvNumber()
                show.push(finalResult)
                // console.log(finalResult);
            }
        
        
        
        
       

        const review =show.join('\n')
        setSplitTab(review)
        // console.log(review);
        
    }

    
    const copyBins = async()=>{
        const copiedText = await navigator.clipboard.readText()
        if (splitTab.length && copiedText !== splitTab) {
          navigator.clipboard.writeText(splitTab)
          
        }
      }
  return (
    <>
    <div className="container">
        <h1 className="main-title">ss Visa card geneator</h1>
        <div className="content">

        <div className="left">
        <Box
        className='box'
        component="form"
        sx={{
        '& > :not(style)': {  m: 1, width: '25ch' },
        }}
            noValidate
            autoComplete="off"
        >

        <TextField
        className='bin'
        id="outlined-required"
        label="Bin"
        defaultValue={bin}
        onChange={(e)=>setBin(e.target.value)}
        />
            <div className="date">
            <TextField
            className='Months'
            id="outlined-select-month"
            select
            label="Month"
            value={month}
            onChange={(e)=>setMonth(e.target.value)}
            >
            {Months.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>

            <TextField 
            className='years'
            id="outlined-select-month"
            select
            label="Year"
            value={year}
            onChange={(e)=>setYear(e.target.value)}>
                {
                    Years.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
                
                ))}
            </TextField>
            </div>
            <div className="cvv">
            <input type="checkbox" 
                className="check" 
                name="CVV" id="CVV" 
                checked={checkedCVV} 
                onChange={()=>setCheckedCVV(!checkedCVV)}/>
            <label htmlFor="CVV" className='cvv-label'>CVV</label>
            <TextField className='cvv-input'  value={cvv} onChange={(e)=>setCvv(e.target.value)}  placeholder='CVV leave it blank to random'/>
            <TextField className='quantity' label="Quantity"   value={quantity} 
            onChange={(e)=>setQuantity(e.target.value)}/>
       
            </div>
            
            <div className="Generate">
                <button className='gen-btn' onClick={generateBin}>
                    Generate
                </button>
            </div>

            </Box>
         </div>
          <div className="right">
                <span className='spn'> Result</span>
                <div>
                    <textarea  
                    className='textarea' 
                    name="result"  
                    cols="50" 
                    rows="17" 
                    value={splitTab}
                    readOnly 
                    placeholder='xxxxxxxxxxxxxx|xx|xxxx|xxx'></textarea>
                </div>
                    <button className='copy-btn' onClick={copyBins}>Copy</button>
         </div>
    </div>
        </div>
        <div className="description">
            <p>Thank you for choosing <strong>SS VISACARD GENERATOR</strong>. We are a technology 
                solution that helps technology vendors tackle data-related challenges that arise 
                in enterprise settings. Our multi-purpose random data generator serves the needs of developers,
                educators, and testers in the field of code programming and development.</p>
            <p>Please be aware that our service does not generate credit card numbers that have 
                real money and are linked to actual cardholders. We strive to ensure that the 
                credit card numbers we generate are used for legitimate purposes and not for any
                fraudulent activities. It's also important to note that using online credit card 
                generators and fake credit card numbers is legal as long as the information is not
                used for malicious purposes like fraud and scams.</p>
        </div>
        <footer className='footer'>
        <div className='copyr'>
            <p> &copy; Copyrights. All rights reserved. </p>
        </div>
        <div className="icons">
        <a href="https://github.com/AchrefHASNI" target={"blank"}>
                <GitHubIcon  className="icon"/>
              </a>
              <a href="https://facebook.com/achref.AR11" target={"blank"}>
                <FacebookIcon  className="icon"/>
              </a>
              <a href="https://www.linkedin.com/in/achref-hasni-688b4b230/" target={"blank"}>
                <LinkedInIcon  className="icon"/>
              </a>
        </div>    
        </footer>
    </>
  )
}

export default VisaGen