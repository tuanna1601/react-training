import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.el = document.createElement('div');
    this.contentRef = React.createRef();
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
    document.addEventListener('click', this.closeModal);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    document.removeEventListener('click', this.closeModal);
  }

  closeModal = e => {
    if (this.contentRef.current.contains(e.target)) {
      return;
    }
    this.props.onClose();
  };

  render() {
    const modal = ReactDOM.createPortal(
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          ref={this.contentRef}
          style={{
            width: '300px',
            backgroundColor: 'white',
            padding: '15px'
          }}
        >
          {this.props.children}
        </div>
      </div>,
      this.el
    );
    return modal;
  }
}
