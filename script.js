const showUserList = () => {
  const userList = document.querySelector('.select-modal')

  userList.addEventListener('mouseover', (evt) => {
    const ownerItem = evt.target.closest('.owner-item')
    if (ownerItem) {
      ownerItem.style.backgroundColor='#0366d6'
      ownerItem.style.color='white'
      ownerItem.style.fill='white'
    }
  })

  userList.addEventListener('mouseout', (evt) => {
    const ownerItem = evt.target.closest('.owner-item')
    if (ownerItem) {
      ownerItem.style.backgroundColor='white'
      ownerItem.style.color='#24292e'
      ownerItem.style.fill='#24292e'
    }
  })

  userList.style.display = (window.getComputedStyle(userList).display !== 'block') ? 'block' : 'none'
}

const userSelectHandler = () => {
  const userSelect = document.querySelector('.owner .user')
  userSelect.addEventListener('click', showUserList)
}

document.addEventListener('DOMContentLoaded', userSelectHandler);