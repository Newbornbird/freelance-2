import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import JobTitleDescription from './JobTitleDescription';
import ChooseSkillCategory from './ChooseSkillCategory';
import CreateChooseSkillTest from './CreateChooseSkillTest';
import {
  GET_SKILLS,
  GET_PROMOTIONS,
  CHOOSE_CATEGORY,
  CHOOSE_SKILL_CATEGORY,
  CHOOSE_PROMOTION,
  CHANGE_STR_INP_FOR_POSTJOB,
  GET_SKILL_TAGS,
  CHANGE_CHECKBOX_FOR_POSTJOB,
  POST_JOB,
  CLOSE_MODAL,
  OPEN_MODAL,
  CHANGE_ACTIVE_PROMOTION_CATEGORY,
  MAKE_ACTIVE_CREATING_SKILL_TEST,
  MAKE_INACTIVE_CREATING_SKILL_TEST,
  ADD_SKILL_TAG,
  DELETE_SKILL_TAG,
  OPEN_SKILL_TAGS_LIST,
} from '../../actions';
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
    };
  }

  togglePromotionList = () => {
    this.setState({ promotionList: !this.state.promotionList });
  };

  toggleSubCategoryList = () => {
    this.setState({ subCategoryList: !this.state.subCategoryList });
  };

  closeSubCategoryList = () => {
    this.setState({ subCategoryList: false });
  };

  changeActiveCategory = () => {
    this.setState({ promotionList: false });
  };

  changeActiveSubCategory = event => {
    this.setState({ activeSubCategory: event.target.name });
    this.setState({ subCategoryList: false });
  };

  togglePeriodTypeList = () => {
    this.setState({ periodTypeIsOpened: !this.state.periodTypeIsOpened });
  };

  toggleConsent = () => {
    this.setState({ consent: !this.state.consent });
  };

  componentDidMount() {
    this.props.getSkills();
    this.props.getPromotions();
  }

  render() {
    const {
      promotions,
      statusPostJob,
      closeModal,
      skills,
      requestForPostJob,
      changeStrInpForPostJob,
      chooseCategory,
      chooseSkillCategory,
      getSkillTags,
      openSkillTagsList,
      addSkillTag,
      deleteSkillTag,
      makeActiveCreatingSkillTest,
      makeInActiveCreatingSkillTest,
      changeActivePromotionCategory,
      choosePromotion,
      changeCheckboxForPostJob,
      postJob,
      skill_tags,
    } = this.props;
    if (this.props.promotions.categories) {
      return (
        <Modal open={statusPostJob.modal} onClose={closeModal} styles={{ modal: { borderRadius: '5px' } }}>
          <div className="post-job-title blue-color">Post a Job</div>
          <div className="post-job-form panel panel-default" style={{ overflow: 'visible' }} onClick={() => {}}>
            <JobTitleDescription
              changeStrInpForPostJob={changeStrInpForPostJob}
              requestForPostJob={requestForPostJob}
            />
            <ChooseSkillCategory
              skills={skills}
              requestForPostJob={requestForPostJob}
              skill_tags={skill_tags}
              chooseCategory={chooseCategory}
              chooseSkillCategory={chooseSkillCategory}
              getSkillTags={getSkillTags}
              openSkillTagsList={openSkillTagsList}
              addSkillTag={addSkillTag}
              deleteSkillTag={deleteSkillTag}
            />
            <CreateChooseSkillTest
              statusPostJob={statusPostJob}
              requestForPostJob={requestForPostJob}
              promotions={promotions}
              makeActiveCreatingSkillTest={makeActiveCreatingSkillTest}
              makeInActiveCreatingSkillTest={makeInActiveCreatingSkillTest}
              changeStrInpForPostJob={changeStrInpForPostJob}
              changeActivePromotionCategory={changeActivePromotionCategory}
              choosePromotion={choosePromotion}
              changeActiveCategory={this.changeActiveCategory}
              togglePromotionList={this.togglePromotionList}
              toggleSubCategoryList={this.toggleSubCategoryList}
              changeActiveSubCategory={this.changeActiveSubCategory}
              promotionList={this.state.promotionList}
              subCategoryList={this.state.subCategoryList}
              activeSubCategory={this.state.activeSubCategory}
            />
            <div className="form-block">
              <div className="form-block-wrapper flexbox justify-space-between">
                <JobPayment
                  requestForPostJob={requestForPostJob}
                  changeStrInpForPostJob={changeStrInpForPostJob}
                  changeCheckboxForPostJob={changeCheckboxForPostJob}
                />
                <JobPrice requestForPostJob={requestForPostJob} changeStrInpForPostJob={changeStrInpForPostJob} />
              </div>
              <div className="form-block-wrapper">
                <TimeToCompleteTheJob
                  requestForPostJob={requestForPostJob}
                  changeCheckboxForPostJob={changeCheckboxForPostJob}
                  changeStrInpForPostJob={changeStrInpForPostJob}
                  togglePeriodTypeList={this.togglePeriodTypeList}
                  periodTypeIsOpened={this.state.periodTypeIsOpened}
                />
              </div>
              <div className="form-block-wrapper flexbox justify-space-between">
                <TalentCommitment
                  requestForPostJob={requestForPostJob}
                  changeCheckboxForPostJob={changeCheckboxForPostJob}
                />
                <TalentLevel
                  requestForPostJob={requestForPostJob}
                  changeCheckboxForPostJob={changeCheckboxForPostJob}
                />
                <ProjectType
                  requestForPostJob={requestForPostJob}
                  changeCheckboxForPostJob={changeCheckboxForPostJob}
                />
              </div>
              <div className="form-block-wrapper">
                <ContractGeneralNotes
                  requestForPostJob={requestForPostJob}
                  changeStrInpForPostJob={changeStrInpForPostJob}
                />
              </div>
              <div className="form-block-wrapper">
                <Finish consent={this.state.consent} toggleConsent={this.toggleConsent} />
              </div>
              <div className="form-block-wrapper btn-block">
                <button
                  disabled={
                    !(
                      this.state.consent &&
                      requestForPostJob.title &&
                      requestForPostJob.description &&
                      requestForPostJob.price &&
                      requestForPostJob.promotion_title &&
                      requestForPostJob.promotion_description
                    )
                  }
                  className="btn btn-blue btn-bold"
                  onClick={() => {
                    postJob(requestForPostJob);
                  }}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </Modal>
      );
    }
    return <div>Загрузка данных</div>;
  }
}

