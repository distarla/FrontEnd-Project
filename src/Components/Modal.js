import React from "react";

const Modal = (props) => {

    const open = () => { id.modal('show') };

    const close = () => { id.modal('hide') };
    

    return [
        <div class="modal fade" id={props.id} tabindex="-1" role="dialog" aria-labelledby={props.id} aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id={props.titleID}>{props.title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {props.body}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={props.onClick}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    ]
}
export default Modal