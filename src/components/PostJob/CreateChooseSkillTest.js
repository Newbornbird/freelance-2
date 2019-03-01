import React, { Component } from 'react';

class CreateChooseSkillTest extends Component {
  render() {
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
                      checked={ this.props.statusPostJob.createSkillTest }  
                      onChange={ this.props.MAKE_ACTIVE_CREATING_SKILL_TEST }
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
                      style={ this.props.statusPostJob.createSkillTest ? { 'color': 'red' } : { 'display': 'none' } }>
                      Please enter your skill test title and description
                    </span>
                    <input 
                      type="text"
                      name='promotion_title' 
                      placeholder="Skill Test Title" 
                      className="job-title form-control" 
                      disabled={ !this.props.statusPostJob.createSkillTest } 
                      style={ 
                        ( !this.props.statusPostJob.createSkillTest || this.props.requestForPostJob.promotion_title) ? {  } :
                        { 'backgroundColor': '#fff1f5', 'border': '2px solid #cb001f' }  }
                      value={ this.props.statusPostJob.createSkillTest ? this.props.requestForPostJob.promotion_title : "Skill Test Title" } 
                      onChange={ (event) => { this.props.CHANGE_STR_INP_FOR_POSTJOB(event)  } }/>
                    <textarea
                      name='promotion_description'
                      value={ this.props.statusPostJob.createSkillTest ? this.props.requestForPostJob.promotion_description : "Skill Test Description" } 
                      placeholder="Skill Test Description" 
                      className="form-control job-descr" 
                      rows="4" 
                      disabled={ !this.props.statusPostJob.createSkillTest }
                      style={ 
                        ( !this.props.statusPostJob.createSkillTest || this.props.requestForPostJob.promotion_description) ? {  } :
                        { 'backgroundColor': '#fff1f5', 'border': '2px solid #cb001f' }  }
                      onChange={ (event) => { this.props.CHANGE_STR_INP_FOR_POSTJOB(event)  } }>
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
                      checked={ !this.props.statusPostJob.createSkillTest }  
                      onChange={ this.props.MAKE_INACTIVE_CREATING_SKILL_TEST } />
                    <label htmlFor="promo-ch">
                      <span className="checkbox-sqw">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="radio-text">or choose existing skill test</span>
                    </label>
                  </div>
                  <span style={ !this.props.requestForPostJob.promotion_title && !this.props.statusPostJob.createSkillTest ? { 'color': 'red' } : { 'display': 'none' } }>
                    You need to choose one of skill test
                  </span>
                  <div className="promo-block-form">
                    <div className="promo-block-form-header flexbox justify-space-between">
                      <div className="filter-nav flexbox justify-space-between">
                        <div 
                          className={ this.props.promotionList ? "my-select-box form-control open" : "my-select-box form-control"}
                          >
                          <span className="my-select-result flexbox justify-space-between" onClick={ this.props.togglePromotionList }>
                            <span className="text">
                              { this.props.statusPostJob.activePromotionCategory ? 
                                  (this.props.statusPostJob.activePromotionCategory.length > 22 ?
                                    this.props.statusPostJob.activePromotionCategory.substring( 0, 22 ) + '...' : 
                                      this.props.statusPostJob.activePromotionCategory) : 
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
                                { this.props.promotions.categories.map( (category, index) => (
                                    <div className="radio" key={ index }>
                                      <input 
                                        type="radio"  
                                        name={ category.name }
                                        id={ category.id + "-term" }
                                        onChange={ () => {
                                          this.props.CHANGE_ACTIVE_PROMOTION_CATEGORY(category.name );
                                          this.props.changeActiveCategory();
                                        } }  
                                        checked={ this.props.requestForPostJob.promotion_title === category.name } />
                                      <label htmlFor={ category.id + "-term" } >
                                        <span className="radio-text">{ category.name }</span>
                                      </label>
                                    </div>
                                ) ) }
                            </div>	
                          </div>
                        </div>
                        <div className={ this.props.subCategoryList ? "my-select-box form-control open" : "my-select-box form-control" } >
                          <span className="my-select-result flexbox justify-space-between" onClick={ this.props.toggleSubCategoryList }>
                            <span className="text">
                                { this.props.activeSubCategory ? 
                                    (this.props.activeSubCategory.length > 22 ?
                                      this.props.activeSubCategory.substring(0,22) + '...' : 
                                        this.props.activeSubCategory) : 'Sub Category' }
                            </span> 
                            <span className="caret"></span>
                          </span>
                          <div className="my-select-options">
                            <div className="radio-block">
                              { this.props.statusPostJob.activePromotionCategory ? 
                                  this.props.promotions.categories
                                    .find(
                                      category => category.name === this.props.statusPostJob.activePromotionCategory
                                    )
                                    .skill_categories.map( (subCategory, index) => (
                                  <div className="radio" key={index}>
                                    <input 
                                      type="radio" 
                                      name={ subCategory.name } 
                                      id={ index + "-torm" } 
                                      value={ index + "-torm" } 
                                      onChange={ (event) => { 
                                        this.props.changeActiveSubCategory(event) 
                                      } }
                                      checked={ subCategory.name === this.props.activeSubCategory } />
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
                        { this.props.statusPostJob.activePromotionCategory ? 
                            this.props.promotions.promotions.filter( 
                              promotion => promotion.title === this.props.statusPostJob.activePromotionCategory ).length :
                                this.props.promotions.promotions.length }
                        </span> results
                      </div>
                    </div>
                    <div className="promo-block-form-body">
                    { this.props.statusPostJob.activePromotionCategory ?
                        this.props.promotions.promotions
                          .filter( promotion => promotion.title === this.props.statusPostJob.activePromotionCategory )
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
                                    this.props.CHOOSE_PROMOTION(prom.id, this.props.requestForPostJob.promotion.id, this.props.promotions.promotions); 
                                  } } >
                                  <div className="panel-block flexbox"  >
                                    <span className="checkbox-circle checkbox-sqw">
                                      <span 
                                        className="icon icon-check-mark" 
                                        style={ this.props.requestForPostJob.promotion.id === prom.id ? 
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
                            ) ) : this.props.promotions.promotions.map((prom, index) => (
                              <div className="checkbox-block" key={ index } >
                                <input
                                  value={ prom.id } 
                                  type="checkbox" 
                                  id={ "skill-test-" + index }  
                                />
                                <label htmlFor={ "skill-test-" + index } 
                                  onClick={ () => {
                                    this.props.CHOOSE_PROMOTION(prom.id, this.props.requestForPostJob.promotion.id, this.props.promotions.promotions)
                                  } }>
                                  <div className="panel-block flexbox"  >
                                    <span className="checkbox-circle checkbox-sqw">
                                      <span className="icon icon-check-mark" 
                                        style={ this.props.requestForPostJob.promotion.id === prom.id ? 
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

export default CreateChooseSkillTest;