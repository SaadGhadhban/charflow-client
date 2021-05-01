import {useState,useEffect, useContext} from 'react';
import axios from 'axios';
import { useUserContext } from '../../UserContext';
import {Bar,Doughnut,Line, Radar,Polar } from 'react-chartjs-2';
import {Link,useHistory} from 'react-router-dom';
import {v4 as uuidv4, v4} from 'uuid';
import {CirclePicker} from 'react-color';
import './AddChartScreen.css';
import {BiListPlus,BiFullscreen} from 'react-icons/bi';
import {MdClear} from 'react-icons/md';
import {IoIosLock} from 'react-icons/io';
import {IoEarth} from 'react-icons/io5'




const AddChartScreen = ({history}) =>{
    
    const {privateData,setPrivateData,error,setError} = useUserContext();
    const [main,setMain]= useState(true)
    const [numberOfDatasets,setNumberOfDatasets] = useState(0);
    const [next,setNext] = useState(false);
    const [title,setTitle] = useState('');
    const [array,setArray] = useState([])
    const [mainObject,setMainObject] = useState({});
    const [valueArray,setValueArray] =useState([])
    const [dataArray,setDataArray] = useState([])
    const [value,setValue] = useState(0)
    const [label,setLabel] = useState('')
    const [description,setDescription] = useState('')
    const [color,setColor] = useState('#ccc')
    const [dataOne,setDataOne] = useState('');
    const [dataTwo,setDataTwo] = useState('');
    const [dataThree,setDataThree] = useState('');
    const [dataFour,setDataFour] = useState('');
    const [dataFive,setDataFive] = useState('');
    const [dataSix,setDataSix] = useState('');
    const [dataSeven,setDataSeven] = useState('');
    const [dataEight,setDataEight] = useState('');
    const [dataNine,setDataNine] = useState('');
    const [dataTen,setDataTen] = useState('');
    
    const [valueOne,setValueOne] = useState(0);
    const [valueTwo,setValueTwo] = useState(0);
    const [valueThree,setValueThree] = useState(0);
    const [valueFour,setValueFour] = useState(0);
    const [valueFive,setValueFive] = useState(0);
    const [valueSix,setValueSix] = useState(0);
    const [valueSeven,setValueSeven] = useState(0);
    const [valueEight,setValueEight] = useState(0);
    const [valueNine,setValueNine] = useState(0);
    const [valueTen,setValueTen] = useState(0);
    const [show,setShow] = useState(false);
    
    const [isPrivate,setIsPrivate] = useState(true);
    const [auth,setAuth]= useState('')
    const [chartType,setChartType] = useState([]);


    const handleSubmitOne = (e)=>{
        e.preventDefault();
        
         if(numberOfDatasets > 10){
             setError('Number of Datasets should be below 10')
             
         } else if(chartType.length < 1){
            setError('Please select chart type')
         }
         
         else {
            
               setNext(!next)
               
         }
        
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const handleData = (d)=>{
            
            setDataArray(dataArray => [...dataArray,d])
        }

        const handleValue = (v) =>{
            setValueArray( valueArray => [...valueArray,v])
        }

        // handle Values

        if(valueOne){
            handleValue(valueOne)
        }
        if(valueTwo){
            handleValue(valueTwo)
        }
        if(valueThree){
            handleValue(valueThree)
        }
        if(valueFour){
            handleValue(valueFour)
        }
        if(valueFive){
            handleValue(valueFive)
        }
        if(valueSix){
            handleValue(valueSix)
        }
        if(valueSeven){
            handleValue(valueSeven)
        }
        if(valueEight){
            handleValue(valueEight)
        }
        if(valueNine){
            handleValue(valueNine)
        }
        if(valueTen){
            handleValue(valueTen)
        }

        //handle Data

        if(dataOne){
            handleData(dataOne)
        }
        if(dataTwo){
            handleData(dataTwo)
        }
        if(dataThree){
            handleData(dataThree)
        }
        if(dataFour){
            handleData(dataFour)
        }
        if(dataFive){
            handleData(dataFive)
        }
        if(dataSix){
            handleData(dataSix)
        }
        if(dataSeven){
            handleData(dataSeven)
        }
        if(dataEight){
            handleData(dataEight)
        }
        if(dataNine){
            handleData(dataNine)
        }
        if(dataTen){
            handleData(dataTen)
        }
        

        // dataOne? setDataArray([...dataArray,dataArray.push(dataOne)]) : '';
        // dataTwo? setDataArray([...dataArray,dataArray.push(dataTwo)]) : '';
        // dataThree? setDataArray([...dataArray,dataArray.push(dataThree)]) : '';
        // dataFour? setDataArray([...dataArray,dataArray.push(dataFour)]) : '';
        // dataFive? setDataArray([...dataArray,dataArray.push(dataFive)]) : '';
        // dataSix? setDataArray([...dataArray,dataArray.push(dataSix)]) : '';
        // dataSeven? setDataArray([...dataArray,dataArray.push(dataSeven)]) : '';
        // dataEight? setDataArray([...dataArray,dataArray.push(dataEight)]) : '';
        // dataNine? setDataArray([...dataArray,dataArray.push(dataNine)]) : '';
        // dataTen? setDataArray([...dataArray,dataArray.push(dataTen)]) : '';

    //    setDataArray([...dataArray,dataArray.push('nnn')])
         
        if(dataArray.length != valueArray.length){
            setError('Please enter all fields')
        }else {

            // setMainObject({title,
            //     labels:dataArray,
            //     datasets:dataArray,
            //     description
            // })
            // setArray([array => [...array,mainObject]]);
            setShow(true)
            setNext(false)
            setMain(false)

        }
        ;
    }

    // const addAnotherDataset= ()=>{
    //     setValueOne(0);
    //     setValueTwo(0);
    //     setValueThree(0);
    //     setValueFour(0);
    //     setValueFive(0);
    //     setValueSix(0);
    //     setValueSeven(0);
    //     setValueEight(0);
    //     setValueNine(0);
    //     setValueTen(0);
    //     setDataOne('');
    //     setDataTwo('');
    //     setDataThree('');
    //     setDataFour('');
    //     setDataFive('');
    //     setDataSix('');
    //     setDataSeven('');
    //     setDataEight('');
    //     setDataNine('');
    //     setDataTen('');
    //     setTitle('');
    //     setNumberOfDatasets(0);
    //     setMain(true);
    //     setNext(false);
    //     setDescription('')
    // }

    const handlePublic = ()=>{
        setIsPrivate(false);
    }

    const handleFinalSubmit = (e)=>{
        e.preventDefault();
        const sendData = async () =>{
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization : `Bearer ${auth}`
                }
            }
            const finishedData = {
                data: {
                    title : title,
                    labels: dataArray,
                    datasets: valueArray,
                },
                private: isPrivate,
                description: description,
                chartType:chartType
            }

            try {
                const {data} = await axios.post('/api/private/addchart',{chart:finishedData},config);
                
                history.push('/dashboard');
            } catch (error) {
                // localStorage.removeItem('authToken');
                
            setError('You are not authorized to view this page, please Login')
            }
            
        }
        sendData();
    }
    

    useEffect(()=>{
        if(!localStorage.getItem('authToken')){
            history.push('/register')
        }
        setAuth(localStorage.getItem('authToken'));
        const fetchPrivateData = async ()=>{
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization : `Bearer ${localStorage.getItem('authToken')}`
            }
        }

        try {
                const {data} = await axios.get('/api/private',config);
               
                 setPrivateData(data.data);
        } catch (error) {

            localStorage.removeItem('authToken');
            setError('You are not authorized to view this page, please Login')
        }


        }

        fetchPrivateData();
    },[history])

    const handleLogout = ()=>{
        localStorage.removeItem('authToken');
        history.push('/register')
    };


    
    return ( <>
                
                <div className='main-addchart-screen'>
                    
                    <div className='second-section'>
                    <div className={`main-input ${next || show? '' : 'active-main'}`}>
                        <div className='addchart-title'>
                            <BiListPlus size='2.5em'/>
                            <h2>Add Chart</h2>
                        </div>
                        {error? <p className='error-msg'> &#8226; {error}</p>: ''}
                    <form className='addchart-form' onSubmit={handleSubmitOne}>
                        <div className='form-group'>
                        <label className='add-chart-label' htmlFor='title'>Add Title: </label>
                        <input id='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                        <label className='add-chart-label' htmlFor='number-of-labels'>Number of Labels: </label>
                        <input type='number' id='number-of-labels' onChange={(e)=>setNumberOfDatasets(parseInt(e.target.value))}/><p>From 1 - 10</p>
                        </div>
                        <div className='form-group'>
                        <label className='add-chart-label' htmlFor='Bar'>Bar Chart</label>
                        <input type='checkbox' onChange={(e)=>setChartType(chartType => [...chartType,e.target.name])} name='Bar'/>
                        </div>
                        <div className='form-group'>
                        <label className='add-chart-label' htmlFor='Bar'>Line Chart</label>
                        <input type='checkbox'  onChange={(e)=>setChartType(chartType => [...chartType,e.target.name])} name='Line' />
                        </div>
                        <div className='form-group'>
                        <label htmlFor='Bar'>Doughnut Chart</label>
                        <input type='checkbox'  onChange={(e)=>setChartType(chartType => [...chartType,e.target.name])} name='Doughnut' />
                        </div>
                        <div className='form-group'>
                        <label htmlFor='Bar'>Polar Chart</label>
                        <input type='checkbox'  onChange={(e)=>setChartType(chartType => [...chartType,e.target.name])} name='Polar' />
                        </div>
                        <div className='form-group'>
                        <label htmlFor='Bar'>Radar Chart</label>
                        <input type='checkbox'  onChange={(e)=>setChartType(chartType => [...chartType,e.target.name])} name='Radar' />
                        </div>
                        <div className='form-group chart-desc'>
                        <label htmlFor='description'>Chart description: </label>
                        <textarea type='number' id='description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
                        </div>
                        <br/>
                        <button className='btn btn-primary' type='submit'>Next</button>
                    </form>
                    </div>
                    
                    <form className={`'input-wrapper' ${numberOfDatasets >=1 && next?'input-show':''}`} onSubmit={handleSubmit}>

                    <div className={`data-input ${numberOfDatasets >=1 && next?'active-main':''}`}>
                        <label  >Data Label :</label>
                        <input placeholder='Enter Label' type='text' value={dataOne} onChange={(e)=>setDataOne(e.target.value)}  />
                        <label >Data Value</label>
                        <input  type='number' value={valueOne} onChange={(e)=>setValueOne(e.target.value)} />
                    </div >
                    <div className={`data-input ${numberOfDatasets >=2 && next?'active-main':''}`}>
                        <label  >Data Label :</label>
                        <input placeholder='Enter Label' type='text' value={dataTwo} onChange={(e)=>setDataTwo(e.target.value)} />
                        <label >Data Value</label>
                        <input type='number'  value={valueTwo} onChange={(e)=>setValueTwo(e.target.value)}/>
                    </div>
                    <div className={`data-input ${numberOfDatasets >=3&& next?'active-main':''}`}>
                        <label  >Data Label :</label>
                        <input placeholder='Enter Label' type='text' value={dataThree} onChange={(e)=>setDataThree(e.target.value)} />
                        <label >Data Value</label>
                        <input type='number'  value={valueThree} onChange={(e)=>setValueThree(e.target.value)}/>
                    </div>
                    <div className={`data-input ${numberOfDatasets >= 4&& next?'active-main':''}`}>
                        <label  >Data Label :</label>
                        <input placeholder='Enter Label'type='text' value={dataFour} onChange={(e)=>setDataFour(e.target.value)} />
                        <label >Data Value</label>
                        <input type='number'  value={valueFour} onChange={(e)=>setValueFour(e.target.value)}/>
                    </div>
                    <div className={`data-input ${numberOfDatasets >= 5&& next?'active-main':''}`}>
                        <label  >Data Label :</label>
                        <input placeholder='Enter Label' type='text' value={dataFive} onChange={(e)=>setDataFive(e.target.value)} />
                        <label >Data Value</label>
                        <input type='number' value={valueFive} onChange={(e)=>setValueFive(e.target.value)} />
                    </div>
                    <div className={`data-input ${numberOfDatasets >= 6&& next?'active-main':''}`}>
                        <label  >Data Label :</label>
                        <input placeholder='Enter Label' type='text' value={dataSix} onChange={(e)=>setDataSix(e.target.value)} />
                        <label >Data Value</label>
                        <input type='number'  value={valueSix} onChange={(e)=>setValueSix(e.target.value)}/>
                    </div>
                    <div className={`data-input ${numberOfDatasets >= 7&& next?'active-main':''}`}>
                        <label  >Data Label :</label>
                        <input placeholder='Enter Label' type='text' value={dataSeven} onChange={(e)=>setDataSeven(e.target.value)} />
                        <label >Data Value</label>
                        <input type='number'  value={valueSeven} onChange={(e)=>setValueSeven(e.target.value)}/>
                    </div>
                    <div className={`data-input ${numberOfDatasets >= 8&& next?'active-main':''}`}>
                        <label  >Data Label :</label>
                        <input placeholder='Enter Label' type='text' value={dataEight} onChange={(e)=>setDataEight(e.target.value)} />
                        <label >Data Value</label>
                        <input type='number'  value={valueEight} onChange={(e)=>setValueEight(e.target.value)}/>
                    </div>
                    <div className={`data-input ${numberOfDatasets >= 9&& next?'active-main':''}`}>
                        <label  >Data Label :</label>
                        <input placeholder='Enter Label' type='text' value={dataNine} onChange={(e)=>setDataNine(e.target.value)} />
                        <label >Data Value</label>
                        <input type='number'  value={valueNine} onChange={(e)=>setValueNine(e.target.value)} />
                    </div>
                    <div className={`data-input ${numberOfDatasets >= 10&& next?'active-main':''}`}>
                        <label  >Data Label :</label>
                        <input placeholder='Enter Label' type='text' value={dataTen} onChange={(e)=>setDataTen(e.target.value)} />
                        <label >Data Value</label>
                        <input type='number'  value={valueTen} onChange={(e)=>setValueTen(e.target.value)}/>
                    </div>
                    <div className={`${next?'active-main':'submit-btn'}`}>
                    <button className='submit-chart btn btn-primary'>submit</button>
                    </div>
                    </form>
                    
                </div>
                {show?<div className='final-submit-container'>
                 <form className='final-submit-form' onSubmit={handleFinalSubmit}>
                      <button className='private-save' type='submit'><IoIosLock className='final-submit-icon' size='1.2em'/>Save as Private </button>
                      <button className='public-save' type='submit' onClick={handlePublic}><IoEarth className='final-submit-icon' size='1.2em'/>Save as Public </button>
                 </form> 
                 <form className='final-submit-form'>
                      <button className='reset-btn wide' type='submit'><IoIosLock className='final-submit-icon' size='1.2em'/>Reset/Try again</button>
                 </form>
                 </div>:''}
                {show ?<div className='charts-wrapper2'>
                
                {chartType.map(chart=> {
                    if(chart === 'Bar'){
                        return (<div key={v4()} className='chart-c'>
                        
                        <div key={v4()} className='pieChart'>
                        <Bar data={{
                    labels: dataArray,
                    datasets: [
                        {
                            label:title,
                            data:valueArray,
                            backgroundColor: [
                                '#264653',
                                        '#2a9d8f',
                                        '#e9c46a',
                                        '#f4a261',
                                        '#e76f51',
                                        '#283618',
                                        '#e07a5f',
                                        '#3d405b',
                                        '#81b29a',
                                        '#f2cc8f',
                            ],
                            borderColor: [
                                '#264653',
                                '#2a9d8f',
                                '#e9c46a',
                                '#f4a261',
                                '#e76f51',
                                '#283618',
                                '#e07a5f',
                                '#3d405b',
                                '#81b29a',
                                '#f2cc8f',
                            ],
                            borderWidth: 1
                        },
                        
                    ]
                }} options={{maintainAspectRatio:false,scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }}} />
                    </div>
                    
                    <div><div className='chart-futter'>
                        <div className='des-section'>
                        <span className='des-intro'>Description:</span>
                        <p className='des-body'>{description}</p>
                        </div>
                        
                        <div className='user-section'>
                           <span className='username-intro'>created by:</span> <h4 className='username'>{privateData.username}</h4>
                        </div>
                    </div> </div>
                    <div className='btn-container'>
                        <button onClick={(e)=>{
                            
                            if(e.target.parentNode.parentNode.parentNode.className ==='chart-c'){ 
                                e.target.parentNode.parentNode.parentNode.children[0].className = 'pieChart expand-two'
                                e.target.parentNode.parentNode.parentNode.className = 'chart-c expand'
                            }else if(e.target.parentNode.parentNode.parentNode.className ==='chart-c expand'){ 
                                e.target.parentNode.parentNode.parentNode.children[0].className = 'pieChart'
                                e.target.parentNode.parentNode.parentNode.className = 'chart-c'
                            }
                           
                           
                            
                            
                       }} className='expand-btn'><BiFullscreen size={'1.2em'}/></button>
                       
                        </div>
                    </div>
                    )
                    }
                    if(chart === 'Doughnut'){
                        return(<div className='chart-c'>
                        <div key={v4()} className='pieChart'>
                        <Doughnut data={{
                    labels: dataArray,
                    datasets: [
                        {
                            label:title,
                            data:valueArray,
                            backgroundColor: [
                                '#264653',
                                        '#2a9d8f',
                                        '#e9c46a',
                                        '#f4a261',
                                        '#e76f51',
                                        '#283618',
                                        '#e07a5f',
                                        '#3d405b',
                                        '#81b29a',
                                        '#f2cc8f',
                            ],
                            borderColor: [
                                '#264653',
                                '#2a9d8f',
                                '#e9c46a',
                                '#f4a261',
                                '#e76f51',
                                '#283618',
                                '#e07a5f',
                                '#3d405b',
                                '#81b29a',
                                '#f2cc8f',
                            ],
                            borderWidth: 1
                        },
                        
                    ]
                }} options={{maintainAspectRatio:false,scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }}} />
                    </div>
                    
                    <div><div className='chart-futter'>
                        <div className='des-section'>
                        <span className='des-intro'>Description:</span>
                        <p className='des-body'>{description}</p>
                        </div>
                        
                        <div className='user-section'>
                           <span className='username-intro'>created by:</span> <h4 className='username'>{privateData.username}</h4>
                        </div>
                    </div> </div>
                    <div className='btn-container'>
                        <button onClick={(e)=>{
                            
                            if(e.target.parentNode.parentNode.parentNode.className ==='chart-c'){ 
                                e.target.parentNode.parentNode.parentNode.children[0].className = 'pieChart expand-two'
                                e.target.parentNode.parentNode.parentNode.className = 'chart-c expand'
                            }else if(e.target.parentNode.parentNode.parentNode.className ==='chart-c expand'){ 
                                e.target.parentNode.parentNode.parentNode.children[0].className = 'pieChart'
                                e.target.parentNode.parentNode.parentNode.className = 'chart-c'
                            }
                           
                           
                            
                            
                       }} className='expand-btn'><BiFullscreen size={'1.2em'}/></button>
                       
                        </div>
                    </div>)
                    }
                    if(chart === 'Line'){
                        return(<div className='chart-c'>
                        <div key={v4()} className='pieChart'>
                        <Line data={{
                    labels: dataArray,
                    datasets: [
                        {
                            label:title,
                            data:valueArray,
                            backgroundColor: [
                                '#264653',
                                '#2a9d8f',
                                '#e9c46a',
                                '#f4a261',
                                '#e76f51',
                                '#283618',
                                '#e07a5f',
                                '#3d405b',
                                '#81b29a',
                                '#f2cc8f',
                            ],
                            borderColor: [
                                '#264653',
                                '#2a9d8f',
                                '#e9c46a',
                                '#f4a261',
                                '#e76f51',
                                '#283618',
                                '#e07a5f',
                                '#3d405b',
                                '#81b29a',
                                '#f2cc8f',
                            ],
                            borderWidth: 1
                        },
                        
                    ]
                }} options={{maintainAspectRatio:false,scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }}} />
                    </div>
                    
                    <div><div className='chart-futter'>
                        <div className='des-section'>
                        <span className='des-intro'>Description:</span>
                        <p className='des-body'>{description}</p>
                        </div>
                        
                        <div className='user-section'>
                           <span className='username-intro'>created by:</span> <h4 className='username'>{privateData.username}</h4>
                        </div>
                    </div> </div>
                    <div className='btn-container'>
                        <button onClick={(e)=>{
                            
                            if(e.target.parentNode.parentNode.parentNode.className ==='chart-c'){ 
                                e.target.parentNode.parentNode.parentNode.children[0].className = 'pieChart expand-two'
                                e.target.parentNode.parentNode.parentNode.className = 'chart-c expand'
                            }else if(e.target.parentNode.parentNode.parentNode.className ==='chart-c expand'){ 
                                e.target.parentNode.parentNode.parentNode.children[0].className = 'pieChart'
                                e.target.parentNode.parentNode.parentNode.className = 'chart-c'
                            }
                           
                           
                            
                            
                       }} className='expand-btn'><BiFullscreen size={'1.2em'}/></button>
                       
                        </div>
                    </div>)
                    }
                    if(chart === 'Radar'){
                        return(<div className='chart-c'>
                        <div key={v4()} className='pieChart'>
                        <Radar data={{
                    labels: dataArray,
                    datasets: [
                        {
                            label:title,
                            data:valueArray,
                            backgroundColor: [
                                '#264653',
                                '#2a9d8f',
                                '#e9c46a',
                                '#f4a261',
                                '#e76f51',
                                '#283618',
                                '#e07a5f',
                                '#3d405b',
                                '#81b29a',
                                '#f2cc8f',
                            ],
                            borderColor: [
                                '#264653',
                                        '#2a9d8f',
                                        '#e9c46a',
                                        '#f4a261',
                                        '#e76f51',
                                        '#283618',
                                        '#e07a5f',
                                        '#3d405b',
                                        '#81b29a',
                                        '#f2cc8f',
                            ],
                            borderWidth: 1
                        },
                        
                    ]
                }} options={{maintainAspectRatio:false,scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }}} />
                    </div>
                    
                    <div><div className='chart-futter'>
                        <div className='des-section'>
                        <span className='des-intro'>Description:</span>
                        <p className='des-body'>{description}</p>
                        </div>
                        
                        <div className='user-section'>
                           <span className='username-intro'>created by:</span> <h4 className='username'>{privateData.username}</h4>
                        </div>
                    </div> </div>
                    <div className='btn-container'>
                        <button onClick={(e)=>{
                            
                            if(e.target.parentNode.parentNode.parentNode.className ==='chart-c'){ 
                                e.target.parentNode.parentNode.parentNode.children[0].className = 'pieChart expand-two'
                                e.target.parentNode.parentNode.parentNode.className = 'chart-c expand'
                            }else if(e.target.parentNode.parentNode.parentNode.className ==='chart-c expand'){ 
                                e.target.parentNode.parentNode.parentNode.children[0].className = 'pieChart'
                                e.target.parentNode.parentNode.parentNode.className = 'chart-c'
                            }
                           
                           
                            
                            
                       }} className='expand-btn'><BiFullscreen size={'1.2em'}/></button>
                       
                        </div>
                    </div>)
                    }
                    if(chart === 'Polar'){
                        return(<div className='chart-c'>
                        <div key={v4()} className='pieChart'>
                        <Polar data={{
                    labels: dataArray,
                    datasets: [
                        {
                            label:title,
                            data:valueArray,
                            backgroundColor: [
                                '#264653',
                                        '#2a9d8f',
                                        '#e9c46a',
                                        '#f4a261',
                                        '#e76f51',
                                        '#283618',
                                        '#e07a5f',
                                        '#3d405b',
                                        '#81b29a',
                                        '#f2cc8f',
                            ],
                            borderColor: [
                                '#264653',
                                '#2a9d8f',
                                '#e9c46a',
                                '#f4a261',
                                '#e76f51',
                                '#283618',
                                '#e07a5f',
                                '#3d405b',
                                '#81b29a',
                                '#f2cc8f',
                            ],
                            borderWidth: 1
                        },
                        
                    ]
                }} options={{maintainAspectRatio:false,scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }}} />
                    </div>
                    
                    <div><div className='chart-futter'>
                        <div className='des-section'>
                        <span className='des-intro'>Description:</span>
                        <p className='des-body'>{description}</p>
                        </div>
                        
                        <div className='user-section'>
                           <span className='username-intro'>created by:</span> <h4 className='username'>{privateData.username}</h4>
                        </div>
                    </div> </div>
                    <div className='btn-container'>
                        <button onClick={(e)=>{
                            
                            if(e.target.parentNode.parentNode.parentNode.className ==='chart-c'){ 
                                e.target.parentNode.parentNode.parentNode.children[0].className = 'pieChart expand-two'
                                e.target.parentNode.parentNode.parentNode.className = 'chart-c expand'
                            }else if(e.target.parentNode.parentNode.parentNode.className ==='chart-c expand'){ 
                                e.target.parentNode.parentNode.parentNode.children[0].className = 'pieChart'
                                e.target.parentNode.parentNode.parentNode.className = 'chart-c'
                            }
                           
                           
                            
                            
                       }} className='expand-btn'><BiFullscreen size={'1.2em'}/></button>
                       
                        </div>
                    </div>)
                    }
                })}


          
       
       
       {/* <button onClick={addAnotherDataset} >add another dataset to compare ?</button> */}
        
        
            </div>  :''}
            </div>
            
        </>
    )
}

export default AddChartScreen;