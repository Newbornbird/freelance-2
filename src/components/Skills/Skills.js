import React, { Component } from 'react';

class Skills extends Component {

  render() {
    return (
      <div className="wrapper">
    		<nav className="main-top-nav flexbox justify-space-between">
    			<div className="logo">
    				<a className="logo-link" href="index.html"><img src="images/logo.png" height="39" width="auto" alt=''/></a>
    			</div>
    			<div type="button" className="humburger-icon">
					<button type="button" className="btn btn-bg-transparent"><span className="icon icon-menu"></span></button>
				</div>
    			<section className="nav-mobile flexbox justify-space-between">
    				<section className="nav-tablet flexbox justify-space-center">
    					<div className="search-form">
		    				<form className="my-search-form" role="search">
		    					<input type="text" className="form-control" placeholder="Search"/>
		    					<div className="search-filter radio-block">
									<div className="radio">
										<input type="radio" name="profile-page-filter" id="jobs-filter" value="jobs-filter" checked/>
										<label for="jobs-filter">
											<span className="radio-text">Jobs</span>
										</label>
									</div>
									<div className="radio">
										<input type="radio" name="profile-page-filter" id="talents-filter" value="talents-filter"/>
										<label for="talents-filter">
											<span className="radio-text">Talents</span>
										</label>
									</div>
								</div>
								<a href='#' type="submit" className="btn-search"><i className="icon icon-loupe"></i></a>
							</form>
		    			</div>
		    			<div className="nav-list">
		    				<ul className="flexbox justify-space-between">
									<li>
											<a href="#">Teachers <div className="caret"></div></a>
									</li>
									<li className="active">
											<a href="#">Profile <div className="caret"></div></a>
									</li>
									<li>
											<a href="#">Favorites <div className="caret"></div></a>
									</li>
									<li>
											<a href="#">About <div className="caret"></div></a>
									</li>
								</ul>
		    			</div>
    				</section>
	    			<div className="user-box">
	    				<div className="user-photo">
	    					<i className="notif"></i>
	    				</div>
	    				<div className="user-box-nav dropdown">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Philip Seamor<span class="caret"></span></a>
							 <ul className="dropdown-menu">
								<li><a href="#">Action</a></li>
								<li><a href="#">Another action</a></li>
								<li><a href="#">Something else here</a></li>
								<li><a href="#">One more separated link</a></li>
							  </ul>
						</div>
	    			</div>
    			</section>
    		</nav>
		
			<div className="content">
				<div className="container-fluid">
					<div className="panel panel-default my-main-panel">
					  <div className="panel-body">
				    
						<div className="flexbox">
							<div className="right-col">
								{/* <!-- Nav tabs --> */}
								<ul className="nav nav-pills nav-stacked my-sidebar" role="tablist">
									<li role="presentation">
										<a href="#overview" aria-controls="overview" role="tab" data-toggle="tab">
											<span className="icon icon-overview"></span>
											Overview
										</a>
									</li>
									<li role="presentation">
										<a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">
											<span className="icon icon-message"></span>
											Messages
										</a>
									</li>
									<li role="presentation">
										<a href="#my-jobs" aria-controls="my-jobs" role="tab" data-toggle="tab">
											<span className="icon icon-jobs"></span>
											My Jobs
										</a>
									</li>
									<li role="presentation">
										<a href="#my-promo" aria-controls="my-promo" role="tab" data-toggle="tab">
											<span className="icon icon-promo"></span>
											My Promo
										</a>
									</li>
									<li role="presentation">
										<a href="#skills" aria-controls="skills" role="tab" data-toggle="tab">
											<span className="icon icon-skills"></span>
											My Skills
										</a>
									</li>
									<li role="presentation" className="active">
										<a href="#saved" aria-controls="saved" role="tab" data-toggle="tab">
											<span className="icon icon-saved"></span>
											Saved
										</a>
									</li>
									<li role="presentation">
										<a href="#media" aria-controls="media" role="tab" data-toggle="tab">
											<span className="icon icon-media"></span>
											My Media
										</a>
									</li>
									<li role="presentation">
										<a href="#accounts" aria-controls="accounts" role="tab" data-toggle="tab">
											<span className="icon icon-accounts"></span>
											Accounts
										</a>
									</li>
									<li role="presentation">
										<a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">
											<span className="icon icon-profile"></span>
											Profile
										</a>
									</li>
								</ul>
							</div> 
              {/* <!--right-col End--> */}
							
							<div className="left-col">
									{/* <!-- Tab panes --> */}
									<div className="tab-content my-central-info">
										<div role="tabpanel" className="tab-pane my-tab" id="overview">
											overview
										</div>
										<div role="tabpanel" className="tab-pane my-tab" id="messages">
											<div className="flexbox messages-wrapper">
												<div classNameclassName="dialogues dropdown-block">
													<div classNameclassName="dialogues-nav flexbox justify-space-between blue-color dropdown-block-nav">
														<div classNameclassName="dialogues-nav-title">
															All Users
														</div>
														<div classNameclassName="dialogues-nav-arrow dropdown-toggle-btn">
															<span classNameclassName="icon icon-next-arrow"></span>
														</div>
													</div>
													<div classNameclassName="filter-nav">
														<form classNameclassName="my-search-form filter-nav-search-form" role="search">
															<div classNameclassName="form-group">
																<input type="text" classNameclassName="form-control" placeholder="Search"/>
																<button type="submit" classNameclassName="search-form-btn"><span classNameclassName="icon icon-loupe"></span></button>
															</div>
														</form>
													</div>
													<div className="dialogues-list">
														<div className="dialog-item flexbox">
															<div className="dialog-img bg-cover circul-shape"></div>
															<div className="dialog-title">
																<div className="dialog-title-name">Philip Seamor</div>
																<div className="dialog-title-descr blue-color">Math Teacher</div>
															</div>className
															<div className="dialog-status stared">
																<span className="icon icon-star"></span>
																<span className="icon icon-star-full"></span>
															</div>
														</div>
														<div className="dialog-item flexbox">
															<div className="dialog-img bg-cover circul-shape"></div>
															<div className="dialog-title">
																<div className="dialog-title-name">Philip Seamor</div>
																<div className="dialog-title-descr blue-color">Math Teacher</div>
															</div>
															<div className="dialog-status stared">
																<span className="icon icon-star"></span>
																<span className="icon icon-star-full"></span>
															</div>
														</div>
														<div className="dialog-item flexbox">
															<div className="dialog-img bg-cover circul-shape"></div>
															<div className="dialog-title">
																<div className="dialog-title-name">Philip Seamor</div>
																<div className="dialog-title-descr blue-color">Math Teacher</div>
															</div>
															<div className="dialog-status stared">
																<span className="icon icon-star"></span>
																<span className="icon icon-star-full"></span>
															</div>
														</div>
														<div className="dialog-item flexbox">
															<div className="dialog-img bg-cover circul-shape"></div>
															<div className="dialog-title">
																<div className="dialog-title-name">Philip Seamor</div>
																<div className="dialog-title-descr blue-color">Math Teacher</div>
															</div>
															<div className="dialog-status stared">
																<span className="icon icon-star"></span>
																<span className="icon icon-star-full"></span>
															</div>
														</div>className
														<div className="dialog-item flexbox">
															<div className="dialog-img bg-cover circul-shape"></div>
															<div className="dialog-title">
																<div className="dialog-title-name">Philip Seamor</div>
																<div className="dialog-title-descr blue-color">Math Teacher</div>
															</div>
															<div className="dialog-status stared">
																<span className="icon icon-star"></span>
																<span className="icon icon-star-full"></span>
															</div>
														</div>
														<div className="dialog-item flexbox">
															<div className="dialog-img bg-cover circul-shape"></div>
															<div className="dialog-title">
																<div className="dialog-title-name">Philip Seamor</div>
																<div className="dialog-title-descr blue-color">Math Teacher</div>
															</div>
															<div className="dialog-status stared">
																<span className="icon icon-star"></span>
																<span className="icon icon-star-full"></span>
															</div>
														</div>
														<div className="dialog-item flexbox">
															<div className="dialog-img bg-cover circul-shape"></div>
															<div className="dialog-title">
																<div className="dialog-title-name">Philip Seamor</div>
																<div className="dialog-title-descr blue-color">Math Teacher</div>
															</div>
															<div className="dialog-status">
																<span className="icon icon-star"></span>
																<span className="icon icon-star-full"></span>
															</div>
														</div>
													</div>
												</div>
												<div className="communication conversation-open">
													<div className="conversation">
														<div className="conversation-nav flexbox">
															<div className="dialog-box">
																<div className="dialog-photo bg-cover circul-shape"></div>
																<div className="dialog-name">Philip Seamor</div>
															</div>
															<div className="conversation-nav-btn">
																<button type="button" className="btn btn-blue btn-bold" data-toggle="modal" data-target="#hire-bid-modal-acception">Hire</button>
															</div>
															<div className="conversation-nav-btn conversation-nav-btn--add">
																<button type="button" className="btn btn-blue-border btn-blue-hover">
																	<span className="icon icon-add"></span>
																</button>
															</div>
														</div>
														<div className="files dropdown-block">
															<div className="files-nav flexbox justify-space-between blue-color dropdown-block-nav">
																<div className="files-nav-title">
																	Files
																</div>
																<div className="files-nav-add-btn">
																	<span className="add-btn btn btn-blue-border btn-blue-hover btn-bold">Add Files</span>
																</div>
																<div className="files-nav-add-btn files-nav-arrow dropdown-toggle-btn">
																	<span className="icon icon-next-arrow"></span>
																</div>
															</div>	
															<div className="files-list">
																<div className="files-item flexbox justify-space-between">
																	<div className="file-icon">
																		<span className="icon icon-zip blue-color"></span>
																	</div>
																	<div className="file-title">
																		<div className="file-name">File.file</div>
																		<div className="file-author">Philip Seamor</div>
																	</div>
																	<div className="file-date">10:33PM</div>
																</div>
																<div className="files-item flexbox justify-space-between">
																	<div className="file-icon">
																		<span className="icon icon-zip blue-color"></span>
																	</div>
																	<div className="file-title">
																		<div className="file-name">File.file</div>
																		<div className="file-author">Philip Seamor</div>
																	</div>
																	<div className="file-date">10:33PM</div>
																</div>
																<div className="files-item flexbox justify-space-between">
																	<div className="file-icon">
																		<span className="icon icon-zip blue-color"></span>
																	</div>
																	<div className="file-title">
																		<div className="file-name">File.file</div>
																		<div className="file-author">Philip Seamor</div>
																	</div>
																	<div className="file-date">10:33PM</div>
																</div>
																<div className="files-item flexbox justify-space-between">
																	<div className="file-icon">
																		<span className="icon icon-zip blue-color"></span>
																	</div>
																	<div className="file-title">
																		<div className="file-name">File.file</div>
																		<div className="file-author">Philip Seamor</div>
																	</div>
																	<div className="file-date">10:33PM</div>
																</div>
															</div>
														</div>
														<div className="filter-nav">
															<form className="my-search-form filter-nav-search-form" role="search">
																<div className="form-group">
																	<input type="text" className="form-control" placeholder="Search for message.."/>
																	<button type="submit" className="search-form-btn"><span className="icon icon-loupe"></span></button>
																</div>
															</form>
														</div>
														<div className="communication-list">
															<div className="communication-item conversation-item--1 flexbox">
																<div className="communication-photo bg-cover circul-shape"></div>
																<div className="communication-content">
																	<div className="communication-name blue-color">Philip Seamor</div>
																	<div className="communication-text">
																		<p>Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the</p>
																	</div>
																</div>
																<div className="communication-time">11 AM</div>
																<div className="communication-status read">
																	<span className="icon icon-check-mark"></span>
																</div>
															</div>
															<div className="separator">
																<span className="separator-text">Today Sep 10</span>
															</div>
															<div className="communication-item conversation-item--2 flexbox">
																<div className="communication-photo bg-cover circul-shape"></div>
																<div className="communication-content">
																	<div className="communication-name blue-color">Philip Seamor</div>
																	<div className="communication-text">
																		<p><b>Philip</b> hire and sent you a <a href="#">job contract</a> for your approval</p>
																	</div>
																</div>
																<div className="communication-time">4 AM</div>
																<div className="communication-status read">
																	<span className="icon icon-check-mark"></span>
																</div>
															</div>
														</div>
														<div className="message-form">
															<form className="flexbox justify-space-between">
																<div className="form-group">
																	<textarea placeholder="Write a message"></textarea>
																	<div className="form-btn-group flexbox flex-vertical justify-space-around">
																		<button type="button" className="btn icon-btn">
																			<span className="icon icon-smile"></span>
																		</button>
																		<button type="button" className="btn icon-btn">
																			<span className="icon icon-attachment"></span>
																		</button>
																	</div>
																</div>
																<button type="button" className="btn btn-blue btn-bold circul-shape">Send</button>
															</form>
														</div>
													</div>
													<div class="messages">
														<div class="files dropdown-block">
															<div class="files-nav flexbox justify-space-between blue-color dropdown-block-nav">
																<div class="files-nav-title">
																	Files
																</div>
																<div class="files-nav-add-btn">
																	<span class="add-btn btn btn-blue-border btn-blue-hover btn-bold">Add Files</span>
																</div>
																<div class="files-nav-add-btn files-nav-arrow dropdown-toggle-btn">
																	<span class="icon icon-next-arrow"></span>
																</div>
															</div>	
															<div class="files-list">
																<div class="files-item flexbox justify-space-between">
																	<div class="file-icon">
																		<span class="icon icon-zip blue-color"></span>
																	</div>
																	<div class="file-title">
																		<div class="file-name">File.file</div>
																		<div class="file-author">Philip Seamor</div>
																	</div>
																	<div class="file-date">10:33PM</div>
																</div>
																<div class="files-item flexbox justify-space-between">
																	<div class="file-icon">
																		<span class="icon icon-zip blue-color"></span>
																	</div>
																	<div class="file-title">
																		<div class="file-name">File.file</div>
																		<div class="file-author">Philip Seamor</div>
																	</div>
																	<div class="file-date">10:33PM</div>
																</div>
																<div class="files-item flexbox justify-space-between">
																	<div class="file-icon">
																		<span class="icon icon-zip blue-color"></span>
																	</div>
																	<div class="file-title">
																		<div class="file-name">File.file</div>
																		<div class="file-author">Philip Seamor</div>
																	</div>
																	<div class="file-date">10:33PM</div>
																</div>
																<div class="files-item flexbox justify-space-between">
																	<div class="file-icon">
																		<span class="icon icon-zip blue-color"></span>
																	</div>
																	<div class="file-title">
																		<div class="file-name">File.file</div>
																		<div class="file-author">Philip Seamor</div>
																	</div>
																	<div class="file-date">10:33PM</div>
																</div>
															</div>
														</div>
														<div class="filter-nav">
															<form class="my-search-form filter-nav-search-form" role="search">
																<div class="form-group">
																	<input type="text" class="form-control" placeholder="Search for conversation ..."/>
																	<button type="submit" class="search-form-btn"><span class="icon icon-loupe"></span></button>
																</div>
															</form>
														</div>
														<div class="communication-list">
															<div class="communication-item message-item flexbox">
																<div class="communication-photo bg-cover circul-shape"></div>
																<div class="communication-content">
																	<div class="communication-name blue-color">Philip Seamor</div>
																	<div class="communication-text">
																		<p>Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the</p>
																	</div>
																</div>
																<div class="communication-time">11 AM</div>
																<div class="communication-status read">
																	<span class="icon icon-check-mark"></span>
																</div>
															</div>
															<div class="communication-item message-item flexbox">
																<div class="communication-photo bg-cover circul-shape"></div>
																<div class="communication-content">
																	<div class="communication-name blue-color">Philip Seamor</div>
																	<div class="communication-text">
																		<p>Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the</p>
																	</div>
																</div>
																<div class="communication-time">11 AM</div>
																<div class="communication-status read">
																	<span class="icon icon-check-mark"></span>
																</div>
															</div>
															<div class="separator">
																<span class="separator-text">Today Sep 10</span>
															</div>
															<div class="communication-item message-item flexbox">
																<div class="communication-photo bg-cover circul-shape"></div>
																<div class="communication-content">
																	<div class="communication-name blue-color">Philip Seamor</div>
																	<div class="communication-text">
																		<p>Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the</p>
																	</div>
																</div>
																<div class="communication-time">4 AM</div>
																<div class="communication-status read">
																	<span class="icon icon-check-mark"></span>
																</div>
															</div>
														</div>
														<div class="message-form">
															<form class="flexbox justify-space-between">
																<div class="form-group">
																	<textarea placeholder="Write a message"></textarea>
																	<div class="form-btn-group flexbox flex-vertical justify-space-around">
																		<button type="button" class="btn icon-btn">
																			<span class="icon icon-smile"></span>
																		</button>
																		<button type="button" class="btn icon-btn">
																			<span class="icon icon-attachment"></span>
																		</button>
																	</div>
																</div>
																<button type="button" class="btn btn-blue btn-bold circul-shape">Send</button>
															</form>
														</div>
													</div>
												</div>
												<div class="files">
													<div class="files-nav flexbox justify-space-between blue-color">
														<div class="files-nav-title">
															Files
														</div>
														<div class="files-nav-add-btn">
															<span class="add-btn btn btn-blue-border btn-blue-hover btn-bold">Add Files</span>
														</div>
													</div>	
													<div class="files-list">
														<div class="files-item flexbox justify-space-between">
															<div class="file-icon">
																<span class="icon icon-zip blue-color"></span>
															</div>
															<div class="file-title">
																<div class="file-name">File.file</div>
																<div class="file-author">Philip Seamor</div>
															</div>
															<div class="file-date">10:33PM</div>
														</div>
														<div class="files-item flexbox justify-space-between">
															<div class="file-icon">
																<span class="icon icon-zip blue-color"></span>
															</div>
															<div class="file-title">
																<div class="file-name">File.file</div>
																<div class="file-author">Philip Seamor</div>
															</div>
															<div class="file-date">10:33PM</div>
														</div>
														<div class="files-item flexbox justify-space-between">
															<div class="file-icon">
																<span class="icon icon-zip blue-color"></span>
															</div>
															<div class="file-title">
																<div class="file-name">File.file</div>
																<div class="file-author">Philip Seamor</div>
															</div>
															<div class="file-date">10:33PM</div>
														</div>
														<div class="files-item flexbox justify-space-between">
															<div class="file-icon">
																<span class="icon icon-zip blue-color"></span>
															</div>
															<div class="file-title">
																<div class="file-name">File.file</div>
																<div class="file-author">Philip Seamor</div>
															</div>
															<div class="file-date">10:33PM</div>
														</div>
													</div>
												</div>
											</div>
										</div>
                    {/* <!--messeges page END --> */}
										{/* <!--Promotions page START --> */}
										<div role="tabpanel" class="tab-pane my-tab" id="my-promo">
											<ul class="nav nav-tabs my-central-info-nav clearfix flexbox" role="tablist">
												<li><a href="#">Your Promotions</a></li>
											</ul>
											<div class="promo-block">
												<div class="panel-block flexbox">
													<div class="btn-wrapper flexbox flex-vertical">
														<button type="button" class="icon-btn">
															<span class="icon icon-garbage"></span>
														</button>
														<button type="button" class="icon-btn">
															<span class="icon icon-pencil"></span>
														</button>
													</div>
													<div class="panel-wrapper">
														<div class="panel panel-blue">
															<div class="panel-title">Math  Home Tutoring</div>
															<div class="panel-text">
																Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
															</div>
														</div>
													</div>
												</div>
												<div class="panel-block flexbox">
													<div class="btn-wrapper flexbox flex-vertical">
														<button type="button" class="icon-btn">
															<span class="icon icon-garbage"></span>
														</button>
														<button type="button" class="icon-btn">
															<span class="icon icon-pencil"></span>
														</button>
													</div>
													<div class="panel-wrapper">
														<div class="panel panel-orange">
															<div class="panel-title">Math  Home Tutoring</div>
															<div class="panel-text">
																Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="promo-block">
												<div class="promo-block-title">Create your Promotions</div>
												<div class="promo-block-text">Post here what are you willing to do for free for engaging potential clients, Skill test or just getting more experience.​</div>
												<div class="promo-block-form post-job-inputs">
													<input type="text" placeholder="Job Title" class="job-title form-control"/>
													<textarea placeholder="Job Description" class="form-control job-descr" rows="4"></textarea>
												</div>
												<button class="btn btn-bold btn-blue">Create Promotion</button>
											</div>
											<div class="promo-block">
												<div class="promo-block-title">Or Chouse  Promotions</div>
												<div class="promo-block-text">Choose promotion that we found effective for other user ​</div>
												<div class="promo-block-form">
													<div class="promo-block-form-header flexbox justify-space-between">
														<div class="filter-nav flexbox justify-space-between">
															<div class="my-select-box form-control">
																<span class="my-select-result flexbox justify-space-between">
																	<span class="text">Category</span> 
																	<span class="caret"></span>
																</span>
																<div class="my-select-options">
																	<div class="radio-block">
																		<div class="radio">
																			<input type="radio" name="numb-options" id="1-term" value="1-term" checked=""/>
																			<label for="1-term">
																				<span class="radio-text">1</span>
																			</label>
																		</div>
																		<div class="radio">
																			<input type="radio" name="numb-options" id="2-term" value="2-term" checked=""/>
																			<label for="2-term">
																				<span class="radio-text">2</span>
																			</label>
																		</div>
																	</div>	
																</div>
															</div>
															<div class="my-select-box form-control">
																<span class="my-select-result flexbox justify-space-between">
																	<span class="text">Sub Category</span> 
																	<span class="caret"></span>
																</span>
																<div class="my-select-options">
																	<div class="radio-block">
																		<div class="radio">
																			<input type="radio" name="numb-options" id="1-term" value="1-term" checked=""/>
																			<label for="1-term">
																				<span class="radio-text">1</span>
																			</label>
																		</div>
																		<div class="radio">
																			<input type="radio" name="numb-options" id="2-term" value="2-term" checked=""/>
																			<label for="2-term">
																				<span class="radio-text">2</span>
																			</label>
																		</div>
																	</div>	
																</div>
															</div>
														</div>
														<div class="results-numb">
															<span class="numb">12</span> results
														</div>
													</div>
													<div class="promo-block-form-body">
														<div class="checkbox-block">
															<input type="checkbox" id="skill-test-1"/>
															<label for="skill-test-1">
																<div class="panel-block flexbox">
																	<span class="checkbox-circle checkbox-sqw">
																		<span class="icon icon-check-mark"></span>
																	</span>
																	<div class="panel-wrapper">
																		<div class="panel panel-blue">
																			<div class="panel-title flexbox justify-space-between">
																				<span>Math  Home Tutoring</span>
																				<span class="btn btn-blue-border btn-bold">Free</span>
																			</div>
																			<div class="panel-text">
																				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
																			</div>
																		</div>
																	</div>
																</div>
															</label>
														</div>
														<div class="checkbox-block">
															<input type="checkbox" id="skill-test-2"/>
															<label for="skill-test-2">
																<div class="panel-block flexbox">
																	<span class="checkbox-circle checkbox-sqw">
																		<span class="icon icon-check-mark"></span>
																	</span>
																	<div class="panel-wrapper">
																		<div class="panel panel-orange">
																			<div class="panel-title flexbox justify-space-between">
																				<span>Math  Home Tutoring</span>
																				<span class="btn btn-blue-border btn-bold">Free</span>
																			</div>
																			<div class="panel-text">
																				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
																			</div>
																		</div>
																	</div>
																</div>
															</label>
														</div>
														<div class="checkbox-block">
															<input type="checkbox" id="skill-test-3"/>
															<label for="skill-test-3">
																<div class="panel-block flexbox">
																	<span class="checkbox-circle checkbox-sqw">
																		<span class="icon icon-check-mark"></span>
																	</span>
																	<div class="panel-wrapper">
																		<div class="panel panel-pink">
																			<div class="panel-title flexbox justify-space-between">
																				<span>Math  Home Tutoring</span>
																				<span class="btn btn-blue-border btn-bold">Free</span>
																			</div>
																			<div class="panel-text">
																				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
																			</div>
																		</div>
																	</div>
																</div>
															</label>
														</div>
													</div>
												</div>
												<button class="btn btn-bold btn-blue">Add Promotion</button>
											</div>
										</div>
                    {/* <!--Promotions page END --> */}
										{/* <!--Skills page START --> */}
										<div role="tabpanel" class="tab-pane my-tab step-1-open" id="skills">
											<div class="steps-nav flexbox justify-space-between">
												<div class="steps-nav-title">Your Shared Skills</div>
												<div class="steps-nav-btn">
													<div class="btn-group step-2-btn clearfix">
														<button type="button" class="btn btn-blue-border btn-bold step-1-toggler step-toggler">Back</button>
														<button type="button" class="btn btn-blue btn-bold step-3-toggler step-toggler">Done</button>
													</div>
													<button type="button" class="btn btn-blue btn-bold step-3-btn step-1-toggler step-toggler">Add</button>
												</div>
											</div>
											<div class="step-1">
												<div class="skill-block skill-cat">
													<div class="skill-block-title">Choose  Your Skill Category</div>
													<div class="skill-block-list">
														<form>
															<div class="checkbox-block">
																<input type="checkbox" id="cat-1"/>
																<label for="cat-1">
																	<span class="checkbox-circle">
																		<span class="icon icon-check-mark"></span>
																	</span>
																	<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																</label>
															</div>
															<div class="checkbox-block">
																<input type="checkbox" id="cat-2"></input>
																<label for="cat-2">
																	<span class="checkbox-circle">
																		<span class="icon icon-check-mark"></span>
																	</span>
																	<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																</label>
															</div>
															<div class="checkbox-block">
																<input type="checkbox" id="cat-3"></input>
																<label for="cat-3">
																	<span class="checkbox-circle">
																		<span class="icon icon-check-mark"></span>
																	</span>
																	<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																</label>
															</div>
															<div class="checkbox-block">
																<input type="checkbox" id="cat-4"></input>
																<label for="cat-4">
																	<span class="checkbox-circle">
																		<span class="icon icon-check-mark"></span>
																	</span>
																	<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																</label>
															</div>
															<div class="checkbox-block">
																<input type="checkbox" id="cat-5"></input>
																<label for="cat-5">
																	<span class="checkbox-circle">
																		<span class="icon icon-check-mark"></span>
																	</span>
																	<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																</label>
															</div>
															<div class="checkbox-block">
																<input type="checkbox" id="cat-6"></input>
																<label for="cat-6">
																	<span class="checkbox-circle">
																		<span class="icon icon-check-mark"></span>
																	</span>
																	<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																</label>
															</div>
															<div class="checkbox-block">
																<input type="checkbox" id="cat-7"></input>
																<label for="cat-7">
																	<span class="checkbox-circle">
																		<span class="icon icon-check-mark"></span>
																	</span>
																	<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																</label>
															</div>
															<div class="checkbox-block">
																<input type="checkbox" id="cat-8"></input>
																<label for="cat-8">
																	<span class="checkbox-circle">
																		<span class="icon icon-check-mark"></span>
																	</span>
																	<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																</label>
															</div>
															<div class="checkbox-block">
																<input type="checkbox" id="cat-9"></input>
																<label for="cat-9">
																	<span class="checkbox-circle">
																		<span class="icon icon-check-mark"></span>
																	</span>
																	<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																</label>
															</div>
															<div class="checkbox-block">
																<input type="checkbox" id="cat-10"></input>
																<label for="cat-10">
																	<span class="checkbox-circle">
																		<span class="icon icon-check-mark"></span>
																	</span>
																	<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																</label>
															</div>
														</form>
													</div>
													<button type="button" class="btn btn-blue btn-bold step-2-toggler step-toggler">Next</button>
												</div>
											</div>
											<div class="step-2">
												<div class="skill-subcat">
													<div class="flexbox justify-space-between">
														<div class="skill-block">
															<div class="skill-block-title">Math &amp; Science</div>
															<div class="skill-block-list">
																<form>
																	<div class="checkbox-block">
																		<input type="checkbox" id="math-1"></input>
																		<label for="math-1">
																			<span class="checkbox-circle">
																				<span class="icon icon-check-mark"></span>
																			</span>
																			<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																		</label>
																	</div>
																	<div class="checkbox-block">
																		<input type="checkbox" id="math-2"></input>
																		<label for="math-2">
																			<span class="checkbox-circle">
																				<span class="icon icon-check-mark"></span>
																			</span>
																			<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																		</label>
																	</div>
																	<div class="checkbox-block">
																		<input type="checkbox" id="math-3"></input>
																		<label for="math-3">
																			<span class="checkbox-circle">
																				<span class="icon icon-check-mark"></span>
																			</span>
																			<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																		</label>
																	</div>
																	<div class="checkbox-block">
																		<input type="checkbox" id="math-4"></input>
																		<label for="math-4">
																			<span class="checkbox-circle">
																				<span class="icon icon-check-mark"></span>
																			</span>
																			<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																		</label>
																	</div>
																	<div class="checkbox-block">
																		<input type="checkbox" id="math-5"></input>
																		<label for="math-5">
																			<span class="checkbox-circle">
																				<span class="icon icon-check-mark"></span>
																			</span>
																			<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																		</label>
																	</div>
																	<div class="checkbox-block">
																		<input type="checkbox" id="math-6"></input>
																		<label for="math-6">
																			<span class="checkbox-circle">
																				<span class="icon icon-check-mark"></span>
																			</span>
																			<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																		</label>
																	</div>
																	<div class="checkbox-block">
																		<input type="checkbox" id="math-7"></input>
																		<label for="math-7">
																			<span class="checkbox-circle">
																				<span class="icon icon-check-mark"></span>
																			</span>
																			<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																		</label>
																	</div>
																	<div class="checkbox-block">
																		<input type="checkbox" id="math-8"></input>
																		<label for="math-8">
																			<span class="checkbox-circle">
																				<span class="icon icon-check-mark"></span>
																			</span>
																			<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																		</label>
																	</div>
																	<div class="checkbox-block">
																		<input type="checkbox" id="math-9"></input>
																		<label for="math-9">
																			<span class="checkbox-circle">
																				<span class="icon icon-check-mark"></span>
																			</span>
																			<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																		</label>
																	</div>
																	<div class="checkbox-block">
																		<input type="checkbox" id="math-10"></input>
																		<label for="math-10">
																			<span class="checkbox-circle">
																				<span class="icon icon-check-mark"></span>
																			</span>
																			<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																		</label>
																	</div>
																</form>
															</div>
														</div>
														<div class="skill-sub-block">
															<form class="form-group">
																<input type="text" class="form-control" placeholder="Write new skill"></input>
																<button class="add-btn btn btn-blue">
																	<span class="icon icon-add"></span>
																</button>
															</form>
															<div class="skill-tags-block clearfix">
																<div class="skill-tag">Math</div>
																<div class="skill-tag">Trigonometry</div>
																<div class="skill-tag">Calculus</div>
																<div class="skill-tag">Trigonometry</div>
																<div class="skill-tag">Calculus</div>
																<div class="skill-tag">Trigonometry</div>
																<div class="skill-tag">Calculus</div>
																<div class="skill-tag">Math</div>
															</div>
														</div>
													</div>
												</div>
												<div class="skill-subcat">
													<div class="flexbox justify-space-between">
														<div class="skill-block">
															<div class="skill-block-title">Biology</div>
															<div class="skill-block-list">
																<form>
																	<div class="checkbox-block">
																		<input type="checkbox" id="biol-6"></input>
																		<label for="biol-6">
																			<span class="checkbox-circle">
																				<span class="icon icon-check-mark"></span>
																			</span>
																			<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																		</label>
																	</div>
																	<div class="checkbox-block">
																		<input type="checkbox" id="biol-7"></input>
																		<label for="biol-7">
																			<span class="checkbox-circle">
																				<span class="icon icon-check-mark"></span>
																			</span>
																			<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																		</label>
																	</div>
																</form>
															</div>
														</div>
														<div class="skill-sub-block">
															<form class="form-group">
																<input type="text" class="form-control" placeholder="Write new skill"></input>
																<button class="add-btn btn btn-blue">
																	<span class="icon icon-add"></span>
																</button>
															</form>
															<div class="skill-tags-block clearfix">
																<div class="skill-tag">Math</div>
																<div class="skill-tag">Trigonometry</div>
																<div class="skill-tag">Calculus</div>
																<div class="skill-tag">Trigonometry</div>
																<div class="skill-tag">Calculus</div>
																<div class="skill-tag">Trigonometry</div>
																<div class="skill-tag">Calculus</div>
																<div class="skill-tag">Math</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="step-3">
												<div class="skill-subcat skill-subcat--item">
													<div class="flexbox justify-space-between">
														<div class="skill-block">
															<div class="skill-block-title">Math &amp; Science</div>
															<div class="skill-block-list">
																<form>
																	<div class="checkbox-block">
																		<input type="checkbox" id="math-1" checked></input>
																		<label for="math-1">
																			<span class="checkbox-circle">
																				<span class="icon icon-check-mark"></span>
																			</span>
																			<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																		</label>
																	</div>
																	<div class="checkbox-block">
																		<input type="checkbox" id="math-2" checked></input>
																		<label for="math-2">
																			<span class="checkbox-circle">
																				<span class="icon icon-check-mark"></span>
																			</span>
																			<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																		</label>
																	</div>
																	<div class="checkbox-block">
																		<input type="checkbox" id="math-3" checked></input>
																		<label for="math-3">
																			<span class="checkbox-circle">
																				<span class="icon icon-check-mark"></span>
																			</span>
																			<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																		</label>
																	</div>
																	<div class="checkbox-block">
																		<input type="checkbox" id="math-4" checked></input>
																		<label for="math-4">
																			<span class="checkbox-circle">
																				<span class="icon icon-check-mark"></span>
																			</span>
																			<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																		</label>
																	</div>
																	<div class="checkbox-block">
																		<input type="checkbox" id="math-5" checked></input>
																		<label for="math-5">
																			<span class="checkbox-circle">
																				<span class="icon icon-check-mark"></span>
																			</span>
																			<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																		</label>
																	</div>
																</form>
															</div>
														</div>
														<div class="skill-sub-block">
															<div class="skill-block-title">Skills</div>
															<div class="skill-tags-block clearfix">
																<div class="skill-tag">Math</div>
																<div class="skill-tag">Trigonometry</div>
																<div class="skill-tag">Calculus</div>
																<div class="skill-tag">Trigonometry</div>
																<div class="skill-tag">Calculus</div>
																<div class="skill-tag">Trigonometry</div>
																<div class="skill-tag">Calculus</div>
																<div class="skill-tag">Math</div>
															</div>
														</div>
													</div>
													<div class="skill-block-footer">
														<a href="#">View More</a>
														<a href="#">Edit</a>
													</div>
												</div>
												<div class="skill-subcat skill-subcat--item">
													<div class="flexbox justify-space-between">
														<div class="skill-block">
															<div class="skill-block-title">Biology</div>
															<div class="skill-block-list">
																<form>
																	<div class="checkbox-block">
																		<input type="checkbox" id="biol-6" checked></input>
																		<label for="biol-6">
																			<span class="checkbox-circle">
																				<span class="icon icon-check-mark"></span>
																			</span>
																			<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
																		</label>
																	</div>
																</form>
															</div>
														</div>
														<div class="skill-sub-block">
															<div class="skill-block-title">Skills</div>
															<div class="skill-tags-block clearfix">
																<div class="skill-tag">Math</div>
																<div class="skill-tag">Trigonometry</div>
																<div class="skill-tag">Calculus</div>
																<div class="skill-tag">Trigonometry</div>
																<div class="skill-tag">Calculus</div>
																<div class="skill-tag">Trigonometry</div>
																<div class="skill-tag">Calculus</div>
																<div class="skill-tag">Math</div>
															</div>
														</div>
													</div>
													<div class="skill-block-footer">
														<a href="#">View More</a>
														<a href="#">Edit</a>
													</div>
												</div>
												<div class="skill-subcat skill-subcat--new">
													<div class="skill-block-title">New Skill Category</div>
													<div class="flexbox justify-space-between">
														<div class="skill-block">
															<form>
																<div class="input-block">
																	Category
																	<input type="text" placeholder="Insert your new category here.."></input>
																</div>
															</form>
														</div>
														<div class="skill-block">
															<form>
																<div class="input-block">
																	Subcategory
																	<input type="text" placeholder="Insert your new subcategory here.."></input>
																</div>
															</form>
														</div>
														<div class="skill-sub-block">
															<div class="skill-block-title">Skills</div>
															<form class="form-group">
																<input type="text" class="form-control" placeholder="Write new skill"></input>
																<button class="add-btn btn btn-blue">
																	<span class="icon icon-add"></span>
																</button>
															</form>
															<div class="skill-tags-block clearfix">
																<div class="skill-tag">Math</div>
																<div class="skill-tag">Trigonometry</div>
															</div>
														</div>
													</div>
													<button type="button" class="btn btn-blue add-skill-btn">Add Skill Category</button>
												</div>
												<div class="skills-footer">
													<a href="#">
														<span class="icon icon-add btn btn-blue add-btn"></span>
														Add Here New Teachers Skill Category
													</a>
												</div>
											</div>
										</div>
                    {/* <!--Skills page END --> */}
										{/* <!--saved page START --> */}
										<div role="tabpanel" class="tab-pane my-tab active" id="saved">
											<div class="row">
												<div class="col-sm-12">
												{/* <!-- Nav tabs --> */}
												<nav class="flexbox justify-space-between">
													<ul class="nav nav-tabs my-central-info-nav clearfix flexbox justify-space-start" role="tablist">
														<li role="presentation" class="active"><a href="#saved-tallents" aria-controls="saved-tallents" role="tab" data-toggle="tab">Tallents</a></li>
														<li role="presentation"><a href="#saved-jobs" aria-controls="saved-jobs" role="tab" data-toggle="tab">Jobs</a></li>
														<li role="presentation"><a href="#saved-blogs" aria-controls="saved-blogs" role="tab" data-toggle="tab">Blogs</a></li>
													</ul>
													<div class="search-more-btn-wrapper">
														<button class="btn btn-blue search-more-btn">Search More</button>
													</div>
												</nav>
													 {/* <!-- Tab panes --> */}
													<div class="tab-content">
														<div role="tabpanel" class="tab-pane active my-tab-in-tab container-fluid" id="saved-tallents">
															<div class="row">
																<div class="col-sm-12">
																	<div class="tab-pane-content job-boxes-wrapper job-boxes-wrapper--talents flexbox justify-space-start flex-wrap">
																		<div class="job-box-block">
																			<div class="panel panel-default job-box awarded">
																				<div class="job-box-header flexbox justify-space-between">
																					<div class="job-box-photo-block">
																						<div class="job-box-photo bg-cover circul-shape">
																							<i class="notif"></i>
																							<i class="award">
																								<span class="icon icon-badge-flat"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span></span>
																							</i>
																						</div>
																					</div>
																					<div class="job-box-title">
																						<div class="job-box-name blue-color">Clifford Love</div>
																						<div class="job-box-prof">JUNIOR / UI Designer</div>
																					</div>
																					<div class="job-box-rate">
																						<span class="icon icon-star-full"></span>
																						<span class="rate-result">5.8</span>
																					</div>
																				</div>
																				<div class="job-box-body flexbox justify-space-between">
																					<div class="job-box-tips">
																						<div class="tip">
												  											<span class="icon icon-award"></span>
												  											<span class="text">95%</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-jobs"></span>
												  											<span class="text">110 h/2 J</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-location"></span>
												  											<span class="text">Aus..</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-clock-1"></span>
												  											<span class="text">&gt; 30h</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-wallet"></span>
												  											<span class="text">24$/h</span>
													  									</div>
																					</div>
																					<div class="job-box-deskr">
																						<div class="text">
																							Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus ...
																						</div>
																						<div class="skill-tags-block clearfix">
																							<div class="skill-tag">Math</div>
																							<div class="skill-tag">Trigonometry</div>
																							<div class="skill-tag">Calculus</div>
																						</div>
																					</div>
																				</div>
																				<div class="job-box-footer flexbox justify-space-between">
																					<div class="additional-info blue-color">Math  Home Tutoring</div>
																					<button class="btn btn-blue btn-bold">Free</button>
																				</div>
																			</div>
                                      {/* <!--job-box End--> */}
																		</div>
																		<div class="job-box-block">
																			<div class="panel panel-default job-box awarded">
																				<div class="job-box-header flexbox justify-space-between">
																					<div class="job-box-photo-block">
																						<div class="job-box-photo bg-cover circul-shape">
																							<i class="notif"></i>
																							<i class="award">
																								<span class="icon icon-badge-flat"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span></span>
																							</i>
																						</div>
																					</div>
																					<div class="job-box-title">
																						<div class="job-box-name blue-color">Clifford Love</div>
																						<div class="job-box-prof">JUNIOR / UI Designer</div>
																					</div>
																					<div class="job-box-rate">
																						<span class="icon icon-star-full"></span>
																						<span class="rate-result">5.8</span>
																					</div>
																				</div>
																				<div class="job-box-body flexbox justify-space-between">
																					<div class="job-box-tips">
																						<div class="tip">
												  											<span class="icon icon-award"></span>
												  											<span class="text">95%</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-jobs"></span>
												  											<span class="text">110 h/2 J</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-location"></span>
												  											<span class="text">Aus..</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-clock-1"></span>
												  											<span class="text">&gt; 30h</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-wallet"></span>
												  											<span class="text">24$/h</span>
													  									</div>
																					</div>
																					<div class="job-box-deskr">
																						<div class="text">
																							Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus ...
																						</div>
																						<div class="skill-tags-block clearfix">
																							<div class="skill-tag">Math</div>
																							<div class="skill-tag">Trigonometry</div>
																							<div class="skill-tag">Calculus</div>
																						</div>
																					</div>
																				</div>
																				<div class="job-box-footer flexbox justify-space-between">
																					<div class="additional-info blue-color">Math  Home Tutoring</div>
																					<button class="btn btn-blue btn-bold">Free</button>
																				</div>
																			</div>
                                      {/* <!--job-box End--> */}
																		</div>
																		<div class="job-box-block">
																			<div class="panel panel-default job-box awarded">
																				<div class="job-box-header flexbox justify-space-between">
																					<div class="job-box-photo-block">
																						<div class="job-box-photo bg-cover circul-shape">
																							<i class="notif"></i>
																							<i class="award">
																								<span class="icon icon-badge-flat"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span></span>
																							</i>
																						</div>
																					</div>
																					<div class="job-box-title">
																						<div class="job-box-name blue-color">Clifford Love</div>
																						<div class="job-box-prof">JUNIOR / UI Designer</div>
																					</div>
																					<div class="job-box-rate">
																						<span class="icon icon-star-full"></span>
																						<span class="rate-result">5.8</span>
																					</div>
																				</div>
																				<div class="job-box-body flexbox justify-space-between">
																					<div class="job-box-tips">
																						<div class="tip">
												  											<span class="icon icon-award"></span>
												  											<span class="text">95%</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-jobs"></span>
												  											<span class="text">110 h/2 J</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-location"></span>
												  											<span class="text">Aus..</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-clock-1"></span>
												  											<span class="text">&gt; 30h</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-wallet"></span>
												  											<span class="text">24$/h</span>
													  									</div>
																					</div>
																					<div class="job-box-deskr">
																						<div class="text">
																							Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus ...
																						</div>
																						<div class="skill-tags-block clearfix">
																							<div class="skill-tag">Math</div>
																							<div class="skill-tag">Trigonometry</div>
																							<div class="skill-tag">Calculus</div>
																						</div>
																					</div>
																				</div>
																				<div class="job-box-footer flexbox justify-space-between">
																					<div class="additional-info blue-color">Math  Home Tutoring</div>
																					<button class="btn btn-blue btn-bold">Free</button>
																				</div>
																			</div>
                                      {/* <!--job-box End--> */}
																		</div>
																		<div class="job-box-block">
																			<div class="panel panel-default job-box awarded">
																				<div class="job-box-header flexbox justify-space-between">
																					<div class="job-box-photo-block">
																						<div class="job-box-photo bg-cover circul-shape">
																							<i class="notif"></i>
																							<i class="award">
																								<span class="icon icon-badge-flat"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span></span>
																							</i>
																						</div>
																					</div>
																					<div class="job-box-title">
																						<div class="job-box-name blue-color">Clifford Love</div>
																						<div class="job-box-prof">JUNIOR / UI Designer</div>
																					</div>
																					<div class="job-box-rate">
																						<span class="icon icon-star-full"></span>
																						<span class="rate-result">5.8</span>
																					</div>
																				</div>
																				<div class="job-box-body flexbox justify-space-between">
																					<div class="job-box-tips">
																						<div class="tip">
												  											<span class="icon icon-award"></span>
												  											<span class="text">95%</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-jobs"></span>
												  											<span class="text">110 h/2 J</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-location"></span>
												  											<span class="text">Aus..</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-clock-1"></span>
												  											<span class="text">&gt; 30h</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-wallet"></span>
												  											<span class="text">24$/h</span>
													  									</div>
																					</div>
																					<div class="job-box-deskr">
																						<div class="text">
																							Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus ...
																						</div>
																						<div class="skill-tags-block clearfix">
																							<div class="skill-tag">Math</div>
																							<div class="skill-tag">Trigonometry</div>
																							<div class="skill-tag">Calculus</div>
																						</div>
																					</div>
																				</div>
																				<div class="job-box-footer flexbox justify-space-between">
																					<div class="additional-info blue-color">Math  Home Tutoring</div>
																					<button class="btn btn-blue btn-bold">Free</button>
																				</div>
																			</div>
                                      {/* <!--job-box End--> */}
																		</div>
																		<div class="job-box-block">
																			<div class="panel panel-default job-box awarded">
																				<div class="job-box-header flexbox justify-space-between">
																					<div class="job-box-photo-block">
																						<div class="job-box-photo bg-cover circul-shape">
																							<i class="notif"></i>
																							<i class="award">
																								<span class="icon icon-badge-flat"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span></span>
																							</i>
																						</div>
																					</div>
																					<div class="job-box-title">
																						<div class="job-box-name blue-color">Clifford Love</div>
																						<div class="job-box-prof">JUNIOR / UI Designer</div>
																					</div>
																					<div class="job-box-rate">
																						<span class="icon icon-star-full"></span>
																						<span class="rate-result">5.8</span>
																					</div>
																				</div>
																				<div class="job-box-body flexbox justify-space-between">
																					<div class="job-box-tips">
																						<div class="tip">
												  											<span class="icon icon-award"></span>
												  											<span class="text">95%</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-jobs"></span>
												  											<span class="text">110 h/2 J</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-location"></span>
												  											<span class="text">Aus..</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-clock-1"></span>
												  											<span class="text">&gt; 30h</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-wallet"></span>
												  											<span class="text">24$/h</span>
													  									</div>
																					</div>
																					<div class="job-box-deskr">
																						<div class="text">
																							Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus ...
																						</div>
																						<div class="skill-tags-block clearfix">
																							<div class="skill-tag">Math</div>
																							<div class="skill-tag">Trigonometry</div>
																							<div class="skill-tag">Calculus</div>
																						</div>
																					</div>
																				</div>
																				<div class="job-box-footer flexbox justify-space-between">
																					<div class="additional-info blue-color">Math  Home Tutoring</div>
																					<button class="btn btn-blue btn-bold">Free</button>
																				</div>
																			</div>
                                      {/* <!--job-box End--> */}
																		</div>
																	</div>
																	<button class="btn btn-bg-transparent blue-color load-more-btn">Load More</button>
																</div>
															</div>
														</div>
														<div role="tabpanel" class="tab-pane my-tab-in-tab container-fluid job-boxes--jobs" id="saved-jobs">
															<div class="row">
																<div class="col-sm-12">
																	<div class="tab-pane-content job-boxes-wrapper job-boxes-wrapper--jobs flexbox justify-space-start flex-wrap">
																		<div class="job-box-block">
																			<div class="panel panel-default job-box">
																				<div class="job-box-header flexbox justify-space-between">
																					<div class="job-box-title">
																						<div class="post-date">6 days ago</div>
																						<div class="job-title">Looking for back end programmer</div>
																					</div>
																					<div class="panel panel-default">
																						<div class="flexbox justify-space-between">
																							<div class="job-box-photo-block">
																								<div class="job-box-photo bg-cover circul-shape">
																									<i class="notif"></i>
																								</div>
																							</div>
																							<div class="award">
																								<span class="icon icon-badge-flat"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span></span>
																							</div>
																							<div class="job-box-rate">
																								<span class="icon icon-star-full"></span>
																								<span class="rate-result">5.8</span>
																							</div>
																						</div>
																						<div class="blue-color">Clifford Love</div>
																					</div>
																				</div>
																				<div class="job-box-body">
																					<div class="job-box-tips flexbox justify-space-between">
																						<div class="tip">
												  											<span class="icon icon-location"></span>
												  											<span class="text">Aus..</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-clock-1"></span>
												  											<span class="text">&gt; 30h</span>
													  									</div>
																						<div class="tip">
												  											<span class="icon icon-award"></span>
												  											<span class="text">Jun</span>
													  									</div>
													  									<div class="tip">
												  											<span class="icon icon-timer"></span>
												  											<span class="text">110 h/2 J</span>
													  									</div>
													  									
													  									<div class="tip">
												  											<span class="icon icon-wallet"></span>
												  											<span class="text">24$/h</span>
													  									</div>
																					</div>
																					<div class="job-box-deskr">
																						<div class="text">
																							Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks...
																						</div>
																						<div class="skill-tags-block clearfix">
																							<div class="skill-tag">HTML5</div>
																							<div class="skill-tag">Node.js</div>
																							<div class="skill-tag">CSS3</div>
																							<div class="skill-tag">PHP</div>
																						</div>
																					</div>
																				</div>
																				<div class="job-box-footer flexbox justify-space-between">
																					<div class="additional-info blue-color">Math  Home Tutoring</div>
																					<button class="btn btn-blue btn-bold">Free</button>
																				</div>
																			</div>
                                      {/* <!--job-box End--> */}
																		</div>
																	</div>
																	<button class="btn btn-bg-transparent blue-color load-more-btn">Load More</button>
																</div>
															</div>
														</div>
														<div role="tabpanel" class="tab-pane my-tab-in-tab container-fluid" id="saved-blogs">
															<div class="row">
																<div class="col-sm-12">
																	<div class="tab-pane-content job-boxes-wrapper flexbox justify-space-start flex-wrap">
																		<div class="job-box-block blog-box">
																			<div class="panel panel-default job-box">
																				<div class="blog-box-header flexbox justify-space-start">
																					<div class="job-box-photo-block">
																						<div class="job-box-photo bg-cover circul-shape">
																						</div>
																					</div>
																					<div class="blog-box-title">
																						<div class="job-box-name blue-color">Clifford Love</div>
																						<div class="job-box-date">July 12, 2016</div>
																					</div>
																				</div>
																				<div class="blog-box-body">
																					<h2 class="blog-box-title">Big Savings On Gas While You Travel</h2>
																					<div class="blog-box-text">
																						Can you imagine what we will be downloading in another twenty years? I mean who would have ever thought that you could record sound with digital quality fifty years ago? ...
																						<a href="#">Read more</a>
																					</div>
																				</div>
																				<div class="blog-box-footer">
																					<div class="blog-stat-item">
																						<div class="flexbox jystify-space-between">
																							<span class="icon icon-heart"></span>
																							<span class="text">Like</span>
																							<span class="numb">5</span>
																						</div>
																					</div>
																					<div class="blog-stat-item flexbox jystify-space-between">
																						<div class="flexbox jystify-space-between">
																							<span class="icon icon-promo"></span>
																							<span class="text">Share</span>
																							<span class="numb">1</span>
																						</div>
																					</div>
																				</div>
																			</div>
                                      {/* <!--job-box End--> */}
																		</div>
																		<div class="job-box-block blog-box">
																			<div class="panel panel-default job-box">
																				<div class="blog-box-header flexbox justify-space-start">
																					<div class="job-box-photo-block">
																						<div class="job-box-photo bg-cover circul-shape">
																						</div>
																					</div>
																					<div class="blog-box-title">
																						<div class="job-box-name blue-color">Clifford Love</div>
																						<div class="job-box-date">July 12, 2016</div>
																					</div>
																				</div>
																				<div class="blog-box-body">
																					<h2 class="blog-box-title">Big Savings On Gas While You Travel</h2>
																					<div class="blog-box-text">
																						Can you imagine what we will be downloading in another twenty years? I mean who would have ever thought that you could record sound with digital quality fifty years ago? ...
																						<a href="#">Read more</a>
																					</div>
																				</div>
																				<div class="blog-box-footer">
																					<div class="blog-stat-item">
																						<div class="flexbox jystify-space-between">
																							<span class="icon icon-heart"></span>
																							<span class="text">Like</span>
																							<span class="numb">5</span>
																						</div>
																					</div>
																					<div class="blog-stat-item flexbox jystify-space-between">
																						<div class="flexbox jystify-space-between">
																							<span class="icon icon-promo"></span>
																							<span class="text">Share</span>
																							<span class="numb">1</span>
																						</div>
																					</div>
																				</div>
																			</div>
                                      {/* <!--job-box End--> */}
																		</div>
																		<div class="job-box-block blog-box">
																			<div class="panel panel-default job-box">
																				<div class="blog-box-header flexbox justify-space-start">
																					<div class="job-box-photo-block">
																						<div class="job-box-photo bg-cover circul-shape">
																						</div>
																					</div>
																					<div class="blog-box-title">
																						<div class="job-box-name blue-color">Clifford Love</div>
																						<div class="job-box-date">July 12, 2016</div>
																					</div>
																				</div>
																				<div class="blog-box-body">
																					<h2 class="blog-box-title">Big Savings On Gas While You Travel</h2>
																					<div class="blog-box-text">
																						Can you imagine what we will be downloading in another twenty years? I mean who would have ever thought that you could record sound with digital quality fifty years ago? ...
																						<a href="#">Read more</a>
																					</div>
																				</div>
																				<div class="blog-box-footer">
																					<div class="blog-stat-item">
																						<div class="flexbox jystify-space-between">
																							<span class="icon icon-heart"></span>
																							<span class="text">Like</span>
																							<span class="numb">5</span>
																						</div>
																					</div>
																					<div class="blog-stat-item flexbox jystify-space-between">
																						<div class="flexbox jystify-space-between">
																							<span class="icon icon-promo"></span>
																							<span class="text">Share</span>
																							<span class="numb">1</span>
																						</div>
																					</div>
																				</div>
																			</div>
                                      {/* <!--job-box End--> */}
																		</div>
																		<div class="job-box-block blog-box">
																			<div class="panel panel-default job-box">
																				<div class="blog-box-header flexbox justify-space-start">
																					<div class="job-box-photo-block">
																						<div class="job-box-photo bg-cover circul-shape">
																						</div>
																					</div>
																					<div class="blog-box-title">
																						<div class="job-box-name blue-color">Clifford Love</div>
																						<div class="job-box-date">July 12, 2016</div>
																					</div>
																				</div>
																				<div class="blog-box-body">
																					<h2 class="blog-box-title">Big Savings On Gas While You Travel</h2>
																					<div class="blog-box-text">
																						Can you imagine what we will be downloading in another twenty years? I mean who would have ever thought that you could record sound with digital quality fifty years ago? ...
																						<a href="#">Read more</a>
																					</div>
																				</div>
																				<div class="blog-box-footer">
																					<div class="blog-stat-item">
																						<div class="flexbox jystify-space-between">
																							<span class="icon icon-heart"></span>
																							<span class="text">Like</span>
																							<span class="numb">5</span>
																						</div>
																					</div>
																					<div class="blog-stat-item flexbox jystify-space-between">
																						<div class="flexbox jystify-space-between">
																							<span class="icon icon-promo"></span>
																							<span class="text">Share</span>
																							<span class="numb">1</span>
																						</div>
																					</div>
																				</div>
																			</div>
                                      {/* <!--job-box End--> */}
																		</div>
																	</div>
																	<button class="btn btn-bg-transparent blue-color load-more-btn">Load More</button>
																</div>
															</div>
														</div>
													</div>
												</div>  
                        {/* <!--/col-sm-12 END --> */}
											</div>
										</div>
                    {/* <!--saved page END --> */}
										{/* <!--media page START --> */}
										<div role="tabpanel" class="tab-pane my-tab" id="media">
											<div class="media-wrapper">
												<div class="media-block">
													<div class="media-block-header flexbox justify-space-between">
														<div class="media-block-title">
															<span class="icon icon-picture"></span>
															<span class="text">My Images</span>
															<span class="numb">10</span>
														</div>
														<div class="block-add-btn">
															<button class="btn btn-blue btn-bold" data-toggle="modal" data-target="#upload-media">Upload</button>
														</div>
													</div>
													<div class="media-block-body media-carousel-wrapper flexbox">
														<button class="btn icon-btn arrow-btn">
															<span class="icon icon-prev-arrow"></span>
														</button>
														<div class="media-carousel-content-wrapper">
															<div class="media-carousel-content">
																<div class="media-item">
																	<div class="media-item-pic">
																		<img src="images/media-img-1.png" alt='' />
																		<div class="media-mask flexbox justify-space-center">
																			<button class="btn btn-bg-transparent"><span class="icon icon-optical"></span></button>
																			<button class="btn btn-bg-transparent"><span class="icon icon-garbage"></span></button>
																			<button class="btn btn-bg-transparent"><span class="icon icon-drawing-pencil"></span></button>
																		</div>
																	</div>
																	<div class="media-item-title">E-Commerce web-site</div>
																	<div class="media-item-deskr">Design &amp; Develop</div>
																</div>
																<div class="media-item">
																	<div class="media-item-pic">
																		<img src="images/media-img-2.png" alt='' />
																		<div class="media-mask flexbox justify-space-center">
																			<button class="btn btn-bg-transparent"><span class="icon icon-optical"></span></button>
																			<button class="btn btn-bg-transparent"><span class="icon icon-garbage"></span></button>
																			<button class="btn btn-bg-transparent"><span class="icon icon-drawing-pencil"></span></button>
																		</div>
																	</div>
																	<div class="media-item-title">E-Commerce web-site</div>
																	<div class="media-item-deskr">Design &amp; Develop</div>
																</div>
																<div class="media-item">
																	<div class="media-item-pic">
																		<img src="images/media-img-3.png" alt=''/>
																		<div class="media-mask flexbox justify-space-center">
																			<button class="btn btn-bg-transparent"><span class="icon icon-optical"></span></button>
																			<button class="btn btn-bg-transparent"><span class="icon icon-garbage"></span></button>
																			<button class="btn btn-bg-transparent"><span class="icon icon-drawing-pencil"></span></button>
																		</div>
																	</div>
																	<div class="media-item-title">E-Commerce web-site</div>
																	<div class="media-item-deskr">Design &amp; Develop</div>
																</div>
																<div class="media-item">
																	<div class="media-item-pic">
																		<img src="images/media-img-4.png" alt=''/>
																		<div class="media-mask flexbox justify-space-center">
																			<button class="btn btn-bg-transparent"><span class="icon icon-optical"></span></button>
																			<button class="btn btn-bg-transparent"><span class="icon icon-garbage"></span></button>
																			<button class="btn btn-bg-transparent"><span class="icon icon-drawing-pencil"></span></button>
																		</div>
																	</div>
																	<div class="media-item-title">E-Commerce web-site</div>
																	<div class="media-item-deskr">Design &amp; Develop</div>
																</div>
															</div>
														</div>
														<button class="btn icon-btn arrow-btn">
															<span class="icon icon-next-arrow"></span>
														</button>
													</div>
												</div>
												<div class="media-block">
													<div class="media-block-header flexbox justify-space-between">
														<div class="media-block-title">
															<span class="icon icon-film-strip"></span>
															<span class="text">Videos</span>
															<span class="numb">5</span>
														</div>
														<div class="block-add-btn">
															<button class="btn btn-blue btn-bold" data-toggle="modal" data-target="#upload-media">Upload</button>
														</div>
													</div>
													<div class="media-block-body media-carousel-wrapper flexbox">
														<button class="btn icon-btn arrow-btn">
															<span class="icon icon-prev-arrow"></span>
														</button>
														<div class="media-carousel-content-wrapper">
															<div class="media-carousel-content">
																<div class="media-item">
																	<div class="media-item-pic">
																		<img src="images/media-img-1.png" alt=''/>
																		<div class="media-mask flexbox justify-space-center">
																			<button class="btn btn-bg-transparent"><span class="glyphicon glyphicon-play"></span></button>
																			<button class="btn btn-bg-transparent"><span class="icon icon-garbage"></span></button>
																			<button class="btn btn-bg-transparent"><span class="icon icon-drawing-pencil"></span></button>
																		</div>
																	</div>
																	<div class="media-item-title">E-Commerce web-site</div>
																	<div class="media-item-deskr">Design &amp; Develop</div>
																</div>
																<div class="media-item">
																	<div class="media-item-pic">
																		<img src="images/media-img-2.png" alt=''/>
																		<div class="media-mask flexbox justify-space-center">
																			<button class="btn btn-bg-transparent"><span class="glyphicon glyphicon-play"></span></button>
																			<button class="btn btn-bg-transparent"><span class="icon icon-garbage"></span></button>
																			<button class="btn btn-bg-transparent"><span class="icon icon-drawing-pencil"></span></button>
																		</div>
																	</div>
																	<div class="media-item-title">E-Commerce web-site</div>
																	<div class="media-item-deskr">Design &amp; Develop</div>
																</div>
																<div class="media-item">
																	<div class="media-item-pic">
																		<img src="images/media-img-3.png" alt=''/>
																		<div class="media-mask flexbox justify-space-center">
																			<button class="btn btn-bg-transparent"><span class="glyphicon glyphicon-play"></span></button>
																			<button class="btn btn-bg-transparent"><span class="icon icon-garbage"></span></button>
																			<button class="btn btn-bg-transparent"><span class="icon icon-drawing-pencil"></span></button>
																		</div>
																	</div>
																	<div class="media-item-title">E-Commerce web-site</div>
																	<div class="media-item-deskr">Design &amp; Develop</div>
																</div>
																<div class="media-item">
																	<div class="media-item-pic">
																		<img src="images/media-img-4.png" alt=''/>
																		<div class="media-mask flexbox justify-space-center">
																			<button class="btn btn-bg-transparent"><span class="glyphicon glyphicon-play"></span></button>
																			<button class="btn btn-bg-transparent"><span class="icon icon-garbage"></span></button>
																			<button class="btn btn-bg-transparent"><span class="icon icon-drawing-pencil"></span></button>
																		</div>
																	</div>
																	<div class="media-item-title">E-Commerce web-site</div>
																	<div class="media-item-deskr">Design &amp; Develop</div>
																</div>
															</div>
														</div>
														<button class="btn icon-btn arrow-btn">
															<span class="icon icon-next-arrow"></span>
														</button>
													</div>
												</div>
												<div class="media-block">
													<div class="media-block-header flexbox justify-space-between">
														<div class="media-block-title">
															<span class="icon icon-music-note"></span>
															<span class="text">My Audio</span>
															<span class="numb">5</span>
														</div>
														<div class="block-add-btn">
															<button class="btn btn-blue btn-bold" data-toggle="modal" data-target="#upload-media">Upload</button>
														</div>
													</div>
													<div class="media-block-body">
														<div class="audio-items-wrapper">
															<div class="audio-item">
																<div class="flexbox">
																	<button class="btn btn-bg-transparent icon-btn play-btn">
																		<span class="glyphicon glyphicon-play"></span>
																		<span class="glyphicon glyphicon-pause"></span>
																	</button>
																	<div class="audio-block">
																		<div class="audio-title">Guitar lesson - junior</div>
																		<div class="adio-descr"></div>
																	</div>
																</div>
																<div class="progress">
																	<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width": "60%"}}>
																	</div>
																</div>
															</div>
															<div class="audio-item in-play">
																<div class="flexbox">
																	<button class="btn btn-bg-transparent icon-btn play-btn">
																		<span class="glyphicon glyphicon-play"></span>
																		<span class="glyphicon glyphicon-pause"></span>
																	</button>
																	<div class="audio-block">
																		<div class="audio-title">Guitar lesson - junior</div>
																		<div class="adio-descr">Sample</div>
																	</div>
																</div>
																<div class="progress">
																	<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width": "60%"}}>
																	</div>
																</div>
															</div>
															<div class="audio-item">
																<div class="flexbox">
																	<button class="btn btn-bg-transparent icon-btn play-btn">
																		<span class="glyphicon glyphicon-play"></span>
																		<span class="glyphicon glyphicon-pause"></span>
																	</button>
																	<div class="audio-block">
																		<div class="audio-title">Guitar lesson - junior</div>
																		<div class="adio-descr">Sample</div>
																	</div>
																</div>
																<div class="progress">
																	<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width": "60%"}}>
																	</div>
																</div>
															</div>
															<div class="audio-item">
																<div class="flexbox">
																	<button class="btn btn-bg-transparent icon-btn play-btn">
																		<span class="glyphicon glyphicon-play"></span>
																		<span class="glyphicon glyphicon-pause"></span>
																	</button>
																	<div class="audio-block">
																		<div class="audio-title">Guitar lesson - junior</div>
																		<div class="adio-descr">Sample</div>
																	</div>
																</div>
																<div class="progress">
																	<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width": "60%"}}>
																	</div>
																</div>
															</div>
														</div>
														<button class="btn btn-bg-transparent btn-bold blue-color more-btn">Load More</button>
													</div>
												</div>
												<div class="media-block">
													<div class="media-block-header flexbox justify-space-between">
														<div class="media-block-title">
															<span class="icon icon-file-icon"></span>
															<span class="text">My Files</span>
															<span class="numb">4</span>
														</div>
														<div class="block-add-btn">
															<button class="btn btn-blue btn-bold" data-toggle="modal" data-target="#upload-media">Upload</button>
														</div>
													</div>
													<div class="media-block-body media-block-body--files">
														<div class="file-item type-zip">
															<span class="title">ZIP</span>
															<span class="icon icon-icon"></span>
															<span class="descr">2 lessons</span>
														</div>
														<div class="file-item type-zip">
															<span class="title">ZIP</span>
															<span class="icon icon-icon"></span>
															<span class="descr">2 lessons</span>
														</div>
														<div class="file-item type-zip">
															<span class="title">ZIP</span>
															<span class="icon icon-icon"></span>
															<span class="descr">2 lessons</span>
														</div>
														<div class="file-item type-pdf">
															<span class="title">PDF</span>
															<span class="icon icon-icon"></span>
															<span class="descr">2 lessons</span>
														</div>
													</div>
												</div>
											</div>
										</div>
                    {/* <!--media page END --> */}
										{/* <!--accounts page START --> */}
										<div role="tabpanel" class="tab-pane my-tab" id="accounts">
											<div class="row">
												<div class="col-sm-12">
												{/* <!-- status - panels - start --> */}
													<div class="accounts-status-panel panel panel-light-green">
														<span class="icon icon-warning"></span>
														<span class="text">Your Payments Methods didn’t veryfied</span>
													</div>
													<div class="accounts-status-panel panel panel-red">
														<span class="icon icon-warning"></span>
														<span class="text">Your Payments Methods didn’t veryfied</span>
													</div>
													<div class="accounts-status-panel panel panel-yellow">
														<span class="icon icon-warning"></span>
														<span class="text">You didn’t add payment method to your account!</span>
													</div>
												{/* <!-- status - panels - end --> */}

												{/* <!-- Nav tabs --> */}
													<ul class="nav nav-tabs my-central-info-nav clearfix flexbox justify-space-start" role="tablist">
													  <li role="presentation" class="active"><a href="#payments" aria-controls="payments" role="tab" data-toggle="tab">Payments</a></li>
													  <li role="presentation"><a href="#payments-methods" aria-controls="payments-methods" role="tab" data-toggle="tab">Payments Methods</a></li>
													  <li role="presentation"><a href="#invoices" aria-controls="invoices" role="tab" data-toggle="tab">Invoices</a></li>
													</ul>
													 {/* <!-- Tab panes --> */}
													<div class="tab-content">
														<div role="tabpanel" class="tab-pane active my-tab-in-tab container-fluid" id="payments">
															<div class="row">
																<div class="col-sm-12">
																	<div class="tab-pane-header flexbox justify-space-between">
																		<div class="filter-nav">
																			<button type="button" class="btn filter-nav-btn">
																				<span class="icon icon-calendar"></span>
																				<span class="data-text text">12/19/2015 - 01/18/2016</span>
																				<span class="caret"></span>
																			</button>
																			<div class="btn-group">
																				<button type="button" class="btn btn-default dropdown-toggle filter-nav-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																					<span class="icon icon-filter"></span>
																					<span class="text">Filtres</span>
																					<span class="caret"></span>
																				</button>
																				<ul class="dropdown-menu">
																					<li>
																						<span class="caret-top"></span>
																					</li>
																					<li><a href="#">This month (default)</a></li>
																					<li><a href="#">Last 30 days</a></li>
																					<li><a href="#">3 month</a></li>
																					<li><a href="#">By talent</a></li>
																					<li><a href="#">By Job</a></li>
																				</ul>
																			</div>
																			<form class="my-search-form filter-nav-search-form" role="search">
																				<div class="form-group">
																					<input type="text" class="form-control" placeholder="Search"></input>
																					<button type="submit" class="search-form-btn"><span class="icon icon-loupe"></span></button>
																				</div>
																			</form>
																			<div class="btn-group">
																				<button type="button" class="btn btn-default dropdown-toggle filter-nav-btn btn-blue" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																					<span class="icon icon-settings"></span>
																					<span class="text">Actions</span>
																					<span class="caret"></span>
																				</button>
																				<ul class="dropdown-menu">
																					<li>
																						<span class="caret-top"></span>
																					</li>
																					<li><a href="#">Export to Excel/CSW</a></li>
																					<li><a href="#">Export to PDF</a></li>
																					<li><a href="#">Print</a></li>
																					<li><a href="#">Ask to check transaction</a></li>
																				</ul>
																			</div>
																		</div>
																		<div class="page-number">
																			<button type="button" class="btn page-btn filter-nav-btn">
																				<span class="page-data">
																					<span>1</span>
																					of
																					<span>1</span>
																				</span>
																				<span class="caret"></span>
																			</button>
																		</div>
																	</div>
																	<div class="tab-pane-content">
																		<div class="display-table">
																			<div class="display-table-tr">
																				<div class="display-table-th tab-hide">Date</div>
																				<div class="display-table-th">Job Details</div>
																				<div class="display-table-th tab-hide">Job ID</div>
																				<div class="display-table-th tab-hide">Transaction ID</div>
																				<div class="display-table-th mob-hide centered-text">Revenues ($)</div>
																				<div class="display-table-th mob-hide centered-text">Expenses ($)</div>
																				<div class="display-table-th centered-text">Earned($)</div>
																				<div class="display-table-td info-btn-wrapper mob-hide"></div>
																			</div>
																			<div class="display-table-tr">
																				<div class="display-table-td tab-hide">5/23/16</div>
																				<div class="display-table-td">
																					<div class="job-title">2 PSD to HTML</div>
																					<div class="job-descr">converts 2 pages</div>
																					<div class="job-user">to:
																						<a href="#" class="user-name">Anwar H</a>
																					</div>
																				</div>
																				<div class="display-table-td tab-hide">#12345678</div>
																				<div class="display-table-td tab-hide">#12345678</div>
																				<div class="display-table-td mob-hide centered-text"></div>
																				<div class="display-table-td mob-hide centered-text">100</div>
																				<div class="display-table-td centered-text">1100
																					<div class="info-btn-wrapper mob-show">
																						<button type="button" class="btn info-btn btn-blue-hover">
																							<span class="icon icon-info-sign"></span>
																							<span class="caret-top"></span>
																						</button>
																						<div class="info-btn-content">
																							<div class="display-table">
																								<div class="display-table-tr">
																									<div class="display-table-th">Date</div>
																									<div class="display-table-td">5/23/16</div>
																								</div>
																								<div class="display-table-tr">
																									<div class="display-table-th">Job ID</div>
																									<div class="display-table-td">#12345678</div>
																								</div>
																								<div class="display-table-tr">
																									<div class="display-table-th">Transaction ID</div>
																									<div class="display-table-td">#12345678</div>
																								</div>
																								<div class="display-table-tr">
																									<div class="display-table-th">Revenues ($)</div>
																									<div class="display-table-td">0</div>
																								</div>
																								<div class="display-table-tr">
																									<div class="display-table-th">Expenses ($)</div>
																									<div class="display-table-td">100</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div class="display-table-td info-btn-wrapper mob-hide">
																					<button type="button" class="btn info-btn btn-blue-hover">
																						<span class="icon icon-info-sign"></span>
																						<span class="caret-top"></span>
																					</button>
																					<div class="info-btn-content">
																						<div class="display-table">
																							<div class="display-table-tr">
																								<div class="display-table-th">Date</div>
																								<div class="display-table-td">5/23/16</div>
																							</div>
																							<div class="display-table-tr">
																								<div class="display-table-th">Job ID</div>
																								<div class="display-table-td">#12345678</div>
																							</div>
																							<div class="display-table-tr">
																								<div class="display-table-th">Transaction ID</div>
																								<div class="display-table-td">#12345678</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div class="display-table-tr">
																				<div class="display-table-td tab-hide">5/23/16</div>
																				<div class="display-table-td">
																					<div class="job-title">Google Images</div>
																					<div class="job-descr">Complete design of 2 pages...</div>
																					<div class="job-user">from:
																						<a href="#" class="user-name">Jorge</a>
																					</div>
																				</div>
																				<div class="display-table-td tab-hide">#12345678</div>
																				<div class="display-table-td tab-hide">#12345678</div>
																				<div class="display-table-td mob-hide centered-text"></div>
																				<div class="display-table-td mob-hide centered-text">150</div>
																				<div class="display-table-td centered-text">950
																					<div class="info-btn-wrapper mob-show">
																						<button type="button" class="btn info-btn btn-blue-hover">
																							<span class="icon icon-info-sign"></span>
																							<span class="caret-top"></span>
																						</button>
																						<div class="info-btn-content">
																							<div class="display-table">
																								<div class="display-table-tr">
																									<div class="display-table-th">Date</div>
																									<div class="display-table-td">5/23/16</div>
																								</div>
																								<div class="display-table-tr">
																									<div class="display-table-th">Job ID</div>
																									<div class="display-table-td">#12345678</div>
																								</div>
																								<div class="display-table-tr">
																									<div class="display-table-th">Transaction ID</div>
																									<div class="display-table-td">#12345678</div>
																								</div>
																								<div class="display-table-tr">
																									<div class="display-table-th">Revenues ($)</div>
																									<div class="display-table-td">0</div>
																								</div>
																								<div class="display-table-tr">
																									<div class="display-table-th">Expenses ($)</div>
																									<div class="display-table-td">100</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div class="display-table-td info-btn-wrapper mob-hide">
																					<button type="button" class="btn info-btn btn-blue-hover">
																						<span class="icon icon-info-sign"></span>
																						<span class="caret-top"></span>
																					</button>
																					<div class="info-btn-content">
																						<div class="display-table">
																							<div class="display-table-tr">
																								<div class="display-table-th">Date</div>
																								<div class="display-table-td">5/23/16</div>
																							</div>
																							<div class="display-table-tr">
																								<div class="display-table-th">Job ID</div>
																								<div class="display-table-td">#12345678</div>
																							</div>
																							<div class="display-table-tr">
																								<div class="display-table-th">Transaction ID</div>
																								<div class="display-table-td">#12345678</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div class="display-table-tr">
																				<div class="display-table-td tab-hide">5/23/16</div>
																				<div class="display-table-td">
																					<div class="job-title">1HTML5</div>
																					<div class="job-descr">Job finished -1 html</div>
																					<div class="job-user">from:
																						<a href="#" class="user-name">Jorge</a>
																					</div>
																				</div>
																				<div class="display-table-td tab-hide">#12345678</div>
																				<div class="display-table-td tab-hide">#12345678</div>
																				<div class="display-table-td mob-hide centered-text">300</div>
																				<div class="display-table-td mob-hide centered-text"></div>
																				<div class="display-table-td centered-text">950
																					<div class="info-btn-wrapper mob-show">
																						<button type="button" class="btn info-btn btn-blue-hover">
																							<span class="icon icon-info-sign"></span>
																							<span class="caret-top"></span>
																						</button>
																						<div class="info-btn-content">
																							<div class="display-table">
																								<div class="display-table-tr">
																									<div class="display-table-th">Date</div>
																									<div class="display-table-td">5/23/16</div>
																								</div>
																								<div class="display-table-tr">
																									<div class="display-table-th">Job ID</div>
																									<div class="display-table-td">#12345678</div>
																								</div>
																								<div class="display-table-tr">
																									<div class="display-table-th">Transaction ID</div>
																									<div class="display-table-td">#12345678</div>
																								</div>
																								<div class="display-table-tr">
																									<div class="display-table-th">Revenues ($)</div>
																									<div class="display-table-td">0</div>
																								</div>
																								<div class="display-table-tr">
																									<div class="display-table-th">Expenses ($)</div>
																									<div class="display-table-td">100</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div class="display-table-td info-btn-wrapper mob-hide">
																					<button type="button" class="btn info-btn btn-blue-hover">
																						<span class="icon icon-info-sign"></span>
																						<span class="caret-top"></span>
																					</button>
																					<div class="info-btn-content">
																						<div class="display-table">
																							<div class="display-table-tr">
																								<div class="display-table-th">Date</div>
																								<div class="display-table-td">5/23/16</div>
																							</div>
																							<div class="display-table-tr">
																								<div class="display-table-th">Job ID</div>
																								<div class="display-table-td">#12345678</div>
																							</div>
																							<div class="display-table-tr">
																								<div class="display-table-th">Transaction ID</div>
																								<div class="display-table-td">#12345678</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div class="display-table-tr total-result">
																				<div class="display-table-th tab-hide"></div>
																				<div class="display-table-th tab-hide"></div>
																				<div class="display-table-th tab-hide"></div>
																				<div class="display-table-th">Total</div>
																				<div class="display-table-td mob-hide centered-text">300</div>
																				<div class="display-table-td mob-hide centered-text">250</div>
																				<div class="display-table-th centered-text">1250</div>
																				<div class="display-table-td info-btn-wrapper mob-hide">
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div role="tabpanel" class="tab-pane my-tab-in-tab container-fluid" id="payments-methods">
															<div class="row">
																<div class="col-sm-12">
																	<div class="tab-pane-header">
																		<div class="panel payment-meth-panel payment-meth--card active">
																			<div class="panel-wrapper flexbox flex-vertical justify-space-center">
																				<span class="icon icon-credit-card"></span>
																				<span class="payment-meth-title">Credit Card</span>
																				<button class="btn btn-blue-border btn-bold">Set up</button>
																			</div>
																		</div>
																		<div class="panel payment-meth-panel payment-meth--acc">
																			<div class="panel-wrapper flexbox flex-vertical justify-space-center">
																				<span class="icon icon-bank"></span>
																				<span class="payment-meth-title">Bank Account</span>
																				<button class="btn btn-blue-border btn-bold">CHANGE</button>
																			</div>
																		</div>
																	</div>
																	<div class="tab-pane-content">
																		<form>
																			<div class="flexbox justify-space-between form-block form-block-pair">
																				<div class="form-block-pair-1">
																					<span class="input-title">Card Number</span>
																					<input class="form-control"></input>
																				</div>
																				<div class="form-block-pair-2">
																					<span class="input-title">Expiration Date</span>
																					<input class="form-control"></input>
																				</div>
																			</div>
																			<div class="flexbox justify-space-between form-block form-block-pair">
																				<div class="form-block-pair-1">
																					<span class="input-title">Cardholder’s Name</span>
																					<input class="form-control"></input>
																				</div>
																				<div class="form-block-pair-2">
																					<span class="input-title">
																						<span class="cvv-title">CVV</span>
																						<span class="circul-shape cvv-info">?</span>
																					</span>
																					<input class="form-control"></input>
																				</div>
																			</div>
																			<div class="form-block form-block-btn">
																				<button class="btn btn-blue btn-bold">SET UP NEW PAYMENT METHOD</button>
																			</div>
																		</form>
																	</div>
																</div>
																	
															</div>
														</div>
														<div role="tabpanel" class="tab-pane my-tab-in-tab container-fluid tallents-open" id="invoices">
															<div class="row">
																<div class="col-sm-12">
																	<ul class="tab-pane-switcher list">
																		<li class="item active item-tallents">Tallents</li>
																		<li class="item item-client">Client</li>
																	</ul>
																	<div class="tab-pane-header flexbox justify-space-between">
																		<div class="filter-nav">
																			<button type="button" class="btn filter-nav-btn">
																				<span class="icon icon-calendar"></span>
																				<span class="data-text text">12/19/2015 - 01/18/2016</span>
																				<span class="caret"></span>
																			</button>
																			<div class="btn-group">
																				<button type="button" class="btn btn-default dropdown-toggle filter-nav-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																					<span class="icon icon-filter"></span>
																					<span class="text">Filtres</span>
																					<span class="caret"></span>
																				</button>
																				<ul class="dropdown-menu">
																					<li>
																						<span class="caret-top"></span>
																					</li>
																					<li><a href="#">This month (default)</a></li>
																					<li><a href="#">Last 30 days</a></li>
																					<li><a href="#">3 month</a></li>
																					<li><a href="#">By talent</a></li>
																					<li><a href="#">By Job</a></li>
																				</ul>
																			</div>
																			<form class="my-search-form filter-nav-search-form" role="search">
																				<div class="form-group">
																					<input type="text" class="form-control" placeholder="Search"></input>
																					<button type="submit" class="search-form-btn"><span class="icon icon-loupe"></span></button>
																				</div>
																			</form>
																			<div class="btn-group">
																				<button type="button" class="btn btn-default dropdown-toggle filter-nav-btn btn-blue" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																					<span class="icon icon-settings"></span>
																					<span class="text">Actions</span>
																					<span class="caret"></span>
																				</button>
																				<ul class="dropdown-menu">
																					<li>
																						<span class="caret-top"></span>
																					</li>
																					<li><a href="#">Export to Excel/CSW</a></li>
																					<li><a href="#">Export to PDF</a></li>
																					<li><a href="#">Print</a></li>
																					<li><a href="#">Ask to check transaction</a></li>
																				</ul>
																			</div>
																		</div>
																		<div class="page-number">
																			<button type="button" class="btn page-btn filter-nav-btn">
																				<span class="page-data">
																					<span>1</span>
																					of
																					<span>1</span>
																				</span>
																				<span class="caret"></span>
																			</button>
																		</div>
																	</div>
																	<div class="tab-pane-content client-content">
																		<div class="display-table">
																			<div class="display-table-tr">
																				<div class="display-table-th tab-hide">Date</div>
																				<div class="display-table-th">
																					<span class="invoice-type-text">
																						Type
																					</span>
																				</div>
																				<div class="display-table-th">Job</div>
																				<div class="display-table-th mob-hide">Tallent</div>
																				<div class="display-table-th centered-text">Amount</div>
																				<div class="display-table-th tab-hide">ID</div>
																				<div class="display-table-th centered-text">Invoice</div>
																			</div>
																			<div class="display-table-tr">
																				<div class="display-table-td tab-hide">5/23/16</div>
																				<div class="display-table-td inv-type-td">
																					<div class="inv-type inv-type--income">
																						<span class="icon icon-circle-down"></span>
																						<span class="invoice-type-text">Income</span>
																					</div>
																				</div>
																				<div class="display-table-td">Translate PSD to HTML</div>
																				<div class="display-table-td mob-hide">
																					<span class="blue-color">
																						Timothy Bridges
																					</span>
																				</div>
																				<div class="display-table-td centered-text">$ 300</div>
																				<div class="display-table-td tab-hide"># 123456789</div>
																				<div class="display-table-td centered-text">
																					<button type="button" class="btn icon-btn" data-toggle="modal" data-target="#invoice-modal">
																						<span class="icon icon-file"></span>
																					</button>
																				</div>
																			</div>
																			<div class="display-table-tr">
																				<div class="display-table-td tab-hide">5/23/16</div>
																				<div class="display-table-td inv-type-td">
																					<div class="inv-type inv-type--other">
																						<span class="icon icon-circle-up"></span>
																						<span class="invoice-type-text">Sent Salary</span>
																					</div>
																				</div>
																				<div class="display-table-td">Site Development</div>
																				<div class="display-table-td mob-hide">
																					<span class="blue-color">
																						Rose Graves
																					</span>
																				</div>
																				<div class="display-table-td centered-text">$ 300</div>
																				<div class="display-table-td tab-hide"># 123456789</div>
																				<div class="display-table-td centered-text">
																					<button type="button" class="btn icon-btn" data-toggle="modal" data-target="#invoice-modal">
																						<span class="icon icon-file"></span>
																					</button>
																				</div>
																			</div>
																			<div class="display-table-tr">
																				<div class="display-table-td tab-hide">5/23/16</div>
																				<div class="display-table-td inv-type-td">
																					<div class="inv-type inv-type--income">
																						<span class="icon icon-circle-down"></span>
																						<span class="invoice-type-text">Income</span>
																					</div>
																				</div>
																				<div class="display-table-td">Translate PSD to HTML</div>
																				<div class="display-table-td mob-hide">
																					<span class="blue-color">
																						Timothy Bridges
																					</span>
																				</div>
																				<div class="display-table-td centered-text">$ 300</div>
																				<div class="display-table-td tab-hide"># 123456789</div>
																				<div class="display-table-td centered-text">
																					<button type="button" class="btn icon-btn" data-toggle="modal" data-target="#invoice-modal">
																						<span class="icon icon-file"></span>
																					</button>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="tab-pane-content tallent-content">
																		<div class="flexbox">
																			<div class="tallent-list">
																				<div class="panel">
																					<ul class="list">
																						<li class="tallent-box flexbox">
																							<div class="photo circul-shape bg-cover"></div>
																							<div class="title">
																								<div class="name blue-color">Clifford Love</div>
																								<div class="prof">JUNIOR / UI Designer</div>
																							</div>
																						</li>
																						<li class="tallent-box flexbox">
																							<div class="photo circul-shape bg-cover"></div>
																							<div class="title">
																								<div class="name blue-color">Clifford Love</div>
																								<div class="prof">JUNIOR / UI Designer</div>
																							</div>
																						</li>
																						<li class="tallent-box flexbox">
																							<div class="photo circul-shape bg-cover"></div>
																							<div class="title">
																								<div class="name blue-color">Clifford Love</div>
																								<div class="prof">JUNIOR / UI Designer</div>
																							</div>
																						</li>
																					</ul>
																				</div>
																			</div>
																			<div class="table-wrapper">
																				<div class="display-table">
																					<div class="display-table-tr">
																						<div class="display-table-th tab-hide">Date</div>
																						<div class="display-table-th">Job</div>
																						<div class="display-table-th tab-hide">Milestone Description</div>
																						<div class="display-table-th tab-hide">ID</div>
																						<div class="display-table-th centered-text">Amount</div>
																						<div class="display-table-th centered-text">Invoice</div>
																					</div>
																					<div class="display-table-tr">
																						<div class="display-table-td tab-hide">5/23/16</div>
																						<div class="display-table-td blue-color">Translate PSD to HTML</div>
																						<div class="display-table-td tab-hide">Translate PSD to HTML</div>
																						<div class="display-table-td tab-hide"># 123456789</div>
																						<div class="display-table-td centered-text">$ 300</div>
																						<div class="display-table-td centered-text">
																							<button type="button" class="btn icon-btn" data-toggle="modal" data-target="#invoice-modal">
																								<span class="icon icon-file"></span>
																							</button>
																						</div>
																					</div>
																					<div class="display-table-tr">
																						<div class="display-table-td tab-hide">5/23/16</div>
																						<div class="display-table-td blue-color">Site Development</div>
																						<div class="display-table-td tab-hide">Site Development</div>
																						<div class="display-table-td tab-hide"># 123456789</div>
																						<div class="display-table-td centered-text">$ 300</div>
																						<div class="display-table-td centered-text">
																							<button type="button" class="btn icon-btn" data-toggle="modal" data-target="#invoice-modal">
																								<span class="icon icon-file"></span>
																							</button>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																	
															</div>
														</div>
													</div>
												</div>  
                        {/* <!--/col-sm-12 END --> */}
											</div>
										</div>
                    {/* <!--accounts page END --> */}
										{/* <!--jobs page START --> */}
										<div role="tabpanel" class="tab-pane my-tab" id="my-jobs">
											<div class="row">
												<div class="col-sm-12">
												{/* <!-- Nav tabs --> */}
													<ul class="nav nav-tabs my-central-info-nav clearfix flexbox" role="tablist">
													  <li role="presentation"><a href="#my-jobs-list" aria-controls="my-jobs-list" role="tab" data-toggle="tab">You work for</a></li>
													  <li role="presentation" class="active"><a href="#open-jobs" aria-controls="open-jobs" role="tab" data-toggle="tab">Working for you</a></li>
													</ul>
													 {/* <!-- Tab panes --> */}
													<div class="tab-content">
														<div role="tabpanel" class="tab-pane my-tab-in-tab container-fluid" id="my-jobs-list">
															<div class="row">
																<div class="col-sm-12">
																	1
																</div>
															</div>
														</div>
														<div role="tabpanel" class="tab-pane active my-tab-in-tab container-fluid" id="open-jobs">
															<div class="post-job-block desktop-view">
															  	<a href="#" class="btn post-job-btn" data-toggle="modal" data-target="#post-job-modal">+ Post job</a>
															</div>

															<div class="row">
																<div class="col-sm-12">
																	<div class="tab-pane-header flexbox justify-space-between">
																		<div class="filter-nav">
																			<div class="post-job-block mobile-view">
																			  	<a href="#" class="btn post-job-btn" data-toggle="modal" data-target="#post-job-modal">+ Post job</a>
																			</div>
																			<button type="button" class="btn filter-nav-btn">
																				<span class="icon icon-calendar"></span>
																				<span class="data-text text">12/19/2015 - 01/18/2016</span>
																				<span class="caret"></span>
																			</button>
																			<div class="btn-group">
																				<button type="button" class="btn btn-default dropdown-toggle filter-nav-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																					<span class="icon icon-filter"></span>
																					<span class="text">Filtres</span>
																					<span class="caret"></span>
																				</button>
																				<ul class="dropdown-menu">
																					<li><a href="#">Action</a></li>
																					<li><a href="#">Another action</a></li>
																					<li><a href="#">Something else here</a></li>
																					<li><a href="#">Separated link</a></li>
																				</ul>
																			</div>
																			<form class="my-search-form filter-nav-search-form" role="search">
																				<div class="form-group">
																					<input type="text" class="form-control" placeholder="Search"></input>
																					<button type="submit" class="search-form-btn"><span class="icon icon-loupe"></span></button>
																				</div>
																			</form>
																		</div>
																		<div class="page-number">
																			<button type="button" class="btn page-btn filter-nav-btn">
																				<span class="page-data">
																					<span>1</span>
																					of
																					<span>1</span>
																				</span>
																				<span class="caret"></span>
																			</button>
																		</div>
																	</div>
																	<div class="tab-pane-content">

																		<div class="flex-table job-list">
																			<div class="flex-table-row mobile-hide job-list-header">
																				<div class="flex-table-cell cell-s"></div>
																				<div class="flex-table-cell cell-l">Job</div>
																				<div class="flex-table-cell cell-l tablet-hide">Start - End</div>
																				<div class="flex-table-cell cell-m">Payment</div>
																				<div class="flex-table-cell cell-l tablet-hide">Payed/Budget</div>
																				<div class="flex-table-cell cell-m tablet-hide">Type</div>
																				<div class="flex-table-cell cell-m">Talent</div>
																				<div class="flex-table-cell cell-l">Job Status</div>
																				<div class="flex-table-cell cell-s desktop-hide"></div>
																			</div>
																			<div class="flex-table-row job-item">
																				<div class="dropdown setts-dropdown flex-table-cell cell-s">
																					<span class="icon icon-btn icon-settings dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></span>
																					<ul class="dropdown-menu">
																						<li><a href="#">Cancel</a></li>
																						<li><a href="#">Report</a></li>
																						<li><a href="#" class="hourly-toggler">
																							<span class="fixed-text">Change to hourly</span>
																							<span class="hourly-text">Change to fixed</span>
																						</a></li>
																				  	</ul>
																				</div>
																				<div class="blue-color job-item-title flex-table-cell cell-l">2 PSD to HTML <span class="caret"></span></div>
																				<div class="tablet-hide flex-table-cell cell-l">4rd July 16 - 4rd Oct 16</div>
																				<div class="mobile-hide flex-table-cell cell-m">
																					<span class="fixed-text">Fixed</span>
																					<span class="hourly-text">Per hour</span>
																				</div>
																				<div class="tablet-hide flex-table-cell cell-l mobile-show">150/120</div>
																				<div class="tablet-hide flex-table-cell cell-m">Payed</div>
																				<div class="blue-color job-item-doer mobile-hide flex-table-cell cell-m">Anwar H</div>
																				<div class="job-status flex-table-cell cell-l">
																					<span class="status-open btn btn-blue-border btn-bold">Open</span>
																				</div>
																				<div class="info-btn-wrapper desktop-hide flex-table-cell cell-s">
																					<button type="button" class="btn info-btn btn-blue-hover">
																						<span class="icon icon-info-sign"></span>
																						<span class="caret-top"></span>
																					</button>
																					<div class="info-btn-content">
																						<div class="display-table">
																							<div class="display-table-tr">
																								<div class="display-table-th">Payed/Budget</div>
																								<div class="display-table-td">Payed</div>
																							</div>
																							<div class="display-table-tr">
																								<div class="display-table-th">Start - End</div>
																								<div class="display-table-td">4rd July 16 - 4rd Oct 16</div>
																							</div>
																							<div class="display-table-tr">
																								<div class="display-table-th">Type</div>
																								<div class="display-table-td">Fixed</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div class="flex-table-cell job-item-content">
																					<div class="skill-test-block">
																						<div class="block-header">Skill Test</div>
																						<div class="block-body white-border-bottom">
																							<div class="row work-info flexbox vertical-align-items-center">
																								<div class="col-sm-8 work-additional clearfix" data-toggle="modal" data-target="#skill-test-modal">
																									<div class="col-xs-8">
																										<span class="title">
																											2 Working Hours
																										</span>
																									</div>
																									<div class="col-xs-4 btn-wrapper">
																										<span class="btn btn-orange btn-bold">Free</span>
																									</div>
																									<div class="col-xs-12">
																										<span class="text">
																											Lorem ipsum dolor sit amet, consecvtetur adipisicing elit, sed do eiusmod tempor 
																										</span>
																									</div>
																								</div>
																								<div class="col-sm-4 work-contact">
																									<div class="work-btn-group">
																										<a href="#" class="btn btn-blue-border btn-bold btn-blue-hover">go to milestones</a>
																										<a href="#" class="btn btn-blue-border btn-bold btn-blue-hover">End Job</a>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																					<div class="flex-table milestone-list">
																						<div class="flex-table-row block-header">
																							<div class="flex-table-cell cell-l left-align">Milestone</div>
																							<div class="flex-table-cell cell-s mobile-hide centered-text hourly-text">Hour Rate</div>
																							<div class="flex-table-cell cell-s mobile-hide centered-text">Agreed</div>
																							<div class="flex-table-cell cell-s mobile-hide centered-text">Tip</div>
																							<div class="flex-table-cell cell-s mobile-hide centered-text">Total</div>
																							<div class="flex-table-cell cell-m tablet-hide"></div>
																						</div>
																						<div class="flex-table-row milestone-item funded">
																							<div class="flex-table-cell cell-s">
																								<div class="flexbox milestone-btn">
																									<button type="button" class="icon-btn">
																										<span class="icon icon-garbage"></span>
																									</button>
																									<button type="button" class="icon-btn">
																										<span class="icon icon-pencil"></span>
																									</button>
																								</div>
																							</div>
																							<div class="flex-table-cell cell-m left-align">
																								<div class="milestone-text">
																									<span class="milestone-title">
																										# 1-2 PSD Pages Conversion (due 21st July 16)
																									</span>
																									<span class="milestone-descr">
																										Completing converting 2 PSD. Pages to fully responsive html file
																									</span>
																									<div class="display-table-td info-btn-wrapper desktop-hide tablet-hide mobile-show">
																										<button type="button" class="btn info-btn btn-blue-hover">
																											<span class="icon icon-info-sign"></span>
																											<span class="caret-top"></span>
																										</button>
																										<div class="info-btn-content">
																											<div class="display-table">
																												<div class="display-table-tr">
																													<div class="display-table-th">Payed/Budget</div>
																													<div class="display-table-td">Payed</div>
																												</div>
																												<div class="display-table-tr">
																													<div class="display-table-th">Start - End</div>
																													<div class="display-table-td">4rd July 16 - 4rd Oct 16</div>
																												</div>
																												<div class="display-table-tr">
																													<div class="display-table-th">Type</div>
																													<div class="display-table-td">Fixed</div>
																												</div>
																											</div>
																										</div>
																									</div>
																								</div>
																							</div>
																							<div class="flex-table-cell cell-s hourly-text mobile-hide milestone-hour-price-block">
																								<div class="flexbox milestone-hour-price value-section justify-space-center">
																									<span class="value-n">50</span>
																									<input type="text" value="50"></input>
																									<span class="value-t">$</span>
																								</div>
																							</div>
																							<div class="flex-table-cell cell-s mobile-hide centered-text">
																								<div class="milestone-price milestone-price-fixed flexbox value-section justify-space-center">
																									<span class="value-n">50</span>
																									<input type="text" value="50"></input>
																									<span class="value-t">$</span>
																								</div>
																								<div class="milestone-price milestone-price-hourly flexbox value-section justify-space-center">
																									<span class="value-n">50</span>
																									<input type="text" value="50"></input>
																									<span class="value-t"> hours</span>
																								</div>
																							</div>
																							<div class="flex-table-cell cell-s mobile-hide centered-text">
																								<div class="milestone-tip flexbox value-section justify-space-center">
																									<span class="value-n">5</span>
																									<input type="text" class="milestone-tip" value="5"></input>
																									<span class="value-t">%</span>
																								</div>
																							</div>
																							<div class="flex-table-cell cell-s mobile-hide centered-text">
																								<span class="milestone-total-price"><strong>52.5$</strong></span>
																							</div>
																							<div class="flex-table-cell cell-m milestone-status tablet-hide" >
																								<span class="status-btn  milestone-status btn">funded</span>
																								<span class="status-btn milestone-status btn">Payed</span>
																							</div>
																						</div>
																						<div class="flex-table-row milestone-item not-funded">
																							<div class="flex-table-cell cell-s">
																								<div class="flexbox milestone-btn">
																									<button type="button" class="icon-btn">
																										<span class="icon icon-garbage"></span>
																									</button>
																									<button type="button" class="icon-btn">
																										<span class="icon icon-pencil"></span>
																									</button>
																								</div>
																							</div>
																							<div class="flex-table-cell cell-m left-align">
																								<div class="milestone-text">
																									<span class="milestone-title">
																										# 1-2 PSD Pages Conversion (due 21st July 16)
																									</span>
																									<span class="milestone-descr">
																										Completing converting 2 PSD. Pages to fully responsive html file
																									</span>
																									<div class="display-table-td info-btn-wrapper desktop-hide tablet-hide mobile-show">
																										<button type="button" class="btn info-btn btn-blue-hover">
																											<span class="icon icon-info-sign"></span>
																											<span class="caret-top"></span>
																										</button>
																										<div class="info-btn-content">
																											<div class="display-table">
																												<div class="display-table-tr">
																													<div class="display-table-th">Payed/Budget</div>
																													<div class="display-table-td">Payed</div>
																												</div>
																												<div class="display-table-tr">
																													<div class="display-table-th">Start - End</div>
																													<div class="display-table-td">4rd July 16 - 4rd Oct 16</div>
																												</div>
																												<div class="display-table-tr">
																													<div class="display-table-th">Type</div>
																													<div class="display-table-td">Fixed</div>
																												</div>
																											</div>
																										</div>
																									</div>
																								</div>
																							</div>
																							<div class="flex-table-cell cell-s hourly-text mobile-hide milestone-hour-price-block">
																								<div class="flexbox milestone-hour-price value-section justify-space-center">
																									<span class="value-n">50</span>
																									<input type="text" value="50"></input>
																									<span class="value-t">$</span>
																								</div>
																							</div>
																							<div class="flex-table-cell cell-s mobile-hide centered-text">
																								<div class="milestone-price milestone-price-fixed flexbox value-section justify-space-center">
																									<span class="value-n">50</span>
																									<input type="text" value="50"></input>
																									<span class="value-t">$</span>
																								</div>
																								<div class="milestone-price milestone-price-hourly flexbox value-section justify-space-center">
																									<span class="value-n">50</span>
																									<input type="text" value="50"></input>
																									<span class="value-t"> hours</span>
																								</div>
																							</div>
																							<div class="flex-table-cell cell-s mobile-hide centered-text">
																								<div class="milestone-tip flexbox value-section justify-space-center">
																									<span class="value-n">5</span>
																									<input type="text" class="milestone-tip" value="5"></input>
																									<span class="value-t">%</span>
																								</div>
																							</div>
																							<div class="flex-table-cell cell-s mobile-hide centered-text">
																								<span class="milestone-total-price"><strong>52.5$</strong></span>
																							</div>
																							
																							<div class="flex-table-cell cell-m milestone-status tablet-hide" >
																								<span class="status-btn  milestone-status btn blue">funded</span>
																								<span class="status-btn milestone-status btn green">Release Payment</span>
																							</div>
																						</div>
																					</div>
																					<div class="job-feedback">
																						<h2>Feedback the Job</h2>
																						<p>Let others know about your experience with <a href="#">Anwar</a></p>
																						<div class="feedback-form flexbox">
																							<textarea placeholder="Share your experience and feedback with Anwar here"></textarea>
																							<div class="rates-block">
																								<div class="display-table rates-table">
																									<div class="display-table-tr">
																										<div class="display-table-th">Professional</div>
																										<div class="display-table-td">
																											<div class="rating">
																												<div class="stars-group">
																												    <span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>
																												</div>
																											</div>	
																										</div>
																									</div>
																									<div class="display-table-tr">
																										<div class="display-table-th">On time</div>
																										<div class="display-table-td">
																											<div class="rating">
																												<div class="stars-group">
																												    <span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>
																												</div>
																											</div>
																										</div>
																									</div>
																									<div class="display-table-tr">
																										<div class="display-table-th">Responsive</div>
																										<div class="display-table-td">
																											<div class="rating">
																												<div class="stars-group">
																												    <span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>
																												</div>
																											</div>
																										</div>
																									</div>
																								</div>
																								<button type="button" class="btn add-rate-cat-btn">+ Add new feedback category</button>
																							</div>
																						</div>
																						<div class="radio-block">
																							<h2><small>Would you give you recommendation?</small></h2>
																							<div class="radio">
																								<input type="radio" name="optionsRadios" id="yes" value="yes" checked></input>
																								<label for="yes">
																									<span class="radio-circle"></span>
																									<span class="radio-text">Yes</span>
																								</label>
																							</div>
																							<div class="radio">
																								<input type="radio" name="optionsRadios" id="no" value="no"></input>
																								<label for="no">
																									<span class="radio-circle"></span>
																									<span class="radio-text">No</span>
																								</label>
																							</div>
																							<div class="radio">
																								<input type="radio" name="optionsRadios" id="soso" value="soso"></input>
																								<label for="soso">
																									<span class="radio-circle"></span>
																									<span class="radio-text">Maybe next time</span>
																								</label>
																							</div>
																						</div>	
																					</div>
																					<div class="flex-table-row block-footer milestone-btn-group">
																						<button type="button" class="btn milestone-nav-btn add-milestone-btn" data-toggle="modal" data-target="#add-milestone">+ Add new Milestone</button>
																						<button type="button" class="btn milestone-nav-btn job-finish-btn">
																							<i>+</i> job finish
																						</button>
																						<button type="button" class="btn milestone-nav-btn job-finish-back-btn">Back</button>
																					</div>
																				</div>
																			</div>
																			<div class="flex-table-row job-item new-job">
																				<div class="dropdown setts-dropdown flex-table-cell cell-s">
																					<span class="icon icon-btn icon-settings dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></span>
																					<ul class="dropdown-menu">
																						<li><a href="#">Cancel</a></li>
																						<li><a href="#">Report</a></li>
																						<li><a href="#" class="hourly-toggler">
																							<span class="fixed-text">Change to hourly</span>
																							<span class="hourly-text">Change to fixed</span>
																						</a></li>
																				  	</ul>
																				</div>
																				<div class="blue-color job-item-title flex-table-cell cell-l">Google Images <span class="caret"></span></div>
																				<div class="tablet-hide flex-table-cell cell-l">4rd July 16 - 4rd Oct 16</div>
																				<div class="mobile-hide flex-table-cell cell-m">
																					<span class="fixed-text">Fixed</span>
																					<span class="hourly-text">Per hour</span>
																				</div>
																				<div class="tablet-hide flex-table-cell cell-l mobile-show">150/120</div>
																				<div class="tablet-hide flex-table-cell cell-m">Internship</div>
																				<div class="blue-color job-item-doer mobile-hide flex-table-cell cell-m">Smith J.</div>
																				<div class="job-status flex-table-cell cell-l">
																					<span class="status-open btn btn-blue-border btn-bold">New</span>
																				</div>
																				<div class="info-btn-wrapper desktop-hide flex-table-cell cell-s">
																					<button type="button" class="btn info-btn btn-blue-hover">
																						<span class="icon icon-info-sign"></span>
																						<span class="caret-top"></span>
																					</button>
																					<div class="info-btn-content">
																						<div class="display-table">
																							<div class="display-table-tr">
																								<div class="display-table-th">Payed/Budget</div>
																								<div class="display-table-td">Payed</div>
																							</div>
																							<div class="display-table-tr">
																								<div class="display-table-th">Start - End</div>
																								<div class="display-table-td">4rd July 16 - 4rd Oct 16</div>
																							</div>
																							<div class="display-table-tr">
																								<div class="display-table-th">Type</div>
																								<div class="display-table-td">Fixed</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div class="flex-table-cell job-item-content">
																					<div class="job-bids">
																						<h2>Your Bids</h2>
																						<div class="job-bids-list">

																							<div class="job-bid-item panel">
																								<div class="flexbox bid-item-wrapper">

																									<div class="bid-info-left-panel">
																										<div class="bid-info-tips">
																											<div class="bid-header">
																												<div class="photo"></div>
																												<div class="info">
																													<div class="name blue-color">Anna S.</div>
																													<div class="prof">UI Designer</div>
																													<div class="rating">
																														<div class="stars-group">
																														    <span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>
																														</div>
																														<span class="rate-result">4.8</span>
																													</div>	
																												</div>
																												<span class="icon icon-next-arrow blue-color"></span>
																											</div>
																											<section class="bid-tips-list item-group">
																			  									<div class="item-info">
																			  										<div class="item-info_title">
																			  											<span class="icon icon-accounts"></span>
																			  											<span class="text"><strong>$25.00</strong> / hr</span>
																			  										</div>
																			  									</div>
																			  									<div class="item-info">
																			  										<div class="item-info_title">
																			  											<span class="icon icon-placeholder"></span>
																			  											<span class="text"><strong>Poland</strong></span>
																			  										</div>
																			  									</div>
																			  									<div class="item-info">
																			  										<div class="item-info_title">
																			  											<span class="icon icon-hourglass"></span>
																			  											<span class="text"><strong>540</strong>  hrs / <strong>10</strong> jobs</span>
																			  										</div>
																			  									</div>
																			  									<div class="item-info">
																			  										<div class="item-info_title">
																			  											<span class="icon icon-clock"></span>
																			  											<span class="text"><strong>Last Visit</strong> 2 hours ago</span>
																			  										</div>
																			  									</div>
																			  								</section>															
																			  							</div>
																									</div>

																									<div class="bid-info-right-panel">
																										<div class="bid-info-content container-fluid">
																											<div class="row work-info work-info--top">
																												<div class="col-sm-4 work-time">
																													<div class="work-time-status">
																														<strong>Available</strong> 
																													</div>
																													<div class="work-time-info">more then 30 hours/week</div>
																												</div>
																												<div class="col-sm-4 work-success">
																													<div class="work-success-status">
																														<strong>96%</strong> Job Success
																													</div>
																													<div class="work-success-rate my-progress-bar flexbox justify-space-between">
																														<div class="progress">
																															<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width": "60%"}}>
																															</div>
																														</div>
																													</div>
																												</div>
																												<div class="col-sm-4 flexbox justify-space-between">
																													<span class="work-price">
																														<span class="btn btn-gray">$<b>200</b></span>
																													</span>
																													<span class="work-nav">
																														<button class="btn del-btn icon-btn">
																															<span class="icon icon-garbage"></span>
																														</button>
																														<button class="btn icon-btn icon-btn">
																															<span class="icon icon-save"></span>
																														</button>
																													</span>
																												</div>
																											</div>
																											<div class="row work-info flexbox vertical-align-items-center">
																												<div class="col-sm-8 work-additional clearfix">
																													<div class="col-xs-8">
																														<span class="title">
																															2 Working Hours
																														</span>
																													</div>
																													<div class="col-xs-4 btn-wrapper">
																														<span class="btn btn-orange btn-bold">Free</span>
																													</div>
																													<div class="col-xs-12">
																														<span class="text">
																															Lorem ipsum dolor sit amet, consecvtetur adipisicing elit, sed do eiusmod tempor 
																														</span>
																													</div>
																												</div>
																												<div class="col-sm-4 work-contact">
																													<div class="work-btn-group">
																														<a href="#" class="btn btn-blue-border btn-bold btn-blue-hover" data-toggle="modal" data-target="#hire-bid-modal">Hire</a>
																														<a href="#" class="btn btn-blue-border btn-bold btn-blue-hover" data-toggle="modal" data-target="#new-bid-modal">Send message</a>
																														<a href="#" class="btn btn-blue-border btn-bold btn-blue-hover" data-toggle="modal" data-target="#cancel-bid-modal">Cancel</a>
																													</div>
																												</div>
																											</div>

																											<div class="row work-info">
																												<div class="col-sm-12 work-descr">
																													<p>
																														Lorem ipsum dolor sit amet, consecvtetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore Ut enim ad minim veniam...
																													</p>
																													<p>
																														quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
																													</p>
																													<p>
																														Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
																													</p>
																													<p>
																														Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
																													</p>
																												</div>
																											</div>
																										</div>
																									</div>
																								</div>
																							</div>
																							<div class="job-bid-item panel">
																								<div class="flexbox bid-item-wrapper">

																									<div class="bid-info-left-panel">
																										<div class="bid-info-tips">
																											<div class="bid-header">
																												<div class="photo"></div>
																												<div class="info">
																													<div class="name blue-color">Anna S.</div>
																													<div class="prof">UI Designer</div>
																													<div class="rating">
																														<div class="stars-group">
																														    <span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>
																														</div>
																														<span class="rate-result">4.8</span>
																													</div>	
																												</div>
																												<span class="icon icon-next-arrow blue-color"></span>
																											</div>
																											<section class="bid-tips-list item-group">
																			  									<div class="item-info">
																			  										<div class="item-info_title">
																			  											<span class="icon icon-accounts"></span>
																			  											<span class="text"><strong>$25.00</strong> / hr</span>
																			  										</div>
																			  									</div>
																			  									<div class="item-info">
																			  										<div class="item-info_title">
																			  											<span class="icon icon-placeholder"></span>
																			  											<span class="text"><strong>Poland</strong></span>
																			  										</div>
																			  									</div>
																			  									<div class="item-info">
																			  										<div class="item-info_title">
																			  											<span class="icon icon-hourglass"></span>
																			  											<span class="text"><strong>540</strong>  hrs / <strong>10</strong> jobs</span>
																			  										</div>
																			  									</div>
																			  									<div class="item-info">
																			  										<div class="item-info_title">
																			  											<span class="icon icon-clock"></span>
																			  											<span class="text"><strong>Last Visit</strong> 2 hours ago</span>
																			  										</div>
																			  									</div>
																			  								</section>															
																			  							</div>
																									</div>

																									<div class="bid-info-right-panel">
																										<div class="bid-info-content container-fluid">
																											<div class="row work-info work-info--top">
																												<div class="col-sm-4 work-time">
																													<div class="work-time-status">
																														<strong>Available</strong> 
																													</div>
																													<div class="work-time-info">more then 30 hours/week</div>
																												</div>
																												<div class="col-sm-4 work-success">
																													<div class="work-success-status">
																														<strong>96%</strong> Job Success
																													</div>
																													<div class="work-success-rate my-progress-bar flexbox justify-space-between">
																														<div class="progress">
																															<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width": "60%"}}>
																															</div>
																														</div>
																													</div>
																												</div>
																												<div class="col-sm-4 flexbox justify-space-between">
																													<span class="work-price">
																														<span class="btn btn-gray">$<b>200</b></span>
																													</span>
																													<span class="work-nav">
																														<button class="btn del-btn icon-btn">
																															<span class="icon icon-garbage"></span>
																														</button>
																														<button class="btn icon-btn icon-btn">
																															<span class="icon icon-save"></span>
																														</button>
																													</span>
																												</div>
																											</div>
																											<div class="row work-info flexbox vertical-align-items-center">
																												<div class="col-sm-8 work-additional clearfix">
																													<div class="col-xs-8">
																														<span class="title">
																															2 Working Hours
																														</span>
																													</div>
																													<div class="col-xs-4 btn-wrapper">
																														<span class="btn btn-orange btn-bold">Free</span>
																													</div>
																													<div class="col-xs-12">
																														<span class="text">
																															Lorem ipsum dolor sit amet, consecvtetur adipisicing elit, sed do eiusmod tempor 
																														</span>
																													</div>
																												</div>
																												<div class="col-sm-4 work-contact">
																													<div class="work-btn-group">
																														<a href="#" class="btn btn-blue-border btn-bold btn-blue-hover" data-toggle="modal" data-target="#hire-bid-modal">Hire</a>
																														<a href="#" class="btn btn-blue-border btn-bold btn-blue-hover" data-toggle="modal" data-target="#new-bid-modal">Send message</a>
																														<a href="#" class="btn btn-blue-border btn-bold btn-blue-hover" data-toggle="modal" data-target="#cancel-bid-modal">Cancel</a>
																													</div>
																												</div>
																											</div>

																											<div class="row work-info">
																												<div class="col-sm-12 work-descr">
																													<p>
																														Lorem ipsum dolor sit amet, consecvtetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore Ut enim ad minim veniam...
																													</p>
																													<p>
																														quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
																													</p>
																													<p>
																														Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
																													</p>
																													<p>
																														Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
																													</p>
																												</div>
																											</div>
																										</div>
																									</div>
																								</div>
																							</div>
																						</div>
																						<button type="submit" class="btn blue-color btn-bold btn-blue-hover btn-bg-transparent btn-bids btn-load-more">Load more</button>
																					</div>
																				</div>
																					
																			</div>


																			<div class="flex-table-row job-item">
																				<div class="dropdown setts-dropdown flex-table-cell cell-s">
																					<span class="icon icon-btn icon-settings dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></span>
																					<ul class="dropdown-menu">
																						<li><a href="#">Cancel</a></li>
																						<li><a href="#">Report</a></li>
																						<li><a href="#" class="hourly-toggler">
																							<span class="fixed-text">Change to hourly</span>
																							<span class="hourly-text">Change to fixed</span>
																						</a></li>
																				  	</ul>
																				</div>
																				<div class="blue-color job-item-title flex-table-cell cell-l">2 PSD to HTML <span class="caret"></span></div>
																				<div class="tablet-hide flex-table-cell cell-l">4rd July 16 - 4rd Oct 16</div>
																				<div class="mobile-hide flex-table-cell cell-m">
																					<span class="fixed-text">Fixed</span>
																					<span class="hourly-text">Per hour</span>
																				</div>
																				<div class="tablet-hide flex-table-cell cell-l mobile-show">150/120</div>
																				<div class="tablet-hide flex-table-cell cell-m">Payed</div>
																				<div class="blue-color job-item-doer mobile-hide flex-table-cell cell-m">Anwar H</div>
																				<div class="job-status flex-table-cell cell-l">
																					<span class="status-success btn btn-blue-border btn-bold">sucess</span>
																				</div>
																				<div class="info-btn-wrapper desktop-hide flex-table-cell cell-s">
																					<button type="button" class="btn info-btn btn-blue-hover">
																						<span class="icon icon-info-sign"></span>
																						<span class="caret-top"></span>
																					</button>
																					<div class="info-btn-content">
																						<div class="display-table">
																							<div class="display-table-tr">
																								<div class="display-table-th">Payed/Budget</div>
																								<div class="display-table-td">Payed</div>
																							</div>
																							<div class="display-table-tr">
																								<div class="display-table-th">Start - End</div>
																								<div class="display-table-td">4rd July 16 - 4rd Oct 16</div>
																							</div>
																							<div class="display-table-tr">
																								<div class="display-table-th">Type</div>
																								<div class="display-table-td">Fixed</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div class="flex-table-cell job-item-content">
																					<div class="skill-test-block">
																						<div class="block-header">Skill Test</div>
																						<div class="block-body white-border-bottom">
																							<div class="row work-info flexbox vertical-align-items-center">
																								<div class="col-sm-8 work-additional clearfix" data-toggle="modal" data-target="#skill-test-modal">
																									<div class="col-xs-8">
																										<span class="title">
																											2 Working Hours
																										</span>
																									</div>
																									<div class="col-xs-4 btn-wrapper">
																										<span class="btn btn-orange btn-bold">Free</span>
																									</div>
																									<div class="col-xs-12">
																										<span class="text">
																											Lorem ipsum dolor sit amet, consecvtetur adipisicing elit, sed do eiusmod tempor 
																										</span>
																									</div>
																								</div>
																								<div class="col-sm-4 work-contact">
																									<div class="work-btn-group">
																										<a href="#" class="btn btn-blue-border btn-bold btn-blue-hover">go to milestones</a>
																										<a href="#" class="btn btn-blue-border btn-bold btn-blue-hover">End Job</a>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																					<div class="flex-table milestone-list">
																						<div class="flex-table-row block-header">
																							<div class="flex-table-cell cell-l left-align">Milestone</div>
																							<div class="flex-table-cell cell-s mobile-hide centered-text hourly-text">Hour Rate</div>
																							<div class="flex-table-cell cell-s mobile-hide centered-text">Agreed</div>
																							<div class="flex-table-cell cell-s mobile-hide centered-text">Tip</div>
																							<div class="flex-table-cell cell-s mobile-hide centered-text">Total</div>
																							<div class="flex-table-cell cell-m tablet-hide"></div>
																						</div>
																						<div class="flex-table-row milestone-item funded">
																							<div class="flex-table-cell cell-s">
																								<div class="flexbox milestone-btn">
																									<button type="button" class="icon-btn">
																										<span class="icon icon-garbage"></span>
																									</button>
																									<button type="button" class="icon-btn">
																										<span class="icon icon-pencil"></span>
																									</button>
																								</div>
																							</div>
																							<div class="flex-table-cell cell-m left-align">
																								<div class="milestone-text">
																									<span class="milestone-title">
																										# 1-2 PSD Pages Conversion (due 21st July 16)
																									</span>
																									<span class="milestone-descr">
																										Completing converting 2 PSD. Pages to fully responsive html file
																									</span>
																									<div class="display-table-td info-btn-wrapper desktop-hide tablet-hide mobile-show">
																										<button type="button" class="btn info-btn btn-blue-hover">
																											<span class="icon icon-info-sign"></span>
																											<span class="caret-top"></span>
																										</button>
																										<div class="info-btn-content">
																											<div class="display-table">
																												<div class="display-table-tr">
																													<div class="display-table-th">Payed/Budget</div>
																													<div class="display-table-td">Payed</div>
																												</div>
																												<div class="display-table-tr">
																													<div class="display-table-th">Start - End</div>
																													<div class="display-table-td">4rd July 16 - 4rd Oct 16</div>
																												</div>
																												<div class="display-table-tr">
																													<div class="display-table-th">Type</div>
																													<div class="display-table-td">Fixed</div>
																												</div>
																											</div>
																										</div>
																									</div>
																								</div>
																							</div>
																							<div class="flex-table-cell cell-s hourly-text mobile-hide milestone-hour-price-block">
																								<div class="flexbox milestone-hour-price value-section justify-space-center">
																									<span class="value-n">50</span>
																									<input type="text" value="50"></input>
																									<span class="value-t">$</span>
																								</div>
																							</div>
																							<div class="flex-table-cell cell-s mobile-hide centered-text">
																								<div class="milestone-price milestone-price-fixed flexbox value-section justify-space-center">
																									<span class="value-n">50</span>
																									<input type="text" value="50"></input>
																									<span class="value-t">$</span>
																								</div>
																								<div class="milestone-price milestone-price-hourly flexbox value-section justify-space-center">
																									<span class="value-n">50</span>
																									<input type="text" value="50"></input>
																									<span class="value-t"> hours</span>
																								</div>
																							</div>
																							<div class="flex-table-cell cell-s mobile-hide centered-text">
																								<div class="milestone-tip flexbox value-section justify-space-center">
																									<span class="value-n">5</span>
																									<input type="text" class="milestone-tip" value="5"></input>
																									<span class="value-t">%</span>
																								</div>
																							</div>
																							<div class="flex-table-cell cell-s mobile-hide centered-text">
																								<span class="milestone-total-price"><strong>52.5$</strong></span>
																							</div>
																							<div class="flex-table-cell cell-m milestone-status tablet-hide" >
																								<span class="status-btn  milestone-status btn">funded</span>
																								<span class="status-btn milestone-status btn">Payed</span>
																							</div>
																						</div>
																						<div class="flex-table-row milestone-item not-funded">
																							<div class="flex-table-cell cell-s">
																								<div class="flexbox milestone-btn">
																									<button type="button" class="icon-btn">
																										<span class="icon icon-garbage"></span>
																									</button>
																									<button type="button" class="icon-btn">
																										<span class="icon icon-pencil"></span>
																									</button>
																								</div>
																							</div>
																							<div class="flex-table-cell cell-m left-align">
																								<div class="milestone-text">
																									<span class="milestone-title">
																										# 1-2 PSD Pages Conversion (due 21st July 16)
																									</span>
																									<span class="milestone-descr">
																										Completing converting 2 PSD. Pages to fully responsive html file
																									</span>
																									<div class="display-table-td info-btn-wrapper desktop-hide tablet-hide mobile-show">
																										<button type="button" class="btn info-btn btn-blue-hover">
																											<span class="icon icon-info-sign"></span>
																											<span class="caret-top"></span>
																										</button>
																										<div class="info-btn-content">
																											<div class="display-table">
																												<div class="display-table-tr">
																													<div class="display-table-th">Payed/Budget</div>
																													<div class="display-table-td">Payed</div>
																												</div>
																												<div class="display-table-tr">
																													<div class="display-table-th">Start - End</div>
																													<div class="display-table-td">4rd July 16 - 4rd Oct 16</div>
																												</div>
																												<div class="display-table-tr">
																													<div class="display-table-th">Type</div>
																													<div class="display-table-td">Fixed</div>
																												</div>
																											</div>
																										</div>
																									</div>
																								</div>
																							</div>
																							<div class="flex-table-cell cell-s hourly-text mobile-hide milestone-hour-price-block">
																								<div class="flexbox milestone-hour-price value-section justify-space-center">
																									<span class="value-n">50</span>
																									<input type="text" value="50"></input>
																									<span class="value-t">$</span>
																								</div>
																							</div>
																							<div class="flex-table-cell cell-s mobile-hide centered-text">
																								<div class="milestone-price milestone-price-fixed flexbox value-section justify-space-center">
																									<span class="value-n">50</span>
																									<input type="text" value="50"></input>
																									<span class="value-t">$</span>
																								</div>
																								<div class="milestone-price milestone-price-hourly flexbox value-section justify-space-center">
																									<span class="value-n">50</span>
																									<input type="text" value="50"></input>
																									<span class="value-t"> hours</span>
																								</div>
																							</div>
																							<div class="flex-table-cell cell-s mobile-hide centered-text">
																								<div class="milestone-tip flexbox value-section justify-space-center">
																									<span class="value-n">5</span>
																									<input type="text" class="milestone-tip" value="5"></input>
																									<span class="value-t">%</span>
																								</div>
																							</div>
																							<div class="flex-table-cell cell-s mobile-hide centered-text">
																								<span class="milestone-total-price"><strong>52.5$</strong></span>
																							</div>
																							<div class="flex-table-cell cell-m milestone-status tablet-hide" >
																								<span class="status-btn  milestone-status btn blue">funded</span>
																								<span class="status-btn milestone-status btn green">Release Payment</span>
																							</div>
																						</div>
																					</div>
																					<div class="job-feedback">
																						<h2>Feedback the Job</h2>
																						<p>Let others know about your experience with <a href="#">Anwar</a></p>
																						<div class="feedback-form flexbox">
																							<textarea placeholder="Share your experience and feedback with Anwar here"></textarea>
																							<div class="rates-block">
																								<div class="display-table rates-table">
																									<div class="display-table-tr">
																										<div class="display-table-th">Professional</div>
																										<div class="display-table-td">
																											<div class="rating">
																												<div class="stars-group">
																												    <span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>
																												</div>
																											</div>	
																										</div>
																									</div>
																									<div class="display-table-tr">
																										<div class="display-table-th">On time</div>
																										<div class="display-table-td">
																											<div class="rating">
																												<div class="stars-group">
																												    <span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>
																												</div>
																											</div>
																										</div>
																									</div>
																									<div class="display-table-tr">
																										<div class="display-table-th">Responsive</div>
																										<div class="display-table-td">
																											<div class="rating">
																												<div class="stars-group">
																												    <span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>
																												</div>
																											</div>
																										</div>
																									</div>
																								</div>
																								<button type="button" class="btn add-rate-cat-btn">+ Add new feedback category</button>
																							</div>
																						</div>
																						<div class="radio-block">
																							<h2><small>Would you give you recommendation?</small></h2>
																							<div class="radio">
																								<input type="radio" name="optionsRadios" id="yes" value="yes" checked></input>
																								<label for="yes">
																									<span class="radio-circle"></span>
																									<span class="radio-text">Yes</span>
																								</label>
																							</div>
																							<div class="radio">
																								<input type="radio" name="optionsRadios" id="no" value="no"></input>
																								<label for="no">
																									<span class="radio-circle"></span>
																									<span class="radio-text">No</span>
																								</label>
																							</div>
																							<div class="radio">
																								<input type="radio" name="optionsRadios" id="soso" value="soso"></input>
																								<label for="soso">
																									<span class="radio-circle"></span>
																									<span class="radio-text">Maybe next time</span>
																								</label>
																							</div>
																						</div>	
																					</div>
																					<div class="flex-table-row block-footer milestone-btn-group">
																						<button type="button" class="btn milestone-nav-btn add-milestone-btn" data-toggle="modal" data-target="#add-milestone">+ Add new Milestone</button>
																						<button type="button" class="btn milestone-nav-btn job-finish-btn">
																							<i>+</i> job finish
																						</button>
																						<button type="button" class="btn milestone-nav-btn job-finish-back-btn">Back</button>
																					</div>
																				</div>
																			</div>
																					
																		</div>

																	</div>
																</div>
																	
															</div>
														</div>
													</div>
												</div>  
                        {/* <!--/col-sm-12 END --> */}
											</div>
										</div>
                    {/* <!--my-jobs page END --> */}
										{/* <!--profile page START --> */}
										<div role="tabpanel" class="tab-pane my-tab" id="profile">
											<div class="flexbox justify-space-between">

												<div class="profile-bout-col">
													<div class="panel panel-default my-about-info">
										  				<div class="panel-body container-fluid">
										  					<div class="row">
										  						<div class="col-md-12">
										  							<section class="section-top flexbox flex-wrap">
										  								<div class="about-section about-section--1">
										  									<div class="user-photo">
											  									<div class="form-group add-photo">
																					<label for="photo-file">
																						<span class="icon icon-photo-camera"></span>
																						<span class="text">Change Photo</span>
																					</label>
																					<input type="file" id="photo-file"></input>
																				</div>
												  								<div class="photo-img"></div>
												  							</div>
												  							
												  							<div class="about-block price-info saved edit-btn-holder">
												  								<strong>25 $</strong> / hour
												  								<div class="pull-right btn edit-btn btn-gray">
																					<span class="text-edit saved-info">Edit</span>
																					<span class="text-save editable">Save</span>
																				</div>
												  							</div>
										  								</div>
										  								<div class="about-section about-section--2">
										  									<div class="about-block soc-icons">
												  								<a class="soc-link" href="#">
												  									<span class="icon icon-dribbble"></span>
												  								</a>
												  								<a class="soc-link" href="#">
												  									<span class="icon icon-behance"></span>
												  								</a>
												  								<a class="soc-link" href="#">
												  									<span class="icon icon-facebook"></span>
												  								</a>
												  								<a class="soc-link" href="#">
												  									<span class="icon icon-twitter"></span>
												  								</a>
												  							</div>

												  							<div class="about-block my-progress-bar flexbox justify-space-center">
												  								<div class="progress">
																					<div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width": "60%"}}>
																					</div>
																				</div>
																				<span class="persent-info">60%</span>
												  							</div>
										  								</div>
										  							</section>
										  							<div class="section-group">
										  								<section class="item-group flexbox flex-wrap">
										  									<div class="item-info about-section saved edit-btn-holder">
										  										<div class="btn edit-btn btn-gray">
																					<span class="text-edit saved-info">Edit</span>
																					<span class="text-save editable">Save</span>
																				</div>
										  										<div class="item-info_title">
										  											<span class="icon icon-placeholder"></span>
										  											<span class="text">United State</span>
										  										</div>
										  									</div>
										  									<div class="item-info about-section saved edit-btn-holder">
										  										<div class="btn edit-btn btn-gray">
																					<span class="text-edit saved-info">Edit</span>
																					<span class="text-save editable">Save</span>
																				</div>
										  										<div class="item-info_title">
										  											<span class="icon icon-tag"></span>
										  											<span class="text">Junior-Professional</span>
										  										</div>
										  									</div>
										  								</section>
										  								<section class="item-group flexbox flex-wrap">
										  									<div class="item-info about-section about-section--lg">
										  										<div class="item-info_title edit-btn-holder">
											  										<div class="btn edit-btn btn-gray">
																						<span class="icon icon-plus-button">
																						</span>
																					</div>
										  											<span class="icon icon-speech"></span>
										  											<span class="text"><strong>Languages</strong></span>
										  										</div>
										  										<ul class="item-info_text item-info-list list-unstyled">
										  											<li>
										  												English
										  												<div class="my-select-box">
										  													<span class="my-select-result">
										  														<span class="text">Fluent</span> 
										  														<span class="caret"></span>
										  													</span>
										  													<div class="my-select-options">
										  														<div class="caret-block">
										  															<span class="caret-top"></span>
										  														</div>
										  														<div class="radio-block">
																									<div class="radio">
																										<input type="radio" name="optionsRadios" id="lg-en-4" value="lg-en-4" checked></input>
																										<label for="lg-en-4">
																											<span class="check-mark icon icon-check-mark"></span>
																											<span class="radio-text">Fluent</span>
																										</label>
																									</div>
																									<div class="radio">
																										<input type="radio" name="optionsRadios" id="lg-en-3" value="lg-en-3"></input>
																										<label for="lg-en-3">
																											<span class="check-mark icon icon-check-mark"></span>
																											<span class="radio-text">Conversation, Read &amp; Write</span>
																										</label>
																									</div>
																									<div class="radio">
																										<input type="radio" name="optionsRadios" id="lg-en-2" value="lg-en-2"></input>
																										<label for="lg-en-2">
																											<span class="check-mark icon icon-check-mark"></span>
																											<span class="radio-text">Only Read &amp; Write</span>
																										</label>
																									</div>
																									<div class="radio">
																										<input type="radio" name="optionsRadios" id="lg-en-1" value="lg-en-1"></input>
																										<label for="lg-en-1">
																											<span class="check-mark icon icon-check-mark"></span>
																											<span class="radio-text">Don’t know at all</span>
																										</label>
																									</div>
																								</div>	
										  													</div>
										  												</div>
										  											</li>
										  											<li>
										  												Russian
										  												<div class="my-select-box">
										  													<span class="my-select-result">
										  														<span class="text">Fluent</span> 
										  														<span class="caret"></span>
										  													</span>
										  													<div class="my-select-options">
										  														<div class="caret-block">
										  															<span class="caret-top"></span>
										  														</div>
										  														<div class="radio-block">
																									<div class="radio">
																										<input type="radio" name="optionsRadios" id="lg-rus-4" value="lg-rus-4" checked></input>
																										<label for="lg-rus-4">
																											<span class="check-mark icon icon-check-mark"></span>
																											<span class="radio-text">Fluent</span>
																										</label>
																									</div>
																									<div class="radio">
																										<input type="radio" name="optionsRadios" id="lg-rus-3" value="lg-rus-3"></input>
																										<label for="lg-rus-3">
																											<span class="check-mark icon icon-check-mark"></span>
																											<span class="radio-text">Conversation, Read &amp; Write</span>
																										</label>
																									</div>
																									<div class="radio">
																										<input type="radio" name="optionsRadios" id="lg-rus-2" value="lg-rus-2"></input>
																										<label for="lg-rus-2">
																											<span class="check-mark icon icon-check-mark"></span>
																											<span class="radio-text">Only Read &amp; Write</span>
																										</label>
																									</div>
																									<div class="radio">
																										<input type="radio" name="optionsRadios" id="lg-rus-1" value="lg-rus-1"></input>
																										<label for="lg-rus-1">
																											<span class="check-mark icon icon-check-mark"></span>
																											<span class="radio-text">Don’t know at all</span>
																										</label>
																									</div>
																								</div>	
										  													</div>
										  												</div>
										  											</li>
										  											<li>
										  												Polish
										  												<div class="my-select-box">
										  													<span class="my-select-result">
										  														<span class="text">Fluent</span> 
										  														<span class="caret"></span>
										  													</span>
										  													<div class="my-select-options">
										  														<div class="caret-block">
										  															<span class="caret-top"></span>
										  														</div>
										  														<div class="radio-block">
																									<div class="radio">
																										<input type="radio" name="optionsRadios" id="lg-pol-4" value="lg-pol-4" checked></input>
																										<label for="lg-pol-4">
																											<span class="check-mark icon icon-check-mark"></span>
																											<span class="radio-text">Fluent</span>
																										</label>
																									</div>
																									<div class="radio">
																										<input type="radio" name="optionsRadios" id="lg-pol-3" value="lg-pol-3"></input>
																										<label for="lg-pol-3">
																											<span class="check-mark icon icon-check-mark"></span>
																											<span class="radio-text">Conversation, Read &amp; Write</span>
																										</label>
																									</div>
																									<div class="radio">
																										<input type="radio" name="optionsRadios" id="lg-pol-2" value="lg-pol-2"></input>
																										<label for="lg-pol-2">
																											<span class="check-mark icon icon-check-mark"></span>
																											<span class="radio-text">Only Read &amp; Write</span>
																										</label>
																									</div>
																									<div class="radio">
																										<input type="radio" name="optionsRadios" id="lg-pol-1" value="lg-pol-1"></input>
																										<label for="lg-pol-1">
																											<span class="check-mark icon icon-check-mark"></span>
																											<span class="radio-text">Don’t know at all</span>
																										</label>
																									</div>
																								</div>	
										  													</div>
										  												</div>
										  											</li>
										  										</ul>
										  									</div>
										  									<div class="item-info about-section">
										  										<div class="item-info_title saved edit-btn-holder">
										  										<div class="btn edit-btn btn-gray">
																					<span class="text-edit saved-info">Edit</span>
																					<span class="text-save editable">Save</span>
																				</div>
										  											<span class="icon icon-clock"></span>
										  											<span class="text"><strong>Availability</strong></span>
										  										</div>
										  										<div class="item-info_text">
										  											<p>
										  												Available<br/>More than 30 hrs/week
										  											</p>
										  										</div>
										  									</div>
										  									<div class="item-info about-section">
										  										<div class="item-info_title">
										  											<span class="icon icon-flag"></span>
										  											<span class="text"><strong>Place to work</strong></span>
										  										</div>
										  										<div class="item-info_text">
										  											<div class="my-select-box">
										  													<span class="my-select-result">
										  														<span class="text">Online</span> 
										  														<span class="caret"></span>
										  													</span>
										  													<div class="my-select-options">
										  														<div class="caret-block">
										  															<span class="caret-top"></span>
										  														</div>
										  														<div class="radio-block">
																									<div class="radio">
																										<input type="radio" name="optionsRadios" id="online" value="online" checked></input>
																										<label for="online">
																											<span class="check-mark icon icon-check-mark"></span>
																											<span class="radio-text">Online</span>
																										</label>
																									</div>
																									<div class="radio">
																										<input type="radio" name="optionsRadios" id="onsite" value="onsite"></input>
																										<label for="onsite">
																											<span class="check-mark icon icon-check-mark"></span>
																											<span class="radio-text">Onsite</span>
																										</label>
																									</div>
																									<div class="radio">
																										<input type="radio" name="optionsRadios" id="both" value="both"></input>
																										<label for="both">
																											<span class="check-mark icon icon-check-mark"></span>
																											<span class="radio-text"> Both</span>
																										</label>
																									</div>
																								</div>	
										  													</div>
										  												</div>
										  										</div>
										  									</div>
										  								</section>
										  							</div>
										  						</div>
										  					</div>
										  				</div>
										  			</div>
												</div>
                        {/* <!--profile-bout-col End-->	 */}
												<div class="profile-main-col">
													{/* <!-- Nav tabs --> */}
													<ul class="nav nav-tabs my-central-info-nav flexbox" role="tablist">
													  <li role="presentation" class="active"><a href="#personal-info" aria-controls="personal-info" role="tab" data-toggle="tab">Personal Info</a></li>
													  <li role="presentation"><a href="#professional-info" aria-controls="professional-info" role="tab" data-toggle="tab">Professional Info</a></li>
													  <li role="presentation"><a href="#experience" aria-controls="experience" role="tab" data-toggle="tab">Experience</a></li>
													</ul>
													 {/* <!-- Tab panes --> */}
													<div class="tab-content">
														<div role="tabpanel" class="tab-pane active my-tab-in-tab container-fluid" id="personal-info">
															<div class="row">
																<div class="col-sm-12">
																	<form class="form-block saved">
																		<div class="form-block-header clearfix">
																			<div class="pull-left form-title">Personal</div>
																			<div class="pull-right btn edit-btn btn-gray">
																				<span class="text-edit saved-info">Edit</span>
																				<span class="text-save editable">Save</span>
																			</div>
																		</div>
																		<div class="display-table">
																			<div class="display-table-tr">
																				<div class="display-table-th">Name *</div>
																				<div class="display-table-td">
																					<span class="saved-info">Anna</span>
																					<input type="text" value="Anna" placeholder="Name" required class="editable"></input>
																				</div>
																			</div>
																			<div class="display-table-tr">
																				<div class="display-table-th">Last Name *</div>
																				<div class="display-table-td">
																					<span class="saved-info">Smith</span>
																					<input type="text" value="Smith" placeholder="Last Name " required class="editable"></input>
																				</div>
																			</div>
																			<div class="display-table-tr">
																				<div class="display-table-th">Email *</div>
																				<div class="display-table-td">
																					<span class="saved-info">gg@g.g</span>
																					<input type="email" value="gg@g.g" placeholder="Email" required class="editable"></input>
																				</div>
																			</div>
																			<div class="display-table-tr">
																				<div class="display-table-th">Password *</div>
																				<div class="display-table-td">
																					<span class="saved-info">11111</span>
																					<input type="password" value="11111" placeholder="Password" required class="editable"></input>
																				</div>
																			</div>
																		</div>
																	</form>
																	
																</div>
															</div>
															<div class="row">
																<div class="col-sm-12">
																	<form  class="form-block saved">
																		<div class="form-block-header clearfix">
																			<div class="pull-left form-title">Mail / Invoice address</div>
																			<div class="pull-right btn edit-btn btn-gray">
																				<span class="text-edit saved-info">Edit</span>
																				<span class="text-save editable">Save</span>
																			</div>
																		</div>
																		<div class="display-table">
																			<div class="display-table-tr">
																				<div class="display-table-th">City</div>
																				<div class="display-table-td">
																					<span class="saved-info">Krakow</span>
																					<input type="text" value="Krakow" placeholder="City" required class="editable"></input>
																				</div>
																			</div>
																			<div class="display-table-tr">
																				<div class="display-table-th">Country</div>
																				<div class="display-table-td">
																					<span class="saved-info">Poland</span>
																					<input type="text" value="Poland" placeholder="Country" required class="editable form-control"></input>
																				</div>
																			</div>
																			<div class="display-table-tr">
																				<div class="display-table-th">Address</div>
																				<div class="display-table-td">
																					<span class="saved-info">Ulica street 12 / 3</span>
																					<input type="text" value="Ulica street 12 / 3" placeholder="Address" required class="editable"></input>
																				</div>
																			</div>
																			<div class="display-table-tr">
																				<div class="display-table-th">ZIP code</div>
																				<div class="display-table-td">
																					<span class="saved-info">49 000</span>
																					<input type="text" value="49 000" placeholder="ZIP" required class="editable"></input>
																				</div>
																			</div>
																			<div class="display-table-tr">
																				<div class="display-table-th">Mobile</div>
																				<div class="display-table-td">
																					<span class="saved-info">49 000</span>
																					<input type="tel" value="49 000" placeholder="Mobile" required class="editable"></input>
																				</div>
																			</div>
																		</div>
																	</form>
																</div>
															</div>
														</div>
														<div role="tabpanel" class="tab-pane my-tab-in-tab container-fluid" id="professional-info">
															<div class="row">
																<div class="col-sm-12">
																	<form class="form-block saved">
																		<div class="form-block-header clearfix">
																			<div class="pull-left form-title">Professional</div>
																			<div class="pull-right btn edit-btn btn-gray">
																				<span class="text-edit saved-info">Edit</span>
																				<span class="text-save editable">Save</span>
																			</div>
																		</div>
																		<div class="display-table">
																			<div class="display-table-tr">
																				<div class="display-table-th">Title</div>
																				<div class="display-table-td">
																					<span class="saved-info">UI/UX Designer</span>
																					<input type="text" value="Anna" placeholder="Name" class="editable"></input>
																				</div>
																			</div>
																			<div class="display-table-tr">
																				<div class="display-table-th">Introduction</div>
																				<div class="display-table-td">
																					<span class="saved-info">MY SKILLS:  User Interface Design  UX design  Application Interface Design  Dashboard design  Bootstrap  HTML5  CSS3  Responsive design Social Network Design  Dating UI  Mobile UI design  Web Design  iOS7 design  ...</span>
																					<textarea type="text" value="Smith" placeholder="Last Name " class="editable" row="3"></textarea>
																				</div>
																			</div>
																		</div>
																	</form>
																</div>
															</div>
															<div class="row">
																<div class="col-sm-12">
																	<form  class="form-block form-block--cl">
																		<div class="form-block-header clearfix">
																			<div class="pull-left form-title">Cover Letter</div>
																		</div>
																		<div class="cl-files-block">
																			<div class="cl-file">
																				<span class="file-title">
																					<span class="icon icon-file icon-btn"></span>
																					My Professional Cover Letter
																				</span>
																			</div>
																		</div>
																		<button class="btn cl-btn text-capitalize" type="button" data-toggle="modal" data-target="#cl-modal">View</button>
																		<button class="btn cl-btn text-capitalize" type="button">Delete</button>
																		<button class="btn cl-btn text-capitalize" type="button">Create New</button>


																		<div class="modal fade cl-modal" id="cl-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
																			<div class="modal-dialog" role="document">
																				<div class="modal-content">
																					<div class="modal-header">
																						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
																						<h4 class="modal-title" id="myModalLabel">Cover Letter</h4>
																					</div>
																					<div class="modal-body">
																						<div class="cover-letter-text">
																							<p>Chamomile is known worldwide to be a calming sleep aid, a remedy to ease an upset stomach, and for its wonderful anti-inflammatory and anti-spasmolytic properties. There are, however, many types of chamomile: Roman chamomile, Anthemis nobilis; German chamomile, Matricaria recutita; true Moroccan chamomile, Tanacetum annuum. Beyond these three basic types, German chamomile can also be called Hungarian or blue chamomile, while another species of chamomile called Moroccan is actually a different variety (Ormensis multicaulis) that is grown in Morocco. Ormensis multicaulis does not have the ink-blue color of the true Moroccan chamomile that is Tanacetum annuum, also called blue tansy. Each chamomile is a different variety, however they all have similar constituents as well as some likenesses in appearance.</p>

																							<p>Roman chamomile is mainly grown in England, and there are some areas in continental Europe and the United States that also distill the oil. In 1785, Carlo Allioni, an Italian botanist, placed what we know as Roman chamomile in the genus Chamaemelum, naming Anthemis nobilis as Chamaemelum nobile, thus furthering the confusion about chamomiles.</p>

																							<p>German chamomile is what most botanists and herbalists refer to as chamomile. German chamomile grows wild mostly in Germany, however what is known as blue or German chamomile has for the past 10 years or so been mainly distilled in Hungary, yet it retains the name German chamomile.</p>
																						</div>		
																					</div>
																					<div class="modal-footer">
																						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
																						<button type="button" class="btn btn-primary">Save changes</button>
																					</div>
																				</div>
																			</div>
																		</div>



																	</form>
																</div>
															</div>
															<div class="row">
																<div class="col-sm-12">
																	<form class="form-block saved">
																		<div class="form-block-header clearfix">
																			<div class="pull-left form-title">Education </div>
																			<div class="pull-right btn edit-btn btn-gray">
																				<span class="text-edit saved-info">Edit</span>
																				<span class="text-save editable">Save</span>
																			</div>
																		</div>
																		<div class="display-table period-table">
																			<div class="display-table-tr">
																				<div class="display-table-th">
																					<span class="period-title">Master of Education (M.Ed.), International Economy</span>
																					<span class="period-place">Oles Honchar Dnipropetrovsk National University</span>
																					<span class="period-descr">Master of Education (M.Ed.), International Economy | Oles Honchar Dnipropetrovsk National University</span>
																				</div>
																				<div class="display-table-td">
																					<span class="period-data">2007 - 2012</span>
																				</div>
																			</div>
																		</div>
																		<button class="btn edit-btn btn-gray">Add Education</button>
																	</form>
																</div>
															</div>
														</div>
														<div role="tabpanel" class="tab-pane my-tab-in-tab container-fluid" id="experience">
															<div class="row">
																<div class="col-sm-12">
																	<form  class="form-block">
																		<div class="form-block-header clearfix">
																			<div class="pull-left form-title">Do you want to try internship?</div>
																		</div>
																		<div class="radio-block">
																			<div class="radio">
																				<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked></input>
																				<label for="optionsRadios1">
																					<span class="radio-circle"></span>
																					<span class="radio-text">Yes (Willing to work for free and to get experience and engagement with customer)</span>
																				</label>
																			</div>
																			<div class="radio">
																				<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"></input>
																				<label for="optionsRadios2">
																					<span class="radio-circle"></span>
																					<span class="radio-text">No (I am experienced for my skills)</span>
																				</label>
																			</div>
																		</div>	
																	</form>
																</div>
															</div>
															<div class="row">
																<div class="col-sm-12">
																	<form class="form-block saved">
																		<div class="form-block-header clearfix">
																			<div class="pull-left form-title">Where did you work?</div>
																			<div class="pull-right btn edit-btn btn-gray">
																				<span class="text-edit saved-info">Edit</span>
																				<span class="text-save editable">Save</span>
																			</div>
																		</div>
																		<div class="display-table period-table">
																			<div class="display-table-tr">
																				<div class="display-table-th">
																					<span class="period-title">User interface designer</span>
																					<span class="period-place">Boldendeavours</span>
																					<span class="period-descr">Working as a lead UI-UX designer, front end developer</span>
																				</div>
																				<div class="display-table-td">
																					<span class="period-data">2.03.2016 - 5.07.2016</span>
																				</div>
																			</div>
																			<div class="display-table-tr">
																				<div class="display-table-th">
																					<span class="period-title">User interface designer</span>
																					<span class="period-place">Boldendeavours</span>
																					<span class="period-descr">Working as a lead UI-UX designer, front end developer</span>
																				</div>
																				<div class="display-table-td">
																					<span class="period-data">2.03.2016 - 5.07.2016</span>
																				</div>
																			</div>
																		</div>
																		<button class="btn edit-btn btn-gray">Add Experience</button>
																	</form>
																</div>
															</div>
														</div>
													</div>
												</div>  
                        {/* <!--/profile-main-col END --> */}
											</div>
										</div>
                    {/* <!--profile page END --> */}
									</div>
							</div>
              {/* <!--left-col End--> */}
							
						</div>
            {/* !--row End--> */}
					</div> 
				  </div>
				</div>


				{/* <!-- my jobs page modals START--> */}

				<div class="modal fade bid-modals modals hire-bid-modal" id="hire-bid-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							</div>
							<div class="modal-body">
								<div class="hire-bid-modal-content flexbox">
									<div class="bid-photo-block">
										<div class="bid-photo bg-cover circul-shape">
											<i class="notif"></i>
										</div>
										<div class="bid-name blue-color">Philip Seamor</div>
										<div class="bid-proff">Teacher</div>
									</div>
									<div class="bid-hire-form bid-form">
										<div class="form-title blue-color">
											Transform PSD’s to web-pages
										</div>
										<div class="form-block">
											<div class="radio-block">
												<div class="radio">
													<input type="radio" name="jobOption" id="exit-job" value="exit-job" checked="checked"></input>
													<label for="exit-job">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">Use Exisiting Job</span>
													</label>
												</div>
												<div class="radio">
													<input type="radio" name="jobOption" id="new-job" value="new-job"></input>
													<label for="new-job">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">Use Different Job title​</span>
													</label>
												</div>
											</div>
											<div class="job-title-block">
												<input type="text" placeholder="Job Title" class="job-title form-control"></input>
												<textarea placeholder="Job Description" class="form-control job-descr" rows="4"></textarea>
											</div>
										</div>	
										<hr/>
										<div class="form-block">
											<div class="form-block-header flexbox justify-space-between">
												<div class="form-block-title">
													Documents(Optional)
												</div>
												<div class="form-block-btn">
													<button type="button" class="btn btn-blue btn-bold">Add Files</button>
												</div>
											</div>
											<div class="files-list">
												<div class="files-item flexbox justify-space-start">
													<div class="file-icon">
														<span class="icon icon-icon blue-color"></span>
													</div>
													<div class="file-title">
														<div class="file-name">File.file</div>
													</div>
													<button type="button" class="icon-btn">
														<span class="icon icon-garbage"></span>
													</button>
												</div>
												<div class="files-item flexbox justify-space-start">
													<div class="file-icon">
														<span class="icon icon-icon blue-color"></span>
													</div>
													<div class="file-title">
														<div class="file-name">Picture.png</div>
													</div>
													<button type="button" class="icon-btn">
														<span class="icon icon-garbage"></span>
													</button>
												</div>
											</div>
										</div>
										<hr/>
										<div class="form-block">
											<div class="form-block-header">
												<div class="form-block-title">
													Skill Test-Job’s Sample for free​
												</div>
											</div>
											<div class="radio-block">
												<p>Would like to do a skill test and get a sample of work for free before you pay money ?​ It will be a condition to get the job.​</p>
												<div class="radio">
													<input type="radio" name="test-option" id="test-yes" value="test-yes" checked></input>
													<label for="test-yes">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">Yes</span>
													</label>
												</div>
												<div class="radio">
													<input type="radio" name="test-option" id="test-no" value="test-no"></input>
													<label for="test-no">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">No</span>
													</label>
												</div>
											</div>
											<div class="skill-test-block">
												<input type="text" placeholder="Skill test title" class="skill-test-title form-control"></input>
												<textarea placeholder="Describe here what you want the talent to do as a skill test.." class="form-control skill-test-descr" rows="4"></textarea>
												<button type="button" class="btn btn-blue btn-bold">Save skill test</button>
											</div>
										</div>
										<hr/>
										<div class="form-block padding-bottom-none">
											<div class="form-block-header">
												<div class="form-block-title">
													Job Payment
												</div>
											</div>
											<div class="radio-block">
												<p>Would like to do a skill test and get a sample of work for free before you pay money ?​ It will be a condition to get the job.​</p>
												<div class="radio">
													<input type="radio" name="job-payment" id="fixed-payment" value="fixed-payment" checked></input>
													<label for="fixed-payment">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">Fixed Price</span>
													</label>
												</div>
												<div class="radio">
													<input type="radio" name="job-payment" id="hourly-payment" value="hourly-payment"></input>
													<label for="hourly-payment">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">Hourly</span>
														<span class="job-payment-input-wrapper">
															<input type="text" value="20" class="form-control"></input>
															$ / hour
														</span>
													</label>
												</div>
											</div>
										</div>
										<div class="form-block">
											<div class="form-block-header">
												<div class="form-block-title">
													Job Price
												</div>
											</div>
											<div class="job-price-input-wrapper">
												<input class="form-control" type="text" value="500"></input>
												<p class="small">Enter here how much you think it should cost you..</p>
											</div>
										</div>
										<hr/>
										<div class="form-block padding-bottom-none job-time-block">
											<div class="form-block-header">
												<div class="form-block-title">
													Estimated time to complete the Job
												</div>
											</div>
											<div class="btn-group">
												<button class="btn btn-bg-transparent">
													<div class="my-select-box">
															<span class="my-select-result">
																<span class="text">3</span> 
																<span class="caret"></span>
															</span>
															<div class="my-select-options">
																<div class="radio-block">
																<div class="radio">
																	<input type="radio" name="numb-options" id="1-term" value="1-term" checked></input>
																	<label for="1-term">
																		<span class="radio-text">1</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="2-term" value="2-term" checked></input>
																	<label for="2-term">
																		<span class="radio-text">2</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="3-term" value="3-term" checked></input>
																	<label for="3-term">
																		<span class="radio-text">3</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="4-term" value="4-term" checked></input>
																	<label for="4-term">
																		<span class="radio-text">4</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="5-term" value="5-term" checked></input>
																	<label for="5-term">
																		<span class="radio-text">5</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="6-term" value="6-term" checked></input>
																	<label for="6-term">
																		<span class="radio-text">6</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="7-term" value="7-term" checked></input>
																	<label for="7-term">
																		<span class="radio-text">7</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="8-term" value="8-term" checked></input>
																	<label for="8-term">
																		<span class="radio-text">8</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="9-term" value="9-term" checked></input>
																	<label for="9-term">
																		<span class="radio-text">9</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="10-term" value="10-term"></input>
																	<label for="10-term">
																		<span class="radio-text">10</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="11-term" value="11-term"></input>
																	<label for="11-term">
																		<span class="radio-text"> 11</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="12-term" value="12-term"></input>
																	<label for="12-term">
																		<span class="radio-text">12</span>
																	</label>
																</div>
															</div>	
															</div>
														</div>
													</button>
												<button class="btn btn-bg-transparent">
													<div class="my-select-box">
															<span class="my-select-result">
																<span class="text">Week</span> 
																<span class="caret"></span>
															</span>
															<div class="my-select-options">
																<div class="radio-block">
																<div class="radio">
																	<input type="radio" name="period-options" id="d-term" value="d-term" checked></input>
																	<label for="d-term">
																		<span class="radio-text">Day</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="period-options" id="w-term" value="w-term"></input>
																	<label for="w-term">
																		<span class="radio-text">Week</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="period-options" id="m-term" value="m-term"></input>
																	<label for="m-term">
																		<span class="radio-text"> Month</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="period-options" id="y-term" value="y-term"></input>
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
										<div class="form-block padding-bottom-none">
											<div class="form-block-header">
												<div class="form-block-title">
													Talent Commitment
												</div>
											</div>
											<div class="radio-block">
												<div class="radio">
													<input type="radio" name="commitment-option" id="later" value="later" checked></input>
													<label for="later">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">I will Decide Later</span>
													</label>
												</div>
												<div class="radio">
													<input type="radio" name="commitment-option" id="10hrs" value="10hrs"></input>
													<label for="10hrs">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">10 hrs per week</span>
													</label>
												</div>
												<div class="radio">
													<input type="radio" name="commitment-option" id="30hrs" value="30hrs"></input>
													<label for="30hrs">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">Up to 30 hrs per week</span>
													</label>
												</div>
												<div class="radio">
													<input type="radio" name="commitment-option" id="30morehrs" value="30morehrs"></input>
													<label for="30morehrs">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">More than 30 hrs per week</span>
													</label>
												</div>
											</div>
										</div>
										<div class="form-block padding-bottom-none">
											<div class="form-block-header">
												<div class="form-block-title">
													Contract General Notes
												</div>
											</div>
											<div>
												<textarea class="form-control comments-area" placeholder="Enter here Comments for the contract"></textarea>
											</div>
										</div>
										<div class="form-block">
											<div class="form-block-header">
												<div class="form-block-title">
													Finish
												</div>
											</div>
											<div class="checkbox-block">
												<input type="checkbox" id="terms-agree"></input>
												<label for="terms-agree">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">I agree for the terms of use</span>
												</label>
											</div>
										</div>
										<button class="btn btn-blue btn-bold">Finish</button>
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<div class="form-status">
									<span class="checkbox-sqw">
										<span class="icon icon-check-mark"></span>
									</span>
									<span class="text">Job contract submitted successfully. Waiting for talent for approval</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="modal fade bid-modals modals" id="cancel-bid-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							</div>
							<div class="modal-body">
								<div class="bid-cancel-form bid-form">
									<div class="form-title">
										End the  job <span class="job-title blue-color">"Transform PSD’s to web-pages"</span>
									</div>
									<div class="form-block padding-bottom-none">
											<div class="form-block-header">
												<div class="form-block-title">
													Reason​
												</div>
											</div>
											<div class="checkbox-list-block">
												<div class="checkbox-block">
													<input type="checkbox" id="reason-1"></input>
													<label for="reason-1">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="checkbox-text">I found other talent​</span>
													</label>
												</div>
												<div class="checkbox-block">
													<input type="checkbox" id="reason-2"></input>
													<label for="reason-2">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="checkbox-text">Job not needed anymore​</span>
													</label>
												</div>
												<div class="checkbox-block">
													<input type="checkbox" id="reason-3"></input>
													<label for="reason-3">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="checkbox-text">Failure to meet deadlines and milestones​</span>
													</label>
												</div>
												<div class="checkbox-block">
													<input type="checkbox" id="reason-4"></input>
													<label for="reason-4">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="checkbox-text">Failure to meet skills requirements​</span>
													</label>
												</div>
												<div class="checkbox-block">
													<input type="checkbox" id="reason-5"></input>
													<label for="reason-5">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="checkbox-text">Job completed​</span>
													</label>
												</div>
												<div class="checkbox-block">
													<input type="checkbox" id="reason-6"></input>
													<label for="reason-6">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="checkbox-text">The talent not responsive</span>
													</label>
												</div>
												<div class="checkbox-block">
													<input type="checkbox" id="reason-7"></input>
													<label for="reason-7">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="checkbox-text">The talent not available</span>
													</label>
												</div>
											</div>
									</div>
									<div class="form-block reason-input-block">
										<div class="form-block-header">
											<p>For other reason please share with us :​</p>
										</div>
										<div>
											<textarea class="form-control comments-area" placeholder="Write here your reason"></textarea>
										</div>
										<button class="btn btn-blue btn-bold">Save</button>
									</div>
									<hr/>
									<div class="form-block">
										<div class="form-block-header">
											<div class="form-block-title">
												Payment​
											</div>
										</div>
										<div class="radio-block">
											<div class="radio">
												<input type="radio" name="cancel-bid-payment" id="rest-payment" value="rest-payment" checked=""></input>
												<label for="rest-payment">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="radio-text">Pay the rest of the job budget​​</span>
												</label>
											</div>
											<div class="radio">
												<input type="radio" name="cancel-bid-payment" id="deposit-payment" value="deposit-payment" checked=""></input>
												<label for="deposit-payment">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="radio-text">Refund my deposit- Don’t pay to the talent​</span>
												</label>
											</div>
											<div class="radio">
												<input type="radio" name="cancel-bid-payment" id="fix-payment" value="fix-payment"></input>
												<label for="fix-payment">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="radio-text">Pay this amount​</span>
													<span class="job-payment-input-wrapper">
														<input type="text" value="500" class="form-control"></input>
														$
													</span>
												</label>
											</div>
										</div>
									</div>
								</div>
								<button class="btn btn-blue btn-bold">End the job</button>
							</div>
							<div class="modal-footer">
								<div class="form-status">
									<span class="checkbox-sqw">
										<span class="icon icon-check-mark"></span>
									</span>
									<span class="text">Job contract submitted successfully. Waiting for talent for approval</span>
								</div>
							</div>
						</div>
					</div>
				</div>


				<div class="modal fade bid-modals modals post-job-modal" id="post-job-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							</div>
							<div class="modal-body">
								<div class="bid-cancel-form bid-form post-job-content">
									<div class="form-title">
										<div class="post-job-title blue-color">Post a Job</div>
									</div>
									<div class="post-job-form panel panel-default">
					<div class="form-block">
						<div class="post-job-inputs form-block-wrapper">
							<input type="text" placeholder="Job Title" class="job-title form-control"></input>
							<textarea placeholder="Job Description" class="form-control job-descr" rows="4"></textarea>
						</div>
					</div>
					<div class="form-block">
						<div class="skill-block skill-cat">
							<div class="skill-block-title">
								<div class="form-block-wrapper">
									Choose  Your Skill Category
									<span class="icon icon-down-arrow"></span>
								</div>
							</div>
							<div class="skill-block-list">
								<form class="form-block-wrapper flexbox flex-wrap">
									<div class="checkbox-block">
										<input type="checkbox" id="cat-1"></input>
										<label for="cat-1">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="checkbox-text">Web, Mobile &amp; Software Dev</span>
										</label>
									</div>
									<div class="checkbox-block">
										<input type="checkbox" id="cat-2"></input>
										<label for="cat-2">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="checkbox-text">IT &amp; Networking</span>
										</label>
									</div>
									<div class="checkbox-block">
										<input type="checkbox" id="cat-3"></input>
										<label for="cat-3">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="checkbox-text">Data Science &amp; Analytics</span>
										</label>
									</div>
									<div class="checkbox-block">
										<input type="checkbox" id="cat-4"></input>
										<label for="cat-4">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="checkbox-text">Translation</span>
										</label>
									</div>
									<div class="checkbox-block">
										<input type="checkbox" id="cat-5"></input>
										<label for="cat-5">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="checkbox-text">Legal</span>
										</label>
									</div>
									<div class="checkbox-block">
										<input type="checkbox" id="cat-6"></input>
										<label for="cat-6">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="checkbox-text">Admin Support</span>
										</label>
									</div>
									<div class="checkbox-block">
										<input type="checkbox" id="cat-7"></input>
										<label for="cat-7">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="checkbox-text">Engineering &amp; Architecture</span>
										</label>
									</div>
									<div class="checkbox-block">
										<input type="checkbox" id="cat-8"></input>
										<label for="cat-8">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="checkbox-text">Customer Service</span>
										</label>
									</div>
									<div class="checkbox-block">
										<input type="checkbox" id="cat-9"></input>
										<label for="cat-9">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="checkbox-text">Design &amp; Creative</span>
										</label>
									</div>
									<div class="checkbox-block">
										<input type="checkbox" id="cat-10"></input>
										<label for="cat-10">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="checkbox-text">Sales &amp; Marketing</span>
										</label>
									</div>
								</form>
							</div>
						</div>
						<div class="skill-subcat">
							<div class="flexbox justify-space-between form-block-wrapper">
								<div class="skill-block">
									<div class="skill-block-title">Math &amp; Science</div>
									<div class="skill-block-list">
										<form>
											<div class="checkbox-block">
												<input type="checkbox" id="math-1"></input>
												<label for="math-1">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div class="checkbox-block">
												<input type="checkbox" id="math-2"></input>
												<label for="math-2">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div class="checkbox-block">
												<input type="checkbox" id="math-3"></input>
												<label for="math-3">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div class="checkbox-block">
												<input type="checkbox" id="math-4"></input>
												<label for="math-4">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div class="checkbox-block">
												<input type="checkbox" id="math-5"></input>
												<label for="math-5">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div class="checkbox-block">
												<input type="checkbox" id="math-6"></input>
												<label for="math-6">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div class="checkbox-block">
												<input type="checkbox" id="math-7"></input>
												<label for="math-7">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div class="checkbox-block">
												<input type="checkbox" id="math-8"></input>
												<label for="math-8">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div class="checkbox-block">
												<input type="checkbox" id="math-9"></input>
												<label for="math-9">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
											<div class="checkbox-block">
												<input type="checkbox" id="math-10"></input>
												<label for="math-10">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">Lorem ipsum dolor sit amet, consectetur</span>
												</label>
											</div>
										</form>
									</div>
								</div>
								<div class="skill-sub-block">
									<form class="form-group">
										<input type="text" class="form-control" placeholder="Write new skill"></input>
										<button class="add-btn btn btn-blue">
											<span class="icon icon-add"></span>
										</button>
									</form>
									<div class="skill-tags-block clearfix">
										<div class="skill-tag">Math</div>
										<div class="skill-tag">Trigonometry</div>
										<div class="skill-tag">Calculus</div>
										<div class="skill-tag">Trigonometry</div>
										<div class="skill-tag">Calculus</div>
										<div class="skill-tag">Trigonometry</div>
										<div class="skill-tag">Calculus</div>
										<div class="skill-tag">Math</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="form-block">
						<div class="form-block-wrapper promo-sample-block">
							<div class="radio-block">
								<div class="radio">
									<input type="radio" name="promo-sample" id="promo-cr" value="promo-cr" checked="checked"></input>
									<label for="promo-cr">
										<span class="checkbox-sqw">
											<span class="icon icon-check-mark"></span>
										</span>
										<span class="radio-text">Create Sample</span>
									</label>
								</div>
								<div class="post-job-inputs">
									<input type="text" placeholder="Job Title" class="job-title form-control"></input>
									<textarea placeholder="Job Description" class="form-control job-descr" rows="4"></textarea>
								</div>
								<button class="btn btn-bold btn-blue">Create Promotion</button>
							</div>
							<div class="radio-block">
								<div class="radio">
									<input type="radio" name="promo-sample" id="promo-ch" value="promo-ch" checked="checked"></input>
									<label for="promo-ch">
										<span class="checkbox-sqw">
											<span class="icon icon-check-mark"></span>
										</span>
										<span class="radio-text">Or Chouse Sample</span>
									</label>
								</div>
								<div class="promo-block-form">
									<div class="promo-block-form-header flexbox justify-space-between">
										<div class="filter-nav flexbox justify-space-between">
											<div class="my-select-box form-control">
												<span class="my-select-result flexbox justify-space-between">
													<span class="text">Category</span> 
													<span class="caret"></span>
												</span>
												<div class="my-select-options">
													<div class="radio-block">
														<div class="radio">
															<input type="radio" name="numb-options" id="1-term" value="1-term" checked=""></input>
															<label for="1-term">
																<span class="radio-text">1</span>
															</label>
														</div>
														<div class="radio">
															<input type="radio" name="numb-options" id="2-term" value="2-term" checked=""></input>
															<label for="2-term">
																<span class="radio-text">2</span>
															</label>
														</div>
													</div>	
												</div>
											</div>
											<div class="my-select-box form-control">
												<span class="my-select-result flexbox justify-space-between">
													<span class="text">Sub Category</span> 
													<span class="caret"></span>
												</span>
												<div class="my-select-options">
													<div class="radio-block">
														<div class="radio">
															<input type="radio" name="numb-options" id="1-term" value="1-term" checked=""></input>
															<label for="1-term">
																<span class="radio-text">1</span>
															</label> 
														</div>
														<div class="radio">
															<input type="radio" name="numb-options" id="2-term" value="2-term" checked=""></input>
															<label for="2-term">
																<span class="radio-text">2</span>
															</label>
														</div>
													</div>	
												</div>
											</div>
										</div>
										<div class="results-numb">
											<span class="numb">12</span> results
										</div>
									</div>
									<div class="promo-block-form-body">
										<div class="checkbox-block">
											<input type="checkbox" id="skill-test-1"></input>
											<label for="skill-test-1">
												<div class="panel-block flexbox">
													<span class="checkbox-circle checkbox-sqw">
														<span class="icon icon-check-mark"></span>
													</span>
													<div class="panel-wrapper">
														<div class="panel panel-blue">
															<div class="panel-title flexbox justify-space-between">
																<span>Math  Home Tutoring</span>
																<span class="btn btn-blue-border btn-bold">Free</span>
															</div>
															<div class="panel-text">
																Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
															</div>
														</div>
													</div>
												</div>
											</label>
										</div>
										<div class="checkbox-block">
											<input type="checkbox" id="skill-test-2"></input>
											<label for="skill-test-2">
												<div class="panel-block flexbox">
													<span class="checkbox-circle checkbox-sqw">
														<span class="icon icon-check-mark"></span>
													</span>
													<div class="panel-wrapper">
														<div class="panel panel-orange">
															<div class="panel-title flexbox justify-space-between">
																<span>Math  Home Tutoring</span>
																<span class="btn btn-blue-border btn-bold">Free</span>
															</div>
															<div class="panel-text">
																Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
															</div>
														</div>
													</div>
												</div>
											</label>
										</div>
										<div class="checkbox-block">
											<input type="checkbox" id="skill-test-3"></input>
											<label for="skill-test-3">
												<div class="panel-block flexbox">
													<span class="checkbox-circle checkbox-sqw">
														<span class="icon icon-check-mark"></span>
													</span>
													<div class="panel-wrapper">
														<div class="panel panel-pink">
															<div class="panel-title flexbox justify-space-between">
																<span>Math  Home Tutoring</span>
																<span class="btn btn-blue-border btn-bold">Free</span>
															</div>
															<div class="panel-text">
																Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
															</div>
														</div>
													</div>
												</div>
											</label>
										</div>
									</div>
								</div>
								<button class="btn btn-bold btn-blue">Add Promotion</button>
							</div>
						</div>
					</div>
					<div class="form-block">
						<div class="form-block-wrapper flexbox justify-space-between">
							<div class="form-block-section">
								<div class="form-block-header">
									<div class="form-block-title">
										Job Payment
									</div>
								</div>
								<div class="radio-block">
									<div class="radio">
										<input type="radio" name="job-payment" id="fixed-payment" value="fixed-payment" checked=""></input>
										<label for="fixed-payment">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">Fixed Price</span>
										</label>
									</div>
									<div class="radio">
										<input type="radio" name="job-payment" id="hourly-payment" value="hourly-payment"></input>
										<label for="hourly-payment">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">Hourly</span>
											<span class="job-payment-input-wrapper">
												<input type="text" value="20" class="form-control"></input>
												$ / hour
											</span>
										</label>
									</div>
								</div>
							</div>
							<div class="form-block-section">
								<div class="form-block-header">
									<div class="form-block-title">
										Job Price
									</div>
								</div>
								<div class="job-price-input-wrapper">
									<input class="form-control" type="text" value="500"></input> $
									<p class="small">Enter here how much you think it should cost you..</p>
								</div>
							</div>
						</div>
						<div class="form-block-wrapper">
							<div class="form-block-section job-time-block col-100">
								<div class="form-block-header">
									<div class="form-block-title">
										Estimated time to complete the Job
									</div>
								</div>
								<div class="btn-group">
									<button class="btn btn-bg-transparent">
										<div class="my-select-box">
												<span class="my-select-result">
													<span class="text">3</span> 
													<span class="caret"></span>
												</span>
												<div class="my-select-options">
													<div class="radio-block">
													<div class="radio">
														<input type="radio" name="numb-options" id="1-term" value="1-term" checked=""></input>
														<label for="1-term">
															<span class="radio-text">1</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="2-term" value="2-term" checked=""></input>
														<label for="2-term">
															<span class="radio-text">2</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="3-term" value="3-term" checked=""></input>
														<label for="3-term">
															<span class="radio-text">3</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="4-term" value="4-term" checked=""></input>
														<label for="4-term">
															<span class="radio-text">4</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="5-term" value="5-term" checked=""></input>
														<label for="5-term">
															<span class="radio-text">5</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="6-term" value="6-term" checked=""></input>
														<label for="6-term">
															<span class="radio-text">6</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="7-term" value="7-term" checked=""></input>
														<label for="7-term">
															<span class="radio-text">7</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="8-term" value="8-term" checked=""></input>
														<label for="8-term">
															<span class="radio-text">8</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="9-term" value="9-term" checked=""></input>
														<label for="9-term">
															<span class="radio-text">9</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="10-term" value="10-term"></input>
														<label for="10-term">
															<span class="radio-text">10</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="11-term" value="11-term"></input>
														<label for="11-term">
															<span class="radio-text"> 11</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="numb-options" id="12-term" value="12-term"></input>
														<label for="12-term">
															<span class="radio-text">12</span>
														</label>
													</div>
												</div>	
												</div>
											</div>
										</button>
									<button class="btn btn-bg-transparent">
										<div class="my-select-box">
												<span class="my-select-result">
													<span class="text">Week</span> 
													<span class="caret"></span>
												</span>
												<div class="my-select-options">
													<div class="radio-block">
													<div class="radio">
														<input type="radio" name="period-options" id="d-term" value="d-term" checked=""></input>
														<label for="d-term">
															<span class="radio-text">Day</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="period-options" id="w-term" value="w-term"></input>
														<label for="w-term">
															<span class="radio-text">Week</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="period-options" id="m-term" value="m-term"></input>
														<label for="m-term">
															<span class="radio-text"> Month</span>
														</label>
													</div>
													<div class="radio">
														<input type="radio" name="period-options" id="y-term" value="y-term"></input>
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
						<div class="form-block-wrapper flexbox justify-space-between">
							<div class="form-block-section col-30">
								<div class="form-block-header">
									<div class="form-block-title">
										Talent Commitment
									</div>
								</div>
								<div class="radio-block">
									<div class="radio">
										<input type="radio" name="commitment-option" id="later" value="later" checked=""></input>
										<label for="later">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">I will Decide Later</span>
										</label>
									</div>
									<div class="radio">
										<input type="radio" name="commitment-option" id="10hrs" value="10hrs"></input>
										<label for="10hrs">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">10 hrs per week</span>
										</label>
									</div>
									<div class="radio">
										<input type="radio" name="commitment-option" id="30hrs" value="30hrs"></input>
										<label for="30hrs">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">Up to 30 hrs per week</span>
										</label>
									</div>
									<div class="radio">
										<input type="radio" name="commitment-option" id="30morehrs" value="30morehrs"></input>
										<label for="30morehrs">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">More than 30 hrs per week</span>
										</label>
									</div>
								</div>
							</div>
							<div class="form-block-section">
								<div class="form-block-header">
									<div class="form-block-title">
										Talent Level
									</div>
								</div>
								<div class="radio-block">
									<div class="radio">
										<input type="radio" name="lavel-otion" id="level-int" value="level-int" checked=""></input>
										<label for="level-int">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">Intern</span>
										</label>
									</div>
									<div class="radio">
										<input type="radio" name="lavel-otion" id="level-jun" value="level-jun"></input>
										<label for="level-jun">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">Junior</span>
										</label>
									</div>
									<div class="radio">
										<input type="radio" name="lavel-otion" id="level-sen" value="level-sen"></input>
										<label for="level-sen">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">Senior</span>
										</label>
									</div>
									<div class="radio">
										<input type="radio" name="lavel-otion" id="level-exp" value="level-exp"></input>
										<label for="level-exp">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">Expert</span>
										</label>
									</div>
								</div>
							</div>
							<div class="form-block-section col-30">
								<div class="form-block-header">
									<div class="form-block-title">
										How Many Talents Do you want to try
									</div>
								</div>
								<div class="radio-block">
									<div class="radio">
										<input type="radio" name="quantity-option" id="quantity-1" value="quantity-1" checked=""></input>
										<label for="quantity-1">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">1</span>
										</label>
									</div>
									<div class="radio">
										<input type="radio" name="quantity-option" id="quantity-3" value="quantity-3"></input>
										<label for="quantity-3">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">3</span>
										</label>
									</div>
									<div class="radio">
										<input type="radio" name="quantity-option" id="quantity-5" value="quantity-5"></input>
										<label for="quantity-5">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">5</span>
										</label>
									</div>
									<div class="radio">
										<input type="radio" name="quantity-option" id="quantity-infinity" value="quantity-infinity"></input>
										<label for="quantity-infinity">
											<span class="checkbox-circle">
												<span class="icon icon-check-mark"></span>
											</span>
											<span class="radio-text">As many as will be</span>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div class="form-block-wrapper">
							<div class="form-block-section col-100">
								<div class="form-block-header">
									<div class="form-block-title">
										Contract General Notes
									</div>
								</div>
								<div>
									<textarea class="form-control comments-area" placeholder="Enter here Comments for the contract"></textarea>
								</div>
							</div>
						</div>
						<div class="form-block-wrapper">
							<div class="form-block-section finish-block col-100">
								<div class="form-block-header">
									<div class="form-block-title">
										Finish
									</div>
								</div>
								<div class="checkbox-block">
									<input type="checkbox" id="terms-agree"></input>
									<label for="terms-agree">
										<span class="checkbox-circle">
											<span class="icon icon-check-mark"></span>
										</span>
										<span class="checkbox-text">I agree for the terms of use</span>
									</label>
								</div>
							</div>
						</div>
						<div class="form-block-wrapper btn-block">
							<button class="btn btn-blue btn-bold">Preview Before Posting</button>
							<button class="btn btn-blue btn-bold">Continue</button>
						</div>
					</div>
				</div>
								</div>
								<button class="btn btn-blue btn-bold">End the job</button>
							</div>
							<div class="modal-footer">
								<div class="form-status">
									<span class="checkbox-sqw">
										<span class="icon icon-check-mark"></span>
									</span>
									<span class="text">Job contract submitted successfully. Waiting for talent for approval</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- NEW-BID MODAL --> */}
				<div class="modal fade bid-modals modals" id="new-bid-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							</div>
							<div class="modal-body">
								<div class="new-bid-form bid-form">
									<div class="form-title">
										Post a bid for job <span class="job-title blue-color">"Transform PSD’s to web-pages"</span>
									</div>
									<div class="form-block">
										<div class="form-block-header">
											<div class="form-block-title">
												Introduction
											</div>
										</div>
										<div class="radio-block">
											<div class="radio">
												<input type="radio" name="jobOption" id="exit-job" value="exit-job" checked="checked"></input>
												<label for="exit-job">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="radio-text">Add your saved “<a href="#">Bid Introduction</a>”​</span>
												</label>
											</div>
											<div class="radio">
												<input type="radio" name="jobOption" id="new-job" value="new-job"></input>
												<label for="new-job">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="radio-text"> or write your own below:</span>
												</label>
											</div>
										</div>
										<textarea placeholder="Write here your Bid introduction" class="form-control comments-area" rows="4"></textarea>
										<button type="button" class="btn btn-blue btn-bold">Save</button>
									</div>	
									<hr/>
									<div class="form-block">
										<div class="form-block-header">
											<div class="form-block-title">
												Skill Test-Job’s Sample for free​
											</div>
										</div>
										<div class="work-additional clearfix">
											<button class="btn del-btn icon-btn">
												<span class="icon icon-garbage"></span>
											</button>
											<div class="row">
												<div class="col-xs-8">
													<span class="title">
														2 Working Hours
													</span>
												</div>
												<div class="col-xs-4 btn-wrapper">
													<span class="btn btn-orange btn-bold">Free</span>
												</div>
												<div class="col-xs-12">
													<span class="text">
														Lorem ipsum dolor sit amet, consecvtetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
													</span>
												</div>
											</div>
										</div>
										<div class="radio-block">
											<div class="radio">
												<input type="radio" name="new-bid-test-option" id="new-bid-testyes" value="new-bid-testyes" checked=""></input>
												<label for="new-bid-testyes">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="radio-text">Agree for Job Sample terms ​</span>
												</label>
											</div>
											<div class="radio">
												<input type="radio" name="new-bid-test-option" id="new-bid-testno" value="new-bid-testno"></input>
												<label for="new-bid-testno">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="radio-text">​Suggest your own below</span>
												</label>
											</div>
										</div>
										<div class="skill-test-block">
											<input type="text" placeholder="Skill test title" class="skill-test-title form-control"></input>
											<textarea placeholder="Describe here what a skill test you willing to do in order to show your skills to the client..​" class="form-control skill-test-descr" rows="4"></textarea>
											<button type="button" class="btn btn-blue btn-bold">Save</button>
										</div>
										<button type="button" class="btn btn-blue-border btn-bold btn-blue-hover btn-add-skill-test">+ Add more skill test you willing to do for free</button>
									</div>
									<hr/><div class="form-block">
										<div class="form-block-header">
											<div class="form-block-title">
												Price
											</div>
										</div>
										<div class="radio-block">
											<div class="radio">
												<input type="radio" name="new-bid-price" id="new-bid-price-1" value="new-bid-price-1" checked=""></input>
												<label for="new-bid-price-1">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="radio-text">Agree for job price​</span>
												</label>
											</div>
											<div class="radio">
												<input type="radio" name="new-bid-price" id="new-bid-price-2" value="new-bid-price-2" checked=""></input>
												<label for="new-bid-price-2">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="radio-text">Write your own</span>
													<span class="job-payment-input-wrapper">
														<input type="text" value="500" class="form-control"></input>
														$
													</span>

												</label>
											</div>
											<div class="radio">
												<input type="radio" name="new-bid-price" id="new-bid-price-3" value="new-bid-price-3"></input>
												<label for="new-bid-price-3">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="radio-text">Still not sure about the price</span>
												</label>
											</div>
										</div>
									</div>
								</div>
								<button class="btn btn-blue btn-bold">Send the Bid</button>
							</div>
							<div class="modal-footer">
								<div class="form-status">
									<span class="checkbox-sqw">
										<span class="icon icon-check-mark"></span>
									</span>
									<span class="text">Bid submitted successfully.</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- SKILL-TEST MODAL --> */}
				<div class="modal fade bid-modals modals" id="skill-test-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							</div>
							<div class="modal-body">
								<div class="new-bid-form bid-form">
									<div class="form-title flexbox">
										<div>Start skill-test with </div>
										<div class="bid-header">
											<div class="photo"></div>
											<div class="info">
												<div class="name blue-color">Anna S.</div>
												<div class="prof">UI Designer</div>
											</div>
										</div>
									</div>
									<div class="form-block">
										<div class="form-block-header">
											<div class="form-block-title">
												Skill Test for free​
											</div>
										</div>
										<div class="work-additional clearfix">
											<button class="btn del-btn icon-btn">
												<span class="icon icon-garbage"></span>
											</button>
											<div class="row">
												<div class="col-xs-8">
													<span class="title">
														2 Working Hours
													</span>
												</div>
												<div class="col-xs-4 btn-wrapper">
													<span class="btn btn-orange btn-bold">Free</span>
												</div>
												<div class="col-xs-12">
													<span class="text">
														Lorem ipsum dolor sit amet, consecvtetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
													</span>
												</div>
											</div>
										</div>
										<div class="radio-block">
											<div class="radio">
												<input type="radio" name="skill-test-option" id="skill-test-yes" value="skill-test-yes" checked=""></input>
												<label for="skill-test-yes">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="radio-text">Agree for Skill Test terms ​</span>
												</label>
											</div>
											<div class="radio">
												<input type="radio" name="skill-test-option" id="skill-test-no" value="skill-test-no"></input>
												<label for="skill-test-no">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="radio-text">​Suggest your own below</span>
												</label>
											</div>
										</div>
										<div class="skill-test-block">
											<input type="text" placeholder="Skill test title" class="skill-test-title form-control"></input>
											<textarea placeholder="Describe here what a skill test you willing to do in order to show your skills to the client..​" class="form-control skill-test-descr" rows="4"></textarea>
											<button type="button" class="btn btn-blue btn-bold">Start Skilll test</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="modal fade bid-modals modals" id="add-milestone" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							</div>
							<div class="modal-body">
								<div class="new-bid-form bid-form">
									<div class="form-title">
										Add milestone for the  job <span class="job-title blue-color">“Transform PSD’s to web-pages”</span>
									</div>
									<div class="form-block">
										<div class="job-title-block">
											Title
											<input type="text" placeholder="Write Milestone Title" class="job-title form-control"></input>
											Description
											<textarea placeholder="Write here your Milestone description " class="form-control job-descr" rows="4"></textarea>
										</div>
									</div>	
									<hr/>
									<div class="form-block padding-bottom-none">
											<div class="form-block-header">
												<div class="form-block-title">
													Job Payment
												</div>
											</div>
											<div class="radio-block">
												<p>Would like to do a skill test and get a sample of work for free before you pay money ?​ It will be a condition to get the job.​</p>
												<div class="radio">
													<input type="radio" name="job-payment" id="fixed-payment" value="fixed-payment" checked></input>
													<label for="fixed-payment">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">Fixed Price</span>
													</label>
												</div>
												<div class="radio">
													<input type="radio" name="job-payment" id="hourly-payment" value="hourly-payment"></input>
													<label for="hourly-payment">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">Hourly</span>
														<span class="job-payment-input-wrapper">
															<input type="text" value="20" class="form-control"></input>
															$ / hour
														</span>
													</label>
												</div>
											</div>
										</div>
										<div class="form-block padding-bottom-none">
											<div class="form-block-header">
												<div class="form-block-title">
													Job Price
												</div>
											</div>
											<div class="job-price-input-wrapper">
												<input class="form-control" type="text" value="500"></input> <b>$</b>
												<p class="small">Enter here how much you think it should cost you..</p>
											</div>
										</div>
										<div class="form-block padding-bottom-none">
											<div class="form-block-header">
												<div class="form-block-title">
													Agreed time
												</div>
											</div>
											<div class="job-price-input-wrapper">
												<input class="form-control" type="text" value="500"></input> <b>hours</b>
											</div>
										</div>
										<div class="form-block">
											<div class="form-block-header">
												<div class="form-block-title">
													Tip
												</div>
											</div>
											<div class="job-price-input-wrapper">
												<input class="form-control" type="text" value="500"></input> <b>%</b>
											</div>
										</div>
								</div>
								<button class="btn btn-blue btn-bold">Add Milestone</button>
							</div>
							<div class="modal-footer">
								<div class="form-status">
									<span class="checkbox-sqw">
										<span class="icon icon-check-mark"></span>
									</span>
									<span class="text">Milestone added successfully.</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- my jobs page modals END--> */}

				{/* <!-- my conversations page modals START--> */}

				<div class="modal fade bid-modals modals hire-bid-modal" id="hire-bid-modal-acception" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							</div>
							<div class="modal-body">
								<div class="hire-bid-modal-content flexbox">
									<div class="bid-photo-block">
										<div class="bid-photo bg-cover circul-shape">
											<i class="notif"></i>
										</div>
										<div class="bid-name blue-color">Philip Seamor</div>
										<div class="bid-proff">Teacher</div>
									</div>
									<div class="bid-hire-form bid-form">
										<div class="form-title blue-color">
											Transform PSD’s to web-pages
										</div>
										<div class="form-block">
											<div class="radio-block">
												<div class="radio">
													<input type="radio" name="jobOption" id="exit-job" value="exit-job" checked="checked" readonly></input>
													<label for="exit-job">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">Use Exisiting Job</span>
													</label>
												</div>
												<div class="radio">
													<input type="radio" name="jobOption" id="new-job" value="new-job" readonly></input>
													<label for="new-job">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">Use Different Job title​</span>
													</label>
												</div>
											</div>
											<div class="job-title-block">
												<input type="text" placeholder="Job Title" class="job-title form-control" readonly></input>
												<textarea placeholder="Job Description" class="form-control job-descr" rows="4" readonly></textarea>
											</div>
										</div>	
										<hr/>
										<div class="form-block">
											<div class="form-block-header flexbox justify-space-between">
												<div class="form-block-title">
													Documents(Optional)
												</div>
												<div class="form-block-btn">
													<button type="button" class="btn btn-blue btn-bold">Add Files</button>
												</div>
											</div>
											<div class="files-list">
												<div class="files-item flexbox justify-space-start">
													<div class="file-icon">
														<span class="icon icon-icon blue-color"></span>
													</div>
													<div class="file-title">
														<div class="file-name">File.file</div>
													</div>
													<button type="button" class="icon-btn">
														<span class="icon icon-garbage"></span>
													</button>
												</div>
												<div class="files-item flexbox justify-space-start">
													<div class="file-icon">
														<span class="icon icon-icon blue-color"></span>
													</div>
													<div class="file-title">
														<div class="file-name">Picture.png</div>
													</div>
													<button type="button" class="icon-btn">
														<span class="icon icon-garbage"></span>
													</button>
												</div>
											</div>
										</div>
										<hr/>
										<div class="form-block">
											<div class="form-block-header">
												<div class="form-block-title">
													Skill Test-Job’s Sample for free​
												</div>
											</div>
											<div class="radio-block">
												<p>Would like to do a skill test and get a sample of work for free before you pay money ?​ It will be a condition to get the job.​</p>
												<div class="radio">
													<input type="radio" name="test-option" id="test-yes" value="test-yes" checked readonly></input>
													<label for="test-yes">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">Yes</span>
													</label>
												</div>
												<div class="radio">
													<input type="radio" name="test-option" id="test-no" value="test-no" readonly></input>
													<label for="test-no">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">No</span>
													</label>
												</div>
											</div>
											<div class="skill-test-block">
												<input type="text" placeholder="Skill test title" class="skill-test-title form-control" readonly></input>
												<textarea placeholder="Describe here what you want the talent to do as a skill test.." class="form-control skill-test-descr" rows="4" readonly></textarea>
												<button type="button" class="btn btn-blue btn-bold">Save skill test</button>
											</div>
										</div>
										<hr/>
										<div class="form-block padding-bottom-none">
											<div class="form-block-header">
												<div class="form-block-title">
													Job Payment
												</div>
											</div>
											<div class="radio-block">
												<p>Would like to do a skill test and get a sample of work for free before you pay money ?​ It will be a condition to get the job.​</p>
												<div class="radio">
													<input type="radio" name="job-payment" id="fixed-payment" value="fixed-payment" checked readonly></input>
													<label for="fixed-payment">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">Fixed Price</span>
													</label>
												</div>
												<div class="radio">
													<input type="radio" name="job-payment" id="hourly-payment" value="hourly-payment" readonly></input>
													<label for="hourly-payment">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">Hourly</span>
														<span class="job-payment-input-wrapper">
															<input type="text" value="20" class="form-control" readonly></input>
															$ / hour
														</span>
													</label>
												</div>
											</div>
										</div>
										<div class="form-block">
											<div class="form-block-header">
												<div class="form-block-title">
													Job Price
												</div>
											</div>
											<div class="job-price-input-wrapper">
												<input class="form-control" type="text" value="500" readonly></input> $
												<p class="small">Enter here how much you think it should cost you..</p>
											</div>
										</div>
										<hr/>
										<div class="form-block padding-bottom-none job-time-block">
											<div class="form-block-header">
												<div class="form-block-title">
													Estimated time to complete the Job
												</div>
											</div>
											<div class="btn-group">
												<button class="btn btn-bg-transparent">
													<div class="my-select-box">
															<span class="my-select-result">
																<span class="text">3</span> 
																<span class="caret"></span>
															</span>
															<div class="my-select-options">
																<div class="radio-block">
																<div class="radio">
																	<input type="radio" name="numb-options" id="1-term" value="1-term" checked readonly></input>
																	<label for="1-term">
																		<span class="radio-text">1</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="2-term" value="2-term" checked readonly></input>
																	<label for="2-term">
																		<span class="radio-text">2</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="3-term" value="3-term" checked readonly></input>
																	<label for="3-term">
																		<span class="radio-text">3</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="4-term" value="4-term" checked readonly></input>
																	<label for="4-term">
																		<span class="radio-text">4</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="5-term" value="5-term" checked readonly></input>
																	<label for="5-term">
																		<span class="radio-text">5</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="6-term" value="6-term" checked readonly></input>
																	<label for="6-term">
																		<span class="radio-text">6</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="7-term" value="7-term" checked readonly/>
																	<label for="7-term">
																		<span class="radio-text">7</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="8-term" value="8-term" checked readonly/>
																	<label for="8-term">
																		<span class="radio-text">8</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="9-term" value="9-term" checked readonly/>
																	<label for="9-term">
																		<span class="radio-text">9</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="10-term" value="10-term" readonly/>
																	<label for="10-term">
																		<span class="radio-text">10</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="11-term" value="11-term" readonly/>
																	<label for="11-term">
																		<span class="radio-text"> 11</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="numb-options" id="12-term" value="12-term" readonly/>
																	<label for="12-term">
																		<span class="radio-text">12</span>
																	</label>
																</div>
															</div>	
															</div>
														</div>
													</button>
													<button class="btn btn-bg-transparent">
														<div class="my-select-box">
															<span class="my-select-result">
																<span class="text">Week</span> 
																<span class="caret"></span>
															</span>
															<div class="my-select-options">
																<div class="radio-block">
																<div class="radio">
																	<input type="radio" name="period-options" id="d-term" value="d-term" checked readonly/>
																	<label for="d-term">
																		<span class="radio-text">Day</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="period-options" id="w-term" value="w-term" readonly/>
																	<label for="w-term">
																		<span class="radio-text">Week</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="period-options" id="m-term" value="m-term" readonly/>
																	<label for="m-term">
																		<span class="radio-text"> Month</span>
																	</label>
																</div>
																<div class="radio">
																	<input type="radio" name="period-options" id="y-term" value="y-term" readonly/>
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
										<div class="form-block padding-bottom-none">
											<div class="form-block-header">
												<div class="form-block-title">
													Talent Commitment
												</div>
											</div>
											<div class="radio-block">
												<div class="radio">
													<input type="radio" name="commitment-option" id="later" value="later" checked readonly/>
													<label for="later">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">I will Decide Later</span>
													</label>
												</div>
												<div class="radio">
													<input type="radio" name="commitment-option" id="10hrs" value="10hrs" readonly/>
													<label for="10hrs">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">10 hrs per week</span>
													</label>
												</div>
												<div class="radio">
													<input type="radio" name="commitment-option" id="30hrs" value="30hrs" readonly/>
													<label for="30hrs">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">Up to 30 hrs per week</span>
													</label>
												</div>
												<div class="radio">
													<input type="radio" name="commitment-option" id="30morehrs" value="30morehrs" readonly/>
													<label for="30morehrs">
														<span class="checkbox-circle">
															<span class="icon icon-check-mark"></span>
														</span>
														<span class="radio-text">More than 30 hrs per week</span>
													</label>
												</div>
											</div>
										</div>
										<div class="form-block padding-bottom-none">
											<div class="form-block-header">
												<div class="form-block-title">
													Contract General Notes
												</div>
											</div>
											<div>
												<textarea class="form-control comments-area" placeholder="Enter here Comments for the contract" readonly></textarea>
											</div>
										</div>
										<div class="form-block">
											<div class="form-block-header">
												<div class="form-block-title">
													Finish
												</div>
											</div>
											<div class="checkbox-block">
												<input type="checkbox" id="terms-agree" readonly/>
												<label for="terms-agree">
													<span class="checkbox-circle">
														<span class="icon icon-check-mark"></span>
													</span>
													<span class="checkbox-text">I agree for the terms of use</span>
												</label>
											</div>
										</div>
										<div class="bid-modals-btn-footer">
											<button class="btn btn-blue btn-bold">I accept</button>
											<button class="btn btn-gray btn-bold">Reject</button>
										</div>
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<div class="form-status">
									<span class="checkbox-sqw">
										<span class="icon icon-check-mark"></span>
									</span>
									<span class="text">Job contract submitted successfully. Waiting for talent for approval</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- my conversations page modals END--> */}

				{/* <!-- my media page modals START--> */}

				<div class="modal fade modals upload-media " id="upload-media" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							</div>
							<div class="modal-body">
								<div class="modal-title blue-color">Add Media</div>
								<div class="modal-form">
									<div class="modal-form-title">Select type of media you want to add</div>
									<div class="flexbox justify-space-between file-type-select">
										<button class="btn btn-blue-hover active">
											<div class="media-block-title">
												<span class="icon icon-picture"></span>
												<span class="text">My Images</span>
											</div>
										</button>
										<button class="btn btn-blue-hover">
											<div class="media-block-title">
												<span class="icon icon-music-note"></span>
												<span class="text">My Audio</span>
											</div>
										</button>
										<button class="btn btn-blue-hover">
											<div class="media-block-title">
												<span class="icon icon-file-icon"></span>
												<span class="text">My Files</span>
											</div>
										</button>
									</div>
									<div class="sqw-upload-btn flexbox flex-vertical  justify-space-center">
										<span class="icon icon-upload"></span>
										<button class="btn btn-bold btn-blue">Upload</button>
									</div>
									<div class="post-job-inputs">
										<input type="text" placeholder="File Title" class="job-title form-control"/>
										<textarea placeholder="Description" class="form-control job-descr" rows="4"></textarea>
									</div>
								</div>
								<div class="modal-btns">
									<button class="btn btn-bold btn-blue">Upload</button>
									<button class="btn btn-bold btn-gray">Cancel</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- my media page modals END--> */}

				{/* <!-- my accounts page modals START--> */}

				<div class="modal fade modals invoice-modal" id="invoice-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header flexbox justify-space-between">
								<div class="modal-title">
									<span class="inv-id">#123456 Invoice</span>
									<button class="btn btn-bg-transparent">
										<span class="icon icon-download2"></span>
									</button>
								</div>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							</div>
							<div class="modal-body">
								<div class="invoice-header flexbox justify-space-between">
									<div class="logo">
										<img src="images/logo.png" height="39" width="auto" alt=''/>
									</div>
									<div class="doc-type">invoice</div>
								</div>
								<div class="invoice-table flex-table">
									<div class="flex-table-row">
										<div class="flex-table-cell flex-table-left">
											<div class="adress-block adress-block-from">
												<div class="adress-block-title">From</div>
												<div class="adress-block-content">
													<p>Upwork Glabal Inc.</p>
													<p>441 Logue Ave.</p>
													<p>Monuntain View, CA 94043</p>
													<p>USA</p>
													<p>VAT ID: EU528002406</p>
												</div>
											</div>
											<div class="adress-block adress-block-to">
												<div class="adress-block-title">BILL TO:</div>
												<div class="adress-block-content">
													<p>Attn: Arina Kurbatova</p>
													<p>Friedleina 29/4 Krakow</p>
													<p>Krakow, 30 009</p>
													<p>Poland</p>
												</div>
											</div>
										</div>
										<div class="flex-table-cell flex-table-right">
											<div class="panel invoice-data">
												<div class="display-table">
													<div class="display-table-tr">
														<div class="display-table-th">INVOICE #</div>
														<div class="display-table-td">T100787809</div>
													</div>
													<div class="display-table-tr">
														<div class="display-table-th">DATE</div>
														<div class="display-table-td">Sep 18, 2016</div>
													</div>
													<div class="display-table-tr">
														<div class="display-table-th">DUE DATE</div>
														<div class="display-table-td">Sep 18, 2016</div>
													</div>
													<div class="display-table-tr">
														<div class="display-table-th">TOTAL AMOUNT</div>
														<div class="display-table-td">$38,95</div>
													</div>
													<div class="display-table-tr">
														<div class="display-table-th">TOTAL DUE</div>
														<div class="display-table-td">$38,95</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="flex-table-row">
										<div class="flex-table-cell flex-table-left"><b>Description / Memo</b></div>
										<div class="flex-table-cell flex-table-right"><b>Amount</b></div>
									</div>
									<div class="flex-table-row">
										<div class="flex-table-cell inv-descr flex-table-left">
											<div class="display-table">
												<div class="display-table-tr">
													<div class="display-table-th">CONTRACT ID:</div>
													<div class="display-table-td">16592412</div>
												</div>
												<div class="display-table-tr">
													<div class="display-table-th">CONTRACT TITLE:</div>
													<div class="display-table-td">UI/UX Design</div>
												</div>
												<div class="display-table-tr">
													<div class="display-table-th">CLIENT:</div>
													<div class="display-table-td">Tamir Taacov</div>
												</div>
												<div class="display-table-tr">
													<div class="display-table-th">AMOUNT:</div>
													<div class="display-table-td">$316.67</div>
												</div>
												<div class="display-table-tr">
													<div class="display-table-th">NOTES:</div>
													<div class="display-table-td">Invoice from Upwork for T100787801</div>
												</div>
											</div>
										</div>
										<div class="flex-table-cell inv-amount flex-table-right">$31,67</div>
									</div>
									<div class="flex-table-row invoice-table-footer">
										<div class="flex-table-cell flex-table-right inv-amount-total">
											Total Amount:
											<span class="total-amount">$31,67</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- my accounts page modals END--> */}


			</div> 
      {/* <!--content End--> */}
    	</div>
	
	
	
		// <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		// <script src="js/jquery-2.1.1.min.js"></script>
		// <script src="bootstrap/js/bootstrap.min.js"></script>
		
	
		// <script src="js/main.js"></script>
		
   
    )
  }
}


export default Skills;

