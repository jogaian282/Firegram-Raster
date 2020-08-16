import React from 'react'
import { motion } from 'framer-motion';

function Modal({selectedImage, setSelectedImage}) {

    function closeModal(eventObj) {
        if (eventObj.target.classList.contains('backdrop')) {
            setSelectedImage(null);
        }
    }
    
    return (
        <motion.div className="backdrop" onClick={closeModal}
        initial={{opacity: 0}}
        animate={{opacity: 1}}>
            <motion.img src={selectedImage} alt="modalImage" 
            initial={{ y: "-100vh" }}
            animate={{ y: 0}}/>
        </motion.div>
    )
}

export default Modal
