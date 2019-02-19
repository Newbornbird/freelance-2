import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
// import Modal from 'react-modal';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GET_SKILLS, GET_PROMOTIONS, 
  CHOOSE_CATEGORY, CHOOSE_SKILL_CATEGORY, 
  CHOOSE_PROMOTION, CHANGE_STR_INP_FOR_POSTJOB, 
  GET_BONUS_SKILLS, CHANGE_CHECKBOX_FOR_POSTJOB, POST_JOB } from '../../actions'


class PostJob extends Component {
  constructor() {
    super();
    this.state = {
      createSkillTest: true,
      promotionList: false,
      subCategoryList: false,
      activeCategory: '',
      activeSubCategory: '',
      hourlyPriceIsDisabled: false,
      periodTypeIsOpened: false,
      consent: false,
      chosenPromotion: ''
    }
  }

  makeCreateSkillTestActive = () => {
    this.setState({ createSkillTest: !this.state.createSkillTest });
  }

  togglePromotionList = () => { 
    this.setState({ promotionList: !this.state.promotionList });
  }

  toggleSubCategoryList = () => {
    this.setState({ subCategoryList: !this.state.subCategoryList });
  }

  closeSubCategoryList = () => {
    this.setState({ subCategoryList: false });
  }

  changeActiveCategory = (index) => {
    this.setState({ activeCategory: index });
    this.setState({ promotionList: false });
  }

  changeActiveSubCategory = (event) => {
    this.setState({ activeSubCategory: event.target.name });
    this.setState( { subCategoryList: false  } );
  }

  makeTrueHourlyPriceIsDisabled = () => {
    this.setState({ hourlyPriceIsDisabled: true })

  }

  makeFalseHourlyPriceIsDisabled = () => {
    this.setState({ hourlyPriceIsDisabled: false })
  }

  togglePeriodTypeList = () => {
    this.setState({ periodTypeIsOpened: !this.state.periodTypeIsOpened })
  }

  toggleConsent = () => {
    this.setState({ consent: !this.state.consent })
  }

  CloseModal = () => {
    this.setState({ showModal: false });
  }

  choosePromotion = (id) => {
    id === this.state.chosenPromotion ? 
      this.setState( { chosenPromotion: '' } ) : this.setState({ chosenPromotion: id })
      
  }

  componentDidMount() {
    this.props.GET_SKILLS();
    this.props.GET_PROMOTIONS();
  }

