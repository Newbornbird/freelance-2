import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import JobTitleDescription from './JobTitleDescription';
import ChooseSkillCategory from './ChooseSkillCategory';
import CreateChooseSkillTest from './CreateChooseSkillTest';
import { GET_SKILLS, GET_PROMOTIONS, 
  CHOOSE_CATEGORY, CHOOSE_SKILL_CATEGORY, 
  CHOOSE_PROMOTION, CHANGE_STR_INP_FOR_POSTJOB, 
  GET_SKILL_TAGS, CHANGE_CHECKBOX_FOR_POSTJOB, POST_JOB,
  CLOSE_MODAL, OPEN_MODAL, 
  CHANGE_ACTIVE_PROMOTION_CATEGORY,
  MAKE_ACTIVE_CREATING_SKILL_TEST,
  MAKE_INACTIVE_CREATING_SKILL_TEST,
  ADD_SKILL_TAG, DELETE_SKILL_TAG,
  OPEN_SKILL_TAGS_LIST } from '../../actions'
import JobPayment from './JobPayment';
import JobPrice from './JobPrice';
import TimeToCompleteTheJob from './TimeToCompleteTheJob';
import TalentCommitment from './TalentCommitment';
import TalentLevel from './TalentLevel';
import ProjectType from './ProjectType';
import ContractGeneralNotes from './ContractGeneralNotes';
import Finish from './Finish';
 


class PostJob extends Component {
  constructor() {
    super();
    this.state = {
      promotionList: false,
      subCategoryList: false,
      activeSubCategory: '',
      hourlyPriceIsDisabled: false,
      periodTypeIsOpened: false,
      consent: false,
      chosenPromotion: '',
    }
  }

  // makeCreateSkillTestActive = () => {
  //   this.setState({ createSkillTest: !this.state.createSkillTest });
  // }

  togglePromotionList = () => { 
    this.setState({ promotionList: !this.state.promotionList });
  }

  toggleSubCategoryList = () => {
    this.setState({ subCategoryList: !this.state.subCategoryList });
  }

  closeSubCategoryList = () => {
    this.setState({ subCategoryList: false });
  }

  changeActiveCategory = () => {
    this.setState({ promotionList: false });
  }

  changeActiveSubCategory = (event) => {
    this.setState({ activeSubCategory: event.target.name });
    this.setState( { subCategoryList: false  } );
  }

  // makeTrueHourlyPriceIsDisabled = () => {
  //   this.setState({ hourlyPriceIsDisabled: true })

  // }

  // makeFalseHourlyPriceIsDisabled = () => {
  //   this.setState({ hourlyPriceIsDisabled: false })
  // }

  togglePeriodTypeList = () => {
    this.setState({ periodTypeIsOpened: !this.state.periodTypeIsOpened })
  }

  toggleConsent = () => {
    this.setState({ consent: !this.state.consent })
  }

  // CloseModal = () => {
  //   this.setState({ showModal: false });
  // }

  // choosePromotion = (id) => {
  //   if (id === this.state.chosenPromotion) {
  //     this.setState( { chosenPromotion: '' } );
  //     this.setState({ createSkillTest: false });
  //   } else {
  //       this.setState({ chosenPromotion: id });
  //       this.setState({ createSkillTest: false });
  //   } 
  // }

  componentDidMount() {
    this.props.GET_SKILLS();
    this.props.GET_PROMOTIONS();
  }

