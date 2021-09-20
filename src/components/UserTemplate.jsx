import React from 'react'
import {useDispatch} from 'react-redux'
import Loader from '../components/Loader'
import {getUserAsync} from '../features/Gigs/gigSlice'

const ReloadData = ()=>  {
    const dispatch = useDispatch()
    return (
        <div className ='d-flex justify-content-center align-items-center my-3'>
        <span>Something went</span>
        <button className ='btn btn-sm btn-outline-danger mx-2' onClick ={() => dispatch(getUserAsync())}>try again</button>
        </div>
    )
}
function UserTemplate({loading, error, children}) {

    if(loading) return <Loader />;
    if(error) return <ReloadData />

    return (
    <>

       { children}
        </>
    )
}

export default React.memo(UserTemplate)
