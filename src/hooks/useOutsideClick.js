import React, { useEffect } from 'react'

function useOutsideClick(refModal, isOpen, setOpen) {
  useEffect(() => {
    const handleModal = (event) => {
      if (refModal.current && !refModal.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleModal);
    }
    return () => {
      document.removeEventListener("mousedown", handleModal);
    };
  }, [isOpen, setOpen]);
}

export default useOutsideClick