  render() {
    if( this.props.promotions.categories ) {
      return(
        <Modal 
          open={ this.props.statusPostJob.modal } 
          onClose={ this.props.CLOSE_MODAL } 
          styles={ { modal: { 'borderRadius': '5px' } } }> 
          <div className="post-job-title blue-color">Post a Job</div>
          <div className="post-job-form panel panel-default" 
            style={ { 'overflow': 'visible' } } 
            onClick={ () => {  } }>
            <JobTitleDescription 
              CHANGE_STR_INP_FOR_POSTJOB = { this.props.CHANGE_STR_INP_FOR_POSTJOB }
              requestForPostJob = { this.props.requestForPostJob }
            />
            <ChooseSkillCategory 
              skills = { this.props.skills }
              requestForPostJob = { this.props.requestForPostJob }
              skill_tags = { this.props.skill_tags }
              CHOOSE_CATEGORY = { this.props.CHOOSE_CATEGORY }
              CHOOSE_SKILL_CATEGORY = { this.props.CHOOSE_SKILL_CATEGORY }
              GET_SKILL_TAGS = { this.props.GET_SKILL_TAGS }
              OPEN_SKILL_TAGS_LIST = { this.props.OPEN_SKILL_TAGS_LIST }
              ADD_SKILL_TAG = { this.props.ADD_SKILL_TAG }
              DELETE_SKILL_TAG = { this.props.DELETE_SKILL_TAG }
            />
            <CreateChooseSkillTest 
              statusPostJob = { this.props.statusPostJob }
              requestForPostJob = { this.props.requestForPostJob }
              promotions = { this.props.promotions }
              MAKE_ACTIVE_CREATING_SKILL_TEST = { this.props.MAKE_ACTIVE_CREATING_SKILL_TEST }
              MAKE_INACTIVE_CREATING_SKILL_TEST = { this.props.MAKE_INACTIVE_CREATING_SKILL_TEST }
              CHANGE_STR_INP_FOR_POSTJOB = { this.props.CHANGE_STR_INP_FOR_POSTJOB }
              CHANGE_ACTIVE_PROMOTION_CATEGORY = { this.props.CHANGE_ACTIVE_PROMOTION_CATEGORY }
              CHOOSE_PROMOTION = { this.props.CHOOSE_PROMOTION }
              changeActiveCategory = { this.changeActiveCategory }
              togglePromotionList = { this.togglePromotionList }
              toggleSubCategoryList = { this.toggleSubCategoryList }
              changeActiveSubCategory = { this.changeActiveSubCategory }
              promotionList = { this.state.promotionList }
              subCategoryList = { this.state.subCategoryList }
              activeSubCategory = { this.state.activeSubCategory }

              
            />
            <div className="form-block">
              <div className="form-block-wrapper flexbox justify-space-between">
                <JobPayment 
                  requestForPostJob = { this.props.requestForPostJob }
                  CHANGE_STR_INP_FOR_POSTJOB = { this.props.CHANGE_STR_INP_FOR_POSTJOB }
                  CHANGE_CHECKBOX_FOR_POSTJOB = { this.props.CHANGE_CHECKBOX_FOR_POSTJOB }
                />
                <JobPrice 
                  requestForPostJob = { this.props.requestForPostJob }
                  CHANGE_STR_INP_FOR_POSTJOB = { this.props.CHANGE_STR_INP_FOR_POSTJOB }
                />
              </div>
              <div className="form-block-wrapper">
                <TimeToCompleteTheJob 
                  requestForPostJob = { this.props.requestForPostJob }
                  CHANGE_CHECKBOX_FOR_POSTJOB = { this.props.CHANGE_CHECKBOX_FOR_POSTJOB }
                  CHANGE_STR_INP_FOR_POSTJOB = { this.props.CHANGE_STR_INP_FOR_POSTJOB }
                  togglePeriodTypeList = { this.togglePeriodTypeList }
                  periodTypeIsOpened = { this.state.periodTypeIsOpened } 
                />
              </div>
              <div className="form-block-wrapper flexbox justify-space-between">
                <TalentCommitment 
                  requestForPostJob = { this.props.requestForPostJob }
                  CHANGE_CHECKBOX_FOR_POSTJOB = { this.props.CHANGE_CHECKBOX_FOR_POSTJOB }
                />
                <TalentLevel 
                  requestForPostJob = { this.props.requestForPostJob }
                  CHANGE_CHECKBOX_FOR_POSTJOB = { this.props.CHANGE_CHECKBOX_FOR_POSTJOB }
                  
                />
                <ProjectType 
                  requestForPostJob = { this.props.requestForPostJob }
                  CHANGE_CHECKBOX_FOR_POSTJOB = { this.props.CHANGE_CHECKBOX_FOR_POSTJOB }
                />
              </div>
              <div className="form-block-wrapper">
                <ContractGeneralNotes 
                  requestForPostJob = { this.props.requestForPostJob }
                  CHANGE_CHECKBOX_FOR_POSTJOB = { this.props.CHANGE_STR_INP_FOR_POSTJOB }
                />
              </div>
              <div className="form-block-wrapper">
                <Finish 
                  consent = { this.state.consent }
                  toggleConsent = { this.toggleConsent }
                />
              </div>
              <div className="form-block-wrapper btn-block">
                <button 
                  disabled={  this.state.consent && 
                              this.props.requestForPostJob.title && 
                              this.props.requestForPostJob.description &&
                              this.props.requestForPostJob.price &&
                              this.props.requestForPostJob.promotion_title &&
                              this.props.requestForPostJob.promotion_description ? false : true } 
                  className="btn btn-blue btn-bold"
                  onClick={ () => { this.props.POST_JOB( this.props.requestForPostJob ) } }>Post</button>
              </div>
            </div>
          </div>
        </Modal>
      )
    } else return (
      <div>Загрузка данных</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    skills: state.skills,
    promotions: state.promotions,
    requestForPostJob: state.requestForPostJob,
    statusPostJob: state.statusPostJob,
    skill_tags: state.skill_tags
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GET_SKILLS: bindActionCreators(GET_SKILLS, dispatch),
    GET_PROMOTIONS: bindActionCreators(GET_PROMOTIONS, dispatch),
    CHOOSE_CATEGORY: bindActionCreators(CHOOSE_CATEGORY, dispatch),
    CHOOSE_SKILL_CATEGORY: bindActionCreators(CHOOSE_SKILL_CATEGORY, dispatch),
    CHOOSE_PROMOTION: bindActionCreators(CHOOSE_PROMOTION, dispatch),
    CHANGE_ACTIVE_PROMOTION_CATEGORY: bindActionCreators(CHANGE_ACTIVE_PROMOTION_CATEGORY, dispatch),
    CHANGE_STR_INP_FOR_POSTJOB: bindActionCreators(CHANGE_STR_INP_FOR_POSTJOB, dispatch),
    CHANGE_CHECKBOX_FOR_POSTJOB: bindActionCreators(CHANGE_CHECKBOX_FOR_POSTJOB, dispatch),
    MAKE_ACTIVE_CREATING_SKILL_TEST: bindActionCreators(MAKE_ACTIVE_CREATING_SKILL_TEST, dispatch),
    MAKE_INACTIVE_CREATING_SKILL_TEST: bindActionCreators(MAKE_INACTIVE_CREATING_SKILL_TEST, dispatch),
    GET_SKILL_TAGS: bindActionCreators(GET_SKILL_TAGS, dispatch),
    ADD_SKILL_TAG: bindActionCreators(ADD_SKILL_TAG, dispatch),
    DELETE_SKILL_TAG: bindActionCreators(DELETE_SKILL_TAG, dispatch),
    POST_JOB: bindActionCreators(POST_JOB, dispatch),
    CLOSE_MODAL: bindActionCreators(CLOSE_MODAL, dispatch),
    OPEN_MODAL: bindActionCreators(OPEN_MODAL, dispatch),
    OPEN_SKILL_TAGS_LIST: bindActionCreators(OPEN_SKILL_TAGS_LIST, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostJob);