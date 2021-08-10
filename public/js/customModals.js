// login modal
const loginIconId = document.getElementById('loginModalIcon')
const loginModalId = document.getElementById('loginModal')
const loginModal = new bootstrap.Modal(loginModalId) // create modal
const modalLoginX = document.getElementById('closeModalLogin')
const loginModalCancel = document.getElementById('cancelLoginModal')

// const hideModalEsc = (e)=>{    
//     if(e.key==="Escape" || e.key === "Esc"){loginModal.hide()}
// }

loginIconId.addEventListener('click',()=>{loginModal.show()}) //show modal

loginModalId.addEventListener('shown.bs.modal',()=>{
    // document.addEventListener('keydown',hideModalEsc) //hide modal when esc pressed
    modalLoginX.addEventListener('click',()=>{loginModal.hide()}) // hide modal when X is clicked
    loginModalCancel.addEventListener('click',()=>{loginModal.hide()}) // hide modal when cancel is clicked
})

// reserve table modal

const reserveTbBtnId = document.getElementById('reserveTbBtn')
const reserveTbModalId = document.getElementById('reserveTableModal')
const reserveModal = new bootstrap.Modal(reserveTbModalId) // create modal
const reserveModalX = document.getElementById('closeModalReserveTb')
const reserveModalCancel = document.getElementById('cancelModal')

reserveTbBtnId.addEventListener('click',()=>{reserveModal.show()}) //show modal

reserveTbModalId.addEventListener('shown.bs.modal',()=>{    
    reserveModalX.addEventListener('click',()=>{reserveModal.hide()}) // hide modal when X is clicked
    reserveModalCancel.addEventListener('click',()=>{reserveModal.hide()}) // hide modal when cancel is clicked
})