  render() {
    if( this.props.promotions.categories ) {
      return(
        <Modal open={this.props.isOpen} onClose={ this.props.openModal } > 
          <button onClick={ () => { console.log(this.props) } }>
            Props
          </button>
          <button onClick={ () => { console.log(this.state) } }>
            State
          </button>

          <div className="post-job-title blue-color">Post a Job</div>
          <div className="post-job-form panel panel-default" style={ { 'overflow': 'visible' } }>
            <div className="form-block">
              <div className="post-job-inputs form-block-wrapper">
                <input
                  name='title' 
                  type="text" 
                  placeholder="Job Title" 
                  className="job-title form-control" 
                  style={ this.props.requestForPostJob.title ? {  } : { 'backgroundColor': '#fff1f5', 'border': '2px solid #cb001f' }}
                  value={ this.props.requestForPostJob.title }
                  onChange={ (event) => { this.props.CHANGE_STR_INP_FOR_POSTJOB(event) } }
                  />
                <textarea 
                  placeholder="Job Description" 
                  className="form-control job-descr" 
                  rows="4"
                  style={ this.props.requestForPostJob.description ? {  } : { 'backgroundColor': '#fff1f5', 'border': '2px solid #cb001f' }}
                  name='description'
                  onChange={ (event) => { this.props.CHANGE_STR_INP_FOR_POSTJOB(event) } }
                  value={ this.props.requestForPostJob.description }>
                </textarea>
              </div>
            </div>
            <div className="form-block">
              <div className="skill-block skill-cat">
                <div className="skill-block-title">
                  <div className="form-block-wrapper">
                    Choose Your Skill Category
                    <span className="icon icon-down-arrow"></span>
                  </div>
                </div>
                <div className="skill-block-list" >
                  <form className="form-block-wrapper flexbox flex-wrap">
                    { this.props.skills.map( skill => 
                        (<div className="checkbox-block" key={ skill.id }>
                          <input 
                            type="checkbox" 
                            id={"cat" + skill.id } 
                            name={ skill.name } 
                            onClick={ () => { this.props.CHOOSE_CATEGORY(skill) } }
                            checked={ this.props.requestForPostJob.category.name === skill.name }
                            />
                          <label for={"cat" + skill.id }>
                            <span className="checkbox-circle">
                              <span className="icon icon-check-mark"></span>
                            </span>
                            <span className="checkbox-text">{ skill.name }</span>
                          </label>
                        </div>)
                    ) }
                  </form>
                </div>
              </div>
              <div className="skill-subcat" style={ this.props.requestForPostJob.category.name ? {  } : { 'display': 'none' } }>
                <div className="flexbox justify-space-between form-block-wrapper">
                  <div className="skill-block">
                    <div className="skill-block-title">
                      { this.props.requestForPostJob.category.name ? this.props.requestForPostJob.category.name : '' }
                    </div>
                    <div className="skill-block-list">
                      <form>
                        { this.props.requestForPostJob.category.name ? 
                          this.props.requestForPostJob.category.skill_categories.map( (subSkill, index) => (
                            <div className="checkbox-block" key={ index }>
                              <input 
                                type="checkbox" 
                                id={"math-" + index} 
                                name='' 
                                onClick={ () => { this.props.CHOOSE_SKILL_CATEGORY(index, this.props.requestForPostJob.category.skill_categories) } } 
                                checked={ this.props.requestForPostJob.category.skill_categories[index].selected } />
                              <label for={"math-" + index}>
                                <span className="checkbox-circle">
                                  <span className="icon icon-check-mark"></span>
                                </span>
                                <span className="checkbox-text"> { subSkill.name } </span>
                              </label>
                            </div>
                        ) ) : '' }
                      </form>
                    </div>
                  </div>
                  <div className="skill-sub-block">
                    <form className="form-group">
                      <input type="text" className="form-control" placeholder="Write new skill" />
                      <button className="add-btn btn btn-blue">
                        <span className="icon icon-add"></span>
                      </button>
                    </form>
                    <div className="skill-tags-block clearfix">
                      {/* <div class="skill-tag">Math</div>
                      <div class="skill-tag">Trigonometry</div>
                      <div class="skill-tag">Calculus</div>
                      <div class="skill-tag">Trigonometry</div>
                      <div class="skill-tag">Calculus</div>
                      <div class="skill-tag">Trigonometry</div>
                      <div class="skill-tag">Calculus</div>
                      <div class="skill-tag">Math</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-block">
              <div className="form-block-wrapper promo-sample-block">
                <div className="radio-block">
                  <div className="radio">
                    <input 
                      type="radio" 
                      name="promo-sample" 
                      id="promo-cr" 
                      value="promo-cr" 
                      checked={ this.state.createSkillTest }  
                      onChange={ this.makeCreateSkillTestActive }
                      />
                    <label for="promo-cr">
                      <span className="checkbox-sqw">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="radio-text">Create Skill Test</span>
                    </label>
                  </div>
                  <div className="post-job-inputs">
                    <input 
                      type="text"
                      name='promotion_title' 
                      placeholder="Skill Test Title" 
                      className="job-title form-control" 
                      disabled={ !this.state.createSkillTest } 
                      style={ 
                        ( !this.state.createSkillTest || this.props.requestForPostJob.promotion_title) ? {  } :
                        { 'backgroundColor': '#fff1f5', 'border': '2px solid #cb001f' }  }
                      value={ this.props.requestForPostJob.promotion_title } 
                      onChange={ (event) => { this.props.CHANGE_STR_INP_FOR_POSTJOB(event)  } }/>
                    <textarea
                      name='promotion_description'
                      value={ this.props.requestForPostJob.promotion_description } 
                      placeholder="Skill Test Description" 
                      className="form-control job-descr" 
                      rows="4" 
                      disabled={ !this.state.createSkillTest }
                      style={ 
                        ( !this.state.createSkillTest || this.props.requestForPostJob.promotion_description) ? {  } :
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
                      checked={ !this.state.createSkillTest } 
                      onChange={ this.makeCreateSkillTestActive } />
                    <label for="promo-ch">
                      <span className="checkbox-sqw">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="radio-text">or choose existing skill test</span>
                    </label>
                  </div>
                  <div className="promo-block-form">
                    <div className="promo-block-form-header flexbox justify-space-between">
                      <div className="filter-nav flexbox justify-space-between">
                        <div 
                          className={ this.state.promotionList ? "my-select-box form-control open" : "my-select-box form-control"}
                          >
                          <span className="my-select-result flexbox justify-space-between" onClick={ this.togglePromotionList }>
                            <span className="text">
                              { this.props.requestForPostJob.promotion_title ? 
                                (this.props.requestForPostJob.promotion_title.length > 22 ?
                                  this.props.requestForPostJob.promotion_title.substring( 0, 22 ) + '...' : 
                                    this.props.requestForPostJob.promotion_title) : 
                                      'Category' }
                            </span> 
                            <span className="caret"></span>
                          </span>
                          <div className="my-select-options">
                            <div className="radio-block">
                                { this.props.promotions.categories.map( (category, index) => (
                                    <div className="radio" key={ index }>
                                      <input 
                                        type="radio" 
                                        // name="numb-options" 
                                        name={ category.name }
                                        id={ category.id + "-term" }
                                        onClick={ (event) => {
                                          this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'promotion_title' );
                                          this.changeActiveCategory(index);
                                          
                                        } } 
                                        // value="1-term" 
                                        checked={ this.props.requestForPostJob.promotion_title === category.name } />
                                      <label for={ category.id + "-term" } >
                                        <span className="radio-text">{ category.name }</span>
                                      </label>
                                    </div>
                              ) ) }
                            </div>	
                          </div>
                        </div>
                        <div className={ this.state.subCategoryList ? "my-select-box form-control open" : "my-select-box form-control" } >
                          <span className="my-select-result flexbox justify-space-between" onClick={ this.toggleSubCategoryList }>
                            <span className="text">
                                { this.state.activeSubCategory ? 
                                    (this.state.activeSubCategory.length > 22 ?
                                      this.state.activeSubCategory.substring(0,22) + '...' : 
                                        this.state.activeSubCategory) : 'Sub Category' }
                            </span> 
                            <span className="caret"></span>
                          </span>
                          <div className="my-select-options">
                            <div className="radio-block">
                              { this.state.activeCategory || this.state.activeCategory === 0 ? 
                                  this.props.promotions.categories[this.state.activeCategory].skill_categories.map( (subCategory, index) => (
                                  <div className="radio" key={index}>
                                    <input 
                                      type="radio" 
                                      name={ subCategory.name } 
                                      id={ index + "-torm" } 
                                      value={ index + "-torm" } 
                                      onClick={ 
                                        (event) => { this.changeActiveSubCategory(event) } }
                                      checked={ subCategory.name === this.state.activeSubCategory } />
                                    <label for={ index + "-torm" }>
                                      <span className="radio-text">{ subCategory.name }</span>
                                    </label> 
                                  </div>
                              ) ) : '' }
                            </div>	
                          </div>
                        </div>
                      </div>
                      <div className="results-numb">
                        <span className="numb">{ this.props.promotions.promotions.length }</span> results
                      </div>
                    </div>
                    <div className="promo-block-form-body">
                      { this.props.requestForPostJob.promotion_title ?
                        this.props.promotions.promotions
                          .filter( promotion => promotion.title === this.props.requestForPostJob.promotion_title )
                            .map( (prom, index) => (
                              <div className="checkbox-block" key={ index } >
                                <input 
                                  type="checkbox" 
                                  id={ "skill-test-" + index } 
                                  value={ prom.id }
                                  // checked={ true }
                                  // onClick={ () => { console.log(1) } } 
                                  />
                                <label 
                                  for={ "skill-test-" + index } 
                                  onClick={ () => { 
                                    this.choosePromotion(prom.id);
                                    this.props.CHOOSE_PROMOTION(prom.id, this.props.promotions.promotions); 
                                  } } >
                                  <div className="panel-block flexbox"  >
                                    <span className="checkbox-circle checkbox-sqw">
                                      <span 
                                        className="icon icon-check-mark" 
                                        style={ this.state.chosenPromotion === prom.id ? 
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
                                  // checked={ true }
                                  // onClick={ () => { console.log(1) } } 

                                  />
                                <label for={ "skill-test-" + index } 
                                  onClick={ () => { 
                                    this.choosePromotion(prom.id);
                                    this.props.CHOOSE_PROMOTION(prom.id, this.props.promotions.promotions)
                                  } }>
                                  <div className="panel-block flexbox"  >
                                    <span className="checkbox-circle checkbox-sqw">
                                      <span className="icon icon-check-mark" 
                                        style={ this.state.chosenPromotion === prom.id ? 
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
                  {/* <button className="btn btn-bold btn-blue">Add Promotion</button> */}
                </div>
              </div>
            </div>
            <div className="form-block">
              <div className="form-block-wrapper flexbox justify-space-between">
                <div className="form-block-section">
                  <div className="form-block-header">
                    <div className="form-block-title">
                      Job Payment
                    </div>
                  </div>
                  <div className="radio-block">
                    <div className="radio">
                      <input 
                        type="checkbox" 
                        name="fixed_price" 
                        id="fixed-payment" 
                        value="fixed-payment" 
                        checked={ this.props.requestForPostJob.payment === 'fixed_price' }
                        onClick={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'payment') } } />
                      <label for="fixed-payment">
                        <span className="checkbox-circle">
                          <span className="icon icon-check-mark"></span>
                        </span>
                        <span className="radio-text">Fixed Price</span>
                      </label>
                    </div>
                    <div className="radio">
                      <input 
                        type="checkbox" 
                        name="hourly" 
                        id="hourly-payment" 
                        value="hourly-payment" 
                        checked={ this.props.requestForPostJob.payment === 'hourly' }
                        onClick={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'payment') } } />
                      <label for="hourly-payment">
                        <span className="checkbox-circle">
                          <span className="icon icon-check-mark"></span>
                        </span>
                        <span className="radio-text">Hourly</span>
                        <span className="job-payment-input-wrapper">
                          <input 
                            type="text"
                            name='hourly_price' 
                            value={ this.props.requestForPostJob['hourly_price'] } 
                            className="form-control"  
                            disabled={ this.props.requestForPostJob.payment === 'fixed_price' } 
                            onChange={ (event) => { this.props.CHANGE_STR_INP_FOR_POSTJOB(event) } }
                            />
                          $ / hour
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-block-section">
                  <div className="form-block-header">
                    <div className="form-block-title">
                      Job Price
                    </div>
                  </div>
                  <div className="job-price-input-wrapper">
                    <input
                      name='price' 
                      className="form-control" 
                      type="text" 
                      value={ this.props.requestForPostJob.price } 
                      onChange={ (event) => { this.props.CHANGE_STR_INP_FOR_POSTJOB(event) } }
                      /> $
                    <p className="small">Enter here how much you think it should cost you..</p>
                  </div>
                </div>
              </div>
              <div className="form-block-wrapper">
                <div class="form-block-section job-time-block col-100">
                  <div class="form-block-header">
                    <div class="form-block-title">
                      Estimated time to complete the Job
                    </div>
                  </div>
                  <div class="btn-group">
                  <input 
                      type="text"
                      name='period' 
                      style={ { 
                        'position': 'relative', 
                        'float': 'left', 
                        'width': '78px', 
                        'height': '33px', 
                        'border-right': '0',
                        'text-align': 'center',
                        'border-color': '#cccccc',
                        'box-shadow': 'none',
                        'padding': '6px 12px',
                        'font-size': '14px',
                        'background-color': '#fff',
                        'background-image': 'none',
                        'border': '1px solid #d9dada',
                        'border-radius': '30px',
                        'borderBottomRightRadius': '0',
                        'borderTopRightRadius': '0' } }
                        value={ this.props.requestForPostJob.period }
                        onChange={ (event) => { this.props.CHANGE_STR_INP_FOR_POSTJOB(event) } }
                      />
                    
                    <button className="btn btn-bg-transparent">
                      <div className={ this.state.periodTypeIsOpened ? "my-select-box open" : "my-select-box" }>
                          <span className="my-select-result" onClick={ this.togglePeriodTypeList }>
                            <span className="text" >
                              { this.props.requestForPostJob.period > 1 ? 
                                this.props.requestForPostJob.period_type.toUpperCase() + 'S' : this.props.requestForPostJob.period_type.toUpperCase()}
                            </span> 
                            <span class="caret"></span>
                          </span>
                          <div class="my-select-options">
                            <div class="radio-block">
                            <div class="radio">
                              <input 
                                type="checkbox" 
                                name="day" 
                                id="d-term" value="d-term" 
                                checked=""
                                onClick={ (event) => { 
                                  this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'period_type');
                                  this.togglePeriodTypeList();
                                    } }
                                />
                              <label for="d-term">
                                <span class="radio-text">Day</span>
                              </label>
                            </div>
                            <div class="radio">
                              <input 
                                type="checkbox" 
                                name="week" 
                                id="w-term" 
                                value="w-term" 
                                onClick={ (event) => { 
                                  this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'period_type');
                                  this.togglePeriodTypeList() } }
                                />
                              <label for="w-term">
                                <span class="radio-text">Week</span>
                              </label>
                            </div>
                            <div class="radio">
                              <input 
                                type="checkbox" 
                                name="month" 
                                id="m-term" 
                                value="m-term" 
                                onClick={ (event) => { 
                                  this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'period_type');
                                  this.togglePeriodTypeList() } }
                                />
                              <label for="m-term">
                                <span class="radio-text"> Month</span>
                              </label>
                            </div>
                            <div class="radio">
                              <input 
                                type="checkbox" 
                                name="year" 
                                id="y-term" 
                                value="y-term" 
                                onClick={ (event) => { 
                                  this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'period_type');
                                  this.togglePeriodTypeList() } }
                                />
                              <label for="y-term">
                                <span class="radio-text">Year</span>
                              </label>
                            </div>
                          </div>	
                          </div>
                      </div>
                    </button>
                    
                  </div>
                </div>
              </div>
              <div className="form-block-wrapper flexbox justify-space-between">
                <div className="form-block-section col-30">
                  <div className="form-block-header">
                    <div className="form-block-title">
                      Talent Commitment
                    </div>
                  </div>
                  <div className="radio-block">
                    <div className="radio">
                      <input 
                        type="checkbox" 
                        name="decide_later" 
                        id="later" 
                        value="later" 
                        checked={ this.props.requestForPostJob.commitment === 'decide_later' }
                        onClick={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'commitment') } } />
                      <label for="later">
                        <span className="checkbox-circle">
                          <span className="icon icon-check-mark"></span>
                        </span>
                        <span className="radio-text">I will Decide Later</span>
                      </label>
                    </div>
                    <div className="radio">
                      <input 
                        type="checkbox" 
                        name="per_week_10" 
                        id="10hrs" 
                        value="10hrs" 
                        checked={ this.props.requestForPostJob.commitment === 'per_week_10' } 
                        onClick={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'commitment') } }
                        />
                      <label for="10hrs">
                        <span className="checkbox-circle">
                          <span className="icon icon-check-mark"></span>
                        </span>
                        <span className="radio-text">10 hrs per week</span>
                      </label>
                    </div>
                    <div className="radio">
                      <input 
                        type="checkbox" 
                        name="per_week_up_to_30" 
                        id="30hrs" 
                        value="30hrs" 
                        checked={ this.props.requestForPostJob.commitment === 'per_week_up_to_30' } 
                        onClick={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'commitment') } }
                        />
                      <label for="30hrs">
                        <span className="checkbox-circle">
                          <span className="icon icon-check-mark"></span>
                        </span>
                        <span className="radio-text">Up to 30 hrs per week</span>
                      </label>
                    </div>
                    <div className="radio">
                      <input 
                        type="checkbox" 
                        name="per_week_more_than_30" 
                        id="30morehrs" 
                        value="30morehrs"
                        checked={ this.props.requestForPostJob.commitment === 'per_week_more_than_30' } 
                        onClick={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'commitment') } }
                        />
                      <label for="30morehrs">
                        <span className="checkbox-circle">
                          <span className="icon icon-check-mark"></span>
                        </span>
                        <span className="radio-text">More than 30 hrs per week</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-block-section">
                  <div className="form-block-header">
                    <div className="form-block-title">
                      Talent Level
                    </div>
                  </div>
                  <div className="radio-block">
                    <div className="radio">
                      <input 
                        type="checkbox" 
                        name="intern" 
                        id="level-int" 
                        value="level-int" 
                        checked={ this.props.requestForPostJob.level === 'intern' }
                        onClick={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'level') } }
                        />
                      <label for="level-int">
                        <span className="checkbox-circle">
                          <span className="icon icon-check-mark"></span>
                        </span>
                        <span className="radio-text">Intern</span>
                      </label>
                    </div>
                    <div className="radio">
                      <input 
                        type="checkbox" 
                        name="junior" 
                        id="level-jun" 
                        value="level-jun"
                        checked={ this.props.requestForPostJob.level === 'junior' } 
                        onClick={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'level') } }
                        />
                      <label for="level-jun">
                        <span className="checkbox-circle">
                          <span className="icon icon-check-mark"></span>
                        </span>
                        <span className="radio-text">Junior</span>
                      </label>
                    </div>
                    <div className="radio">
                      <input 
                        type="checkbox" 
                        name="senior" 
                        id="level-sen" 
                        value="level-sen" 
                        checked={ this.props.requestForPostJob.level === 'senior' }
                        onClick={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'level') } }
                        />
                      <label for="level-sen">
                        <span className="checkbox-circle">
                          <span className="icon icon-check-mark"></span>
                        </span>
                        <span className="radio-text">Senior</span>
                      </label>
                    </div>
                    <div className="radio">
                      <input 
                        type="checkbox" 
                        name="expert" 
                        id="level-exp" 
                        value="level-exp"
                        checked={ this.props.requestForPostJob.level === 'expert' }
                        onClick={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'level') } }
                        />
                      <label for="level-exp">
                        <span className="checkbox-circle">
                          <span className="icon icon-check-mark"></span>
                        </span>
                        <span className="radio-text">Expert</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-block-section col-30">
                  <div className="form-block-header">
                    <div className="form-block-title">
                      Project type
                    </div>
                  </div>
                  <div className="radio-block">
                    <div className="radio">
                      <input 
                        type="checkbox" 
                        name="one_time" 
                        id="quantity-1" 
                        value="quantity-1" 
                        checked={ this.props.requestForPostJob.time_type === 'one_time' }
                        onClick={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'time_type') } }
                        />
                      <label for="quantity-1">
                        <span className="checkbox-circle">
                          <span class="icon icon-check-mark"></span>
                        </span>
                        <span className="radio-text">One time</span>
                      </label>
                    </div>
                    <div className="radio">
                      <input 
                        type="checkbox" 
                        name="long_term" 
                        id="quantity-3" 
                        value="quantity-3"
                        checked={ this.props.requestForPostJob.time_type === 'long_term' }
                        onClick={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'time_type') } }
                        />
                      <label for="quantity-3">
                        <span className="checkbox-circle">
                          <span className="icon icon-check-mark"></span>
                        </span>
                        <span className="radio-text">Long term</span>
                      </label>
                    </div>
                    <div className="radio">
                      <input 
                        type="checkbox" 
                        name="short" 
                        id="quantity-5" 
                        value="quantity-5"
                        checked={ this.props.requestForPostJob.time_type === 'short' }
                        onClick={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'time_type') } }
                        />
                      <label for="quantity-5">
                        <span className="checkbox-circle">
                          <span className="icon icon-check-mark"></span>
                        </span>
                        <span className="radio-text">Short</span>
                      </label>
                    </div>
                    <div className="radio">
                      <input 
                        type="checkbox" 
                        name="not_sure" 
                        id="quantity-infinity" 
                        value="quantity-infinity" 
                        checked={ this.props.requestForPostJob.time_type === 'not_sure' }
                        onClick={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'time_type') } }
                        />
                      <label for="quantity-infinity">
                        <span className="checkbox-circle">
                          <span className="icon icon-check-mark"></span>
                        </span>
                        <span className="radio-text">Not sure</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-block-wrapper">
                <div className="form-block-section col-100">
                  <div className="form-block-header">
                    <div className="form-block-title">
                      Contract General Notes
                    </div>
                  </div>
                  <div>
                    <textarea 
                      className="form-control comments-area" 
                      name='contract_general_notes'
                      placeholder="Enter here Comments for the contract"
                      value={ this.props.requestForPostJob.contract_general_notes }
                      onChange={ (event) => { this.props.CHANGE_STR_INP_FOR_POSTJOB(event) } }>

                    </textarea>
                  </div>
                </div>
              </div>
              <div className="form-block-wrapper">
                <div className="form-block-section finish-block col-100">
                  <div className="form-block-header">
                    <div className="form-block-title">
                      Finish
                    </div>
                  </div>
                  <div class="checkbox-block">
                    <span style={ this.state.consent ? { 'display': 'none' } : { 'color': 'red' }}>
                      You need to agree with terms of use to continue
                    </span>
                    <br/>
                    <input 
                      type="checkbox" 
                      id="terms-agree" 
                      checked={ this.state.consent }
                      onClick={ this.toggleConsent }
                      />
                    <label for="terms-agree">
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">I agree for the terms of use</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-block-wrapper btn-block">
                {/* <button class="btn btn-blue btn-bold">Preview Before Posting</button> */}
                <button 
                  disabled={ !this.state.consent } 
                  className="btn btn-blue btn-bold"
                  onClick={ () => { this.props.POST_JOB( this.props.requestForPostJob ) } }>Post</button>
              </div>
            </div>
          </div>
          
        </Modal>
      )
    } else return (
      <Modal>Загрузка данных</Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    skills: state.skills,
    promotions: state.promotions,
    requestForPostJob: state.requestForPostJob
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GET_SKILLS: bindActionCreators(GET_SKILLS, dispatch),
    GET_PROMOTIONS: bindActionCreators(GET_PROMOTIONS, dispatch),
    CHOOSE_CATEGORY: bindActionCreators(CHOOSE_CATEGORY, dispatch),
    CHOOSE_SKILL_CATEGORY: bindActionCreators(CHOOSE_SKILL_CATEGORY, dispatch),
    CHOOSE_PROMOTION: bindActionCreators(CHOOSE_PROMOTION, dispatch),
    CHANGE_STR_INP_FOR_POSTJOB: bindActionCreators(CHANGE_STR_INP_FOR_POSTJOB, dispatch),
    CHANGE_CHECKBOX_FOR_POSTJOB: bindActionCreators(CHANGE_CHECKBOX_FOR_POSTJOB, dispatch),
    GET_BONUS_SKILLS: bindActionCreators(GET_BONUS_SKILLS, dispatch),
    POST_JOB: bindActionCreators(POST_JOB, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostJob);