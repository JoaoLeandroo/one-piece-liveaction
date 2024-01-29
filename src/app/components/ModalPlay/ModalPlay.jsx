"use client"

import { useState } from 'react'
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export default function ModalPlay(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = useState('md')

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }
  const tamanho = ''

  return (
    <>
      {
        <button 
        className="mt-2 transition-all duration-300 ease-in hover:scale-125 rounded-full animate-pulse cursor-pointer"
        onClick={() => handleSizeClick(tamanho)}>
          {props.button}
        </button>
      }

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent h="500px" w="800px" p={1} bg={'blackAlpha.400'}>
          <ModalCloseButton bg={'red.500'} color={'white'}/>
          <ModalBody>
            <div className='h-full'>
              {
                <iframe 
                className='w-full h-full rounded-xl'
                src="https://www.youtube.com/embed/YC8SLpnxsL4?si=PcNmWbxRRYOoUvUy" 
                title="Trailer LiveAction One Piece - Oficial" 
                frameborder="0" 
                allowfullscreen>
                </iframe>
              }
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}