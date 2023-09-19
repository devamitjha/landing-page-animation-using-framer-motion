// import React from 'react';

// class Modal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: false,
//     };
//   }

//   openModal = () => {
//     this.setState({ isOpen: true });
//   };

//   closeModal = () => {
//     this.setState({ isOpen: false });
//   };

//   render() {
//     return (
//       <>
//         <button className="modalbtn" onClick={this.openModal}><span></span><span></span><span></span></button>
//         {this.state.isOpen && (
//           <dialog id="myModal">
//             <h2>Modal Title</h2>
//             <p>Modal Content</p>
//             <button onClick={this.closeModal}>Close</button>
//           </dialog>
//         )}
//       </>
//     );
//   }
// }

// export default Modal;

import React from "react";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return (
    <>
      {children}
      <button onClick={onClose}>close</button>
    </>
  );
}
