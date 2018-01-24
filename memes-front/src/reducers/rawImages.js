import { SELECT_IMAGE } from '../actions/actions'

const initialRawImages = {
  isFetching: false,
  items: [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1495389564984-b1530db9afc2?auto=format&fit=crop&w=350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
      placeholder: 'parking lot',
      selected: false
    }, {
      id: 2,
      url: 'https://images.unsplash.com/photo-1489343511429-5482f78c15cf?auto=format&fit=crop&w=350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
      placeholder: 'bricks',
      selected: false
    }
  ]
}



export default (state = initialRawImages, action) => {
  switch (action.type) {
    case SELECT_IMAGE:
      return Object.assign({}, state, {
        items: state.items.map((image, index) => {
          if (image.id === action.imageId) {
            return Object.assign({}, image, {
              selected: true
            })
          }
          return image
        })
      })
      break;
    default:
      return state
  }
}
