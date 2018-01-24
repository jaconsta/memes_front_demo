/*
 * action types
 */
export const SELECT_IMAGE = 'SELECT_IMAGE'
export const ADD_MEME = 'ADD_MEME'
/*
 * action creators
 */
export function selectImage(imageId) {
  return { type: SELECT_IMAGE, imageId }
}

export function addMeme(id, url) {
  return {
    type: ADD_MEME,
    id,
    url,
    createdAt: Date.now()
  }
}
