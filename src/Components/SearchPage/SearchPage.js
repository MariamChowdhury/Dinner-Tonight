import React from 'react';
const SearchPage = ({recipe}) => {
 const{label,image,url}=recipe.recipe
  return (
    <div>
      <div className="col-md-3">
      <div className="card h-100 my-2" style={{width:'18rem'}}>
  <img src={image} className="card-img-top" alt="" />
  <div className="card-body">
    <h5 className="card-title">{label}</h5>
    <a href={url} target='_blank' class="btn btn-dark">See Recipe!</a>
  </div>
</div>
      </div>
     
    </div>
  );
};

export default SearchPage;