PostJob.propTypes = {
  skills: PropTypes.array,
  promotions: PropTypes.object,
  requestForPostJob: PropTypes.object,
  statusPostJob: PropTypes.object,
  skill_tags: PropTypes.object,
  getSkills: PropTypes.func,
  getPromotions: PropTypes.func,
  chooseCategory: PropTypes.func,
  chooseSkillCategory: PropTypes.func,
  choosePromotion: PropTypes.func,
  changeActivePromotionCategory: PropTypes.func,
  changeStrInpForPostJob: PropTypes.func,
  changeCheckboxForPostJob: PropTypes.func,
  makeActiveCreatingSkillTest: PropTypes.func,
  makeInActiveCreatingSkillTest: PropTypes.func,
  getSkillTags: PropTypes.func,
  addSkillTag: PropTypes.func,
  deleteSkillTag: PropTypes.func,
  postJob: PropTypes.func,
  closeModal: PropTypes.func,
  openModal: PropTypes.func,
  openSkillTagsList: PropTypes.func,
};

const mapStateToProps = state => ({
  skills: state.skills,
  promotions: state.promotions,
  requestForPostJob: state.requestForPostJob,
  statusPostJob: state.statusPostJob,
  skill_tags: state.skill_tags,
});

const mapDispatchToProps = dispatch => ({
  getSkills: bindActionCreators(GET_SKILLS, dispatch),
  getPromotions: bindActionCreators(GET_PROMOTIONS, dispatch),
  chooseCategory: bindActionCreators(CHOOSE_CATEGORY, dispatch),
  chooseSkillCategory: bindActionCreators(CHOOSE_SKILL_CATEGORY, dispatch),
  choosePromotion: bindActionCreators(CHOOSE_PROMOTION, dispatch),
  changeActivePromotionCategory: bindActionCreators(CHANGE_ACTIVE_PROMOTION_CATEGORY, dispatch),
  changeStrInpForPostJob: bindActionCreators(CHANGE_STR_INP_FOR_POSTJOB, dispatch),
  changeCheckboxForPostJob: bindActionCreators(CHANGE_CHECKBOX_FOR_POSTJOB, dispatch),
  makeActiveCreatingSkillTest: bindActionCreators(MAKE_ACTIVE_CREATING_SKILL_TEST, dispatch),
  makeInActiveCreatingSkillTest: bindActionCreators(MAKE_INACTIVE_CREATING_SKILL_TEST, dispatch),
  getSkillTags: bindActionCreators(GET_SKILL_TAGS, dispatch),
  addSkillTag: bindActionCreators(ADD_SKILL_TAG, dispatch),
  deleteSkillTag: bindActionCreators(DELETE_SKILL_TAG, dispatch),
  postJob: bindActionCreators(POST_JOB, dispatch),
  closeModal: bindActionCreators(CLOSE_MODAL, dispatch),
  openModal: bindActionCreators(OPEN_MODAL, dispatch),
  openSkillTagsList: bindActionCreators(OPEN_SKILL_TAGS_LIST, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostJob);
