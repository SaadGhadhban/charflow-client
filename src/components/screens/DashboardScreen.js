import {useState,useEffect,memo} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

import './DashboardScreen.css';
import {v4 as uuidv4, v4} from 'uuid';
import {useUserContext} from '../../UserContext';
import {Bar,Doughnut,Line, Radar,Polar } from 'react-chartjs-2';
import {FaRegChartBar,FaChartPie} from 'react-icons/fa';
import {AiOutlineLineChart,AiOutlineRadarChart} from 'react-icons/ai';
import {BiDoughnutChart,BiFullscreen} from 'react-icons/bi';
import {MdClear} from 'react-icons/md';
import {IoIosLock} from 'react-icons/io';
import {IoEarth} from 'react-icons/io5'
import Pagination from './Pagination';


const MainScreen = ({history})=> {
    
    const {
        error,setError,privateData,setPrivateData
            } = useUserContext();

            const [dataList,setDataList] = useState([]);
            const [lineCharts,setLineCharts] = useState([]);
            const [barCharts,setBarCharts] = useState([]);
            const [doughnutCharts,setDoughnutCharts] = useState([]);
            const [radarCharts,setRadarCharts] = useState([]);
            const [polarCharts,setPolarCharts] = useState([]);
            const [expand,setExpand] = useState(false);
            const [view,setView] = useState([]);
            const [numberOfData,setNumberOfData]= useState(10);
            const [chartFilter,setChartFilter] = useState('')

            
            const [currentPage,setCurrentPage]= useState(1)
            const [postsPerPage]=useState(4);

            
            

            const indexOfLastPost = currentPage * postsPerPage;
            const indexOfFirstPost = indexOfLastPost - postsPerPage;
            const currentPosts = dataList.slice(indexOfFirstPost,indexOfLastPost);
            
            const paginate = (pageNumber) => setCurrentPage(pageNumber);

            

            const countCharts = (data) =>{
                for (let i = 0; i < data.length; i++) {
                    for(let j = 0; j < data[i].chartType.length; j++ ){
                        if(data[i].chartType[j]=== 'Line'){
                            setLineCharts(lineCharts => [...lineCharts,data[i].chartType[j]])
                        }
                        if(data[i].chartType[j]=== 'Bar'){
                            setBarCharts(barCharts => [...barCharts,data[i].chartType[j]])
                        }
                        if(data[i].chartType[j]=== 'Doughnut'){
                            setDoughnutCharts(doughnutCharts => [...doughnutCharts,data[i].chartType[j]])
                        }
                        if(data[i].chartType[j]=== 'Radar'){
                            setRadarCharts(radarCharts => [...radarCharts,data[i].chartType[j]])
                        }
                        if(data[i].chartType[j]=== 'Polar'){
                            setPolarCharts(polarCharts => [...polarCharts,data[i].chartType[j]])
                        }
                    }
                  }
            }
            
            

            useEffect(()=>{

                const fetchData = async()=>{
                    
                    const config = {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization : `Bearer ${localStorage.getItem('authToken')}`
                        }
                    }

        try {
            setLineCharts([]);
            setBarCharts([]);
            setDoughnutCharts([]);
            setRadarCharts([]);
            setPolarCharts([]);
                const {data} = await axios.get('/api/private/privatecharts',config);
                
                 if(data.data){
                    setDataList(data.data.usercharts.charts.reverse());
                    setView([...data.data.usercharts.charts].slice(0,numberOfData))
                    setPrivateData(data.data.username)
                     
                     
                 }
        } catch (error) {
            setError('something went wrong')
        }
                }
                fetchData();

            },[history])
            useEffect(()=>{

                const fetchData = async()=>{
                    
                    const config = {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization : `Bearer ${localStorage.getItem('authToken')}`
                        }
                    }

        try {

                setLineCharts([]);
                setBarCharts([]);
                setDoughnutCharts([]);
                setRadarCharts([]);
                setPolarCharts([]);

                const {data} = await axios.get('/api/private/privatecharts',config);
               
                setDataList(data.data.usercharts.charts.reverse());
                countCharts(data.data.usercharts.charts);
                setPrivateData(data.data.username)
                setView([...data.data.usercharts.charts].slice(0,numberOfData))
                
        } catch (error) {
            setError('something went wrong')
        }


                }
                fetchData();

            },[numberOfData])
    
            const handleLogout = ()=>{
                localStorage.removeItem('authToken');
                history.push('/')
            };

    return (
        <div className='main'>
            <div className='main-nav-container'>
    
            <h3 className='main-nav'>Dashboard / {privateData}</h3>
            </div>
            <div className='boxes-contaier'>
            {expand?<div className='shadow'></div>:''}
                <div className='box box-one' onClick={()=> setChartFilter('Bar')}>
                    <FaRegChartBar size='3em' className='chart-icon'/>
                    <div className='box-data'>
                    <h4 className='chart-count'>{barCharts.length} </h4>
                    
                    <p className='chart-name'>Bar Charts</p>
                    
                    </div>
                    </div>
                <div className='box box-two' onClick={()=> setChartFilter('Line')}>
                <AiOutlineLineChart size='3em' className='chart-icon'/>
                <div className='box-data'>
                <h4 className='chart-count'>{lineCharts.length} </h4>
                    <p className='chart-name'>Line Charts</p>
                </div>
                    </div>
                <div className='box box-three' onClick={()=> setChartFilter('Doughnut')}>
                <BiDoughnutChart size='3em' className='chart-icon'/>
                <div className='box-data'>
                <h4 className='chart-count'>{doughnutCharts.length} </h4>
                    <p className='chart-name'>Doughnut Charts</p>
                    </div>
                    </div>
                <div className='box box-four'onClick={()=> setChartFilter('Radar')}>
                <AiOutlineRadarChart size='3em' className='chart-icon'/>
                <div className='box-data'>
                <h4 className='chart-count'>{radarCharts.length} </h4>
                    <p className='chart-name'>Radar Charts</p>
                    </div>
                    </div>
                <div className='box box-five' onClick={()=> setChartFilter('Polar')}>
                <FaChartPie size='3em' className='chart-icon'/>
                <div className='box-data'>
                <h4 className='chart-count'>{polarCharts.length} </h4>
                    <p className='chart-name'>Polar Charts</p>
                    </div>
                    </div>
            </div>
            {chartFilter? <div className='reset-btn-container'>
                
                 <button className='reset-btn' onClick={()=>setChartFilter('')}> <MdClear size={'1.5em'} color={'#e76f51'} /> Reset filter</button>
             </div>:''}
            <div className='charts-wrapper'>
             
                
                {chartFilter? dataList.map((item ,j)=>{
                    const {data,description,chartType} = item;
                    const isPrivate = item.private;
                    const {datasets,labels,title} = data;
                         return chartType.map((chart,i)=> {
                            if(chartFilter === chart && chart === 'Bar'){
                                return (<div key={v4()} className='chart-c'>
                                   
                                <div key={v4()} className='pieChart'>
                                <Bar key={v4()} data={{
                            labels: labels,
                            datasets: [
                                {
                                    label:title,
                                    data:datasets,
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
                            <div className='chart-futter'>
                                <div className='des-section'>
                                <span className='username-intro'>Description:</span>
                                <p className='des-body'>{description}</p>
                                </div>
                                
                                <div className='user-section'>
                                   <span className='username-intro'>created by:</span> <h4 className='username'>{privateData}</h4>
                                   
                                </div>
                                
                            </div>
                            
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
                                {isPrivate? <IoIosLock className='futter-icon' size='1em'/> : <IoEarth className='futter-icon' />}
                                </div>
                             </div> )
                            }
                            if(chartFilter === chart && chart === 'Doughnut'){
                                return(<div className='chart-c'>
                                <div key={v4()} className='pieChart'>
                                <Doughnut key={v4()} data={{
                            labels: labels,
                            datasets: [
                                {
                                    label:title,
                                    data:datasets,
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
                            <div className='chart-futter'>
                                <div className='des-section'>
                                <span className='username-intro'>Description:</span>
                                <p className='des-body'>{description}</p>
                                </div>
                                
                                <div className='user-section'>
                                   <span className='username-intro'>created by:</span> <h4 className='username'>{privateData}</h4>
                                </div>
                            </div>
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
                               {isPrivate? <IoIosLock className='futter-icon' size='1em'/> : <IoEarth className='futter-icon' />}
                                </div>
                             </div>)
                            }
                            if(chartFilter === chart && chart === 'Line'){
                                return(<div key={v4()} className='chart-c'>
                                <div key={v4()} className='pieChart'>
                                <Line key={v4()} data={{
                            labels: labels,
                            datasets: [
                                {
                                    label:title,
                                    data:datasets,
                                    fill:false,
                                    borderCapStyle:'square',
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
                                <span className='username-intro'>Description:</span>
                                <p className='des-body'>{description}</p>
                                </div>
                                
                                <div className='user-section'>
                                   <span className='username-intro'>created by:</span> <h4 className='username'>{privateData}</h4>
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
                               {isPrivate? <IoIosLock className='futter-icon' size='1em'/> : <IoEarth className='futter-icon' />}
                                </div>
                             </div>)
                            }
                            if(chartFilter === chart && chart ==='Radar'){
                                return(<div className='chart-c'>
                                <div key={v4()} className='pieChart'>
                                <Radar key={v4()} data={{
                            labels: labels,
                            datasets: [
                                {
                                    label:title,
                                    data:datasets,
                                    backgroundColor: [
                                        '#264653',
                                        '#2a9d8f',
                                        '#e9c46a',
                                        '#f4a261',
                                        '#e76f51',
                                        '#f4f1de',
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
                                        '#f4f1de',
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
                                <span className='username-intro'>Description:</span>
                                <p className='des-body'>{description}</p>
                                </div>
                                
                                <div className='user-section'>
                                   <span className='username-intro'>created by:</span> <h4 className='username'>{privateData}</h4>
                                </div>
                            </div></div>
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
                               {isPrivate? <IoIosLock className='futter-icon' size='1em'/> : <IoEarth className='futter-icon' />}
                                </div>
                             </div>)
                            }
                            if(chartFilter === chart && chart ==='Polar'){
                                return(<div className='chart-c'>
                                <div key={v4()} className='pieChart'>
                                <Polar key={v4()} data={{
                            labels: labels,
                            datasets: [
                                {
                                    label:title,
                                    data:datasets,
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
                                   <span className='username-intro'>created by:</span> <h4 className='username'>{privateData}</h4>
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
                               {isPrivate? <IoIosLock className='futter-icon' size='1em'/> : <IoEarth className='futter-icon' />}
                                </div>
                            </div>)
                            }
                        }) 
                         
                             
                         
                        
                    }
                    ): ''}

            
            {/* <InfiniteScroll 
             dataLength={barCharts.length + lineCharts.length +doughnutCharts.length+radarCharts.length + polarCharts.length}
              next={()=>setNumberOfData(numberOfData => numberOfData + 10)}
               hasMore={true}
               
               className='charts-wrapper'
               
                 > */}
            {dataList && !chartFilter? currentPosts.map((item ,j)=>{
            const {data,description,chartType} = item;
            const isPrivate = item.private;
            const {datasets,labels,title} = data;
                 return chartType.map((chart,i)=> {
                    if(chart === 'Bar'){
                        return (<div key={v4()} className='chart-c'>
                           
                        <div key={v4()} className='pieChart'>
                        <Bar key={v4()} data={{
                    labels: labels,
                    datasets: [
                        {
                            label:title,
                            data:datasets,
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
                    <div className='chart-futter'>
                        <div className='des-section'>
                        <span className='username-intro'>Description:</span>
                        <p className='des-body'>{description}</p>
                        </div>
                        
                        <div className='user-section'>
                           <span className='username-intro'>created by:</span> <h4 className='username'>{privateData}</h4>
                           
                        </div>
                        
                    </div>
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
                        {isPrivate? <IoIosLock className='futter-icon' size='1em'/> : <IoEarth className='futter-icon' />}
                        </div>
                     </div> )
                    }
                    if(chart === 'Doughnut'){
                        return(<div className='chart-c'>
                        <div key={v4()} className='pieChart'>
                        <Doughnut key={v4()} data={{
                    labels: labels,
                    datasets: [
                        {
                            label:title,
                            data:datasets,
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
                    <div className='chart-futter'>
                        <div className='des-section'>
                        <span className='username-intro'>Description:</span>
                        <p className='des-body'>{description}</p>
                        </div>
                        
                        <div className='user-section'>
                           <span className='username-intro'>created by:</span> <h4 className='username'>{privateData}</h4>
                        </div>
                    </div>
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
                       {isPrivate? <IoIosLock className='futter-icon' size='1em'/> : <IoEarth className='futter-icon' />}
                        </div>
                     </div>)
                    }
                    if(chart === 'Line'){
                        return(<div className='chart-c'>
                        <div key={v4()} className='pieChart'>
                        <Line key={v4()} data={{
                    labels: labels,
                    datasets: [
                        {
                            label:title,
                            data:datasets,
                            fill:false,
                            borderCapStyle:'square',
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
                        <span className='username-intro'>Description:</span>
                        <p className='des-body'>{description}</p>
                        </div>
                        
                        <div className='user-section'>
                           <span className='username-intro'>created by:</span> <h4 className='username'>{privateData}</h4>
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
                       {isPrivate? <IoIosLock className='futter-icon' size='1em'/> : <IoEarth className='futter-icon' />}
                        </div>
                     </div>)
                    }
                    if(chart === 'Radar'){
                        return(<div className='chart-c'>
                        <div key={v4()} className='pieChart'>
                        <Radar key={v4()} data={{
                    labels: labels,
                    datasets: [
                        {
                            label:title,
                            data:datasets,
                            backgroundColor: [
                                '#264653',
                                '#2a9d8f',
                                '#e9c46a',
                                '#f4a261',
                                '#e76f51',
                                '#f4f1de',
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
                                '#f4f1de',
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
                        <span className='username-intro'>Description:</span>
                        <p className='des-body'>{description}</p>
                        </div>
                        
                        <div className='user-section'>
                           <span className='username-intro'>created by:</span> <h4 className='username'>{privateData}</h4>
                        </div>
                    </div></div>
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
                       {isPrivate? <IoIosLock className='futter-icon' size='1em'/> : <IoEarth className='futter-icon' />}
                        </div>
                     </div>)
                    }
                    if(chart === 'Polar'){
                        return(<div className='chart-c'>
                        <div key={v4()} className='pieChart'>
                        <Polar key={v4()} data={{
                    labels: labels,
                    datasets: [
                        {
                            label:title,
                            data:datasets,
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
                           <span className='username-intro'>created by:</span> <h4 className='username'>{privateData}</h4>
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
                       {isPrivate? <IoIosLock className='futter-icon' size='1em'/> : <IoEarth className='futter-icon' />}
                        </div>
                    </div>)
                    }
                }) 
                 
                     
                 
                
            }
            )
             
                 
                 :''}
                 
                 </div>
                 <Pagination postsPerPage={postsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPosts={dataList.length} paginate={paginate} />
        </div>
    )
}

export default MainScreen

