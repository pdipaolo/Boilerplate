import React, { useEffect } from 'react';
import { useAppDispatch } from '../../redux';
import { presentLoading } from '../../components/Loader/slices';

function Intro() {
  const dispatch = useAppDispatch();
  useEffect(()=>{
    console.log('reoler')
    dispatch(presentLoading())
  },[])

  return (
    <>
    </>
  );
}

export default Intro;
