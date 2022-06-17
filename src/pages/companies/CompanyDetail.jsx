import { useEffect } from "react";
import {index} from "../../data.js";


import { useParams, useLocation } from "react-router";

const CompanyDetail = () => {
  const { id } = useParams;

  // let location = useLocation();
  // let companies = location.state.companies;




  // const company = companies.find((company) => company.id === Number(index.id));

  // console.log(useParams());
  // console.log(company);
  // console.log("id: " + id);
  // console.log(companies);
  // console.log(location);
  console.log(index.data)

  // useEffect(()=>{
  //   console.log("id: " + id);
  // })


  return (
    <>
      <div>company detail</div>
      {/* <div>{index.data.attributes.name}</div> */}
    </>
  );
};

export default CompanyDetail;
