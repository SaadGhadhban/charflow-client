import React from 'react'

function Pagination({postsPerPage,totalPosts,paginate,currentPage,setCurrentPage}) {
    const pageNumbers = []
   
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <nav className='page-nav'>
            <ul className='page-nav-list'>
            <li onClick={()=>{
                if(currentPage > 1){
                    paginate(currentPage-1)
                }
            }} className='page-nav-next'>Previous</li>
                {pageNumbers.map(item => {

                    if(item >= (currentPage +3) || item <= (currentPage -3) ){
                        return <span> ... </span>
                    }
                    return <li onClick={()=>paginate(item)} className={`page-nav-item ${item === currentPage? 'page-active':''} `} key={item}>
                        {item}
                    </li>
                })}
                <li onClick={()=>{
                if(currentPage < pageNumbers.length){
                    paginate(currentPage+1)
                }
            }} className='page-nav-next'>Next</li>
            </ul>
        </nav>
    )
}

export default Pagination
