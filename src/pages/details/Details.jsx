import React from 'react';
import "./style.scss";
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import DetailsBanner from './detailsBanner/DetailsBanner';

const Details = () => {

  // const {mediaType, id} = useParams();
  // const {data, loading} = useFetch(`/${mediaType}/${id}`)

  return (
    <div>
      <DetailsBanner/>
    </div>
  )
}

export default Details