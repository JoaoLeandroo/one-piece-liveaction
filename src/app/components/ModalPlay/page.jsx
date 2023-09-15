"use client"

import { useState } from 'react'
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'

export default function ModalPlay(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = useState('md')

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }
  const tamanho = 'xl'

  return (
    <>
      {
        <Button
        onClick={() => handleSizeClick(tamanho)}
        key={size}
        m={4}
        color={'white'}
        background={'blue.900'}
        >
            {props.button}
        </Button>
      }

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent h="400px" p={6}>
          <ModalCloseButton />
          <ModalBody>
            <div className='h-[300px]'>
              {
                <iframe 
                className='w-full h-full'
                src="https://www.youtube.com/embed/YC8SLpnxsL4?si=PcNmWbxRRYOoUvUy" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
                </iframe>
              }
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}