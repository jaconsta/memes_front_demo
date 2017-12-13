const initialRawImages = [
  isFetching: false,
  items: [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1495389564984-b1530db9afc2?auto=format&fit=crop&w=350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
      placeholder: 'parking lot'
    }, {
      id: 2,
      url: 'https://images.unsplash.com/photo-1489343511429-5482f78c15cf?auto=format&fit=crop&w=350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
      placeholder: 'bricks'
    }
  ]
]

export default (state = initialRawImages, action) => {
  return state
}
