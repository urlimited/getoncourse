import React, {useEffect, useState} from "react";


export const SingleReportFormComponent = ({products, setCurrentProduct}) => {
    const [search, setSearch] = useState("");

    return (
        <div className="card">
            <div className="card-header header-elements-inline">
                <p className="card-title mt-heading">Reports list</p>
                <div className="header-elements">
                    <div className="list-icons">
                        <a className="list-icons-item" data-action="collapse"/>
                        <a className="list-icons-item" data-action="reload"/>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                    <li className="nav-item"><a href="#bottom-justified-tab1" className="nav-link active"
                                                data-toggle="tab">Модуль 1</a></li>
                    <li className="nav-item"><a href="#bottom-justified-tab2" className="nav-link"
                                                data-toggle="tab">Модуль 2</a></li>
                    <li className="nav-item"><a href="#bottom-justified-tab2" className="nav-link"
                                                data-toggle="tab">Модуль 3</a></li>
                    <li className="nav-item"><a href="#bottom-justified-tab2" className="nav-link"
                                                data-toggle="tab">Модуль 4</a></li>
                    <li className="nav-item"><a href="#bottom-justified-tab2" className="nav-link"
                                                data-toggle="tab">Модуль 5</a></li>
                </ul>

                <div className="tab-content mt-5">
                    <div className="tab-pane fade active show" id="bottom-justified-tab1">
                        <br/>
                        <br/>
                        <div>
                            <div className="row">
                                <div className="col-md-5">
                                    <p>Question to self assessment 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-1"><input type="radio" name="q1"/></div>
                                        <div className="col-md-5"><p>Answer 1 for the self-assessment 1</p></div>
                                        <div className="col-md-6"><textarea className="form-control" placeholder="Your clarification for" /></div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-1"><input type="radio" name="q1"/></div>
                                        <div className="col-md-5"><p>Answer 2 for the self-assessment 1</p></div>
                                        <div className="col-md-6"><textarea className="form-control" placeholder="Your clarification for" /></div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-1"><input type="radio" name="q1"/></div>
                                        <div className="col-md-5"><p>Answer 3 for the self-assessment 1</p></div>
                                        <div className="col-md-6"><textarea className="form-control" placeholder="Your clarification for" /></div>
                                    </div>
                                </div>
                            </div>

                            <hr/>

                            <div className="row">
                                <div className="col-md-5">
                                    <p>Question to self assessment 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-1"><input type="radio" name="q1"/></div>
                                        <div className="col-md-5"><p>Answer 1 for the self-assessment 1</p></div>
                                        <div className="col-md-6"><textarea className="form-control" placeholder="Your clarification for" /></div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-1"><input type="radio" name="q1"/></div>
                                        <div className="col-md-5"><p>Answer 2 for the self-assessment 1</p></div>
                                        <div className="col-md-6"><textarea className="form-control" placeholder="Your clarification for" /></div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-1"><input type="radio" name="q1"/></div>
                                        <div className="col-md-5"><p>Answer 3 for the self-assessment 1</p></div>
                                        <div className="col-md-6"><textarea className="form-control" placeholder="Your clarification for" /></div>
                                    </div>
                                </div>
                            </div>

                            <hr/>

                            <div className="row">
                                <div className="col-md-5">
                                    <p>Question to self assessment 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-1"><input type="radio" name="q1"/></div>
                                        <div className="col-md-5"><p>Answer 1 for the self-assessment 1</p></div>
                                        <div className="col-md-6"><textarea className="form-control" placeholder="Your clarification for" /></div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-1"><input type="radio" name="q1"/></div>
                                        <div className="col-md-5"><p>Answer 2 for the self-assessment 1</p></div>
                                        <div className="col-md-6"><textarea className="form-control" placeholder="Your clarification for" /></div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-1"><input type="radio" name="q1"/></div>
                                        <div className="col-md-5"><p>Answer 3 for the self-assessment 1</p></div>
                                        <div className="col-md-6"><textarea className="form-control" placeholder="Your clarification for" /></div>
                                    </div>
                                </div>
                            </div>

                            <hr/>

                            <div className="row">
                                <div className="col-md-5">
                                    <p>Question to self assessment 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-1"><input type="radio" name="q1"/></div>
                                        <div className="col-md-5"><p>Answer 1 for the self-assessment 1</p></div>
                                        <div className="col-md-6"><textarea className="form-control" placeholder="Your clarification for" /></div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-1"><input type="radio" name="q1"/></div>
                                        <div className="col-md-5"><p>Answer 2 for the self-assessment 1</p></div>
                                        <div className="col-md-6"><textarea className="form-control" placeholder="Your clarification for" /></div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-1"><input type="radio" name="q1"/></div>
                                        <div className="col-md-5"><p>Answer 3 for the self-assessment 1</p></div>
                                        <div className="col-md-6"><textarea className="form-control" placeholder="Your clarification for" /></div>
                                    </div>
                                </div>
                            </div>

                            <hr/>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="bottom-justified-tab2">
                        Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid laeggin.
                    </div>

                    <div className="tab-pane fade" id="bottom-justified-tab3">
                        DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg whatever.
                    </div>

                    <div className="tab-pane fade" id="bottom-justified-tab4">
                        Aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthet.
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="row">
                    <div className="col-md-2 offset-8"><button className="btn btn-outline-info form-control">Save</button></div>
                    <div className="col-md-2"><button className="btn btn-primary form-control">Submit</button></div>
                </div>
            </div>

        </div>
    )
}