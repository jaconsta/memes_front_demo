import { ADD_MEME } from '../actions/actions'

const initialMemes = {
    isFetching: false,
    items: [
      {
        id: 1,
        url: 'https://vignette.wikia.nocookie.net/glee/images/1/17/Best-of-really-high-guy-meme-funny1.jpg/revision/latest?cb=20140303201854',
        createdAt: 1513115385890
      }, {
        id: 2,
        url: 'https://fthmb.tqn.com/8cdFIfAhwNAdNAJelEebxEhrmTI=/735x0/success-56a9fd1f3df78cf772abee09.jpg',
        createdAt: 1513115385890
      }, {
        id: 3,
        url: 'https://gcdn.emol.cl/tv-mexicana/files/2015/08/2163179.jpg',
        createdAt: 1513115385890
      }
    ]
}

export default (state = initialMemes, action) => {
  switch (action.type) {
    case ADD_MEME:
      return Object.assign({}, state, {
        items: [
          ...state.items,
          {
            id: action.id,
            url: action.url,
            createdAt: action.createdAt
          }
        ]
      })
      break;
    default:
      return state
  }
}
