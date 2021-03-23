import React, {useState, useEffect} from 'react'
import {Course} from "../models/course.model";

export const CreateCourseModal = ({courses, selectedCourse, editSelectedCourse, setCourses}) => {

    const [course, setCourse] = useState(new Course())

    useEffect(() => {
        setCourse(selectedCourse);
    }, [selectedCourse]);

    const closeModal = () => {
        const el = document.getElementById('createCourse')

        document.getElementById("backdrop").style.display = "none";
        el.style.display = 'none'
        el.addClass('fade')

    }

    return (
        <>
            <div className="modal fade show" role="dialog" tabIndex="-1" id="createCourse">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header"><h4 className="modal-title">Редактировать курсы</h4>
                            <button type="button" className="close" aria-label="Close" onClick={closeModal}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                                <div className="form-row">
                                    <div className="col-12 col">
                                        <div className="mb-3">
                                            <div className="form-group">
                                                <label htmlFor="course_name">Название курса:</label>
                                                <input name="course_name" required="" id="course_name"
                                                       type="text"
                                                       className="is-untouched is-pristine av-invalid form-control"
                                                       value={course ? course.name : ""}
                                                       onChange={e=>setCourse({...course, name: e.target.value})}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col">
                                        <div className="mb-3">
                                            <div className="form-group">
                                                <label htmlFor="course_description">Описание курса:</label>
                                                <textarea name="course_description" required="" id="course_description"
                                                          minLength={225}
                                                          rows={4}
                                                          value={course ? course.description : ""}
                                                          onChange={e=>setCourse({...course, description: e.target.value})}
                                                          className="form-control">
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="text-end">
                                            <button type="button" className="btn btn-light me-2"
                                                    onClick={closeModal}>Close
                                            </button>
                                            <button
                                                className="btn btn-success save-event"
                                                onClick={e => {
                                                    editSelectedCourse(course)
                                                        .then(r => setCourses(courses
                                                            .map(c => c.id === selectedCourse.id
                                                            ? course
                                                            : c)
                                                        ));
                                                    closeModal();
                                                }}>Save</button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="backdrop" className="modal-backdrop fade show" style={{display: 'none'}}/>
        </>
    )
}
