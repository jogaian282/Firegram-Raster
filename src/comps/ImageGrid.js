import React from 'react';
import useFireStore from '../hooks/useFireStore';
import { motion } from 'framer-motion';

function ImageGrid({setSelectedImage}) {

    const {fileList} = useFireStore('images');

    return (
        <div className="img-grid">
            { fileList && fileList.map(doc => {
                return (
                    <motion.div layout className="img-wrap" onClick={() => setSelectedImage(doc.url)} 
                        key={doc.id} whileHover={{ opacity: 1}}>
                        <motion.img src={doc.url} alt={doc.id} 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1}}/>
                    </motion.div>
                )
              })
            }
        </div>
    )
}

export default ImageGrid
