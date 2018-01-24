// Actions
import { selectImage, addMeme } from '../actions/actions'


export default (store) => {
  console.log(store.getState())

  store.dispatch(selectImage(2))
  console.log(store.getState())

  const imgUrl = 'https://images.unsplash.com/photo-1489343511429-5482f78c15cf?auto=format&fit=crop&w=350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
  store.dispatch(addMeme(store.getState().memes.items.length, imgUrl))
  console.log(store.getState())

}
