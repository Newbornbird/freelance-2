import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateChooseSkillTest extends Component {
  render() {
    let { statusPostJob,  requestForPostJob,  promotions, makeActiveCreatingSkillTest, makeInActiveCreatingSkillTest, 
      changeStrInpForPostJob,  changeActivePromotionCategory,  choosePromotion,  changeActiveCategory, 
      togglePromotionList, toggleSubCategoryList, changeActiveSubCategory, promotionList, 
      subCategoryList, activeSubCategory } = this.props;
    return (
      <div className="form-block">
              <div className="form-block-wrapper promo-sample-block">
                <div className="radio-block">
                  <div className="radio">
                    <input 
                      type="radio" 
                      name="promo-sample" 
                      id="promo-cr" 
                      value="promo-cr" 
                      checked={ statusPostJob.createSkillTest }  
                      onChange={ makeActiveCreatingSkillTest }
                      />
                    <label htmlFor="promo-cr">
                      <span className="checkbox-sqw">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="radio-text">Create Skill Test</span>
                    </label>
                  </div>
                  <div className="post-job-inputs">
                    <span 
                      style={ statusPostJob.createSkillTest ? { 'color': 'red' } : { 'display': 'none' } }>
                      Please enter your skill test title and description
                    </span>
                    <input 
                      type="text"
                      name='promotion_title' 
                      placeholder="Skill Test Title" 
                      className="job-title form-control" 
                      disabled={ !statusPostJob.createSkillTest } 
                      style={ 
                        ( !statusPostJob.createSkillTest || requestForPostJob.promotion_title) ? {  } :
                        { 'backgroundColor': '#fff1f5', 'border': '2px solid #cb001f' }  }
                      value={ statusPostJob.createSkillTest ? requestForPostJob.promotion_title : "Skill Test Title" } 
                      onChange={ (event) => { changeStrInpForPostJob(event)  } }/>
                    <textarea
                      name='promotion_description'
                      value={ statusPostJob.createSkillTest ? requestForPostJob.promotion_description : "Skill Test Description" } 
                      placeholder="Skill Test Description" 
                      className="form-control job-descr" 
                      rows="4" 
                      disabled={ !statusPostJob.createSkillTest }
                      style={ 
                        ( !statusPostJob.createSkillTest || requestForPostJob.promotion_description) ? {  } :
                        { 'backgroundColor': '#fff1f5', 'border': '2px solid #cb001f' }  }
                      onChange={ (event) => { changeStrInpForPostJob(event)  } }>
                    </textarea>
                  </div> 
                  {/* <button class="btn btn-bold btn-blue">Create Promotion</button> */}
                </div>
                <div className="radio-block">
                  <div className="radio">
                    <input 
                      type="radio" 
                      name="promo-sample" 
                      id="promo-ch" 
                      value="promo-ch" 
                      checked={ !statusPostJob.createSkillTest }  
                      onChange={ makeInActiveCreatingSkillTest } />
                    <label htmlFor="promo-ch">
                      <span className="checkbox-sqw">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="radio-text">or choose existing skill test</span>
                    </label>
                  </div>
                  <span style={ !requestForPostJob.promotion_title && !statusPostJob.createSkillTest ? { 'color': 'red' } : { 'display': 'none' } }>
                    You need to choose one of skill test
                  </span>
                  <div className="promo-block-form">
                    <div className="promo-block-form-header flexbox justify-space-between">
                      <div className="filter-nav flexbox justify-space-between">
                        <div 
                          className={ promotionList ? "my-select-box form-control open" : "my-select-box form-control"}
                          >
                          <span className="my-select-result flexbox justify-space-between" onClick={ togglePromotionList }>
                            <span className="text">
                              { statusPostJob.activePromotionCategory ? 
                                  (statusPostJob.activePromotionCategory.length > 22 ?
                                    statusPostJob.activePromotionCategory.substring( 0, 22 ) + '...' : 
                                      statusPostJob.activePromotionCategory) : 
                                        'Category' }
                            
                              {/* { this.props.requestForPostJob.promotion_title ? 
                                (this.props.requestForPostJob.promotion_title.length > 22 ?
                                  this.props.requestForPostJob.promotion_title.substring( 0, 22 ) + '...' : 
                                    this.props.requestForPostJob.promotion_title) : 
                                      'Category' } */}
                            </span> 
                            <span className="caret"></span>
                          </span>
                          <div className="my-select-options">
                            <div className="radio-block">
                                { promotions.categories.map( (category, index) => (
                                    <div className="radio" key={ index }>
                                      <input 
                                        type="radio"  
                                        name={ category.name }
                                        id={ category.id + "-term" }
                                        onChange={ () => {
                                          changeActivePromotionCategory(category.name );
                                          changeActiveCategory();
                                        } }  
                                        checked={ requestForPostJob.promotion_title === category.name } />
                                      <label htmlFor={ category.id + "-term" } >
                                        <span className="radio-text">{ category.name }</span>
                                      </label>
                                    </div>
                                ) ) }
                            </div>	
                          </div>
                        </div>
                        <div className={ subCategoryList ? "my-select-box form-control open" : "my-select-box form-control" } >
                          <span className="my-select-result flexbox justify-space-between" onClick={ toggleSubCategoryList }>
                            <span className="text">
                                { activeSubCategory ? 
                                    (activeSubCategory.length > 22 ?
                                      activeSubCategory.substring(0,22) + '...' : 
                                        activeSubCategory) : 'Sub Category' }
                            </span> 
                            <span className="caret"></span>
                          </span>
                          <div className="my-select-options">
                            <div className="radio-block">
                              { statusPostJob.activePromotionCategory ? 
                                  promotions.categories
                                    .find(
                                      category => category.name === statusPostJob.activePromotionCategory
                                    )
                                    .skill_categories.map( (subCategory, index) => (
                                  <div className="radio" key={index}>
                                    <input 
                                      type="radio" 
                                      name={ subCategory.name } 
                                      id={ index + "-torm" } 
                                      value={ index + "-torm" } 
                                      onChange={ (event) => { 
                                        changeActiveSubCategory(event) 
                                      } }
                                      checked={ subCategory.name === activeSubCategory } />
                                    <label htmlFor={ index + "-torm" }>
                                      <span className="radio-text">{ subCategory.name }</span>
                                    </label> 
                                  </div>
                              ) ) : '' }
                            </div>	
                          </div>
                        </div>
                      </div>
                      <div className="results-numb">
                        <span className="numb">
                        { statusPostJob.activePromotionCategory ? 
                            promotions.promotions.filter( 
                              promotion => promotion.title === statusPostJob.activePromotionCategory ).length :
                                promotions.promotions.length }
                        </span> results
                      </div>
                    </div>
                    <div className="promo-block-form-body">
                    { statusPostJob.activePromotionCategory ?
                        promotions.promotions
                          .filter( promotion => promotion.title === statusPostJob.activePromotionCategory )
                            .map( (prom, index) => (
                              <div className="checkbox-block" key={ index } >
                                <input 
                                  type="checkbox" 
                                  id={ "skill-test-" + index } 
                                  value={ prom.id } 
                                  />
                                <label 
                                  htmlFor={ "skill-test-" + index } 
                                  onClick={ () => {
                                    choosePromotion(prom.id, requestForPostJob.promotion.id, promotions.promotions); 
                                  } } >
                                  <div className="panel-block flexbox"  >
                                    <span className="checkbox-circle checkbox-sqw">
                                      <span 
                                        className="icon icon-check-mark" 
                                        style={ requestForPostJob.promotion.id === prom.id ? 
                                          { 'visibility': 'visible', 'fontSize': '10px' } : { 'visibility': 'hidden' } }>
                                        
                                      </span>
                                    </span>
                                    <div className="panel-wrapper" >
                                      <div 
                                        className="panel panel-blue" 
                                        style={ 
                                          ((index + 1) % 3) ? ((index + 1) % 2) ? { 'width': '500px' } : 
                                            { 'width': '500px', 'backgroundColor': '#ffeecd'} : { 'width': '500px', 'backgroundColor': '#fae2ff'}
                                        }
                                          >
                                        <div className="panel-title flexbox justify-space-between">
                                          <span style={
                                          ((index + 1) % 3) ? ((index + 1) % 2) ? {  } : 
                                          { 'color': '#ffa51e'} : { 'color': '#b774c5'}}>
                                            { prom.title }
                                          </span>
                                        </div>
                                        <div className="panel-text" style={{ 'color': '#676865'}}>
                                          { prom.description } 
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </label>
                              </div>
                            ) ) : promotions.promotions.map((prom, index) => (
                              <div className="checkbox-block" key={ index } >
                                <input
                                  value={ prom.id } 
                                  type="checkbox" 
                                  id={ "skill-test-" + index }  
                                />
                                <label htmlFor={ "skill-test-" + index } 
                                  onClick={ () => {
                                    choosePromotion(prom.id, requestForPostJob.promotion.id, promotions.promotions)
                                  } }>
                                  <div className="panel-block flexbox"  >
                                    <span className="checkbox-circle checkbox-sqw">
                                      <span className="icon icon-check-mark" 
                                        style={ requestForPostJob.promotion.id === prom.id ? 
                                          { 'visibility': 'visible', 'fontSize': '10px' } : { 'visibility': 'hidden' } }>

                                      </span>
                                    </span>
                                    <div className="panel-wrapper" >
                                      <div 
                                        className="panel panel-blue" 
                                        style={((index + 1) % 3) ? ((index + 1) % 2) ? { 'width': '500px' } : { 'width': '500px', 'backgroundColor': '#ffeecd'} : { 'width': '500px', 'backgroundColor': '#fae2ff'}}>
                                        <div className="panel-title flexbox justify-space-between">
                                          <span style={
                                          ((index + 1) % 3) ? ((index + 1) % 2) ? {  } : 
                                          { 'color': '#ffa51e'} : { 'color': '#b774c5'}}>
                                            { prom.title }
                                          </span>
                                        </div>
                                        <div className="panel-text" style={{ 'color': '#676865'}}>
                                          { prom.description } 
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </label>
                              </div>
                            )) }
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
  }
}

CreateChooseSkillTest.propTypes = {
  promotions: PropTypes.object,
  requestForPostJob: PropTypes.object,
  statusPostJob: PropTypes.object,
  choosePromotion: PropTypes.func,
  changeActivePromotionCategory: PropTypes.func,
  changeStrInpForPostJob: PropTypes.func,
  makeActiveCreatingSkillTest: PropTypes.func,
  makeInActiveCreatingSkillTest: PropTypes.func,
  changeActiveCategory: PropTypes.func,
  togglePromotionList: PropTypes.func,
  toggleSubCategoryList: PropTypes.func,
  changeActiveSubCategory: PropTypes.func,
  promotionList: PropTypes.bool,
  subCategoryList: PropTypes.bool,
  activeSubCategory: PropTypes.string
}
  
export default CreateChooseSkillTest;