import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Message, useToaster } from 'rsuite';
import { setShowToast } from '../../redux/actions';
import { initialData } from '../../redux/reducers/allReducers';

function Toaster() {
  const toast = useSelector((state)=>state?.allReducers?.toast);
  const Toaster = useToaster();
  const dispatch = useDispatch(); 
  useEffect(()=>{
    if(toast.message){
      callGetToast()
    }
    // eslint-disable-next-line
  },[toast])
  const callGetToast = () =>{
    Toaster.push(<Message showIcon type={toast.type} closable>{toast.message}</Message>, {
      duration:2000,
      placement:"bottomEnd",
    });
    CloseToast();
  }

  const CloseToast = () =>{
    setTimeout(() => {
      dispatch(setShowToast(initialData.toast))
    }, 100);
  }
  return (
    <div >
      
    </div>
  )
}
export default React.memo(Toaster);