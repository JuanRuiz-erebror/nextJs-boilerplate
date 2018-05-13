import React from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, ModalFooter } from 'reactstrap'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'
import styled from 'styled-components'

const Left = styled(Modal)`
    position:absolute;
    top:0;
    left:0;
    margin:0;
`;

class ModalPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            modal: props.open,
            child: props.children.type
        }   
        this.toggle = this.toggle.bind(this);
        this.updateChild = this.updateChild.bind(this);
    }

    toggle() {

        this.setState({ modal: !this.state.modal });

    }

  
    // Modal will open when receive props from withLayout (fired in Navbar)
    // children.type for transform object in React component
    static getDerivedStateFromProps(nextProps, prevState) {
        return { 
            modal: nextProps.open,
            child: nextProps.children.type
        }

    }

    // Fired from children (util for form login/reg) -- DEPRECATED!
    updateChild = child => e => {
        e.preventDefault()
        this.setState({ child: child })
    }

    // type of modal
    components = {
        left: Left,
        default: Modal
    }

    render() {
        const Tag = this.components[this.props.tag || 'default']
        const Child = this.state.child
        console.log('MODAL', this.props,this.state)
        return (
            <div>
                <Tag fade={false} isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}></ModalHeader>
                    <ModalBody>
                        <Child 
                            initialTypeForm={this.props.initialTypeForm}
                            isOpen={this.state.modal}
                            toggle={this.toggle}
                        />
                    </ModalBody>
                </Tag>
            </div>
        )
    }
}

ModalPage.propTypes = {
  tag:PropTypes.string,
  open: PropTypes.bool.isRequired
}

export default ModalPage;